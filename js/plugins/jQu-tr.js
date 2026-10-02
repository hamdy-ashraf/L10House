//------------------ Slectors ---------------------------//

let myBoxsPart1 = document.querySelectorAll(".part1 .box"); // select all elements by JS
let $myBoxsPart1 = $(".part1 .box"); // select all elements by jQuery

let myFirstBox = document.querySelectorAll(".part1 .box"); // select the first element by JS

// select any element through indexed by jQuery
let $myFirstBoxPart1 = $(".part1 .box").get(0), // get() is a method in jQuery object and transform from jQuery object to JS element
  $mySecondBoxPart1 = $(".part1 .box").eq(1), // eq() is a method in jQuery object
  $myThirdBoxPart1 = $(".part1 .box")[2]; // [] take indexed and transform from jQuery object to JS element

let $myJsBoxesPart1 = $(myBoxsPart1); // transform from JS to jQuery Object


//------------------ Events ---------------------------//
// Every events in JS, exit in jQuery

$(".part2 .box").click(function () {
  console.log("ok");
});

// mouse enter event
$(".part2 .box").mouseenter(function () {
  console.log("ok");
});

// mouse leave event
$(".part2 .box").mouseleave(function () {
  console.log("ok");
});

// hover() is a method combin with (mouse enter and mouse leave) event through two functions
// First function: fire mouse enter event
// second function: fire mouse leave event
$(".part2 .box").hover(
  function () {
    console.log("ok");
  },
  function () {
    console.log("ok");
  },
);

// on() is a method like addEventListiner in JS, but on() can take more than one event
// syntax: element.on("event1 event2 ...", function(){})
$(".part2 .box").on("click mouseenter mouseleave", function () {
  console.log("done1");
});

// one() is a method like on() method exactlly, but events executed only once
$(".part2 .box").one("click mouseenter mouseleave", function () {
  console.log("done2");
});

// when you want to every event has depend function, pass object to the method like next example
$(".part2 .box").on({
  "click": function () {
    console.log("click");
  },
  "moseenter": function () {
    console.log("moseenter");
  },
  "moseleave": function () {
    console.log("moseleave");
  },
});


//------------------ Effects ---------------------------//
// All this methods take call back function in the second argument at effect method

// hide() is method to hide element through transform in width and height, also take time to execut the effect
$("#Hide").click(function () {
  $(".part3 .box").hide(500);
});

// show() is method to show element through transform in width and height, also take time to execut the effect
$("#Show").click(function () {
  $(".part3 .box").show(1000);
});

// toggle() is method to show and hide element through transform in width and height, also take time to execut the effect
$("#Toggle").click(function () {
  $(".part3 .box").toggle(250);
});

// fadeOut() is a method to hide element through transform opacity to zero and add display none to element
$("#FadeOut").click(function () {
  $(".part3 .box").fadeOut(500);
});

// fadeIn() is a method to show element through transform opacity to one and remove display none from element
$("#FadeIn").click(function () {
  $(".part3 .box").fadeIn(500);
});

// fadeToggle() is a method to show and hide element through transform opacity and add or remove display none to element
$("#FadeToggle").click(function () {
  $(".part3 .box").fadeToggle(500);
});

// fadeTo() is a method to transform opacity to spacific value
$("#FadeTo").on({
  "click": function () {
    $(".part3 .box").fadeTo(500, 1);
  },
  "mouseenter": function () {
    $(".part3 .box").fadeTo(500, 0.5);
  },
});

// If you want delay, set "delay()" between the element and effect method
$("#FadeOutDelay").click(function () {
  $(".part3 .box").delay(500).fadeOut(500);
});

// slideUp() is a method to take effect like slider through transform in height from 100% to 0%
$("#SlideUp").click(function () {
  $(".part3 .box").slideUp(500);
});

// slideDown() is a method to take effect like slider through transform in height from 0% to 100%
$("#SlideDown").click(function () {
  $(".part3 .box").slideDown(500);
});

// slideToggle() is a method to take effect like slider through transform in height
$("#SlideToggle").click(function () {
  $(".part3 .box").slideToggle(500);
});


//------------------ Animation ---------------------------//
// animate() is a method to take element animation and take:

