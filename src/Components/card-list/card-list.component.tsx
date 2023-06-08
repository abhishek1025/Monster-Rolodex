// import { Component } from "react";
import { Monster } from "../../App";
import Card from "../card/card.component";

import './card-list.style.css';

interface IcardList {
    monsters: Monster[]
}

const CardList = ({ monsters }: IcardList) => {
    return (
        <div className="card-list" key="container">
            {monsters.map((monster) => {
                return (
                    <Card monster={monster} key={monster.id} />
                )
            })}
        </div>
    )
}



// class CardList extends Component {

//     render() {
//         const { monsters } = this.props

//         return (
//             <div className="card-list" key="container">
//                 {monsters.map((monster) => {
//                     return (
//                         <Card monster={monster} key={monster.id} />
//                     )
//                 })}
//             </div>
//         )
//     }
// }

export default CardList;