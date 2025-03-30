// // Open (or create) the database
// const request = indexedDB.open("Cold4YouDB", 1);
// request.onupgradeneeded = function (event) {
//   console.log("Upgrade needed in IndexDB");
//   const db = event.target.result;

//   // Create an object store for the form data
//   const objectStore = db.createObjectStore("formData", { keyPath: "id", autoIncrement: true });
//   console.log("object store created");

//   // Define what data items the object store will contain
//   objectStore.createIndex("kunde", "kunde", { unique: false });
//   objectStore.createIndex("standort", "standort", { unique: false });
//   objectStore.createIndex("techniker", "techniker", { unique: false });
//   objectStore.createIndex("date1", "date1", { unique: false });
//   objectStore.createIndex("maengel1", "maengel1", { unique: false });
//   objectStore.createIndex("maengel2", "maengel2", { unique: false });
//   objectStore.createIndex("maengel3", "maengel3", { unique: false });
//   objectStore.createIndex("maengel4", "maengel4", { unique: false });
//   objectStore.createIndex("maengel5", "maengel5", { unique: false });
//   objectStore.createIndex("maengel6", "maengel6", { unique: false });
// };

// request.onerror = (event) => {
//   console.error("IndexedDB ERROR");
// };

// // Function to save form data to IndexedDB
// function saveFormData() {
//   const kundeValue = document.getElementById("kunde").value;
//   const standortValue = document.getElementById("standort").value;
//   const technikerValue = document.getElementById("techniker").value;
//   const date1Value = document.getElementById("date1").value;
//   const maengelValue1 = document.getElementById("maengel1").value;
//   const maengelValue2 = document.getElementById("maengel2").value;
//   const maengelValue3 = document.getElementById("maengel3").value;
//   const maengelValue4 = document.getElementById("maengel4").value;
//   const maengelValue5 = document.getElementById("maengel5").value;
//   const maengelValue6 = document.getElementById("maengel6").value;

//   const transaction = db.transaction(["formData"], "readwrite");
//   const objectStore = transaction.objectStore("formData");

//   const data = {
//     kunde: kundeValue,
//     standort: standortValue,
//     techniker: technikerValue,
//     date1: date1Value,
//     maengel1: maengelValue1,
//     maengel2: maengelValue2,
//     maengel3: maengelValue3,
//     maengel4: maengelValue4,
//     maengel5: maengelValue5,
//     maengel6: maengelValue6,
//   };

//   const request = objectStore.add(data);

//   request.onsuccess = function () {
//     console.log("Form data saved to IndexedDB");
//   };
// }

// // Prevent enter key from submitting form
// document.getElementById("form").addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//   }
// });

// // Call saveFormData function when form is submitted
// document.getElementById("form").onsubmit = function (event) {
//   event.preventDefault();
//   saveFormData();
//   saveAlert();
// };

// // open db and get the data from the object store
// request.onsuccess = (event) => {
//   db = event.target.result;

//   const transaction = db.transaction(["formData"], "readonly");
//   const objectStore = transaction.objectStore("formData");
//   const getAllRequest = objectStore.getAll();
//   getAllRequest.onsuccess = function (event) {
//     const data = event.target.result; // All data from the object store

//     //Display the data on the page
//     const tableBody = document.getElementById("data-table").querySelector("tbody");
//     tableBody.innerHTML = ""; // Clear existing rows

//     data.forEach((item) => {
//       const row = document.createElement("tr");

//       // Add table cells for each field
//       row.innerHTML = `
//           <td>${item.kunde || ""}</td>
//           <td>${item.standort || ""}</td>
//           <td>${item.techniker || ""}</td>
//           <td>${item.date1 || ""}</td>
//           <td>1: ${item.maengel1 || ""}</td>
//           <td>2: ${item.maengel2 || ""}</td>
//           <td>3: ${item.maengel3 || ""}</td>
//           <td>4: ${item.maengel4 || ""}</td>
//           <td>5: ${item.maengel5 || ""}</td>
//           <td>6: ${item.maengel6 || ""}</td>
//         `;

//       tableBody.appendChild(row);
//     });

//     getAllRequest.onerror = function (event) {
//       console.error("Error retrieving data:", event.target.errorCode);
//     };

//     request.onerror = function (event) {
//       console.error("Error opening database:", event.target.errorCode);
//     };
//   };
// };
