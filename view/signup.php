<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup | Y</title>
</head>
<body> 
    <h1>新規登録</h1>
    <form action="signup.php" method="post" class="login">
    <table class="login">
      <tr>
        <td>ユーザーID</td>
        <td><input type="text" name="id"></td>
      </tr>
      <tr>
        <td>パスワード</td>
        <td><input type="password" name="pass"></td>
      </tr>
      <tr>
        <td>パスワード再入力</td>
        <td><input type="password" name="confirm"></td>
      </tr>
    </table>
    <input type ="submit" value="登録">
    </form>
    <p><a href = "./login.php">ログイン</p>
</body>
</html>