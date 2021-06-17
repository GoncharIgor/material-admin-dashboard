import {Link} from "react-router-dom";
import styled from 'styled-components';

import './sidebar-menu.scss';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default function SidebarMenu ({title, menuItems}) {
    function renderListItems() {
        return menuItems.map(item => {
            const MaterialIcon = item.icon;

            return (
                <li className={`sidebar-menu__list-item ${item.name === 'Home' ? 'active' : ''}`} key={item.name}>
                    <MaterialIcon className="sidebar-menu__icon" fontSize="small" /> {item.name}
                </li>
            )
        })
    }
    return (
        <div className="sidebar-menu">
            <h3 className="sidebar-menu__title">{title}</h3>
            <ul className="sidebar-menu__list">
                {renderListItems()}
            </ul>
        </div>
    )
}
