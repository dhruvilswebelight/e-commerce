import React, { useState } from "react";



const LoginPage = () => {
const[username, setUsername] = useState("");
const[password, setPassword] = useState("");
const[email, setEmail] = useState("");
const[showPassword1, setShowPassword1] = useState(false);

const validateForm = () => {
    if(username !== "" && email !== "" && password !== ""){
         alert("Login successful")
    
    }
    else{
        alert("UserName or email or password must be required")
    }
    
  }
  const showPassword = () => {
       setShowPassword1(showPassword1 => !showPassword1)
     }
 
    return(
        
        <form className="login-form" >
            <div>
                <h1>Login</h1>
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" autoComplete="off"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}/>
                
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" autoComplete="off"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}/>
                
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                 autoComplete="off"
                 value={password}
                 type={showPassword1 ? "text" : "password"}
                 onChange={(e) => setPassword(e.target.value)}/>
             
            </div>

            <button type="submit" className="login" onClick={() => validateForm()}>Login</button>
            <label  className="submit" onClick={() => showPassword()}>ShowPassword</label>
            <p className="term">By continuing, you agree to Amazon's <a href=''>Conditions of Use</a> and <a href=''>Privacy Notice</a>
</p>
        </form>
        
        
    )
    
}

export default LoginPage

