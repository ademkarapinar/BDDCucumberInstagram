package runnerTest.webPages;

import org.openqa.selenium.By;

public class LoginPage extends ElementUtil {
    By username = By.xpath("//input[@name='username']");
    By pass = By.xpath("//input[@name='password']");
    By logBtn = By.xpath("//button[@class='sqdOP  L3NKy   y3zKF     ']");
    By errorMessage = By.id("slfErrorAlert");

    public void enterEmail(String email){

        sendValue(username, email);
    }
    public void enterPassword(String password){

        sendValue(pass, password);
    }
    public void clickLogin(){

        clickOn(logBtn);
    }
    public String getTextElement(){

        return getTextFromElement(errorMessage);
    }

}
