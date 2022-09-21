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