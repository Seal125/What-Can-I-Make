import React, { useState } from 'react';
import { Row } from 'reactstrap';
import Recipe from './Recipe';
import RecipeForm from './RecipeForm';
import './RecipeStyles.css';

const RecipeCollection = () => {
	const [ingredients, setIngredients] = useState('');
	const [recipes, setRecipes] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	async function getRecipes() {
		const apiInfo = await fetch('/express_backend');
		const apiData = await apiInfo.json();
		console.log(apiData);
		setIsLoading(true);
		const key = 'b2337fd1d77d48eaa35de83c018132da';
		const response = await fetch(
			`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key}&ingredients=${ingredients}`
		);
		const data = await response.json();
		setRecipes(data);
		setIsLoading(false);
	}

	return (
		<div>
			<RecipeForm
				getRecipes={getRecipes}
				setRecipes={setRecipes}
				setIngredients={setIngredients}
			/>
			<br />
			<Row className='rows'>
				{recipes &&
					recipes.map((recipe) => (
						<Recipe
							setIsLoading={setIsLoading}
							isLoading={isLoading}
							recipe={recipe}
						/>
					))}
			</Row>
		</div>
	);
};

export default RecipeCollection;
