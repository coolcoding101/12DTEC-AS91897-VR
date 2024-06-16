const scene = document.querySelector('#scene');
const seat = document.querySelector('#seatOne');

window.addEventListener('DOMContentLoaded', () => {
    for(i = 1; i < 25; i++){
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
    seatEight.setAttribute('position', '-3.257 0.064 2.437');
    
    var seatNine = document.getElementById('seat9');
    seatNine.setAttribute('position', '-3.257 0.064 1.437');
    seatNine.setAttribute('rotation', '0 0 0');
    
    var seatTen = document.getElementById('seat10');
    seatTen.setAttribute('position', '-3.257 0.064 0.437');
    seatTen.setAttribute('rotation', '0 0 0');
    
    var seatEleven = document.getElementById('seat11');
    seatEleven.setAttribute('position', '-3.317 0.064 0.958');
    seatEleven.setAttribute('rotation', '0 -30 0');

    var seatTwelve = document.getElementById('seat12');
    seatTwelve.setAttribute('position', '-3.640 0.064 1.375');
    seatTwelve.setAttribute('rotation', '0 -60 0');

    var seatThirteen = document.getElementById('seat13');
    seatThirteen.setAttribute('position', '-3.850 0.064 1.497');
    seatThirteen.setAttribute('rotation', '0 -80 0');

    var seatFourteen = document.getElementById('seat14');
    seatFourteen.setAttribute('position', '-3.797 0.064 1.513');
    seatFourteen.setAttribute('rotation', '0 -90 0');

    

    var seatFifteen = document.getElementById('seat15');
    seatFifteen.setAttribute('position', '-2.297 0.064 1.513');
    seatFifteen.setAttribute('rotation', '0 -90 0');

    var seatSixteen = document.getElementById('seat16');
    seatSixteen.setAttribute('position', '-2.240 0.064 1.542');
    seatSixteen.setAttribute('rotation', '0 -100 0');

    var seatSeventeen = document.getElementById('seat17');
    seatSeventeen.setAttribute('position', '-2.490 0.064 1.503');
    seatSeventeen.setAttribute('rotation', '0 -120 0');

    var seatEighteen = document.getElementById('seat18');
    seatEighteen.setAttribute('position', '-2.916 0.064 1.193');
    seatEighteen.setAttribute('rotation', '0 -150 0');

    var seatNineteen = document.getElementById('seat19');
    seatNineteen.setAttribute('position', '-3.128 0.064 0.718');
    seatNineteen.setAttribute('rotation', '0 -180 0');



    var seatTwenty = document.getElementById('seat20');
    seatTwenty.setAttribute('position', '-3.128 0.064 1.718');
    seatTwenty.setAttribute('rotation', '0 -180 0');

    var seatTwentyOne = document.getElementById('seat21');
    seatTwentyOne.setAttribute('position', '-3.128 0.064 2.718');
    seatTwentyOne.setAttribute('rotation', '0 -180 0');

    var seatTwentyTwo = document.getElementById('seat22');
    seatTwentyTwo.setAttribute('position', '-3.128 0.064 3.028');
    seatTwentyTwo.setAttribute('rotation', '0 -180 0');

    var seatTwentyThree = document.getElementById('seat23');
    seatTwentyThree.setAttribute('position', '-3.128 0.064 4.028');
    seatTwentyThree.setAttribute('rotation', '0 -180 0');
});