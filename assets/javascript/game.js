//Objective: Use Jquery and Javascript to create a trivia game. Html components are to be modified by jquery. 
//If player chooses the right answer, there must be an alert congratulating them. Once the player clicks okay, the next question pops up. 
//If player chooses the wrong answer, there must be an alert telling the it's wrong. Once the player clicks okay, the next question pops up.
//At the end of the game, there should be the number of correct answers, the number of incorrect answers and an option to restart the game. 


var pos = 0, test, status, question, choice, choices, cA, cB, cC, cD, cE, correct = 0;
var questions = [
			["Who is Gabriel Reyes?", "Soldier 76","Roadhog", "Reaper", "Zenyatta", "C"],
			["What is BlackWatch?", "A group of heroes", "A black watch", "A covert operation division", "A + C", "C"],
			["What is the Petras Act?", " It disbanded Overwatch", "Established Overwatch", "Established BlackWatch", "None of the above", "A"],
			["How old is Winston?", "15", "29", "60", "Gorillas Age?", "B"],
			["How many playable characters are in Overwatch?", "21", "10", "34", "24", "D"]	
];

function Z(x) {
	return document.getElementById(x);
}

function renderQuestion() {
	test = Z("test");
	if(pos >= questions.length) {
		test.innerHTML = "<h2>You got"+correct+" of"+questions.length+" questions correct</h2>";
			Z("status").innerHTML = "Test Completed";
				pos = 0;
				correct = 0;
				return false;
			}

	Z("status").innerHTML = "question " +(pos+1)+" of " +questions.length;
	question = questions[pos][0];
	cA = questions[pos][1];
	cB = questions[pos][2];
	cC = questions[pos][3];
	cD = questions[pos][4];
	test.innerHTML = "<h3" +question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> " +cA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> " +cB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> " +cC+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='D'> " +cD+"<br>";
	test.innerHTML += "<button onclick= ' checkAnswer() '>Submit Answer</button>";
}

function checkAnswer() {
	choices = document.getElementsByName("choices");
	for(var i =0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	pos++;
	renderQuestion();
}

window.addEventListener("load", renderQuestion, false);