// First argument: object contains option of animate
// Second argument: number of duration
// All options executed in the same time !!!!!!!!!!!!!
$(".part4 .btn1").click(function () {
  $(".part4 .box").animate(
    {
      width: "300px",
      height: "300px",
    },
    1000,
  );
});

// Another way, but the second argument is object
$(".part4 .btn2").click(function () {
  $(".part4 .box").animate(
    {
      width: "300px",
      height: "300px",
    },
    {
      duration: 1000,
      queue: false, // By defult queue is true
    },
  );
});

// First argument: object contains option of animate
// Second argument: number of duration
// All options executed in NOT the same time !!!!!!!!!!!!!
// width is executed before height
$(".part4 .btn3").click(function () {
  $(".part4 .box").animate(
    {
      width: "300px",
    },
    1000,
  );

  $(".part4 .box").animate(
    {
      height: "300px",
    },
    1000,
  );
});

// stop() is a method to stop animation on the element
$(".part4 .btn4").click(function () {
  $(".part4 .box").stop();
});


//------------------ Elements and Texts Creation ---------------------------//

// html() is a method to push code in html like (innerHTML property) in JS
$(".part5 .btn1").click(function () {
  $(".part5 .box1").html("<h1>Hello</h1>");
});

// text() is a method to push text in html like (textContent property) in JS
$(".part5 .btn2").click(function () {
  $(".part5 .box2").text("Hamdy");
});

// append() is a method to add code or text to the end of element like (append() method) in JS
$(".part5 .btn3").click(function () {
  $(".part5 .box3").append("<p>append</p>");
});

// prepend() is a method to add code or text to the beginning of element like (prepend() method) in JS
$(".part5 .btn4").click(function () {
  $(".part5 .box4").prepend("<p>prepend</p>");
});

// before() is a method to add code or text before the element like (before() method) in JS
$(".part5 .btn5").click(function () {
  $(".part5 .box5").before("before");
});

// after() is a method to add code or text after the element like (after() method) in JS
$(".part5 .btn6").click(function () {
  $(".part5 .box6").after("after");
});

// replaceWith() is a method to replace element by element
$(".part5 .btn7").click(function () {
  $(".part5 .box7 p").replaceWith("<h2>replace</h2>");
});

// remove() is a method to remove the element like (remove() method) in JS
$(".part5 .btn8").click(function () {
  $(".part5 .box8 p").remove("<h2>replace</h2>");
});

// remove() is a method to clear the element
$(".part5 .btn9").click(function () {
  $(".part5 .box9 p").empty("<h2>replace</h2>");
});


//------------------ Get and Set Attributes ---------------------------//

// attr() is a method to
// => set get attribute through pass the attribute name and value
$(".part5 .btn9").click(function () {
  console.log($(".part5 .box9").attr("data-name", "omar"));
});

// => get attribute through pass the attribute name only
$(".part5 .btn9").click(function () {
  console.log($(".part5 .box9").attr("data-id"));
});


//------------------ Distance ---------------------------//

// offset() is a method that determained the position of element relative to its document
$(".part6 .btn1").click(function () {
  $(".part6 .inner-box").offset();
});

// when you want to determained the position of elemen yourself, pass object to offset method
$(".part6 .btn1").click(function () {
  $(".part6 .inner-box").offset({
    top: "1300",
  });
});

// position() is a method that determained the position of element relative to its parent that take position
$(".part6 .btn2").click(function () {
  $(".part6 .inner-box").position({
    top: "1300",
  });
});

// width() is a method take element width 
$(".part6 .btn3").click(function () {
  console.log($(".part6 .box1").width());
});

// innerWidth() is a method take element  width + padding
$(".part6 .btn4").click(function () {
  console.log($(".part6 .box1").innerWidth());
});

// outerWidth() is a method take element width + padding + border
$(".part6 .btn5").click(function () {
  console.log($(".part6 .box1").outerWidth());
});

// outerWidth(true) is a method take element width + padding + border + margin
$(".part6 .btn6").click(function () {
  console.log($(".part6 .box1").outerWidth(true));
});

// height() is a method take element height 
$(".part6 .btn7").click(function () {
  console.log($(".part6 .box2").height());
});

// innerHeight() is a method take element  height + padding
$(".part6 .btn8").click(function () {
  console.log($(".part6 .box2").innerHeight());
});

// outerHeight() is a method take element height + padding + border
$(".part6 .btn9").click(function () {
  console.log($(".part6 .box2").outerHeight());
});

