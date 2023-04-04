import React, { useState } from "react";

import Login from "./Login";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
     {!isLogin ? <Login isLogin={isLogin} setIsLogin={setIsLogin}/> : <div class="sketchfab-embed-wrapper"> <iframe title="SHIVAJI MAHARAJ" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/39c8e01cc4fc47d0a4c3889c8271ca78/embed"> </iframe> 
      <button onClick={()=>setIsLogin(false)} >Logout</button>
      </div>}
    </div>
  );
}
