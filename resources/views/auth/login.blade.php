<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
  <title>Cyprus design example</title>

  @vite(['resources/css/login.css'])
</head>

<body>
  
  <a href="#home"> <img src="pictures/Kleoslogo.png" alt="Home" class="center"></a>
  <div class="row">
    <div class="login">
      <div class="heading">
        <h2 id="signin">Sign in</h2>
        <form action="{{ route('login') }}" method="post">
            @csrf

          <div class="input-group-lg">
            <span class="input-group-addon"><i class="fa fa-user"></i></span>
            <input type="text" class="form-control" name="username" placeholder="Username" id="username">
          </div>

          <div class="input-group-lg">
            <span class="input-group-addon"><i class="fa fa-lock"></i></span>
            <input type="password" class="form-control" name="password" placeholder="Password" id="password">
          </div>

          <input type="submit" value="Login" id="loginButton" class="float" />
        </form>
      </div>
    </div>
  </div>

</body>

</html>