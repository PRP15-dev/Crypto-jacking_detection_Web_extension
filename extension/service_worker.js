// const port = chrome.runtime.connectNative("com.my_company.my_application")
// port.postMessage({command: "start_capture"})
// port.onMessage.addListener((message) => {
//     console.log("Received message from native host:", message);
//     if (1) {
//         chrome.runtime.sendMessage({type: "packets", prediction:message.prediction});
//     } else if (message.command == "capture_error") {
//         console.error("Error during packet capture:",message.error);
//     }
// });


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    const port = chrome.runtime.connectNative("com.my_company.my_application")
    if (message.type === "messageFromContent" && message.data == "False") {
      console.log(message.data);
    }
    else if (message.type === "messageFromContent" && message.data == "True"){
        port.postMessage({command: "start_capture"})
        port.onMessage.addListener((message) => {
            console.log("Received message from native host:", message, message.data);
            //if (message.command == "capture_Data") {
            chrome.runtime.sendMessage({type: "packets", prediction:message.prediction});
            //} else if (message.command == "capture_error") {
            //    console.error("Error during packet capture:",message.error);
            //}
        });
        port.onDisconnect.addListener(() => {
            console.log("Disconnected from native host"+ chrome.runtime.lastError.message);
        })  
    }
});