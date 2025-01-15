const Header = require('../lib/header.js');
const { formatDate } = require('../lib/date.js');

describe('Header', () => {
  test('should render header with the date', () => {
    const expectedHtml = [
      '<header class="header">',
      '<h1>Todo Today</h1>',
      `<p>${formatDate(new Date())}</p>`,
      '</header>',
    ].join('');
    const header = new Header();
    expect(header.render()).toEqual(expectedHtml);
  });
});
