// Her laver jeg en funktion som henter jeg API til solopgang og solnedgang og indsætter i min HTML
const getWeather = async () => {
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/copenhagen%2C%20dk/next7days?unitGroup=metric&elements=name%2Ctempmax%2Ctemp%2Csunrise%2Csunset%2Cicon&include=fcst%2Cdays%2Ccurrent&key=4MJKAAHGADVBP5UQE7VBGKW6Q&contentType=json",
        {
            method: 'GET',
        });

    const forecastData = await response.json();
    console.log(forecastData);

    // Her laver jeg nuværende temperatur
    let currentWeatherTemp = document.getElementById('currentWeatherTopTemp')

    let venstreTemp = document.createElement('div');
    venstreTemp.classList.add('venstreTemp');
    venstreTemp.textContent = forecastData.currentConditions.temp + "°";
    currentWeatherTemp.appendChild(venstreTemp)

    let currentWeatherLocation = document.getElementById('currentWeatherBottomLocation')
    let venstreTempLocation = document.createElement('p');
    venstreTempLocation.classList.add('venstreTempLocation');
    venstreTempLocation.textContent = forecastData.address;
    currentWeatherLocation.appendChild(venstreTempLocation)

    //Her laver jeg solopgang
    let currentSunrise = document.getElementById('currentSunrise');

    let sunriseTime = document.createElement('div');
    sunriseTime.classList.add('sunriseTime');
    sunriseTime.textContent = forecastData.currentConditions.sunrise.slice(0,5);
    currentSunrise.appendChild(sunriseTime)

    //Her laver jeg solnedgang
    let currentSunset = document.getElementById('currentSunset');

    let sunsetTime = document.createElement('div');
    sunriseTime.classList.add('sunsetTime');
    sunsetTime.textContent = forecastData.currentConditions.sunset.slice(0,5)
    currentSunset.appendChild(sunsetTime)

    
    // Her laver jeg vejrudsigten
    // Dag 1
    let forecastDayOne = document.getElementById('forcastWeatherTempOne');
    let forecastOneTemp = document.createElement('div');
    forecastOneTemp.classList.add('forecastOneTemp');
    forecastOneTemp.textContent = forecastData.days[1].tempmax + "°";
    forecastDayOne.appendChild(forecastOneTemp);

    // Dag 2
    let forecastDayTwo = document.getElementById('forcastWeatherTempTwo');
    let forecastTwoTemp = document.createElement('div');
    forecastTwoTemp.classList.add('forecastTwoTemp');
    forecastTwoTemp.textContent = forecastData.days[2].tempmax + "°";
    forecastDayTwo.appendChild(forecastTwoTemp);

    // Dag 3
    let forecastDayThree = document.getElementById('forcastWeatherTempThree');
    let forecastThreeTemp = document.createElement('div');
    forecastThreeTemp.classList.add('forecastThreeTemp');
    forecastThreeTemp.textContent = forecastData.days[3].tempmax + "°";
    forecastDayThree.appendChild(forecastThreeTemp);

    // Dage 4
    let forecastDayFour = document.getElementById('forcastWeatherTempFour');
    let forecastFourTemp = document.createElement('div');
    forecastFourTemp.classList.add('forecastFourTemp');
    forecastFourTemp.textContent = forecastData.days[4].tempmax + "°";
    forecastDayFour.appendChild(forecastFourTemp);

    // Dag 5
    let forecastDayFive = document.getElementById('forcastWeatherTempFive');
    let forecastFiveTemp = document.createElement('div');
    forecastFiveTemp.classList.add('forecastFiveTemp');
    forecastFiveTemp.textContent = forecastData.days[5].tempmax + "°";
    forecastDayFive.appendChild(forecastFiveTemp);

    // Dag 6
    let forecastDaySix = document.getElementById('forcastWeatherTempSix');
    let forecastSixTemp = document.createElement('div');
    forecastSixTemp.classList.add('forecastSixTemp');
    forecastSixTemp.textContent = forecastData.days[6].tempmax + "°";
    forecastDaySix.appendChild(forecastSixTemp);

    // Dag 7
    let forecastDaySeven = document.getElementById('forcastWeatherTempSeven');
    let forecastSevenTemp = document.createElement('div');
    forecastSevenTemp.classList.add('forecastSevenTemp');
    forecastSevenTemp.textContent = forecastData.days[7].tempmax + "°";
    forecastDaySeven.appendChild(forecastSevenTemp);

    // Her henter jeg ikonerne til vejrudsigten. Jeg laver funktioner som kan lave flere elementer
    //Regn ikon
    function createElementRain(tag, className) {
        let rainElement = document.createElement('img');
        rainElement.classList.add('rainIcon');
        rainElement.src = "../Billeder/rain.png"
        return rainElement;
    }

    // Sky ikon
    function createElemenCloud(tag, className) {
        let cloudElement = document.createElement('img');
        cloudElement.classList.add('cloudIcon');
        cloudElement.src = "../Billeder/cloud.png"
        return cloudElement;
    }

    // sol og sky ikon
    function createElementSunAndCloud(tag, className) {
        let sunCloudElement = document.createElement('img');
        sunCloudElement.classList.add('partlyCloudyIcon');
        sunCloudElement.src = "../Billeder/partlyCloudy.png"
        return sunCloudElement;
    }

    // sol ikon
    function createElementSun(tag, className) {
        let sunElement = document.createElement('img');
        sunElement.classList.add('sunIcon');
        sunElement.src = "../Billeder/sun.png"
        return sunElement;
    }

    // vind ikon
    function createElementWind(tag, className) {
        let windElement = document.createElement('img');
        windElement.classList.add('windIcon');
        windElement.src = "../Billeder/wind.png"
        return windElement;
    }

    // tåge ikon
    function createElementFog(tag, className) {
        let fogElement = document.createElement('img');
        fogElement.classList.add('fogIcon');
        fogElement.src = "../Billeder/fog.png"
        return fogElement;
    }

    // sne ikon
    function createElementSnow(tag, className) {
        let snowElement = document.createElement(tag);
        snowElement.classList.add(className);
        snowElement.src = "../Billeder/snow.png"
        return snowElement;
    }
    
    let todaysWeatherIconDiv = document.getElementById('currentWeatherTopIcon');
    let forecastOneIconDiv = document.getElementById('forecastWeatherIconOne');
    let forecastTwoIconDiv = document.getElementById('forecastWeatherIconTwo');
    let forecastThreeIconDiv = document.getElementById('forecastWeatherIconThree');
    let forecastFourIconDiv = document.getElementById('forecastWeatherIconFour');
    let forecastFiveIconDiv = document.getElementById('forecastWeatherIconFive');
    let forecastSixIconDiv = document.getElementById('forecastWeatherIconSix');
    let forecastSevenIconDiv = document.getElementById('forecastWeatherIconSeven');

    // Her appender jeg det korrekte ikon ift array'et
    // I Dags, vejr
    if (forecastData.days[0].icon === "rain") {
        todaysWeatherIconDiv.appendChild(createElementRain('img', 'rainIcon'))
    } else if (forecastData.days[0].icon === "snow") {
        todaysWeatherIconDiv.appendChild(createElementSnow('img', 'snowIcon'))
    } else if (forecastData.days[0].icon === "fog") {
        todaysWeatherIconDiv.appendChild(createElementFog('img', 'fogIcon'))
    } else if (forecastData.days[0].icon === "wind") {
        todaysWeatherIconDiv.appendChild(createElementWind('img', 'windIcon'))
    } else if (forecastData.days[0].icon === "cloudy") {
        todaysWeatherIconDiv.appendChild(createElemenCloud('img', 'cloudIcon'))
    } else if (forecastData.days[0].icon === "partly-cloudy-day") {
        todaysWeatherIconDiv.appendChild(createElementSunAndCloud('img', 'partlyCloudyIcon'))
    } else if (forecastData.days[0].icon === "partly-cloudy-night") {
        todaysWeatherIconDiv.appendChild(createElementSunAndCloud('img', 'partlyCloudyIcon'))
    } else if (forecastData.days[0].icon === "clear-day") {
        todaysWeatherIconDiv.appendChild(createElementSun('img', 'sunIcon'))
    } else if (forecastData.days[0].icon === "clear-night") {
        todaysWeatherIconDiv.appendChild(createElementSun('img', 'sunIcon'))
    };

    // Dag 1
    if (forecastData.days[1].icon === "rain") {
        forecastOneIconDiv.appendChild(createElementRain('img', 'rainIcon'))
    } else if (forecastData.days[1].icon === "snow") {
        forecastOneIconDiv.appendChild(createElementSnow('img', 'snowIcon'))
    } else if (forecastData.days[1].icon === "fog") {
        forecastOneIconDiv.appendChild(createElementFog('img', 'fogIcon'))
    } else if (forecastData.days[1].icon === "wind") {
        forecastOneIconDiv.appendChild(createElementWind('img', 'windIcon'))
    } else if (forecastData.days[1].icon === "cloudy") {
        forecastOneIconDiv.appendChild(createElemenCloud('img', 'cloudIcon'))
    } else if (forecastData.days[1].icon === "partly-cloudy-day") {
        forecastOneIconDiv.appendChild(createElementSunAndCloud('img', 'partlyCloudyIcon'))
    } else if (forecastData.days[1].icon === "partly-cloudy-night") {
        forecastOneIconDiv.appendChild(createElementSunAndCloud('img', 'partlyCloudyIcon'))
    } else if (forecastData.days[1].icon === "clear-day") {
        forecastOneIconDiv.appendChild(createElementSun('img', 'sunIcon'))
    } else if (forecastData.days[1].icon === "clear-night") {
        forecastOneIconDiv.appendChild(createElementSun('img', 'sunIcon'))
    };
    
     //Dag 2
    if (forecastData.days[2].icon === "rain") {
        forecastTwoIconDiv.appendChild(createElementRain('img', 'rainIcon'))
    } else if (forecastData.days[2].icon === "snow") {
        forecastTwoIconDiv.appendChild(createElementSnow('img', 'snowIcon'))
    } else if (forecastData.days[2].icon === "fog") {
        forecastTwoIconDiv.appendChild(createElementFog('img', 'fogIcon'))
    } else if (forecastData.days[2].icon === "wind") {
        forecastTwoIconDiv.appendChild(createElementWind('img', 'windIcon'))
    } else if (forecastData.days[2].icon === "cloudy") {
        forecastTwoIconDiv.appendChild(createElemenCloud('img', 'cloudIcon'))
    } else if (forecastData.days[2].icon === "partly-cloudy-day") {
        forecastTwoIconDiv.appendChild(createElementSunAndCloud('img', 'partlyCloudyIcon'))
    } else if (forecastData.days[2].icon === "partly-cloudy-night") {
        forecastTwoIconDiv.appendChild(createElementSunAndCloud('img', 'partlyCloudyIcon'))
    } else if (forecastData.days[2].icon === "clear-day") {
        forecastTwoIconDiv.appendChild(createElementSun('img', 'sunIcon'))
    } else if (forecastData.days[2].icon === "clear-night") {
        forecastTwoIconDiv.appendChild(createElementSun('img', 'sunIcon'))
    };

    // Dag 3
    if (forecastData.days[3].icon === "rain") {
        forecastThreeIconDiv.appendChild(createElementRain('img', 'rainIcon'))
    } else if (forecastData.days[3].icon === "snow") {
        forecastThreeIconDiv.appendChild(createElementSnow('img', 'snowIcon'))
    } else if (forecastData.days[3].icon === "fog") {
        forecastThreeIconDiv.appendChild(createElementFog('img', 'fogIcon'))
    } else if (forecastData.days[3].icon === "wind") {
        forecastThreeIconDiv.appendChild(createElementWind('img', 'windIcon'))
    } else if (forecastData.days[3].icon === "cloudy") {
        forecastThreeIconDiv.appendChild(createElemenCloud('img', 'cloudIcon'))
    } else if (forecastData.days[3].icon === "partly-cloudy-day") {
        forecastThreeIconDiv.appendChild(createElementSunAndCloud('img', 'partlyCloudyIcon'))
    } else if (forecastData.days[3].icon === "partly-cloudy-night") {
        forecastThreeIconDiv.appendChild(createElementSunAndCloud('img', 'partlyCloudyIcon'))
    } else if (forecastData.days[3].icon === "clear-day") {
        forecastThreeIconDiv.appendChild(createElementSun('img', 'sunIcon'))
    } else if (forecastData.days[3].icon === "clear-night") {
        forecastThreeIconDiv.appendChild(createElementSun('img', 'sunIcon'))
    };

    // Dag 4
    if (forecastData.days[4].icon === "rain") {
        forecastFourIconDiv.appendChild(createElementRain('img', 'rainIcon'))
    } else if (forecastData.days[4].icon === "snow") {
        forecastFourIconDiv.appendChild(createElementSnow('img', 'snowIcon'))
    } else if (forecastData.days[4].icon === "fog") {
        forecastFourIconDiv.appendChild(createElementFog('img', 'fogIcon'))
    } else if (forecastData.days[4].icon === "wind") {
        forecastFourIconDiv.appendChild(createElementWind('img', 'windIcon'))
    } else if (forecastData.days[4].icon === "cloudy") {
        forecastFourIconDiv.appendChild(createElemenCloud('img', 'cloudIcon'))
    } else if (forecastData.days[4].icon === "partly-cloudy-day") {
        forecastFourIconDiv.appendChild(createElementSunAndCloud('img', 'partlyCloudyIcon'))
    } else if (forecastData.days[4].icon === "partly-cloudy-night") {
        forecastFourIconDiv.appendChild(createElementSunAndCloud('img', 'partlyCloudyIcon'))
    } else if (forecastData.days[4].icon === "clear-day") {
        forecastFourIconDiv.appendChild(createElementSun('img', 'sunIcon'))
    } else if (forecastData.days[4].icon === "clear-night") {
        forecastFourIconDiv.appendChild(createElementSun('img', 'sunIcon'))
    };

    // Dag 5
    if (forecastData.days[5].icon === "rain") {
        forecastFiveIconDiv.appendChild(createElementRain('img', 'rainIcon'))
    } else if (forecastData.days[5].icon === "snow") {
        forecastFiveIconDiv.appendChild(createElementSnow('img', 'snowIcon'))
    } else if (forecastData.days[5].icon === "fog") {
        forecastFiveIconDiv.appendChild(createElementFog('img', 'fogIcon'))
    } else if (forecastData.days[5].icon === "wind") {
        forecastFiveIconDiv.appendChild(createElementWind('img', 'windIcon'))
    } else if (forecastData.days[5].icon === "cloudy") {
        forecastFiveIconDiv.appendChild(createElemenCloud('img', 'cloudIcon'))
    } else if (forecastData.days[5].icon === "partly-cloudy-day") {
        forecastFiveIconDiv.appendChild(createElementSunAndCloud('img', 'partlyCloudyIcon'))
    } else if (forecastData.days[5].icon === "partly-cloudy-night") {
        forecastFiveIconDiv.appendChild(createElementSunAndCloud('img', 'partlyCloudyIcon'))
    } else if (forecastData.days[5].icon === "clear-day") {
        forecastFiveIconDiv.appendChild(createElementSun('img', 'sunIcon'))
    } else if (forecastData.days[5].icon === "clear-night") {
        forecastFiveIconDiv.appendChild(createElementSun('img', 'sunIcon'))
    };

    // Dag 6
    if (forecastData.days[6].icon === "rain") {
        forecastSixIconDiv.appendChild(createElementRain('img', 'rainIcon'))
    } else if (forecastData.days[6].icon === "snow") {
        forecastSixIconDiv.appendChild(createElementSnow('img', 'snowIcon'))
    } else if (forecastData.days[6].icon === "fog") {
        forecastSixIconDiv.appendChild(createElementFog('img', 'fogIcon'))
    } else if (forecastData.days[6].icon === "wind") {
        forecastSixIconDiv.appendChild(createElementWind('img', 'windIcon'))
    } else if (forecastData.days[6].icon === "cloudy") {
        forecastSixIconDiv.appendChild(createElemenCloud('img', 'cloudIcon'))
    } else if (forecastData.days[6].icon === "partly-cloudy-day") {
        forecastSixIconDiv.appendChild(createElementSunAndCloud('img', 'partlyCloudyIcon'))
    } else if (forecastData.days[6].icon === "partly-cloudy-night") {
        forecastSixIconDiv.appendChild(createElementSunAndCloud('img', 'partlyCloudyIcon'))
    } else if (forecastData.days[6].icon === "clear-day") {
        forecastSevenIconDiv.appendChild(createElementSun('img', 'sunIcon'))
    } else if (forecastData.days[6].icon === "clear-night") {
        forecastSevenIconDiv.appendChild(createElementSun('img', 'sunIcon'))
    };

    // Dag 7
    if (forecastData.days[7].icon === "rain") {
        forecastSevenIconDiv.appendChild(createElementRain('img', 'rainIcon'))
    } else if (forecastData.days[7].icon === "snow") {
        forecastSevenIconDiv.appendChild(createElementSnow('img', 'snowIcon'))
    } else if (forecastData.days[7].icon === "fog") {
        forecastSevenIconDiv.appendChild(createElementFog('img', 'fogIcon'))
    } else if (forecastData.days[7].icon === "wind") {
        forecastSevenIconDiv.appendChild(createElementWind('img', 'windIcon'))
    } else if (forecastData.days[7].icon === "cloudy") {
        forecastSevenIconDiv.appendChild(createElemenCloud('img', 'cloudIcon'))
    } else if (forecastData.days[7].icon === "partly-cloudy-day") {
        forecastSevenIconDiv.appendChild(createElemenCloud('img', 'cloudIcon'))
    } else if (forecastData.days[7].icon === "partly-cloudy-night") {
        forecastSevenIconDiv.appendChild(createElementSunAndCloud('img', 'partlyCloudyIcon'))
    } else if (forecastData.days[7].icon === "clear-day") {
        forecastSevenIconDiv.appendChild(createElementSun('img', 'sunIcon'))
    } else if (forecastData.days[7].icon === "clear-night") {
        forecastSevenIconDiv.appendChild(createElementSun('img', 'sunIcon'))
    };
}
getWeather()


