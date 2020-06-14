import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RecipeCollection from './RecipeCollection';
import RecipeForm from './RecipeForm';
import Recipe from './Recipe';

test('Renders the recipe form', () => {
  const { getByText } = render(<RecipeForm />);
  const linkElement = getByText('List Your Ingredients!');
  expect(linkElement).toBeInTheDocument();
});

test('Renders recipes once user inputs ingredients', () => {
  render(<RecipeCollection />);
  const submit = screen.getByText('Submit');
  fireEvent.click(submit);
  expect(<Recipe />).toBeInDocument();
});

test('Changes format from user input to query strings', () => {
  render(<RecipeForm />);
  const ingredients = 'eggs, milk, bread';
  expect(<RecipeForm ingredients={ingredients} />).toBe('eggs,+milk,+bread');
});
