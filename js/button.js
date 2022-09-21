arr = [];
var data = arr;


function CreateButton() {
	document.getElementById("plus-button").style.visibility = "hidden";

    var InputArea = document.getElementById('input-area');
    var Input = document.createElement('div');
    InputArea.appendChild(Input);

    Input.innerHTML = "<input type=\"text\" id=\"answer\" class=\"button-style\" onkeypress=\"if(event.keyCode==13){TextBox();}\">";
}

function TextBox() {

	let answer = document.getElementById('answer').value;
	if(answer == ""){
		alert('응답을 적어주세요!');
	}
	
	else{
		var container = document.getElementById('container');// html에 있는 container id를 cont에 부여

		
		container.innerHTML = "<button id=\"answer-button\" class=\"button-style\"></button>";
		var AnswerButton = document.getElementById('answer-button');
		container.appendChild(AnswerButton);

		var AnswerText = document.createTextNode(answer);
		AnswerButton.appendChild(AnswerText);

		var HeartText = document.createElement('heart');
		HeartText.className = 'heart-style';
		HeartText.innerHTML = "♥";
		AnswerButton.appendChild(HeartText);

		document.getElementById('answer').value = ""; //입력 칸을 빈칸으로
		document.getElementById("plus-button").style.visibility ='visible';
		document.getElementById("answer").style.visibility = "hidden";

	}
}