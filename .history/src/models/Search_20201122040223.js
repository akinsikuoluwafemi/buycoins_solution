import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
        
    }


    async  getWeatherHours(product,app_id,app_code) {
        try {
                // const app_id = `DemoAppId01082013GAL`;
            //    const app_code = `AJKnXv84fjrb0KIHawS0Tg`;
            // const proxy = `https://cors-anywhere.herokuapp.com/`

            const request = await axios(`https://weather.cit.api.here.com/weather/1.0/report.json?product=${product}&name=${this.query}&app_id=${app_id}&app_code=${app_code}`)
                let { data } = request;
                let { hourlyForecasts } = data;
                let { forecastLocation } = hourlyForecasts;
                let { forecast } = forecastLocation;
                this.resultHours = forecast;
                console.log(this.resultHours);
            
           
        }
        catch(err) {  
            console.log(`This is an error: ${err}`);
        }


    }

    async getWeatherDays(product, app_id, app_code) {
        
        try {
        // const proxy = `https://cors-anywhere.heroku.com/`;

                // const app_id = `DemoAppId01082013GAL`;
                //    const app_code = `AJKnXv84fjrb0KIHawS0Tg`;
            const request = await axios(`https://weather.cit.api.here.com/weather/1.0/report.json?product=${product}&name=${this.query}&app_id=${app_id}&app_code=${app_code}`)
                let { data } = request;
                let { forecasts } = data;
                let { forecastLocation } = forecasts;
                let { forecast } = forecastLocation;
            this.resultDays = forecast;
            console.log(this.resultDays);
           
        }
        catch(err) {
            console.log(`This is an error: ${err}`);
        }

    }


     async getAlerts(product, app_id, app_code) {
        
        try {
            // const proxy = `https://cors-anywhere.heroku.com/`;
            
                // const app_id = `DemoAppId01082013GAL`;
            //    const app_code = `AJKnXv84fjrb0KIHawS0Tg`;
            const request = await axios(`https://weather.cit.api.here.com/weather/1.0/report.json?product=${product}&name=${this.query}&app_id=${app_id}&app_code=${app_code}`)
                let { data } = request;
            let { alerts } = data;
            this.resultAlerts = alerts
            console.log(this.resultAlerts);

            
        }
        catch(err) {
            console.log(`This is an error: ${err}`);
        }

    }


} 





    


