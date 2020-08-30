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
                if(child.scale){
                    ctx.scale(child.scale.x, child.scale.y);
                }
                if(child.text){
                    const {font, fill, align} = child.style;
                    if(font) ctx.font = font;
                    if(fill) ctx.fillStyle = fill;
                    if(align) ctx.textAlign = align;
                    ctx.fillText(child.text, 0, 0);
                }
                if(child.texture){
                    const img = child.texture.img;
                    if (child.tilew) {                        
                        ctx.drawImage(img, child.frame.x * child.tilew, child.frame.y * child.tileh, child.tilew, child.tileh, 
                            0, 0, child.tilew, child.tileh);
                    }else {
                        ctx.drawImage(img, 0, 0);
                    }
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

    reset() {
        this.ctx.clearRect(0, 0, this.w, this. h);
    }
}