import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	const comp = robots.map((user,i) =>{
		return <Card key ={robots[i].id} id ={robots[i].id} name = {robots[i].name} email = {robots[i].email}/>
	})
	return (
		<div>
			{comp}
		</div>
	)
}

export default CardList;