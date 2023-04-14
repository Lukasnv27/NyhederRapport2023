window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
    selector:".weatherWidget",
    apiKey:"7ZH8W4TAVRF69VBYLZ6XV9L5D", //Sign up for your personal key
    location:"Copenhagen, DK", //Enter an address
    unitGroup:"metric", //"us" or "metric"
    forecastDays:7, //how many days forecast to show
    title:"Copenhagen,DK", //optional title to show in the
    showTitle:true, 
    showConditions:true
   });
  
   (function() {
   var d = document, s = d.createElement('script'); 
   s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
   s.setAttribute('data-timestamp', +new Date()); 
   (d.head || d.body).appendChild(s);
   })();

   // https://www.visualcrossing.com/resources/documentation/weather-api/how-do-i-add-weather-forecast-to-my-webpage/
   // kode skrevet af visualcrossing   