import SidebarMenu from "../sidebar-menu/SidebarMenu";

import './sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">
                <SidebarMenu title="Dashboard"/>
                <SidebarMenu title="Quick Menu"/>
                <SidebarMenu title="Notifications"/>
                <SidebarMenu title="Other"/>
            </div>
        </div>
    )
}
