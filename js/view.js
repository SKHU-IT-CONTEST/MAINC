var tmp = 0;

let front_1 = localStorage.getItem("data1");
let front_2 = localStorage.getItem("data2");
let front_3 = localStorage.getItem("data3");
let front_4 = localStorage.getItem("data4");
let front_5 = localStorage.getItem("data5");
let front_6 = localStorage.getItem("data6");
let front_arr = [front_1, front_2, front_3, front_4, front_5, front_6];
tmp = front_arr[0];
for (let i = 0; i < 6; i++) {

    if (tmp <= front_arr[i]) {

        tmp = front_arr[i]
    }
}
const element1 = document.querySelector('.turtle-icon');
const mentOfPng = document.querySelector('.skhu-turtle');
//element1.innerHTML = "<img src = './img/report/report_rainy.png'>" ;
for (let j = 0; j < 6; j++) {
    if (front_arr[j] === tmp) {
        console.log("test");
        if (j === 0) {
            element1.innerHTML = "<img src = './img/kurumi/rainy_kurumi.png' style='width: 150px;'>";
            mentOfPng.innerHTML = "<p>쿠름이는 꽃친구의<br>목을 축여주고 있대요!<br></p>";
        }
        else if(j === 1) {
            element1.innerHTML = "<img src = './img/kurumi/cloudy_kurumi.png' style='width: 150px;'>" ;
            mentOfPng.innerHTML = "<p>쿠름이는 구름이 걷힌<br>맑은 하늘을 어서 보고 싶대요!<br></p>";
        }
        else if(j===2) {   
            element1.innerHTML = "<img src = './img/kurumi/sunny_kurumi.png' style='width: 150px;'>" ;
            mentOfPng.innerHTML = "<p>쿠름이는 맑은 하늘이<br>너무 좋대요!</p>";
        }
        else if(j === 3) {
            element1.innerHTML = "<img src = './img/kurumi/dust_kurumi.png' style='width: 150px;'>" ;
            mentOfPng.innerHTML = "<p>쿠름이는 나쁜<br>공기가 싫대요!</p>";
        }
        else if(j === 4) {
            element1.innerHTML = "<img src = './img/kurumi/windy_kurumi.png' style='width: 150px;'>" ;
            mentOfPng.innerHTML = "<p>쿠름이는 빨리<br>바람이 잔잔해졌으면 좋겠대요!</p>";
        }
        else if(j === 5){
            element1.innerHTML = "<img src = './img/kurumi/snow_kurumi.png' style='width: 150px;'>" ;
            mentOfPng.innerHTML = "<p>쿠름이는 지금<br>눈과 노는 중이래요!<br></p>";
        }
        else{
            element1.innerHTML = "<img src = './img/kurumi/sunny_kurumi.png'style='width: 150px;'>" ;
            mentOfPng.innerHTML = "<p>쿠름이는 꽃친구의<br>목을 축여주고 있대요!<br></p>"
        }
        break;
    }
}