const puppeteer = require('puppeteer');

(async () => {
    const navegador = await puppeteer.launch({
        headless: false, args: [
            '--window-size=1280,800',
        ]
    });                                               // Definindo o navegador e iniciando o puppeteer com tamanho de janela personalizável, deixando o headless como true para não mostrar o navegador abrindo ou fechando

    const pagina = await navegador.newPage();         // Iniciando uma nova página no navegador

    pagina.setViewport({ height: 720, width: 1280 })  // Definindo quanto o navegador irá mostrar de conteúdo

    await pagina.setUserAgent(
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    );                                                // Define o usuário padrão do navegador, mascarando ele como se fosse um PC com Linux

    await pagina.goto('https://web.whatsapp.com');     // Definindo o site que a janela do navegador irá acessar

    await pagina.waitForSelector('#app > div > div.landing-wrapper > div.landing-window > div.landing-main > div > div > div._ak96 > div > canvas'); // Aqui se diz ao navegador que ele deve esperar o elemento carregar

    delay(3000);

    await pagina.waitForSelector('._ak8l');          // Aguarda o elemento que contém as conversas

    delay(3000);

    await pagina.click('span[title="Nome do Contato"]'); // Seleciona uma conversa através do nome da pessoa/grupo

    await pagina.type('#main > footer > div._ak1k._ahmw.copyable-area > div > span:nth-child(2) > div > div._ak1r > div._ak1l','Essa mensagem foi enviada através de um Bot de Whatsapp!');                                      // Seleciona o campo de escrever mensagens e digita a mensagem seguinte

    delay(3000);

    await pagina.click('#main > footer > div._ak1k._ahmw.copyable-area > div > span:nth-child(2) > div > div._ak1r > div._ak1t._ak1u');       // Envia a mensagem

})();

function delay(tempo){
    return new Promise(function (resolve){
        setTimeout(resolve, tempo)
    });
}
