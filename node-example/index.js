var rect = require('./rectangle')


function solveRect(l,b){
    console.log("Solving for rectangle with l = "+ l + " and b "+ b);

    rect(l,b,(err, rectangle) => {
        if(err){
            console.log("Error: "+ err.message);
        }
        else{
            console.log("The area of reactangle is " + rectangle.area());
        }
    });
    console.log("This statment is after the call of rect");
}

solveRect(2,4);
solveRect(3,5);
solveRect(10,5);
solveRect(-2,2) 