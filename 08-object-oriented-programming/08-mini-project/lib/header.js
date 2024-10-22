const Component = require('./component.js');
const { formatDate } = require('./date.js');

class Header extends Component {
  render() {
    return `<header class="header"><h1>Todo Today</h1><p>${formatDate(
      new Date()
    )}</p></header>`;
  }
}

module.exports = Header;
