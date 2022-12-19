
var tabs = $('.tabs');
var selector = $('.tabs').find('a').length;

var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
var activeH = activeItem.innerHeight();

var selectorWidth = $(".selector").innerWidth();


function selectorMove (boxLeftPos , boxWidth) {
  gsap.to(".selector",{
    left:boxLeftPos -50 +(boxWidth/2),
    ease:"none",
    duration:1,
    delay:.5,
  })
};

$(".tabs").on("click","a",function(e){
  e.preventDefault();
    
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  //console.log($(this).text())
  
  
  //Change Background Color And Links Font Color Based On Clicked Item
  var getMainColor = $(this).attr("main-color");
  var getSecondaryColor = $(this).attr("secondary-color");

 
  $(":root").css('--mainColor', getMainColor); 
  $(":root").css('--secondaryColor', getSecondaryColor); 
  $("a").css("color","#202124")
  $(this).css("color",getSecondaryColor)

  ////////Move the selector (Ballon)
  var activeWidth = $(this).innerWidth();
  var activeH = $(this).innerHeight();
  var itemPosition = $(this).position();
  var itemW = $(this).width();

   selectorMove(itemPosition.left , activeWidth);

  //Show - Hide The Sections Whose Realted To the Link
  var buttonText = $(".active").text().toLowerCase().trim();
  
  if(buttonText.search("info")>-1) {
    $(".tourism_program , .vip_program").hide();
    $(".info").show().addClass("scale-up-top");
    
  }
  if(buttonText.search("tourism")>-1) {
    $(".info , .vip_program").hide();
       $(".tourism_program").show();
  }
  if(buttonText.search("vip")>-1) {
    $(".tourism_program , .info").hide();
    $(".vip_program").show();
  }
  //else console.log(buttonText)

  //show hide + move  settings Function 
  var targetNavLinhk = $(e.target);

  var settingElement =$(".setting");
  // if($(this).text().trim()==""){ //+ هنا استدعي الفنكشن
    

});



//#region //- Function : Centering An Element Based on Clicked Another Element

function CenterOnClick(element , target) {

  var targetVarible = $(target);
  var clickedElement = $(element);
  
  var targetVaribleWidth = targetVarible.outerWidth();
  var clickedElementPosition = clickedElement.offset();
  var clickedElementWidth = clickedElement.outerWidth();
  var clickedElementHight = clickedElement.outerHeight();

  var goTopVarible   = clickedElementPosition.top + clickedElementHight +15+10//last 10 for animation purous;
  var goLeftVarible   = ((clickedElementWidth - targetVaribleWidth) / 2) +clickedElementPosition.left;

  targetVarible.css({ left: goLeftVarible , top : goTopVarible });
  
  

}
$(".rrt").on("click", function (){
 
  CenterOnClick(".rrt",".setting");

  $(".setting").fadeToggle()

});
//#endregion

$( window ).on("resize",function(e){
    
    e.preventDefault();
    // Moving The Selector(Hot Air Ballon) Based On Resize The Window
    var activeWidth = $(".active").innerWidth();
    var itemPosition = $(".active").position();
    
    selectorMove(itemPosition.left , activeWidth);
    //End
    //- Moving The Clouds Based On Resize The Window
    var tabsDivLength = $(".tabs").innerWidth();
    console.log("tabs w rrr: " + tabsDivLength)
    tl.clear()
      .then(tl.to([".cloud1" , ".cloud2"],{
        duration:2,
        
        left:0,

      }))
      .then(tl.to(".cloud1",{
        left:tabsDivLength -50,
        duration:7.5,
        yoyo:true,
       
        repeat:-1,
        ease:"none"
       }).to(".cloud2",{
        left:tabsDivLength -50,
        duration:11.0,
        yoyo:true,
        repeat:-1,
        ease:"none"
      },"<")
       )

  


  });

//#region //-Clouds Move
var tabsDivLength = $(".tabs").innerWidth();
console.log("tabs w : " + tabsDivLength)
var tl = gsap.timeline();
tl.to(".cloud1",{
  left:tabsDivLength -50,
  duration:7.5,
  yoyo:true,
  repeat:-1,
  ease:"none"
}).to(".cloud2",{
  left:tabsDivLength -50,
  duration:11.0,
  yoyo:true,
  repeat:-1,
  ease:"none"
},"<")

//#endregion

//#region //-Random Floating Animation

const randomX = random(1, 10);
const randomY = random(1, 10);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(-10, 10);

const cans = gsap.utils.toArray('.selector');
cans.forEach(can => {
  gsap.set(can, {
    x: randomX(-1),
    y: randomY(1),
    rotation: randomAngle(-1)
  });

  moveX(can, 1);
  moveY(can, -1);
  rotate(can, 1);
});

function rotate(target, direction) {
  
  gsap.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  
  gsap.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  gsap.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}



// //#endregion



//#region //-Setting Form


//#endregion

//#region //- THEME SWITCHER

//  // function to set a given theme/color-scheme
//  function setTheme(themeName) {
//   localStorage.setItem('theme', themeName);
//   document.documentElement.className = themeName;
// }

// // function to toggle between light and dark theme
// function toggleTheme() {
//   if (localStorage.getItem('theme') === 'theme-dark') {
//       setTheme('theme-light');
//   } else {
//       setTheme('theme-dark');
//   }
// }

// // Immediately invoked function to set the theme on initial load
// (function () {
//   if (localStorage.getItem('theme') === 'theme-dark') {
//       setTheme('theme-dark');
//       document.getElementById('slider').checked = false;
//   } else {
//       setTheme('theme-light');
//     document.getElementById('slider').checked = true;
//   }
// })();

//#endregion