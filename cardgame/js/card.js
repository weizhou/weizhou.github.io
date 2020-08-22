


// card object
var cardDiv1 = '<div id="';
var cardDiv2 = '" deckIndex="';
var cardDiv3 = '" side="back" class="flipcardcontainer" style="top:';
var cardDiv4 = 'px; left:'
var cardDiv5 = 'px"><div class="playingCards faceImages"><div class="side-1 card back flip">*</div></div><div class="playingCards"><div class="side-2 card rank-';
var cardDiv6 = ' flip"><span class="rank">';
var cardDiv7 = '</span><span class="suit">';
var cardDiv8 = '</span></div></div></div>';

/*the suit could be: diams hearts spades clubs */
function card(deckIndex, rank, suit) {
	this.identifier = 'card' + deckIndex;
	this.deckIndex = deckIndex;
	this.rank = rank;
	this.suit = suit;	
	this.side = "back";
}

card.prototype.drawToBoard = function(x, y) {
	this.left = Math.floor(x);
	this.top = Math.floor(y);
	this.clearFromBoard();
	this.cardstring = cardDiv1+this.identifier+cardDiv2+this.deckIndex+cardDiv3+this.top+cardDiv4+this.left+cardDiv5+this.rank+" "+this.suit+" "+cardDiv6+this.rank+cardDiv7+"&"+this.suit+";"+cardDiv8;
	$(".cardboard").append(this.cardstring);
	$('#'+this.identifier).css("left", x+"px").css("top", y+"px");
}

card.prototype.clearFromBoard = function() {
	$('#'+this.identifier).remove();
}

card.prototype.move = function(dx, dy) {
	var pos = $('#'+this.identifier).position();
	pos.top = pos.top + dy;
	pos.left = pos.left + dx;
	this.top = pos.top;
	this.left = pos.left;
	$('#'+this.identifier).stop().animate(pos, { duration: 300, queue: true });
	// or move it directly without animation
	// $('#'+this.identifier).css({top:pos.top, left:pos.left});
}

card.prototype.moveTo = function(x, y) {
	// var pos = new Object();
	// pos.top = y +"px";
	// pos.left = x + "px";
	// $('#'+this.identifier).animate(pos, {duration: 300, queue: false });

	var top = y + "px";
	var left = x + "px";
	$('#'+this.identifier).css({"top":top, "left":left});


	// var steps = 100.0;
	// var stepx = (x-this.left)/steps;
	// var stepy = (y-this.top)/steps;

	// var movedivInterval = setInterval(function(){
	// 	this.left += stepx;
	// 	this.top += stepy;
	// 	$('#'+this.identifier).css({"top":this.top, "left":this.left});

	// 	if(this.left >= x){
	// 		clearInterval(movedivInterval);
	// 	}
	// },50);
}

card.prototype.flipToFront = function() {
	$('#'+this.identifier+" .side-1").addClass("flip-side-2");
    $('#'+this.identifier+" .side-1").parent().siblings().children().addClass("flip-side-1");
    $('#'+this.identifier).attr('side', 'front');
    return this;
}

card.prototype.flipToBack = function() {
	$('#'+this.identifier+" .side-2").removeClass("flip-side-1");
    $('#'+this.identifier+" .side-2").parent().siblings().children().removeClass("flip-side-2");
    $('#'+this.identifier).attr('side', 'back');
    return this;
}

card.prototype.flip = function() {
	if($('#'+this.identifier).attr('side') == "back"){
		this.flipToFront();
	}else{
		this.flipToBack();
	}
	return this;
}

card.prototype.shake = function() {
	$('#'+this.identifier).effect('shake');
}

card.prototype.explode = function() {
	$('#'+this.identifier).effect('pulsate');
}


card.prototype.shakeAndFlip = function(){
	this.shake();
	this.flip();
}

card.prototype.registeClickToFlip = function () {
	//to do: add logic to set this.side
	
    $('#'+this.identifier+' .side-1').click(function(){
        $(this).addClass("flip-side-2");
        $(this).parent().siblings().children().addClass("flip-side-1");
        $(this).parent().parent().attr('side', 'front');
        flipCounter ++;
        $('#label_flips').html("Flips: " + flipCounter);
        matchCounter++;
        switch (matchCounter) {
        	case 1:
        		matchIndexOne = $(this).parent().parent().attr('deckIndex');
        		break;
        	case 2:
        		matchIndexTwo = $(this).parent().parent().attr('deckIndex');
        		matchCounter = 0;
        		window.setTimeout(function(){
        			deck1.matchTwoCards(matchIndexOne, matchIndexTwo);
        		}, 500);
        }

    });

    // $('#'+this.identifier+' .side-2').click(function(){
    //     $(this).removeClass("flip-side-1");
    //     $(this).parent().siblings().children().removeClass("flip-side-2");
    //     $(this).parent().parent().attr('side', 'back');
    // });
}


card.prototype.unregisteClickToFlip = function (){
	$('#'+this.identifier+' .side-1').off('click');
	$('#'+this.identifier+' .side-2').off('click');
}

card.prototype.guessSize = function() {
	this.drawToBoard(1,1);
	$(".cardboard").append(this.cardstring);
	var width = $('#'+this.identifier).width();
	var height = $('#'+this.identifier).height();
	this.clearFromBoard();
	var size = new Object();
	size.width = width;
	size.height = height;
	return size;
}