function submitAnswers() {
	var total = 5;
	score = 0;

	// Get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	// Validation
	

	for(i = 1;i <= total;i++) {

			if(eval('q' + i) == null || eval('q' + i) == '') {
				alert('You didn\'t answer question '+ i);
				return false;
		}
	
	}

}