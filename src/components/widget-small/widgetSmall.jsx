import './widget-small.scss';
import UserListItem from "./user-list-item/UserListItem";
import {users} from "./users-data";

export default function WidgetSmall() {

    function renderUsers() {
        return users.map(user => {
            return (
                <UserListItem user={user} key={user.name}/>
            )
        })
    }

    return (
        <div className="widget-small">
            <span className="widget-small__title">New join Members</span>
            <ul className="widget-small__list">
                {renderUsers()}
            </ul>
        </div>
    )
}
