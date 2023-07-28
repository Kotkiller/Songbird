import '../styles/victorine.scss';
import '../victorine.html';
import birdsData from './birds.js';

let score = document.querySelector('.score'); // набранные очки
let birdName = document.querySelector('.main-content__top-content_bird_name'); //отображение имени птицы сверху
let birdNameBottom = document.querySelector('.bird-name'); //отображение имени птицы снизу
let birdImageTop = document.querySelector('.main-content__top-content__bird-image'); //верхнее фото птицы
let birdImageBottom = document.querySelector('.bird-image-2'); //нижнее фото птицы
let birdImage2=document.querySelector('.bird-image-2-image')
const birdSpeciesButtonList=document.querySelector('.header__nav__list') //список кнопок
const birdSpeciesButton=document.querySelector('.header__nav__list__item') //кнопки выбора уровня
const warmUp = document.querySelector('.warm-up'); //кнопка "Разминка"
const passerines = document.querySelector('.passerines'); //кнопка "Воробьиные"
const forest = document.querySelector('.forest'); //кнопка "Лесные птицы"
const singing = document.querySelector('.singing'); //кнопка "Певчие птицы"
const predatory = document.querySelector('.predatory'); //кнопка "Хищные птицы"
const sea = document.querySelector('.sea'); //кнопка "Морские птицы"

const cardBody=document.querySelector('.card-body__list')
const topPlayer = document.querySelector('.player'); // верхний плеер
const bottomPlayer = document.querySelector('.audio-controls'); // нижний плеер
let species = document.querySelector('.species'); //семейство птицы
let birdNameClass=document.querySelector('.bird-name')
let greeting=document.querySelector('.greetings')
let description = document.querySelector('.birds-description'); //описание птицы
const nextLevelButton = document.querySelector('.main-content__next-level__button'); //кнопка перехода на следующий уровень
let nameBirdsList = document.querySelector('.main-content__middle-content__bird-choise'); //список вариантов ответов с именами
let nameItem = document.querySelectorAll('.main-content__middle-content__bird-choise__name');  // строка с вариантом ответа

window.addEventListener("load", function(event) {
    warmUp.style.backgroundColor='#00BC8C';
    nameItem[0].textContent='Ворон'
    nameItem[1].textContent='Журавль'
    nameItem[2].textContent='Ласточка'
    nameItem[3].textContent='Козодой'
    nameItem[4].textContent='Кукушка'
    nameItem[5].textContent='Синица'
    
    nameItem[0].addEventListener('click', ()=>{
        cardBody.style.display='block'
        birdImageBottom.style.display='block'
        birdImageBottom.style.backgroundImage= "url('https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg')"
        greeting.style.display='none'
        birdNameClass.textContent='Ворона'
        species.textContent='Corvus corax'
        description.textContent='Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.'

      })
    
})


  
  
  let warmUpStage=birdsData[0]         //птицы для разминки
  let firstStage=birdsData[1]        // воробьиные 
  let secondStage=birdsData[2]       // лесные 
  let thirdStage=birdsData[3]        // певчие 
  let fourthStage=birdsData[4]       // хищные
  let fifthStage=birdsData[5]        // морские

//Функция отображения списка птиц для разминки

function  warmUpList (){
 
}

//Функция отображения списка птиц семейства воробьиных

function passerinesList (){
 
    }

//Функция отображения списка птиц семейства лесных

function forestList () {
    }

//Функция отображения списка птиц семейства поющих

function singingList () {
  
}

//Функция отображения списка птиц семейства хищных

function predatoryList () {
  
}

//Функция отображения списка птиц семейства морских

function seaList () {
   
}
