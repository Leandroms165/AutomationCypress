const el = {
    meusProjetos: ':nth-child(1) > .card > .title > .bottom-line',
    selecionandoProjeto: '#crowdtest-project-card_1494 > :nth-child(3)',
    executarNovoTeste: "//*[@class='btn btn-crowdtest ng-star-inserted']",
    botaoCancelar: '#testResultFrm > :nth-child(8) > .col > :nth-child(3)',
    botaoModalOk: '.alert-box-actions > :nth-child(2)',
}

class ExecutarNovoTestePage{

    clickMeusProjetos(){
        cy.get(el.meusProjetos).click()
    }
    clickSelecionarProjeto(){
        cy.get(el.selecionandoProjeto).click()
    }
    executarNovoTeste(){
        cy.get(el.executarNovoTeste).click()
    }
    botaoCancelar(){
        cy.get(el.botaoCancelar).click()
    }
    botaoModalOk(){
        cy.get(el.botaoModalOk).click()
    }
}
export default new ExecutarNovoTestePage()