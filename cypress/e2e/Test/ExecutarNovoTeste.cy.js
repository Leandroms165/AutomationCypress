import executarNovoTestePage from '../../support/Pages/ExecutarNovoTestePage.js'

describe ("Executando novo teste",()=> {
    it("Cancelando novo teste",() => {
        /// Chamando comando commands.js
        cy.loginValido({email: 'lc.testanalyst@gmail.com', senha: '123teste'})
        
        executarNovoTestePage.clickMeusProjetos()
        executarNovoTestePage.clickSelecionarProjeto()
        executarNovoTestePage.executarNovoTeste()
        executarNovoTestePage.botaoCancelar()
        executarNovoTestePage.botaoModalOk()
    })
})