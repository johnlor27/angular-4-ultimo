import { AngularProjectManagerPage } from './app.po';

describe('angular-project-manager App', function() {
  let page: AngularProjectManagerPage;

  beforeEach(() => {
    page = new AngularProjectManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
