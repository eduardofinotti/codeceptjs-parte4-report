Feature: Pesquisa google
  Eu como usuario
  Quero pesquisar alguma coisa no site
  Para tirar uma duvida

  Scenario: pesquisar o site do Foo Fighters
    Given que estou no site google
    When eu pesquiso a banda Foo Fighters
    When clico em Pesquisar
    Then eu vejo o site da banda nos resultados
