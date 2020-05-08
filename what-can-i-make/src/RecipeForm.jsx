import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class RecipeForm extends Component {
	render() {
		return (
			<Form>
				<FormGroup>
					<Label
						className='col-lg-4 offset-4 text-left label'
						for='ingredients'>
						List Your Ingredients!
					</Label>
					<Input
						onSubmit={(e) => {
							e.preventDefault();
							this.props.getRecipes();
						}}
						className='col-lg-6 offset-3'
						onChange={(e) => {
							const userInput = e.target.value.split(', ').join(',+');
							this.props.setIngredients(userInput);
						}}
						type='text'
						name='ingredients'
						id='ingredients'
						placeholder='milk, eggs, cheese...(must have at least 2 ingredients)'
					/>
				</FormGroup>
				<Input
					color='primary'
					type='submit'
					className='col-lg-1 button'
					color='primary'
					onClick={(e) => {
						e.preventDefault();
						this.props.getRecipes();
					}}>
					Submit
				</Input>
			</Form>
		);
	}
}

export default RecipeForm;
