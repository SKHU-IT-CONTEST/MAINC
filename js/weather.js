//온도 fetch 이용해서 임의로 가져온것
//온도
fetch('https://api3.skhuweather.kro.kr/getWeather')
    .then(response => response.json())
    .then(json => { 
        console.log(json[20221007.1600].T1H) 
        const el = document.querySelector('#temperature')
        el.innerHTML=json[20221007.1600].T1H
    })
//강수량
fetch('https://api3.skhuweather.kro.kr/getWeather')
    .then(response => response.json())
    .then(json => { 
        console.log(json[20221007.1600].RN1) 
        const el = document.querySelector('#cloudyData')
        el.innerHTML=json[20221007.1600].RN1
    })
//습도
fetch('https://api3.skhuweather.kro.kr/getWeather')
    .then(response => response.json())
    .then(json => { 
        console.log(json[20221007.1600].REH) 
        const el = document.querySelector('#waterData')
        el.innerHTML=json[20221007.1600].REH
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
