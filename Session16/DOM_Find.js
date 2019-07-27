var song_container = document.getElementById("song_container")
console.log(song_container)

var delete_btns = document.getElementsByClassName("delete")

for (var i = 0; i < delete_btns.length;i++) {
    var delete_btn = delete_btns[i]
    delete_btn.addEventListener("click",function(e) {
        e.target.parentNode.textContent = ""
    })
}