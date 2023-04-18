document.addEventListener("DOMContentLoaded", function (event) {

    let myArray = [2, 3, 4];

    document.getElementById("square").addEventListener("click", function () {
        let x = myArray.map(mySquare);
        //let x = myArray.map(x => x.Square);
        document.getElementById("output1").value = x;
    });
    
    document.getElementById("cubed").addEventListener("click", function () {
        let x = myArray.map(myCubed);
        

        document.getElementById("output2").value = x;
    });
    
    document.getElementById("fourth").addEventListener("click", function () {
        let x = myArray.map(fourthFunction)
        document.getElementById("output3").value = x;
    });
});

function mySquare(oneItem) {
    return Math.pow(oneItem, 2);
}

function myCubed(oneItem) {
    return Math.pow(oneItem, 3)();
}

function fourthFunction(oneItem) {
    charArray = Array.from(oneItem)
    return charArray[0];
}