canvas=document.getElementById("myCanvas");
var mouseEvent = "Empty";
color="black";
width_of_line=2;

ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    canvas.addEventListener("mousedown",my_mousedown);
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("X="+mouse_x +",Y="+mouse_y);
    circle(mouse_x,mouse_y);
color=document.getElementById("color").value;
radius=document.getElementById("radius").value;
width_of_line=document.getElementById("width_of_line").value;
mouseEvent=="mouseDown";}


canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
     current_position_of_mouse_x=e.clientX=canvas.offsetLeft;
     current_position_of_mouse_y=e.clientY=canvas.offsetTop;
     if(mouseEvent=="mouseDown"){
         console.log("Current position of x and y coordinates = ")
         console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y)
         
     }
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=width_of_line;
     ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y, radius ,0,2*Math.IP);
     ctx.stroke();
    }

    canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent=="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent=="mouseleave";
}


    
function circle(mouse_x,mouse_y){
    ctx.beginPath();
   ctx.strokeStyle="black";
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();  
}
function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}