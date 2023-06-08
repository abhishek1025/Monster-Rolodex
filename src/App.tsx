// import { Component } from 'react';
import './App.css';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';

import { useState, useEffect, ChangeEvent } from 'react';
import { getData } from './data.utils';

export type Monster = {
  id: number;
  name: string;
  email: string;
}

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }

    fetchUsers();
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);

  }, [searchField, monsters])

  const OnSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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


export default App;
