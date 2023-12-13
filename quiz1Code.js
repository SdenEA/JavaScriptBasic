function calculateAreaOfACircle(radius){
    const PI = 3.14159;
    let area = PI * radius * radius;
    console.log("The area of the circle is: "+area);
}

calculateAreaOfACircle(2);

// another way 
/*
const PI = 3.14159;
function calculateAreaOfACircle(radius){
    let area = PI * radius * radius;
    return area;
}
console.log("The area of the circle is: "+calculateAreaOfACircle(2));
*/
