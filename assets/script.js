function rollStat(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function dragStart(ev) {
  ev.dataTransfer.effectAllowed='move';
  ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
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
  var data = ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(data));
  ev.stopPropagation();

  return false;
}

document.getElementById("stat1").innerHTML = rollStat(3, 18);
document.getElementById("stat2").innerHTML = rollStat(3, 18);
document.getElementById("stat3").innerHTML = rollStat(3, 18);
document.getElementById("stat4").innerHTML = rollStat(3, 18);
document.getElementById("stat5").innerHTML = rollStat(3, 18);
document.getElementById("stat6").innerHTML = rollStat(3, 18);
