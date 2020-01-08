describe('App', () => {
  const hostName = 'http://localhost:3002';

  describe('root view', () => {
    beforeAll(async () => {
      await page.goto(`${hostName}/`, { waitUntil: 'networkidle0' });
    });

    it('should display items', async () => {
      await expect(page).toMatchElement(
        'ul[data-selector=item-list] li[data-selector=item-list-element]'
      );
    });

    it('should contain links', async () => {
      await expect(page).toMatchElement('a[data-selector=link-to-detail]');
    });

    it('should check if the link works', async () => {
      const preloadHref = await page.$eval(
        'a[data-selector=link-to-detail]',
        el => el.href
      );

      await page.click('a[data-selector=link-to-detail]');

      const urlAfterClick = await page.url();

      await expect(preloadHref).toEqual(urlAfterClick);
    });
  });
});
