import './user-payment.scss'

export default function UserPayment({userPayment}) {
    const Button = ({type}) => {
        return (<button className={`widget-large__button ${type}`}>{type}</button>);
    }

    return (
        <tr className="widget-large__tr">
            <td className="widget-large__user">
                <img src={userPayment.avatar} alt="user avatar"
                     className="widget-large__img"/>
                <span className="widget-large__name">{userPayment.name}</span>
            </td>
            <td className="widget-large__date">{userPayment.date}</td>
            <td className="widget-large__amount">{userPayment.amount}</td>
            <td className="widget-large__status">
                <Button type={userPayment.status} />
            </td>
        </tr>
    )
}
