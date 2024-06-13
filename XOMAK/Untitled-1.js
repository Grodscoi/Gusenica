var clicks = 0; 
var col = 1;
var upd = 100;
var miner1 = 1000;
var miner2 = 2000;
var miner3 = 5000;
var miner4 = 10000;
var miner5 = 100000;
var doupd = upd - clicks;
var domin = miner1 - clicks;
var clicksPerMin = 0;

function startMining() {
    clicks += clicksPerMin;
    document.getElementById("clicks").innerHTML = clicks;
}
function countClicks() {
    if (col <= 1) {
        clicks += 1;
    } if( col > 1) {
        clicks += col;
    }
    document.getElementById("clicks").innerHTML = clicks;
};
function spendClick() {
    if (clicks < upd) {
        var message = document.getElementById("message");
        message.innerHTML = "ERROR: Not enough clicks!";
        message.style.display = "block"; 
        setTimeout(function() {
            message.style.display = "none"; 
        }, 2000);
    } else {
        clicks -= upd;
        col += 1;
        upd *= 2;
    }
    document.getElementById("clicks").innerHTML = clicks;
    alert("Remaining Clicks until Update: " + (upd - clicks));
}
function spendMin1() {
    if (clicks < miner1) {
        var message = document.getElementById("message");
        message.innerHTML = "ERROR: Not enough clicks!";
        message.style.display = "block"; 
        setTimeout(function() {
            message.style.display = "none"; 
        }, 2000);
    } else {
        var confirmation = confirm("Do you want to spend 1000 clicks on Min1?");
        if (confirmation) {
            clicks -= 1000;
            clicksPerMin += 100;
            setInterval(startMining, 60000);
        }
    }
    document.getElementById("clicks").innerHTML = clicks;
}
function spendMin2() {
    if (clicks < miner2) {
        var message = document.getElementById("message");
        message.innerHTML = "ERROR: Not enough clicks!";
        message.style.display = "block"; 
        setTimeout(function() {
            message.style.display = "none"; 
        }, 2000);
    } else {
        var confirmation = confirm("Do you want to spend 1000 clicks on Min2?");
        if (confirmation) {
            clicks -= 2000;
            clicksPerMin += 200;
            setInterval(startMining, 60000);
        }
    }
    document.getElementById("clicks").innerHTML = clicks;
}
function spendMin3() {
    if (clicks < miner3) {
        var message = document.getElementById("message");
        message.innerHTML = "ERROR: Not enough clicks!";
        message.style.display = "block"; 
        setTimeout(function() {
            message.style.display = "none"; 
        }, 2000);
    } else {
        var confirmation = confirm("Do you want to spend 1000 clicks on Min3?");
        if (confirmation) {
            clicks -= 5000;
            clicksPerMin += 500;
            setInterval(startMining, 60000);
        }
    }
    document.getElementById("clicks").innerHTML = clicks;
}
function spendMin4() {
    if (clicks < miner4) {
        var message = document.getElementById("message");
        message.innerHTML = "ERROR: Not enough clicks!";
        message.style.display = "block"; 
        setTimeout(function() {
            message.style.display = "none"; 
        }, 2000);
    } else {
        var confirmation = confirm("Do you want to spend 1000 clicks on Min4?");
        if (confirmation) {
            clicks -= 10000;
            clicksPerMin += 1000;
            setInterval(startMining, 60000);
        }
    }
    document.getElementById("clicks").innerHTML = clicks;
}
function spendMin5() {
    if (clicks < miner5) {
        var message = document.getElementById("message");
        message.innerHTML = "ERROR: Not enough clicks!";
        message.style.display = "block"; 
        setTimeout(function() {
            message.style.display = "none"; 
        }, 2000);
    } else {
        var confirmation = confirm("Do you want to spend 100000 clicks on Min5?");
        if (confirmation) {
            clicks -= 100000;
            clicksPerMin += 10000;
            setInterval(startMining, 60000);
        }
    }
    document.getElementById("clicks").innerHTML = clicks;
}
function spendMin6() {
    if (clicks < miner4) {
        var message = document.getElementById("message");
        message.innerHTML = "ERROR: Not enough clicks!";
        message.style.display = "block"; 
        setTimeout(function() {
            message.style.display = "none"; 
        }, 2000);
    } else {
        var confirmation = confirm("Do you want to spend 1000 clicks on Min6?");
        if (confirmation) {
            clicks -= 100000;
            col += Math.floor(Math.random() * 1000);
        }
    }
    document.getElementById("clicks").innerHTML = clicks;
}
function activParagh1() {
    if(clicks < miner1) {
        var Str1 = document.getElementById("Str1");
        Str1.innerHTML = "if you buy : 1 min = 100 clicks. Not enough clicks!";
        Str1.style.display = "block"; 
        setTimeout(function() {
            Str1.style.display = "none"; 
        }, 2000);
    } 
    document.getElementById("clicks").innerHTML = clicks;
}
function activParagh2() {
    if(clicks < miner2) {
        var Str2 = document.getElementById("Str2");
        Str2.innerHTML = "if you buy : 1 min = 200 clicks. Not enough clicks!";
        Str2.style.display = "block"; 
        setTimeout(function() {
            Str2.style.display = "none"; 
        }, 2000);
    } 
    document.getElementById("clicks").innerHTML = clicks;
}
function activParagh3() {
    if(clicks < miner2) {
        var Str3 = document.getElementById("Str3");
        Str3.innerHTML = "if you buy : 1 min = 500 clicks. Not enough clicks!";
        Str3.style.display = "block";
        setTimeout(function() {
            Str3.style.display = "none";
        }, 2000);
    } 
    document.getElementById("clicks").innerHTML = clicks;
}
function activParagh4() {
    if(clicks < miner2) {
        var Str4 = document.getElementById("Str4");
        Str4.innerHTML = "if you buy : 1 min = 1000 clicks. Not enough clicks!";
        Str4.style.display = "block";
        setTimeout(function() {
            Str4.style.display = "none";
        }, 2000);
    } 
    document.getElementById("clicks").innerHTML = clicks;
}
function activParagh5() {
    if(clicks < miner2) {
        var Str5 = document.getElementById("Str5");
        Str5.innerHTML = "if you buy : 1 min = 10000 clicks. Not enough clicks!";
        Str5.style.display = "block";
        setTimeout(function() {
            Str5.style.display = "none";
        }, 2000);
    } 
    document.getElementById("clicks").innerHTML = clicks;
}