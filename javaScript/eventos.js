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
