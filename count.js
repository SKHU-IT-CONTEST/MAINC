let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
var count_arr = [count1, count2, count3, count4, count5, count6];

var doubleSubmitFlag = false;

function doubleSubmitCheck() {
    if (doubleSubmitFlag) {
        return doubleSubmitFlag;
    } else {
        doubleSubmitFlag = true;
        return false;
    }

}

function insert() {


    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const button4 = document.getElementById("button4");
    const button5 = document.getElementById("button5");
    const button6 = document.getElementById("button6");
    const textHolder1 = document.getElementById("count1");
    const textHolder2 = document.getElementById("count2");
    const textHolder3 = document.getElementById("count3");
    const textHolder4 = document.getElementById("count4");
    const textHolder5 = document.getElementById("count5");
    const textHolder6 = document.getElementById("count6");


    button1.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder1.innerHTML = ++count_arr[0];
        } else if (doubleSubmitCheck()) {
            alert("제보는 1번만 가능합니다.");
        }


    });

    button2.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder2.innerHTML = ++count_arr[0];
        } else if (doubleSubmitCheck()) {
            alert("제보는 1번만 가능합니다.");
        }
    });
    button3.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder3.innerHTML = ++count_arr[2];
        } else if (doubleSubmitCheck()) {
            alert("제보는 1번만 가능합니다.");
        }
    });
    button4.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder4.innerHTML = ++count_arr[3];
        } else if (doubleSubmitCheck()) {
            alert("제보는 1번만 가능합니다.");
        }

    });
    button5.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder5.innerHTML = ++count_arr[4];
        } else if (doubleSubmitCheck()) {
            alert("제보는 1번만 가능합니다.");
        }

    });
    button6.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder6.innerHTML = ++count_arr[5];
        } else if (doubleSubmitCheck()) {
            alert("제보는 1번만 가능합니다.");
        }

    });
}





// function notDuplicate1() {
//     document.getElementById('button1').onclick = null;
//     window.alert("제보 횟수는 1번만 가능합니다.");
// }
// function notDuplicate2() {
//     document.getElementById('button2').onclick = null;
//     window.alert("제보 횟수는 1번만 가능합니다.");
// }
// function notDuplicate3() {
//     document.getElementById('button3').onclick = null;
//     window.alert("제보 횟수는 1번만 가능합니다.");
// }
// function notDuplicate4() {
//     document.getElementById('button4').onclick = null;
//     window.alert("제보 횟수는 1번만 가능합니다.");
// }
// function notDuplicate5() {
//     document.getElementById('button5').onclick = null;
//     window.alert("제보 횟수는 1번만 가능합니다.");
// }
// function notDuplicate6() {
//     document.getElementById('button6').onclick = null;
//     window.alert("제보 횟수는 1번만 가능합니다.");
// }
//
// function ii() {
//     var tmpdata = fs.readFileSync("test.json");
//     alert(tmpdata);
//
// }

// export default function ii() {
//     var fs = require('fs');
//
//     var data = '{ "id1": "0","id2": "0","id3": "0","id4": "0","id5": "0","id6": "0" }';
//     var parsingData = JSON.parse(data);
//     for (let i = 0; i < parsingData.length; i++) {
//         countArray[i].addEventListener("click", function () {
//             if (click_1.onclick) {
//                 let tmp = (parsingData.id1)++;
//                 delete parsingData.id1;
//                 parsingData.id1 = tmp;
//                 alert("완료");
//
//             } else if (click_2.onclick) {
//                 let tmp = (parsingData.id2)++;
//                 delete parsingData.id2;
//                 parsingData.id2 = tmp;
//                 alert("완료");
//
//             } else if (click_3.onclick) {
//                 let tmp = (parsingData.id3)++;
//                 delete parsingData.id3;
//                 parsingData.id3 = tmp;
//                 alert("완료");
//             } else if (click_4.onclick) {
//                 let tmp = (parsingData.id4)++;
//                 delete parsingData.id4;
//                 parsingData.id4 = tmp;
//                 alert("완료");
//             } else if (click_5.onclick) {
//                 let tmp = (parsingData.id5)++;
//                 delete parsingData.id5;
//                 parsingData.id5 = tmp;
//                 alert("완료");
//
//
//             } else if (click_6.onclick) {
//                 let tmp = (parsingData.id6)++;
//                 delete parsingData.id6;
//                 parsingData.id6 = tmp;
//                 alert("완료");
//             }
//
//         });
//
//     }
//     return fs.writeFileSync("test.json", JSON.stringify(parsingData));
// }
