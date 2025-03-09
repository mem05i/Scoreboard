const scoreHomeEl = document.getElementById("score-home-el")
const scoreGuestEl = document.getElementById("score-guest-el")

let scoreHome = 0
let scoreGuest = 0

function homeAdd1() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
}

function homeAdd2() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}

function homeAdd3() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

function guestAdd1() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}

function guestAdd2() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}

function guestAdd3() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
}

function reset() {
    scoreHome = 0
    scoreHomeEl.textContent = scoreHome
    scoreGuest = 0
    scoreGuestEl.textContent = scoreGuest
}