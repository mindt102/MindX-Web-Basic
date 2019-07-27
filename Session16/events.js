function Clicked() {
    console.log("Clicked!")
}

function changeColor() {
    document.getElementById("h1").textContent = "Tadaaa. Chữ sau khi được thẩm mỹ!!"
    document.getElementById("h1").style.color = "blue";
}

function changeSquareColor() {
    if (document.getElementById("square1").style.fill == "blue") {
        document.getElementById("square1").style.fill = "pink"
    }
    else {
        document.getElementById("square1").style.fill = "blue"
    }
}

function hideBox() {
    // if (document.getElementById("square2").style.display == "none") {
    //     document.getElementById("square2").style.display = "block"    
    // }
    // else {
    //     document.getElementById("square2").style.display = "none"
    // }
    var box = document.getElementById("box2").style
    // box.parentNode.removeChild(box)
    
    if (box.height == "0px") {
        box.height = "150"
    }
    else { box.height = "0" }
}