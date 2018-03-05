
Feature('My First Test');

Scenario('test something', (I) => {
    I.amOnPage('/')
    I.see('WebdriverIO at CircleCI')
});
