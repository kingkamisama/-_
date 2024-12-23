var timerId = setInterval(function () {
    if (document.getElementById("timeout-timer").textContent <= 11) { //残り11分切ってたら
        document.getElementById("portaltimerimg").click(); //時計アイコンの画像をクリックする動作
    }
}, 60000)//1分ごと






// CSS の keyframes を動的に追加
var style = document.createElement("style");
style.innerHTML = `
  @keyframes example4 {
    0% { color: #e60000; }
    14% { color: #f39800; }
    28% { color: #fff100; }
    42% { color: #009944; }
    56% { color: #0068b7; }
    70% { color: #1d2088; }
    85% { color: #920783; }
    100% { color: #e60000; }
  }
`;
document.head.appendChild(style);














// 設定ボタンの作成と追加
const settingButton = document.createElement("button");
settingButton.id = "settingButton";
settingButton.textContent = "設定";
settingButton.style.position = "absolute";
settingButton.style.top = "20px";
settingButton.style.right = "200px";
settingButton.style.border = "1px solid #ddd";
settingButton.style.padding = "10px";
settingButton.style.backgroundColor = "#f9f9f9";
document.getElementById("area-h1").appendChild(settingButton);

// 初期設定ボタンのクリックイベント登録
settingButton.addEventListener('click', function () {
    window.location.href = 'setting.html'; // setting.html に遷移
});






// フォントサイズを変更する関数
function changeFontSize(size) {
    const targetName = document.querySelector("#portaluser > li > span:nth-child(1)");
    if (targetName) {
        targetName.style.fontSize = size;
    }

}

window.addEventListener('load', function () {
    const storedfontSize = localStorage.getItem("userNamefontSize");
    if (storedfontSize) {
        changeFontSize(storedfontSize);
    }
});


{
    const targetName = document.querySelector("#portaluser > li > span:nth-child(1)");
    // targetSpan のスタイルを設定
    targetName.style.fontStyle = "italic";
    targetName.style.fontSize = "130%";
    targetName.style.fontWeight = "bold";

    // innerHTML に一文字ずつのテキストをセット
    function changeName(name) {
        targetName.innerHTML = `${name.split('').map((char, index) => {
            return `<span style="
        animation: example4 4s linear infinite;
        animation-delay: ${index * 0.5}s;
        animation-fill-mode: both;
        animation-timing-function: linear;
    ">${char}</span>`;
        }).join('')} さん`;
    }
    changeName("HIKAKIN TV")
    window.addEventListener('load', function () {
        const storedName = localStorage.getItem("userName");
        if (storedName) {
            changeName(storedName);
        }
    });
}


{
    // <li> 要素を作成
    const li = document.createElement("li");
    li.style.fontStyle = "italic";
    li.style.fontSize = "130%";
    li.style.fontWeight = "bold";
    // テキストを一文字ずつ <span> タグでラップ
    li.innerHTML = "大新潟帝国万歳！".split('').map((char, index) => {
        return `<span style="
      animation: example4 4s linear infinite;
      animation-delay: ${index * 0.5}s;
      animation-fill-mode: both;
      animation-timing-function: linear;
  
    ">${char}</span>`;
    }).join('');
    document.getElementById("tabmenu-ul").appendChild(li);
}

{
    // webページ内でIDが"webpage-contents"の要素を取得
    const container = document.getElementById("webpage-contents");

    // その中の画像を取得
    const image = container.querySelector("img");  // 1つ目の画像を取得
    image.style.clipPath = "inset(0 0 0 50px)";  // 上、右、下、左の順番で指定

    // 新しい画像URLを設定

    const newImage = document.createElement("img");
    newImage.src = "https://kokushin-u.jp/wp-content/themes/tpwp_sui/images/logo.png";
    newImage.style.width = "156px";
    newImage.style.height = "73px";
    newImage.style.position = "absolute";
    newImage.style.top = "0";
    newImage.style.left = "10px";
    newImage.style.backgroundColor = "white";
   

    // 新しい画像を親要素に追加
    container.appendChild(newImage);
}
