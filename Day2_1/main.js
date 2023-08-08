var messageBox = document.querySelector("#msg-box");
messageBox.addEventListener("keydown", event => {
    // event.key でイベント情報から押されたキーの情報をとる。
    // JavaScriptでは === で厳密な比較（型情報を意識した比較）が可能
    if(event.key === "Enter") { 
        event.preventDefault(); // デフォルトの改行を打ち消すために呼び出す関数
        sendMessage(); // メッセージを送信する関数の呼び出し。（JavaScriptは結果を返す関数でも結果を受け取らなくて大丈夫）
    }
}, false);

var button = document.querySelector("#btn");
// イベントリスナーが作動させる関数は名前を付けて作った関数を選択することも可能
button.addEventListener("click", sendMessage, false);

// メッセージを送る機能を関数化(buttonのイベントリスナーから切り離した感じ)
// 関数は処理をまとめたもの。結果（戻り値）を返す時には reture を使う。
// 今回はメッセージの送信が成功したか失敗したかを返す機能として作成。
function sendMessage() {
    var text = messageBox.value;
    // 空白のメッセージなら送信せずにfalse（≒失敗）を返す
    if(text === "") return false; // JavaScriptのif文は1行でなら{}なしで書くことが可能

    var messageList = document.querySelector("#msg-list");
    var node = document.createElement("li");
    node.innerHTML = text;
    messageList.appendChild(node);
    messageBox.value = "";
    messageBox.focus();
    return true; // 成功したらtrueを返す
}