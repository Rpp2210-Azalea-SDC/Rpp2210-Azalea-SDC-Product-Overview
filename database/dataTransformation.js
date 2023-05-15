const fs = require("fs");

const csvPath =
  "/Users/alvinruan/Desktop/HackReactor/SDC/Rpp2210-Azalea-SDC-Product-Overview/styles.csv";

fs.readFile(csvPath, "utf8", (err, data) => {
  if (err) {
    console.log("Error when trying to read csvFile ======>> ", err);
    return;
  }

  const rows = data.split("\n");

  for (let i = 1; i < rows.length; i++) {
    const columns = rows[i].split(",");

    if (columns[3] === "null") {
      columns[3] = "0";
    }

    const modifiedRow = columns.join(",");
    rows[i] = modifiedRow;
  }

  const modifiedData = rows.join("\n");

  fs.writeFile(csvPath, modifiedData, "utf8", (err) => {
    if (err) {
      console.error("Error writing CSV file:", err);
      return;
    }
    console.log("CSV file modification completed.");
  });
});
