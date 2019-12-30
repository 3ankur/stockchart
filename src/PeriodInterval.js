import React from "react";

const PERIOD_LIST = ["1m", "15m", "6h",  "1D"];
//onClick={onSetViewPeriod.bind(null, each)}
export default class PeriodInterval extends React.Component {
	render() {
		let { settings, activePeriod, onSetViewPeriod } = this.props;
		return (
			<div className="period-container" data-intro="quickly change the period of the chart" data-position="left">
				<ul>
					{PERIOD_LIST.map(each => 
						<li key={each}
							className={`period ${activePeriod === each ? "active_period" : ""}`}
							onClick={onSetViewPeriod.bind(null, each)}>{each}</li>)}
				</ul>
			</div>
		);
	}
}
