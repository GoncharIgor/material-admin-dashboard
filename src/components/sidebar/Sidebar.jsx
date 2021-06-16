import SidebarMenu from "./sidebar-menu/SidebarMenu";

import './sidebar.css';
import {dashboardMenuItems, notificationsMenuItems, otherMenuItems, quickMenuItems} from "./menu-items-data";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">
                <SidebarMenu title="Dashboard" menuItems={dashboardMenuItems}/>
                <SidebarMenu title="Quick Menu" menuItems={quickMenuItems}/>
                <SidebarMenu title="Notifications" menuItems={notificationsMenuItems}/>
                <SidebarMenu title="Other" menuItems={otherMenuItems}/>
            </div>
        </div>
    )
}
