$(function() {
  var sliderModule = (function() {
    var pb = {};
     pb.el = $('#slider');
     pb.items = {
       panel: pb.el.find('li')
     }
    //Variables Necesarias
    var sliderInterval,
        currentSlider = 0,
        nextSlider =  1,
        lengthSlider = pb.items.panel.length;

        //inicialilize
        pb.init = function(settings) {
           // Activando nuestro slider
           sliderInit();
        }
        var sliderInit = function() {
          sliderInit = setInterval(pb.startSlider, 4000);
            }
          pb.startSlider = function(){
            var panels = pb.items.panel;
            if (nextSlider >= lengthSlider){
              nextSlider = 0;
              currentSlider = lengthSlider-1;
            }
             //Efectos
             panels.eq(currentSlider).fadeOut('slow');
             panels.eq(nextSlider).fadeIn('slow');

            // Actualizamos nuestros datos
            currentSlider = nextSlider;
            nextSlider += 1;
            //funcion para control de los paneles
          }
        return pb;
  }());
  sliderModule.init();
});

/************************************************************************
----------------------- Menu en accordion -------------------------------
========================================================================*/
$(function(){
 var Accordion = function(el, multiple){  //Creamos objeto
    this.el = el || {}; // creamos un metodo o un objeto
    this.multiple = multiple || false; //creamos un metodo o un boleano

    //Variables privadas
    var links = this.el.find('.article-accordion');
    //evento
    links.on('click',{el: this.el, multiple: this.multiple} ,this.dropdown)
 }

 Accordion.prototype.dropdown = function(e) {  //Creando metodo
    var $el = e.data.el;
        $this = $(this),
        $next = $this.next('');

      $next.slideToggle()
      $this.find('p').toggleClass('open');

      if(!e.data.multiple) {
        $el.find('.submenu').not($next).slideUp().find('p').removeClass('open');
      };
 }

  var accordion = new Accordion($('#accordion'),false);
});

/************************************************************************
----------------------- Menu resposible -------------------------------
========================================================================*/
$(document).ready(main);
var contador = 1;
function  main() {
  $('.menu_bar').click(function(){
    if (contador == 1) {
      $('.wrap-li').animate({
        left:'0'
      })
      contador = 0 ;
    } else{
      contador = 1;
      $('.wrap-li').animate({
        left:'-100%'
      })
    }
  })
};
