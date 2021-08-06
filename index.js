console.log('check check')
/*
SOH CAH TOA
*/

/* DOM Elements */
const oppEl = document.getElementById('opp')
const personHeadEl = document.getElementById('person-head')
const targetEl = document.getElementById('other-person-head')
const mouthEl = document.querySelector('.mouth')

/* Values aligned with style properties */
let circleDisplacement = 200
let opp = -200
let oppFull = opp + circleDisplacement
let adj = 400
let mouthWidth= 40
let mouthHeight= 20
//let theta = Math.atan(oppFull / adj) * (180/Math.PI)
let theta = 0 // initial

/* Functions applying style changes on click */
function mouthResize(angle) {
  // will never get to 90deg, 45 deg for more drama
  let scale = angle/45 + 1
  mouthWidth = 40 * scale
  mouthHeight = 20 * scale
  mouthEl.style.width= mouthWidth + 'px'
  console.log('mouthWidth', mouthWidth)
  mouthEl.style.height= mouthHeight + 'px'
  console.log('mouthHeight', mouthHeight)
}

function makeOppHeightHigher() {
  opp += 10
  oppFull = opp + circleDisplacement
  oppEl.style["margin-bottom"] = opp + 'px'
  theta = Math.atan(oppFull / adj) * (180/Math.PI)
  // adjust to new angle
  if (theta >= 0) {
  personHeadEl.style.transform = `rotate(-${theta}deg)`  
  } else {
    fixedRotation = -theta
    personHeadEl.style.transform = `rotate(${fixedRotation}deg)` 
  }  
  console.log(theta)
  mouthResize(theta)
}

function makeOppHeightLower() {
  opp -= 10
  oppFull = opp + circleDisplacement
  oppEl.style["margin-bottom"] = opp + 'px'
  theta = Math.atan(oppFull / adj) * (180/Math.PI)
  // adjust to new angle
  if (theta >= 0) {
  personHeadEl.style.transform = `rotate(-${theta}deg)`  
  } else {
    fixedRotation = -theta
    personHeadEl.style.transform = `rotate(${fixedRotation}deg)` 
  }
  console.log(theta)
  mouthResize(theta)
}

/* Event Listeners Added */
targetEl.addEventListener('click', makeOppHeightHigher)
personHeadEl.addEventListener('click', makeOppHeightLower)

