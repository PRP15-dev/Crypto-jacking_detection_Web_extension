// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "packets") {
      // Process the captured packets
      const packetTableBody = document.getElementById("packet-table-body");
      var pkt_arr = message.prediction.prediction
      function myFunction(packet) {
        var row = packetTableBody.insertRow();
        row.insertCell().innerHTML = packet;
      }
      pkt_arr.forEach(myFunction);
    }
  });

const helpBtn = document.getElementById("btnHelp");
helpBtn.onclick = function () {
  var newURL = "help.html";
  chrome.tabs.create({
    url: newURL,
  });
};
