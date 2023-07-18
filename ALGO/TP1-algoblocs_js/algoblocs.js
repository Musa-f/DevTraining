/*// ----------A1

//Initialisation
setPos(300,300);
changeColor(color.red);
faceDown();
setLineWidth(5);

//Réalisation
forward(200);
faceRight();
forward(100);


// ----------A2
//Initialisation
setPos(300,300);
changeColor(color.yellow);
faceLeft();
setLineWidth(5);

//Réalisation
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp(200);
forward(200);


// ----------A3
//Initialisation
setPos(300,300);
changeColor(color.yellow);
faceLeft();
setLineWidth(5);

//Réalisation
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceUp();
forward(100);
faceDown();
forward(200);



// ----------A4
//Initialisation
setPos(200,400);
changeColor(color.green);
faceRight();
setLineWidth(5);

//Réalisation
forward(100);
arcLeft(50,180);
forward(50);
arcRight(50,180);
forward(100);


// ----------A5
//Initialisation
setPos(300,100);
changeColor(color.red);
faceRight();
setLineWidth(5);

//Réalisation
arcRight(200,360);
faceLeft();
arcLeft(100,180);
arcRight(100,180);


// ----------A6
//Initialisation
setPos(300,300);
changeColor(color.blue);
faceUp();
setLineWidth(5);

//Réalisation
forward(50);
up();
forward(50);
down();
forward(100);


// ----------A7
//Initialisation
setPos(200,300)
changeColor(color.green);
faceDown();
setLineWidth(5);

//Réalisation
forward(100);
arcLeft(50,180);
forward(50);
up();
forward(50);
down();
forward(100);
arcLeft(50,180);
forward(50);


// ----------A8
//Initialisation
setPos(300,300);
changeColor(color.red);
faceUp();
setLineWidth(5);

//Réalisation
forward(50);
faceRight();
forward(100);
faceDown();
forward(200);
faceLeft();
forward(50);
up();
forward(50);
faceUp();
forward(50);
down();
forward(50);


// ----------A9
//Initialisation
setPos(200,500);
changeColor(color.blue);
faceRight();
setLineWidth(5);

//Réalisation
forward(200);
faceLeft();
arcRight(50,180);
arcLeft(50,180);
forward(200);
arcLeft(50,180);
arcRight(50,180);


// ----------A10
//Initialisation
setPos(300,300);
changeColor(color.red);
faceRight();
setLineWidth(5);

//Réalisation
arcLeft(50,180);
changeColor(color.yellow);
arcLeft(100,180)
changeColor(color.green);
arcLeft(200,180);


// ----------B1
//Initialisation
setPos(100,100);
changeColor(color.red);
faceRight();
setLineWidth(5);

//Réalisation
for(i=0; i<4; i++){
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}


// ----------B2
//Initialisation
setPos(100,400);
changeColor(color.red);
faceUp();
setLineWidth(5);

//Réalisation
for(i=0; i<4; i++){
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}


// ----------B3
//Initialisation
setPos(300,300);
changeColor(color.blue);
faceRight();
setLineWidth(5);

//Réalisation
for(i=0; i<4; i++){
    forward(100);
    left(90);
}


// ----------B4
//Initialisation
setPos(300,300);
changeColor(color.blue);
faceRight();
setLineWidth(5);

//Réalisation
for(let i=0; i<3; i++){
    forward(100);
    left(120);
}


// ----------B5
//Initialisation
setPos(300,400);
changeColor(color.yellow);
faceUp();
setLineWidth(5);

//Réalisation
forward(300);
changeColor(color.red);
faceDown();
for(let i=0; i<3; i++){
    forward(100);
    left(120);
}


// ----------B6
//Initialisation
setPos(50,400);
changeColor(color.red);
faceRight();
setLineWidth(5);

//Réalisation
for(let i=0; i<2; i++){
    forward(100);
    left(90);
    forward(100);
    faceRight();
}
changeColor(color.green);
for(let i=0; i<3; i++){
    forward(100);
    right(90);
    forward(100);
    faceRight();
}


// ----------B7
//Initialisation
setPos(300,300);
changeColor(color.yellow);
faceRight();
setLineWidth(5);

//Réalisation
for(let i=0; i<4; i++){
    forward(100);
    right(90);
}
for(let i=0; i<3; i++){
    forward(100);
    left(120);
}


// ----------B8
//Initialisation
setPos(200,300);
changeColor(color.yellow);
faceRight();
setLineWidth(5);

//Réalisation
for(let i=0; i<8; i++){
    forward(200);
    right(135);
}


// ----------B9
//Initialisation
setPos(200,300);
changeColor(color.red);
faceRight();
setLineWidth(5);

//Réalisation
forward(50);
up();
forward(50);
down();
for(let i=0; i<3; i++){
    forward(100);
    right(120);
}


// ----------B10
//Initialisation
setPos(100,300);
changeColor(color.blue);
faceRight();
setLineWidth(5);

//Réalisation
for(let i=0; i<8; i++){
    forward(100);
    right(135);
}
up();
changeColor(color.green);
forward(200);
down();
for(let i=0; i<8; i++){
    forward(200);
    right(135);
}
up();
changeColor(color.red);
forward(100);
right(90)
down();
for(let i=0; i<8; i++){
    forward(100);
    right(135);
}


// ----------B11
//Initialisation
setPos(300,300);
changeColor(color.red);
faceRight
setLineWidth(5);

//Réalisation
for(let i=0; i<4; i++){
    forward(50);
    left(90);
    forward(50);
    right(90);
    forward(50);
    right(90);
}


// ----------B12
//Initialisation
setPos(300,400);
changeColor(color.red);
faceDown();
setLineWidth(5);

//Réalisation
for(i=0; i<3; i++){
    forward(100);
    right(90);
}
up();
faceUp();
forward(50);
changeColor(color.green);
down();
for(i=0; i<3; i++){
    forward(100);
    right(90);
}


// ----------B13
//Initialisation
setPos(200,500);
changeColor(color.green);
faceRight();
setLineWidth(5);

//Réalisation
for(let i=0; i<8; i++){
    forward(100);
    left(60);
    forward(50);
    right(90);
    forward(50);
    left(90);
}


// ----------C1
//Initialisation
setPos(100,300);
changeColor(color.blue);
faceRight();
setLineWidth(5);

//Réalisation
for(var i=0; i<4; i++){
    for(var b=0; b<3; b++){
        forward(100);
        right(120);
    }
    forward(100);
}


// ----------C2
//Initialisation
setPos(300,500);
changeColor(color.red);
faceUp();
setLineWidth(5);

//Réalisation
for(var a=0; a<4; a++){
    for(var i=0; i<4; i++){
        forward(50)
        right(90)
    }
    up();
    forward(100);
    down();
}


// ----------C3
//Initialisation
setPos(50,300);
faceRight();
setLineWidth(5);

//Réalisation
for(var a=0; a<3; a++){
    shiftColor(0.6);
    for(let i=0; i<8; i++){
        forward(100);
        right(135);
    }
    up();
    forward(200);
    shiftColor(0.3);
    down();
}


// ----------C4
//Initialisation
setPos(50,300);
changeColor(color.yellow);
faceRight();
setLineWidth(5);

//Réalisation
for(let a=0; a<5; a++){
    for(let i=0; i<4; i++){
        forward(50);
        right(90);
    }
    changeColor(color.red);
    for(let i=0; i<3; i++){
        forward(50);
        left(120)
    }
    up();
    forward(100);
    down();
    changeColor(color.yellow);
}


// ----------C5
//Initialisation
setPos(300,300);
changeColor(color.yellow);
faceRight();
setLineWidth(5);

//Réalisation
for(let a=0; a<4; a++){
    for(let i=0; i<8; i++){
    forward(200);
    right(135);
}
shiftColor(0.3);
right(90);
}


// ----------C6
//Initialisation
setPos(300,500);
changeColor(color.yellow);
faceRight();
setLineWidth(5);

//Réalisation
for(let a=0; a<4; a++){
    forward(200);
        for(let i=0; i<4; i++){
        left(120);
        forward(200);
    }
}


// ----------C7
//Initialisation
setPos(250,400);
changeColor(color.red);
faceRight();
setLineWidth(5);

//Réalisation
for(let a=0; a<8; a++){
    for(let i=0; i<3; i++){
        forward(100);
        right(120);
    }
    forward(100);
    left(45);
}


// ----------D10
//Initialisation
setPos(300,300);
changeColor(color.yellow);
faceRight();
setLineWidth(5);

//Réalisation
let line = 50;
for(let i=0; i<10; i++){
    forward(line);
    right(90);
    line +=50;
}


// ----------D11
//Initialisation
setPos(50,300);
changeColor(color.red);
faceRight();
setLineWidth(5);

//Réalisation
let triangle = 200;
for(let a=0; a<4; a++){
    for(let i=0; i<3; i++){
        forward(triangle)
        left(120);
    }
    forward(triangle);
    triangle -= 50;
}


// ----------D12
//Initialisation
setPos(300,300);
changeColor(color.blue);
faceRight();
setLineWidth(5);

//Réalisation
let form = 60;

for(let a=0; a<6; a++){
    for(let i=0; i<3; i++){
        forward(form);
        left(120);
    }
    forward(form);
    left(60);
    form += 30;
}*/


// ----------D13
//Initialisation
setPos(300,300);
changeColor(color.red);
faceRight();
setLineWidth(5);

//Réalisation
let circle = 50;

for(let a=0; a<10; a++){
    arcRight(circle, 180)
    up();
    forward(10)
    down();
    circle += 20
}


// ----------C12
//Initialisation

//Réalisation


// ----------C13
//Initialisation

//Réalisation