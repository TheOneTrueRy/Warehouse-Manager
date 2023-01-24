let heavy = document.getElementById("heavy")
let priority = document.getElementById("priority")
let fragile = document.getElementById("fragile")




function heavyClick(){
  heavy.classList.add("active")
  priority.classList.remove("active")
  fragile.classList.remove("active")
}

function priorityClick(){
  heavy.classList.remove("active")
  priority.classList.add("active")
  fragile.classList.remove("active")
}

function fragileClick(){
  heavy.classList.remove("active")
  priority.classList.remove("active")
  fragile.classList.add("active")
}