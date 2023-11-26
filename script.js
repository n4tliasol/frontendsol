/*let x = 5;
var y = 4;

const cars = ["saab", "volvo", "bmw"]

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); //3
console.log("elo elo 320");
console.log("siema skurwysyny")


const rudyCwel = {
    firstName: "srakito",
    lastName: "zapomnialamjakmananazwisko",
    age: 69,
    eyeColor: "green"
};*/


/*function showMessage() {
    alert( 'elo kurwa' );
}
showMessage()*/

/*var userAge = 11;
if (userAge>=18) {
    alert('dawaj fiucie cho na stronke');
} else {
    alert ('wypierdaja guwniarzu jebany za mlody jestes elo')
}*/

/*alert('bro', 'chuj ci w dupe bro', 'nienawidze cie', 'ty chuju jebany', 'spierdol sie', 'z mostu', 'ty kurwo'  )*/

/*let age = prompt('ile masz wiosen za sobą wojowniku', 69);
if (userAge>=18) {
    alert('witaj w naszej jaskini brodaczu');
} else {
    alert ('ma grota nie dla brata, za kilka wiosen zajrzyj spowrotem')
}*/

/*function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
}
  
let age = prompt('How old are you?', 18);
  
if ( checkAge(age) ) {
    alert( 'Access granted' );
} else {
    alert( 'Access denied' );
}*/

//Loop i wpisywanie liczb
//for (let i = 0; i < n; i++);

/*document.getElementById("photos")
var photosSection = document.getElementById("photos");
photosSection.style.backgroundColor = 'pink';*/

/*var mobileMenu = document.getElementsByClassName("hero-title")[0];
mobileMenu.style.color = 'red';*/

function mobileMenu() {
    var mobileMenuIcon = document.getElementById("mobile-menu-icon");
    var menu = document.getElementById("main-menu");
  
    if (mobileMenuIcon) {
      mobileMenuIcon.addEventListener("click",
      function() {
        menu.classList.toggle("opened");
        mobileMenuIcon.classList.toggle("opened");
      });
    }
  }
  
  mobileMenu();

