import pretty from 'pretty';
import { render } from '@testing-library/react';
import IssueItem from '../components/IssueItem'; // Import the IssueItem component

const issue = {
  url: 'https://api.github.com/repos/microsoft/vscode/issues/68',
  html_url: 'https://github.com/microsoft/vscode/issues/68',
  id: 117635943,
  node_id: 'MDU6SXNzdWUxMTc2MzU5NDM=',
  number: 68,
  title: 'Git: Support git history in VSCode',
};

describe('IssueItem', () => {
  it('should contain the expected text', () => {
    // Render the component
    render(<IssueItem issue={issue} />);

    // Check if the text content matches
    expect(document.querySelector('.item').textContent).toBe(
      'Git: Support git history in VSCode'
    );
  });

  it('should match snapshot', () => {
    // Render the component
    const { container } = render(<IssueItem issue={issue} />);

    // Format the HTML using the pretty package
    const html = pretty(container.innerHTML);

    // Save the snapshot
    expect(html).toMatchSnapshot();
  });
});