function Grid(columns, rows, marginX, marginY, boardWidth, boardHeight){

	this._columns = columns;
	this._rows = rows;
	this._marginX = marginX;
	this._marginY = marginY;
	this._boardWidth = boardWidth;
	this._boardHeight = boardHeight;	



	this._contentWidth = (this._boardWidth-2*this._marginX);
	this._contentHeight = (this._boardHeight-2*this._marginY);
	this._gridWidth = this._contentWidth/this._columns;
	this._gridHeight = this._contentHeight/this._rows;

	this._grid = new Array();

	for (var i=0; i<this._rows; i++){
		for(var j=0; j<this._columns; j++){
			var pos = new Object();
			pos.left = this._marginX + j*this._gridWidth;
			pos.top = this._marginY + i*this._gridHeight;

			this._grid[i*this._columns+j] = pos;
		}
	}
}

Grid.prototype.getGrid = function() {
	return this._grid;
}

Grid.prototype.offset = function(offsetx, offsety){

	for(var i=0; i<this._grid.length; i++){
		this._grid[i].left += offsetx;
		this._grid[i].top += offsety;
	}
	return this._grid;
}