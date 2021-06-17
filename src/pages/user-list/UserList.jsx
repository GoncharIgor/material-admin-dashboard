import {DataGrid} from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons';

import './user-list.scss';
import {userRows} from "./user-list-data";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function UserList() {
    const [usersData, setUserData] = useState(userRows);

    const handleUserDelete = (userId) => {
        setUserData(usersData.filter((user) => user.id !== userId));
    }

    const columns = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'user',
            headerName: 'User',
            width: 200,
            // renderCell - creating column rule
            renderCell: (params) => {
                return (
                    <div className="user-list__user">
                        <img src={params.row.avatar} alt="user avatar"/>
                        {params.row.username}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200
        },
        {
            field: 'status',
            headerName: 'Status',
            // type: 'number',
            // sortable: false,
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/${params.row.id}`}>
                            <button className="user-list__edit-button">Edit</button>
                        </Link>

                        <DeleteOutline className="user-list__delete-button"
                                       onClick={() => handleUserDelete(params.row.id)}/>
                    </>
                )
            }
        }
    ];

    return (
        <div className="user-list">
            <DataGrid rows={usersData} columns={columns} pageSize={10} checkboxSelection disableSelectionOnClick/>
        </div>
    )
}
