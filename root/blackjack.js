

// //ON WINDOW LOADING
// testVar = 10;
// let orderTotal = "Yes";
// function collectOrder(numOrdered) {
//     if (numOrdered > 0) {
//         orderTotal = numOrdered * 5;
//         alert("You ordered " + orderTotal);
//         return orderTotal;
//     }
// }
//
// console.log( collectOrder(10) );
// // console.log( collectOrder(-10) );
//
//
//
//     window.addEventListener('load', () => {
//     let dealerCardSum = document.querySelector(".dealer-card-sum");
//     dealerCardSum.innerText = sumOfCard() % 11;
//     displayDealerCard();
// });
//
// function sumOfCard() {
//     return Math.floor(Math.random() * 21);
// }
//
// function onBet() {
//     let playerCardSum = document.querySelector(".player-card-sum1");
//     playerCardSum.innerText = sumOfCard();
//     cardImages(2);
// }
//
// //CREATE AND DISPLAY CARDS
// function cardImages(time) {
//     //let imgSrc = createCard(time);
//     let imgSrc = ['cards/1H.png','cards/2S.png'];
//     for (let i = 0; i < imgSrc.length; i++) {
//         console.log(imgSrc[i]);
//         show_image(imgSrc[i], 100, 150);
//     }
//
//     imgSrc[0] = 'cards/3S.png';
//     for (let i = 0; i < imgSrc.length; i++) {
//         console.log(imgSrc[i]);
//         show_image(imgSrc[i], 100, 150);
//     }
//
// }
//
// function createCard(time) {
//     let val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//     let club = ['H', 'C', 'D', 'S'];
//     let imgsrc = [];
//     for (let i = 0; i < time; i++) {
//         let valInd = Math.floor(Math.random() * 13);
//         let clubInd = Math.floor(Math.random() * 4);
//         let imgName = val[valInd] + club[clubInd];
//         imgsrc[i] = "cards/" + imgName + ".png";
//     }
//     return imgsrc;
// }
//
// function show_image(src, width, height) {
//     let img = document.createElement("img");
//     img.src = src;
//     img.width = width;
//     img.height = height;
//     document.body.appendChild(img);
// }
//
// function displayDealerCard() {
//     let card1 = "cards/back.png";
//     show_image(card1, 100, 150);
//     cardImages(1);
//     //show_image("cards/1H.png", 100, 150);
// }
//
// //STAND BUTTON FUNCTION
// function standPosition() {
//     document.getElementById("hit").disabled = true;
//     document.getElementById("double").disabled = true;
// }
