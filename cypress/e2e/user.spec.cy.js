import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()


describe('Orange HRM Tests', () => {

  const selectorsList = {
    
    
    
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    genderButton: ".oxd-radio-wrapper",
    comboboxSelector: ".oxd-select-text--arrow",
    firstComboboxField: ":nth-child(173)",
    secondComboboxField: ".oxd-select-dropdown > :nth-child(3)",
    thirdComboboxField: ".oxd-select-dropdown > :nth-child(6)"
    

  }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.dashboardPageCheck()
    menuPage.accessMyInfo()
       
    
    //cy.get(selectorsList.firstNameField).clear().type('John')
    //cy.get(selectorsList.middleNameField).clear().type('John')
    //cy.get(selectorsList.lastNameField).clear().type('John')
    //cy.get(selectorsList.genericField).eq(3).clear().type('12345')
    //cy.get(selectorsList.genericField).eq(4).clear().type('54321')
    //cy.get(selectorsList.genericField).eq(5).clear().type('1122334455')
    //cy.get(selectorsList.dateField).eq(0).clear().type('2025-03-10')
    //cy.get(selectorsList.dateCloseButton).click()
    //cy.get(selectorsList.comboboxSelector).eq(0).click()
    //cy.get(selectorsList.firstComboboxField).click()
    //cy.get(selectorsList.comboboxSelector).eq(1).click()
    //cy.get(selectorsList.secondComboboxField).click()
    //cy.get(selectorsList.dateField).eq(1).clear().type('2000-02-10')
    //cy.get(selectorsList.dateCloseButton).click()
    //cy.get(selectorsList.genericField).eq(8).clear().type('123123')
    //cy.get(selectorsList.genderButton).eq(0).click()
    //cy.get(selectorsList.submitButton).eq(0).click({force: true})
    //cy.get('body').should('contain', 'Successfully Updated')
    //cy.get(selectorsList.comboboxSelector).eq(2).click()
    //cy.get(selectorsList.thirdComboboxField).click()
    //cy.get(selectorsList.submitButton).eq(1).click({force: true})
    //cy.get('body').should('contain', 'Successfully Saved')
    

  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click() 
    cy.get(selectorsList.wrongCredentialAlert)
  })
})