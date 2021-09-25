import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { RedirectToUsers } from "./components/RedirectToUsers";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";

const App = () => (
    <div className="App">
        <BrowserRouter>
            <Route path={"/"} exact component={RedirectToUsers} />
            <Route path="/users" component={Users} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </BrowserRouter>
    </div>
);

export default App;
