/*******MAPEAMENTO ***********/
const el = {
    emailField: '#login',
    senhaField: '#password',
    loginButton: ':nth-child(3) > .btn',
    msgErro: '.error-msg',
    
}

/******AÇÕES ********/

class LoginPage{
    
    preencherEmail(email){
         cy.get(el.emailField).type(email)
    }
    preencherSenha(senha){
        cy.get(el.senhaField).type(senha)
    }
    clicarLogar(){
        cy.get(el.loginButton).click()
    }

    validarLoginInvalido(msgErro){
        cy.get(el.msgErro).should('contain', msgErro)
    }
}
export default new LoginPage()