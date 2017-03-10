import { TeamJsCjPage } from './app.po';

describe('team-js-cj App', function() {
  let page: TeamJsCjPage;

  beforeEach(() => {
    page = new TeamJsCjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
