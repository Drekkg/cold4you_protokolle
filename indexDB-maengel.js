// Open (or create) the database
const request = indexedDB.open("Cold4YouDB", 1);
request.onupgradeneeded = function (event) {
  const db = event.target.result;
  // Create an object store for the form data
  const objectStore = db.createObjectStore("formData", { keyPath: "id", autoIncrement: true });
  console.log("object store created");

  //  Define what data items the object store will contain
  objectStore.createIndex("kunde", "kunde", { unique: false });
  objectStore.createIndex("standort", "standort", { unique: false });
  objectStore.createIndex("aufstellung", "aufstellung", { unique: false });
  objectStore.createIndex("anlage", "anlage", { unique: false });
  objectStore.createIndex("type", "type", { unique: false });
  objectStore.createIndex("kaeltemittel", "kaeltemittel", { unique: false });
  objectStore.createIndex("techniker", "techniker", { unique: false });
  objectStore.createIndex("currentDate", "currentDate", { unique: false });
  objectStore.createIndex("maengel1", "maengel1", { unique: false });
  objectStore.createIndex("maengel2", "maengel2", { unique: false });
  objectStore.createIndex("maengel3", "maengel3", { unique: false });
  objectStore.createIndex("maengel4", "maengel4", { unique: false });
  objectStore.createIndex("maengel5", "maengel5", { unique: false });
  objectStore.createIndex("maengel6", "maengel6", { unique: false });
};

request.onsuccess = (event) => {
  console.log("indexDb opened");
};
request.onerror = (event) => {
  console.error("IndexedDB ERROR");
};

//Function to save form data to IndexedDB
function saveFormData() {
  const kundeValue = document.getElementById("kunde").value;
  const standortValue = document.getElementById("standort").value;
  const aufstellungValue = document.getElementById("aufstellung").value;
  const anlageValue = document.getElementById("anlage").value;
  const typeValue = document.getElementById("type").value;
  const kaeltemittelValue = document.getElementById("kaeltemittel").value;
  const technikerValue = document.getElementById("techniker").value;
  const currentDateValue = document.getElementById("dateCurrent").value;
  const maengelValue1 = document.getElementById("maengel1").value;
  const maengelValue2 = document.getElementById("maengel2").value;
  const maengelValue3 = document.getElementById("maengel3").value;
  const maengelValue4 = document.getElementById("maengel4").value;
  const maengelValue5 = document.getElementById("maengel5").value;
  const maengelValue6 = document.getElementById("maengel6").value;

  localStorage.setItem("kunde", kundeValue);
  localStorage.setItem("standort", standortValue);
  localStorage.setItem("techniker", technikerValue);
  localStorage.setItem("currentDate", currentDateValue);

  const transaction = db.transaction(["formData"], "readwrite");
  const objectStore = transaction.objectStore("formData");

  const data = {
    kunde: kundeValue,
    standort: standortValue,
    aufstellung: aufstellungValue,
    anlage: anlageValue,
    type: typeValue,
    kaeltemittel: kaeltemittelValue,
    techniker: technikerValue,
    currentDate: currentDateValue,
    maengel1: maengelValue1,
    maengel2: maengelValue2,
    maengel3: maengelValue3,
    maengel4: maengelValue4,
    maengel5: maengelValue5,
    maengel6: maengelValue6,
  };

  const request = objectStore.add(data);

  request.onsuccess = function () {
    console.log("Form data saved to IndexedDB");
  };

  const postData = async (data) => {
    const url = "http://localhost/db.php";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error1 status: ${response.status}`);
      }
      const result = await response.json();
      console.log("successs:", result);
    } catch (error) {
      console.error("Error", error);
    }
  };
  postData(data);
}
