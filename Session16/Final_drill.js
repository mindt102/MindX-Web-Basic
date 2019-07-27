var song_container = document.getElementById("song_container")
console.log(song_container)

var songs = song_container.getElementsByClassName("song")
for (var i=0;i<songs.length;i++) {
    console.log(songs[i])
    console.log(songs[i].getElementsByClassName("title")[0].textContent)
    console.log(songs[i].getElementsByClassName("artist")[0].textContent)
}

var del_btns = document.getElementsByClassName("del_btn")
for(var i=0;i<del_btns.length;i++) {
    var del_btn = del_btns[i]
    del_btn.addEventListener("click",function(e) {
        e.target.parentNode.textContent = ""        
    })
}

var edit_btns = document.getElementsByClassName("edit_btn")
for (var i=0;i<edit_btns.length;i++) {
    var edit_btn = edit_btns[i]
    edit_btn.addEventListener("click",function(e) {
        console.log("song id:",e.target.parentNode.getAttribute("song_id"))
    })
}

var more_btns = document.getElementsByClassName("more_btn")
for (var i=0;i<more_btns.length;i++) {
    var more_btn = more_btns[i]
    more_btn.addEventListener("click",function(e) {
        var div = e.target.parentNode
        // console.log(div)
        console.log("Song:",div.getElementsByClassName("title")[0].textContent)
        console.log("Artist:",div.getElementsByClassName("artist")[0].textContent)
        console.log("Song id:",div.getAttribute("song_id"))
    })
}