import './widget-large.scss';
import UserPayment from "./user-payment/UserPayment";

const usersPayments = [
    {
        name: 'Anna Gonchar',
        avatar: 'https://picsum.photos/200',
        date: '2 Jun 2021',
        amount: '122.00',
        status: 'approved'
    },
    {
        name: 'Igor Gonchar',
        avatar: 'https://picsum.photos/id/1025/200',
        date: '22 Jun 2021',
        amount: '122.00',
        status: 'pending'
    },
    {
        name: 'Igor Gonchar',
        avatar: 'https://picsum.photos/id/1025/200',
        date: '2 Jul 2021',
        amount: '122.00',
        status: 'declined'
    },
    {
        name: 'Igor Gonchar',
        avatar: 'https://picsum.photos/id/1025/200',
        date: '11 Jun 2021',
        amount: '122.00',
        status: 'approved'
    },
]

export default function WidgetLarge() {
    function renderUsersPayments() {
        return usersPayments.map(userPayment => {
            return (
                <UserPayment userPayment={userPayment} key={`${userPayment.name}-${userPayment.date}`}/>
            )
        })
    }

    return (
        <div className="widget-large">
            <h3 className="widget-large__title">
                Latest Transactions
            </h3>
            <table className="widget-large__table">
                <thead>
                <tr className="widget-large__tr">
                    <th className="widget-large__th"> Customer</th>
                    <th className="widget-large__th"> Date</th>
                    <th className="widget-large__th"> Amount</th>
                    <th className="widget-large__th"> Status</th>
                </tr>
                </thead>
                <tbody>
                {renderUsersPayments()}
                </tbody>
            </table>
        </div>
    )
}
