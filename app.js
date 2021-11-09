const city_input=document.getElementById('city');

const weather = new Weather();
const ui=new UI();
loadEventListeners();

function loadEventListeners(){
    document.getElementById('w-change-btn').addEventListener('click',getWeather);
    document.addEventListener('DOMContentLoaded',getLocal)
}

function getLocal(){
    ui.fillLocal();
}

function getWeather(){
    $('#locModal').modal('hide');
    const city=city_input.value;
    weather.fetchData(city)
    .then(cityData=>{
        console.log(cityData);
        // if(cityData.error.message==="No matching location found."){

        // }else{

        // }
        ui.fillData(cityData);
    })
    .catch(err=>console.log(err));
}