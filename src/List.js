import React, { useState } from "react";
import DeleteItem from "./assets/icons/trash-outline.svg";
const List = (props) => {
	const [line, setLine] = useState(false);

	const cutIt = () => {
		setLine(true);
	};

	return (
		<div className="is-centered">
			<li
				style={{
					textDecoration: line ? "line-through" : "none",
					listStyle: "none",
					fontSize: "20px"
				}}>
				<span className="deleteIcon" onClick={cutIt}>
					<img src={DeleteItem} alt=" Delete Item" />
				</span>
				{props.text}
			</li>
		</div>
	);
};
export default List;
