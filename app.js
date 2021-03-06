const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const getEmployeesInfo = require("./lib/getEmployeesInfo");
const render = require("./lib/htmlRenderer");

async function createHTML() {
  const employeesInfo = await getEmployeesInfo();
  const html = render(employeesInfo);

  //check if output folder exists, if not create one
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  //create a team.html file under output folder
  fs.writeFile(outputPath, html, function (err) {
    if (err) throw err;
    console.log("Team.html is created ");
  });
}
createHTML();
