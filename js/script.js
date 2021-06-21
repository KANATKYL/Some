const body = document.body
let header = document.createElement('header')
body.append(header)


let logo = document.createElement('div')
logo.classList.add('logo')
header.append(logo)

let imgLogo = document.createElement('img')
// imgLogo.setAttribute('src', './img/60b8ee61-142c-41fe-b23f-e55fb78ec381.png')
imgLogo.src = './images/60b8ee61-142c-41fe-b23f-e55fb78ec381.png'

logo.append(imgLogo)


let h1 = document.createElement('h1')
h1.innerHTML = 'SLOGAN SLOGAN SLOGAN'

logo.append(h1)




//============[nav]==============


let nav = document.createElement('nav')
body.append(nav)

let ul = document.createElement('ul')
ul.classList.add('menu')
nav.append(ul)

let li = document.createElement('li')
li.classList.add('li')
li.innerHTML = 'Главная'
ul.append(li)

let li1 = document.createElement('li')
li1.classList.add('li')
li1.innerHTML = 'О Приложении'
ul.append(li1)

let li2 = document.createElement('li')
li2.classList.add('li')
li2.innerHTML = 'О Проекте'
ul.append(li2)

let li3 = document.createElement('li')
li3.classList.add('li')
li3.innerHTML = 'Скачать'
ul.append(li3)

let li4 = document.createElement('li')
li4.classList.add('li')
li4.innerHTML = 'Конаткты'
ul.append(li4)

let scrin1 = document.createElement('div')
scrin1.classList.add('scrin-1')
body.append(scrin1)





for (let i = 0; i < 3; i++){
    let div1 = document.createElement('div')
    div1.classList.add('section1')
    scrin1.append(div1)

    let img1 = document.createElement('img')
    img1.src = './images/section1.png'
    div1.append(img1)

    let textsection1 = document.createElement('p')
    textsection1.classList.add('text-section1')
    textsection1.innerHTML = 'Часто ли Вы опаздываете на работу (учёбу)?'
    div1.append(textsection1)
}

let scrin2 = document.createElement('section')
scrin2.classList.add('scrin-2')
body.append(scrin2)

let text2 = document.createElement('h1')
text2.innerHTML = 'O приложении'
text2.classList.add('text2')
scrin2.append(text2)

let section2 = document.createElement('div')
section2.classList.add('section2')
scrin2.append(section2)

let im = document.createElement('img')
im.src = './images/scrin2.png'
section2.append(im)

let playbtn = document.createElement('div')
playbtn.classList.add('play-btn')
scrin2.append(playbtn)

let im1 = document.createElement('img')
im1.src = './images/play-button-for-scrin2.png'
playbtn.append(im1)


let mainscreen3 = document.createElement('section')
mainscreen3.classList.add('main-screen3')
body.append(mainscreen3)

let scrin3 = document.createElement('div')
scrin3.classList.add('scrin-3')
mainscreen3.append(scrin3)

for (let n = 0; n < 5; n++){
    let section3 = document.createElement('div')
    section3.classList.add('section3')
    scrin3.append(section3)

    let im2 = document.createElement('img')
    im2.src = './images/section3.png'
    section3.append(im2)
}

let scrin4 = document.createElement('section')
scrin4.classList.add('scrin-4')
body.append(scrin4)

let text4 = document.createElement('h1')
text4.classList.add('text4')
text4.innerHTML = 'O проекте'
scrin4.append(text4)

let section4 = document.createElement('div')
section4.classList.add('section4')
scrin4.append(section4)

let p = document.createElement('p')
p.innerHTML = 'Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.'
section4.append(p)


let scrin5 = document.createElement('section')
scrin5.classList.add('scrin-5')
body.append(scrin5)

let text5 = document.createElement('h1')
text5.classList.add('text5')
text5.innerHTML = 'Скачать'
scrin5.append(text5)

let images5 = document.createElement('div')
images5.classList.add('images-5')
scrin5.append(images5)

let image5 = document.createElement('img')
image5.classList.add('image-5')
image5.src = './images/androidforscrin5.png'
images5.append(image5)

let image6 = document.createElement('img')
image6.classList.add('image-5')
image6.src = './images/iconforscrin5.png'
images5.append(image6)

let section5 = document.createElement('div')
section5.classList.add('section5')
scrin5.append(section5)

let p1 = document.createElement('p')
p1.innerHTML = 'Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.'
section5.append(p1)

let scrin6 = document.createElement('section')
scrin6.classList.add('scrin-6')
body.append(scrin6)

let text6 = document.createElement('h1')
text6.classList.add('text6')
text6.innerHTML = 'SOME'
scrin6.append(text6)

let images6 = document.createElement('div')
images6.classList.add('images-6')
scrin6.append(images6)

let image7 = document.createElement('img')
image7.classList.add('image6')
image7.src = './images/vk.png'
images6.append(image7)

let image8 = document.createElement('img')
image8.classList.add('image6')
image8.src = './images/instagram (1).png'
images6.append(image8)

let image9 = document.createElement('img')
image9.classList.add('image6')
image9.src = './images/facebook.png'
images6.append(image9)

let footer = document.createElement('div')
footer.classList.add('footer')
scrin6.append(footer)

let h2 = document.createElement('div')
h2.classList.add('h2')
footer.append(h2)

let h21 = document.createElement('h2')
h21.innerHTML = 'Конаткты'
h2.append(h21)

