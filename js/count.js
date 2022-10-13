// 새로고침을 실행한 경우, 기존 데이터 유지를 위해 window 객체를 활용하여 처리






// 제보를 위해 이미지를 클릭한 횟수를 저장할 변수 선언
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
var count_arr = [count1, count2, count3, count4, count5, count6];


// 중복 방지를 위한 함수 정의
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
    var textHolder1 = document.getElementById("count1");
    var textHolder2 = document.getElementById("count2");
    var textHolder3 = document.getElementById("count3");
    var textHolder4 = document.getElementById("count4");
    var textHolder5 = document.getElementById("count5");
    var textHolder6 = document.getElementById("count6");


    button1.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder1.innerHTML = (++count_arr[0]).toString();
        } else
            alert("제보는 1번만 가능합니다.");
    });

    button2.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder2.innerHTML = (++count_arr[1]).toString();
        } else alert("제보는 1번만 가능합니다.");

    });
    button3.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder3.innerHTML = (++count_arr[2]).toString();
        } else alert("제보는 1번만 가능합니다.");

    });
    button4.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder4.innerHTML = (++count_arr[3]).toString();
        } else alert("제보는 1번만 가능합니다.");


    });
    button5.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder5.innerHTML = (++count_arr[4]).toString();
        } else alert("제보는 1번만 가능합니다.");


    });
    button6.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder6.innerHTML = (++count_arr[5]).toString();
        } else alert("제보는 1번만 가능합니다.");

    });

    textHolder1 = document.getElementById("count1");
    textHolder2 = document.getElementById("count2");
    textHolder3 = document.getElementById("count3");
    textHolder4 = document.getElementById("count4");
    textHolder5 = document.getElementById("count5");
    textHolder6 = document.getElementById("count6");
    var textHolder_arr = [textHolder1, textHolder2, textHolder3, textHolder4, textHolder5, textHolder6];


    localStorage.setItem("data1", count_arr[0].toString());
    localStorage.setItem("data2", count_arr[1].toString());
    localStorage.setItem("data3", count_arr[2].toString());
    localStorage.setItem("data4", count_arr[3].toString());
    localStorage.setItem("data5", count_arr[4].toString());
    localStorage.setItem("data6", count_arr[5].toString());
    var arr = [count_arr[0], count_arr[1], count_arr[2], count_arr[3], count_arr[4], count_arr[5]];
    resetData();
    let tmp=0;





    // 입력값의 최대값 탐색
    for(let j=0; j<arr.length; j++) {
        let tmp = 0;
        if(tmp < arr[j]){
            tmp = arr[j];
        }

    }

    for(let k=0; k<textHolder_arr.length; k++) {
        if(textHolder_arr[k] === arr[k]) {
            const initText = document.getElementById('skhu-turtle');
            initText.appendChild(tmp);
        }

    }
    function resetData() {
        let nowDate = new Date();
        if (nowDate.getHours() === 6 || nowDate.getHours() === 12
            || nowDate.getHours() === 18 || nowDate.getHours() === 0o0) {
            for (let i = 0; i < count_arr.length; i++) {
                count_arr[i] = 0;
            }
        }
    }
    // window.onpageshow = function (event) {
    //     if(event.persisted || (window.performance && (window.performance.navigation.type === 1 || window.performance.navigation.type === 2))) {
    //         if(('localStorage' in window) && window['localStorage'] !== null) {
    //             if(localStorage.getItem('data1') && localStorage.getItem('data2') && localStorage.getItem('data3')
    //                 && localStorage.getItem('data4') && localStorage.getItem('data5') && localStorage.getItem('data6') ) {
    //
    //                 window.localStorage.getItem("data1");
    //                 window.localStorage.getItem("data2");
    //                 window.localStorage.getItem("data3");
    //                 window.localStorage.getItem("data4");
    //                 window.localStorage.getItem("data5");
    //                 window.localStorage.getItem("data6");
    //             }
    //         }
    //     }
    // }
}



// 입력값을 메인 페이지에 표시하는 함수

// function viewCount(tmp){
//     var a = loaded();
//     for(let i=0; i<arr.length; i++) {
//         if(a === arr[i]) {
//             data = document.getElementsByTagName("img");
//             return data.appendChild(arr[i]);

//         }
//     }
// }


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





