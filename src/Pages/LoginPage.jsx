import React from "react";
import { Link } from "react-router-dom";

//import my styles
import "./LoginPage.css";


const LoginPage = ({ login, loginWithEmail, setEmail, setPassword }) => {
    return (
        <div className="LoginPage">
            <aside></aside>
            <section>
                <h1>Welcome back</h1>
                <p className="slogan">Manage your task easily</p>

                <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email here" onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="inputGroup">
                    <label htmlFor="pwd">Password</label>
                    <input type="password" id="pwd" placeholder="Enter your password here" onChange={e => setPassword(e.target.value)} />
                </div>

                <button className="btnLogin" onClick={loginWithEmail}>Login</button>
                <p>Don't have an account <Link to="/register">Create Account</Link></p>

                <h2>OR</h2>

                <button onClick={login}>Signin with google</button>
            </section>
        </div>
    )
}

export default LoginPage;