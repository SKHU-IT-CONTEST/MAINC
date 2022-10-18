const date = new Date();//Date 객체 생성
const year = date.getFullYear(); //년도 가져오기
const month = String(date.getMonth() + 1).padStart(2, "0");  //2자릿수 만들고 왼쪽부터 0넣기(데이터가 2자릿수이면 2자릿수 그대로 출력)
const day = String(date.getDate()).padStart(2, "0");  //month와 동일한 방식
const hours = String(date.getHours()).padStart(2, "0"); //month와 동일한 방식
const reIndex = `${year}${month}${day}.${hours}00`; //임시 index라는 의미, 백틱 사용해서 json 형태와 똑같이 뽑아내기, 분은 안뽑아냄.

//온도
fetch('https://api3.skhuweather.kro.kr/getWeather')
    .then(response => response.json())
    .then(json => {
        const { T1H, PTY, SKY } = json[reIndex];

        console.log(json[reIndex].T1H) //원래 '20221004.1400' 넣어야 할 부분에 위에서 가져온 데이터와 비교하여 일치하면 넣기 
        let el = document.querySelector('#temperature')
        el.innerHTML = json[reIndex].T1H + "°C";

        //아이콘
        const element1 = document.querySelector('#weather-icon');
        console.log(SKY, PTY);
        const code = `${SKY}${PTY}`;
        const weatherIconMap = {
            10: 'ksun', 11: 'ksun', 41: 'cloudyRain2', 42: 'cloudyRain2', 45: 'cloudyRain2', 31: 'krain', 32: 'krain', 35: 'krain', 30: 'kcloudy', 40: 'kcloudy', 33: 'ksnow', 36: 'ksnow', 37: 'ksnow', 43: 'cloudySnow2', 46: 'cloudySnow2', 47: 'cloudySnow2',
        };
        console.log(weatherIconMap);
        element1.innerHTML = `<img class="weather-kicon" src="img/icon/${weatherIconMap[code]}.png"/>`;

        //강수량
        console.log(json[reIndex].RN1)
        el = document.querySelector('#cloudyData')
        el.innerHTML = json[reIndex].RN1

        //습도
        console.log(json[reIndex].REH)
        el = document.querySelector('#waterData')
        el.innerHTML = json[reIndex].REH
    })

//모바일 확인 js 코드
function detectMobileDevice(agent) {
    const mobileRegex = [
        /Android/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ]

    return mobileRegex.some(mobile => agent.match(mobile))
}

isMobile = detectMobileDevice(window.navigator.userAgent)

if (isMobile) {
    true
} else {
    alert('쿠름이는 모바일 접속을 권장합니다!');
}
const hours1 = String(date.getHours() + 1).padStart(2, "0");
const hours2 = String(date.getHours() + 2).padStart(2, "0");
const hours3 = String(date.getHours() + 3).padStart(2, "0");
let reIndex1 = `${year}${month}${day}.${hours1}00`;
let reIndex2 = `${year}${month}${day}.${hours2}00`;
let reIndex3 = `${year}${month}${day}.${hours3}00`;

if(reIndex3.slice(9, 11) === "24" || reIndex3.slice(9, 11) === "00") {
    reIndex3 = `${year}${month}${String(Number(day) + Number(1))}.${String(0o0) + String(0)}00`;
}

if(reIndex3.slice(9, 11 )=== "25" || reIndex3.slice(9, 11) === "01") {
    reIndex2 = `${year}${month}${String(Number(day) + Number(1))}.${String(0o0) + String(0)}00`;
    reIndex3 = `${year}${month}${String(Number(day) + Number(1))}.${String(0o0) + String(1)}00`;
}

if(reIndex3.slice(9, 11) === "26" || reIndex3.slice(9, 11) === "02") {
    reIndex1 = `${year}${month}${String(Number(day) + Number(1))}.${String(0o0) + String(0)}00`;
    reIndex2 = `${year}${month}${String(Number(day) + Number(1))}.${String(0o0) + String(1)}00`;
    reIndex3 = `${year}${month}${String(Number(day) + Number(1))}.${String(0o0) + String(2)}00`;
}



//1시간 후
fetch('https://api3.skhuweather.kro.kr/getWeather')
    .then(response => response.json())
    .then(json => {
        const { T1H, PTY, SKY } = json[reIndex1];

        let tmpStr1 = date.getHours() + 1 + "시";
        if(tmpStr1 === "24시") {
            tmpStr1 = "00시"
        }
        el = document.querySelector('.tmwt #time1')
        el.innerHTML = tmpStr1;

        console.log(json[reIndex1].T1H + "도")
        el = document.querySelector('.tmwt #tem1')
        el.innerHTML = json[reIndex1].T1H + "도"

        console.log("강수량(mm): " + json[reIndex1].RN1)
        el = document.querySelector('#precipitation1')
        el.innerHTML = "강수량(mm): " + json[reIndex1].RN1

        //아이콘
        const element11 = document.querySelector('#weatherimg1');
        console.log(SKY, PTY);
        const code = `${SKY}${PTY}`;
        const weatherIconMap = {
            10: 'ksun', 11: 'ksun', 41: 'cloudyRain2', 42: 'cloudyRain2', 45: 'cloudyRain2', 31: 'krain', 32: 'krain', 35: 'krain', 30: 'kcloudy', 40: 'cloudy2', 33: 'ksnow', 36: 'ksnow', 37: 'ksnow', 43: 'cloudySnow2', 46: 'cloudySnow2', 47: 'cloudySnow2',
        };
        console.log(weatherIconMap);
        element11.innerHTML = `<img class="weather-kicon" src="img/icon/${weatherIconMap[code]}.png"/>`;
    })