// // 제보를 위해 이미지를 클릭한 횟수를 저장할 변수 선언
// var count1 = 0;
// var count2 = 0;
// var count3 = 0;
// var count4 = 0;
// var count5 = 0;
// var count6 = 0;
// var count_arr = [count1, count2, count3, count4, count5, count6];
// var button1 = document.getElementById("button1");
// var button2 = document.getElementById("button2");
// var button3 = document.getElementById("button3");
// var button4 = document.getElementById("button4");
// var button5 = document.getElementById("button5");
// var button6 = document.getElementById("button6");
// var textHolder_arr = [button1, button2, button3, button4, button5, button6];
//
//
// // 중복 방지를 위한 함수 정의
// var doubleSubmitFlag = false;
//
// function doubleSubmitCheck() {
//     if (doubleSubmitFlag) {
//         return doubleSubmitFlag;
//     } else {
//         doubleSubmitFlag = true;
//         return false;
//     }
//
// }
//
//
// function insert() {
//
//
//     resetData();
//     button1.addEventListener("click", function () {
//         if (!doubleSubmitCheck()) {
//             alert("제보 완료!");
//             textHolder_arr[0].innerHTML = ++count_arr[0];
//             window.localStorage.setItem("data1", count_arr[0]);
//             load();
//         }
//
//        else alert("제보는 1번만 가능합니다.");
//     });
//
//     button2.addEventListener("click", function () {
//         if (!doubleSubmitCheck()) {
//             alert("제보 완료!");
//             textHolder_arr[1].innerHTML = ++count_arr[1];
//             window.localStorage.setItem("data2", count_arr[1]);
//             load();
//         } else alert("제보는 1번만 가능합니다.");
//
//     });
//     button3.addEventListener("click", function () {
//         if (!doubleSubmitCheck()) {
//             alert("제보 완료!");
//             textHolder_arr[2].innerHTML= ++count_arr[2];
//             window.localStorage.setItem("data3", count_arr[2]);
//             load();
//         } else alert("제보는 1번만 가능합니다.");
//     });
//     button4.addEventListener("click", function () {
//         if (!doubleSubmitCheck()) {
//             alert("제보 완료!");
//             textHolder_arr[3].innerHTML = ++count_arr[3];
//             window.localStorage.setItem("data4", count_arr[3]);
//             load();
//         } else alert("제보는 1번만 가능합니다.");
//
//     });
//     button5.addEventListener("click", function () {
//         if (!doubleSubmitCheck()) {
//             alert("제보 완료!");
//             textHolder_arr[4].innerHTML = ++count_arr[4];
//             window.localStorage.setItem("data5", count_arr[4]);
//             load();
//         } else alert("제보는 1번만 가능합니다.");
//
//     });
//     button6.addEventListener("click", function () {
//         if (!doubleSubmitCheck()) {
//             alert("제보 완료!");
//
//             textHolder_arr[5].innerHTML = JSON.stringify(++count_arr[5]);
//             window.localStorage.setItem("data6", count_arr[5]);
//             load();
//         } else alert("제보는 1번만 가능합니다.");
//
//     });
//
//     function load() {
//         // const textHolder1 = document.getElementById("count1");
//         // const textHolder2 = document.getElementById("count2");
//         // const textHolder3 = document.getElementById("count3");
//         // const textHolder4 = document.getElementById("count4");
//         // const textHolder5 = document.getElementById("count5");
//         // const textHolder6 = document.getElementById("count6");
//
//         var arr = [];
//         var tmp = 0;
//         const data_1 = window.localStorage.getItem("data1");
//         const data_2 = window.localStorage.getItem("data2");
//         const data_3 = window.localStorage.getItem("data3");
//         const data_4 = window.localStorage.getItem("data4");
//         const data_5 = window.localStorage.getItem("data5");
//         const data_6 = window.localStorage.getItem("data6");
//
//
//         arr = [data_1, data_2, data_3, data_4, data_5, data_6];
//         // 입력값의 최대값 탐색
//         for (let j = 0; j < arr.length; j++) {
//             tmp = 0;
//             if (tmp < arr[j]) {
//                 tmp = arr[j];
//             }
//
//         }
//         var file_arr = ['img/icon/cloud2_rainy_icon.png', 'img/icon/cloudy2_icon.png', 'img/icon/sunny_icon.png']
//         var pictureArr = [];
//         for (let k = 0; k < textHolder_arr.length; k++) {
//             if (tmp === textHolder_arr[k]) {
//                 var initText = document.getElementsByClassName('skhu-turtle');
//                 pictureArr[k] = new Image();
//                 pictureArr[k] = file_arr[0];
//                 initText[k].innerHTML = pictureArr[k];
//             }
//
//         }
//     }
//
//
// }
//
//
// // 데이터 배열의 최댓값 인덱스를 통해 이미지 파일 배열의 인덱스와 이것이 같다면 이미지 파일을 반환할 이미지 파일배열 정의
//
// // 입력값을 메인 페이지에 표시하는 함수
//
//
// function resetData() {
//     var nowDate = new Date().getHours();
//     if (nowDate.toString() === "00" && nowDate.toString() === "03" && nowDate.toString() === "06" && nowDate.toString() === "09"
//         && nowDate.toString() === "12" && nowDate.toString() === "15" && nowDate.toString() === "18" && nowDate.toString() === "21") {
//         for (let i = 0; i < count_arr.length; i++) {
//             window.localStorage.removeItem('data1');
//             window.localStorage.removeItem('data2');
//             window.localStorage.removeItem('data3');
//             window.localStorage.removeItem('data4');
//             window.localStorage.removeItem('data5');
//             window.localStorage.removeItem('data6');
//         }
//     }
//
// }
//
// // function viewCount(tmp){
// //     var a = loaded();
// //     for(let i=0; i<arr.length; i++) {
// //         if(a === arr[i]) {
// //             data = document.getElementsByTagName("img");
// //             return data.appendChild(arr[i]);
//
// //         }
// //     }
// // }
//
//
// // function notDuplicate1() {
// //     document.getElementById('button1').onclick = null;
// //     window.alert("제보 횟수는 1번만 가능합니다.");
// // }
// // function notDuplicate2() {
// //     document.getElementById('button2').onclick = null;
// //     window.alert("제보 횟수는 1번만 가능합니다.");
// // }
// // function notDuplicate3() {
// //     document.getElementById('button3').onclick = null;
// //     window.alert("제보 횟수는 1번만 가능합니다.");
// // }
// // function notDuplicate4() {
// //     document.getElementById('button4').onclick = null;
// //     window.alert("제보 횟수는 1번만 가능합니다.");
// // }
// // function notDuplicate5() {
// //     document.getElementById('button5').onclick = null;
// //     window.alert("제보 횟수는 1번만 가능합니다.");
// // }
// // function notDuplicate6() {
// //     document.getElementById('button6').onclick = null;
// //     window.alert("제보 횟수는 1번만 가능합니다.");
// // }
// //
// // function ii() {
// //     var tmpdata = fs.readFileSync("test.json");
// //     alert(tmpdata);
// //
// // }
//
// // export default function ii() {
// //     var fs = require('fs');
// //
// //     var data = '{ "id1": "0","id2": "0","id3": "0","id4": "0","id5": "0","id6": "0" }';
// //     var parsingData = JSON.parse(data);
// //     for (let i = 0; i < parsingData.length; i++) {
// //         countArray[i].addEventListener("click", function () {
// //             if (click_1.onclick) {
// //                 let tmp = (parsingData.id1)++;
// //                 delete parsingData.id1;
// //                 parsingData.id1 = tmp;
// //                 alert("완료");
// //
// //             } else if (click_2.onclick) {
// //                 let tmp = (parsingData.id2)++;
// //                 delete parsingData.id2;
// //                 parsingData.id2 = tmp;
// //                 alert("완료");
// //
// //             } else if (click_3.onclick) {
// //                 let tmp = (parsingData.id3)++;
// //                 delete parsingData.id3;
// //                 parsingData.id3 = tmp;
// //                 alert("완료");
// //             } else if (click_4.onclick) {
// //                 let tmp = (parsingData.id4)++;
// //                 delete parsingData.id4;
// //                 parsingData.id4 = tmp;
// //                 alert("완료");
// //             } else if (click_5.onclick) {
// //                 let tmp = (parsingData.id5)++;
// //                 delete parsingData.id5;
// //                 parsingData.id5 = tmp;
// //                 alert("완료");
// //
// //
// //             } else if (click_6.onclick) {
// //                 let tmp = (parsingData.id6)++;
// //                 delete parsingData.id6;
// //                 parsingData.id6 = tmp;
// //                 alert("완료");
// //             }
// //
// //         });
// //
// //     }
// //     return fs.writeFileSync("test.json", JSON.stringify(parsingData));
// // }
