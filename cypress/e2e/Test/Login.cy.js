import loginPage from '../../support/pages/LoginPage.js';

describe("Tela de login", () => {
  it("Realizando Login com sucesso", () => {
    
    var email = Cypress.env('email')
    var senha = Cypress.env('senha')

    loginPage.preencherEmail(email)
    loginPage.preencherSenha(senha)
    loginPage.clicarLogar()
  
    });
  
    const senhas = [1238]
    senhas.forEach(senha=>{
      it(`Realizando Login Invalido, validando mensagem  ${senha}`, function(){
        var email = Cypress.env('email')
        var msgErro = 'E-mail ou senha inválidos.'

        loginPage.preencherEmail(email)
        loginPage.preencherSenha(senha)
        loginPage.clicarLogar()

        loginPage.validarLoginInvalido(msgErro)
      })

    })
   });