//2시간 후
fetch('https://api3.skhuweather.kro.kr/getWeather')
    .then(response => response.json())
    .then(json => {
        const { T1H, PTY, SKY } = json[reIndex2];

        console.log(date.getHours() + 2 + "시")
        let tmpStr2 = date.getHours() + 2 + "시"
        if(tmpStr2 === "24시") {
            tmpStr2 = "00시"
        }
        else if(tmpStr2 === "25시") {
            tmpStr2 = "01시"
        }
        el = document.querySelector('.tmwt #time2')
        el.innerHTML = tmpStr2;

        console.log(json[reIndex2].T1H + "도")
        el = document.querySelector('.tmwt #tem2')
        el.innerHTML = json[reIndex2].T1H + "도"

        console.log("강수량(mm): " + json[reIndex2].RN1)
        el = document.querySelector('#precipitation2')
        el.innerHTML = "강수량(mm): " + json[reIndex2].RN1

        //아이콘
        const element22 = document.querySelector('#weatherimg2');
        console.log(SKY, PTY);
        const code = `${SKY}${PTY}`;
        const weatherIconMap = {
            10: 'ksun', 11: 'ksun', 41: 'cloudyRain2', 42: 'cloudyRain2', 45: 'cloudyRain2', 31: 'krain', 32: 'krain', 35: 'krain', 30: 'kcloudy', 40: 'cloudy2', 33: 'ksnow', 36: 'ksnow', 37: 'ksnow', 43: 'cloudySnow2', 46: 'cloudySnow2', 47: 'cloudySnow2',
        };
        console.log(weatherIconMap);
        element22.innerHTML = `<img class="weather-kicon" src="img/icon/${weatherIconMap[code]}.png"/>`;
    })

//3시간 후
fetch('https://api3.skhuweather.kro.kr/getWeather')
    .then(response => response.json())
    .then(json => {
        const { T1H, PTY, SKY } = json[reIndex3];

        let tmpStr3 = date.getHours() + 3 + "시"
        if(tmpStr3 === "24시") {
            tmpStr3 = "00시";
        }
        else if(tmpStr3 === "25시") {
            tmpStr3 = "01시";
        }
        else if(tmpStr3 === "26시") {
            tmpStr3 = "02시"
        }

        el = document.querySelector('.tmwt #time3')
        el.innerHTML = tmpStr3;

        console.log(json[reIndex3].T1H + "도")
        el = document.querySelector('.tmwt #tem3')
        el.innerHTML = json[reIndex3].T1H + "도"

        console.log("강수량(mm): " + json[reIndex3].RN1)
        el = document.querySelector('#precipitation3')
        el.innerHTML = "강수량(mm): " + json[reIndex3].RN1

        //아이콘
        const element33 = document.querySelector('#weatherimg3');
        console.log(SKY, PTY);
        const code = `${SKY}${PTY}`;
        const weatherIconMap = {
            10: 'ksun', 11: 'ksun', 41: 'cloudyRain2', 42: 'cloudyRain2', 45: 'cloudyRain2', 31: 'krain', 32: 'krain', 35: 'krain', 30: 'kcloudy', 40: 'cloudy2', 33: 'ksnow', 36: 'ksnow', 37: 'ksnow', 43: 'cloudySnow2', 46: 'cloudySnow2', 47: 'cloudySnow2',
        };
        console.log(weatherIconMap);
        element33.innerHTML = `<img class="weather-kicon" src="img/icon/${weatherIconMap[code]}.png"/>`;
    })

// function controlData() {



//     if (hours3 === "00") {
//         reIndex3 = `${year}${month}${Number(day) + Number(1)}.${hours3}00`;
//     }
//     else if (hours2 === "00" && hours3 === "01") {
//         reIndex2 = `${year}${month}${Number(day) + Number(1)}.${hours2}00`;
//         reIndex3 = `${year}${month}${Number(day) + Number(1)}.${hours3}00`;
//     }

//     else if (hours1 === "00" && hours2 === "01" && hours3 === "02") {
//         reIndex1 = `${year}${month}${Number(day) + Number(1)}.${hours1}00`;
//         reIndex2 = `${year}${month}${Number(day) + Number(1)}.${hours2}00`;
//         reIndex3 = `${year}${month}${Number(day) + Number(1)}.${hours3}00`;
//     }
// }
