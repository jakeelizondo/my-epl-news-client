import React from 'react';
import ReactDOM from 'react-dom';
import { TEST_ARTICLE } from '../../../team-helpers/TEAMS';
import SmallArticleCard from './SmallArticleCard';

describe('SmallArticleCard component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SmallArticleCard article={TEST_ARTICLE} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
