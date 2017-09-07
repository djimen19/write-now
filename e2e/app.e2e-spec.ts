import { WriteNowAngularPage } from './app.po';

describe('write-now-angular App', () => {
  let page: WriteNowAngularPage;

  beforeEach(() => {
    page = new WriteNowAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
