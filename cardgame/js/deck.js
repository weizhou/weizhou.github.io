function deck(){

    this.deck = new Array();
}

deck.prototype.createFullDeck = function() {

    var ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","k","A","2","3","4","5","6","7","8","9","10","J","Q","k","A","2","3","4","5","6","7","8","9","10","J","Q","k","A","2","3","4","5","6","7","8","9","10","J","Q","k"];
    var suits = [1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4];

    this.createDeck(ranks, suits);

}


deck.prototype.createCardMatchDeck = function(pairs) {
    
    var rankArray = randomRankArray(pairs);
    var suitArray = randomSuitArray(pairs);

    var numCards = rankArray.length;
    //The length of 
    for(var i=numCards; i<2*numCards; i++){
        rankArray[i] = rankArray[i-numCards];
        suitArray[i] = suitArray[i-numCards];
    }

    this.createDeck(rankArray, suitArray);

}

deck.prototype.createDeck = function(ranks, suits) {

    this.deck = new Array();

    for(var i=0; i<ranks.length; i++){
        var rank = ranks[i];
        switch (rank) {
            case 1:
                rank = "A";
                break;
            case 11:
                rank = "J";
                break;
            case 12:
                rank = "Q";
                break;
            case 13:
                rank="K";
                break;
        }

        var suit = suits[i];

        switch (suit) {
            case 1:
                suit = "diams";
                break;
            case 2:
                suit = "hearts";
                break;
            case 3:
                suit = "spades";
                break;
            case 4:
                suit = "clubs";
                break;
        }

        var id = i;
        this.deck[i] = new card(id, rank, suit);
    }

}


//To do: need to consider the residue issue; and how to offset the card by: (columnWidth-cardWidth)/2
deck.prototype.drawToBoard = function(rows, marginX, marginY, boardWidth, boardHeight) {
          
    var numCards = this.deck.length;

    var columns = numCards/rows;

    //make sure we have enough room, otherwise, let it overflow
    if (boardHeight < 150*rows){
        boardHeight = 150*rows;
    }

    var cardSize = this.deck[0].guessSize();
    var cardWidth = cardSize.width;
    var cardHeight = cardSize.height;

    var columnWidth = (boardWidth - 2*marginX)/columns;
    var offsetx = (columnWidth - cardWidth)/2;

    var rowHeight = (boardHeight - 2*marginY)/rows;
    var offsety = (rowHeight - cardHeight)/2;

    this.grid = (new Grid(columns, rows, marginX, marginY, boardWidth, boardHeight)).offset(offsetx, offsety);

    // var deckstring = "";
    for (var i=0; i<numCards; i++){
        var card = this.deck[i];
        var pos = this.grid[i];
        card.drawToBoard(pos.left, pos.top);

        // deckstring = deckstring + card.cardstring;

    }

    //         alert(deckstring);

    // var deckstring = '<div id="card0" deckIndex="0" side="back" class="flipcardcontainer" style="top:33px; left:129px"><div class="playingCards faceImages"><div class="side-1 card back flip">*</div></div><div class="playingCards"><div class="side-2 card rank-A spades  flip"><span class="rank">A</span><span class="suit">&spades;</span></div></div></div><div id="card1" deckIndex="1" side="back" class="flipcardcontainer" style="top:33px; left:436px"><div class="playingCards faceImages"><div class="side-1 card back flip">*</div></div><div class="playingCards"><div class="side-2 card rank-Q clubs  flip"><span class="rank">Q</span><span class="suit">&clubs;</span></div></div></div><div id="card2" deckIndex="2" side="back" class="flipcardcontainer" style="top:33px; left:742px"><div class="playingCards faceImages"><div class="side-1 card back flip">*</div></div><div class="playingCards"><div class="side-2 card rank-9 hearts  flip"><span class="rank">9</span><span class="suit">&hearts;</span></div></div></div><div id="card3" deckIndex="3" side="back" class="flipcardcontainer" style="top:173px; left:129px"><div class="playingCards faceImages"><div class="side-1 card back flip">*</div></div><div class="playingCards"><div class="side-2 card rank-7 diams  flip"><span class="rank">7</span><span class="suit">&diams;</span></div></div></div><div id="card4" deckIndex="4" side="back" class="flipcardcontainer" style="top:173px; left:436px"><div class="playingCards faceImages"><div class="side-1 card back flip">*</div></div><div class="playingCards"><div class="side-2 card rank-4 hearts  flip"><span class="rank">4</span><span class="suit">&hearts;</span></div></div></div><div id="card5" deckIndex="5" side="back" class="flipcardcontainer" style="top:173px; left:742px"><div class="playingCards faceImages"><div class="side-1 card back flip">*</div></div><div class="playingCards"><div class="side-2 card rank-3 diams  flip"><span class="rank">3</span><span class="suit">&diams;</span></div></div></div><div id="card6" deckIndex="6" side="back" class="flipcardcontainer" style="top:313px; left:129px"><div class="playingCards faceImages"><div class="side-1 card back flip">*</div></div><div class="playingCards"><div class="side-2 card rank-A spades  flip"><span class="rank">A</span><span class="suit">&spades;</span></div></div></div><div id="card7" deckIndex="7" side="back" class="flipcardcontainer" style="top:313px; left:436px"><div class="playingCards faceImages"><div class="side-1 card back flip">*</div></div><div class="playingCards"><div class="side-2 card rank-Q clubs  flip"><span class="rank">Q</span><span class="suit">&clubs;</span></div></div></div><div id="card8" deckIndex="8" side="back" class="flipcardcontainer" style="top:313px; left:742px"><div class="playingCards faceImages"><div class="side-1 card back flip">*</div></div><div class="playingCards"><div class="side-2 card rank-9 hearts  flip"><span class="rank">9</span><span class="suit">&hearts;</span></div></div></div><div id="card9" deckIndex="9" side="back" class="flipcardcontainer" style="top:453px; left:129px"><div class="playingCards faceImages"><div class="side-1 card back flip">*</div></div><div class="playingCards"><div class="side-2 card rank-7 diams  flip"><span class="rank">7</span><span class="suit">&diams;</span></div></div></div><div id="card10" deckIndex="10" side="back" class="flipcardcontainer" style="top:453px; left:436px"><div class="playingCards faceImages"><div class="side-1 card back flip">*</div></div><div class="playingCards"><div class="side-2 card rank-4 hearts  flip"><span class="rank">4</span><span class="suit">&hearts;</span></div></div></div><div id="card11" deckIndex="11" side="back" class="flipcardcontainer" style="top:453px; left:742px"><div class="playingCards faceImages"><div class="side-1 card back flip">*</div></div><div class="playingCards"><div class="side-2 card rank-3 diams  flip"><span class="rank">3</span><span class="suit">&diams;</span></div></div></div>';
    // document.getElementById('cardmatchboard').innerHTML=deckstring;
    // $("#cardmatchboard").html(deckstring);

}

