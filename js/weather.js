//온도 fetch 이용해서 임의로 가져온것

//json코드가 배열이 아니기 때문에 index로 못 가져온다.

const date = new Date();//Date 객체 생성
const year = date.getFullYear(); //년도 가져오기
const month =String(date.getMonth()+1).padStart(2, "0");  //2자릿수 만들고 왼쪽부터 0넣기(데이터가 2자릿수이면 2자릿수 그대로 출력)
const day = String(date.getDate()).padStart(2, "0");  //month와 동일한 방식
const hours = String(date.getHours()).padStart(2, "0"); //month와 동일한 방식
const reIndex = `${year}${month}${day}.${hours}00`; //임시 index라는 의미, 백틱 사용해서 json 형태와 똑같이 뽑아내기, 분은 안뽑아냄.

//온도
fetch('https://api3.skhuweather.kro.kr/getWeather')
    .then(response => response.json())
    .then(json => { 
        const {T1H,PTY, SKY} = json[reIndex];
        console.log(T1H) //원래 '20221004.1400' 넣어야 할 부분에 위에서 가져온 데이터와 비교하여 일치하면 넣기 
        const el = document.querySelector('#temperature')
        el.innerHTML=T1H;
        //아이콘
        const element1 = document.querySelector('#weather-icon');
        console.log(SKY, PTY);
        const code = `${SKY}${PTY}`;
        const weatherIconMap = {
            10: 'sun',
            11: 'sun',
            41: 'rain',
            42: 'rain',
            45: 'rain',
            31: 'rain',
            32: 'rain',
            35: 'rain',
            30: 'cloud',
            40: 'cloud',
            33: 'snow',
            36: 'snow',
            37: 'snow',
            43: 'snow',
            46: 'snow',
            47: 'snow',
        };
        console.log(weatherIconMap);
        element1.innerHTML=`<img src="img/${weatherIconMap[code]}.svg"/>`;
        //강수량
        console.log(json[reIndex].RN1) 
        const element2 = document.querySelector('#cloudyData')
        element2.innerHTML=json[reIndex].RN1
        //습도
        console.log(json[reIndex].REH) 
        const element3 = document.querySelector('#waterData')
        element3.innerHTML=json[reIndex].REH
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
      
      const isMobile = detectMobileDevice(window.navigator.userAgent)
      
      if (isMobile) {
        true
      } else {
        alert('쿠름이는 모바일 접속을 권장합니다!')
      }
