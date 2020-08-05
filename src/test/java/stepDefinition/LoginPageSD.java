package stepDefinition;

import Utils.BasePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.Assert;
import runnerTest.webPages.LoginPage;


public class LoginPageSD {

    private LoginPage loginPage = new LoginPage();

    @Given("^I am on home page$")
    public void IamOnHomePage() {

        Assert.assertEquals(BasePage.get().getCurrentUrl(), "https://www.instagram.com/?hl=en");
    }

    @When("^I enter (.+) into (username|password) text fields on home screen$")
    public void enterDataUserAndPAssField(String anyText, String textField) {

        switch (textField) {
            case "username":
                loginPage.enterEmail(anyText);
                break;
            case "password":
                loginPage.enterPassword(anyText);
                break;
        }
    }

    @And("^I click on (login button|create account) on home screen$")
    public void clickOnButton(String button) {

        switch (button) {
            case "login button":
                loginPage.clickLogin();
                break;
            case "create account":
                //implement create account
                break;
        }
    }

    @Then("^I verify that I am in invalid login page$")
    public void verifyInvalidLogin() {
//        Assert.assertEquals(loginPage.getTextElement(), "The username you entered doesn't belong to an account. Please check your username and try again.");
        loginPage.getTextElement();
    }
}