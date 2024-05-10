import React, { useState, useEffect, Fragment } from "react";
import style from "./style.module.css";
import placeholder from "./img/placeholder.png";
import ToggleSwitch from "./ToggleSwitch";
import { getWetherData } from "./getWetherData";
import Inputblock from "./inputblock";
import WeatherDrow from "./WeatherDrow";

const Wetherblock = () => {
  const [isPlcToggle, setIsPlcToggle] = useState(true);                         // для включения/выключения поля ввода города
  const [switchChekboxValue, setSwitchChekboxValue] = useState(true);           // для переключателя 1/5 дней прогноза
  const [placeName, setPlaceName] = useState("");                               // введенный город
  const [mainData, setMainData] = useState([]);

  useEffect(() => {                                                             // запускаем функцию получения прогноза при переключении поля ввода
    if (!isPlcToggle) {
        getWetherData(placeName).then((resMainData) => {
        setMainData(resMainData); 
        setPlaceName("");
        });
    }
  }, [isPlcToggle]);                                                              // webpack тут выдает предупреждение, но я его игнорирую сознаетльно 

  const handlerChangeToggle = ()  => setSwitchChekboxValue(!switchChekboxValue);         // переключаем тумблер 1/5 дней
  const PlcHldButton        = ()  => setIsPlcToggle(!isPlcToggle);                       // переключаем ввод города, обнуляем введенное название
  const handlerChangeInput  = (e) => setPlaceName(e.target.value);                       // записываем введенный город

  return (
    <>
      <div className={style.header}>
        <img className={style.plchlder} onClick={PlcHldButton} src={placeholder} alt="/src/img/placeholder.png" />
        {isPlcToggle ? ( <Inputblock handlerChangeInput={handlerChangeInput} ChangeInputFunc={PlcHldButton} />) : (<div className={style.title}> Для выбора места нажмите иконку слева </div>)}
        <ToggleSwitch label="View" swithChekboxValue={switchChekboxValue} switchCekboxFunc={handlerChangeToggle} />
      </div>
      {mainData.length > 0 && (<WeatherDrow mainData={mainData} switchChekboxValue={switchChekboxValue} />)}
    </>
  );
};
export default Wetherblock;