start = 0
random = 0

function c(a, b) {
    cc = new Audio(b+'.wav')
    cc.play();

    if (start == 0) {
        if (a == 'e') {
            document.getElementById("re").innerHTML = '<input type="button" value="π" onclick="replay()" id="aas">'
            document.getElementById("text").innerHTML = "μνμ΄μ!"
            start = 1
            setTimeout(function() {
                document.getElementById("text").innerHTML = "λ€λ €λλ¦¬λ μμ λ£κ³  μλ§λ κ±΄λ°μ λλ₯΄μΈμ!"
            }, 700);
            setTimeout(function() {
                test()
            }, 1000);
        }
    }
    else {
        if (b == random) {
            document.getElementById("text").innerHTML = "μ λ΅!"
            setTimeout(function() {
                document.getElementById("text").innerHTML = "λ€λ €λλ¦¬λ μμ λ£κ³  μλ§λ κ±΄λ°μ λλ₯΄μΈμ!"
                test()
            }, 700);
        }
        else {
            document.getElementById("text").innerHTML = "β"
            setTimeout(function() {
                document.getElementById("text").innerHTML = "λ€λ €λλ¦¬λ μμ λ£κ³  μλ§λ κ±΄λ°μ λλ₯΄μΈμ!"
            }, 700);
        }
    }
}

function cs(a, b) {
    cc = new Audio(b+'.wav')
    cc.play();

    if (start == 1) {
        if (b == random) {
            document.getElementById("text").innerHTML = "μ λ΅!"
            setTimeout(function() {
                document.getElementById("text").innerHTML = "λ€λ €λλ¦¬λ μμ λ£κ³  μλ§λ κ±΄λ°μ λλ₯΄μΈμ!"
                test()
            }, 700);
        }
        else {
            document.getElementById("text").innerHTML = "β"
            setTimeout(function() {
                document.getElementById("text").innerHTML = "λ€λ €λλ¦¬λ μμ λ£κ³  μλ§λ κ±΄λ°μ λλ₯΄μΈμ!"
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
    document.getElementById("text").innerHTML = "μ¬μμ€.."
    setTimeout(function() {
        document.getElementById("text").innerHTML = "λ€λ €λλ¦¬λ μμ λ£κ³  μλ§λ κ±΄λ°μ λλ₯΄μΈμ!"
    }, 4000);
}