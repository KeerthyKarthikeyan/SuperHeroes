var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown",mykeydown);
 function mykeydown(e){
  keypress = e.keyCode;
  console.log(keypress);
  if (e.shiftKey==true && keypress=='80'){
      console.log("p and shift key pressed together");
      block_image_width=block_image_width+10;
      block_image_height=block_image_height+10;
      document.getElementById("current_width").innerHTML=block_image_width;
      document.getElementById("current_height").innerHTML=block_image_height;
      
  }
  if (e.shiftKey==true && keypress=='77'){
    console.log("m and shift key pressed together");
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
 }
 if (keypress=="38"){
    up();
    console.log("up");

}
if (keypress=="40"){
    down();
    console.log("down");

}
if (keypress=="39"){
    right();
    console.log("right");

}
if (keypress=="37"){
    left();
    console.log("left");

}
if (keypress=="73"){
    new_image("ironman_face (1).png");
    console.log("i_f");

}
if (keypress=="72"){
    new_image("hulk_legs (1).png");
    console.log("h_l");

}if (keypress=="84"){
    new_image("thor_right_hand (1).png");
    console.log("t_r");

}if (keypress=="67"){
    new_image("captain_america_left_hand (1).png");
    console.log("c_a");

}if (keypress=="83"){
    new_image("spiderman_body (1).png");
    console.log("s_m");

}

}
function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log("block image height= " + block_image_height);
        console.log("when up arrow is pressed ,x = " + player_x + " ,y= "+player_y );
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=350){
        player_y=player_y+block_image_height;
        console.log("block image height= " + block_image_height);
        console.log("when down arrow is pressed ,x = " + player_x + " ,y= "+player_y );
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=800){
        player_x=player_x+block_image_width;
        console.log("block image width= " + block_image_width);
        console.log("when right arrow is pressed ,x = " + player_x + " ,y= "+player_y );
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_image_width;
        console.log("block image width= " + block_image_width);
        console.log("when left arrow is pressed ,x = " + player_x + " ,y= "+player_y );
        canvas.remove(player_object);
        player_update();
    }
}