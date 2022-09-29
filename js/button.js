arr = [];
var data = arr;

// // +버튼을 눌러 input박스를 생성
// function CreateButton() {
// 	document.getElementById("plus-button").style.visibility = "hidden";

//     var InputArea = document.getElementById('input-area');
//     var Input = document.createElement('div');
//     InputArea.appendChild(Input);

//     Input.innerHTML = "<input type=\"text\" id=\"answer\" class=\"button-style\" onkeypress=\"if(event.keyCode==13){TextBox();}\">";
// }

function TextBox() {

	let answertemp = document.getElementById('answer').value;
	if(answertemp == ""){
		alert('응답을 적어주세요!');
	}
	
	else{
		var container = document.getElementById('container');// html에 있는 container id를 cont에 부여
		
		// container.innerHTML = "<button id=\"answer-button\" class=\"button-style\"></button>";
		// var AnswerButton = document.getElementById('answer-button');
		let AnswerButton = document.createElement('button');
		AnswerButton.className = 'buttonStyle';
		AnswerButton.id = 'answerButton';
		container.appendChild(AnswerButton);

		
		var AnswerText = document.createTextNode(answertemp);
		AnswerButton.appendChild(AnswerText);

		var HeartText = document.createElement('heart');
		HeartText.className = 'heartStyle';
		HeartText.innerHTML = " ♥ ";
		AnswerButton.appendChild(HeartText);

		document.getElementById('answer').value = ""; //입력 칸을 빈칸으로
		
		// document.getElementById("plus-button").style.visibility ='visible';
		// document.getElementById("answer").remove();

		// 두 번째 버튼을 생성시 첫 번째 버튼이 사라지는 현상 해결해야함
	}
}