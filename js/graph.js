// graph
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("revenueChart").getContext("2d");

  // Create a line chart
  new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Revenue ($)",
          data: [
            5000, 7000, 6000, 10000, 12300, 11000, 10500, 9800, 8500, 9000,
            13000, 15000,
          ],
          borderColor: "#b86a52",
          backgroundColor: "rgba(184, 106, 82, 0.2)",
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: "#b86a52",
          pointBorderColor: "#fff",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }, // Hide legend for a clean look
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return "$" + value; // Add dollar sign to values
            },
          },
        },
      },
    },
  });
});
