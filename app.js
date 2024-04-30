let movObj = document.querySelector("#man");
let bodyObj = document.querySelector("body");

let topPosition = 3;
let leftPosition = 2;

let movementArr =[[0,200,300,500] , [200,300,0,100] , [300,500,500,500]];

function getMovingOptions( x ) {
    if( x>=0 && x<=200 ) {
        return movementArr[0];
    }
    else if( x>200 && x<=300 ) {
        return movementArr[1];
    }
    else if( x>300 && x<=500 ) {
        return movementArr[2];
    }
    else
        return [];
}

bodyObj.addEventListener( "keydown" , (event)=>{
    let options = getMovingOptions( leftPosition );
    console.log( options );

    if( options.length>0 ) {

        let x1=options[0];
        let x2=options[1];
        let y1=options[2];
        let y2=options[3];

        if( leftPosition>450 && topPosition>450 ) {
            alert("You Have Completed the Game !!");
            bodyObj.style.backgroundColor = "green";
            let h1 = document.createElement("h1");
            h1.innerHTML= "<h1> Congrats you have Completed the Game !! </h1>";
            h1.style.position = "absolute";
            h1.style.color = "yellow";
            h1.style.top = "200px";
            h1.style.left = "550px";
            bodyObj.append( h1 );
        }

        if( event.key=="ArrowRight" ) {
            if( leftPosition<(x2-2)  || ( topPosition>(y1+2)&&topPosition<(y2-2)) ) {
                console.log("Arrow right is triggered");
                movObj.style.left = `${++leftPosition}px`;
            }
        }

        else if( event.key=="ArrowLeft" ) {
            if( leftPosition>(x1+2) ) {
                console.log("Arrow right is triggered");
                movObj.style.left = `${--leftPosition}px`;
            }
        }

        else if( event.key=="ArrowDown" ) {
            if( topPosition<498 ) {
                console.log("Arrow Down is triggered !!");
                movObj.style.top = `${++topPosition}px`;
            }
        }
        else if( event.key=="ArrowUp" ) {
            if( topPosition>2 ) {
                console.log("Arrow Up is triggered !!");
                movObj.style.top = `${--topPosition}px`;
            }
        }
    }
})