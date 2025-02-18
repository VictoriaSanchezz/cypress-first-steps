import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.dashboardPageCheck()
    
    menuPage.accessMyInfo()
   
    myInfoPage.fullNameDetails(chance.first({gender : "male" }), chance.first({gender : "male"}), chance.last())
    myInfoPage.employeeIdDetails(chance.bb_pin(), chance.bb_pin())
    myInfoPage.driversLicenseDetails(chance.ssn({dashes : false}), '2025-03-10')
    myInfoPage.nationalityDetails()
    myInfoPage.maritalStatusDetails()
    myInfoPage.dateOfBirthDetails('2000-02-10')
    myInfoPage.genderField()
    myInfoPage.bloodTypeField()
    myInfoPage.saveButton1()
    myInfoPage.saveButton2()     
  })

})