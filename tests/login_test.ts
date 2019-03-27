
import {LoginPage} from '../page_objects/login/login_page';
import { async } from 'q';

describe('Login', () => {

  it('user should be able to log in', () => {
      let loginServices = new LoginPage();
      loginServices.get("https://www.carnival.com/ProfileManagement/Accounts/Login?");
      loginServices.writeUsername("clouderp@psl.com.co");
      loginServices.writePass("clouderp456");
      loginServices.clickLogin();

      expect (loginServices.getLoginMessageError().getText()).toContain("We're sorry but the credentials entered do not match.");
  });
});