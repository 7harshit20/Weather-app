class UI{

    fillData(city){
        document.getElementById('w-location').textContent=
        `${city.location.name}, ${city.location.country}`;
        document.getElementById('w-desc').textContent=
        `${city.current.condition.text}`;
        document.getElementById('w-string').textContent=
        `${city.current.temp_c} C (${city.current.temp_f})`;
        document.getElementById('w-icon').setAttribute('src',city.current.condition.icon);
        document.getElementById('w-humidity').textContent=
        `Relative Humidity: ${city.current.humidity}%`;
        document.getElementById('w-cloud').textContent=
        `Cloud: ${city.current.cloud} oktas`;
        document.getElementById('w-feels-like').textContent=
        `Feels like: ${city.current.feelslike_c} F`;
        document.getElementById('w-wind').textContent=
        `Wind: From the ${city.current.wind_dir} at ${city.current.wind_kph} KPH`;

        localStorage.setItem('city',JSON.stringify(city));
    }

    fillLocal(){
        const city=JSON.parse(localStorage.getItem('city'));
        this.fillData(city);
    }
}