// Rolling 6 numbers

var stat1 = document.getElementById("stat1");
stat1.innerHTML = roll(3, 6);

var stat2 = document.getElementById("stat2");
stat2.innerHTML = roll(3, 6);

var stat3 = document.getElementById("stat3");
stat3.innerHTML = roll(3, 6);

var stat4 = document.getElementById("stat4");
stat4.innerHTML = roll(3, 6);

var stat5 = document.getElementById("stat5");
stat5.innerHTML = roll(3, 6);

var stat6 = document.getElementById("stat6");
stat6.innerHTML = roll(3, 6);

// Setting stat value locations

var statStr = document.getElementById("statStr");
statStr.addEventListener('dragenter', dragEnter);
statStr.addEventListener('drop', dragDrop);
statStr.addEventListener('dragover', dragOver);

var statDex = document.getElementById("statDex");
statDex.addEventListener('dragenter', dragEnter);
statDex.addEventListener('drop', dragDrop);
statDex.addEventListener('dragover', dragOver);

function roll(number, sides) {
  var total = 0;
  for (var i = 0; i < number; i++) {
    total += Math.floor(Math.random() * sides) + 1;
  }
  return total;
}

function dragStart(ev) {
  ev.dataTransfer.effectAllowed='move';
  ev.dataTransfer.setData("text/html", this.innerHTML);
  ev.dataTransfer.setDragImage(ev.target,100,100);

  return true;
}

function dragEnter(ev) {
  ev.preventDefault();
          
  return true;
}

function dragOver(ev) {
  ev.preventDefault();
}

function dragDrop(ev) {
  ev.target.appendChild(stat1);
  ev.stopPropagation();

  return false;
}

