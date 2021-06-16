import {Visibility} from "@material-ui/icons";
import './user-list-item.scss';

export default function UserListItem({user}) {
    return (
        <li className="widget-small__list-item">
            <img src={user.avatar} alt="new user"/>
            <div className="widget-small__user">
                <span className="widget-small__user-name">{user.name}</span>
                <span className="widget-small__user-title">{user.title}</span>
            </div>
            <button className="widget-small__button">
                <Visibility className="widget-small__icon"/> Display
            </button>
        </li>
    )
}
