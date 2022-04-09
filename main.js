canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
background_image="mars.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;
rover_width=100;
rover_height=100;
function add(){
    bg_img=new Image();
    bg_img.onload= uploadBackground;
    bg_img.src= background_image;
    rover_img=new Image();
    rover_img.onload= uploadRover;
    rover_img.src= rover_image;
}
function uploadBackground(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);

}
function uploadRover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);

}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=='38'){
        up();
        console.log("up arrow is pressed")
    }
    if(keyPressed=='40'){
        down();
        console.log("down arrow is pressed")
    }
    if(keyPressed=='37'){
        left();
        console.log("left arrow is pressed")
    }
    if(keyPressed=='39'){
        right();
        console.log("right arrow is pressed")
    }
}
function up(){
    if(rover_y>=0){
        rover_y= rover_y-10;
        console.log("when up is pressed, x=  "+rover_x+" | y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y= rover_y+10;
        console.log("when up is pressed, x=  "+rover_x+" | y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x= rover_x-10;
        console.log("when up is pressed, x=  "+rover_x+" | y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x= rover_x+10;
        console.log("when up is pressed, x=  "+rover_x+" | y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}