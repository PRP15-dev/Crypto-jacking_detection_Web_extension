import sys
import json
import pyshark
import pandas as pd
from sklearn import preprocessing
import xgboost as xgb
import os
import sys
import socket
def handle_message(message):
    bundle_dir = getattr(sys, '_MEIPASS', os.path.abspath(os.path.dirname(__file__)))
    clf_path = os.path.abspath(os.path.join(bundle_dir, "ml/xgb_x_rs_3_18_booster_bin.bin"))
    hostname = socket.gethostname()
    IPAddr = socket.gethostbyname(hostname)
    LOCAL_IP = IPAddr
    LOCAL_IPV6 = 'fe80::a580:6360:f23b:33c3%10'
    feature_col = ["int_time", "pkt_size", "mm_it", "mm_ps", "mstd_it", "mstd_ps"]
    if message["command"] == "start_capture":
        arr = []
        capture = pyshark.LiveCapture(interface="Wi-Fi", bpf_filter='tcp')
        lt = None
        for packet in capture.sniff_continuously(packet_count=60):
            if str(packet.eth.type) == '0x86dd':
                ip = LOCAL_IPV6
                src = packet.ipv6.src
                dst = packet.ipv6.dst
            elif str(packet.eth.type) == '0x0800':
                ip = LOCAL_IP
                src = packet.ip.src
                dst = packet.ip.dst
            size = int(packet.length)
            if src == ip and len(arr) == 0:
                lt = float(packet.sniff_timestamp)
            elif dst == ip and len(arr) == 0:
                if lt is None:
                    lt = float(packet.sniff_timestamp)
                    arr.append({"int_time": 0, "pkt_size": size})
                else:
                    arr.append({"int_time": float(packet.sniff_timestamp) - lt, "pkt_size": size})
                    lt = float(packet.sniff_timestamp)
            elif dst == ip and len(arr) > 0:
                arr.append({"int_time": float(packet.sniff_timestamp) - lt, "pkt_size": size})
                lt = float(packet.sniff_timestamp)
            if len(arr) == 25:
                break
        df = pd.DataFrame(arr)
        df['mm_it'] = df['int_time'].rolling(window=5).mean()
        df['mm_ps'] = df['pkt_size'].rolling(window=5).mean()
        df['mstd_it'] = df['int_time'].rolling(window=5).std()
        df['mstd_ps'] = df['pkt_size'].rolling(window=5).std()
        df.drop(df.index[0:4], inplace=True)
        df.reset_index(drop=True, inplace=True)
        df = df[feature_col]
        scaler = preprocessing.RobustScaler()

        X_arr = scaler.fit_transform(df)
        X = pd.DataFrame(X_arr, columns=feature_col)

        stnd = preprocessing.StandardScaler()

        X_arr = stnd.fit_transform(X)
        X = pd.DataFrame(X_arr, columns=feature_col)
        mod = xgb.XGBClassifier()
        booster = xgb.Booster()
        booster.load_model(clf_path)
        mod._Booster = booster
        predict = list(mod.predict(X))
        temp = 1 if predict.count(1) > 6 else 0
        return {"prediction": list(str(temp))}
    elif message["command"] == "stop_capture":
        capture.close()
        return {"status": "success"}
    else:
        return {"status": "error", "message": "Unknown command"}
while True:
    message_length = sys.stdin.buffer.read(4)
    if not message_length:
        break
    length = int.from_bytes(message_length, byteorder="little")
    message = json.loads(sys.stdin.buffer.read(length).decode("utf-8"))
    response = handle_message({"command": "start_capture"})
    p_json = json.dumps({"command": "capture_Data", "prediction": response}).encode("utf-8")
    sys.stdout.buffer.write(len(p_json).to_bytes(4, byteorder="little"))
    sys.stdout.buffer.write(p_json)
    sys.stdout.buffer.flush()
