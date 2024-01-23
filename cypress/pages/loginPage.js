class LoginPage {
    selectorsList(){
        const selectors = {
            usernameField: "[name='username']",
            passwordFIeld: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",

       }

       return selectors
    }

    accessLoginPage(){
        cy.visit('/auth/login')
    }

    loginWithUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordFIeld).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default LoginPage