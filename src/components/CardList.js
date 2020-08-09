import React from 'react';
import '../assets/styles/CardList.css';
import Card from './Card.js';
const CardList = props => {
	console.dir(props.children);
	return (
		<div className="Card-list">
			{props.countries.map(country => (
				<Card
					key={country.id}
					country={country}
				/>
			))}
		</div>
	);
};
export default CardList;
