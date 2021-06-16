import React from 'react';
import './home.css';

import FeaturedInfo from "../../components/featured-info/FeaturedInfo";
import ReChart from "../../components/rechart/ReChart";
import WidgetLarge from "../../components/widget-large/widgetLarge";
import WidgetSmall from "../../components/widget-small/widgetSmall";

import {userData} from "./chart-user-data";

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
