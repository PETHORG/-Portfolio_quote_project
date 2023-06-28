const toggle_effect = document.getElementsByClassName('content-container');

for (var i = 0; i < toggle_effect.length; i++) {
   
 toggle_effect[i].addEventListener('click', function () {
     this.classList.toggle('active');   
    }
    );
    console .log(toggle_effect);
}



