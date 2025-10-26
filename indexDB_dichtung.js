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
  objectStore.createIndex("profileNr", "profileNr", { unique: false });
  objectStore.createIndex("menge", "menge", { unique: false });
  objectStore.createIndex("hoehe", "hoehe", { unique: false });
  objectStore.createIndex("breite", "breite", { unique: false });
  objectStore.createIndex("abmessungNummmer", "abmessungNummer", { unique: false });
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
  const aufstellungValue = document.getElementById(`anlagestandort${anlageStandort}`).value;
  const anlageValue = document.getElementById(`anlagebeschreibung${anlageBeschreibung}`).value;
  const auftragsnummerValue = document.getElementById("auftragsnummer").value;
  const technikerValue = document.getElementById("techniker").value;
  const date1Value = document.getElementById("dateCurrent").value;
  const profileNrValue = document.getElementById(`profileNr${profileNrCounter}`).value;
  const mengeValue = document.getElementById(`menge${mengeCounter}`).value;
  const hoeheValue = document.getElementById(`hoehe${hoeheCounter}`).value;
  const breiteValue = document.getElementById(`breite${breiteCounter}`).value;
  const abmessungNumberValue = abmessungNrCounter;
 

  const transaction = db.transaction(["dichtungData"], "readwrite");
  const objectStore = transaction.objectStore("dichtungData");

  const data = {
    kunde: kundeValue,
    standort: standortValue,
    aufstellung: aufstellungValue,
    anlage: anlageValue,
    techniker: technikerValue,
    currentDate: date1Value,
    auftragsNummer: auftragsnummerValue,
    profileNr: profileNrValue,
    menge: mengeValue,
    hoehe: hoeheValue,
    breite: breiteValue,
    abmessungNummmer: abmessungNumberValue,

  };

  const request = objectStore.add(data);

  request.onsuccess = function () {
    console.log("Form data saved to IndexedDB");
  };

  request.onerror = function () {
    console.log("Error saving form data to IndexedDB", event.target.errorCode);
  };

  // const postData = async (data) => {
  //   const url = "https://www.deadcowboy.at/db.php";

  //   try {
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (!response.ok) {
  //       const errorText = await response.text();
  //       throw new Error(`HTTP error status: ${response.status}, Response: ${errorText}`);
  //     }
  //     const result = await response.json();
  //     console.log("success:", result);
  //   } catch (error) {
  //     console.error("Error", error);
  //   }
  // };
  // postData(data);
 

}
