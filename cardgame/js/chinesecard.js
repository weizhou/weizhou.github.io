    // <div id="card0" class="flipcardcontainer" style="position: absolute; top: 173px; left: 639px;" side="back" deckindex="0">
    //   <div class="side-1 chinesecard flip"></div>
    //   <div class="side-2 chinesecard flip">李</div>
    // </div>


// card object
var cardDiv1 = '<div id="';
var cardDiv2 = '" class="flipcardcontainer" style="position: absolute; top: ';
var cardDiv3 = 'px; left:'
var cardDiv4 = 'px" side="back" deckindex='
var cardDiv5 = '><div class="side-1 chinesecard flip"></div><div class="side-2 chinesecard flip">'
var cardDiv6 = '</div></div></div>';

/*the suit could be: diams hearts spades clubs */
function chinesecard(deckIndex, character, px, py) {
	this.identifier = 'card' + deckIndex;
	this.px = px;
	this.py = py;
	this.deckIndex = deckIndex;
	this.character = character;
	this.side = "back";
}

chinesecard.prototype.drawToBoard = function(px, py) {
	this.px = px;
	this.py = py;
	this.clearFromBoard();
	this.cardstring = cardDiv1+this.identifier+cardDiv2+this.py+cardDiv3+this.px+cardDiv4+this.deckIndex+cardDiv5+this.character+cardDiv6;
	$(".cardboard").append(this.cardstring);
	// $('#'+this.identifier).css("left", x+"px").css("top", y+"px");
	this.registeClickToFlip();
}

chinesecard.prototype.clearFromBoard = function() {
	$('#'+this.identifier).remove();
}



chinesecard.prototype.move = function(dx, dy) {
	var pos = $('#'+this.identifier).position();
	pos.top = pos.top + dy;
	pos.left = pos.left + dx;
	this.py = pos.top;
	this.px = pos.left;
	$('#'+this.identifier).stop().animate(pos, { duration: 300, queue: true });
	// or move it directly without animation
	// $('#'+this.identifier).css({top:pos.top, left:pos.left});
}

chinesecard.prototype.moveTo = function(x, y) {
	this.px = x;
	this.py = y;

	var top = y + "px";
	var left = x + "px";
	$('#'+this.identifier).css({"top":top, "left":left});
}

chinesecard.prototype.moveToAnimate = function(x, y) {

	var pos = new Object();
	pos.top = y +"px";
	pos.left = x + "px";
	$('#'+this.identifier).animate(pos, {duration: 300, queue: false });

}

chinesecard.prototype.flipToFront = function() {
	$('#'+this.identifier+" .side-1").addClass("flip-to-back");
    $('#'+this.identifier+" .side-1").siblings().addClass("flip-to-front");
    $('#'+this.identifier).attr('side', 'front');

    return this;
}

chinesecard.prototype.flipToBack = function() {
	$('#'+this.identifier+" .side-2").removeClass("flip-to-front");
    $('#'+this.identifier+" .side-2").siblings().removeClass("flip-to-back");
    $('#'+this.identifier).attr('side', 'back');
    return this;
}

chinesecard.prototype.flip = function() {
	if($('#'+this.identifier).attr('side') == "back"){
		this.flipToFront();
	}else{
		this.flipToBack();
	}
	return this;
}

chinesecard.prototype.shake = function() {
	$('#'+this.identifier).effect('shake');
}

chinesecard.prototype.explode = function() {
	$('#'+this.identifier).effect('pulsate');
}


chinesecard.prototype.shakeAndFlip = function(){
	this.shake();
	this.flip();
}

chinesecard.prototype.registeClickToFlip = function () {
	//to do: add logic to set this.side
	  $('#'+this.identifier+' .side-1').click(function(){
        $(this).addClass("flip-to-back");
        $(this).siblings().addClass("flip-to-front");
        $(this).parent().attr('side', 'front');
      });

      $('#'+this.identifier+' .side-2').click(function(){
        $(this).removeClass("flip-to-front");
        $(this).siblings().removeClass("flip-to-back");
        $(this).parent().attr('side', 'back');
      });

}


chinesecard.prototype.unregisteClickToFlip = function (){
	$('#'+this.identifier+' .side-1').off('click');
	$('#'+this.identifier+' .side-2').off('click');
}

chinesecard.prototype.guessSize = function() {
	this.drawToBoard();
	var width = $('#'+this.identifier).width();
	var height = $('#'+this.identifier).height();
	this.clearFromBoard();
	var size = new Object();
	size.width = width;
	size.height = height;
	return size;
}