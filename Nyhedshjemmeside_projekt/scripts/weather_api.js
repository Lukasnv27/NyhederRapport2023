

const getCurrentWeather = async () => {
    let response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=e18d49fe27fd46dcb1b155219220712&q=Copenhagen&days=7&aqi=no&alerts=no',
        {
            method: 'GET',
        }
    );
    const weather = await response.json();
    console.log(weather)

    var current_weather_temperature = weather.current.temp_c
    var temp_upload = document.getElementById("temperature")
    temp_upload.innerText = current_weather_temperature + "°"

    var current_weather_condition = weather.current.condition.icon
    var condition_upload = document.getElementById ("condition_icon")
    condition_upload.src = current_weather_condition

    var current_weather_location = weather.location.name + ", " + weather.location.country
    var location_upload = document.getElementById("location")
    location_upload.innerText = current_weather_location

}

getCurrentWeather()


const getSunriseAndSunset = async () => {
    let response = await fetch("http://api.weatherapi.com/v1/astronomy.json?key=e18d49fe27fd46dcb1b155219220712&q=Copenhagen&dt=2022-12-07",
        {
            method: 'GET',
        }
    );
    const sun = await response.json();
    console.log(sun)

    var sunrise_time = sun.astronomy.astro.sunrise
    var sunrise_upload = document.getElementById("sunrise_time")
    sunrise_upload.innerText = sunrise_time
    
    var sunset_time = sun.astronomy.astro.sunset
    var sunset_upload = document.getElementById("sunset_time")
    sunset_upload.innerText = sunset_time
}

getSunriseAndSunset()

const getForecast = async () => {
    let response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/copenhagen?unitGroup=metric&key=K77LAPMYPCMJ9DHBL8YWLYPTB&contentType=json",
        {
            method: 'GET',
        }
    );
    const forecast = await response.json();
    console.log(forecast)

    const short_day_names = [
        'Søn', 'Man',
        'Tir', 'Ons', 
        'Tor', 'Fre', 'Lør'
    ];

    for(var i = 0; i<7; i++){

        var weather_condition_icon = "Weather_Icons/"+forecast.days[i].icon + ".png" 
        var weather_condition_icon_upload = document.getElementById("condition_icon_"+i)
        weather_condition_icon_upload.src = weather_condition_icon

        var date_time = forecast.days[i].datetime
        var date_object = new Date(date_time)
        var day_number = date_object.getDay()
        var day_name = short_day_names[day_number]
        var day_upload = document.getElementById ("days_forecast_"+i)
        day_upload.innerText = day_name

        var temp_7_day_forecast = forecast.days[i].temp
        var temp_forecast_upload = document.getElementById("forecast_temp_"+i)
        temp_forecast_upload.innerText= temp_7_day_forecast

    }
}
 getForecast()