// outerHeight(true) is a method take element height + padding + border + margin
$(".part6 .btn10").click(function () {
  console.log($(".part6 .box2").outerHeight(true));
});


//------------------ children position ---------------------------//

// wrap() is a method is put the element in another element
// Syntax: childElement.wrap(parentElement)
$(".part7 .btn1").click(function () {
  $(".part7 .child1").wrap("<div class='parent'>text</div>");
});

// unwrap() is a method is removes the element from another element
$(".part7 .btn2").click(function () {
  $(".part7 .child2").unwrap(".parent");
});


//------------------ Set CSS Properties ---------------------------//

// css() is a method to take css style throuth pass object contains css properties
$(".part8 .btn1").click(function () {
  $(".part8 .box1").css({
    width: "200px",
    height: "200px",
    backgroundColor: "#f00",
  });
});

// has() ia a method check if the element conatains this element (has argument) and return object can call methods through it
$(".part8 .btn2").click(function () {
  $(".part8 .box2").has(".child").css({
    width: "200px",
    height: "200px",
    backgroundColor: "#f00",
  });
});

// is() is a method check if the element conatains this element (is argument) and return true or false can NOT call methods through it
$(".part8 .btn1").click(function () {
  $(".part8 .box1").is(".child");
});


//------------------ How to fire event on element before creation ---------------------------//
$(".part9 .btn1").click(function(){
    $(".part9 .box").html(`<button class="btn btn2 btn-warning">Go</button>`)
});

//  in this case, on() can pass three arguments like this ("event", "selector", function(){})
// on() is monitored the ".box" until "button" create to execute the event on it
$(".part9 .box").on("click", "button", function () {
  console.log("ok");
});


//------------------ Add and Remove Classes ---------------------------//

// addClass() is a method to add class to element
$(".part10 .btn1").click(function () {
  $(".part10 .box1").addClass("active");
});

// removeClass() is a method to remove class from element
$(".part10 .btn2").click(function () {
  $(".part10 .box1").removeClass("active");
});

// toggleClass() is a method to add or remove class for element
$(".part10 .btn3").click(function () {
  $(".part10 .box1").toggleClass("active");
});

// hasClass() is a method to check if class is exit in element or not and return true or false
$(".part10 .btn4").click(function () {
  console.log($(".part10 .box1").hasClass("active"));
});


//------------------ Navigator ---------------------------//

// parent() is a method return the direct parent of element
console.log($(".part11 .child-inner").parent());

// if this method take argument as selector, the method return this parent if exit
console.log($(".part11 .child-inner").parent(".box-inner"));

// parents() is a method return all parents of element
console.log($(".part11 .child-inner").parents());

// parents() is a method return all parents of element unte
console.log($(".part11 .child-inner").parents(".box1"));

// parents() is a method return all parents of element until ".box"
// parents() can take filter in the second argument
console.log($(".part11 .child-inner").parentsUntil(".box1"));

// children() is a method return all direct children of element
console.log($(".part11").children());

// return all direct children if element contains ".box-inner"
console.log($(".part11").children(".box-inner"));

// children().first() return the first direct child
console.log($(".part11").children().first());

// children().last() return the last direct child
console.log($(".part11").children().last());

// children().filter() return all direct children if element contains ".box-inner"
console.log($(".part11").children().filter(".box-inner"));

// children().not() return all direct children exept ".box" 
console.log($(".part11").children().not(".box"));

// siblings() is a method return all siblings of element
console.log($(".part11").siblings());

// next() is a method return first next siblings of element
console.log($(".part11").next());

// next() is a method return all next siblings of element
console.log($(".part11").nextAll());

// nextUntil() is a method return all next siblings until "part11"
console.log($(".part6").nextUntil(".part11"));

// prev() is a method return first previous siblings of element
console.log($(".part11").prev());

// prev() is a method return all previous siblings of element
console.log($(".part11").prevAll());

// prevUntil() is a method return all previous siblings until "part9"
console.log($(".part11").prevUntil(".part9"));


//------------------ Inputs ---------------------------//

// val() is a method return the value of input
$(".inputBtn").click(function(){
    $("input").val("hamdy")
})

// prop() is a method return if property is exit or not (true, false)
$(".inputBtn").click(function(){
    console.log($("input").prop("disabled", false))
})