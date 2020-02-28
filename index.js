import fetch from 'isomorphic-unfetch'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

var date = [];
var weather= [];
var tempt=[];
var weatherm= [];
var index3=0;
class Weather extends React.Component{

	constructor(){
		super()
		this.state={
			agencies:[]
		}

	}

async componentDidMount()
	{	
		const responce =await fetch ('http://api.openweathermap.org/data/2.5/forecast?q=Pulau%20Pinang&appid=1380193955ffc51ef43d4f97a80070e3')
		const agencies =await responce.json()
		console.log(this.props)
		var comp=' ';
		var index2=0;

		for(var index=0;index<40;index++)
		{
			var test= agencies.list[index].dt_txt;
			test=test.slice(8, -9);
			if (comp!=test) {
				date [index2]=agencies.list[index].dt_txt;
				date [index2]=date [index2].slice(0,10);
				weather [index2]=agencies.list[index].weather[0].description;
				tempt [index2]=agencies.list[index].main.temp - 273.15;
				tempt [index2] = Math.floor(tempt[index2]);
				weatherm[index2]=agencies.list[index].weather[0].main;
				if(weatherm[index2]=="Clear")
				{
					weatherm[index2]="https://cdn3.iconfinder.com/data/icons/weather-and-weather-forecast/32/sunny-512.png";
				}
				else if (weatherm[index2]=="Rain")
				{
					weatherm[index2]="https://p7.hiclipart.com/preview/629/164/924/rain-computer-icons-symbol-weather-rainy-day.jpg";
				}
				else if (weatherm[index2]=="Clouds")
				{
					weatherm[index2]="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcS9zZ-t0I68z152eGmK0AhzBqbBgiHRNxa0ix0I6Hh8JC9bSw";
				}
				comp = test;
				index2++;
			}

		}
		this.setState({agencies: agencies})
		console.log(weatherm)
}



	render(){
		return(
				<section>
  					<div className="hero-body ">
  					
   					 		<div className="">
   					 			 <h1 className="title ">
      								<p>Today {date[0]},</p>
    			  	    		  </h1>
    							  <h1 className="title ">
      								<p>{weather[0]}</p>
    			  				  </h1>
      							  <h2 className="subtitle">
      							<p>{tempt[0]} C  </p>
      						</h2>
      						<img className="image is-128x128" src={weatherm[0]}/>
  							</div>
    				<body>
    				<div className="columns ">
    				<div className="column title">
    					<p>{date[1]}</p>
    					<p>{weather[1]}</p>
    					<p className="subtitle">{tempt[1]} C</p>
    					<img className="image is-128x128" src={weatherm[1]}/>
    				</div>
    				<div  className="column title">
    					<p>{date[2]}</p>
    					<p>{weather[2]}</p>
    					<p className="subtitle">{tempt[2]} C</p>
    					<img className="image is-128x128" src={weatherm[2]}/>
    				</div>
    				<div  className="column title">
    					<p>{date[3]}</p>
    					<p>{weather[3]}</p>
    					<p className="subtitle">{tempt[3]} C</p>
    					<img className="image is-128x128" src={weatherm[3]}/>
    				</div>
    				<div  className="column title">
    					<p>{date[4]}</p>
    					<p>{weather[4]}</p>
    					<p className="subtitle">{tempt[4]} C</p>
    					<img className="image is-128x128" src={weatherm[4]}/>
    				</div>
					</div>
    				</body>
  				</div>
			</section>
		);
	}
}

export default Weather
