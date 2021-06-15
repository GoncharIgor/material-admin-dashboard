import {ArrowDownward, ArrowUpward} from '@material-ui/icons';

import './featured-info.scss';

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featured__item">
                <span className="featured__title">Revenue</span>
                <div className="featured__money-container">
                    <span className="featured__price">2400$</span>
                    <span className="featured__money-rate">-11.4 <ArrowDownward
                        className="featured__icon negative"/></span>
                </div>
                <span className="featured__subtitle">Compared to last month</span>
            </div>

            <div className="featured__item">
                <span className="featured__title">Sales</span>
                <div className="featured__money-container">
                    <span className="featured__price">4030$</span>
                    <span className="featured__money-rate">-11.4 <ArrowDownward
                        className="featured__icon negative"/></span>
                </div>
                <span className="featured__subtitle">Compared to last month</span>
            </div>

            <div className="featured__item">
                <span className="featured__title">Cost</span>
                <div className="featured__money-container">
                    <span className="featured__price">1120$</span>
                    <span className="featured__money-rate">+2.3 <ArrowUpward className="featured__icon"/></span>
                </div>
                <span className="featured__subtitle">Compared to last month</span>
            </div>
        </div>
    )
}
