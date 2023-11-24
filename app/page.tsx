import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from './app'; // Update the path accordingly

export default function Home() {

  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <AuthProvider>
      <div className="w-50">
      <div className="row">
        <div className="topnav">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          {isLoggedIn && <button onClick={logout}>Logout</button>}
        </div>
      </div>
      <div className="row">
        <div id="default">
          <form action="" method="post">
            <label htmlFor="user">Username: </label> <br />
            <input type="text" name="username" id="username" /> <br />
            <label htmlFor="pass">Password:</label> <br />
            <input type="password" name="password" id="password" /> <br />
            <input type="submit" value="Login" id="loginButton" />
          </form>
          <h1>Home</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec
            tincidunt praesent semper feugiat nibh sed pulvinar. Dictum sit amet
            justo donec. Scelerisque eleifend donec pretium vulputate sapien. Varius
            duis at consectetur lorem donec massa sapien faucibus et. Venenatis
            lectus magna fringilla urna porttitor rhoncus dolor purus non.
          </p>
        </div>
        <div id="news">
          <h1>News</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec
            tincidunt praesent semper feugiat nibh sed pulvinar. Dictum sit amet
            justo donec. Scelerisque eleifend donec pretium vulputate sapien. Varius
            duis at consectetur lorem donec massa sapien faucibus et. Venenatis
            lectus magna fringilla urna porttitor rhoncus dolor purus non.
          </p>
        </div>
        <div id="contact">
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec
            tincidunt praesent semper feugiat nibh sed pulvinar. Dictum sit amet
            justo donec. Scelerisque eleifend donec pretium vulputate sapien. Varius
            duis at consectetur lorem donec massa sapien faucibus et. Venenatis
            lectus magna fringilla urna porttitor rhoncus dolor purus non.
          </p>
        </div>
        <div id="about">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec
            tincidunt praesent semper feugiat nibh sed pulvinar. Dictum sit amet
            justo donec. Scelerisque eleifend donec pretium vulputate sapien. Varius
            duis at consectetur lorem donec massa sapien faucibus et. Venenatis
            lectus magna fringilla urna porttitor rhoncus dolor purus non.
          </p>
        </div>
      </div>
    </div>
    </AuthProvider>
    
  )
}
