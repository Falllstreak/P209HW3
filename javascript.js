let myArray = [2, 3, 4];
let x = myArray

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("output1").value = x[0];
    document.getElementById("output2").value = x[1];
    document.getElementById("output3").value = x[2];

    document.getElementById("cubed").addEventListener("click", function () {
        let x = myArray.map(myCubed);
        

        document.getElementById("output1").value = x[0];
        document.getElementById("output2").value = x[1];
        document.getElementById("output3").value = x[2];
    });


// Correct way to call a Function by name:

    document.getElementById("fourth").addEventListener("click", doFourthFunction);
    
/*     Incorrect Way to call a Function by name:


    document.getElementById("fourth").addEventListener("click", function fourthFunction () {
        let x = myArray.map(fourthFunction)
        document.getElementById("output1").value = x[0];
        document.getElementById("output2").value = x[1];
        document.getElementById("output3").value = x[2];

        function fourthFunction(oneNum) {
            return Math.pow(oneNum, 4);
        }


    }); */


});


function mySquare (mySquare) {
    let x = myArray.map(mySquare);
    //let x = myArray.map(x => x.Square);
    function mySquare(oneNum) {
        return Math.pow(oneNum, 2);
    }
    
    document.getElementById("output1").value = x[0];
    document.getElementById("output2").value = x[1];
    document.getElementById("output3").value = x[2];
};

let myCubed = function (oneNum) {
    return Math.pow(oneNum, 3);
}

function doFourthFunction(){
    let x = myArray.map(fourthFunction)
    document.getElementById("output1").value = x[0];
    document.getElementById("output2").value = x[1];
    document.getElementById("output3").value = x[2];
}

function fourthFunction(oneNum) {
    return Math.pow(oneNum, 4);
}