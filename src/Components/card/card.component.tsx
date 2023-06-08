// import { Component } from "react";
import { Monster } from '../../App';
import './card.style.css';

interface ICardProps {
    monster: Monster;
}

const Card = ({ monster }: ICardProps) => {
    const { name, email, id } = monster;
    return (
        <div className="card-container">
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}


// class Card extends Component {
//     render() {
//         const { name, email, id } = this.props.monster;
//         // console.log(monster);
//         // console.log(this.props);
//         return (
//             <div className="card-container">
//                 <img
//                     alt={`monster ${name}`}
//                     src={`https://robohash.org/${id}?set=set2&size=180x180`}
//                 />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         );
//     }
// }

export default Card;