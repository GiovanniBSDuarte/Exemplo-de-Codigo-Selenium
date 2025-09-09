const { Builder, By, until } = require('selenium-webdriver');

(async function abTestingExample() {
    // Criar instância do navegador (Chrome)
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Acessar a página inicial
        await driver.get('https://the-internet.herokuapp.com/');

        // Clicar no link "A/B Testing"
        await driver.findElement(By.linkText('A/B Testing')).click();

        // Esperar o título da página carregar
        await driver.wait(until.titleIs('The Internet'), 5000);

        // Capturar o título visível da página
        let pageTitle = await driver.findElement(By.tagName('h3')).getText();

        // Validar se contém "A/B Test"
        if (pageTitle.includes('A/B Test')) {
            console.log("Teste passou: título da página contém 'A/B Test'");
        } else {
            console.error("Teste falhou: título inesperado:", pageTitle);
        }

    } catch (err) {
        console.error("Erro no teste:", err);
    } finally {
        await driver.quit(); // Encerra o navegador
    }
})();
