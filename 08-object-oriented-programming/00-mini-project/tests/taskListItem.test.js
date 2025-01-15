const TaskListItem = require('../lib/taskListItem.js');

describe('TaskListItem', () => {
  test('should render an <li> for a task', () => {
    const text = 'Take over the world';
    const expectedHtml = '<li class="tasks-item">Take over the world</li>';
    const item = new TaskListItem([text]);
    expect(item.render()).toEqual(expectedHtml);
  });

  test('should render a priority task', () => {
    const text = 'Climb a mountain';
    const expectedHtml =
      '<li class="tasks-item tasks-item-priority">Climb a mountain</li>';
    const item = new TaskListItem([text], true);
    expect(item.render()).toEqual(expectedHtml);
  });
});
