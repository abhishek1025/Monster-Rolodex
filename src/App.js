// import { Component } from 'react';
import './App.css';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';

import { useState, useEffect } from 'react';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) => setMonsters(data));
  }, [])

  useEffect(() => {

    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters)
  }, [searchField, monsters])

  const OnSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className='App'>

      <h1 className='app-title'>Monster Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={OnSearchChange}
        placeholder='Search Mosters'
      />

      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((data) =>
//         this.setState(
//           () => {
//             return { monsters: data }
//           }
//         )
//       );
//   }

//   OnSearchChange = (event) => {

//     const searchString = event.target.value.toLowerCase();

//     this.setState(
//       () => {
//         return { searchField: searchString }
//       }
//     )

//   }

//   render() {

//     const { monsters, searchField } = this.state;
//     const { OnSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className='App'>

//         <h1 className='app-title'>Monster Rolodex</h1>

//         <SearchBox
//           className='monsters-search-box'
//           onChangeHandler={OnSearchChange}
//           placeholder='Search Mosters'
//         />

//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }

// }

export default App;
