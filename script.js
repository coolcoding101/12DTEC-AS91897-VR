const scene = document.querySelector('#scene');
const seat = document.querySelector('#seatOne');

window.addEventListener('DOMContentLoaded', () => {
    for(i = 1; i < 10; i++){
        const newSeat = seat.cloneNode(true);
        newSeat.setAttribute('id', 'seat' + (i + 1));
        
        scene.appendChild(newSeat);
        console.log(newSeat);
    }

    var seatTwo = document.getElementById('seat2');
    seatTwo.setAttribute('position', '-3.257 0.064 6.347');

    var seatThree = document.getElementById('seat3');
    seatThree.setAttribute('position', '-3.257 0.064 5.347');
    var seatFour = document.getElementById('seat4');
    seatFour.setAttribute('position', '-3.257 0.064 5.037');

    var seatFive = document.getElementById('seat5');
    seatFive.setAttribute( 'position', '-3.257 0.064 4.047');
    var seatSix = document.getElementById('seat6');
    seatSix.setAttribute('position', '-3.257 0.064 3.737');

    var seatSeven = document.getElementById('seat7');
    seatSeven.setAttribute('position', '-3.257 0.064 2.747');

    var seatEight = document.getElementById('seat8');
    seatEight.setAttribute('position', '-3.257 0.064 1.747');
    var seatNine = document.getElementById('seat9');
    seatNine.setAttribute('position', '-3.240 0.064 1.905');
    seatNine.setAttribute('rotation', '0 -18 0');
});