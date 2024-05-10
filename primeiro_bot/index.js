const puppeteer = require('puppeteer');

(async () => {
    const navegador = await puppeteer.launch({
        headless: true, args: [
            '--window-size=1280,800',
        ]
    });                                               // Definindo o navegador e iniciando o puppeteer com tamanho de janela personalizável, deixando o headless como true para não mostrar o navegador abrindo ou fechando

    const pagina = await navegador.newPage();         // Iniciando uma nova página no navegador

    pagina.setViewport({ height: 800, width: 1280 })  // Definindo quanto o navegador irá mostrar de conteúdo

    await pagina.goto('https://www.wattpad.com');     // Definindo o site que a janela do navegador irá acessar

    await pagina.screenshot({ path: 'exemplo.png' }); // Tirando um print da tela 

    await navegador.close();                          // Fechando o navegador
})();