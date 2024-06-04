const bodyWeightChart = document.getElementById("weightChart");
const bodyTempChart = document.getElementById("tempChart");

function createGraphs() {
  // Create the body temperature chart
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

  // Create the body weight chart
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

//Toggle the navigation menu on narrow screens
const toggleButton = document.getElementById("navToggle");
const navListMenu = document.getElementById("navMenuList");

toggleButton.addEventListener("click", () => {
  navListMenu.classList.toggle("hide-on-narrow-screen");
});

//Adding logs
const btnLog = document.querySelector("#buttonAddLog");
const addLogModal = document.querySelector("#addLogModal");
const dialogClose = document.querySelector("#addLogModalCancel");

btnLog.addEventListener("click", () => {
  addLogModal.showModal();
});

//Close the modal by clicking the close button
dialogClose.addEventListener("click", () => {
  addLogModal.close();
});

//Close the modal by clicking outside the dialog
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

//Close medication modal
medicationCloseButton.addEventListener("click", () => {
  addMedicationModal.close();
});
//

//Add temperature to the list
let tempList = [];
const submitTempButton = document.querySelector("#submitTempButton");
submitTempButton.addEventListener("click", () => {
  let tempTime = document.querySelector("#tempTime").value;
  let tempValue = document.querySelector("#tempValue").value;
  let tempSaturation = document.querySelector("#tempSaturation").value;
  let tempSymptoms = document.querySelector("#tempSymptoms").value;
  let respFrequency = document.querySelector("#respFrequency").value;
  let tempComment = document.querySelector("#tempComment").value;

  let temp = {
    time: tempTime,
    value: tempValue,
    saturation: tempSaturation,
    symptoms: tempSymptoms,
    frequency: respFrequency,
    comment: tempComment,
  };
  tempList.push(temp);
  document.querySelector("#tempValue").value = ""; //Clear the input fields
  document.querySelector("#tempTime").value = "";
  document.querySelector("#tempSaturation").value = "";
  document.querySelector("#tempSymptoms").value = "";
  document.querySelector("#respFrequency").value = "";
  document.querySelector("#tempComment").value = "";
  alert(`Temperature ${tempValue} added successfully!`);
  console.log(tempList);
});

//Add weight and height to the list
let weightHeightList = [];
const submitHeightWeightButton = document.querySelector(
  "#submitWeigthHeightButton"
);
submitHeightWeightButton.addEventListener("click", () => {
  let weightValue = document.querySelector("#weightValue").value;
  let heightValue = document.querySelector("#heightValue").value;
  let bmiIndex = document.querySelector("#bmiIndex").value;
  let weigthHeightComment = document.querySelector(
    "#weigthHeightComment"
  ).value;

  let weightHeight = {
    weight: weightValue,
    height: heightValue,
    bmiIndex: bmiIndex,
    weigthHeightComment: weigthHeightComment,
  };
  weightHeightList.push(weightHeight);
  document.querySelector("#weightValue").value = ""; //Clear the input fields
  document.querySelector("#heightValue").value = "";
  document.querySelector("#bmiIndex").value = "";
  document.querySelector("#weigthHeightComment").value = "";

  alert(
    `Weight ${weightValue}kg and height ${heightValue}cm added successfully!`
  );

  console.log(weightHeightList); //Check the list of weight and height
  addWeigthHeightModal.close();
});

//Calculate BMI index
const calcBMI = () => {
  let weightValue = document.querySelector("#weightValue").value;
  let heightValue = document.querySelector("#heightValue").value;
  let bmiIndex = ((weightValue * 10000) / (heightValue * heightValue)).toFixed(
    1
  );
  document.querySelector("#bmiIndex").value = bmiIndex;
};

//Update BMI index
const weightInput = document.querySelector("#weightValue");
const heightInput = document.querySelector("#heightValue");
weightInput.addEventListener("change", calcBMI);
heightInput.addEventListener("change", calcBMI);

//Add medication to the list
let medicationList = [];
const submitMedicationButton = document.querySelector(
  "#submitMedicationButton"
);
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

//Change the row style in the Daily inhalation planning table
let doneRow = document.querySelector("tbody");
doneRow.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "TD") {
      ev.target.parentNode.classList.toggle("isDone");
    }
  },
  false
);
// Delete the row in the Daily inhalation planning table
let deleteRow = document.querySelector("tbody");
deleteRow.addEventListener(
  "click",
  function (ev) {
    if (
      (ev.target.parentNode.classList.contains("trashTreatment") ||
        ev.target.parentNode.parentNode.classList.contains("trashTreatment")) &&
      ev.target.parentNode.parentNode.classList.contains("isDone") // Delete only the rows with the isDone class
    ) {
      ev.target.parentNode.parentNode.remove();
    }
  },
  false
);
//
//hydration-percent
let hydrationPercent = document.getElementById("hydrationPercent");
const circle = document.querySelector("circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
let counter = 0;
let percent = 35;

setInterval(() => {
  if (counter == percent) {
    clearInterval;
  } else {
    counter++;
    hydrationPercent.innerHTML = `${counter}` + "%";
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = circumference;
    const progress = (100 - counter) / 100;
    const offset = circumference - progress * circumference;
    circle.style.strokeDashoffset = offset;
  }
}, 30);
setInterval(percent);
