$(".nav a").on("click", function(e){
   $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
});
