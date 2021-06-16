import './widget-large.scss';
import UserPayment from "./user-payment/UserPayment";
import {usersPayments} from "./user-payments-data";

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
