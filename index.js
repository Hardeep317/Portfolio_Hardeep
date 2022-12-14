function day() {
    document.body.style.background = "#fff"
    document.body.style.color = "#1b1b1b"
    document.getElementById("day").style.display = "none"
    document.getElementById("night").style.display = "block"
    document.querySelector(".sidebardiv").style.background = "#fff"
    document.querySelector(".nav1").style.background = "#e1e1e1"
    var a = document.querySelectorAll(".sidebarlinks")
    var b = document.querySelectorAll(".navrighta")
    var c = document.querySelectorAll(".i")
    for(var i = 0; i < a.length; i++) {
        a[i].style.color = "#000"
        b[i].style.color = "#000"
        if(c[i]) {
            c[i].style.color = "#000"
        }
    }
}
function night() {
    document.body.style.background = "#1b1b1b"
    document.body.style.color = "#fff"
    document.getElementById("day").style.display = "block"
    document.getElementById("night").style.display = "none"
    document.querySelector(".sidebardiv").style.background = "#000"
    document.querySelector(".nav1").style.background = "#10101a"
    var a = document.querySelectorAll(".sidebarlinks")
    var b = document.querySelectorAll(".navrighta")
    var c = document.querySelectorAll(".i")
    for(var i = 0; i < a.length; i++) {
        a[i].style.color = "#fff"
        b[i].style.color = "#fff"
        if(c[i]) {
            c[i].style.color = "#e1e1e1"
        }
    }
}
function side() {
    var sidebar = document.querySelector(".sidebardiv")
    if(sidebar.style.left == "0px") {
        sidebar.style.left = "-100%"
    } else {
        sidebar.style.left = "0px"
    }
}