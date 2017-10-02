$(document).ready(() => {

     /* trigger multiple collapse */
     let ifCollapsed = false;
    $(".open-button").on("click", function() {
        if(ifCollapsed === false) {

         
            $("#collapseArrow").removeClass("fa fa-arrow-down")
            $("#collapseArrow").addClass("fa fa-arrow-up")
            $(this).closest('.collapse-group').find('.collapse').collapse('show');
            ifCollapsed = true;
        }
        else if(ifCollapsed === true) {
            $("#collapseArrow").removeClass("fa fa-arrow-up")
            $("#collapseArrow").addClass("fa fa-arrow-down")

            $(this).closest('.collapse-group').find('.collapse').collapse('hide');
            ifCollapsed = false;
        }
      });
 
    /* slideshow, optional */

    // let slideActivated = false;
    // let counter = 0;
    // let int;
    // let slideText = [
    //     "Playing drums for 10 years with numerous live shows",
    //     "Making plastic scale models with airbrushing tehniques",
    //     "Travelling abroad with my girlfriend",
    //     "Reading books, a fan of good sci-fi"
    // ];
    // console.log(counter);

    // $("#arrowRight").on("click", () => {
    //     if (counter >= 3) {
    //         counter = 0;
    //         $("#slideImage").attr("src", "img/" + counter + ".jpg");
    //         $("#slideText").text(slideText[counter]);
    //     } else {
    //         counter++;
    //         $("#slideImage").attr("src", "img/" + counter + ".jpg");
    //         $("#slideText").text(slideText[counter]);
    //     }
    // });
    // $("#arrowLeft").on("click", () => {
    //     if (counter === 0) {
    //         counter = 3;
    //         $("#slideImage").attr("src", "img/" + counter + ".jpg");
    //         $("#slideText").text(slideText[counter]);
    //     } else {
    //         counter--;
    //         $("#slideImage").attr("src", "img/" + counter + ".jpg");
    //         $("#slideText").text(slideText[counter]);
    //     }
    // });


    // function triggerSlide(boolean) {
    //     if (boolean === true) {
    //         int = setInterval(function () {
    //             if (counter >= 3) {
    //                 counter = 0;
    //                 $("#slideImage").attr("src", "img/" + counter + ".jpg");
    //                 $("#slideText").text(slideText[counter]);
    //             } else {
    //                 counter++;
    //                 $("#slideImage").attr("src", "img/" + counter + ".jpg");
    //                 $("#slideText").text(slideText[counter]);
    //             }
    //         }, 2000);
    //     } else if (boolean === false) {
    //         clearInterval(int);
    //     }
    // }
    // $("#slidePlayButton").on("click", () => {
    //     if (slideActivated === false) {
    //         $("#slidePlayButton").addClass("fa fa-pause");
    //         slideActivated = true;
    //         triggerSlide(true);
    //     } else if (slideActivated === true) {
    //         $("#slidePlayButton").removeClass("fa fa-pause");
    //         $("#slidePlayButton").addClass("fa fa-play");
    //         slideActivated = false;
    //         triggerSlide(false);
    //     }
    // });

});