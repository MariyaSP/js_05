const oneList = document.querySelectorAll('.props__item_one');
const towList = document.querySelectorAll('.props__item_two');
const threeList = document.querySelectorAll('.props__item_three');
const fourList = document.querySelectorAll('.props__item_four');
const fiveList = document.querySelectorAll('.props__item_five');
const sixList = document.querySelectorAll('.props__item_six');
const itemList = document.querySelectorAll('.item')
const propsList = document.querySelectorAll('.props__list');
const titleList = document.querySelectorAll('.item__title');

console.log(propsList);
console.log(titleList);


// propsList[3].before(propsList[4]);
titleList[3].after(propsList[3]);
titleList[2].after(propsList[4]);
fourList[2].after(fourList[5]);
towList[7].append(towList[8], towList[9]);

propsList[5].before(titleList[1]);
propsList[2].before(titleList[3]);
propsList[3].before(titleList[4]);

itemList[0].before(itemList[1]);
itemList[4].before(itemList[0]);

titleList[2].textContent = 'This и прототипы объектов';
//
// titleList[3].before(titleList[4]);
// titleList[1].before(titleList[3]);
// // titleList[4].before(titleList[1]);
//
// titleList[2].replaceWith('This и прототипы объектов');
// console.log(titleList[3]);