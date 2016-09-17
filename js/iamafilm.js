/**
 * Created by Mahmoud El Kotoury on 9/15/2016.
 */


    //bio tab
    $("#bio")
        .mouseover(function() {
            $(this).addClass('mouseover');
        })
        .mouseout(function() {
            $(this).removeClass('mouseover');
        });

    $("#bio").click(function(e) {
        // e.preventDefault(); //prevent the link from actually navigating somewhere
        $(this).addClass("clicked");
        $("#film").removeClass("clicked"); //remove the clicked class from all other elements
        $("#submit_film").removeClass("clicked");
    });



    //film tab
    $("#film")
        .mouseover(function() {
            $(this).addClass('mouseover');
        })
        .mouseout(function() {
            $(this).removeClass('mouseover');
        });

    $("#film").click(function(e) {
        // e.preventDefault(); //prevent the link from actually navigating somewhere
        $(this).addClass("clicked");
        $("#bio").removeClass("clicked"); //remove the clicked class from all other elements
        $("#submit_film").removeClass("clicked"); //remove the clicked class from all other elements


    });

    //submit film tab
    $("#submit_film")
        .mouseover(function() {
            $(this).addClass('mouseover');
        })
        .mouseout(function() {
            $(this).removeClass('mouseover');
        });

    $("#submit_film").click(function(e) {
        // e.preventDefault(); //prevent the link from actually navigating somewhere
        $(this).addClass("clicked");
        $("#film").removeClass("clicked"); //remove the clicked class from all other elements
        $("#bio").removeClass("clicked"); //remove the clicked class from all other elements

    });





      $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
          e.preventDefault();
          $(this).siblings('a.active').removeClass("active");
          $(this).addClass("active");
          var index = $(this).index();
          $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
          $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
      });


      // <!-- about , work , contact , follow -->


      //about tab
      // $("#about")
      //     .mouseover(function() {
      //         $(this).addClass('mouseover');
      //     })
      //     .mouseout(function() {
      //         $(this).removeClass('mouseover');
      //     });

      $("#about").click(function(e) {
          // e.preventDefault(); //prevent the link from actually navigating somewhere
          // $(this).addClass("clicked");
          $("#work").removeClass("clicked"); //remove the clicked class from all other elements
          $("#contact").removeClass("clicked");
          $("#follow").removeClass("clicked");
          $("#about1").addClass("active");
          $("#work1").removeClass("active");
          $("#contact1").removeClass("active");
          $("#follow1").removeClass("active");
          $("#work1").addClass("hidden");
          $("#contact1").addClass("hidden");
          $("#follow1").addClass("hidden");
          $("#about1").removeClass("hidden");

      });

      // <!-- about , work , contact , follow -->


      //work tab
      // $("#work")
      //     .mouseover(function() {
      //         $(this).addClass('mouseover');
      //     })
      //     .mouseout(function() {
      //         $(this).removeClass('mouseover');
      //     });

      $("#work").click(function(e) {
          // e.preventDefault(); //prevent the link from actually navigating somewhere
          // $(this).addClass("clicked");
          $("#about").removeClass("clicked"); //remove the clicked class from all other elements
          $("#contact").removeClass("clicked");
          $("#follow").removeClass("clicked");
          $("#work1").addClass("active");
          $("#about1").removeClass("active");
          $("#contact1").removeClass("active");
          $("#follow1").removeClass("active");
          $("#about1").addClass("hidden");
          $("#contact1").addClass("hidden");
          $("#follow1").addClass("hidden");
          $("#work1").removeClass("hidden");


      });

      // <!-- about , work , contact , follow -->

      //contact tab
      // $("#contact")
      //     .mouseover(function() {
      //         $(this).addClass('mouseover');
      //     })
      //     .mouseout(function() {
      //         $(this).removeClass('mouseover');
      //     });

      $("#contact").click(function(e) {
          // e.preventDefault(); //prevent the link from actually navigating somewhere
          // $(this).addClass("clicked");
          $("#about").removeClass("clicked"); //remove the clicked class from all other elements
          $("#work").removeClass("clicked");
          $("#follow").removeClass("clicked");
          $("#contact1").addClass("active");
          $("#about1").removeClass("active");
          $("#work1").removeClass("active");
          $("#follow1").removeClass("active");
          $("#about1").addClass("hidden");
          $("#work1").addClass("hidden");
          $("#follow1").addClass("hidden");
          $("#contact1").removeClass("hidden");

      });


      // <!-- about , work , contact , follow -->

      //follow tab
      // $("#follow")
      //     .mouseover(function() {
      //         $(this).addClass('mouseover');
      //     })
      //     .mouseout(function() {
      //         $(this).removeClass('mouseover');
      //     });

      $("#follow").click(function(e) {
          // e.preventDefault(); //prevent the link from actually navigating somewhere
          // $(this).addClass("clicked");
          $("#about").removeClass("clicked"); //remove the clicked class from all other elements
          $("#work").removeClass("clicked");
          $("#follow").removeClass("clicked");
          $("#follow1").addClass("active");
          $("#about1").removeClass("active");
          $("#work1").removeClass("active");
          $("#contact1").removeClass("active");
          $("#about1").addClass("hidden");
          $("#work1").addClass("hidden");
          $("#contact1").addClass("hidden");
          $("#follow1").removeClass("hidden");

      });
