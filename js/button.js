arr = [];
var data = arr;


function CreateButton() {
    document.getElementById("plus-button").style.display ='none';

    var InputArea = document.getElementById('input-area');
    var Input = document.createElement('div');
    InputArea.appendChild(Input);

    Input.innerHTML = "<input type=\"text\" id=\"answer\" onkeypress=\"if(event.keyCode==13){TextBox();}\">";
}

function TextBox() {

	let answer = document.getElementById('answer').value;
	if(answer == ""){
		alert('응답을 적어주세요!');
	}
	
	else{
		var cont = document.getElementById('container');// html에 있는 container id를 cont에 부여
		var Btn = document.createElement('button');
		cont.appendChild(Btn)
		Btn.className = 'btn';

		var BtnText = document.createTextNode(answer);
		Btn.appendChild(BtnText);

		document.getElementById('answer').value = ""; //입력 칸을 빈칸으로
	}
}
//온도 fetch 이용해서 임의로 가져온것
fetch('http://152.67.207.160:32023/api/schoolNotice')
    .then(response => response.json())
    .then(json => { 
        console.log(json[0].num) 
        const el = document.querySelector('#temperature')
        el.innerHTML=json[0].num
    })