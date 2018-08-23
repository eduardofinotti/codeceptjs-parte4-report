const I = actor();

Given('que estou no site google', () => {
  I.amOnPage('/');
});

When('eu pesquiso a banda Foo Fighters', () => {
  I.fillField('#lst-ib', 'foo fighters');
});

When('clico em Pesquisar', () => {
  I.click('btnK');
});

Then('eu vejo o site da banda nos resultados', () => {
  I.see('https://foofighters.com/')
});
