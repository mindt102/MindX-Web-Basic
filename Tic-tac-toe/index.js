var squares = document.getElementsByClassName("square")
var result = document.getElementById("result")
var again = document.getElementById("again")
var map = document.getElementById("map")
var endgame = false


function checkSpace() {
    for (i=0;i<squares.length;i++) {
        if (squares[i].textContent == "") {
            return true
        }
    }
    return false
}

function checkWin(sym) {
    var r1 = document.getElementsByClassName("r1")
    var r2 = document.getElementsByClassName("r2")
    var r3 = document.getElementsByClassName("r3")
    var c1 = document.getElementsByClassName("c1")
    var c2 = document.getElementsByClassName("c2")
    var c3 = document.getElementsByClassName("c3")    
    var d1 = document.getElementsByClassName("d1")
    var d2 = document.getElementsByClassName("d2")
        
    var checkList = [r1,r2,r3,c1,c2,c3,d1,d2]
    for (i=0;i<checkList.length;i++) {
        var win = true
        for (j=0;j<checkList[i].length;j++) {
            if (checkList[i][j].textContent != sym) {          
                win = false
                break
            }         
        }
        if (win) {return true}
    }
    return false
}

function botMove () {
    var spaceList = []
    var mid = document.getElementById('mid')
    var corners = document.getElementsByClassName("corn")
    var emptyCorners = []

    for (i=0;i<squares.length;i++) {
        if (squares[i].textContent == "") {
            spaceList.push(squares[i])
        }
    }
    for (s=0;s<spaceList.length;s++) {
        spaceList[s].textContent = "o"
        if (checkWin("o")) {
            return
        }
        else {
            spaceList[s].textContent = ""
        }
    }
    for (s=0;s<spaceList.length;s++) {
        spaceList[s].textContent = "x"
        if (checkWin("x")) {
            spaceList[s].textContent = "o"
            return
        }
        else {
            spaceList[s].textContent = ""
        }
    }

    if (mid.textContent == "") {
        mid.textContent = "o"
        return
    }

    if (corners.length > 0) {
        for (i=0;i<corners.length;i++){
            if (corners[i].textContent == "") {emptyCorners.push(corners[i])}    
        }
        if (emptyCorners.length > 0) {
            var rand_i = Math.floor(Math.random()*emptyCorners.length)
            emptyCorners[rand_i].textContent = "o"
            return
        }
    }
    
    var rand_i = Math.floor(Math.random()*spaceList.length)
    spaceList[rand_i].textContent = "o"
    return


}

var turn = 1
again.addEventListener("click",function(){
    for (i=0;i<squares.length;i++) {
        turn = 1
        squares[i].textContent = ""
        endgame = false
        result.textContent = ""
    }
})


for (i=0;i<squares.length;i++) {
    squares[i].addEventListener("click",function(e){
        if (e.target.textContent == "") {
            if (endgame == false){
                if (turn == 1) {
                    e.target.textContent = "x"
                    turn = 0
                    if (checkWin("x")) {
                        result.textContent = "You WIN"
                        endgame = true
                        turn = 1
                    }
                    if (endgame == false) {
                        if (checkSpace() == false) {    
                            endgame = true
                            result.textContent = "Draw!"
                            turn = 1
                        }
                    }
                }
                
                if (turn == 0) {
                    botMove()
                    turn = 1
                    if (checkWin("o")) {
                    result.textContent = "You LOSE"
                    endgame = true
                    }
                }    
            }   
        }       
    })
}    

