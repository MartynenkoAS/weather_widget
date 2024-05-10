import React from "react";
import "./AddBlockElement.css";
let isToday = "";

const AddBlockElement = ( data ) => {

    data.switchChekboxValue ? isToday="add_block-elementGroup" : isToday="add_block-elmt";
    return (
            <div className={isToday}>
                {data.switchChekboxValue && <div>
                    <div className="add_block-element">
                        <div className="add_block-elementBody">{data.mainData[data.index].dataTimeText}</div>
                    </div>
                    <div className="add_block-element">
                        <div className="add_block-elementBody">{data.mainData[data.index].temp}</div>
                        <div className="add_block-elementHead">Ощущается как: {data.mainData[data.index].tempLike}</div>
                    </div>
                    <div className="add_block-element">
                        <img className="icon" src={data.mainData[data.index].icon} alt="wether icon" />
                        <div className="add_block-elementHead">{data.mainData[data.index].weathDescript}</div>
                    </div>
                </div>}
                <div className="add_block-element" >
                    <p className="add_block-elementHead">Давление</p>
                    <div className="add_block-elementBody">{data.mainData[data.index].pressure}</div>
                </div>
                <div className="add_block-element" >
                    <p className="add_block-elementHead">Влажность</p>
                    <div className="add_block-elementBody">{data.mainData[data.index].humidity}</div>
                </div>
                <div className="add_block-element" >
                    <p className="add_block-elementHead">Ветер</p>
                    <div className="add_block-elementBody">{data.mainData[data.index].windSpeed}</div>
                </div>
                <div className="add_block-element" >
                    <p className="add_block-elementHead">Вероятность осадков</p>
                    <div className="add_block-elementBody">{data.mainData[data.index].rainProb}</div>
                </div>
            </div>
        )
}
export default AddBlockElement;