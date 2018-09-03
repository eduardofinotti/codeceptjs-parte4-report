Feature('Pesquisa google');

Scenario('Pesquisa com sucesso', (I) => {
    I.amOnPage('/');
    I.fillField('#lst-ib', 'foo fighters');
    I.click('btnK');
    I.wait(1);
    I.see('https://foofighters.com/')
});

Scenario('Pesquisa com erro', (I) => {
    I.amOnPage('/');
    I.fillField('#lst-ib', 'foo fighters');
    I.click('btnK');
    I.see('https://foofighters.com/')
    I.wait(1);
    I.see('https://fooxxxfighters.com/')
});

