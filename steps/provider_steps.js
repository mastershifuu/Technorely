
'use strict';

let I, providerPage;

module.exports = {
    _init() {
        I = require('../steps_file.js')();
        providerPage = require('../pages/provider_page.js');
        providerPage._init();
    },

    async fillRequiredFields(requiredProviderData) {
        I.waitForVisible(providerPage.usernameField);
        if(requiredProviderData.username) I.fillField(providerPage.usernameField, requiredProviderData.username);
        if(requiredProviderData.email) I.fillField(providerPage.emailField, requiredProviderData.email);
        if(requiredProviderData.firstName) I.fillField(providerPage.firstNameField, requiredProviderData.firstName);
        if(requiredProviderData.lastName) I.fillField(providerPage.lastNameField, requiredProviderData.lastName);
        if(requiredProviderData.title) I.selectFromDropDown(providerPage.titleField, providerPage.titleInDropDown(requiredProviderData.title));
        if(requiredProviderData.password) I.fillField(providerPage.passwordField, requiredProviderData.password);
        if(requiredProviderData.confirmPassword) I.fillField(providerPage.confirmPasswordField, requiredProviderData.confirmPassword);
        if(requiredProviderData.clinicID) I.selectFromDropDown(providerPage.clinicIDField, providerPage.clinicIDInDropDown(requiredProviderData.clinicID));
        if(requiredProviderData.nationalProviderIdentifier) I.fillField(providerPage.nationalProviderIdentifierField, requiredProviderData.nationalProviderIdentifier);
        if(requiredProviderData.residency) I.fillField(providerPage.residencyField, requiredProviderData.residency);
        if(requiredProviderData.specialities) {
            for (let specialities of requiredProviderData.specialities) {
                I.click(providerPage.addSpecialityButton);
                I.fillField(providerPage.newSpecialityField, specialities);
                I.click(providerPage.addNewSpecialityButton);
            }
        };
        if(requiredProviderData.license) {
            I.click(providerPage.addLicenseButton);
            I.selectFromDropDown(providerPage.medicalLicenseCountryField, providerPage.medicalLicenseCountryInDropDown(requiredProviderData.medicalLicenseCountry));
            I.selectFromDropDown(providerPage.medicalLicenseStateField, providerPage.medicalLicenseStateInDropDown(requiredProviderData.medicalLicenseState));
            I.fillField(providerPage.licenseField, requiredProviderData.license);
            I.selectFromDropDown(providerPage.expiredField, providerPage.expiredInDropDown(requiredProviderData.expired));
            I.click(providerPage.addNewLicenseButton);

        };
        if(requiredProviderData.degree) I.fillField(providerPage.degreeField, requiredProviderData.degree);
        if(requiredProviderData.dateOfBirth) I.fillField(providerPage.dateOfBirthField, requiredProviderData.dateOfBirth);
        if(requiredProviderData.gender) I.checkOption(providerPage.genderRadioButton(requiredProviderData.gender));
        if(requiredProviderData.contactPhoneType) I.selectFromDropDown(providerPage.contactPhoneTypeField, providerPage.contactPhoneTypeInDropDown(requiredProviderData.contactPhoneType));
        if(requiredProviderData.countryCode) I.selectFromDropDown(providerPage.countryCodeField, providerPage.countryCodeInDropDown(requiredProviderData.countryCode));
        if(requiredProviderData.phoneNumber) I.fillField(providerPage.phoneNumberField, requiredProviderData.phoneNumber);
        if(requiredProviderData.country) I.selectFromDropDown(providerPage.countryField, providerPage.countryInDropDown(requiredProviderData.country));
        if(requiredProviderData.state) I.selectFromDropDown(providerPage.stateField, providerPage.stateInDropDown(requiredProviderData.state));
        if(requiredProviderData.zipCode) I.fillField(providerPage.zipCodeField, requiredProviderData.zipCode);
        if(requiredProviderData.street) I.fillField(providerPage.streetField, requiredProviderData.street);
        if(requiredProviderData.city) I.fillField(providerPage.cityField, requiredProviderData.city);
        if(requiredProviderData.communicationModes) {
            for (let modes of requiredProviderData.communicationModes) {
                I.checkOption(providerPage.communicationModesCheckboxLabel(modes));
            }
        }
        if(requiredProviderData.paymentMode && requiredProviderData.paymentMode === "Free")
            I.click(providerPage.paymentModeCheckboxLabel(requiredProviderData.paymentMode));
        else if(requiredProviderData.paymentMode && requiredProviderData.fee && requiredProviderData.paymentMode === "Paid")
        {
            I.click(providerPage.paymentModeCheckboxLabel(requiredProviderData.paymentMode));
            I.fillField(providerPage.feeField, requiredProviderData.fee);
        }
        if(requiredProviderData.viewPermissions) {
            for (let permissions of requiredProviderData.viewPermissions) {
                I.click(providerPage.viewPermissionsCheckboxLabel(permissions));
            }
        }
        if(requiredProviderData.editPermissions) {
            for (let permissions of requiredProviderData.editPermissions) {
                I.click(providerPage.editPermissionsCheckboxLabel(permissions));
            }
        }
        if(requiredProviderData.managePermissions) {
            for (let permissions of requiredProviderData.managePermissions) {
                I.click(providerPage.managePermissionsCheckboxLabel(permissions));
            }
        }
     },

    async fillNotRequiredFields(notRequiredProviderData) {
        if(notRequiredProviderData.photoPath) I.attachFile(providerPage.uploadPhotoInput, notRequiredProviderData.photoPath);
        if(notRequiredProviderData.resourceID) I.fillField(providerPage.resourceIDField, notRequiredProviderData.resourceID);
        if(notRequiredProviderData.medicalSchool) I.fillField(providerPage.medicalSchoolField, notRequiredProviderData.medicalSchool);
        if(notRequiredProviderData.fellowship) I.fillField(providerPage.fellowshipField, notRequiredProviderData.fellowship);
        if(notRequiredProviderData.language)
            for (let language of notRequiredProviderData.language) {
                I.fillField(providerPage.languageField, language);
                I.pressKey('Enter');
            }
        if(notRequiredProviderData.website) I.fillField(providerPage.websiteField, notRequiredProviderData.website);
        if(notRequiredProviderData.easyscriptEmail) I.fillField(providerPage.easyscriptEmailField, notRequiredProviderData.easyscriptEmail);
        if(notRequiredProviderData.easyscriptPassword) I.fillField(providerPage.easyscriptPasswordField, notRequiredProviderData.easyscriptPassword);
    },

    async clickOnCreateProviderButton() {
        I.waitForVisible(providerPage.createProviderButton);
        I.click(providerPage.createProviderButton);
    },

    async verifyRequiredDateInProviderProfile(requiredProviderData) {
        if(requiredProviderData.username) I.seeInField(providerPage.usernameField, requiredProviderData.username);
        if(requiredProviderData.email) I.seeInField(providerPage.emailField, requiredProviderData.email);
        if(requiredProviderData.firstName) I.seeInField(providerPage.firstNameField, requiredProviderData.firstName);
        if(requiredProviderData.lastName) I.seeInField(providerPage.lastNameField, requiredProviderData.lastName);
        if(requiredProviderData.clinicID) I.seeElement(providerPage.clinicIDLabel(requiredProviderData.clinicID))
        if(requiredProviderData.nationalProviderIdentifier) I.seeInField(providerPage.nationalProviderIdentifierField, requiredProviderData.nationalProviderIdentifier);
        if(requiredProviderData.residency) I.seeInField(providerPage.residencyField, requiredProviderData.residency);
        if(requiredProviderData.specialities) {
            for (let specialities of requiredProviderData.specialities) {
                I.seeElement(providerPage.specialitiesLabel(specialities));
            }
        };
        if(requiredProviderData.license) I.seeElement(providerPage.licenseLabel(requiredProviderData.license, requiredProviderData.medicalLicenseState, requiredProviderData.medicalLicenseCountry));
        if(requiredProviderData.degree) I.seeInField(providerPage.degreeField, requiredProviderData.degree);
        if(requiredProviderData.dateOfBirth) I.seeInField(providerPage.dateOfBirthField, requiredProviderData.dateOfBirth);
        if(requiredProviderData.phoneNumber) I.seeInField(providerPage.phoneNumberField, requiredProviderData.phoneNumber);
        if(requiredProviderData.zipCode) I.seeInField(providerPage.zipCodeField, requiredProviderData.zipCode);
        if(requiredProviderData.street) I.seeInField(providerPage.streetField, requiredProviderData.street);
        if(requiredProviderData.city) I.seeInField(providerPage.cityField, requiredProviderData.city);
        if(requiredProviderData.communicationModes) {
            for (let modes of requiredProviderData.communicationModes) {
                I.seeCheckboxIsChecked(providerPage.communicationModesCheckbox(modes));
            }
        }
        if(requiredProviderData.viewPermissions) {
            for (let permissions of requiredProviderData.viewPermissions) {
                I.seeCheckboxIsChecked(providerPage.viewPermissionsCheckbox(permissions));
            }
        }
        if(requiredProviderData.editPermissions) {
            for (let permissions of requiredProviderData.editPermissions) {
                I.seeCheckboxIsChecked(providerPage.editPermissionsCheckbox(permissions));
            }
        }
        if(requiredProviderData.managePermissions) {
            for (let permissions of requiredProviderData.managePermissions) {
                I.seeCheckboxIsChecked(providerPage.managePermissionsCheckbox(permissions));
            }
        }

    },

    async verifyNotRequiredDateInProviderProfile(notRequiredProviderData) {
        if(notRequiredProviderData.photo) I.seeElement(providerPage.uploadedProviderPhoto(notRequiredProviderData.photo));
        if(notRequiredProviderData.resourceID) I.seeInField(providerPage.resourceIDField, notRequiredProviderData.resourceID);
        if(notRequiredProviderData.medicalSchool) I.seeInField(providerPage.medicalSchoolField, notRequiredProviderData.medicalSchool);
        if(notRequiredProviderData.fellowship) I.seeInField(providerPage.fellowshipField, notRequiredProviderData.fellowship);
        if(notRequiredProviderData.language)
            for (let language of notRequiredProviderData.language) {
                I.seeElement(providerPage.languageLabel(language));
            }
        if(notRequiredProviderData.website) I.seeInField(providerPage.websiteField, notRequiredProviderData.website);
        if(notRequiredProviderData.easyscriptEmail) I.seeInField(providerPage.easyscriptEmailField, notRequiredProviderData.easyscriptEmail);
    },

};
