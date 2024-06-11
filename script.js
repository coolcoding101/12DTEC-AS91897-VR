const scene = document.querySelector('#scene');
const seat = document.querySelector('#seatOne');

window.addEventListener('DOMContentLoaded', () => {
    for(i = 1; i < 8; i++){
        const newSeat = seat.cloneNode(true);
        newSeat.setAttribute('id', 'seat' + (i + 1));
        
        scene.appendChild(newSeat);
        console.log(newSeat);
    }

    var seatTwo = document.getElementById('seat2');
    seatTwo.setAttribute('position', '-3.257 0.064 6.347');
});