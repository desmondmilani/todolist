import React from "react";

//import my styles
import "./LoginPage.css";

import { Link } from "react-router-dom";


const SignupPage = ({ registerUserWithEmail, setFullname, setEmail, setPassword, login}) => {
    return (
        <div className="LoginPage">
            <aside></aside>
            <section>
                <h1>Welcome</h1>
                <p className="slogan">Manage your task easily</p>

                <div className="inputGroup">
                    <label htmlFor="fullname">Fullname</label>
                    <input type="text" id="fullname" placeholder="Enter your fullname here" onChange={ e => setFullname(e.target.value)} />
                </div>

                <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email here" onChange={ e => setEmail(e.target.value)} />
                </div>

                <div className="inputGroup">
                    <label htmlFor="pwd">Password</label>
                    <input type="password" id="pwd" placeholder="Enter your password here" onChange={ e => setPassword(e.target.value)} />
                </div>

                <button className="btnLogin" onClick={() => registerUserWithEmail()}>Signup</button>
                <p>Already registered <Link to="/">Login</Link></p>

                <h2>OR</h2>

                <button onClick={login}>Signup with google</button>
            </section>
        </div>
    )
}

export default SignupPage;