// Her ændrer jeg dagene i vejrudsigten alt efter hvilken dag i ugen det er
let todaysDateForecast = new Date ();
let todaysDayForecast = todaysDateForecast.getDay() // Henter nummeret på ugen

    if (todaysDayForecast === 0) { // søndag
        let forecastWeekdayOne = document.getElementById('forecastWeekdayOne')
        forecastWeekdayOne.innerHTML = "Mon"
        let forecastWeekdayTwo = document.getElementById('forecastWeekdayTwo')
        forecastWeekdayTwo.innerHTML = "Tue"
        let forecastWeekdayThree = document.getElementById('forecastWeekdayThree')
        forecastWeekdayThree.innerHTML = "Wed"
        let forecastWeekdayFour = document.getElementById('forecastWeekdayFour')
        forecastWeekdayFour.innerHTML = "Thu"
        let forecastWeekdayFive = document.getElementById('forecastWeekdayFive')
        forecastWeekdayFive.innerHTML = "Fri"
        let forecastWeekdaySix = document.getElementById('forecastWeekdaySix')
        forecastWeekdaySix.innerHTML = "Sat"
        let forecastWeekdaySeven = document.getElementById('forecastWeekdaySeven')
        forecastWeekdaySeven.innerHTML = "Sun"
    } else if (todaysDayForecast === 1) { // Mandag
        let forecastWeekdayOne = document.getElementById('forecastWeekdayOne')
        forecastWeekdayOne.innerHTML = "Tue"
        let forecastWeekdayTwo = document.getElementById('forecastWeekdayTwo')
        forecastWeekdayTwo.innerHTML = "Wed"
        let forecastWeekdayThree = document.getElementById('forecastWeekdayThree')
        forecastWeekdayThree.innerHTML = "Thu"
        let forecastWeekdayFour = document.getElementById('forecastWeekdayFour')
        forecastWeekdayFour.innerHTML = "Fri"
        let forecastWeekdayFive = document.getElementById('forecastWeekdayFive')
        forecastWeekdayFive.innerHTML = "Sat"
        let forecastWeekdaySix = document.getElementById('forecastWeekdaySix')
        forecastWeekdaySix.innerHTML = "Sun"
        let forecastWeekdaySeven = document.getElementById('forecastWeekdaySeven')
        forecastWeekdaySeven.innerHTML = "Mon"
    } else if (todaysDayForecast == 2) { // Tirsdag
        let forecastWeekdayOne = document.getElementById('forecastWeekdayOne')
        forecastWeekdayOne.innerHTML = "Wed"
        let forecastWeekdayTwo = document.getElementById('forecastWeekdayTwo')
        forecastWeekdayTwo.innerHTML = "Thu"
        let forecastWeekdayThree = document.getElementById('forecastWeekdayThree')
        forecastWeekdayThree.innerHTML = "Fri"
        let forecastWeekdayFour = document.getElementById('forecastWeekdayFour')
        forecastWeekdayFour.innerHTML = "Sat"
        let forecastWeekdayFive = document.getElementById('forecastWeekdayFive')
        forecastWeekdayFive.innerHTML = "Sun"
        let forecastWeekdaySix = document.getElementById('forecastWeekdaySix')
        forecastWeekdaySix.innerHTML = "Mon"
        let forecastWeekdaySeven = document.getElementById('forecastWeekdaySeven')
        forecastWeekdaySeven.innerHTML = "Tue"
    } else if (todaysDayForecast === 3) { // Onsdag
        let forecastWeekdayOne = document.getElementById('forecastWeekdayOne')
        forecastWeekdayOne.innerHTML = "Thu"
        let forecastWeekdayTwo = document.getElementById('forecastWeekdayTwo')
        forecastWeekdayTwo.innerHTML = "Fri"
        let forecastWeekdayThree = document.getElementById('forecastWeekdayThree')
        forecastWeekdayThree.innerHTML = "Sat"
        let forecastWeekdayFour = document.getElementById('forecastWeekdayFour')
        forecastWeekdayFour.innerHTML = "Sun"
        let forecastWeekdayFive = document.getElementById('forecastWeekdayFive')
        forecastWeekdayFive.innerHTML = "Mon"
        let forecastWeekdaySix = document.getElementById('forecastWeekdaySix')
        forecastWeekdaySix.innerHTML = "Tue"
        let forecastWeekdaySeven = document.getElementById('forecastWeekdaySeven')
        forecastWeekdaySeven.innerHTML = "Wed"
    } else if (todaysDayForecast === 4) { // Torsdag
        let forecastWeekdayOne = document.getElementById('forecastWeekdayOne')
        forecastWeekdayOne.innerHTML = "Fri"
        let forecastWeekdayTwo = document.getElementById('forecastWeekdayTwo')
        forecastWeekdayTwo.innerHTML = "Sat"
        let forecastWeekdayThree = document.getElementById('forecastWeekdayThree')
        forecastWeekdayThree.innerHTML = "Sun"
        let forecastWeekdayFour = document.getElementById('forecastWeekdayFour')
        forecastWeekdayFour.innerHTML = "Mon"
        let forecastWeekdayFive = document.getElementById('forecastWeekdayFive')
        forecastWeekdayFive.innerHTML = "Tue"
        let forecastWeekdaySix = document.getElementById('forecastWeekdaySix')
        forecastWeekdaySix.innerHTML = "Wed"
        let forecastWeekdaySeven = document.getElementById('forecastWeekdaySeven')
        forecastWeekdaySeven.innerHTML = "Thu"
    } else if (todaysDayForecast === 5) { // Fredag
        let forecastWeekdayOne = document.getElementById('forecastWeekdayOne')
        forecastWeekdayOne.innerHTML = "Sat"
        let forecastWeekdayTwo = document.getElementById('forecastWeekdayTwo')
        forecastWeekdayTwo.innerHTML = "Sun"
        let forecastWeekdayThree = document.getElementById('forecastWeekdayThree')
        forecastWeekdayThree.innerHTML = "Mon"
        let forecastWeekdayFour = document.getElementById('forecastWeekdayFour')
        forecastWeekdayFour.innerHTML = "Tue"
        let forecastWeekdayFive = document.getElementById('forecastWeekdayFive')
        forecastWeekdayFive.innerHTML = "Wed"
        let forecastWeekdaySix = document.getElementById('forecastWeekdaySix')
        forecastWeekdaySix.innerHTML = "Thu"
        let forecastWeekdaySeven = document.getElementById('forecastWeekdaySeven')
        forecastWeekdaySeven.innerHTML = "Fri"
    } else if (todaysDayForecast === 6) { // Lørdag
        let forecastWeekdayOne = document.getElementById('forecastWeekdayOne')
        forecastWeekdayOne.innerHTML = "Sun"
        let forecastWeekdayTwo = document.getElementById('forecastWeekdayTwo')
        forecastWeekdayTwo.innerHTML = "Mon"
        let forecastWeekdayThree = document.getElementById('forecastWeekdayThree')
        forecastWeekdayThree.innerHTML = "Tue"
        let forecastWeekdayFour = document.getElementById('forecastWeekdayFour')
        forecastWeekdayFour.innerHTML = "Wed"
        let forecastWeekdayFive = document.getElementById('forecastWeekdayFive')
        forecastWeekdayFive.innerHTML = "Thu"
        let forecastWeekdaySix = document.getElementById('forecastWeekdaySix')
        forecastWeekdaySix.innerHTML = "Fri"
        let forecastWeekdaySeven = document.getElementById('forecastWeekdaySeven')
        forecastWeekdaySeven.innerHTML = "Sat"
    }