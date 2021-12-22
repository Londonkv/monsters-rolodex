import React, { Component } from "react";
import Card from "../card/Card";
import "./CardList.css";

class CardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: props.monsters,
		};
	}
	render() {
		return (
			<div className="card-list">
				{this.props.monsters.map((monster) => (
					<Card key={monster.id} monster={monster} />
				))}
			</div>
		);
	}
}

export default CardList;
