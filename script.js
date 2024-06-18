const scene = document.querySelector('#scene');
const seat = document.querySelector('#seatOne');

window.addEventListener('DOMContentLoaded', () => {
    for(i = 1; i < 123; i++){
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

    var seatSeventyOne = document.getElementById('seat71');
    seatSeventyOne.setAttribute('position', '-4.090 0.064 0.143');
    seatSeventyOne.setAttribute('rotation', '0 -50 0');

    var seatSeventyTwo = document.getElementById('seat72');
    seatSeventyTwo.setAttribute('position', '-4.090 0.064 0.143');
    seatSeventyTwo.setAttribute('rotation', '0 -70 0');

    var seatSeventyThree = document.getElementById('seat73');
    seatSeventyThree.setAttribute('position', '-4.239 0.064 0.143');
    seatSeventyThree.setAttribute('rotation', '0 -90 0');

    var seatSeventyFour = document.getElementById('seat74');
    seatSeventyFour.setAttribute('position', '-3.891 0.064 0.143');
    seatSeventyFour.setAttribute('rotation', '0 -90 0');

    var seatSeventyFive = document.getElementById('seat75');
    seatSeventyFive.setAttribute('position', '-3.891 0.064 -0.851');
    seatSeventyFive.setAttribute('rotation', '0 -90 0');

    var seatSeventySix = document.getElementById('seat76');
    seatSeventySix.setAttribute('position', '-4.201 0.064 -0.851');
    seatSeventySix.setAttribute('rotation', '0 -90 0');

    var seatSeventySeven = document.getElementById('seat77');
    seatSeventySeven.setAttribute('position', '-5.257 0.064 -0.350');
    seatSeventySeven.setAttribute('rotation', '0 0 0');

    var seatSeventyEight = document.getElementById('seat78');
    seatSeventyEight.setAttribute('position', '-5.257 0.064 -0.150');
    seatSeventyEight.setAttribute('rotation', '0 -30 0');

    var seatSeventyNine = document.getElementById('seat79');
    seatSeventyNine.setAttribute('position', '-5.257 0.064 -0.150');
    seatSeventyNine.setAttribute('rotation', '0 -45 0');

    var seatEighty = document.getElementById('seat80');
    seatEighty.setAttribute('position', '-5.016 0.064 -0.394');
    seatEighty.setAttribute('rotation', '0 -45 0');

    var seatEightyOne = document.getElementById('seat81');
    seatEightyOne.setAttribute('position', '-4.643 0.064 -0.789');
    seatEightyOne.setAttribute('rotation', '0 -45 0');

    var seatEightyTwo = document.getElementById('seat82');
    seatEightyTwo.setAttribute('position', '-4.414 0.064 -1.010');
    seatEightyTwo.setAttribute('rotation', '0 -45 0');

    var seatEightyThree = document.getElementById('seat83');
    seatEightyThree.setAttribute('position', '-4.488 0.064 -0.927');
    seatEightyThree.setAttribute('rotation', '0 -70 0');

    var seatEightyFour = document.getElementById('seat84');
    seatEightyFour.setAttribute('position', '-6.000 0.064 -0.920');
    seatEightyFour.setAttribute('rotation', '0 -45 0');

    var seatEightyFive = document.getElementById('seat85');
    seatEightyFive.setAttribute('position', '-5.749 0.064 -1.171');
    seatEightyFive.setAttribute('rotation', '0 -45 0');

    var seatEightySix = document.getElementById('seat86');
    seatEightySix.setAttribute('position', '-5.339 0.064 -1.522');
    seatEightySix.setAttribute('rotation', '0 -45 0');

    var seatEightySeven = document.getElementById('seat87');
    seatEightySeven.setAttribute('position', '-5.162 0.064 -1.709');
    seatEightySeven.setAttribute('rotation', '0 -45 0');

    var seatEightyEight = document.getElementById('seat88');
    seatEightyEight.setAttribute('position', '-3.891 0.064 -1.817');
    seatEightyEight.setAttribute('rotation', '0 -90 0');

    var seatEightyNine = document.getElementById('seat89');
    seatEightyNine.setAttribute('position', '-4.247 0.064 -1.859');
    seatEightyNine.setAttribute('rotation', '0 -90 0');

    var seatNinety = document.getElementById('seat90');
    seatNinety.setAttribute('position', '-5.043 0.064 -1.789');
    seatNinety.setAttribute('rotation', '0 -67.5 0');

    var seatNinetyOne = document.getElementById('seat91');
    seatNinetyOne.setAttribute('position', '-4.720 0.064 -1.926');
    seatNinetyOne.setAttribute('rotation', '0 -67.5 0');

    //govt curved backbench
    var seatNinetyTwo = document.getElementById('seat92');
    seatNinetyTwo.setAttribute('position', '-2.444 0.064 0.322');
    seatNinetyTwo.setAttribute('rotation', '0 -96 0');

    var seatNinetyThree = document.getElementById('seat93');
    seatNinetyThree.setAttribute('position', '-2.344 0.064 0.322');
    seatNinetyThree.setAttribute('rotation', '0 -106 0');

    var seatNinetyFour = document.getElementById('seat94');
    seatNinetyFour.setAttribute('position', '-2.104 0.064 0.350');
    seatNinetyFour.setAttribute('rotation', '0 -111 0');

    var seatNinetyFive = document.getElementById('seat95');
    seatNinetyFive.setAttribute('position', '-1.855 0.064 0.484');
    seatNinetyFive.setAttribute('rotation', '0 -116 0');

    var seatNinetySix = document.getElementById('seat96');
    seatNinetySix.setAttribute('position', '-1.653 0.064 0.645');
    seatNinetySix.setAttribute('rotation', '0 -121 0');

    var seatNinetySeven = document.getElementById('seat97');
    seatNinetySeven.setAttribute('position', '-1.453 0.064 0.845');
    seatNinetySeven.setAttribute('rotation', '0 -129 0');

    var seatNinetyEight = document.getElementById('seat98');
    seatNinetyEight.setAttribute('position', '-1.253 0.064 1.046');
    seatNinetyEight.setAttribute('rotation', '0 -138 0');

    var seatNinetyNine = document.getElementById('seat99');
    seatNinetyNine.setAttribute('position', '-2.444 0.064 -0.604');
    seatNinetyNine.setAttribute('rotation', '0 -96 0');

    var seatHundred = document.getElementById('seat100');
    seatHundred.setAttribute('position', '-2.200 0.064 -0.604');
    seatHundred.setAttribute('rotation', '0 -100 0');

    var seatHundredOne = document.getElementById('seat101');
    seatHundredOne.setAttribute('position', '-2.000 0.064 -0.604');
    seatHundredOne.setAttribute('rotation', '0 -107 0');

    var seatHundredTwo = document.getElementById('seat102');
    seatHundredTwo.setAttribute('position', '-1.800 0.064 -0.604');
    seatHundredTwo.setAttribute('rotation', '0 -114 0');

    var seatHundredThree = document.getElementById('seat103');
    seatHundredThree.setAttribute('position', '-1.600 0.064 -0.604');
    seatHundredThree.setAttribute('rotation', '0 -121 0');

    var seatHundredFour = document.getElementById('seat104');
    seatHundredFour.setAttribute('position', '-1.400 0.064 -0.604');
    seatHundredFour.setAttribute('rotation', '0 -128 0');

    var seatHundredFive = document.getElementById('seat105');
    seatHundredFive.setAttribute('position', '-1.200 0.064 -0.604');
    seatHundredFive.setAttribute('rotation', '0 -135 0');

    var seatHundredSix = document.getElementById('seat106');
    seatHundredSix.setAttribute('position', '-1.000 0.064 -0.604');
    seatHundredSix.setAttribute('rotation', '0 -142 0');

    var seatHundredSeven = document.getElementById('seat107');
    seatHundredSeven.setAttribute('position', '-0.800 0.064 -0.604');
    seatHundredSeven.setAttribute('rotation', '0 -150 0');

    var seatHundredEight = document.getElementById('seat108');
    seatHundredEight.setAttribute('position', '-0.600 0.064 -0.604');
    seatHundredEight.setAttribute('rotation', '0 -159 0');

    var seatHundredNine = document.getElementById('seat109');
    seatHundredNine.setAttribute('position', '-2.323 0.064 -1.817');
    seatHundredNine.setAttribute('rotation', '0 -90 0');

    var seatHundredTen = document.getElementById('seat110');
    seatHundredTen.setAttribute('position', '-2.000 0.064 -1.817');
    seatHundredTen.setAttribute('rotation', '0 -100 0');

    var seatHundredEleven = document.getElementById('seat111');
    seatHundredEleven.setAttribute('position', '-1.750 0.064 -1.817');
    seatHundredEleven.setAttribute('rotation', '0 -110 0');

    var seatHundredTwelve = document.getElementById('seat112');
    seatHundredTwelve.setAttribute('position', '-1.500 0.064 -1.817');
    seatHundredTwelve.setAttribute('rotation', '0 -120 0');

    var seatHundredThirteen = document.getElementById('seat113');
    seatHundredThirteen.setAttribute('position', '-1.250 0.064 -1.817');
    seatHundredThirteen.setAttribute('rotation', '0 -130 0');

    var seatHundredFourteen = document.getElementById('seat114');
    seatHundredFourteen.setAttribute('position', '-1.000 0.064 -1.817');
    seatHundredFourteen.setAttribute('rotation', '0 -140 0');

    var seatHundredFifteen = document.getElementById('seat115');
    seatHundredFifteen.setAttribute('position', '-0.750 0.064 -1.817');
    seatHundredFifteen.setAttribute('rotation', '0 -150 0');

    var seatHundredSixteen = document.getElementById('seat116');
    seatHundredSixteen.setAttribute('position', '-0.500 0.064 -1.817');
    seatHundredSixteen.setAttribute('rotation', '0 -160 0');

    var seatHundredSeventeen = document.getElementById('seat117');   
    seatHundredSeventeen.setAttribute('position', '-2.323 0.064 -2.917');
    seatHundredSeventeen.setAttribute('rotation', '0 -90 0');

    var seatHundredEighteen = document.getElementById('seat118');
    seatHundredEighteen.setAttribute('position', '-2.000 0.064 -2.917');
    seatHundredEighteen.setAttribute('rotation', '0 -100 0');

    var seatHundredNineteen = document.getElementById('seat119');
    seatHundredNineteen.setAttribute('position', '-1.750 0.064 -2.917');
    seatHundredNineteen.setAttribute('rotation', '0 -110 0');

    var seatHundredTwenty = document.getElementById('seat120');
    seatHundredTwenty.setAttribute('position', '-1.500 0.064 -2.917');
    seatHundredTwenty.setAttribute('rotation', '0 -120 0');

    var seatHundredTwentyOne = document.getElementById('seat121');
    seatHundredTwentyOne.setAttribute('position', '-4.323 0.064 -2.917');
    seatHundredTwentyOne.setAttribute('rotation', '0 -90 0');

    var seatHundredTwentyTwo = document.getElementById('seat122');
    seatHundredTwentyTwo.setAttribute('position', '-4.013 0.064 -2.917');
    seatHundredTwentyTwo.setAttribute('rotation', '0 -90 0');

    var seatHundredTwentyThree = document.getElementById('seat123');
    seatHundredTwentyThree.setAttribute('position', '-5.000 0.064 -2.917');
    seatHundredTwentyThree.setAttribute('rotation', '0 -80 0');
});