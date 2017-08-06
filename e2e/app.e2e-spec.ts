import { AngularCliVstsPage } from './app.po';

describe('angular-cli-vsts App', () => {
  let page: AngularCliVstsPage;

  beforeEach(() => {
    page = new AngularCliVstsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
