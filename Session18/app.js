const ball_container = document.getElementById("ball_container")
const balls = ball_container.getElementsByClassName("ball")
var score = 0

function createColor() {
    var r = Math.floor(Math.random()*255)
    var g = Math.floor(Math.random()*255)
    var b = Math.floor(Math.random()*255)
    return `rgb(${r}, ${g}, ${b})`
}

function createRightBall() {
    var rightColorString = createColor()
    var rightColorIndex = Math.floor(Math.random()*3)
    document.getElementById("color_string").textContent = rightColorString
    balls[rightColorIndex].style.backgroundColor = rightColorString
    return rightColorIndex
}
    
function createWrongBalls () {
    for (i=0;i<balls.length;i++) {
        if (i!=rightColorIndex) {
            balls[i].style.backgroundColor = createColor()
        }
    }
}

function createGame() {
    document.getElementById("score").textContent = `SCORE: ${score}`
    rightColorIndex = createRightBall()
    console.log(rightColorIndex)
    createWrongBalls()
}



function setupEvent() {
    for (i=0;i<balls.length;i++) {
        balls[i].addEventListener("click",function(e){
            if (e.target.isSameNode(balls[rightColorIndex])) {
                score++
            }
            else {score = 0}
            createGame()
        })
}
}

createGame()
setupEvent()