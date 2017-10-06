import { LibraryAppPage } from './app.po';

describe('library-app App', () => {
  let page: LibraryAppPage;

  beforeEach(() => {
    page = new LibraryAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
