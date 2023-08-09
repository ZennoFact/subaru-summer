// 授業後に更に改造したコード
const userList = {
    user01: {
        id: "user01",
        name: "ユーザー１@JavaScript書きたい"
    },
    user02: {
        id: "user02",
        name: "ユーザー２@今日はゆっくり寝たい"
    },
    user03: {
        id: "user03",
        name: "ユーザー３@コーディングなう"
    }
}

// 現在のユーザーを変数で管理
let currentUserId = "user01";

// userListのデータに応じてユーザー選択欄が自動で調整されるように変更
const userIdList = document.querySelector("#user-id");

// Object.keysにuserListを渡して，key情報をループさせる。foEachは順番に一つずつ処理するというループのための機能
Object.keys(userList).forEach(key => {
    // 取り出したkeyの情報をもとにユーザー情報にアクセスする。
    const userId = userList[key].id;
    createAccountParts(userId);
});

// アカウント切り替え用の独自パーツを作成することに
// 編集中かどうかを変数で管理
let nowSelected = false;
function createAccountParts(userId) {
    const template = document.querySelector("#account-parts");
    const clone = template.content.cloneNode(true);

    const user = userList[userId];
    clone.querySelector("img").src = getUserIconPath(user.id);
    clone.querySelector("p.name").innerHTML = user.name.split("@")[0];
    clone.querySelector("p.id").innerHTML = user.id;

    const parts = clone.querySelector(".widget.account");
    parts.addEventListener("click", event => {
        if(parts.classList.contains("active")) {
            if(nowSelected) cloesAccounts();
            else openAccounts();
            return;
        }

        document.querySelectorAll(".widget.account").forEach(element => {
            element.classList.remove("active");
        })
        parts.classList.add("active");
        currentUserId = parts.querySelector("p.id").innerHTML;
        cloesAccounts();
    }, false);

    // TODO: ここ，最終的にローカルストレージの内容に応じてどれをアクティブにするかを変更
    if (userId === currentUserId) {
        parts.classList.add("active");
    }

    document.querySelector('#account-area').append(clone);
}

function openAccounts() {
    nowSelected = true;
    const parts = document.querySelectorAll(".widget.account");
    for(let i = 0; i < parts.length; i++) {
        parts[i].style.top = (72 * i) + "px";
    }
}

function cloesAccounts() {
    nowSelected = false;
    document.querySelectorAll(".widget.account").forEach(element => {
        element.style.top = 0;
    })
}

// // アカウントを開いていて，それ以外をクリックしたとき
document.addEventListener("click", event => {
    if(!event.target.closest(".widget.account"))cloesAccounts();
});


function getUserIconPath(userId) {
    return "./images/" + userId +".png";
}

var textArea = document.querySelector("#text-area");
textArea.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        event.preventDefault();
        showMessage();
    }
}, false);

var button = document.querySelector("#btn");
button.addEventListener("click", showMessage, false);

function showMessage() {
    var text = textArea.value;
    if(text === "") return false;
    
    var template = document.querySelector("#post");
    var clone = template.content.cloneNode(true);
    var userId = currentUserId

    clone.querySelector(".name").innerHTML = userList[userId].name;
    clone.querySelector(".id").innerHTML = "@" + userList[userId].id;
    clone.querySelector(".message p").innerHTML = text;

    clone.querySelector(".user-icon img").src = getUserIconPath(userId);
    
    var timeline =  document.querySelector("div.timeline");

    // 最後に投稿されたものが上に出るように，追加の方法を変更
    timeline.prepend(clone);

    textArea.value = "";
    textArea.focus();
    return true;
}

// 拡散用のQRコードを表示する処理
document.querySelector("#share-button").addEventListener('click', event => {
    document.querySelector("#modal-qr").classList.remove("hidden");
}, false);

document.querySelector("#modal-qr").addEventListener('click', event => {
    event.target.classList.add("hidden");
}, false);