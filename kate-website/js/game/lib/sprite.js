class Text {
    constructor(text = "", style = {}) {
        this.pos = { x: 0, y: 0 };
        this.text = text;
        this.style = style;
    }
}

class Texture {
    constructor (url) {
        this.img = new Image();
        this.img.src = url;
    }
}

class Sprite {
    constructor(texture) {
        this.texture = texture;
        this.pos = {x: 0, y: 0};
    }
}

class TileSprite extends Sprite {
    constructor(texture, w, h, rows=1, cols=8) {
        super(texture);
        this.tilew = w;
        this.tileh = h;
        this.grid = {rows: rows, cols: cols};
        this.frame = {x: 0, y: 0};
        this.scale = {x: 1, y: 1};
    }
}

class AnimateSprite extends TileSprite {
    constructor(texture, w, h, rows, cols) {
        super(texture, w, h, rows, cols);
    }
    update (dt, t) {
        let frameNumber = Math.floor(t/0.1) % (this.grid.cols * this.grid.rows);
        this.frame.x = frameNumber % this.grid.cols;
        this.frame.y = Math.floor(frameNumber / this.grid.cols);
    }
}


