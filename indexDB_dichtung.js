// Open (or create) the database
const request = indexedDB.open("Cold4YouDBDichtung", 1);

request.onupgradeneeded = function (event) {
  const db = event.target.result;

  // Create an object store for the form data
  const objectStore = db.createObjectStore("dichtungData", { keyPath: "id", autoIncrement: true });

  // Define what data items the object store will contain
  objectStore.createIndex("kunde", "kunde", { unique: false });
  objectStore.createIndex("standort", "standort", { unique: false });
  objectStore.createIndex("auftragsNummer", "auftragsNummer", { unique: false });
  objectStore.createIndex("aufstellung", "aufstellung", { unique: false });
  objectStore.createIndex("anlage", "anlage", { unique: false });
  objectStore.createIndex("techniker", "techniker", { unique: false });
  objectStore.createIndex("currentDate", "currentDate", { unique: false });
  objectStore.createIndex("dichtungNummer", "dichtungNummer", { unique: false });
  objectStore.createIndex("profileNr", "profileNr", { unique: false });
  objectStore.createIndex("menge", "menge", { unique: false });
  objectStore.createIndex("hoehe", "hoeh", { unique: false });
  objectStore.createIndex("breite", "breite", { unique: false });
};

request.onerror = (event) => {
  console.error("Why didn't you allow my web app to use IndexedDB?!");
};
request.onsuccess = (event) => {
  db = event.target.result;
  const transaction = db.transaction(["dichtungData"], "readwrite");
  const objectStore = transaction.objectStore("dichtungData");
};

// Function to save form data to IndexedDB
function saveFormData() {
  const kundeValue = document.getElementById("kunde").value;
  const standortValue = document.getElementById("standort").value;
  const aufstellungValue = document.getElementById("aufstellung").value;
  const anlageValue = document.getElementById("anlage").value;
  const auftragsnummer = document.getElementById("auftragsnummer").value;
  const technikerValue = document.getElementById("techniker").value;
  const date1Value = document.getElementById("dateCurrent").value;
  const maengelValue1 = document.getElementById("maengel1").value;
  const maengelValue2 = document.getElementById("maengel2").value;
  const maengelValue3 = document.getElementById("maengel3").value;
  const maengelValue4 = document.getElementById("maengel4").value;
  const maengelValue5 = document.getElementById("maengel5").value;
  const maengelValue6 = document.getElementById("maengel6").value;

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
    currentDate: date1Value,
    maengel1: maengelValue1,
    maengel2: maengelValue2,
    maengel3: maengelValue3,
    maengel4: maengelValue4,
    maengel5: maengelValue5,
    maengel6: maengelValue6,
    archived: "0",
  };

  const request = objectStore.add(data);

  request.onsuccess = function () {
    console.log("Form data saved to IndexedDB");
  };

  request.onerror = function () {
    console.log("Error saving form data to IndexedDB", event.target.errorCode);
  };

  const postData = async (data) => {
    const url = "https://www.deadcowboy.at/db.php";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error status: ${response.status}, Response: ${errorText}`);
      }
      const result = await response.json();
      console.log("success:", result);
    } catch (error) {
      console.error("Error", error);
    }
  };
  postData(data);
}
