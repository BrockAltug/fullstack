import pretty from 'pretty';
import { render } from '@testing-library/react';
import IssueList from '../components/IssueList'; // Import the IssueList component

const issues = [
  {
    url: 'https://api.github.com/repos/microsoft/vscode/issues/68',
    html_url: 'https://github.com/microsoft/vscode/issues/68',
    id: 117635943,
    node_id: 'MDU6SXNzdWUxMTc2MzU5NDM=',
    number: 68,
    title: 'Git: Support git history in VSCode',
  },
  {
    url: 'https://api.github.com/repos/microsoft/vscode/issues/127',
    html_url: 'https://github.com/microsoft/vscode/issues/127',
    id: 117711073,
    node_id: 'MDU6SXNzdWUxMTc3MTEwNzM=',
    number: 127,
    title: 'Provide option to opt out of line ending normalisation for files',
  },
];

describe('IssueList', () => {
  it('should render', () => {
    // Render the component
    const { container } = render(<IssueList issues={issues} />);

    // Format the HTML with the pretty package
    const html = pretty(container.innerHTML);

    // Save the snapshot
    expect(html).toMatchSnapshot();
  });

  it('should contain text', () => {
    // Render the component
    render(<IssueList issues={issues} />);

    // Check if the rendered HTML contains the specific text
    expect(document.querySelector('.list').innerHTML).toContain(
      'Git: Support git history in VSCode'
    );
  });
});