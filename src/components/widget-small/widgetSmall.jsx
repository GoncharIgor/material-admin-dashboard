import './widget-small.scss';
import UserListItem from "./user-list-item/UserListItem";

const users = [
    {
        name: 'Anna Gonchar',
        title: 'UX Designer',
        avatar: 'https://picsum.photos/200'
    },
    {
        name: 'Igor Gonchar',
        title: 'FrontEnd Developer',
        avatar: 'https://picsum.photos/id/1025/200'
    },
    {
        name: 'Bob Johnson',
        title: 'UX Designer',
        avatar: 'https://picsum.photos/id/1005/200'
    }
]

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
