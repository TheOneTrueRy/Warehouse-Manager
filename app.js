const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

let heavyPackages = packages.filter(package => package.weight > 3)
let priorityPackages = packages.filter(package => package.priorityLevel == 'express' || 'free')
let fragilePackages = packages.filter(package => package.isFragile == true)
let name1 = document.getElementById("name1")
let name2 = document.getElementById("name2")
let name3 = document.getElementById("name3")
let name4 = document.getElementById("name4")
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let num3 = document.getElementById("num3")
let num4 = document.getElementById("num4")


let heavy = document.getElementById("heavy")
let priority = document.getElementById("priority")
let fragile = document.getElementById("fragile")


function heavyClick(){
  heavy.classList.add("active")
  priority.classList.remove("active")
  fragile.classList.remove("active")
  drawPackages(heavyPackages)
}

function priorityClick(){
  heavy.classList.remove("active")
  priority.classList.add("active")
  fragile.classList.remove("active")
  drawPackages(priorityPackages)
}

function fragileClick(){
  heavy.classList.remove("active")
  priority.classList.remove("active")
  fragile.classList.add("active")
  drawPackages(fragilePackages)
}

function drawPackages(array){
  name1.innerText = array[0].to;
  name2.innerText = array[1].to;
  name3.innerText = array[2].to;
  name4.innerText = array[3].to;
  num1.innerText = array[0].trackingNumber;
  num2.innerText = array[1].trackingNumber;
  num3.innerText = array[2].trackingNumber;
  num4.innerText = array[3].trackingNumber

}