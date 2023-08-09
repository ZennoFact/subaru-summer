<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Y | パクリじゃない、オマージュです</title>
  <!-- ファビコンを設定 -->
  <link rel="icon" href="./asetts/favicon.ico" id="favicon">
  <!-- iPhone用のでかいアイコンを設定 -->
  <link rel="apple-touch-icon" sizes="180x180" href="./asetts/apple-touch-icon.png">
  <link rel="stylesheet" href="./css/style.css">
</head>

<body>
  <div class="container">
    <header class="header">
      <div class="page-title">
        <div id="icon-area">
          <img src="./asetts/apple-touch-icon.png" alt="Y">
        </div>
        <div id="account-area"></div>
      </div>
      <div class="post-area">
        <div class="content">
          <div class="text">
            <textarea name="" id="text-area" cols="30" rows="5" placeholder="いまなにしてる？"></textarea>
          </div>
          <div class="buttons">
            <button id="btn" class="button-item">POST</button>
          </div>
        </div>
      </div>
    </header>
    <div class="timeline"></div>
  </div>

  <div id="widget-qr">
    <div class="widget qr">
      <button id="share-button">SHARE</button>
    </div>
  </div>

  <div id="modal-qr" class="hidden">
    <img src="./asetts/share_qr.png" alt="https://users2.kyoto-kcg.ac.jp/~tc10162/subaru-summer/">
  </div>

  <template id="post">
    <div class="post-area">
      <div class="user-icon">
        <img src="./images/10shiyuki.png" alt="">
      </div>
      <div class="content">
        <div class="user-data">
          <p>
            <span class="name">表示名</span><br>
            <span class="id">@ユーザーID</span>
          </p>
        </div>
        <div class="message">
          <p>投稿</p>
        </div>
      </div>
    </div>
  </template>

  <template id="account-parts">
    <div class="widget account">
      <div class="user-icon">
        <img src="" alt="アカウントの画像">
      </div>
      <div>
        <p class="name"></p>
        <P class="id"></P>
      </div>
    </div>
  </template>
  <script src="./y.js"></script>
</body>

</html>