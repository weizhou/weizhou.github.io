function chinesecarddeck(grade, numCards){
    
    this.grade = grade;
    this.numCards = numCards;

    this.chinesecards = new Array();

    for(var i=0; i<this.numCards; i++){
        var id = i;
        var index = Math.floor((Math.random() * hanzikids.getLength(this.grade))+1);
        this.chinesecards[i] = new chinesecard(id, hanzikids.getHanzi(this.grade, index), 0, 0);
    }
}


//To do: need to consider the residue issue; and how to offset the card by: (columnWidth-cardWidth)/2
chinesecarddeck.prototype.drawToGrid = function(rows, marginX, marginY, boardWidth, boardHeight) {
          
    var numCards = this.chinesecards.length;

    var columns = numCards/rows;

    //make sure we have enough room, otherwise, let it overflow
    if (boardHeight < 150*rows){
        boardHeight = 150*rows;
    }

    var cardSize = this.chinesecards[0].guessSize();
    var cardWidth = cardSize.width;
    var cardHeight = cardSize.height;

    var columnWidth = (boardWidth - 2*marginX)/columns;
    var offsetx = (columnWidth - cardWidth)/2;

    var rowHeight = (boardHeight - 2*marginY)/rows;
    var offsety = (rowHeight - cardHeight)/2;

    this.grid = (new Grid(columns, rows, marginX, marginY, boardWidth, boardHeight)).offset(offsetx, offsety);

    // var deckstring = "";
    for (var i=0; i<this.numCards; i++){
        var card = this.chinesecards[i];
        var pos = this.grid[i];
        card.drawToBoard(pos.left, pos.top);
    }
}

chinesecarddeck.prototype.clearFromBoard = function() {

    for(var i=0; i<this.numCards; i++){
        this.chinesecards[i].clearFromBoard();
    }
}

chinesecarddeck.prototype.shuffle = function() {
    
    shuffleArray(this.grid);

    for (var i=0; i<this.numCards; i++){
        this.chinesecards[i].moveToAnimate(this.grid[i].left, this.grid[i].top);
    }

}

chinesecarddeck.prototype.shuffle1 = function() {
    
    shuffleArray(this.grid);

    steps = 10.0;
    stepx = new Array(this.numCards);
    stepy = new Array(this.numCards);
    oriLeft = new Array(this.numCards);
    oriTop = new Array(this.numCards);
    stepCount = 0;

    for (var i=0; i<this.numCards; i++){
        var card = this.chinesecards[i];
        var pos = this.grid[i];
        oriLeft[i] = card.px;
        oriTop[i] = card.py;
        stepx[i] = (pos.left-card.px)/steps;
        stepy[i] = (pos.top-card.py)/steps;
    }

    // shufffleInterval = setInterval(shuffleOneStep,50);
    setTimeout(shuffleOneStep, 1000);
}

chinesecarddeck.prototype.moveTwoCards = function() {
    this.chinesecards[0].moveTo(100, 100);
    this.chinesecards[1].moveTo(100, 200);
}

function shuffleOneStep(){
    stepCount++;
    for (var i=0; i<deck.numCards; i++){
        var left = oriLeft[i] + stepx[i]*stepCount;
        var top = oriTop[i] + stepy[i]*stepCount;
        deck.chinesecards[i].moveTo(left, top);
    }
    // if(stepCount >= steps){
    //     clearInterval(shufffleInterval);
    //     stepCount = 0;
    // }

    if(stepCount < steps){
        setTimeout(shuffleOneStep, 1000);
    }else{
         stepCount = 0;
    }

}


chinesecarddeck.prototype.shakeAll = function() {
    for (var i=0; i<this.numCards; i++){
        var card = this.chinesecards[i];
        card.shake();
    }
}

chinesecarddeck.prototype.shakeAndFlipTwo = function(i, j) {
    var card1 = this.chinesecards[i];
    var card2 = this.chinesecards[j];

    card1.shakeAndFlip();
    card2.shakeAndFlip(); 
}

chinesecarddeck.prototype.matchTwoCards = function(i, j){
    var card1 = this.deck[i];
    var card2 = this.deck[j];

    //check if two cards are all on the front side
    if($('#'+card1.identifier).attr('side')=="back" || $('#'+card2.identifier).attr('side') == "back"){
        return;
    }


    if(card1.rank == card2.rank && card1.suit == card2.suit){
        // matched

        card1.unregisteClickToFlip();
        card2.unregisteClickToFlip();
        card1.explode();
        card2.explode();
        matchedPairCounter++;
    }else{
        // not matched
        // card1.shakeAndFlip();
        // card2.shakeAndFlip(); 
        this.shakeAndFlipTwo(i, j);
    }
    if(matchedPairCounter == pairs){
        $('#label_flips').html("YOU WIN!!!!!!!!");
    }
}
// length should be less than maxValue
function uniqueRandomArray(length, maxValue){

    var arr = [];

    if(length>maxValue){
        return arr;
    }

    while(arr.length < length){
      var randomnumber=Math.ceil(Math.random()*maxValue);
      var found=false;
      for(var i=0;i<arr.length;i++){
        if(arr[i]==randomnumber){
            found=true;
            break;
        }
      }
      if(!found) {
        arr[arr.length]=randomnumber;
      }
    }
    return arr;   
}

function randomArray(length, maxValue){
    var arr = [];
    while(arr.length < length){
        var randomnumber=Math.ceil(Math.random()*maxValue);
        arr[arr.length]=randomnumber;
    }
    return arr; 

}

// rank should be unique
// or maybe not, but let's just assume it ...
function randomRankArray(length){
    return randomArray(length, 13);
}


// suit can be duplicated, so, just random numbers
function randomSuitArray(length){
    return randomArray(length, 4);
}

function shuffleArray(o){
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};




