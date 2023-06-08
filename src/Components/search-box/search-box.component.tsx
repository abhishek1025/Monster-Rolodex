// import { Component } from "react";
import { ChangeEvent, ChangeEventHandler } from 'react';
import './search-box.styles.css';


interface IsearchBoxProps {
    className: string;
    placeholder?: string | null;
    onChangeHandler: (e: ChangeEvent) => void;
}

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => {

    return (
        <input
            className={`search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    )
}


// class SearchBox extends Component {

//     render() {
//         return (
//             <input
//                 className={`search-box ${this.props.className}`}
//                 type='search'
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.onChangeHandler}
//             />
//         );
//     }
// }

export default SearchBox;