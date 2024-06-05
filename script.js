const scene = document.querySelector('#scene');
const seat = document.querySelector('#seatOne');

window.addEventListener('DOMContentLoaded', () => {
    for(i = 1; i < 30; i++){
        const newSeat = seat.cloneNode(true);
        newSeat.setAttribute('id', 'seat' + (i + 1));
        scene.appendChild(newSeat);
        console.log(newSeat);
    }
});