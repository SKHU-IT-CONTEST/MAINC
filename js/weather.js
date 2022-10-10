//온도 fetch 이용해서 임의로 가져온것

//json코드가 배열이 아니기 때문에 index로 못 가져온다.

const date = new Date();//Date 객체 생성
const year = date.getFullYear(); //년도 가져오기
const month =String(date.getMonth()+1).padStart(2, "0");  //2자릿수 만들고 왼쪽부터 0넣기(데이터가 2자릿수이면 2자릿수 그대로 출력)
const day = String(date.getDate()).padStart(2, "0");  //month와 동일한 방식
const hours = String(date.getHours()).padStart(2, "0"); //month와 동일한 방식
const hours1 = String(date.getHours()+1).padStart(2, "0"); //month와 동일한 방식
const hours2 = String(date.getHours()+2).padStart(2, "0"); //month와 동일한 방식
const hours3 = String(date.getHours()+3).padStart(2, "0"); //month와 동일한 방식
const reIndex = `${year}${month}${day}.${hours}00`; //임시 index라는 의미, 백틱 사용해서 json 형태와 똑같이 뽑아내기, 분은 안뽑아냄.
const reIndex1 =`${year}${month}${day}.${hours1}00`;
const reIndex2 =`${year}${month}${day}.${hours2}00`;
const reIndex3 =`${year}${month}${day}.${hours3}00`;
//온도
fetch('https://api3.skhuweather.kro.kr/getWeather')
    .then(response => response.json())
    .then(json => { 
        console.log(json[reIndex].T1H) //원래 '20221004.1400' 넣어야 할 부분에 위에서 가져온 데이터와 비교하여 일치하면 넣기 
        const el = document.querySelector('#temperature')
        el.innerHTML=json[reIndex].T1H
    })
//강수량
fetch('https://api3.skhuweather.kro.kr/getWeather')
    .then(response => response.json())
    .then(json => { 
        console.log(json[reIndex].RN1) 
        const el = document.querySelector('#cloudyData')
        el.innerHTML=json[reIndex].RN1
    })
//습도
fetch('https://api3.skhuweather.kro.kr/getWeather')
    .then(response => response.json())
    .then(json => { 
        console.log(json[reIndex].REH) 
        const el = document.querySelector('#waterData')
        el.innerHTML=json[reIndex].REH
    })
fetch('https://api3.skhuweather.kro.kr/getWeather')
    .then(response => response.json())
    .then(json => { 
        console.log(json[reIndex].PTY+SKY) 
        const el = document.querySelector('#cloudyData')
        el.innerHTML=json[reIndex].PTY+SKY
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



//front-part_2//
//시간1
fetch('https://api3.skhuweather.kro.kr/getWeather')
    .then(response => response.json())
    .then(json => { 
        console.log(date.getHours()+1+"시") 
        const el = document.querySelector('.tmwt #time1')
        el.innerHTML=date.getHours()+1+"시"
    })


//온도1
fetch('https://api3.skhuweather.kro.kr/getWeather')
    .then(response => response.json())
    .then(json => { 
        console.log(json[reIndex1].T1H+"도") //원래 '20221004.1400' 넣어야 할 부분에 위에서 가져온 데이터와 비교하여 일치하면 넣기 
        const el = document.querySelector('.tmwt #tem1')
        el.innerHTML=json[reIndex1].T1H+"도"
    })

//강수량1
fetch('https://api3.skhuweather.kro.kr/getWeather')
.then(response => response.json())
.then(json => { 
    console.log("강수량(mm): "+json[reIndex1].RN1) 
    const el = document.querySelector('#precipitation1')
    el.innerHTML="강수량(mm): "+json[reIndex1].RN1
})


//시간 2
    fetch('https://api3.skhuweather.kro.kr/getWeather')
    .then(response => response.json())
    .then(json => { 
        console.log(date.getHours()+2+"시") 
        const el = document.querySelector('.tmwt #time2')
        el.innerHTML=date.getHours()+2+"시"
    })

//온도2
fetch('https://api3.skhuweather.kro.kr/getWeather')
    .then(response => response.json())
    .then(json => { 
        console.log(json[reIndex2].T1H+"도") //원래 '20221004.1400' 넣어야 할 부분에 위에서 가져온 데이터와 비교하여 일치하면 넣기 
        const el = document.querySelector('.tmwt #tem2')
        el.innerHTML=json[reIndex2].T1H+"도"
    })

//강수량2
fetch('https://api3.skhuweather.kro.kr/getWeather')
.then(response => response.json())
.then(json => { 
    console.log("강수량(mm): "+json[reIndex2].RN1) 
    const el = document.querySelector('#precipitation2')
    el.innerHTML="강수량(mm): "+json[reIndex2].RN1
})


//시간3
fetch('https://api3.skhuweather.kro.kr/getWeather')
.then(response => response.json())
.then(json => { 
    console.log(date.getHours()+3+"시") 
    const el = document.querySelector('.tmwt #time3')
    el.innerHTML=date.getHours()+3+"시"
})

//온도3
fetch('https://api3.skhuweather.kro.kr/getWeather')
    .then(response => response.json())
    .then(json => { 
        console.log(json[reIndex3].T1H+"도") //원래 '20221004.1400' 넣어야 할 부분에 위에서 가져온 데이터와 비교하여 일치하면 넣기 
        const el = document.querySelector('.tmwt #tem3')
        el.innerHTML=json[reIndex3].T1H+"도"
    })

//강수량3
fetch('https://api3.skhuweather.kro.kr/getWeather')
.then(response => response.json())
.then(json => { 
    console.log("강수량(mm): "+json[reIndex3].RN1) 
    const el = document.querySelector('#precipitation3')
    el.innerHTML="강수량(mm): "+json[reIndex3].RN1
})