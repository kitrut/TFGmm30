import { AppPage } from './app.po';
import { LoginPO } from './login.po';
import {browser, by, element} from 'protractor';
import {AnnouncementsPage} from './announcements.po';
import {NavbarPO} from './navbar.po';

describe('new App', () => {
  let page: AppPage;
  let loginPage: LoginPO;
  let announcePage: AnnouncementsPage;
  let navbarPO : NavbarPO;

  beforeEach(() => {
    page = new AppPage();
    loginPage = new LoginPO('app-login', '/login');
    navbarPO = new NavbarPO();
  });

  describe('default screen', () => {
    beforeEach(() => {
      loginPage.load();
    });

    it('should have a title saying announcements', () => {
      page.getPageOneTitleText().then(title => {
        expect(title).toEqual('TFG MMH30');
      });
    });

    it('do login and show announcement list', () => {
      announcePage = loginPage.doLogin('admin', 'password');
      announcePage.getPageOneTitleText().then(
          value => expect(value).toEqual('Anuncios')
      );
      navbarPO.toggle();
      navbarPO.navigateToButton(1);
    });

    // it('do login and show menu', () => {
    //   announcePage = loginPage.doLogin('admin', 'password');
    //   announcePage.getPageOneTitleText().then(
    //       value => {
    //         expect(value).toEqual('Anuncios');
    //
    //       }
    //   );
    //
    // });

  });
});
