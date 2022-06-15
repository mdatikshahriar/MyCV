$(document).ready(() => {

    const api = 'https://api.openweathermap.org/data/2.5/weather?lat=23.788659&lon=90.411470&appid=115d54f3a041ee26a278721da1902672';
    
    $.get(api)
    .then((response) => {
        let { name, sys: { country }, weather: [ { main: main_condition, description } ],
            main: { temp, feels_like, pressure, humidity }, wind: { speed: wind_speed} } = response;

        const location_temp = `${name}, ${country} ~ (${(temp - 273.15).toFixed(2)}\u00B0C)`;
        const condition = `: ${main_condition}, ${description}`;
        feels_like = `: ${(feels_like - 273.15).toFixed(2)}\u00B0C`;
        pressure = `: ${pressure} mb`;
        humidity = `: ${humidity}%`;
        wind_speed = `: ${wind_speed} km/h`;
        
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