import pretty from 'pretty';
import { render } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  it('should render and match snapshot', () => {
    // Render the component
    const { container } = render(<SearchBar />);

    // Format the rendered output
    const html = pretty(container.innerHTML);

    // Verify the output matches the snapshot
    expect(html).toMatchSnapshot();
  });
});