deck.prototype.clearFromBoard = function() {

    var numCards = this.deck.length;
    for(var i=0; i<numCards; i++){
        var card = this.deck[i];
        card.clearFromBoard();
    }
}

deck.prototype.registeClickToFlip = function() {
    var numCards = this.deck.length;

    for (var i=0; i<numCards; i++){
        var card = this.deck[i];
        card.registeClickToFlip();
    }
}

deck.prototype.switchTwoCards = function(i, j){
    var i_card = this.deck[i];
    var i_pos = $('#'+i_card.identifier).position();
    var i_left = i_pos.left;
    var i_top = i_pos.top;

    var j_card = this.deck[j];
    var j_pos = $('#'+j_card.identifier).position();
    var j_left = j_pos.left;
    var j_top = j_pos.top;

    i_card.moveTo(j_left, j_top);
    j_card.moveTo(i_left, i_top);

}

deck.prototype.shuffle = function() {
    
    shuffleArray(this.grid);
    var numCards = this.deck.length;

    steps = 10.0;
    stepx = new Array(numCards);
    stepy = new Array(numCards);
    oriLeft = new Array(numCards);
    oriTop = new Array(numCards);
    stepCount = 0;

    for (var i=0; i<numCards; i++){
        var card = this.deck[i];
        var pos = this.grid[i];
        oriLeft[i] = card.left;
        oriTop[i] = card.top;
        stepx[i] = (pos.left-card.left)/steps;
        stepy[i] = (pos.top-card.top)/steps;
    }

    shufffleInterval = setInterval(shuffleOneStep,5);


    // for (var i=0; i<numCards; i++){
    //     var card = this.deck[i];
    //     var pos = this.grid[i];
    //     card.moveTo(pos.left, pos.top);
    // }
}

function testshuffle(){
    var numCards = deck1.deck.length;
    for(var i=0; i<numCards; i++){
        deck1.deck[i].moveTo(1.11,1.23);
    }
}

function shuffleOneStep(){
    var numCards = deck1.deck.length;
    stepCount++;
    for (var i=0; i<numCards; i++){
        var left = oriLeft[i] + stepx[i]*stepCount;
        var top = oriTop[i] + stepy[i]*stepCount;
        deck1.deck[i].moveTo(left, top);
    }
    if(stepCount >= steps){
        clearInterval(shufffleInterval);
        stepCount = 0;
    }
}


deck.prototype.shakeAll = function() {
    var numCards = this.deck.length;
    for (var i=0; i<numCards; i++){
        var card = this.deck[i];
        card.shake();
    }
}

deck.prototype.shakeAndFlipTwo = function(i, j) {
    var card1 = this.deck[i];
    var card2 = this.deck[j];

    card1.shakeAndFlip();
    card2.shakeAndFlip(); 
}

deck.prototype.matchTwoCards = function(i, j){
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




