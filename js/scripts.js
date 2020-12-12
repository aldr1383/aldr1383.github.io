/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */

   import React from 'react'
   import ReactDOM from 'react-dom'
   
   import { Provider } from 'react-redux'
   import store from './store'
   
   
   const rootElement = document.getElementById('root')
   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     rootElement
   )
   import { connect } from 'react-redux'
   import { increment, decrement, reset } from './actionCreators'
   
   // const Counter = ...
   
   const mapStateToProps = (state /*, ownProps*/) => {
     return {
       counter: state.counter
     }
   }
   
   const mapDispatchToProps = { increment, decrement, reset }
   
   export default connect(
     mapStateToProps,
     mapDispatchToProps
   )(Counter)
   







    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;

}

//RANDOM QUOTE CHALLENGE APP

// Redux:
const QUOTE = 'QUOTE';

const changeQuote = () => {
  return {
    type: QUOTE };

};
let quote = [["A writer is someone for whom writing is more difficult than it is for other people", "Thomas Mann"], 
["A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.", "G.K. Chesterton"], 
["Anybody who has survived his childhood has enough information about life to last him the rest of his days.", "Flannery O'connor"], 
["A story is a letter that the author writes to himself, to tell himself things that he would be unable to discover otherwise.", "Carlos Ruiz Zafón"], 
["Authors like cats because they are such quiet, lovable, wise creatures, and cats like authors for the same reasons.", "Robertson Davies"]];

let hop = [];
let m = Math.floor(Math.random() * quote.length);
const quoteChanger = (state = m, action) => {
  let random = Math.floor(Math.random() * quote.length);
  if (random != m) {
    m = random;
    return quote[m];
  } else
  {
    while (random == m) {
      random = Math.floor(Math.random() * quote.length);
    }
    m = random;
    return quote[m];
  }
};

const store = Redux.createStore(quoteChanger);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '' };

    this.changeQuote = this.changeQuote.bind(this);
    this.authorIs = this.authorIs.bind(this);

  }
  changeQuote() {
    this.props.submitNewQuote();
  }
  authorIs() {
    this.props.submitNewAuthor();
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { id: "buttons", className: "row text-center col-lg-6 col-lg-offset-3" },
      React.createElement("button", { id: "new-quote", className: "btn btn-primary btn-sm col-xs-3 col-xs-offset-2", onClick: this.changeQuote }, "Quote"),
      React.createElement("a", { id: "tweet-quote", href: "twitter.com/intent/tweet", className: "col-xs-3 col-xs-offset-2" }, React.createElement("i", { className: "fab fa-twitter fa-lg" }))),

      React.createElement("div", { id: "main" },
      React.createElement("div", { className: "row" },
      React.createElement("h1", { className: "text-center col-lg-6 col-lg-offset-3", id: "text" }, this.props.quotes[0])),

      React.createElement("div", { className: "row" },
      React.createElement("p", { className: "text-center", id: "author" }, this.props.quotes[1])))));




  }}
;

// React-Redux
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const mapStateToProps = state => {
  return { quotes: state };
};

const mapDispatchToProps = dispatch => {
  return {
    submitNewQuote: () => {
      dispatch(changeQuote());
    } };

};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      React.createElement(Provider, { store: store },
      React.createElement(Container, null)));


  }}
;

ReactDOM.render(React.createElement(AppWrapper, null), document.getElementById('quote-box'));



