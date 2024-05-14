const bodyWeightChart = document.getElementById("weightChart");
const bodyTempChart = document.getElementById("tempChart");

function createGraphs() {
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
          borderColor: "#484282",
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
          backgroundColor: "rgb(255, 127, 80)",
          borderColor: "rgb(255, 127, 80)",
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
}
createGraphs();
// async function loadHtml(name) {
//   const response = await fetch(name);
//   const html = await response.text();
//   document.getElementById("morecontent").innerHTML += html;
// }

// async function init() {
//   await loadHtml("./log-modal/log-modal.html");
//   createGraphs();
// }

const btnLog = document.querySelector("#buttonAddLog");
const addLogModal = document.querySelector("#addLogModal");
const dialogClose = document.querySelector("#addLogModalCancel");

btnLog.addEventListener("click", () => {
  addLogModal.showModal();
});

dialogClose.addEventListener("click", () => {
  addLogModal.close();
});

addLogModal.addEventListener("click", (e) => {
  const dialogDimensions = addLogModal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    addLogModal.close();
  }
});
const tempLog = document.querySelector("#bodyTempLog");
const addTempModal = document.querySelector("#bodyTempModal");
const tempCloseButton = document.querySelector("#cancelButton");

tempLog.addEventListener("click", () => {
  addLogModal.close();
  addTempModal.showModal();
});

tempCloseButton.addEventListener("click", () => {
  addTempModal.close();
});
