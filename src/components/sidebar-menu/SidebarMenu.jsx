import {LineStyle, Timeline, TrendingUp} from '@material-ui/icons';

import './sidebar-menu.css';

export default function SidebarMenu (props) {
    return (
        <div className="sidebar-menu">
            <h3 className="sidebar-menu__title">{props.title}</h3>
            <ul className="sidebar-menu__list">
                <li className="sidebar-menu__list-item active">
                    <LineStyle className="sidebar-menu__icon" fontSize="small" /> Home
                </li>
                <li className="sidebar-menu__list-item">
                    <Timeline className="sidebar-menu__icon" fontSize="small" /> Analytics
                </li>
                <li className="sidebar-menu__list-item">
                    <TrendingUp className="sidebar-menu__icon" fontSize="small" /> Sales
                </li>
            </ul>
        </div>
    )
}
