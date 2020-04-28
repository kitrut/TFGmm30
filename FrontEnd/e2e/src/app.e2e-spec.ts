import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/announcements');
    });
    it('should have a title saying announcements', () => {
      page.getPageOneTitleText().then(title => {
        expect(title).toEqual('announcements');
      });
    });
  });
});
