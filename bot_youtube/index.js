
const puppeteer = require("puppeteer");

(async () => {
    const navegador = await puppeteer.launch({
        headless: false, args: [
            '--window-size=1280,800'
        ]
    });

    const pagina = await navegador.newPage();

    pagina.setViewport({ height: 720, width: 1280 });

    await pagina.setUserAgent(
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    );

    await pagina.goto('https://youtube.com');

    await pagina.waitForSelector('input[type=text]#search');
    await pagina.click('input[type=text]#search');
    await pagina.type('input[type=text]#search', 'Nikmouu');
    await pagina.click('button#search-icon-legacy');

    await delay(3000);

    await pagina.evaluate(() => {
        window.scrollTo(0, 200);
    });

    await pagina.waitForSelector('ytd-search-header-renderer');

    await delay(3000);

    await pagina.evaluate(() => {
        let videos = document.querySelectorAll('a#video-title');

        videos[0].click();                       // Cria uma lista de todos os vídeos disponíveis na página e acessa o primeiro deles  
    });

    await delay(3000);

    await pagina.evaluate(() => {
        window.scrollTo(0, 600);
    });

    await pagina.waitForSelector('#sections');  // Aguarda o carregamento da aba de comentários

    await delay(3000);

    await pagina.evaluate(() => {
        var comentarios = document.querySelectorAll("#content-text");

        alert(comentarios[0].textContent);
        alert(comentarios[1].textContent);
        alert(comentarios[2].textContent);
    });                                         // Seleciona todos os comentários e exibe os 3 primeiros como Alerta / PopUp

})();

function delay(tempo) {
    return new Promise(function (resolve) {
        setTimeout(resolve, tempo);
    });
}