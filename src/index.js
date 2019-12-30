
import React from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import { getData,updateData,getLiveData } from "./utils"
import { timeParse } from "d3-time-format";
import { TypeChooser } from "react-stockcharts/lib/helper";

const parseDate = timeParse("%Y-%m-%d");

class ChartComponent extends React.Component {
	componentDidMount() {
			this.allChartData();
	}

	allChartData = (type)=>{
		getData().then(data => {
			//console.log(data);
			//this.setState({ data })
		})


		getLiveData(type).then(data=>{
			
			//timeParse
			let mainData = [];
			data.forEach((item)=>{
				mainData.push({
					date:  (new Date(item[0])) ,
					open :item[1],
					high :item[3],
					low :item[4],
					close :item[2],
					volume :item[5]
				});
			})

			console.log("updatinf new set",mainData);
			this.setState({ data :mainData})
		})
	}



	updateChartData = (type)=>{
		// console.log(type);
		// console.log(updateData(this.state.data));
		console.log(type);
		if(type==="all"){
			this.allChartData(type);
		}else{
			this.allChartData(type);
			//this.setState({data:updateData(this.state.data)})
		}
	}

	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		//type: 
		return (
			// <TypeChooser>
			// 	{type =>  }
			// </TypeChooser>
			<Chart type={"svg"} data={this.state.data} updateChartData={this.updateChartData} />
		)
	}
}

render(
	<ChartComponent />,
	document.getElementById("root")
);
