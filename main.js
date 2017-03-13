window.onload = function() {
  // Toggle menu
  var burger = document.getElementById("burger");
  burger.onclick = function() {
    var menu = document.getElementById('navbar');
    this.classList.toggle('close-icon');
    menu.classList.toggle('hidden');
  }

  // Scroll effects 
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
  window.onscroll = function() {
    var iconSingle = document.getElementById('icon-single');
    var iconMany = document.getElementById('icon-many');
    var iconScience = document.getElementById('icon-science');
    var iconHeart = document.getElementById('icon-heart');
    var topButton = document.getElementById('top-button');
    // scrolling back to top button
    if (!inSectionById('title', 10)) {
      topButton.classList.add('reveal');
    }
    else {
      topButton.classList.remove('reveal', 'reveal-right');
    }
    // blindness animation
    if (inSectionById('ideas', -300)) {
      iconSingle.classList.add('reveal', 'reveal-left');
      iconMany.classList.add('reveal', 'reveal-right');
    }
    // intro animation
    else if (inSectionById('intro', 300)) {
      iconScience.classList.add('reveal', 'reveal-left');
      iconHeart.classList.add('reveal', 'reveal-right');
      setTimeout(function() {
        iconHeart.style.color = '#f9c19c';
        iconScience.style.color = '#f9c19c';
      }, 1000);
    }
  }

  // Checks if top of viewport is in section given by id
  function inSectionById(id, buffer) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var section = document.getElementById(id);
    var sectionTop = findPos(section);
    var nextSectionTop = findPos(section.nextElementSibling);
    return (scrollTop > sectionTop - buffer) && (scrollTop < nextSectionTop);
  }
  // from http://stackoverflow.com/a/8918062/3652070 
  function scrollTo(id, duration) {
    var currentTop = document.documentElement.scrollTop || document.body.scrollTop;
    var targetTop = findPos(document.getElementById(id));
    if (duration <= 0) {
      return;
    }

    var distance = targetTop - currentTop;
    var speed = distance / duration * 10; //pixels per millisecond
    console.log(speed, duration, currentTop);

    setTimeout(function() {
      incrementScroll(speed);
      if (currentTop === targetTop) {
        return;
      }
      scrollTo(id, duration - 10);
    }, 10);
  }
  function incrementScroll(value) {
    if (document.documentElement.scrollTop) {
      document.documentElement.scrollTop += value;
    }
    else {
      document.body.scrollTop += value;
    }
  }

  // Finds y value of given object
  // from http://stackoverflow.com/questions/5007530/how-do-i-scroll-to-an-element-using-javascript
  function findPos(obj) {
      var curtop = 0;
      if (obj.offsetParent) {
          do {
              curtop += obj.offsetTop;
          } while (obj = obj.offsetParent);
      return [curtop];
    }
  }

}
