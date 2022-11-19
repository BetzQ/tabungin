// Count Monthly Savings

function monthSaving() {
  let valInputNom = $(".inputNom").val();
  let valInputMS = $(".inputMS").val();
  let vi1 = valInputNom / valInputMS;
  $(".ResultMSNum").html(Math.round(vi1).toLocaleString());
  if (valInputMS == "") {
    $(".ResultMSNum").html("...");
  }
}

$(".inputMS,.inputNom").on("keyup", function() {
  monthSaving();
});
$(".inputMS,.inputNom").on("change", function() {
  monthSaving();
});

// Tangal target
$(".inputTD").on("change", function() {
  countMonthly();
});
$(".inputNom").on("keyup", function() {
  countMonthly();
});
// Function Count Monthly Savings
function countMonthly() {
  // Data Set
  let valInputNom = $(".inputNom").val();
  // Recent Date
  var today = new Date();
  let todayYear = today.getFullYear();
  let todayMonth = today.getMonth() + 1;
  // ##########
  let valInputTD = $(".inputTD").val();
  var d = new Date(valInputTD);
  let valInputTDyear = d.getFullYear();
  let valInputTDmonth = d.getMonth() + 1;
  //  ###########
  // calculation
  let dividedYear = valInputTDyear - todayYear;
  if (dividedYear == 1) {
    dividedYear = 0;
  } else {
    dividedYear -= 1;
    dividedYear *= 12;
  }
  let dividedMonth = 12 - todayMonth;
  let increase = dividedMonth + dividedYear + valInputTDmonth;
  let result = (valInputNom /= increase);
  let resultYear = increase / 12;
  let resultMonth = increase % 12;
  // ############
  $(".ResultTDNum").html(Math.round(result).toLocaleString());
  $(".ResultTDNum2").html(increase + " bulan ");
  if (resultYear < 1) {
  } else if (resultYear >= 1) {
    $(".ResultTDNum3").html(
      "or " +
      Math.round(resultYear) +
      " year " +
      Math.round(resultMonth) +
      " month."
    );
  }
  if (!valInputTD) {
    $(".ResultTDNum").html("...");
    $(".ResultTDNum2").html("...");
  }
}
// ##############################
// Pension Fund
var inputPF = document.querySelector("#inputPF1");

function pensionFund() {
  inputPF1 = inputPF.value;
  inputPF2 = inputPF1 * 12 * 30;
  $(".pensionFund").html(inputPF2.toLocaleString());

  if (!inputPF1) {
    $(".pensionFund").html("...");
  }
}

inputPF.addEventListener("keyup", function() {
  pensionFund();
});
inputPF.addEventListener("change", function() {
  pensionFund();
});
// Button choose way to count
$(".BCW").css("background-color", "rgb(215, 0, 235)");
$(".buttonCW").css({ "background-color": "", opacity: "0.7" });
$(".buttonCW").click(function() {
  $(".targetDate").removeClass("d-none");
  $(".monthlySavings").addClass("d-none");
  $(".buttonCW")
    .css({ "background-color": "rgb(215, 0, 235)", opacity: "1" })
    .addClass("OPCT");
  $(".BCW")
    .css({ "background-color": "", opacity: "0.7" })
    .removeClass("OPCT");
  $(".ResultTD").removeClass("d-none");
  $(".ResultMS").addClass("d-none");
});
$(".BCW").click(function() {
  $(".monthlySavings").removeClass("d-none");
  $(".targetDate").addClass("d-none");
  $(".buttonCW")
    .css({ "background-color": "", opacity: "0.7" })
    .removeClass("OPCT");
  $(".BCW")
    .css({ "background-color": "rgb(215, 0, 235)", opacity: "1" })
    .addClass("OPCT");
  $(".ResultMS").removeClass("d-none");
  $(".ResultTD").addClass("d-none");
});
$(".buttonCW").mouseenter(function() {
  if ($(".buttonCW").hasClass("OPCT")) {
  } else {
    $(".buttonCW").css("opacity", "0.9");
  }
});
$(".buttonCW").mouseleave(function() {
  if ($(".buttonCW").hasClass("OPCT")) {
  } else {
    $(".buttonCW").css("opacity", "0.7");
  }
});
$(".BCW").mouseenter(function() {
  if ($(".BCW").hasClass("OPCT")) {
  } else {
    $(".BCW").css("opacity", "0.9");
  }
});

$(".BCW").mouseleave(function() {
  if ($(".BCW").hasClass("OPCT")) {
  } else {
    $(".BCW").css("opacity", "0.7");
  }
});
// ##########################
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// LOCALSTORAGE FOR SAVE DARKMODE ##########################
var darkMode1;

if (localStorage.getItem("dark-mode")) {
  darkMode1 = localStorage.getItem("dark-mode");
} else {
  darkMode1 = "light";
}

// set new localStorage value
localStorage.setItem("dark-mode", darkMode1);

if (localStorage.getItem("dark-mode") == "dark") {
  darkNav();
  buttonNightNode("bg-light", "bg-dark");
} else {
  lightNav();
  buttonNightNode("bg-dark", "bg-light");
}

// #####################################

// Desktop Night Mode
function buttonNightNode(a, b) {
  $("#toNightMode").removeClass(a).addClass(b);
}
function darkNav() {
  $(".navbar-expand-lg")
    .removeClass("navbar-light bg-light")
    .addClass("navbar-dark bg-dark");
  $(".toggleWhenMobile")
    .removeClass("bg-light text-dark")
    .addClass("bg-dark text-light");
  $("#mobileToNightMode").removeClass("bg-light").addClass("bg-dark")
    .html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill text-white" viewBox="0 0 16 16">
    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
  </svg>`);
  $("#toNightMode")
    .html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill text-white" viewBox="0 0 16 16">
    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
  </svg>`);
  $(".Content,.Signup").removeClass("bg-light").addClass("bg-dark");
  $("h1,h2,h5,h6,p,label,a").removeClass("text-dark").addClass("text-light");
  $(".sidenav,a").css("transition", "0s");
  $(".saveNote").removeClass("btn-light").addClass("btn-dark");
}
function lightNav() {
  $(".navbar-expand-lg")
    .removeClass("navbar-dark")
    .removeClass("bg-dark")
    .addClass("navbar-light")
    .addClass("bg-light");
  $(".toggleWhenMobile")
    .addClass("bg-light")
    .addClass("text-dark")
    .removeClass("bg-dark")
    .removeClass("text-light");
  $("#mobileToNightMode")
    .removeClass("bg-dark")
    .addClass("bg-light")
    .html(`<i class="bi bi-moon-fill"></i>`);
  $("#toNightMode").html(`<i class="bi bi-moon-fill"></i>`);
  $(".Content,.Signup").removeClass("bg-dark").addClass("bg-light");
  $("h1,h2,h5,h6,p,label,a").removeClass("text-light").addClass("text-dark");
  $(".sidenav,a").css("transition", "0s");
  $(".saveNote").removeClass("btn-dark").addClass("btn-light");
}
$("#toNightMode").click(function() {
  if ($(".navbar-expand-lg").hasClass("navbar-light")) {
    darkNav();
    buttonNightNode("bg-light", "bg-dark");
    localStorage.setItem("dark-mode", "dark");
  } else {
    lightNav();
    buttonNightNode("bg-dark", "bg-light");
    localStorage.setItem("dark-mode", "light");
  }
});
