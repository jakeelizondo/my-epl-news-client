import React from 'react';
import ReactDOM from 'react-dom';
import LargeArticleCard from './LargeArticleCard';
import { TEST_ARTICLE } from '../../../team-helpers/TEAMS';

describe('LargeArticleCard component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LargeArticleCard article={TEST_ARTICLE} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
