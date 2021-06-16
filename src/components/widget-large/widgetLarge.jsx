import './widget-large.scss';

export default function WidgetLarge() {
    const Button = ({type}) => {
        return (<button className={`widget-large__button ${type}`}>{type}</button>);
    }

    return (
        <div className="widget-large">
            <h3 className="widget-large__title">
                Latest Transactions
            </h3>
            <table className="widget-large__table">
                <tr className="widget-large__tr">
                    <th className="widget-large__th"> Customer</th>
                    <th className="widget-large__th"> Date</th>
                    <th className="widget-large__th"> Amount</th>
                    <th className="widget-large__th"> Status</th>
                </tr>
                <tr className="widget-large__tr">
                    <td className="widget-large__user">
                        <img src="https://i3.ytimg.com/vi/et8xNAc2ic8/maxresdefault.jpg" alt="user avatar"
                             className="widget-large__img"/>
                        <span className="widget-large__name">Igor Gonchar</span>
                    </td>
                    <td className="widget-large__date">2 Jun 2021</td>
                    <td className="widget-large__amount">122.00 $</td>
                    <td className="widget-large__status">
                        <Button type="approved"/>
                    </td>
                </tr>

                <tr className="widget-large__tr">
                    <td className="widget-large__user">
                        <img src="https://i3.ytimg.com/vi/et8xNAc2ic8/maxresdefault.jpg" alt="user avatar"
                             className="widget-large__img"/>
                        <span className="widget-large__name">Igor Gonchar</span>
                    </td>
                    <td className="widget-large__date">2 Jun 2021</td>
                    <td className="widget-large__amount">122.00 $</td>
                    <td className="widget-large__status">
                        <Button type="pending"/>
                    </td>
                </tr>

                <tr className="widget-large__tr">
                    <td className="widget-large__user">
                        <img src="https://i3.ytimg.com/vi/et8xNAc2ic8/maxresdefault.jpg" alt="user avatar"
                             className="widget-large__img"/>
                        <span className="widget-large__name">Igor Gonchar</span>
                    </td>
                    <td className="widget-large__date">2 Jun 2021</td>
                    <td className="widget-large__amount">122.00 $</td>
                    <td className="widget-large__status">
                        <Button type="declined"/>
                    </td>
                </tr>

                <tr className="widget-large__tr">
                    <td className="widget-large__user">
                        <img src="https://i3.ytimg.com/vi/et8xNAc2ic8/maxresdefault.jpg" alt="user avatar"
                             className="widget-large__img"/>
                        <span className="widget-large__name">Igor Gonchar</span>
                    </td>
                    <td className="widget-large__date">2 Jun 2021</td>
                    <td className="widget-large__amount">122.00 $</td>
                    <td className="widget-large__status">
                        <Button type="approved"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}
