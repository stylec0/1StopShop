import React from "react";

export default function ItemsCard(props) {
    console.log("this is props from ProductsCard", props);
    let list = props.products.map((d, i) => {
		return (
			<li key={i} onClick={() => props.handleClick(d)}>
				{d.name} - {d.price} <br></br>
				{d.description}
			</li>
		);
	});
	return (
		<div className="ItemsCard">
			<h2>Put these in your cart!</h2>
			{list}
		</div>
	);
}
