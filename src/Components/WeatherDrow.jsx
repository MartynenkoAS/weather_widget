import React from "react";
import "./WeatherDrow.css";
import AddBlockElement from "./AddBlockElement";

const WeatherDrow = ( data ) => {
    
    return (
        <>
            <div className="main_block">
                <div className="place">
                    <div className="place_name"> {data.mainData[0].cityName} </div>
                    <div>Страна: {data.mainData[0].cityCountry}</div>
                    <div>Население: {data.mainData[0].cityPopul}</div>
                </div>
                <div className="place">
                    <div>Сейчас</div>
                    <div className="temp">{data.mainData[0].temp}</div>
                    <div>Ощущается как: {data.mainData[0].tempLike}</div>
                </div>
                <div className="place place_date">
                    <div className="place_name"> {data.mainData[0].dataTimeText} </div>
                    <img className="place_icon" src={data.mainData[0].icon} alt="wether icon" />
                    <div>{data.mainData[0].weathDescript}</div>
                    <div>{`Восход: ${data.mainData[0].citySunrise} Закат: ${data.mainData[0].citySunset}`}</div>
                </div>
            </div>
            
            {<div className="add_block">                                                                            
                {!data.switchChekboxValue && data.mainData.length > 0 && (<AddBlockElement {...data} index={0} />)} {/* проверка data.mainData.length нужна т.к. иногда возращается меньше элементов чем нужно. особенность API, если запрашивать прогноз ночью */}
                { data.switchChekboxValue && data.mainData.length > 0 && (<AddBlockElement {...data} index={1} />)}
                { data.switchChekboxValue && data.mainData.length > 1 && (<AddBlockElement {...data} index={2} />)}
                { data.switchChekboxValue && data.mainData.length > 2 && (<AddBlockElement {...data} index={3} />)}
                { data.switchChekboxValue && data.mainData.length > 3 && (<AddBlockElement {...data} index={4} />)}
                { data.switchChekboxValue && data.mainData.length > 4 && (<AddBlockElement {...data} index={5} />)}
            </div>}
        </>
    )
}

export default WeatherDrow;