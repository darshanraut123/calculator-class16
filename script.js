let txtArea = document.querySelector("[name='caltxt']");
let topBtns = document.querySelectorAll(".calBtn:not(.smallBtn )");
let one = document.querySelector(".calBtn[name='1']");
let two = document.querySelector(".calBtn[name='2']");
let three = document.querySelector(".calBtn[name='3']");
let four = document.querySelector(".calBtn[name='4']");
let five = document.querySelector(".calBtn[name='5']");
let six = document.querySelector(".calBtn[name='6']");
let seven = document.querySelector(".calBtn[name='7']");
let eight = document.querySelector(".calBtn[name='8']");
let nine = document.querySelector(".calBtn[name='9']");
let zero = document.querySelector(".calBtn[name='0']");
let dot = document.querySelector(".calBtn[name='dot']");
let mul = document.querySelector(".calBtn[name='mul']");
let div = document.querySelector(".calBtn[name='div']");
let plus = document.querySelector(".calBtn[name='plus']");
let minus = document.querySelector(".calBtn[name='minus']");
let sqrt = document.querySelector(".calBtn[name='sqrt']");
let inverse = document.querySelector(".calBtn[name='inverse']");
let sq = document.querySelector(".calBtn[name='sq']");
let equals = document.querySelector(".calBtn[name='equals']");
let ms = document.querySelector(".calBtn[name='ms']");

topBtns[0].addEventListener("click", function () {
    let chars = Array.from(txtArea.value);
    chars.pop();
    txtArea.value = chars.join('');
});

topBtns[1].addEventListener("click", function () {
    txtArea.value="Cleared console...";
    setTimeout(()=>{txtArea.value='';},500);
});

topBtns[2].addEventListener("click", function () {
    localStorage.clear();
    txtArea.value="Cleared cache...";
    setTimeout(()=>{txtArea.value='';},500);
});

one.addEventListener("click", function () {
    txtArea.value = txtArea.value.concat('1');
});

two.addEventListener("click", function () {
    txtArea.value = txtArea.value.concat('2');
});

three.addEventListener("click", function () {
    txtArea.value = txtArea.value.concat('3');
});

four.addEventListener("click", function () {
    txtArea.value = txtArea.value.concat('4');
});

five.addEventListener("click", function () {
    txtArea.value = txtArea.value.concat('5');
});

six.addEventListener("click", function () {
    txtArea.value = txtArea.value.concat('6');
});

seven.addEventListener("click", function () {
    txtArea.value = txtArea.value.concat('7');
});

eight.addEventListener("click", function () {
    txtArea.value = txtArea.value.concat('8');
});

nine.addEventListener("click", function () {
    txtArea.value = txtArea.value.concat('9');
});
zero.addEventListener("click", function () {
    txtArea.value = txtArea.value.concat('0');
});

dot.addEventListener("click", function () {
    let subArr = txtArea.value.split(/[+*\-]/);
    let res = subArr.filter(sub => sub.indexOf('.') != sub.lastIndexOf('.'));
    if (res.length != 0) { alert("Incorrect Expression"); return; }
    let lastChar = subArr[subArr.length - 1];
    if (lastChar == undefined || lastChar.includes('+') || lastChar.includes('-') || lastChar.includes('/') || lastChar.includes('*') || lastChar.includes('.')) return;
    txtArea.value = txtArea.value.concat('.');
});

plus.addEventListener("click", function () {
    let arr = Array.from(txtArea.value);
    let lastChar = arr[arr.length - 1];
    if (lastChar == undefined || lastChar.includes('+') || lastChar.includes('-') || lastChar.includes('/') || lastChar.includes('*')) return;
    txtArea.value = txtArea.value.concat('+');
});

minus.addEventListener("click", function () {
    let arr = Array.from(txtArea.value);
    let lastChar = arr[arr.length - 1];
    if (lastChar == undefined || lastChar.includes('+') || lastChar.includes('-') || lastChar.includes('/') || lastChar.includes('*')) return;
    txtArea.value = txtArea.value.concat('-');
});

