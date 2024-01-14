import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField : "[name='username']",
    passwordFIeld : "[name='password']",
    loginButton : "[type='submit']",
    sectionTitleTopBar : ".oxd-topbar-header-breadcrumb-module",
    dashboardLayot: ".oxd-layout",
    wrongCredentialAlert : "[role='alert']"
  }

  it('Login-Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordFIeld).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardLayot)
  })
  it('Login-Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordFIeld).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})