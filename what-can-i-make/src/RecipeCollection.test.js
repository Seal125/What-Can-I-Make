import React from 'react';
import { render } from '@testing-library/react';
import RecipeCollection from './RecipeCollection';
import RecipeForm from './RecipeForm';


test('Renders the recipe form', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
