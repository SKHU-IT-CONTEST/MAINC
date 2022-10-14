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
//element1.innerHTML = "<img src = './img/report/report_rainy.png'>" ;
for (let j = 0; j < 6; j++) {
    if (front_arr[j] === tmp) {
        console.log("test");
        if (j === 0) {
            element1.innerHTML = "<img src = './img/report/report_rainy.png' style='width: 150px;'>" ;
        }
        else if(j === 1) {
            element1.innerHTML = "<img src = './img/report/report_cloudy.png' style='width: 150px;'>" ;
        }
        else if(j===2) {
            element1.innerHTML = "<img src = './img/report/report_sunny.png' style='width: 150px;'>" ;
        }
        else if(j === 3) {
            element1.innerHTML = "<img src = './img/report/report_dust.png' style='width: 150px;'>" ;
        }
        else if(j === 4) {
            element1.innerHTML = "<img src = './img/report/report_windy.png' style='width: 150px;'>" ;
        }
        else if(j === 5){
            element1.innerHTML = "<img src = './img/report/report_snow.png' style='width: 150px;'>" ;
        }
        else{
            element1.innerHTML = "<img src = './img/report/default.png'>" ;
        }
        break;
    }
}