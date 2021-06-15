import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";

import './app.scss';

function App() {
    return (
        <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <Home/>
            </div>
        </div>
    );
}

export default App;
