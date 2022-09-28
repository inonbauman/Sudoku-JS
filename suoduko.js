
function setMatrix() { // This function is chanck bitween the martix 
    let randomMatrix = Math.floor(Math.random() * 3 );   //returns a random integer between 0 and 2 (both included)
    if (randomMatrix == 0) {
        //good matrition
        matrix = [
            [8,9,7,1,4,5,6,2,3],
            [1,5,3,6,2,8,4,9,7],
            [4,6,2,3,7,9,8,1,5],
            [6,7,4,2,5,3,1,8,9],
            [3,8,9,4,1,7,5,6,2],
            [2,1,5,8,9,6,3,7,4],
            [7,2,6,5,3,1,9,4,8],
            [5,4,8,9,6,2,7,3,1],
            [9,3,1,7,8,4,2,5,6],
        ]
    } else if (randomMatrix == 1) {
        matrix = [
            [1,2,9,6,3,7,4,8,5],
            [6,5,8,2,4,9,7,3,1],
            [3,7,4,1,5,8,6,9,2],
            [4,9,5,7,8,6,1,2,3],
            [8,6,2,9,1,3,5,7,4],
            [7,3,1,5,2,4,9,6,8],
            [5,8,6,4,9,2,3,1,7],
            [9,4,3,8,7,1,2,5,6],
            [2,1,7,3,6,5,8,4,9]
        ] 
    } else {
        matrix = [
            [5,3,4,6,7,8,9,1,2],
            [6,7,2,1,9,5,3,4,8],
            [1,9,8,3,4,2,5,6,7],
            [8,5,9,7,6,1,4,2,3],
            [4,2,6,8,5,3,7,9,1],
            [7,1,3,9,2,4,8,5,6],
            [9,6,1,5,3,7,2,8,4],
            [2,8,7,4,1,9,6,3,5],
            [3,4,5,2,8,6,1,7,9]
        ]
    }

}



function checkLogin() {    // That function are chack the login 
    let name = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

   if(name == "" || name == null) { 
    document.getElementById("userDeta").innerHTML = "Your name is invalid"
    return
  }
  else if(password == "" || password == null) {
    document.getElementById("userDeta").innerHTML = "Your password is invalid"
    return
  }
    else if(name != "abcd" || password != "1234") {
      document.getElementById("userDeta").innerHTML = "The username or password is incorrect"
      return
  }
    
   else {document.getElementById("userDeta").innerHTML = "Thank you, "  + "<br>We saved your info!"
   window.location.replace("./settings.html");
   }
}


function setNumByLevel(levelnum) {  // A function that hides the column in the matrix, between the levels
    switch(levelnum) {
        case "1": 
        return num = 0.75
        case "2":
        return num = 0.5;
        case "3":
        return num=0.25;
    }
}



function checkSoduko() {  // chacking the soduko
   let userMath = []
    var soduko = document.getElementById('container').childNodes;
        for(let i=0; i<soduko.length; i++) {
   
         if (soduko[i].value) {
             userMath[i] = soduko[i].value
         } 
}   
 let isEqual = true 
 let originalMath = changeForOneArr(matrix)
 for (let i = 0; i<originalMath.length;i++) {
    if (originalMath[i] != userMath[i+1]) {
        isEqual= false
    }
 }
 if (isEqual) {
    window.alert("good you win")
   window.location.replace("./settings.html");
 } else {
    window.alert("Sudoku not resolved as required, please try again")
 }
}


function restartGame() {  // Restart the game, delete the columns and create a new matrix
    let index = document.getElementById("container");
    while (index.firstChild) {
      index.removeChild(index.lastChild);
    }
    createBox()
}


function changeForOneArr(mat){  // function that change the matrix to one array
    let arr=[]
    for(let row=0; row<mat.length;row++){
        for(let col=0;col<mat[row].length;col++){
            arr.push(mat[row][col])
        }
    }
    return arr;
}



function createBox() { //cracte the screen 
    setMatrix()
    let mtx = changeForOneArr(matrix)
    let levelnum  = window.location.search     // here we searching the http addres 
    levelnum = levelnum.charAt(levelnum.length -1) //cut the end of http aders to get the difficulty Level
    let level = setNumByLevel(levelnum)
    let container = document.getElementById("container")

    for (let i = 0; i< 81;i++) {
        let box = document.createElement("input")    
        box.maxLength = 1;
        let randnum = Math.random();
        
        if (randnum <level) {
            box.value = mtx[i];
            box.disabled = true
        } else {
            box.value = "";
        }

        container.appendChild(box).className = "box";;
    }
}
