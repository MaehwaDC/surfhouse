//jquery version: 3.3.1

$(function(){

  $(document).ready(function(){
    menu()
  })

  function menu() {
 

    $(".nav-btn").click(function(){

      $(".products-container__aside_menu-content").slideToggle(700)
    })

    $(window).resize(function(){
      if ($(window).width() <= '767'){
        $(".products-container__aside_menu-content").hide()
      } else {
        $(".products-container__aside_menu-content").show()
      }
    })

    $(".header-bottom").click(function(event){
      if (event.target != $(".products-container__aside_menu-content") && $(window).width() <= '767'){
        $(".products-container__aside_menu-content").slideUp(700)
      }
    })
  }
})
