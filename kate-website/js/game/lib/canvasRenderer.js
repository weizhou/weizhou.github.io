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



class CanvasRenderer {
    constructor (w, h) {
        const canvas = document.createElement("canvas");
        this.w = canvas.width = w;
        this.h = canvas.height = h;
        this.view = canvas;
        this.ctx = canvas.getContext("2d");
    }

    render(container, clear=true) {
        const { ctx } = this;
        function renderRec (container) {
            container.children.forEach(child => {
                if (child.visible == false){
                    return;
                }
                ctx.save();
                //draw the leaf node
                if(child.pos){
                    ctx.translate(Math.round(child.pos.x), Math.round(child.pos.y));
                }
                if(child.text){
                    const {font, fill, align} = child.style;
                    if(font) ctx.font = font;
                    if(fill) ctx.fillStyle = fill;
                    if(align) ctx.textAlign = align;
                    ctx.fillText(child.text, 0, 0);
                }
                if(child.texture){
                    ctx.drawImage(child.texture.img, child.pos.x, child.pos.y);
                }
                if(child.render){
                    child.render(ctx);
                }
                //handle the child types
                if(child.children){
                    renderRec(child);
                }
                ctx.restore();
            });
        }
        if(clear){
            ctx.clearRect(0, 0, this.w, this. h);
        }
        renderRec(container);
    }
}