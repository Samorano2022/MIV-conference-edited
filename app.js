var eventBtn = document.getElementsByClassName("event__btns")
var eventTable = document.getElementsByClassName("event__tables")
var menu = document.getElementsByClassName('header__desktop');
const hamburger = document.getElementsByClassName('hamburger')
const header = document.getElementsByClassName('header__mobile')
const header__wrapper = document.getElementsByClassName('header__wrapper')
// const headerMain = document.getElementsByClassName('header')

function openTab(tabName){
   

    for(btn of eventBtn){
        if(btn.id === tabName){
            btn.classList.add("active__button")
            console.log(true)
        }
        else{
            btn.classList.remove("active__button")
        }
    }
    for(table of eventTable){
        if(table.id === tabName){
            table.classList.add("active__table")
            console.log(true)
        }
        else{
            table.classList.remove("active__table")
        }
    }

    // event.currentTarget.classList.add("active__button")
    // document.getElementById(tabName).classList.add("event__tables")
    
  }

  const openmenu =() => {
    menu[0].classList.toggle('active')
    if(menu[0].className.includes('active')){
        hamburger[0].src = '/assets/cancel__icon.png'
    }
    else{
        hamburger[0].src = '/assets/Hamburger_icon.png'
    }

  }

window.addEventListener('scroll', (e)=> {
    if(window.scrollY > 550){
        header[0].classList.add('header__bar')
        header__wrapper[0].classList.add('header__bar')
    }
    else{
        header[0].classList.remove('header__bar')
        header__wrapper[0].classList.remove('header__bar')

    }
  
}
)