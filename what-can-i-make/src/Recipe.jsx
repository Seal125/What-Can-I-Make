import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './RecipeStyles.css';

const Recipe = (props) => {
	console.log(props);
	return (
		<Col className='col-lg-6'>
			{props.isLoading ? (
				<h1>Loading recipes...</h1>
			) : (
				<Card>
					<CardImg
						top
						width='100%'
						className='img'
						src={props.recipe.image}
						alt='recipe'
					/>
					<CardBody>
						<CardTitle className='text'>{props.recipe.title}</CardTitle>
						{props.recipe.usedIngredients.length === 0 ? (
							<CardText>No ingredients here!</CardText>
						) : (
							<CardText>
								Here is what you need:
								<ul>
									{props.recipe.usedIngredients.map((ingredient) => (
										<li>{ingredient.original}</li>
									))}
								</ul>
							</CardText>
						)}
					</CardBody>
				</Card>
			)}
			<br />
		</Col>
	);
};
export default Recipe;
