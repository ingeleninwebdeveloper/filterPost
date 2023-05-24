import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {

  constructor() {

    super() 

      this.state = {
        
        dataFilter: ''

      };

    }

    handleChange(e) {
      this.setState({
        dataFilter: e.target.value
      
      }) 

    }

  
  
  render() {
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" value={this.state.dataFilter || ""} onChange={this.handleChange.bind(this)} />
        </div>
        <ul>
          {posts.filter((item)=> {
            return this.state.dataFilter.toLowerCase()===''?
            item
            : item.title.toLowerCase().includes(this.state.dataFilter)
          }).map(function (d, idx){
            return (<li key = {idx}>
              <a href={d.url}><img src= {d.image}  alt=""/></a>
              <p>{ d.title }</p>
            </li>)
          })}
          
        </ul>
      <span>{this.state.dataFilter}</span>  
      </div>
    )
  }
}


export default App


