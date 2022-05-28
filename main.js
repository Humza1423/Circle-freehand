canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="";
radius=0; 
linewidth=0;
mouse_event="";
var last_position_x, last_position_y;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouse_event="mousedown";
color=document.getElementById(color_input);
radius=document.getElementById(radius_input); 
linewidth=document.getElementById(linewidth);
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_positionX=e.clientX-canvas.offsetLeft;
    current_positionY=e.clientY-canvas.offsetTop;
    
    if(mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=linewidth;
        ctx.arc(current_positionX, current_positionY, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouse_event="mouseleave";
}