import {NotificationsNone, Language, Settings} from '@material-ui/icons';

import './topbar.scss';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="top-left">
                    <span className="logo">IgorGo</span>
                </div>
                <div className="top-right">
                    <div className="topbar-icons-container">
                        <NotificationsNone />
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className="topbar-icons-container">
                        <Language />
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className="topbar-icons-container">
                        <Settings />
                    </div>
                    <img src="https://i3.ytimg.com/vi/et8xNAc2ic8/maxresdefault.jpg" alt="avatar" className="top-avatar"/>
                </div>
            </div>
        </div>
    )
}
