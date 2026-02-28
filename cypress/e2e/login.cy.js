describe('Login', () => {

    it.only('Realizar login com sucesso', () => {
        //arrange
            cy.visit('https://iterasys.com/')

        //ignora erros do código da aplicação
            cy.on('uncaught:exception', (err) => {

                return false
            })

        //act
        cy.get('#user-menu-toggle').click()
        cy.get('[name="username"]').should('be.visible').Cypress.env('email')
        cy.get('[name="password"]').Cypress.env('senha')
        cy.get('#loginbtn').click()

        //scroll até o rodapé e clica em política de privacidade
        cy.scrollTo('bottom')
        cy.get('.footer-privacy-policy').click()

        //assert - verifica que o link não direciona (href="#")
        // Bug conhecido: link não redireciona para página de privacidade
        cy.url().should('include', 'iterasys.com/my/#')    

        
    })

    it('Realizar login informando credenciais inválidas', () => {
        //arrange
            cy.visit('https://iterasys.com/')

        //ignora erros do código da aplicação
            cy.on('uncaught:exception', (err) => {

                return false
            })

        //act
        cy.get('#user-menu-toggle').click()
        cy.get('[name="username"]').should('be.visible').type('usuário inválido')
        cy.get('[name="password"]').type('senha incorreta')
        cy.get('#loginbtn').click()

        //assert
        cy.get('.alert.alert-danger')
        .should('be.visible')
        .and('contain', 'Nome de usuário ou senha errados')


         //certifica que fico na página de login
         cy.url().should('eq', 'https://iterasys.com/login/index.php')   

    })
})
