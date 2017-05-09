import { PesquisaSatisfacaoPage } from './app.po';

describe('pesquisa-satisfacao App', () => {
  let page: PesquisaSatisfacaoPage;

  beforeEach(() => {
    page = new PesquisaSatisfacaoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
