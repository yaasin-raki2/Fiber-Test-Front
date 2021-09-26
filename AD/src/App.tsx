import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { RedirectToUsers } from "./components/RedirectToUsers";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";
import Links from "./pages/Links";

const App = () => (
    <div className="App">
        <BrowserRouter>
            <Route path={"/"} exact component={RedirectToUsers} />
            <Route path={"/login"} component={Login} />
            <Route path={"/register"} component={Register} />
            <Route path={"/users"} exact component={Users} />
            <Route path={"/users/:id/links"} component={Links} />
        </BrowserRouter>
    </div>
);

export default App;
