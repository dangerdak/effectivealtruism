window.onload = function() {
  
  // Determine browser-specific transition end event
  // From modernizr & https://davidwalsh.name/css-animation-callback
  function whichTransitionEvent(){
      var t;
      var el = document.createElement('fakeelement');
      var transitions = {
        'transition':'transitionend',
        'OTransition':'oTransitionEnd',
        'MozTransition':'transitionend',
        'WebkitTransition':'webkitTransitionEnd'
      }

      for(t in transitions){
          if( el.style[t] !== undefined ){
              return transitions[t];
          }
      }
  }
  // Listen for a transition
  var transitionEndEvent = whichTransitionEvent();

  // Toggle nav menu
  var burger = document.getElementById("burger");
  burger.addEventListener('click', function() {
    var menu = document.getElementById('navbar');
    this.classList.toggle('close-icon');
    menu.classList.toggle('hidden');
  });

  // Tooltips for mobile (iphone)
  var tooltips = document.querySelectorAll('.tooltip');
  // Use event capturing:
  // Event on outer element (body) fires first,
  // then event on inner element (tooltip)
  document.getElementById('main').addEventListener('click', function() {
    tooltips.forEach(function(tooltip) {
      tooltip.lastChild.classList.remove('tooltip-show');
    });
  }, true);
  tooltips.forEach(function(tooltip) {
    var clickable = false;
    tooltip.addEventListener('click', function() {
      var text = this.lastChild;
      var visible = getComputedStyle(text).visibility === 'visible';
      // Must hover in order to click
      if (!visible && !clickable) {
        clickable = true;
        document.body.classList.add('touchscreen');
      }
      if (clickable) {
        // if it wasn't visible before previous step
        if (!visible) {
          text.classList.add('tooltip-show');
        }
      }
    });
  });

  // Scroll effects 
  //
  // Back to top button
  var topButton = document.getElementById('top-button');
  topButton.addEventListener('click', function() {
    scrollTo('title', 500);
  });

  // Scrolling navbar
  var navButtons = document.querySelectorAll('.navbar a');
  navButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      var section = this.getAttribute('href').slice(1);
      scrollTo(section, 400);
      e.preventDefault();
    });
  });

  // Scroll to references
  var refs = document.getElementsByClassName('ref');
  Array.prototype.forEach.call(refs, (function(ref) {
    ref.addEventListener('click', function(e) {
      var item = this.getAttribute('href').slice(1);
      scrollTo(item, 400, flash);
      e.preventDefault();
    });
  }));

  function flash(id) {
    var source = document.getElementById(id);
    source.addEventListener(transitionEndEvent, function() {
      this.classList.remove('flash');
    });
    source.classList.add('flash');
  }

  var iconScience = document.getElementById('icon-science');
  var iconHeart = document.getElementById('icon-heart');
  [iconScience, iconHeart].forEach(function(icon) {
    icon.addEventListener(transitionEndEvent, function() {
      this.style.color = '#f9c19c';
    });
  });
  var iconSingle = document.getElementById('icon-single');
  var iconMany = document.getElementById('icon-many');
  var navbar = document.getElementById('navbar');
  window.onscroll = function() {

    //Hide navbar
    navbar.classList.add('hidden');
    burger.classList.remove('close-icon');

    // Hide/reveal back to top button
    if (!inViewById('title')) {
      topButton.classList.add('reveal');
    }
    else {
      topButton.classList.remove('reveal');
    }

    // blindness animation
    if (inViewById('graphic-blindness')) {
      iconSingle.classList.add('reveal', 'reveal-left');
      iconMany.classList.add('reveal', 'reveal-right');
    }
    else {
      hideIcons(iconSingle, iconMany);
    }

    // intro animation
    if (inViewById('graphic-intro')) {
      iconScience.classList.add('reveal', 'reveal-left');
      iconHeart.classList.add('reveal', 'reveal-right');
    }
    else {
      hideIcons(iconHeart, iconScience);
    }
  }

  function hideIcons() {
    var args = Array.prototype.slice.call(arguments); 
    args.forEach(function(icon) {
      icon.style.color = '#649f94';
      icon.classList.remove('reveal', 'reveal-left', 'reveal-right');
    });
  }

  // Checks if element is in viewport
  function inViewById(id) {
    var el = document.getElementById(id);
    var rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.top >= 0 ||
      rect.bottom <= window.innerHeight && rect.bottom >= 0;
  }

  // Scroll to element with given id
  // from http://stackoverflow.com/a/8918062/3652070 
  function scrollTo(id, duration, cb) {
    var currentTop = document.documentElement.scrollTop || document.body.scrollTop;
    var targetTop = findPos(document.getElementById(id));
    var distance = targetTop - currentTop;
    var speed = distance / duration ; //pixels per millisecond
    var interval = 10;

    if (duration <= 0) {
      if (cb && typeof cb === 'function') {
        cb(id);
      }
      return;
    }

    setTimeout(function() {
      incrementScroll(speed * interval);
      scrollTo(id, duration - interval, cb);
    }, interval);

  }

  // Change current scroll position of viewport
  // accounting for browser differences
  function incrementScroll(value) {
    if (document.documentElement.scrollTop) {
      document.documentElement.scrollTop += value;
    }
    else {
      document.body.scrollTop += value;
    }
  }

  // Finds y value of top of given element
  // from http://stackoverflow.com/questions/5007530/how-do-i-scroll-to-an-element-using-javascript
  // Necessary because offsetTop gives number of px from the top of
  // the closest relatively positioned parent element
  function findPos(el) {
      var curtop = 0;
      if (el) {
          do {
              curtop += el.offsetTop;
          } while (el = el.offsetParent);
      return [curtop];
    }
  }
}
