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
    constructor(texture, w, h) {
        super(texture);
        this.tilew = w;
        this.tileh = h;
        this.frame = {x: 0, y: 0};
        this.scale = {x: 1, y: 1};
    }
}

class AnimateSprite extends TileSprite {
    constructor(texture, w, h) {
        super(texture, w, h);
    }
    update (dt, t) {
        this.frame.x = Math.floor(t/0.1) % 8;
    }
}


