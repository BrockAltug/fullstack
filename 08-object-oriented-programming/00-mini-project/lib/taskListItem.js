const Component = require('./component.js');

class TaskListItem extends Component {
  constructor(children, priority = false) {
    super(children);
    this.priority = priority;
  }
  render() {
    let classNames = 'tasks-item';
    if (this.priority) {
      classNames += ' tasks-item-priority';
    }
    return `<li class="${classNames}">${this.renderInnerHtml()}</li>`;
  }
}

module.exports = TaskListItem;
