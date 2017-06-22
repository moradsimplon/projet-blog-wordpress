//GoogleAnalyticsObject

(function(b, o, i, l, e, r) {
    b.GoogleAnalyticsObject = l;
    b[l] || (b[l] =
        function() {
            (b[l].q = b[l].q || []).push(arguments)
        });
    b[l].l = +new Date;
    e = o.createElement(i);
    r = o.getElementsByTagName(i)[0];
    e.src = 'https://www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e, r)
}(window, document, 'script', 'ga'));
ga('create', 'UA-XXXXX-X', 'auto');
ga('send', 'pageview');

//chronotime
var chrono = 0;

function seconde() {
    chrono++;
    document.getElementById("mychrono").innerHTML = chrono;
}
setInterval(seconde, 1000);

//Dropdown
var $ = jQuery.noConflict();
$(function() {
    $('#activator').click(function() {
        $('#box').animate({
            'top': '0px'
        }, 500);
    });
    $('#boxclose').click(function() {
        $('#box').animate({
            'top': '-700px'
        }, 500);
    });
});
$(document).ready(function() {
    //Hide (Collapse) the toggle containers on load
    $(".toggle_container").hide();
    //Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
    $(".trigger").click(function() {
        $(this).toggleClass("active").next().slideToggle("slow");
        return false; //Prevent the browser jump to the link anchor
    });

});

// wrap

(function($) {
    var $tiles = $('#tiles'),
        $handler = $('li', $tiles),
        $main = $('#main'),
        $window = $(window),
        $document = $(document),
        options = {
            autoResize: true, // This will auto-update the layout when the browser window is resized.
            container: $main, // Optional, used for some extra CSS styling
            offset: 20, // Optional, the distance between grid items
            itemWidth: 280 // Optional, the width of a grid item
        };
    /**
     * Reinitializes the wookmark handler after all images have loaded
     */
    function applyLayout() {
        $tiles.imagesLoaded(function() {
            // Destroy the old handler
            if ($handler.wookmarkInstance) {
                $handler.wookmarkInstance.clear();
            }

            // Create a new layout handler.
            $handler = $('li', $tiles);
            $handler.wookmark(options);
        });
    }
    /**
     * When scrolled all the way to the bottom, add more tiles
     */
    function onScroll() {
        // Check if we're within 100 pixels of the bottom edge of the broser window.
        var winHeight = window.innerHeight ? window.innerHeight : $window.height(), // iphone fix
            closeToBottom = ($window.scrollTop() + winHeight > $document.height() - 100);

        if (closeToBottom) {
            // Get the first then items from the grid, clone them, and add them to the bottom of the grid
            var $items = $('li', $tiles),
                $firstTen = $items.slice(0, 10);


            applyLayout();
        }
    };

    // Call the layout function for the first time
    applyLayout();

    // Capture scroll event.
    $window.bind('scroll.wookmark', onScroll);
})(jQuery);
window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')

// application
addEventListener("load", function() {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}
//innovation

var $ = jQuery.noConflict();
  $(function() {
    $('#activator').click(function(){
      $('#box').animate({'top':'0px'},500);
    });
    $('#boxclose').click(function(){
    $('#box').animate({'top':'-700px'},500);
    });
  });
  $(document).ready(function(){
  //Hide (Collapse) the toggle containers on load
  $(".toggle_container").hide();
  //Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
  $(".trigger").click(function(){
    $(this).toggleClass("active").next().slideToggle("slow");
      return false; //Prevent the browser jump to the link anchor
  });

});

// formulaire

var nbclic=0 // Initialisation à 0 du nombre de clic
function CompteClic(formulaire) { // Fonction appelée par le bouton
   nbclic++; // nbclic+1
   if (nbclic>1) { // Plus de 1 clic
      alert("deja envoyez");
   } else { // 1 seul clic
      alert("Confirmé l'envoi");
   }
}
