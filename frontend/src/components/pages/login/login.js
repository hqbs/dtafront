import React from "react";
import "./login.css";

function Login() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="login-container">
        <h2>Login</h2>
        <label for="fname">Email</label>
        <input type="text" id="femail" name="email" placeholder="Email" />

        <label for="lname">Password</label>
        <input
          type="password"
          id="lpassword"
          name="password"
          placeholder="Password"
        />

        <center>
          <button style={{ width: "40%" }}>Login</button>
          <button style={{ width: "40%" }}>Need an Account?</button>
          <p>
            Forgot your password? <a href="/">Click here</a> to reset it
          </p>
        </center>
      </div>
      <div class="waveWrapper waveAnimation">
        <div class="waveWrapperInner bgTop">
          <div
            class="wave waveTop"
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-top.png')"
            }}
          ></div>
        </div>
        <div class="waveWrapperInner bgMiddle">
          <div
            class="wave waveMiddle"
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-mid.png')"
            }}
          ></div>
        </div>
        <div class="waveWrapperInner bgBottom">
          <div
            class="wave waveBottom"
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-bot.png')"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
