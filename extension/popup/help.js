const helpBtn = document.getElementById("btnHelp");
helpBtn.onclick = function () {
  var newURL = "help.html";
  chrome.tabs.create({
    url: newURL,
  });
};