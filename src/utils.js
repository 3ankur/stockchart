

import { tsvParse, csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

function parseData(parse) {
	return function(d) {
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;

		return d;
	};
}

const parseDate = timeParse("%Y-%m-%d");

//
export function getData() {
	const promiseMSFT = fetch("https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv")
		.then(response => response.text())
		.then(data => tsvParse(data, parseData(parseDate)))
	return promiseMSFT;
}


// 

export function getLiveData(type='1D'){

	const upPro =  fetch("https://dms-rest-api.herokuapp.com/user/trade/"+type)
					.then(response=>response.json())

					return upPro;
					

}


export function updateData(reqData){

		reqData.forEach((d)=>{

			d.open = Math.random() * (60 - 20 + 1) + 20;
			d.high = Math.random() * (60 - 20 + 1) + 20;
			d.low =  Math.random() * (60 - 20 + 1) + 20;
			d.close = Math.random() * (60 - 20 + 1) + 20;
			d.volume = Math.floor(Math.random() * (8370500 - 3070500 + 1) + 3070500);
			//8370500
		});
	//	console.log(reqData);
	return reqData;
		//Math.floor(Math.random() * (max - min + 1) + min);
}


