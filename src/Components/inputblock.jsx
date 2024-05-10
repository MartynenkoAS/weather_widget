import React from "react";
import "./inputblock.css"
import targetbutton from "./img/targetbutton.png"

const Inputblock = ({handlerChangeInput, ChangeInputFunc}) => {

    function handleKeyPress (e) {
        if(e.key === 'Enter' || e.key === 'Space'){ 
            ChangeInputFunc()
        }
    }

    return (
        <div className="block">
            <input className="input" type="text" onChange={handlerChangeInput} placeholder="Введите город или оставьте поле пустым для определения текущих координат" onKeyDown={handleKeyPress} />
            <img className="imgbutton" src={targetbutton} alt="./targetbutton.png" onClick={ChangeInputFunc} />
        </div>
    )
}

export default Inputblock;