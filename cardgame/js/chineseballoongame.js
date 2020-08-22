

function chineseballoongame(numberOfBalloon,grade,level){
	this.numberOfBalloon = numberOfBalloon;
	this.grade = grade;
	this.level = level;

	this.init();
}


chineseballoongame.prototype.init = function(){

	this.timeInterval = 50;
	this.score = 0;
	this.explodedCounter = 0;
	this.numberOfMissed = 0;
	this.balloons = new Array();
	this.speed = new Array();
	var gradeLength = hanzikids.getLength(this.grade);

    for (var i = 0; i < this.numberOfBalloon; i++) {
    	
		var charIndex = Math.floor((Math.random()*gradeLength));
		var character = hanzikids.getHanzi(this.grade, charIndex);
		var pinyin = hanzikids.getPinyin(this.grade, charIndex);

		var color = Math.floor((Math.random()*3)+1);
		switch (color){
			case 1:
				color = 'red';
				break;
			case 2:
				color = 'green';
				break;
			case 3:
				color = 'blue';
				break;
		}
		this.balloons[i] = new chineseballoon(pinyin, character, i, color);
		


		this.balloons[i].drawToBoard(0,0);
		// var chineseballoonwidth = $('.chineseballoon').width();
		var speedRange = 3;
		this.speed[i] = Math.floor(Math.random()*speedRange + this.level);
		// the distance between balloons is such that every two sec. a fast balloon will appear
		var top = $('.cardboard').height() + i*(1000/this.timeInterval)*this.speed[i]*2;
		var left = Math.floor(Math.random() * ($('#page-container').width() - $('.chineseballoon').width())+1);
		this.balloons[i].moveto(left, top);		
	}
}

		



chineseballoongame.prototype.start = function(){
	this.movetimer = setInterval((function(self) {         //Self-executing func which takes 'this' as self
         return function() {   //Return a function in the context of 'self'
             self.move(); //Thing you wanted to run as non-window 'this'
         }
     })(this),this.timeInterval);
}


chineseballoongame.prototype.stop = function(){

	// stop timer
	clearInterval(this.movetimer);

}

chineseballoongame.prototype.resume = function(){
	if (this.explodedCounter != 20) {
		this.stop();
		this.start();
	};
}

chineseballoongame.prototype.destory = function(){
	this.stop();
	//clear from board
	for (var i = 0; i < this.numberOfBalloon; i++) {
		this.balloons[i].clearFromBoard();
	}

	$('#finalscore').remove();

}

chineseballoongame.prototype.restart = function(numberOfBalloon,grade,timeInterval){

	this.destory();

	this.numberOfBalloon = numberOfBalloon;
	this.grade = grade;
	this.timeInterval = timeInterval;

	this.init();
	this.start();

}

chineseballoongame.prototype.complete = function(){

	//To do: based on score to increase level
	var finaldiv = '<div id="finalscore" style="position: absolute; text-align: center">';
	if (this.score >= 40) {
		this.level += 1;
		$('#label_level').html("Level:" + this.level);
		finaldiv = finaldiv + '<p>Great! You are now on level ' + this.level + '</p>';
	}else{
		finaldiv = finaldiv + '<p>Learning is fun! keep on trying!</p>'
	}

	//add the wrong chars
	var chardiv = '<table>';
	var charsPerRow = 3;
	for (var i=0; i<this.numberOfBalloon; i++){
		if(this.balloons[i].matched == false){
			if(this.numberOfMissed%3 == 0){
				chardiv = chardiv + '<tr>';
			}
			var chardiv = chardiv + '<td style="width:200px; text-align:left">' + this.balloons[i].character + "&nbsp;&nbsp;" + this.balloons[i].pinyin + '</td>';
			if(this.numberOfMissed%3 == 2){
				chardiv = chardiv + '</tr>';
			}
			this.numberOfMissed ++;
		}
	}
	
	chardiv = chardiv + '</table>';
	
	if(this.numberOfMissed > 0){
		finaldiv = finaldiv + '<p>You have missed ' + this.numberOfMissed + ' balloons </p> </div>';
	}else{
		finaldiv = finaldiv + '</div>';
	}	

	$('.cardboard').append(finaldiv);
	
	$('#finalscore').append(chardiv);
	
	var cardboardWidth = $('.cardboard').width();
	var cardboardHeight = $('.cardboard').height();
	var finalscoreWidth = $('#finalscore').width();
    var finalscoreHeight = $('#finalscore').height();
    $('#finalscore').css('top', (cardboardHeight-finalscoreHeight)/2 + 'px').css('left', (cardboardWidth-finalscoreWidth)/2+'px');

}



chineseballoongame.prototype.move = function() {


	for (var i = 0; i < this.numberOfBalloon; i++) {
		this.balloons[i].moveto($('#'+this.balloons[i].identifier).position().left,$('#'+this.balloons[i].identifier).position().top-this.speed[i]);
		if (this.balloons[i].exploded==false &&  $('#'+this.balloons[i].identifier).position().top < 0 - $('#'+this.balloons[i].identifier).height()) {
			this.balloons[i].explode();
			this.score -= 1;
			$('#label_points').html("Score: " + game.score);
			this.explodedCounter += 1;
		}

	}
	if (this.explodedCounter == this.numberOfBalloon) {
		game.stop();
		game.destory();
		game.complete();

	};
}

chineseballoongame.prototype.matchPinyin = function(pinyin){

	var matched = false;

	for (var i = 0; i < this.numberOfBalloon; i++) {
		if (this.balloons[i].exploded == false && $('#pyinput').val() == this.balloons[i].pinyin) {
			this.balloons[i].explode();
			this.balloons[i].matched = true;
			matched = true;
			this.score += 3;
			this.explodedCounter += 1;
			break;
		};
	};

	if(matched == false){
		this.score -= 1;
	}

}