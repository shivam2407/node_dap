var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};

function solveRect(l,b){
    console.log("Solving for rectangle with l = "+ l + " and b "+ b);

    if(l<=0 || b<=0){
        console.log("Rectangle parameters should be greater than zero");
    }
    else{
        console.log("Area of Rectangle is "+ rect.area(l,b));
        console.log("Perimeter of Rectangle is "+rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(10,5);
solveRect(-2,2) 