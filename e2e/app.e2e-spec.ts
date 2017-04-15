import { MmWebFrontendPage } from './app.po';

describe('mm-web-frontend App', () => {
  let page: MmWebFrontendPage;

  beforeEach(() => {
    page = new MmWebFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
