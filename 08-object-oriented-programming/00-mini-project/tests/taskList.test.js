const TaskList = require('../lib/taskList.js');
const TaskListItem = require('../lib/taskListItem.js');

describe('TaskList', () => {
  test('should render ul with tasks', () => {
    const taskItems = [
      new TaskListItem(['First task']),
      new TaskListItem(['Second task'], true),
      new TaskListItem(['Third task']),
    ];
    const expectedHtml = [
      '<ul class="tasks">',
      '<li class="tasks-item">First task</li>',
      '<li class="tasks-item tasks-item-priority">Second task</li>',
      '<li class="tasks-item">Third task</li>',
      '</ul>',
    ].join('');
    const list = new TaskList(taskItems);
    expect(list.render()).toEqual(expectedHtml);
  });
});
