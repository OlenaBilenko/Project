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
//
const toggleButton = document.getElementById("#navToggle");
const navListMenu = document.getElementById("#navMenuList");

// toggleButton.addEventListener("click", () => {
//   navToggle.classList.nav - toggle("hide");
// });
//
//Adding logs
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

//Open/close temperature modal
const tempLog = document.querySelector("#bodyTempLog");
const addTempModal = document.querySelector("#bodyTempModal");
const tempCloseButton = document.querySelector("#cancelTempButton");

tempLog.addEventListener("click", () => {
  addLogModal.close();
  addTempModal.showModal();
});

tempCloseButton.addEventListener("click", () => {
  addTempModal.close();
});

//Open/close weigth and height modal
const weigthHeightLog = document.querySelector("#bodyWeigthHeightLog");
const addWeigthHeightModal = document.querySelector("#bodyWeigthHeightModal");
const weigthHeightCloseButton = document.querySelector(
  "#cancelWeigthHeightButton"
);

weigthHeightLog.addEventListener("click", () => {
  addLogModal.close();
  addTempModal.close();
  addWeigthHeightModal.showModal();
});

weigthHeightCloseButton.addEventListener("click", () => {
  addWeigthHeightModal.close();
});

//Open/close medication modal
const medicationLog = document.querySelector("#medicationLog");
const addMedicationModal = document.querySelector("#medicationModal");
const medicationCloseButton = document.querySelector("#cancelMedicationButton");

medicationLog.addEventListener("click", () => {
  addLogModal.close();
  addTempModal.close();
  addWeigthHeightModal.close();
  addMedicationModal.showModal();
});

medicationCloseButton.addEventListener("click", () => {
  addMedicationModal.close();
});
//
const submitMedicationButton = document.querySelector(
  "#submitMedicationButton"
);

// console.log(document.querySelector("#nameMedicationModal"));
var medicationList = [];
submitMedicationButton.addEventListener("click", () => {
  // let medicationList = [];
  let nameMedicationModal = document.querySelector(
    "#nameMedicationModal"
  ).value;
  let dosageMedicationModal = document.querySelector(
    "#dosageMedicationModal"
  ).value;
  let quantityMedicationModal = document.querySelector(
    "#quantityMedicationModal"
  ).value;

  let medication = {
    name: nameMedicationModal,
    dosage: dosageMedicationModal,
    quantity: quantityMedicationModal,
  };
  medicationList.push(medication);
  document.querySelector("#nameMedicationModal").value = "";
  document.querySelector("#dosageMedicationModal").value = "";
  document.querySelector("#quantityMedicationModal").value = "";
  // addMedicationModal.close();
  alert(
    `Medication ${nameMedicationModal} ${dosageMedicationModal} qty ${quantityMedicationModal} added successfully!`
  );
  console.log(medicationList);
});
