var today = new Date();
var dayOfTheWeek = today.getDay();
var quote;

if (dayOfTheWeek == 0){ //Sunday
	document.write("   <p id  = \"quoteoftheday\">\“Yesterday is <span id = \"historycolor\"> history,</span><br/> Tomorrow is a <span id = \"mysterycolor\">mystery,</span><br/> and Today is a <span id = \"giftcolor\">gift...</span><br/>that's why they call it the <span id = \"presentcolor\">present\”</span><br/> ― Master Oogway</p>   ");
}
else if (dayOfTheWeek == 1){ //Monday
	document.write("   <p id  = \"quoteoftheday\">\“Success is not <span id = \"historycolor\">Final,</span><br/> Failure is not <span id = \"mysterycolor\">Fatal:</span><br/> it is the Courage to Continue that <span id = \"giftcolor\">Counts.</span>\"<br/> -Sir Winston Churchill</p>   ");
}
else if (dayOfTheWeek == 2){ //Tuesday
	document.write("   <p id  = \"quoteoftheday\"> \"There are no secrets to success.<br/> It is the result of <span id = \"historycolor\">preparation,</span> <span id = \"mysterycolor\">hard work,</span> and <span id = \"giftcolor\">learning from failure.</span>\" <br/> -Colin Powell</p>   ");
}
else if (dayOfTheWeek == 3){ //Wednesday
	document.write("   <p id  = \"quoteoftheday\"> “The ultimate measure of a man is not<br/> where he stands in moments of <span id = \"historycolor\">comfort</span> and <span id = \"historycolor\">convenience,</span><br/> but where he stands at times of <span id = \"giftcolor\">challenge</span> and <span id = \"giftcolor\">controversy.</span>\”<br/> -Dr. Martin Luther King </p>   ");
}
else if (dayOfTheWeek == 4){ //Thursday
	document.write("   <p id  = \"quoteoftheday\"> \"It is amazing what you can <span id = \"giftcolor\">accomplish</span><br/> if you do not care who gets the <span id = \"presentcolor\">credit.</span>\"<br/>-Harry S. Truman </p>   ");
}
else if (dayOfTheWeek == 5){ //Friday
	document.write("   <p id  = \"quoteoftheday\"> \"A leader is a man who can adapt <span id = \"presentcolor\">principles</span> to <span id = \"giftcolor\">circumstances.</span>\"<br/> –General George S. Patton </p>   ");
}
else if (dayOfTheWeek == 6){ //Saturday
	document.write("   <p id  = \"quoteoftheday\">  \"Effective leaders are <span id = \"historycolor\">made,</span> <span id = \"giftcolor\">not born.</span> <br/> They learn from <span id = \"mysterycolor\">trial and error,</span> and from <span id = \"presentcolor\">experience.</span>\"<br/> -Colin Powell </p>   ");
}
else{
	//write nothing
}


