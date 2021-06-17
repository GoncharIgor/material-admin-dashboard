import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/user-list/UserList";

import './app.scss';

function App() {
    return (
        <BrowserRouter>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/users" exact>
                        <UserList />
                    </Route>
                    <Redirect from="/Home" to="/" />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
