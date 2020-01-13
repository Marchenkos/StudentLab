const APIkey = "7e3d24dcd28adb946abe1b502b8a5df8";

export function getWeatherForWeek(cityName) {
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&lang=ru&units=metric&APPID=${APIkey}`;

    return fetch(weatherURL)
        .then(res => res.json())
        .then(data => data);
}

export function getWeatherNow(cityName) {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=en&units=metric&APPID=${APIkey}`;
    
    return fetch(weatherURL)
        .then(res => res.json())
        .then(data => data);
}

export function getWeatherToday(cityName, currentDate, maxResult) {
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&lang=ru&units=metric&APPID=${APIkey}`;

    return fetch(weatherURL)
        .then(res => res.json())
        .then(data => {
            const dailyData = data.list.filter(reading => reading.dt_txt.includes(currentDate));
            const countResult = dailyData.length;

            if (countResult < maxResult) {
                for (let i = countResult; i < maxResult; i++) {
                    dailyData.push(data.list[i]);
                }
            }

            return dailyData;
        });
}
