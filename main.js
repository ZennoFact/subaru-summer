var messageBox = document.querySelector("#msg-box");
var button = document.querySelector("#btn");

button.addEventListener("click", event => {
    var text = messageBox.value;
    var messageList = document.querySelector("#msg-list");
    var node = document.createElement("li");
    node.innerHTML = text;
    messageList.appendChild(node);
    messageBox.value = "";
    messageBox.focus();
}, false);