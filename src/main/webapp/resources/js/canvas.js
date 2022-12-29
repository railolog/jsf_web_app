
function draw_dec_lines(ctx, w, h){
    ctx.beginPath();
    ctx.moveTo(4, h/2);
    ctx.lineTo(w - 4, h/2);
    ctx.lineTo(w - 12, h/2 - 4)
    ctx.moveTo(w - 4, h/2)
    ctx.lineTo(w - 12, h/2 + 4)

    ctx.moveTo(w/2, h - 4);
    ctx.lineTo(w/2, 4);
    ctx.lineTo(w/2 - 4, 12)
    ctx.moveTo(w/2, 4)
    ctx.lineTo(w/2 + 4, 12)

    for (i = 1; i < 6; i++){
        x = w/6 * i;
        ctx.moveTo(x, h/2 - 4)
        ctx.lineTo(x, h/2 + 4)
    }

    for (i = 1; i < 6; i++){
        y = h/6 * i;
        ctx.moveTo(w/2 - 4, y)
        ctx.lineTo(w/2 + 4, y)
    }

    ctx.stroke();
}

function draw_text(ctx, w, h, r){
    ctx.font = '12px sans-serif';

    let x = w / 6
    let y = h / 6
    if (r == null){
        r = 'R'
    } else {
        r = r.toString();
    }

    ctx.fillText('-' + r, x - 6, h/2 - 7)
    ctx.fillText('-' + r + '/2', x * 2 - 6, h/2 - 7)
    ctx.fillText(r + '/2', x * 4 - 6, h/2 - 7)
    ctx.fillText(r, x * 5 - 4, h/2 - 7)

    ctx.fillText('-' + r, w/2 + 7, y * 5 + 4)
    ctx.fillText('-' + r + '/2', w/2 + 7, y * 4 + 4)
    ctx.fillText(r + '/2', w/2 + 7, y * 2 + 4)
    ctx.fillText(r, w/2 + 7, y + 4)

    ctx.fillText('x', x * 6 - 6, h/2 - 7)
    ctx.fillText('y', w/2 + 7, 8)
}

function draw_figures(ctx, w, h){
    ctx.fillStyle = `rgb(51, 153, 255)`

    ctx.fillRect(w/2, h/2, -w/3, -h/3)

    ctx.beginPath();
    ctx.moveTo(w/2, h/2)
    ctx.lineTo(w/2, h/6 * 4)
    ctx.lineTo(w/6 * 2, h/2)
    ctx.lineTo(w/2, h/2)
    ctx.fill()

    ctx.arc(w/2, h/2, w/6, 0, Math.PI / 2, 0)
    ctx.fill()
}

function draw_dot(e, x, y, r, hm){
    let ctx = e.getContext('2d')

    ctx.beginPath();

    if (hm === 'Hit'){
        ctx.fillStyle = 'green'
    }
    else {
        ctx.fillStyle = 'red'
    }

    ctx.arc(((x * 105.5)/(r * 1.5) + e.width/2) - 0.5,
        (-(y * 105.5)/(r * 1.5) + e.width/2) - 0.5, 2, 0, 2 * Math.PI)
    ctx.fill()
}

function draw(){
    let canvas_graph = document.querySelector('canvas#graph');
    let ctx = canvas_graph.getContext('2d');
    ctx.clearRect(0, 0, canvas_graph.width, canvas_graph.height)

    draw_figures(ctx, canvas_graph.width, canvas_graph.height);

    ctx.fillStyle = `rgb(0, 0, 0)`

    draw_text(ctx, canvas_graph.width, canvas_graph.height, R);
    draw_dec_lines(ctx, canvas_graph.width, canvas_graph.height);

    for (let dot of dots){
        if (R == null){
            draw_dot(canvas_graph, dot[0], dot[1], dot[2], dot[3]);
        } else if (R == dot[2]){
            draw_dot(canvas_graph, dot[0], dot[1], dot[2], dot[3]);
        }
    }
}

function cumulativeOffset(element){
    let top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while(element);

    return {
        top: top,
        left: left
    };
}

document.querySelector('canvas#graph').addEventListener('click', (e) => {
    let canvas = document.querySelector('canvas#graph');
    let c_offset = cumulativeOffset(canvas);

    if (validateR()){
        let x = e.pageX - c_offset['left'];
        let y = e.pageY - c_offset['top'];

        x = Math.round((x - canvas.width/2) / (105.5 / 1.5) * R * 1000) / 1000;
        y = Math.round((canvas.height/2 - y) / (105.5 / 1.5) * R * 1000) / 1000;

        document.getElementById('formHidden:xHidden').value = x;
        document.getElementById('formHidden:yHidden').value = y;
        document.getElementById('formHidden:rHidden').value = R;
        document.getElementById('formHidden:sbtHidden').click();
    }
})

draw();