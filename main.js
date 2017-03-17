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

  // Toggle menu
  var burger = document.getElementById("burger");
  burger.onclick = function() {
    var menu = document.getElementById('navbar');
    this.classList.toggle('close-icon');
    menu.classList.toggle('hidden');
  }

  // Scroll effects 
  // Back to top button
  var topButton = document.getElementById('top-button');
  topButton.addEventListener('click', function() {
    scrollTo('title', 500);
  });
  // scrolling navbar
  var navButtons = document.querySelectorAll('.navbar a');
  navButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      var section = e.target.getAttribute('href').slice(1);
      scrollTo(section, 400);
      e.preventDefault();
    });
  });
  var iconScience = document.getElementById('icon-science');
  var iconHeart = document.getElementById('icon-heart');
  var introIcons = [iconScience, iconHeart];
  introIcons.forEach(function(icon) {
    icon.addEventListener(transitionEndEvent, function(e) {
      e.target.style.color = '#f9c19c';
    });
  });
  var iconSingle = document.getElementById('icon-single');
  var iconMany = document.getElementById('icon-many');
  window.onscroll = function() {
    //Hide navbar
    var navbar = document.getElementById('navbar');
    navbar.classList.add('hidden');
    var burger = document.getElementById('burger');
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
      iconSingle.classList.remove('reveal', 'reveal-left');
      iconMany.classList.remove('reveal', 'reveal-right');
    }
    // intro animation
    if (inViewById('graphic-intro')) {
      iconScience.classList.add('reveal', 'reveal-left');
      iconHeart.classList.add('reveal', 'reveal-right');
    }
    else {
      iconHeart.style.color = '#649f94';
      iconScience.style.color = '#649f94';
      iconScience.classList.remove('reveal', 'reveal-left');
      iconHeart.classList.remove('reveal', 'reveal-right');
    }
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
  function scrollTo(id, duration) {
    var currentTop = document.documentElement.scrollTop || document.body.scrollTop;
    var targetTop = findPos(document.getElementById(id));
    var distance = targetTop - currentTop;
    var speed = distance / duration ; //pixels per millisecond
    var interval = 10;

    if (duration <= 0) {
      return;
    }

    setTimeout(function() {
      incrementScroll(speed * interval);
      scrollTo(id, duration - interval);
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
  /*
  // Toggle source list
  var sourceButton = document.getElementById('source-button');
  var sourceList = document.getElementById('sources');
  sourceButton.addEventListener('click', function(e) {
    sourceList.classList.toggle('reveal-sources');
    sourceButton.classList.toggle('ion-plus-circled');
    sourceButton.classList.toggle('ion-minus-circled');
  });
  */
}
