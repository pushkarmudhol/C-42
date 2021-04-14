var name="pushkar";
var age=13;
var studing=true;
var arr1=[1,2,3,4,5];
var studentDetails2=[1,"pushkar",13,"Narayanae-techno school"];
console.log(studentDetails2);
console.log(studentDetails2[5]);
console.log("hellow")
console.log("My name is " + studentDetails2[1] + ". I'am " + studentDetails2[2] + "years old " + ". I am studing in " 
+ studentDetails2[3]);

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();

}