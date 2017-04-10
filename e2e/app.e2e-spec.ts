import { MyRedditAppPage } from './app.po';

describe('my-reddit-app App', () => {
  let page: MyRedditAppPage;

  beforeEach(() => {
    page = new MyRedditAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
