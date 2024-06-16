const scene = document.querySelector('#scene');
const seat = document.querySelector('#seatOne');

window.addEventListener('DOMContentLoaded', () => {
    for(i = 1; i < 75; i++){
        const newSeat = seat.cloneNode(true);
        newSeat.setAttribute('id', 'seat' + (i + 1));
        
        scene.appendChild(newSeat);
        console.log(newSeat);
    }

    //opposition front bench
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

    //opposition curved front bench
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


    //govt curved front bench
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


    //govt front bench
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

    var seatTwentyFour = document.getElementById('seat24');
    seatTwentyFour.setAttribute('position', '-3.128 0.064 4.338');
    seatTwentyFour.setAttribute('rotation', '0 -180 0');

    var seatTwentyFive = document.getElementById('seat25');
    seatTwentyFive.setAttribute('position', '-3.128 0.064 5.338');
    seatTwentyFive.setAttribute('rotation', '0 -180 0');

    var seatTwentySix = document.getElementById('seat26');
    seatTwentySix.setAttribute('position', '-3.128 0.064 5.648');
    seatTwentySix.setAttribute('rotation', '0 -180 0');

    var seatTwentySeven = document.getElementById('seat27');
    seatTwentySeven.setAttribute('position', '-3.128 0.064 6.648');
    seatTwentySeven.setAttribute('rotation', '0 -180 0');

    var seatTwentyEight = document.getElementById('seat28');
    seatTwentyEight.setAttribute('position', '-3.128 0.064 6.958');
    seatTwentyEight.setAttribute('rotation', '0 -180 0');


    //govt 2nd front bench
    var seatTwentyNine = document.getElementById('seat29');
    seatTwentyNine.setAttribute('position', '-2.000 0.064 6.958');
    seatTwentyNine.setAttribute('rotation', '0 -180 0');

    var seatThirty = document.getElementById('seat30');
    seatThirty.setAttribute('position', '-2.000 0.064 6.648');
    seatThirty.setAttribute('rotation', '0 -180 0');

    var seatThirtyOne = document.getElementById('seat31');
    seatThirtyOne.setAttribute('position', '-2.000 0.064 5.648');
    seatThirtyOne.setAttribute('rotation', '0 -180 0');

    var seatThirtyTwo = document.getElementById('seat32');
    seatThirtyTwo.setAttribute('position', '-2.000 0.064 5.338');
    seatThirtyTwo.setAttribute('rotation', '0 -180 0');

    var seatThirtyThree = document.getElementById('seat33');
    seatThirtyThree.setAttribute('position', '-2.000 0.064 4.338');
    seatThirtyThree.setAttribute('rotation', '0 -180 0');

    var seatThirtyFour = document.getElementById('seat34');
    seatThirtyFour.setAttribute('position', '-2.000 0.064 4.028');
    seatThirtyFour.setAttribute('rotation', '0 -180 0');

    var seatThirtyFive = document.getElementById('seat35');
    seatThirtyFive.setAttribute('position', '-2.000 0.064 3.028');
    seatThirtyFive.setAttribute('rotation', '0 -180 0');

    var seatThirtySix = document.getElementById('seat36');
    seatThirtySix.setAttribute('position', '-2.000 0.064 2.718');
    seatThirtySix.setAttribute('rotation', '0 -180 0');

    var seatThirtySeven = document.getElementById('seat37');
    seatThirtySeven.setAttribute('position', '-2.000 0.064 1.718');
    seatThirtySeven.setAttribute('rotation', '0 -180 0');

    //govt curved mid front bench beginning
    var seatThirtyEight = document.getElementById('seat38');
    seatThirtyEight.setAttribute('position', '-2.000 0.064 0.718');
    seatThirtyEight.setAttribute('rotation', '0 -180 0');


    //govt minister back bench
    var seatThirtyNine = document.getElementById('seat39');
    seatThirtyNine.setAttribute('position', '-1.000 0.064 6.958');
    seatThirtyNine.setAttribute('rotation', '0 -180 0');

    var seatForty = document.getElementById('seat40');
    seatForty.setAttribute('position', '-1.000 0.064 6.648');
    seatForty.setAttribute('rotation', '0 -180 0');

    var seatFortyOne = document.getElementById('seat41');
    seatFortyOne.setAttribute('position', '-1.000 0.064 5.648');
    seatFortyOne.setAttribute('rotation', '0 -180 0');

    var seatFortyTwo = document.getElementById('seat42');
    seatFortyTwo.setAttribute('position', '-1.000 0.064 5.338');
    seatFortyTwo.setAttribute('rotation', '0 -180 0');

    var seatFortyThree = document.getElementById('seat43');
    seatFortyThree.setAttribute('position', '-1.000 0.064 4.338');
    seatFortyThree.setAttribute('rotation', '0 -180 0');

    var seatFortyFour = document.getElementById('seat44');
    seatFortyFour.setAttribute('position', '-1.000 0.064 4.028');
    seatFortyFour.setAttribute('rotation', '0 -180 0');

    var seatFortyFive = document.getElementById('seat45');
    seatFortyFive.setAttribute('position', '-1.000 0.064 3.028');
    seatFortyFive.setAttribute('rotation', '0 -180 0');

    var seatFortySix = document.getElementById('seat46');
    seatFortySix.setAttribute('position', '-1.000 0.064 2.718');
    seatFortySix.setAttribute('rotation', '0 -180 0');

    var seatFortySeven = document.getElementById('seat47');
    seatFortySeven.setAttribute('position', '-1.000 0.064 1.718');
    seatFortySeven.setAttribute('rotation', '0 -180 0');


    //govt member begin curved back bench
    var seatFortyEight = document.getElementById('seat48');
    seatFortyEight.setAttribute('position', '-1.000 0.064 0.718');
    seatFortyEight.setAttribute('rotation', '0 -180 0');


    
    //opposition 2nd row front bench
    var seatFortyNine = document.getElementById('seat49');
    seatFortyNine.setAttribute('position', '-4.257 0.064 6.657');
    seatFortyNine.setAttribute('rotation', '0 0 0');

    var seatFifty = document.getElementById('seat50');
    seatFifty.setAttribute('position', '-4.257 0.064 6.347');
    seatFifty.setAttribute('rotation', '0 0 0');

    var seatFiftyOne = document.getElementById('seat51');
    seatFiftyOne.setAttribute('position', '-4.257 0.064 5.347');
    seatFiftyOne.setAttribute('rotation', '0 0 0');

    var seatFiftyTwo = document.getElementById('seat52');
    seatFiftyTwo.setAttribute('position', '-4.257 0.064 5.037');
    seatFiftyTwo.setAttribute('rotation', '0 0 0');

    var seatFiftyThree = document.getElementById('seat53');
    seatFiftyThree.setAttribute('position', '-4.257 0.064 4.037');
    seatFiftyThree.setAttribute('rotation', '0 0 0');

    var seatFiftyFour = document.getElementById('seat54');
    seatFiftyFour.setAttribute('position', '-4.257 0.064 3.727');
    seatFiftyFour.setAttribute('rotation', '0 0 0');

    var seatFiftyFive = document.getElementById('seat55');
    seatFiftyFive.setAttribute('position', '-4.257 0.064 2.727');
    seatFiftyFive.setAttribute('rotation', '0 0 0');

    var seatFiftySix = document.getElementById('seat56');
    seatFiftySix.setAttribute('position', '-4.257 0.064 2.417');
    seatFiftySix.setAttribute('rotation', '0 0 0');

    var seatFiftySeven = document.getElementById('seat57');
    seatFiftySeven.setAttribute('position', '-4.257 0.064 1.417');
    seatFiftySeven.setAttribute('rotation', '0 0 0');


    //opposition front bench 2nd row curved begin
    var seatFiftyEight = document.getElementById('seat58');
    seatFiftyEight.setAttribute('position', '-4.257 0.064 0.417');
    seatFiftyEight.setAttribute('rotation', '0 0 0');



    //opposition front bench 3rd row
    var seatFiftyNine = document.getElementById('seat59');
    seatFiftyNine.setAttribute('position', '-5.257 0.064 6.657');
    seatFiftyNine.setAttribute('rotation', '0 0 0');

    var seatSixty = document.getElementById('seat60');
    seatSixty.setAttribute('position', '-5.257 0.064 6.347');
    seatSixty.setAttribute('rotation', '0 0 0');

    var seatSixtyOne = document.getElementById('seat61');
    seatSixtyOne.setAttribute('position', '-5.257 0.064 5.347');
    seatSixtyOne.setAttribute('rotation', '0 0 0');

    var seatSixtyTwo = document.getElementById('seat62');
    seatSixtyTwo.setAttribute('position', '-5.257 0.064 5.037');
    seatSixtyTwo.setAttribute('rotation', '0 0 0');

    var seatSixtyThree = document.getElementById('seat63');
    seatSixtyThree.setAttribute('position', '-5.257 0.064 4.037');
    seatSixtyThree.setAttribute('rotation', '0 0 0');

    var seatSixtyFour = document.getElementById('seat64');
    seatSixtyFour.setAttribute('position', '-5.257 0.064 3.727');
    seatSixtyFour.setAttribute('rotation', '0 0 0');

    var seatSixtyFive = document.getElementById('seat65');
    seatSixtyFive.setAttribute('position', '-5.257 0.064 2.727');
    seatSixtyFive.setAttribute('rotation', '0 0 0');

    var seatSixtySix = document.getElementById('seat66');
    seatSixtySix.setAttribute('position', '-5.257 0.064 2.417');
    seatSixtySix.setAttribute('rotation', '0 0 0');

    var seatSixtySeven = document.getElementById('seat67');
    seatSixtySeven.setAttribute('position', '-5.257 0.064 1.417');
    seatSixtySeven.setAttribute('rotation', '0 0 0');



    //opposition curved 2nd row begin
    var seatSixtyEight = document.getElementById('seat68');
    seatSixtyEight.setAttribute('position', '-5.257 0.064 0.417');
    seatSixtyEight.setAttribute('rotation', '0 0 0');

    //opposition curved back benches
    var seatSixtyNine = document.getElementById('seat69');
    seatSixtyNine.setAttribute('position', '-4.257 0.064 0.436');
    seatSixtyNine.setAttribute('rotation', '0 -30 0');

    var seatSeventy = document.getElementById('seat70');
    seatSeventy.setAttribute('position', '-4.090 0.064 0.143');
    seatSeventy.setAttribute('rotation', '0 -30 0');
    
    
});