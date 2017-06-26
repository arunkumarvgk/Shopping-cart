import { ShoppingCartPage } from './app.po';

describe('shopping-cart App', () => {
  let page: ShoppingCartPage;

  beforeEach(() => {
    page = new ShoppingCartPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
