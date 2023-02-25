//Letter Keys

//'W' Key
const wKey = document.getElementById('Wbtn');
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 87) {
        document.getElementById('audio1').play();
        wKey.style.borderColor = 'green';
        wKey.style.boxShadow = '0 0 10px #ccc';
    } 
});
document.addEventListener('keyup', function(e) {
    wKey.style.borderColor = null;
    wKey.style.boxShadow = null;
});

//'A' Key
const aKey = document.getElementById('Abtn');
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 65) {
        document.getElementById('audio2').play();
        aKey.style.borderColor = 'green';
        aKey.style.boxShadow = '0 0 10px #ccc';
    } 
});
document.addEventListener('keyup', function(e) {
    aKey.style.borderColor = null;
    aKey.style.boxShadow = null;
});

//'D' Key
const dKey = document.getElementById('Dbtn');
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 68) {
        document.getElementById('audio3').play();
        dKey.style.borderColor = 'green';
        dKey.style.boxShadow = '0 0 10px #ccc';
    } 
});
document.addEventListener('keyup', function(e) {
    dKey.style.borderColor = null;
    dKey.style.boxShadow = null;
});

//'S' Key
const sKey = document.getElementById('Sbtn');
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 83) {
        document.getElementById('audio4').play();
        sKey.style.borderColor = 'green';
        sKey.style.boxShadow = '0 0 10px #ccc';
    } 
});
document.addEventListener('keyup', function(e) {
    if(e.keyCode == 83) {
        sKey.style.borderColor = null;
        sKey.style.boxShadow = null;
    }
});

//'F' Key
const fKey = document.getElementById('Fbtn');
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 70) {
        document.getElementById('audio5').play();
        fKey.style.borderColor = 'green';
        fKey.style.boxShadow = '0 0 10px #ccc';
    } 
});
document.addEventListener('keyup', function(e) {
    fKey.style.borderColor = null;
    fKey.style.boxShadow = null;
});

//'E' Key
const eKey = document.getElementById('Ebtn');
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 69) {
        document.getElementById('audio6').play();
        eKey.style.borderColor = 'green';
        eKey.style.boxShadow = '0 0 10px #ccc';
    } 
});
document.addEventListener('keyup', function(e) {
    eKey.style.borderColor = null;
    eKey.style.boxShadow = null;
});

//'R' Key
const rKey = document.getElementById('Rbtn');
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 82) {
        document.getElementById('audio8').play();
        rKey.style.borderColor = 'green';
        rKey.style.boxShadow = '0 0 10px #ccc';
    } 
});
document.addEventListener('keyup', function(e) {
    rKey.style.borderColor = null;
    rKey.style.boxShadow = null;
})

//'Q' Key
const qKey = document.getElementById('Qbtn');
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 81) {
        document.getElementById('audio7').play();
        qKey.style.borderColor = 'green';
        qKey.style.boxShadow = '0 0 10px #ccc';
    } 
});
document.addEventListener('keyup', function(e) {
    qKey.style.borderColor = null;
    qKey.style.boxShadow = null;
});

//Number Keys

//Number '1'
const oneKey = document.getElementById('1btn');
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 49) {
        document.getElementById('audio9').play();
        oneKey.style.borderColor = 'green';
        oneKey.style.boxShadow = '0 0 10px #ccc';
    } 
});
document.addEventListener('keyup', function(e) {
    oneKey.style.borderColor = null;
    oneKey.style.boxShadow = null;
});

//Number '2'
const twoKey = document.getElementById('2btn');
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 50) {
        document.getElementById('audio10').play();
        twoKey.style.borderColor = 'green';
        twoKey.style.boxShadow = '0 0 10px #ccc';
    } 
});
document.addEventListener('keyup', function(e) {
    twoKey.style.borderColor = null;
    twoKey.style.boxShadow = null;
});

//Number '3'
const threeKey = document.getElementById('3btn');
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 51) {
        document.getElementById('audio11').play();
        threeKey.style.borderColor = 'green';
        threeKey.style.boxShadow = '0 0 10px #ccc';
    } 
});
document.addEventListener('keyup', function(e) {
    threeKey.style.borderColor = null;
    threeKey.style.boxShadow = null;
});

//Number '4'
const fourKey = document.getElementById('4btn');
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 52) {
        document.getElementById('audio12').play();
        fourKey.style.borderColor = 'green';
        fourKey.style.boxShadow = '0 0 10px #ccc';
    } 
});
document.addEventListener('keyup', function(e) {
    fourKey.style.borderColor = null;
    fourKey.style.boxShadow = null;
});

//Number '5'
const fiveKey = document.getElementById('5btn');
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 53) {
        document.getElementById('audio13').play();
        fiveKey.style.borderColor = 'green';
        fiveKey.style.boxShadow = '0 0 10px #ccc';
    } 
});
document.addEventListener('keyup', function(e) {
    fiveKey.style.borderColor = null;
    fiveKey.style.boxShadow = null;
});
