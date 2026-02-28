Feature: Login

  Scenario: Realizar login com sucesso
    Given que acesso o site da Iterasys
    When preencho o email "thamiresmarina@gmail.com" e a senha "Qualidade.123"
    And clico em entrar
    And rolo a página até o rodapé
    And clico em Política de Privacidade
    Then o link não deve redirecionar para outra página

  Scenario: Usuário não autenticado acessa Política de Privacidade
    Given que acesso o site da Iterasys sem fazer login
    When rolo a página até o rodapé
    And clico em Política de Privacidade
    Then o link não deve redirecionar para outra página