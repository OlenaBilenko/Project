const bodyWeightChart = document.getElementById("weightChart");
const bodyTempChart = document.getElementById("tempChart");

new Chart(bodyTempChart, {
  type: "line",
  data: {
    labels: [
      "2022-01-01",
      "2022-02-01",
      "2022-03-01",
      "2022-04-01",
      "2022-05-01",
      "2022-06-01",
    ], // Changed to date strings
    datasets: [
      {
        //   label: '# of Votes',
        data: [36.3, 37, 37.3, 39, 38, 37.3],
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        type: "time", // Added to parse dates on the x-axis
        time: {
          unit: "hour", // Can be 'day', 'week', 'month', etc.
          displayFormats: {
            hour: "HH:mm", // Change this to your preferred display format
          },
        },
      },
      y: {
        beginAtZero: false,
      },
    },
  },
});

new Chart(bodyWeightChart, {
  type: "line",
  data: {
    labels: [
      "2022-01-01",
      "2022-02-01",
      "2022-03-01",
      "2022-04-01",
      "2022-05-01",
      "2022-06-01",
    ], // Changed to date strings
    datasets: [
      {
        //   label: '# of Votes',
        data: [38.5, 37.1, 37.8, 39.2, 38.8, 37.3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        type: "time", // Added to parse dates on the x-axis
        time: {
          unit: "hour", // Can be 'day', 'week', 'month', etc.
          displayFormats: {
            hour: "HH:mm", // Change this to your preferred display format
          },
        },
      },
      y: {
        beginAtZero: false,
      },
    },
  },
});

async function loadHtml(name) {
  const response = await fetch(name);
  const html = await response.text();
  document.body.innerHTML += html;
}
loadHtml("./log-modal/log-modal.html");
