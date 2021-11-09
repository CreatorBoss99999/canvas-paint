var mouseEvent = "empty";
var last_position_of_y;
var last_position_of_x;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_the_line = 1;
canvas.addEventListener("mousedown", mymousedown);



function mymousedown(){
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("width").value;
    mouseEvent = "mouseDown";
    
}

canvas.addEventListener("mouseMove" , mymousemove);


function mymousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.storkeStyle = color;
        ctx.lineWidth = width_of_the_line;
        ctx.moveTo(last_position_of_mouse_x,last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
        last_position_of_x = current_position_of_mouse_x;
        last_position_of_y = current_position_of_mouse_y;
    
    
}



canvas.addEventListener("mouseUp" , mymouseup)

function mymouseup(){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseLeave" , mymouseleave)

function mymouseleave(){
    mouseEvent = "mouseLeave";
}


function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}















