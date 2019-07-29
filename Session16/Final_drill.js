function Del_btn_func(e) {
    var div_song = e.target.parentNode
    // div_song.textContent = ""        
    div_song.parentNode.removeChild(div_song.nextElementSibling)
    div_song.parentNode.removeChild(div_song)
}

function Edit_btn_func(e) {
    console.log("Song id:",e.target.parentNode.getAttribute("song_id"))
}

function More_btn_func(e) {
    var div = e.target.parentNode
    console.log("Song:",div.getElementsByClassName("title")[0].textContent)
    console.log("Artist:",div.getElementsByClassName("artist")[0].textContent)
    console.log("Song id:",div.getAttribute("song_id"))
}

function Add_an_action(btn,func) {
    btn.addEventListener("click",function(e) {func(e)})
}

function Add_actions_to_btns(btns,func) {
    for(var i=0;i<btns.length;i++) {
        Add_an_action(btns[i],func)
    }    
}

var del_btns = document.getElementsByClassName("del_btn")
var edit_btns = document.getElementsByClassName("edit_btn")
var more_btns = document.getElementsByClassName("more_btn")
var song_container = document.getElementById("song_container")
   
Add_actions_to_btns(del_btns,Del_btn_func)
Add_actions_to_btns(edit_btns,Edit_btn_func)
Add_actions_to_btns(more_btns,More_btn_func)


var div = song_container.firstElementChild

var add_btn = document.getElementById("add_btn")
add_btn.addEventListener("click",function(e) {
    var new_div = div.cloneNode("true")
    new_div.setAttribute("song_id","default")
    new_div.getElementsByClassName("title")[0].textContent = "Default"
    new_div.getElementsByClassName("artist")[0].textContent = "Default"
    var new_btns = new_div.getElementsByTagName("button")
    Add_an_action(new_btns[0],Del_btn_func)
    Add_an_action(new_btns[1],Edit_btn_func)
    Add_an_action(new_btns[2],More_btn_func)
    song_container.appendChild(new_div)
    song_container.appendChild(document.createElement("hr"))

    // var new_div = document.createElement("div")
    // var new_hr  = document.createElement("hr")
    // var new_title = document.createElement("h4")
    // var new_artist = document.createElement("h5")
    // var new_del_btn = document.createElement("button")
    // var new_edit_btn = document.createElement("button")
    // var new_more_btn = document.createElement("button")

    // new_div.setAttribute("class","song")
    // new_div.setAttribute("song_id","default")
    // new_title.setAttribute("class","title")
    // new_artist.setAttribute("class","artist")
    // new_del_btn.setAttribute("class","del_btn")
    // new_edit_btn.setAttribute("class","edit_btn")
    // new_more_btn.setAttribute("class","more_btn")

    // new_title.textContent = "Default"
    // new_artist.textContent = "Default"
    // new_del_btn.textContent = "Delete"
    // new_edit_btn.textContent = "Edit"
    // new_more_btn.textContent = "More"

    // new_div.appendChild(new_title)
    // new_div.appendChild(new_artist)
    // new_div.appendChild(new_del_btn)
    // new_div.append(" ")
    // new_div.appendChild(new_edit_btn)
    // new_div.append(" ")
    // new_div.appendChild(new_more_btn)

    // Add_an_action(new_del_btn,Del_btn_func)
    // Add_an_action(new_edit_btn,Edit_btn_func)
    // Add_an_action(new_more_btn,More_btn_func)

    // song_container.appendChild(new_div)
    // song_container.appendChild(new_hr)

})


