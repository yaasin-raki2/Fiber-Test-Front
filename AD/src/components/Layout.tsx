import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { User } from "../models/user";
import Menu from "./Menu";
import Nav from "./Nav";

const Layout: FC = ({ children }) => {
    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("user");
                setUser(data);
            } catch (e) {
                setRedirect(true);
            }
        })();
    }, []);

    if (redirect) return <Redirect to="/login" />;

    return (
        <div>
            <Nav user={user} />
            <div className="container-fluid">
                <div className="row">
                    <Menu />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="table-responsive">{children}</div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;
