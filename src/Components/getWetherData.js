import { getGeoposition } from "./getGeoposition";

const APIKEY   = "183f5cf572c65e80e6c55e7b579b637c";
const URL      = `http://api.openweathermap.org/data/2.5/forecast?&appid=${APIKEY}&units=metric&lang=ru`;
const TIMEHOUR = 12;
let   mainData = [];


export async function getWetherData(PLACE) {
    
    let placeFinal = "";
    if (PLACE === "") {
        let geopositionResult = await getGeoposition();
            placeFinal = geopositionResult;
    } else {
            placeFinal = "&q=" + PLACE;
    }
    
    let fullURL = URL + placeFinal;

    return fetch(fullURL) 
            .then( (response) => { return response.json(); })
            .then( (data) => {
                
                if (data.cod === "200") {
                    mainData = [];
                    for (let i = 0; i < data.list.length; i++) {
                        
                        let objData = new Date(data.list[i].dt_txt);
                        
                        if (objData.getHours() === TIMEHOUR || i === 0 || i === data.list.length-1 ) {

                            let dataTimeUTC = new Date(data.list[i].dt * 1000);                             // переводим в миллисекунды, т.к. получаем секунды
                                dataTimeUTC.setHours(dataTimeUTC.getHours()-3);                             // корректируем время часового пояса

                            let getingElement = {
                                
                                dataTimeText:  new Intl.DateTimeFormat("ru", 
                                                {weekday: "long", year: 'numeric', month: '2-digit', day: '2-digit'}).format(dataTimeUTC),
                                dataTime:      data.list[i].dt,
                                temp:          data.list[i].main.temp + " °c",
                                tempLike:      data.list[i].main.feels_like + " °c",
                                pressure:      data.list[i].main.pressure + " hPa",
                                humidity:      data.list[i].main.humidity + " %",
                                weathDescript: data.list[i].weather[0].description,
                                icon:          `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`,
                                windSpeed:     data.list[i].wind.speed + " м/с",
                                windDirect:    data.list[i].wind.deg + " grad",
                                rainProb:      data.list[i].pop + " %",
                                cityCountry:   data.city.country,
                                cityName:      data.city.name,
                                cityPopul:     new Intl.NumberFormat("ru").format(data.city.population),
                                citySunrise:   new Intl.DateTimeFormat("ru", {timeStyle: "short"}).format(data.city.sunrise * 1000),
                                citySunset:    new Intl.DateTimeFormat("ru", {timeStyle: "short"}).format(data.city.sunset  * 1000)
                            }
                            mainData.push(getingElement)
                        }
                    };
                    
                    
                } else {
                    alert ("Не возможно определить введенный населенный пункт\n\n" + data.cod + " / " + data.message)
                }
                
                return mainData;
            })
            .catch( (error) => { alert ("Данные не получены \n" + error); });

}
