var background, backgroundImg;
var blue_scoop, blue_scoopImg, brown_scoop, brown_scoopImg, green_scoop, green_scoopImg, pink_scoop, pink_scoopImg, white_scoop, white_scoopImg;
var BlueSG, BrownSG, GreenSG, PinkSG, WhiteSG;
var scoops, scoopGroup;
var cone, coneImg;
var order, orderImg;
var scoopCounter = 0
var score;
var link;
var start, startImg, tutorial, tutorialImg, logo, logoImg, back, backImg;
//var gameStates = "start"

function preload(){
    backgroundImg = loadImage("assets/background.jpg")
    blue_scoopImg = loadImage("assets/blue_scoop.png")
    brown_scoopImg = loadImage("assets/brown_scoop.png")
    coneImg = loadImage("assets/cone.png")
    green_scoopImg = loadImage("assets/green_scoop.png")
    orderImg = loadImage("assets/order.png")
    pink_scoopImg = loadImage("assets/pink_scoop.png")
    white_scoopImg = loadImage("assets/white_scoop.png")
    //startImg = loadImage("assets/start.png")
    //tutorialImg = loadImage("assets/tutorial.png")
    //logoImg = loadImage("assets/logo.png")
    //backImg = loadImage("assets/back.png")
}

function setup(){
createCanvas(windowWidth, windowHeight)

BlueSG = new Group()
BrownSG = new Group()
GreenSG = new Group()
PinkSG = new Group()
WhiteSG = new Group()

cone = createSprite(width/2,height/2 + 250,10,10)
    cone.addImage("cone",coneImg)
    cone.scale = 0.3
    cone.visible = true

//var link = new Link(cone,scoopGroup)

/*
//logo = createSprite(width/2-100,height/2,10,10)
    logo=createImg("assets/logo.png")
    logo.position(width/2-560,height/2-440)

//start = createSprite(width/2,height/2,10,10)
    start=createImg("assets/start.png")
    start.position(width/2-450, height/2-240)
    start.mousePressed(game)

//tutorial = createSprite(width/2+100,height/2,10,10)
    tutorial=createImg("assets/tutorial.png")
    tutorial.position(width/2-550, height/2-140)
    //tutorial.mouseClicked()
*/


}

function draw(){
    background(backgroundImg)

    cone.x = World.mouseX

    /*if(gameStates === "start"){
        
    } 

    if(gameStates === "play"){



    }

    if(gameStates === "tutorial"){
        back = createSprite("assets/back.png")
        back.position(200,height-200)
        back.size(200,200)
        back.mouseClicked(gameStates = "start")
    }*/

   
    var select_scoop = Math.round(random(1,5));
    if (World.frameCount % 50 == 0) {
        if (select_scoop == 1) {
          blueScoop();
        } else if (select_scoop == 2) {
          brownScoop();
        } else if (select_scoop == 3) {
          greenScoop();
        } else if (select_scoop == 4) {
            pinkScoop();
        } else {
          whiteScoop();
        }
      }
    
    if(cone.isTouching(BrownSG)){
        BrownSG.setPositionEach(10,10,10)
    }

    drawSprites()
}

/*function game(){
    //change to icecream
    if (frameCount % 40 === 0) {
    scoops = createSprite(random(100, 1000), 0, 100, 100);
    scoops.velocityY = 6;
    scoops.visible = true
    var rand = Math.round(random(1,5));
    switch(rand){
        case 1: scoops.addImage("scoop1", blue_scoopImg);
        scoops.scale = 0.3
        break;
        case 2: scoops.addImage("scoop2", brown_scoopImg);
        scoops.scale = 0.5
        break;
        case 3: scoops.addImage("scoop3", green_scoopImg);
        scoops.scale = 0.7
        break;
        case 4: scoops.addImage("scoop4", pink_scoopImg);
        scoops.scale = 0.3
        break;
        case 5: scoops.addImage("scoop5", white_scoopImg);
        scoops.scale = 0.3
        break;
    }
    scoopGroup.add(scoops);
        
    }
}

/*function play(){
    gameStates = "playing"
    cone.visible = true
    scoops.visible = true
    logo.remove()
    start.remove()
    tutorial.remove()
}*/

function blueScoop(){
    blue_scoop = createSprite(Math.round(random(100,1000)),0,10,10)
    blue_scoop.addImage(blue_scoopImg)
    blue_scoop.velocityY = 6
    blue_scoop.lifetime = 450
    blue_scoop.scale = 0.3
    BlueSG.add(blue_scoop)
}

function brownScoop(){
    brown_scoop = createSprite(Math.round(random(100,1000)),0,10,10)
    brown_scoop.addImage(brown_scoopImg)
    brown_scoop.velocityY = 6
    brown_scoop.lifetime = 450
    brown_scoop.scale = 0.5
    BrownSG.add(brown_scoop)
}
function greenScoop(){
    green_scoop = createSprite(Math.round(random(100,1000)),0,10,10)
    green_scoop.addImage(green_scoopImg)
    green_scoop.velocityY = 6
    green_scoop.lifetime = 450
    green_scoop.scale = 0.7
    GreenSG.add(green_scoop)
}
function pinkScoop(){
    pink_scoop = createSprite(Math.round(random(100,1000)),0,10,10)
    pink_scoop.addImage(pink_scoopImg)
    pink_scoop.velocityY = 6
    pink_scoop.lifetime = 450
    pink_scoop.scale = 0.3
    PinkSG.add(pink_scoop)
}
function whiteScoop(){
    white_scoop = createSprite(Math.round(random(100,1000)),0,10,10)
    white_scoop.addImage(white_scoopImg)
    white_scoop.velocityY = 6
    white_scoop.lifetime = 450
    white_scoop.scale = 0.3
    WhiteSG.add(white_scoop)
}