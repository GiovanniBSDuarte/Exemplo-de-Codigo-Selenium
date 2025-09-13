const { Builder, By } = require("selenium-webdriver");

(async function dropdownExample() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://the-internet.herokuapp.com/dropdown");

    // localizar o dropdown pelo id
    let dropdown = await driver.findElement(By.id("dropdown"));

    // abrir o dropdown e selecionar a opção 2 (pelo valor)
    await dropdown.findElement(By.css("option[value='2']")).click();

    console.log("exemplo executado: opção selecionada.");
  } catch (err) {
    console.error("erro no exemplo:", err);
  } finally {
    await driver.quit();
  }
})();
