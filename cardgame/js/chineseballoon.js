var div1 = '<div id="';
var div2 = '" pinyin="';
var div3 = '" class="chineseballoon ';
var div4 = 'balloon" style="top:'
var div5 = 'px; left:';
var div6 = 'px">';
var div7 = '</div>'; 



function chineseballoon(pinyin, character, balloonIndex, ballooncolor){
	this.identifier = 'balloon' + balloonIndex;
	this.pinyin = pinyin;
	this.character = character;
	this.ballooncolor = ballooncolor;
	this.exploded = false;
	this.matched = false;
} 


chineseballoon.prototype.drawToBoard = function(left, top){

	this.balloonstring = div1 + this.identifier + div2 + this.pinyin + div3 + this.ballooncolor + div4 + top + div5 + left + div6 + this.character + div7;
	$('.cardboard').append(this.balloonstring);

}



chineseballoon.prototype.moveto = function(left, top){
	$('#'+this.identifier).css({"top":top, "left":left});
}


chineseballoon.prototype.clearFromBoard = function(){
	$('#'+this.identifier).remove();

}


chineseballoon.prototype.explode = function(){
	$('#' + this.identifier).hide('explode');
	this.exploded = true;
}