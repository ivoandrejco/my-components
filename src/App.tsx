import React, {Component} from 'react';

import Header from './header'


const patients = ['ivo','ivinek','marvin','martina','anika','sofinka','etienne']

interface IState {
  searchTerm: string;
}

class App extends Component<{},IState>{
  public constructor(props:{}) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  public render() {
    return (
      <Header 
        handleSearchChange={this.handleSearchChange}
        handleSearchSubmit={this.handleSearchSubmit}
      />
    )
  }

  private handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("app : " + e.target.value)
    //patients.map( p => return;)
    this.setState({searchTerm:e.target.value})
  }

  private handleSearchSubmit = (e:React.FormEvent) => {
    console.log("keyboard event ... " + this.state.searchTerm)
    e.preventDefault()
  } 
}

export default App;
