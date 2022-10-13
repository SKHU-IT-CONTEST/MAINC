// 새로고침을 실행한 경우, 기존 데이터 유지를 위해 window 객체를 활용하여 처리


// 제보를 위해 이미지를 클릭한 횟수를 저장할 변수 선언


// 중복 방지를 위한 함수 정의
var doubleSubmitFlag = false;
function resetData() {

    if (d == null || nowDate - new Date(d) >= 10800000) {
        for (let i = 0; i < 6; i++) {
            var countTmp_1 = localStorage.getItem("data1");
            countTmp_1 = 0;
            var countTmp_2 = localStorage.getItem("data2");
            countTmp_2 = 0;
            var countTmp_3 = localStorage.getItem("data3");
            countTmp_3 = 0;
            var countTmp_4 = localStorage.getItem("data4");
            countTmp_4 = 0;
            var countTmp_5 = localStorage.getItem("data5");
            countTmp_5 = 0;
            var countTmp_6 = localStorage.getItem("data6");
            countTmp_6 = 0;

            localStorage.setItem("data1", countTmp_1.toString());
            localStorage.setItem("data2", countTmp_2.toString());
            localStorage.setItem("data3", countTmp_3.toString());
            localStorage.setItem("data4", countTmp_4.toString());
            localStorage.setItem("data5", countTmp_5.toString());
            localStorage.setItem("data6", countTmp_6.toString());
        }
    }
}
function doubleSubmitCheck() {
    if (doubleSubmitFlag ) {
        return doubleSubmitFlag;
    } else {
        doubleSubmitFlag = true;
        return false;
    }

}



var textHolder1 = document.getElementById("count1");
var textHolder2 = document.getElementById("count2");
var textHolder3 = document.getElementById("count3");
var textHolder4 = document.getElementById("count4");
var textHolder5 = document.getElementById("count5");
var textHolder6 = document.getElementById("count6");

let d = localStorage.getItem("date");
let nowDate = new Date();
resetData();

textHolder1.innerHTML = localStorage.getItem("data1");
textHolder2.innerHTML = localStorage.getItem("data2");
textHolder3.innerHTML = localStorage.getItem("data3");
textHolder4.innerHTML = localStorage.getItem("data4");
textHolder5.innerHTML = localStorage.getItem("data5");
textHolder6.innerHTML = localStorage.getItem("data6");


function insert() {



    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const button4 = document.getElementById("button4");
    const button5 = document.getElementById("button5");
    const button6 = document.getElementById("button6");
    var textHolder1 = document.getElementById("count1");
    var textHolder2 = document.getElementById("count2");
    var textHolder3 = document.getElementById("count3");
    var textHolder4 = document.getElementById("count4");
    var textHolder5 = document.getElementById("count5");
    var textHolder6 = document.getElementById("count6");



    button1.addEventListener("click", function () {
        if (!doubleSubmitCheck() && (d == null || nowDate - new Date(d) >= 10800000)) {
            localStorage.setItem("date", nowDate.toString());
            alert("제보 완료!");
            textHolder1.innerHTML = countData1();
        } else
            alert("제보는 1번만 가능합니다.");
    });

    button2.addEventListener("click", function () {
        if (!doubleSubmitCheck() && (d == null || nowDate - new Date(d) >= 10800000)) {
            localStorage.setItem("date", nowDate.toString());
            alert("제보 완료!");
            textHolder2.innerHTML = countData2();

        } else alert("제보는 1번만 가능합니다.");

    });
    button3.addEventListener("click", function () {
        if (!doubleSubmitCheck() && (d == null || nowDate - new Date(d) >= 10800000)) {
            localStorage.setItem("date", nowDate.toString());
            alert("제보 완료!");
            textHolder3.innerHTML = countData3();

        } else alert("제보는 1번만 가능합니다.");

    });
    button4.addEventListener("click", function () {
        if (!doubleSubmitCheck() && (d == null || nowDate - new Date(d) >= 10800000)) {
            localStorage.setItem("date", nowDate.toString());
            alert("제보 완료!");
            textHolder4.innerHTML = countData4();

        } else alert("제보는 1번만 가능합니다.");


    });
    button5.addEventListener("click", function () {
        if (!doubleSubmitCheck() && (d == null || nowDate - new Date(d) >= 10800000)) {
            localStorage.setItem("date", nowDate.toString());
            alert("제보 완료!");
            textHolder5.innerHTML = countData5();

        } else alert("제보는 1번만 가능합니다.");


    });
    button6.addEventListener("click", function () {
        if (!doubleSubmitCheck() && (d == null || nowDate - new Date(d) >= 10800000)) {
            localStorage.setItem("date", nowDate.toString());
            alert("제보 완료!");
            textHolder6.innerHTML = countData6();

        } else alert("제보는 1번만 가능합니다.");

    });


    // 입력값의 최대값 탐색







    function countData1() {
        let countOneOnclick_1 = localStorage.getItem("data1");
        countOneOnclick_1++;
        localStorage.setItem("data1", countOneOnclick_1.toString());
        return countOneOnclick_1;

    }

    function countData2() {
        let countOneOnclick_2 = localStorage.getItem("data2");
        countOneOnclick_2++;
        localStorage.setItem("data2", countOneOnclick_2.toString());
        return countOneOnclick_2;
    }


    function countData3() {
        let countOneOnclick_3 = localStorage.getItem("data3");
        countOneOnclick_3++;
        localStorage.setItem("data3", countOneOnclick_3.toString());
        return countOneOnclick_3;
    }

    function countData4() {
        let countOneOnclick_4 = localStorage.getItem("data4");
        countOneOnclick_4++;
        localStorage.setItem("data4", countOneOnclick_4.toString());
        return countOneOnclick_4;

    }

    function countData5() {
        let countOneOnclick_5 = localStorage.getItem("data5");
        countOneOnclick_5++;
        localStorage.setItem("data5", countOneOnclick_5.toString());
        return countOneOnclick_5;
    }

    function countData6() {
        let countOneOnclick_6 = localStorage.getItem("data6");
        countOneOnclick_6++;
        localStorage.setItem("data6", countOneOnclick_6.toString());
        return countOneOnclick_6;

    }

}