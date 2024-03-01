window.onload=function(){
    const title=document.getElementsByClassName("title")[0];
    title.style.color = 'blue';
    title.style.fontSize = '30px';

    function pulsateHome() {
        var home = document.querySelector("h2");
        var originalColor = home.style.color || "";
        var intervalId;
        var opacity = 1;
        var increasing = false;
      
        intervalId = setInterval(function() {
          if (increasing) {
            opacity += 0.1;
            if (opacity >= 1) {
              increasing = false;
            }
          } else {
            opacity -= 0.1;
            if (opacity <= 0) {
              increasing = true;
            }
          }
      
          home.style.color = "rgba(255, 255, 0, " + opacity + ")";
        }, 100);
      }
      pulsateHome();

      function makeTitleGlow() {
        var trophies = document.getElementById("Trophies");
        trophies.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #00fff2, 0 0 70px #00fff2, 0 0 80px #00fff2, 0 0 100px #00fff2, 0 0 150px #00fff2";
      }
      
      setTimeout(makeTitleGlow, 2000); 
      window.addEventListener('scroll', function() {
        var scrollToTopBtn = document.getElementById("scrollToTopBtn");
        
        if (document.documentElement.scrollTop > 300) {
          scrollToTopBtn.style.display = "block";
        } else {
          scrollToTopBtn.style.display = "none";
        }
      });
      
      document.getElementById("scrollToTopBtn").addEventListener("click", function() {
        document.documentElement.scrollTop = 0;
      });
      
var paragraph = document.createElement("p");
var randomNumber = Math.abs(Math.floor(Math.random() * 1001));
 
if (randomNumber > 0 && randomNumber < 100) {
  paragraph.textContent = "Numărul " + randomNumber + " poate apărea pe tricoul unui fotbalist.";
  paragraph.style.color = "white"; 
} else {
  paragraph.textContent = "Numărul " + randomNumber + " nu poate apărea pe tricoul unui fotbalist.";
  paragraph.style.color = "white";
}
document.body.appendChild(paragraph);

  const fullNameInput = document.getElementById('fname');
  const favoritePlayerSelect = document.getElementById('jucator_preferat');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const form = document.getElementById('myForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    sessionStorage.setItem('fname', fullNameInput.value);
    sessionStorage.setItem('jucator_preferat', favoritePlayerSelect.value);
    sessionStorage.setItem('phone', phoneInput.value);
    sessionStorage.setItem('email', emailInput.value);

    const fname = sessionStorage.getItem('fname');
    const jucator_preferat = sessionStorage.getItem('jucator_preferat');
    const phone = sessionStorage.getItem('phone');
    const email = sessionStorage.getItem('email');

    successMessage.innerHTML = `Completarea formularului s-a realizat cu succes! Faceti parte din grupul: ${jucator_preferat}.${Math.floor(Math.random() * 100)} ${fname}. Adresa de email este: ${email}. Numarul de telefon este: ${phone}.`;
  
    const submitButton = form.querySelector('button');
  submitButton.remove();
});
      

var minge = document.getElementById("minge");
    var isJumping = false;

    document.addEventListener("keydown", function(event) {
      if (event.key === "w" && !isJumping) {
        isJumping = true;
        minge.style.transform = "translateY(-200px)";

        setTimeout(function() {
          minge.style.transform = "translateY(0)";
        }, 300);

        setTimeout(function() {
          isJumping = false;
        }, 600);
      }
    });
};