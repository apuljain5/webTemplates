 // counter up js starts
 function counterUp(element, startAtPercentage) {
    if (startAtPercentage == null) {
        startAtPercentage = 10;
    }

    var numericValue = getNumericValue(element);

    jQuery(element).counterUp({
        beginAt: (numericValue > 0)
            ? (numericValue * startAtPercentage / 100)
            : undefined,
    });
}

function getNumericValue(element) {
    try {
        return Number(element.innerText
            // Remove decimal points
            .replace(/.\D+/g, '')
            // Remove thousands separator and other symbols
            .replace(/\D/g, ''));
    } catch (error) {
        return 0;
    }
}

// Apply it to all elements with vanilla JavaScript (ES5)
Array.prototype.forEach.call(
    document.querySelectorAll('.count'),
    function (element) {
        counterUp(element, 10);
    });
//counter up ends

      //get the button
      mybutton = document.getElementById("myBtn");

      //when the user scrolls down 20px from the top of the doccument, show the button
      window.onscroll = function() {scrollFunction()};

      function scrollFunction(){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
          mybutton.style.display = "block";
        }else{
          mybutton.style.display = "none";
        }
      }

      //when the user clicks on the button, scroll to the top of the doccument
      function topFunction(){
        document.body.scrollTop = 0; //for safari
        document.documentElement.scrollTop = 0; //for chrome, mozilla, opera and IE
      }