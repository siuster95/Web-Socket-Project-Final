//variables 
let canvas;

let ctx;

let mouseX;

let mouseY;

let markerpositionx;
let markerpositiony;

let roomNumber;

let socket;

let circleobjs = [];

let positions = [];

let yourturn = false;

let R;
let G;
let B;

let playerlabel;
let player1label;
let player2label;

let play = false;

let turnlabel;

let canPlace = false;

let completed = false;

let topbool = true;
let bottombool = true;
let leftbool = true;
let rightbool = true;
let DrightTopbool = true;
let DleftTopbool = true;
let DrightBottombool = true;
let DleftBottombool = true;

let changebottom = false;
let changetop = false;
let changeleft = false;
let changeright = false;
let changeDleftTop = false;
let changeDrightTop = false;
let changeDleftBottom = false;
let changeDrightBottom = false;

//Init the program, connect to server and listen to server commands 
const init = () => {
    
    socket = io.connect();
    canvas = document.querySelector("#Canvas");
    ctx = canvas.getContext("2d");
    turnlabel = document.querySelector("#turnlabel");
    playerlabel = document.querySelector("#PlayerLabel");
    player1label = document.querySelector("#P1Score");
    player2label = document.querySelector("#P2Score");
   
    for(let y = 0; y < 8; y++)
        {
            circleobjs[y] = [];
        }
    for(let x =0;x<8;x++)
    {
        for(let k =0;k<8;k++)
        {
            circleobjs[x][k] = null;
        }
    }
    
    //on mouse movement over the canvas, draw predict circle if possible
    canvas.addEventListener('mousemove',(evt)=>{
        let object = getmousemove(canvas,evt);
        mouseX = object.x;
        mouseY = object.y;
        markerposition(mouseX,mouseY);
        drawPredict();
    });
    
    //draw the circle
    canvas.addEventListener('click', drawCircle);
    
    //put updated grid into client memory, change turn label and redraw
    socket.on('UpdatefromServer',(data) => {
        
        circleobjs = data.circleGrid;
        
        completed = data.filled;

        player1label.innerHTML = data.player1;
        player2label.innerHTML = data.player2;

        if(completed == true)
        {
            turnlabel.innerHTML = "Gane Completed";
            let winLabel = document.createElement("h2");
            if(data.player1 > data.player2)
            {
                winLabel.innerHTML = "Winner: player 1";
                winLabel.style.position = "absolute";
                winLabel.style.top = "100%";
                winLabel.style.left = "84%";
            }
            else
            {
                winLabel.innerHTML = "Winner: player 2";
                winLabel.style.position = "absolute";
                winLabel.style.top = "100%";
                winLabel.style.left = "84%";
            }

            document.body.appendChild(winLabel);

        }

        redraw();
    });

    //on Join, put into memory data sent from the server
    socket.on("Joined",(data)=>{

        R = data.R;
        G = data.G;
        B = data.B;
        circleobjs = data.circleobjs;
        roomNumber = data.Roomnumber;
        if(R == 0 && G == 0 && B == 0)
        {
            playerlabel.innerHTML = "Player 1";
        }
        else
        {
            playerlabel.innerHTML = "Player 2";
        }
        redraw();
    });
    
    
    socket.on("Start",(data) =>{
        play = data.bool;
        socket.emit("Setup",{R,G,B,roomNumber});
    });

    //get the four starting pieces when the game starts in the middle
    socket.on("SetupfromServer",(data) => {

        for(let x = 0;x < 8;x++)
        {
            for(let y =0;y < 8;y++)
            {
                if(data.grid[x][y] != null)
                {
                  
                    let circle = data.grid[x][y];

                    circle.radius = 50;

                    let object = {};
                    object.circle = circle;

                    circleobjs[x][y] = object;

                    let newposition = {x:data.grid[x][y].x,y:data.grid[x][y].y};
                    positions.push(newposition);
                }
            }
        }

        player1label.innerHTML = data.player1;
        player2label.innerHTML = data.player2;
        turnlabel.innerHTML = "Opponent's Turns"
        turnlabel.style.left = "84.5%";
        redraw();
    });

    //when its your turn, allow player to place pieces down
    socket.on("Turn", (data) => {
        yourturn = data.turn;
        if(completed == true)
        {
            
        }
        else
        {
            turnlabel.innerHTML = "Your Turn";
            turnlabel.style.left = "87%";
        }
    });
    
    //notify if opponent has left the game
    socket.on("Quit", () =>{
       
        let quitLabel = document.createElement("h1");
        quitLabel.innerHTML = "The other player has left, you have won by default";
        quitLabel.style.position = "absolute";
        quitLabel.style.left = "82%";
        quitLabel.style.top = "110%"; 
        document.body.appendChild(quitLabel);
        play = false;
        
    });
};

