
let myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


const newElement = () => {
    let list = document.createElement("li");
    let value = document.getElementById("myInput").value;
    let node = document.createTextNode(value);

    list.appendChild(node);

    if (value === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(list);
    }

    document.getElementById("myInput").value = "";  

    let span = document.createElement("SPAN");

    let txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);

    list.appendChild(span);  

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}