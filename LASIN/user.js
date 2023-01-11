"use script";
// HAMBERGER

/* hamburger button */
const Menubtn = document.querySelector(".menu-btn");
Menubtn.addEventListener("click", (e) => {
  Menubtn.classList.toggle("open");

  let mobileNav = document.querySelector(".mobile-Nav");
  mobileNav.classList.toggle("showMobileNav");
});

// CHART JS
const Radio = document.querySelector(".RadioStatus");
console.log(getComputedStyle(Radio).color);
var chartEl = document.getElementById("myChart");
chartEl.height = 245;
var xValues = ["Lagos Hub", "Oracle Bs", "Oracle Bs", "Oracle Bs"];
var yValue = [75, 100, 25, 50];
var barColors = "#45955C";

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValue,
        // yAxesID: "yAxes",
      },
    ],
  },

  options: {
    tooltips: {
      enabled: false,
      responsive: false,
      maintainAspectRatio: false,
    },

    legend: { display: false },
    scales: {
      xAxes: [
        {
          barThickness: 41, // number (pixels) or 'flex'
          maxBarThickness: 46,

          gridLines: {
            display: false,
            drawBoarder: true,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            // display: false,
            drawBoarder: true,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
