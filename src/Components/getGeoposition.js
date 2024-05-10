

export async function getGeoposition() {
    
    let result = "";

    const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, 
            
            function(reject) {
                alert ("Не возможно получить координаты.\nРазрешите определение местоположения в настройках Вашего браузера.\nКод ошибки: " + reject.code + " / " + reject.message)
            }
        );       
    });
    
    result = `&lat=${pos.coords.longitude}&lon=${pos.coords.latitude}`;

    return result;
}