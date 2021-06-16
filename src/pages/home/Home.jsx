import React from 'react';
import './home.css';
import FeaturedInfo from "../../components/featured-info/FeaturedInfo";
import ReChart from "../../components/rechart/ReChart";
import WidgetLarge from "../../components/widget-large/widgetLarge";
import WidgetSmall from "../../components/widget-small/widgetSmall";

const userData = [
    {
        name: 'Jan',
        "Active User": 4000,
    },
    {
        name: 'Feb',
        "Active User": 3400,
    }, {
        name: 'Mar',
        "Active User": 4200,
    }, {
        name: 'Apr',
        "Active User": 2300,
    },
    {
        name: 'Mar',
        "Active User": 1100,
    },
    {
        name: 'May',
        "Active User": 5000,
    },
];

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <ReChart data={userData} title="User Analytics" dataKey="Active User"/>
            <div className="home__widgets">
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    )
}
