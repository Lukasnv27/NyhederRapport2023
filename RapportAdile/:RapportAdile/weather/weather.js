const resultWeather = async () => {
  
      let resultWeather = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/k%C3%B8benhavn?unitGroup=metric&key=FSSVXHRFQN3JPU769WNE6RWEY&contentType=json'
      
      ).then((r) => 
      {return r.json()}); 
      //ændrede den til grader inde på hjemmesiden


      console.log(resultWeather);
        
        let tempratur = document.createElement('div');
        tempratur.classList.add("tempratur");
        tempratur.textContent = resultWeather.days[0].temp + "º";
        venstre.append(tempratur);
        
        let location = document.createElement('div');
        location.classList.add("location");
        location.textContent = resultWeather.address + ", "+resultWeather.resolvedAddress.replace ("København, Hovedstaden,"," ");
        venstre.append(location);

        let sunriseTime = document.createElement('div');
        sunriseTime.classList.add("sunriseTime")
        sunriseTime.textContent = resultWeather.days[0].sunrise.slice(0,5); /*slice betyder at man fjerner en del af klokken*/
        center.append(sunriseTime);
        feather.replace() //kalder på ikonet

        
        let sunsetTime = document.createElement('div');
        sunsetTime.classList.add("sunsetTime")
        sunsetTime.textContent = resultWeather.days[0].sunset.slice(0,5); 
        højre.append(sunsetTime)

        //READ MORE
        const weekURL = "https://www.visualcrossing.com/weather-forecast/copenhagen";

        let readmoreWeatherDiv = document.createElement("div");
            readmoreWeatherDiv.setAttribute("id","readmoreWeatherDiv");
        let readmoreWeather = document.createElement("form");
            readmoreWeather.setAttribute("id","readmoreWeather");

        let readmoreWeatherB = document.createElement("button"); 
            readmoreWeatherB.setAttribute("id","readmoreWeatherB");
            readmoreWeatherB.innerHTML = "Read more"; 
            readmoreWeather.action = weekURL;
            højre.append(readmoreWeatherDiv)
            readmoreWeatherDiv.append(readmoreWeather); 
            readmoreWeather.append(readmoreWeatherB); 
            

            let forecastTop = document.createElement("div");
            forecastTop.classList.add("forecastTop");

            let forecastText = document.createElement("p");
            forecastText.innerHTML="Forecast";
            forecastText.setAttribute("id", "forecastText");


            let weatherWeekB = document.createElement("button");
            weatherWeekB.setAttribute("id", "weatherWeekB");
            weatherWeekB.innerHTML = "Read more";
            weatherWeek.action = weekURL;
            let weatherWeekLine = document.createElement("div")
            weatherWeekLine.setAttribute("id", "weatherWeekLine");


            weatherWeek.append(forecastTop);
            forecastTop.append(forecastText);
            forecastTop.append(weatherWeekB);
            weatherWeek.append(weatherWeekLine)
            
       ;
 

            let day = new Date();
            let currentDay = day.getDay();
            
            //samlet div
            let tempAndDays1 = document.createElement("div");
            tempAndDays1.classList.add("tempAndDays1");

            for (let index = 1; index < 8; index++) {

                tempAndDays2 = document.createElement("div");
                tempAndDays2.classList.add("tempAndDays2");
           
                //days
            
               const daysArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; //vi laver den dobbelt, hvis ikke siger den undefined
                
               let daysWeek = document.createElement("div");
               daysWeek.classList.add("daysWeek");
               let forecastDay = document.createElement("p");

              forecastDay.innerHTML = daysArray[index+currentDay];


                let iconDiv = document.createElement("img");
                iconDiv.classList.add("iconDiv");
                let myIcon = "icons/" + resultWeather.days[index].icon + ".png";
                iconDiv.src = myIcon;
               
                
                    
                let tempraturWeek = document.createElement("div"); //giver små box et div gennem 
                tempraturWeek.classList.add("tempraturWeek"); //giver den en class så jeg kan style den
                tempraturWeek.textContent = resultWeather.days[index].temp + "º";
                
               

               //append
               weatherWeek.append(tempAndDays1);
               tempAndDays1.append(tempAndDays2);
               tempAndDays2.append(forecastDay,iconDiv,tempraturWeek);
        

            }

            
};

   resultWeather();

