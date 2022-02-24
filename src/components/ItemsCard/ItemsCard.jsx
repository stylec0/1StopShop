import React from "react";



export default function ItemsCard(props,) {
    console.log(props, "<--this is props from ItemsCard" );
    
	return (
		<>
					<h2>Put these in your cart!</h2>
				 {props.itemName}
					</>
)}


//const ItemCard = function(props) {
	
//	return (
		
//		<li>
//			{props.itemName} - {props.price} <br></br>
//			{props.description}
//		</li>
//	);
//}


//export default function ItemsCard(props) {
//    console.log("this is props from ItemsCard", props);
    
//	return (
//		<div className="ItemsCard">
//			<h2>Put these in your cart!</h2>
//			{props.items.length > 0 && props.items.map(item => (
//				<ItemCard itemName={item.itemName} price={item.price} description={item.description}/>
//			))}
//		</div>
//	);
//}


//export default function ItemsCard(props) {
//    console.log("this is props from ItemsCard", props);
//    let list = props.products.map((d, i) => {
//		console.log(list, "<--this is list")
//		return (
//			<li key={i} onClick={() => props.handleClick(d)}>
//				{d.name} - {d.price} <br></br>
//				{d.description}
//			</li>
//		);
//	});
//	return (
//		<div className="ItemsCard">
//			<h2>Put these in your cart!</h2>
//			{list}
//		</div>
//	);
//}
