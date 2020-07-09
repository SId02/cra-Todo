import React, { useState } from "react";
import List from "./List";
import AddLogo from "./assets/icons/add-outline.svg";
const ToDo = () => {
	const [item, setItem] = useState("");
	const [newItem, setNewItem] = useState([]);
	const itemEvent = (event) => {
		setItem(event.target.value);
	};
	const listOfItem = () => {
		setNewItem((prevValue) => {
			return [...prevValue, item];
		});

		setItem(" ");
	};
	return (
		<>
			<div className="container">
				<div className="columns is-desktop is-mobile">
					<div className="column"></div>
					<div className="box boxmarpa">
						<h1 className="is-center has-text-centered" style={{ fontSize:"25px" ,color:"#000", fontWeight:"800" }}>
							<u> To Do List</u>
						</h1>
						<div className="column">
							<div className="field is-grouped">
								<div className="control">
									<input
										className="input"
										type="text"
										placeholder="Add a Item"
										value={item}
										onChange={itemEvent}
									/>
								</div>
								<div className="control">
									<button className="button newBtn" onClick={listOfItem}>
										<img src={AddLogo} alt="Add Items" />
									</button>
								</div>
							</div>
							<hr style={{ backgroundColor: "#918a8a" }} />
							<div className="level">
								<div className="level-center">
									<ol className="is-centered">
										{newItem.map((val, index) => {
											return <List key={index} text={val} />;
										})}
									</ol>
								</div>
							</div>
						</div>
					</div>

					<div className="column"></div>
				</div>
			</div>
		</>
	);
};
export default ToDo;