let p2 = document.createElement('p')
p2.innerHTML = 'Tel.: +996 (312) 915000 + <br> Еxt. <br>Fax: +996 (312) 915 028</p>'
p2.classList.add('sub-h2')
h2.append(p2)

let h3 = document.createElement('div')
h3.classList.add('h2')
footer.append(h3)


let h22 = document.createElement('h2')
h22.innerHTML = 'Адреса'
h3.append(h22)

let p3 = document.createElement('p')
p3.innerHTML = 'American University of Central Asia <br>7/6 Aaly Tokombaev Street <br>Bishkek, Kyrgyz Republic 720060'
p3.classList.add('sub-h2')
h3.append(p3)


let h4 = document.createElement('div')
h4.classList.add('h2')
footer.append(h4)

let h23 = document.createElement('h2')
h23.innerHTML = 'Помощь'
h4.append(h23)

let p4 = document.createElement('p')
p4.innerHTML = 'Помощь <br>Помощь <br>Помощь'
p4.classList.add('sub-h2')
h23.append(p4)







// =========================================================================

// document.body.innerHTML = `
// <header>
//             <div class="logo">
//                 <img src="./images/60b8ee61-142c-41fe-b23f-e55fb78ec381.png" alt="">
//                 <h1>SLOGAN SLOGAN SLOGAN</h1>
//             </div>
//         </header>    
//         <nav>
//             <ul class="menu">
//                 <li class="li">Главная</li>
//                 <li class="li">О Приложении</li>
//                 <li class="li">О Проекте</li>
//                 <li class="li">Скачать</li>
//                 <li class="li">Конаткты</li>
//             </ul>

//         </nav>
//         <!-- <section>
//             <div class="burger__menu">
//                 <input type="checkbox" id="toggle">
        
//                 <label for="toggle" class="btn">
//                     <span></span>
//                 </label>
        
//                 <ul class="menu-after">
//                     <li><a href="#" class="menu__item">Главная</a></li>
//                     <li><a href="#" class="menu__item">О Приложении</a></li>
//                     <li><a href="#" class="menu__item">О Проекте</a></li>
//                     <li><a href="#" class="menu__item">Скачать</a></li>
//                     <li><a href="#" class="menu__item">Контакты</a></li>
//                 </ul>
//             </div>
//         </section> -->
            

       
//         <section class="scrin-1">
//                 <div class="section1">
//                     <img src="./images/section1.png" alt="people">
//                     <p class="text-section1" >Часто ли Вы опаздываете на работу (учёбу)?</p>
//                 </div>
//                 <div class="section1">
                    
//                     <img src="./images/section1.png" alt="people">
//                     <p class="text-section1" >Часто ли Вы опаздываете на работу (учёбу)?</p>
//                 </div>
//                 <div class="section1">
//                     <img src="./images/section1.png" alt="people">
//                     <p class="text-section1" >Часто ли Вы опаздываете на работу (учёбу)?</p>
//                 </div>
//         </section>

//         <section class="scrin-2">
//             <h1 class="text2">O приложении</h1>
//             <div class="section2" ><img src="./images/scrin2.png" alt=""></div>
//             <div class="play-btn"> <img src="./images/play-button-for-scrin2.png" alt=""></div>                    
//         </section>

//         <section class="main-screen3">
//             <div class="scrin-3">
//                 <div class="section3"> <img src="./images/section3.png" alt="section3"></div>
//                 <div class="section3"> <img src="./images/section3.png" alt="section3"></div>
//                 <div class="section3"> <img src="./images/section3.png" alt="section3"></div>
//                 <div class="section3"> <img src="./images/section3.png" alt="section3"></div>
//                 <div class="section3"> <img src="./images/section3.png" alt="section3"></div>
//             </div>
//         </section>

//         <section class="scrin-4">


// <h1 class="text4">O проекте</h1>
//             <div class="section4"><p>Курс для начинающих предпринимателей, направленный на качественный результат за 
//                6 недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают 
//                участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.</p></div>
//         </section>

//         <section class="scrin-5">
//                 <h1 class="text5">Скачать</h1>
//                 <div class="images-5">
//                     <img class="image-5" id="android-photo" src="./images/androidforscrin5.png" alt="android">
//                     <img class="image-5" id="icon" src="./images/iconforscrin5.png" alt="icon">
//                 </div>
//                 <div class="section5" ><p>Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.</p>
//                 </div>
//         </section>

//         <section class="scrin-6">
//             <h1 class="text6">SOME</h1>
//             <div class="images-6">
//                 <img class="image6" src="./images/vk.png" alt="vk">
//                 <img class="image6" src="./images/instagram (1).png" alt="insta">
//                 <img class="image6" src="./images/facebook.png" alt="facebook">
//             </div>
//                 <div class="footer">
//                 <div class="h2">
//                     <h2>Конаткты</h2>
//                     <p class="sub-h2">Tel.: +996 (312) 915000 + <br> Еxt. <br>
//                         Fax: +996 (312) 915 028</p>
//                 </div>

//                 <div class="h2">
//                     <h2>Адреса</h2>
//                     <p class="sub-h2">American University of Central Asia <br>
//                         7/6 Aaly Tokombaev Street <br>
//                         Bishkek, Kyrgyz Republic 720060</p>
//                 </div>

//                 <div class="h2">
//                     <h2>Помощь</h2>
//                     <p class="sub-h2">Помощь <br>
//                         Помощь <br>
//                         Помощь
//                     </p>
                    
//                 </div>
//             </div>
//         </section>`