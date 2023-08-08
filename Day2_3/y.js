// JavaScriptのオブジェクトを使って，ユーザー情報を設定
// キーと値の組み合わせで情報を設定できます。
// 本来ユーザーデータは外部のファイルやデータベースに保存しておき，プログラムに読み込んできて使うものです
// 再代入不可の変数（要するに定数）にするには var ではなく const を使用
const userList = {
    user01: {
        id: "user01",
        name: "ユーザー１@JavaScript書きたい"
    },
    user02: {
        id: "user02",
        name: "ユーザー２@今日はゆっくり寝たい"
    }
}


// ユーザー情報を選択した（changeした）際に，現在のユーザーアイコンの画像を変更する
document.querySelector("#user-id").addEventListener("change", event => {
    // event.targetでイベントの発生源となったパーツの情報が取れるので，そこからvalue（今回はユーザーID）を取得
    var userId = event.target.value;
    // 取得したユーザーIDをもとにアイコン画像を変更。自作の関数を呼び出してユーザーアイコンのパスを取得
    document.querySelector("#current-user-icon").src = getUserIconPath(userId);
}, false);

// ユーザーアイコンのパスを生成する関数を作成
function getUserIconPath(userId) {
    // この作り方をする場合は保存する画像はすべて同じフォルダ内に .png の拡張子で保存する必要あり
    return "./images/" + userId +".png";
}

// 投稿を書くための部品を取得し，メッセージ表示関数を呼び出す（Day2_1とほぼ同じ）
var textArea = document.querySelector("#text-area");
textArea.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        event.preventDefault();
        showMessage();
    }
}, false);

var button = document.querySelector("#btn");
button.addEventListener("click", showMessage, false);

// 受け取った投稿の情報をもとに画面に投稿の内容を表示する関数
function showMessage() {
    var text = textArea.value;
    if(text === "") return false;
    
    // templateタグを取得
    var template = document.querySelector("#post");
    // templateタグの中身（content）を取得
    var clone = template.content.cloneNode(true);
    // 現在選択されているユーザーIDを取得
    var userId = document.querySelector("#user-id").value;

    // userListの中からuseIdに応じた情報を取得し，メッセージ表示部品（clone）に反映
    clone.querySelector(".name").innerHTML = userList[userId].name;
    clone.querySelector(".id").innerHTML = "@" + userList[userId].id;
    // 取得した投稿の情報もメッセージ表示部品（clone）に反映
    clone.querySelector(".message p").innerHTML = text;

    // ここでもアイコン画像のパスを取得しメッセージ表示部品に反映
    clone.querySelector(".user-icon img").src = getUserIconPath(userId);
    
    // dive.timelineを取得
    var timeline =  document.querySelector("div.timeline");
    // timelineにメッセージを追加
    timeline.appendChild(clone);

    textArea.value = "";
    textArea.focus();
    return true;
}