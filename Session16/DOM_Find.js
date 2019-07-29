var song_container = document.getElementById("song_container")
console.log(song_container)

var songs = song_container.getElementsByClassName("song")
for (var i=0;i<songs.length;i++) {
    console.log(songs[i])
    console.log(songs[i].getElementsByClassName("title")[0].textContent)
    console.log(songs[i].getElementsByClassName("artist")[0].textContent)
}

var delete_btns = document.getElementsByClassName("delete")

for (var i = 0; i < delete_btns.length;i++) {
    var delete_btn = delete_btns[i]
    delete_btn.addEventListener("click",function(e) {
        e.target.parentNode.textContent = ""
    })
}
