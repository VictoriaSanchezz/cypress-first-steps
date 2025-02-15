class MyInfoPage {
    selectorsList() {
        const selectors = {
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

        return selectors
    }

    fullNameDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    employeeIdDetails(employeeId, otherId) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)

    }

    driversLicenseDetails(driversLicenseNumber, licenseExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    nationalityDetails() {
        cy.get(this.selectorsList().comboboxSelector).eq(0).click()
        cy.get(this.selectorsList().firstComboboxField).click()
    }

    maritalStatusDetails() {
        cy.get(this.selectorsList().comboboxSelector).eq(1).click()
        cy.get(this.selectorsList().secondComboboxField).click()
    }

    dateOfBirthDetails(dateOfBirth) {
        cy.get(this.selectorsList().dateField).eq(1).clear().type(dateOfBirth)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    genderField() {
        cy.get(this.selectorsList().genderButton).eq(0).click()
    }

    saveButton1() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true}) 
        cy.get('body').should('contain', 'Successfully Updated')
        
    }

    bloodTypeField() {
        cy.get(this.selectorsList().comboboxSelector).eq(2).click()
        cy.get(this.selectorsList().thirdComboboxField).click()
    }

    saveButton2() {
        cy.get(this.selectorsList().submitButton).eq(1).click({force: true})
        cy.get('body').should('contain', 'Successfully Saved')
    }

}

export default MyInfoPage