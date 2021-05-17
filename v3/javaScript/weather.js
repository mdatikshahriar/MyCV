$(document).ready(() => {

    const api = 'https://api.openweathermap.org/data/2.5/weather?lat=24.911944&lon=91.831250&appid=115d54f3a041ee26a278721da1902672';

    $.get(api)
    .then((response) => {
        const location_temp = `${response['name']}, ${response['sys']['country']} - (${(response['main']['temp'] - 273.15).toFixed(2)}\u00B0C)`;
        const condition = `: ${response['weather'][0]['main']}, ${response['weather'][0]['description']}`;
        const feels_like = `: ${(response['main']['feels_like'] - 273.15).toFixed(2)}\u00B0C`;
        const pressure = `: ${response['main']['pressure']} mb`;
        const humidity = `: ${response['main']['humidity']}%`;
        const wind_speed = `: ${response['wind']['speed']} km/h`;
        
        $("#location-temp").html(location_temp);
        $("#condition").html(condition);
        $("#feels-like").html(feels_like);
        $("#pressure").html(pressure);
        $("#humidity").html(humidity);
        $("#wind-speed").html(wind_speed); 
    })
    .catch((error) => {
        alert(error);
    });
});