import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import "../styles/Login.css";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [redirect, setRedirect] = useState<boolean>(false);

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await axios.post("login", { email, password }, { withCredentials: true });

        setRedirect(true);
    };

    if (redirect) return <Redirect to="/" />;

    return (
        <main className="form-signin">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">
                    Sign in
                </button>
            </form>
        </main>
    );
};

export default Login;
