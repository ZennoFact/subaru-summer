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

// userListのデータに応じてユーザー選択欄が自動で調整されるように変更
const userIdList = document.querySelector("#user-id");

// Object.keysにuserListを渡して，key情報をループさせる。foEachは順番に一つずつ処理するというループのための機能
Object.keys(userList).forEach(key => {
    // 取り出したkeyの情報をもとにユーザー情報にアクセスする。
    const userId = userList[key].id;
    // optionのNodeをつくり，取得した情報を設定してuserIdListに追加
    const option = document.createElement("option");
    option.value = userId;
    option.innerHTML = userId;
    userIdList.appendChild(option);
});

document.querySelector("#user-id").addEventListener("change", event => {
    var userId = event.target.value;
    document.querySelector("#current-user-icon").src = getUserIconPath(userId);
}, false);

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
    var userId = document.querySelector("#user-id").value;

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