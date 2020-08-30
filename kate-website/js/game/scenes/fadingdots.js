class fadingdot {

    render(ctx){
        ctx.fillStyle = "#000";
        ctx.globalAlpha = 0.02;
        ctx.save();
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#fff";
        ctx.globalAlpha = 1;
        const x = Math.random() * ctx.canvas.width;
        const y = Math.random() * ctx.canvas.height;
        const radius = Math.random() * 20;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI*2);
        ctx.fill();
        ctx.restore();
    }
}

