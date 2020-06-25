Feature('provider');
let user = require('./../test_data_config.js').user;

Before(async function(I, loginStep) {
    I.amOnPage('/');
    I.say('I log in');
    await loginStep.submitLogInForm(user);
});

Scenario('Authorization page (Welcome back!)', async function(I, commonStep, providerStep, dashboardStep) {
    let requiredProviderData = {
        username: I.getUniqueValue(),
        email: `${I.getUniqueValue()}@mail.com`,
        firstName: I.getUniqueValue(),
        lastName: I.getUniqueValue(),
        title: 'Mr',
        password: 'Qwe123!@#',
        confirmPassword: 'Qwe123!@#',
        clinicID: 'teste2eclinic',
        nationalProviderIdentifier: '1',
        residency: I.getUniqueValue(),
        degree: 'L.C.P',
        specialities: ['Anesthesiology - Pain management', 'Cardiology'],
        license: I.getUniqueValue(),
        medicalLicenseCountry: 'United States',
        medicalLicenseState: 'AL',
        expired: '30',
        dateOfBirth: '05/03/1995',
        gender: 'Male',
        contactPhoneType: 'Phone',
        countryCode: 'United States (+1)',
        phoneNumber: I.getUniqueNumber(),
        country: 'United States',
        state: 'Alabama',
        zipCode: I.getUniqueNumber(5),
        street: I.getUniqueValue(),
        city: I.getUniqueValue(),
        communicationModes: ['Audio', 'Video'],
        paymentMode: 'Free',
        //fee: I.getUniqueNumber(4),
        viewPermissions: ['Reason for visit', 'Questionnaire'],
        editPermissions: ['Schedule', 'Questionnaire'],
        managePermissions: ['Scheduler Controlled', 'Accept Insurance'],
    };

    let notRequiredProviderData = {
        resourceID: I.getUniqueNumber(5),
        medicalSchool: I.getUniqueValue(),
        fellowship: I.getUniqueValue(),
        language: ['English', 'Ukrainian'],
        //website: `https://www.google.com/`,
        //easyscriptEmail: `${I.getUniqueValue()}@mail.com`,
        //easyscriptPassword: I.getUniqueValue(),
        photoPath: 'testdata/testprofilephoto.jpg',
        photo: 'testprofilephoto.jpg'
    }

    I.say('I open Creating Provider page');
    await commonStep.clickOnProviderNavigationButton();

    I.say('I filled required fields');
    await providerStep.fillRequiredFields(requiredProviderData);

    I.say('I filled not required fields');
    await providerStep.fillNotRequiredFields(notRequiredProviderData);

    I.say('I click on Create Provider button');
    await providerStep.clickOnCreateProviderButton();

    I.say('I should see dashboard page');
    await dashboardStep.verifyDashboardPageIsDisplayed();

    I.say('I search for created provider');
    await dashboardStep.searchProvider(requiredProviderData.username);

    I.say('I should see created provider');
    await dashboardStep.verifyProviderInTable(requiredProviderData.username);

    I.say('I open provider profile');
    await dashboardStep.openProviderProfile(requiredProviderData.username);

    I.say('I should see correct required data in provider profile');
    await providerStep.verifyRequiredDateInProviderProfile(requiredProviderData);

    I.say('I should see correct not required data in provider profile');
    await providerStep.verifyNotRequiredDateInProviderProfile(notRequiredProviderData);

});