mul.addEventListener("click", function () {
    let arr = Array.from(txtArea.value);
    let lastChar = arr[arr.length - 1];
    if (lastChar == undefined || lastChar.includes('+') || lastChar.includes('-') || lastChar.includes('/') || lastChar.includes('*')) return;
    txtArea.value = txtArea.value.concat('*');
});

div.addEventListener("click", function () {
    let arr = Array.from(txtArea.value);
    let lastChar = arr[arr.length - 1];
    if (lastChar == undefined || lastChar.includes('+') || lastChar.includes('-') || lastChar.includes('/') || lastChar.includes('*')) return;
    txtArea.value = txtArea.value.concat('/');
});

equals.addEventListener("click", function () {
    let actVal = txtArea.value;
    if (actVal == "") return
    else {
        try {
            txtArea.value = eval(actVal);
        }
        catch (e) {
            alert(e.message);
        }
    }
});

sqrt.addEventListener("click", function () {
    equals.click();
    let actVal = txtArea.value;
    if (actVal == "") return
    else
        txtArea.value = Math.sqrt(actVal);
});

sq.addEventListener("click", function () {
    equals.click();
    let actVal = txtArea.value;
    if (actVal == "") return
    else
        txtArea.value = Math.pow(actVal, 2);
});


inverse.addEventListener("click", function () {
    equals.click();
    let actVal = txtArea.value;
    if (actVal == "") return
    else
        txtArea.value = 1 / actVal;
});

let arr = [];
function storeData() {
    if (txtArea.value == '') return;
    else if (isNaN(txtArea.value)) {
        let data = txtArea.value;
        txtArea.value="Invalid...";
        setTimeout(()=>{txtArea.value=data;},300);
    }
    else if (ifData()!=null) {
        arr = ifData();
        arr.push(txtArea.value);
        localStorage.setItem("key", arr)
        txtArea.value="Added...";
        setTimeout(()=>{txtArea.value='';},300);
    }
    else {
        arr.push(txtArea.value);
        localStorage.setItem("key", arr);
        txtArea.value="Added...";
        setTimeout(()=>{txtArea.value='';},300);
    }
}

function readData() {
    let dataPos = ifData();
    if(dataPos==null){
        txtArea.value="Empty...";
        setTimeout(()=>{txtArea.value='';},300);
    }
    else{
        txtArea.value=dataPos.pop();
        localStorage.setItem("key", dataPos);
    }
}
function additionData() {
    let dataPos = ifData();
    if(isNaN(txtArea.value)) return;
    else if(dataPos==null){
        arr = [];
        arr.push(txtArea.value);
        localStorage.setItem('key',arr);
        txtArea.value="Done...";
        setTimeout(()=>{txtArea.value='';},300);
    }
    else{
        let pos = dataPos.length-1;
        dataPos[pos] = (+dataPos[pos] + +txtArea.value);
        localStorage.setItem('key',dataPos);
        txtArea.value="Done...";
        setTimeout(()=>{txtArea.value='';},300);
    }
}
function substractData() {
    let dataPos = ifData();
    if(isNaN(txtArea.value)) return;
    else if(dataPos==null){
        txtArea.value="Empty...";
        setTimeout(()=>{txtArea.value='';},300);
    }
    else{
        let pos = dataPos.length-1;
        dataPos[pos] = (+dataPos[pos] - +txtArea.value);
        localStorage.setItem('key',dataPos);
        txtArea.value="Done...";
        setTimeout(()=>{txtArea.value='';},300);
    }
}
function clearData() {
    localStorage.clear();
    txtArea.value="Erased..."
    setTimeout(()=>{txtArea.value="";},300)
}

function ifData(){
    if(localStorage.getItem('key')==null || localStorage.getItem('key')=='') return null;
    else return localStorage.getItem('key').split(',');
}