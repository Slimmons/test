import { ConcertGiraffePage } from './app.po';

describe('concert-giraffe App', function() {
  let page: ConcertGiraffePage;

  beforeEach(() => {
    page = new ConcertGiraffePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cg works!');
  });
});
