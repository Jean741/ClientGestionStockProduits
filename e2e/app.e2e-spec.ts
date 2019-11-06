import { ClientGestionStockProduitsPage } from './app.po';

describe('client-gestion-stock-produits App', function() {
  let page: ClientGestionStockProduitsPage;

  beforeEach(() => {
    page = new ClientGestionStockProduitsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
