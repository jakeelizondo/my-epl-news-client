import React from 'react';
import ReactDOM from 'react-dom';
import { TEST_ARTICLE } from '../../team-helpers/TEAMS';
import SavedArticleCard from './SavedArticleCard';

describe('SavedArticleCard component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SavedArticleCard article={TEST_ARTICLE} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
