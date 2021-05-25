function changeTab(evt, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}
/* Home body JS */
var i = 0;
var flag = true;
var interval = setInterval(TypeMessage, 100);
var msg;
function TypeMessage() {
    if (flag) {
        msg = "Kindly choose a game to start..."
        document.getElementById("homeTitle").textContent += msg[i];
        i++
        if (i == msg.length)
            flag = false;
    }
    else {
        i--
        msg = msg.slice(0, -1)
        document.getElementById("homeTitle").textContent = msg;
        if (i == 1)
            flag = true;
    }
}

function showStage(x) {
    var stage = x.getAttribute('data-stage');
    console.log(stage)
    switch (stage) {
        case "1":
            window.open('body game/1st stage.html', '_self', 'width=1280,height=600')
            break;
        case "2":
            window.open('body game/2nd stage.html', '_self', 'width=1280,height=600')
            break;
        case "3":
            window.open('body game/3rd stage.html', '_self', 'width=1280,height=600')
            break;
        default:
            break;
    }
}
function loadScript() {
    let _msg;
    let _i = 0;
    let _flag = true;
    document.getElementById("footerText").textContent = ''
    let _interval = setInterval(function () {
        if (_flag) {
            _msg = `Welcome to Organs game, it consists from 3 stages, Kindly choose a stage to and a window will open to play it...`
            document.getElementById("footerText").textContent += _msg[_i];
            _i++
            if (_i == _msg.length)
                _flag = false;
        }
        else {
            clearInterval(_interval)
        }
    }, 100);
}