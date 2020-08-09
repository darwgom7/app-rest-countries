import React from 'react';
import '../assets/styles/Card.css';
import '../assets/styles/alignStart.css';
const Card = props => (
	<div className="Card">
		<img
			src={props.country.flag}
			alt={props.country.name}
			width={250}
		/>
		<h2>{props.country.name}</h2>
		<span className="alignStart">
			Region:
			<strong> {props.country.region}</strong>
		</span>
		<span className="alignStart">
			Subregion:
			<strong> {props.country.subregion}</strong>
		</span>
	</div>
);
export default Card;
