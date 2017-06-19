import { K2SampleDashPage } from './app.po';

describe('k2-sample-dash App', () => {
  let page: K2SampleDashPage;

  beforeEach(() => {
    page = new K2SampleDashPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
