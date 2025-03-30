// Open (or create) the database

// // Function to save form data to IndexedDB

// // Prevent enter key from submitting form
// document.getElementById("form").addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//   }
// });

// // Call saveFormData function when form is submitted
// //  document.getElementById("form").onsubmit = function() {
// //       saveFormData();
// //       saveAlert();
// //     };

// //     // open db and get the data from the object store
// //   request.onsuccess = (event) => {
// //   db = event.target.result;

// //  const transaction = db.transaction(["formData"], "readonly");
// //  const objectStore = transaction.objectStore("formData");
// //  const getAllRequest = objectStore.getAll();
// //  getAllRequest.onsuccess = function(event) {
// //  const data = event.target.result; // All data from the object store

// // //Display the data on the page
// //     const tableBody = document.getElementById("data-table").querySelector("tbody");
// //       tableBody.innerHTML = ""; // Clear existing rows

// //       data.forEach((item) => {
// //         const row = document.createElement("tr");

// //         // Add table cells for each field
// //         row.innerHTML = `
// //           <td>${item.kunde || ""}</td>
// //           <td>${item.standort || ""}</td>
// //           <td>${item.techniker || ""}</td>
// //           <td>${item.date1 || ""}</td>
// //           <td>1: ${item.maengel1 || ""}</td>
// //           <td>2: ${item.maengel2 || ""}</td>
// //           <td>3: ${item.maengel3 || ""}</td>
// //           <td>4: ${item.maengel4 || ""}</td>
// //           <td>5: ${item.maengel5 || ""}</td>
// //           <td>6: ${item.maengel6 || ""}</td>
// //         `

// //         tableBody.appendChild(row);
// //       });

// //     getAllRequest.onerror = function (event) {
// //       console.error("Error retrieving data:", event.target.errorCode);
// //     };

// //   request.onerror = function (event) {
// //     console.error("Error opening database:", event.target.errorCode);
// //   };
// //   };

// // };
