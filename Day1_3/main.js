// id="msg-box"のulを取得。これによって初めて部品がプログラムで動くようになる
// また，varは変数という意味の英単語variableの略。C言語などと違い，変数宣言に型名は不要。
// document.querySelector(指定方法)はHTML文書からセレクターで部品を問い合わせるという意味
// タグ名，クラス名，id名で問い合わせが可能（CSSと同じ指定方法）
var messageBox = document.querySelector("#msg-box");
console.log(messageBox); // ちゃんと取得できているかコンソールに表示してみる(実際は不要)

// 送信ボタンも取得してプログラムから使う
var button = document.querySelector("#btn");
console.log(button); // ちゃんと取得できているかコンソールに表示してみる(実際は不要)

// ボタンにクリックしたときに動く処理を追加する。イベントリスナーさんをボタンに追加して実現
button.addEventListener("click", event => {
    var text = messageBox.value; // メッセージボックスに書かれた文章を取得
    console.log(text)
    var messageList = document.querySelector("#msg-list"); // 文章を表示するためのulを取得
    var node = document.createElement("li"); // ulに差し込むための部品（Node）を生成
    node.innerHTML = text; // 生成したNodeに文書情報を書き込む
    messageList.appendChild(node);  // メッセージリストの部品（子要素）として追加
    messageBox.value = ""; // メッセージボックスの値（文章）をリセットしておく
    messageBox.focus(); // 再度入力されることに備えてメッセージボックスにフォーカスを当てなおす
}, false);