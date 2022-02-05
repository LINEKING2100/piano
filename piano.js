start = 0
random = 0

function c(a, b) {
    cc = new Audio(b+'.wav')
    cc.play();

    if (start == 0) {
        if (a == 'e') {
            document.getElementById("re").innerHTML = '<input type="button" value="🔊" onclick="replay()" id="aas">'
            document.getElementById("text").innerHTML = "잘했어요!"
            start = 1
            setTimeout(function() {
                document.getElementById("text").innerHTML = "들려드리는 음을 듣고 알맞는 건반을 누르세요!"
            }, 700);
            setTimeout(function() {
                test()
            }, 1000);
        }
    }
    else {
        if (b == random) {
            document.getElementById("text").innerHTML = "정답!"
            setTimeout(function() {
                document.getElementById("text").innerHTML = "들려드리는 음을 듣고 알맞는 건반을 누르세요!"
                test()
            }, 700);
        }
        else {
            document.getElementById("text").innerHTML = "❌"
            setTimeout(function() {
                document.getElementById("text").innerHTML = "들려드리는 음을 듣고 알맞는 건반을 누르세요!"
            }, 700);
        }
    }
}

function cs(a, b) {
    cc = new Audio(b+'.wav')
    cc.play();

    if (start == 1) {
        if (b == random) {
            document.getElementById("text").innerHTML = "정답!"
            setTimeout(function() {
                document.getElementById("text").innerHTML = "들려드리는 음을 듣고 알맞는 건반을 누르세요!"
                test()
            }, 700);
        }
        else {
            document.getElementById("text").innerHTML = "❌"
            setTimeout(function() {
                document.getElementById("text").innerHTML = "들려드리는 음을 듣고 알맞는 건반을 누르세요!"
            }, 700);
        }
    }
}

function test() {
    random = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    ca = new Audio(random+'.wav')
    ca.play();
}

function replay() {
    ca = new Audio(random+'.wav')
    ca.play()
    document.getElementById("text").innerHTML = "재생중.."
    setTimeout(function() {
        document.getElementById("text").innerHTML = "들려드리는 음을 듣고 알맞는 건반을 누르세요!"
    }, 4000);
}