<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Y</title>
</head>
<body>
    <h1>ログイン</h1>
    <form action="login.php" method="post" class="login">
    <table class="login">
      <tr>
        <td>ユーザーID</td>
        <td><input type="text" name ="id"></td>
      </tr>
      <tr>
        <td>パスワード</td>
        <td><input type="password" name ="pass"></td>
      </tr>
    </table>
    <input type ="submit" value="ログイン">
    </form>
    <p><a href = "./signup.php">新規登録</p>
</body>
</html>