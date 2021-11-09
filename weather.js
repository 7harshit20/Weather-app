class Weather{

    async fetchData(city){
        const res= await fetch(`https://api.weatherapi.com/v1/current.json?key=bc018119c8e0408da8531052212608&q=${city}&aqi=yes`);
        
        const resData=await res.json();
        return resData;
    }
}