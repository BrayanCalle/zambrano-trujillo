jQuery(function () {
    jQuery("#whatsapp").floatingWhatsApp({ phone: "593984057327", size: "48px" });
});

jQuery(window).scroll(function() {
    var calScreenWidth = jQuery(window).width();
   
   if(jQuery(this).scrollTop() > 200) {
       jQuery('#whatsapp').stop().css({opacity: 1, "visibility": "visible"}).animate({"visibility": "visible"}, {duration:1000});
   } else if(jQuery(this).scrollTop() == 0) {
       jQuery('#whatsapp').stop().css({opacity: 0, "visibility": "hidden"}).animate({"visibility": "hidden"}, {duration:1500});
   }
});