const drawPredict = () => {
    
    if(play == true && yourturn == true)
    {

    topbool = true;
    bottombool = true;
    leftbool = true;
    rightbool = true;
    DrightTopbool = true;
    DleftTopbool = true;
    DrightBottombool = true;
    DleftBottombool = true;
        
    changebottom = false;
    changetop = false;
    changeleft = false;
    changeright = false;
    changeDleftTop = false;
    changeDrightTop = false;
    changeDleftBottom = false;
    changeDrightBottom = false;


    redraw();
    let positionsAllowed = []
    for(let x =0;x < positions.length;x++)
    {
        //if a circle exist there, don't draw
        if(markerpositionx == positions[x].x && markerpositiony == positions[x].y)
        {
            return;
        }
    } 
    //get the x and y
    let circleX = (markerpositionx - 50) / 100;
    let circleY = (markerpositiony - 50) / 100;
            
    let canDrawCircle = changecircleCheck(circleX,circleY);

    if( canDrawCircle )
    {
        ctx.save();
        ctx.globalAlpha = 0.8;
        ctx.strokeStyle = `rgb(${R},${G},${B})`;
        ctx.beginPath();
        ctx.arc(markerpositionx,markerpositiony,50,0,2*Math.PI*2);
        ctx.stroke();
        ctx.restore();
        canPlace = true;
        return;
    }
    canPlace = false;
    }
};



 //get mouse movement 
        const getmousemove = (canvas,evt) => {
           let rect = canvas.getBoundingClientRect();
            return{
              x: evt.clientX - rect.left,
              y: evt.clientY - rect.top
            };
        };

  //click and make a circle
        const drawCircle = () => {
            
            if(play == true && yourturn == true && canPlace == true)
            {
            for(let i =0; i< positions.length;i++)
            {
              let xpos = positions[i].x;   
              let ypos = positions[i].y
              
              if(markerpositionx == xpos && markerpositiony == ypos)
                {
                    return;
                }
            }
            let date = new Date().getTime();
            let circle = {
              x:markerpositionx,
              y:markerpositiony,
              radius:50,
              R:R,
              G:G,
              B:B
            };

            yourturn = false;

            let x = (markerpositionx - 50) / 100;
            let y = (markerpositiony - 50) / 100;
            
            circleobjs[x][y] = {};  
            circleobjs[x][y].circle = circle;
            changeCircle(x,y);
            turnlabel.innerHTML = "Opponent's Turn";
            turnlabel.style.left = "84.5%";

            socket.emit('updateCanvas',{roomNumber:roomNumber,circleGrid:circleobjs});
            console.log('sending circle to server');
            }
        };

        const redraw = () => {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.save();
            ctx.fillStyle = "green";
            ctx.fillRect(0,0,canvas.width,canvas.height);
            for(let x =0;x<8;x++)
            {
                let horizontal = x * 100;
                ctx.beginPath();
                ctx.moveTo(horizontal,0);
                ctx.lineTo(horizontal,canvas.height);
                ctx.stroke();
            }
            for(let y =0;y<8;y++)
            {
                let vertical = y * 100;
                ctx.beginPath();
                ctx.moveTo(0,vertical);
                ctx.lineTo(canvas.width,vertical);
                ctx.stroke();
            }
            ctx.restore();
            positions = [];
            if(play == false)
            {
                ctx.font = "30px Arial";
                ctx.fillText("Waiting for another player",canvas.width/2 - 170,canvas.height/2);
            }
            else
            {
                
            }
            for(let x =0; x < 8; x++)
            {
            for(let y =0;y<8;y++)
            {
                let object  = circleobjs[x][y];
                if(object != null)
                {
                ctx.save();
                console.log(object.circle.x);
                console.log(object.circle.y);
               
                ctx.strokeStyle = `rgb(${object.circle.R},${object.circle.G},${object.circle.B})`;
                ctx.fillStyle = `rgb(${object.circle.R},${object.circle.G},${object.circle.B})`;

                 ctx.beginPath();
                 ctx.arc(object.circle.x,object.circle.y,50,0,2*Math.PI*2);
                 ctx.fill();
                 ctx.stroke();
                ctx.restore();
                
                let newposition = {x:object.circle.x,y:object.circle.y,R:object.circle.R,G:object.circle.G,B:object.circle.B};
                positions.push(newposition);
                }
            }
            
        }};

       

window.onload = init;
