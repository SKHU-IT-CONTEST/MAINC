function viewMaxCount() {
    var tmp = 0;

    let front_1 = localStorage.getItem("data1");
    let front_2 = localStorage.getItem("data2");
    let front_3 = localStorage.getItem("data3");
    let front_4 = localStorage.getItem("data4");
    let front_5 = localStorage.getItem("data5");
    let front_6 = localStorage.getItem("data6");
    let front_arr = [front_1, front_2, front_3, front_4, front_5, front_6];
    for (let i = 0; i < 6; i++) {
        if (tmp < front_arr[i]) {
            tmp = front_arr[i]
        }
    }

    for (let j = 0; j < 6; j++) {
        const element1 = document.querySelector('#turtle-icon');
        if (front_arr[j] === tmp) {
            var img_tmp = new Image();
            if (j === 0) {
                img_tmp.src = `./img/report/report_rainy.png`;
                element1.innerHTML = (img_tmp);
            }
            else if(j === 1) {
                img_tmp.src=`./img/report/report_cloudy.png`;
                element1.innerHTML = (img_tmp);

            }
            else if(j===2) {
                img_tmp.src = `./img/report/report_sunny.png`;
                element1.innerHTML = (img_tmp);
            }
            else if(j === 3) {
                img_tmp.src= `img/report/report_dust.png`;
                element1.innerHTML = (img_tmp);
            }
            else if(j === 4) {
                img_tmp.src = `img/report/report_windy.png`;
                element1.innerHTML = (img_tmp);

            }
            else if(j === 5) {
                img_tmp = `img/report/report_snow.png`;
                element1.innerHTML =(img_tmp);
            }

        }
    }


}