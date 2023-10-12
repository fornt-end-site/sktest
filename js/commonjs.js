$("#menushow").click(function(){
	$("#menuopen").addClass("showmore");
  $(".menu_overlay").addClass("reoverlay");
  $("body,html").addClass("scrollhide");
	$("#menuclose").click(function(){
		$("#menuopen").removeClass("showmore");
    $("body,html").removeClass("scrollhide");
    $(".menu_overlay").removeClass("reoverlay");
	});
});
$(".slidedownmenu").click(function(){
  $(".slidemenu").slideToggle(function() {
    $(".slidedownmenu").toggleClass("arrowch");
});
});

$(document).mouseup(function (e) {
  if ($(e.target).closest("#menuopen").length === 0) {
      $(".menuslide").removeClass("showmore");
      $(".menu_overlay").removeClass("reoverlay");
      $("body,html").removeClass("scrollhide");

  }
});

const header = document.querySelector(".menu");
    const toggleClass = "has-sticky";

    window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 120) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
    });

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

var swiper = new Swiper(".mySwiper", {
  loop:true,
  allowTouchMove:false,
  keyboard: {
    enabled: false,
  },
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  
}); 