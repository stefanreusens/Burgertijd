import React, {Component} from 'react'
import Fab from '@material-ui/core/Fab';
import Ingredients from './components/Ingredients/Ingredients'
import Totaal from './components/Totaal/Totaal'
import Header from './components/Header/Header'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './App.css';




class App extends Component {
  constructor() {
    super()
    this.state = {
    broodjes: [
      {
        id: 1,
        name: 'Wit broodje',
        price: 1
      }, {
        id: 2,
        name: 'Bruin broodje',
        price: 1.5
      }, {
        id: 3,
        name: 'Volkoren broodje',
        price: 2
      }
    ], 
    
    burgers: [
      {
        id: 4,
        name: 'Vleesburger',
        price: 3
      }, {
        id: 5,
        name: 'Groentenburger',
        price: 3
      }, {
        id: 6,
        name: 'Falafelburger',
        price: 4
      }, {
        id: 7,
        name: 'Portobelloburger',
        price: 4
      }
    ],

    beleg: [
      {
        id: 8,
        name: 'Kaas',
        price: 2
      }, {
        id: 9,
        name: 'Sla',
        price: 1
      }, {
        id: 10,
        name: 'Tomaat',
        price: 1
      }, {
        id: 11,
        name: 'Gras',
        price: 0.25
      }, {
        id: 12,
        name: 'Mystery snorhaar',
        price: 0.25
      }
    ],

    sauzen: [
      {
        id: 13,
        name: 'Mayonaise',
        price: 1
      }, {
        id: 14,
        name: 'Ketchup',
        price: 1
      }, {
        id: 15,
        name: 'Bickysaus',
        price: 1.5
      }, {
        id: 16,
        name: 'Mosterd',
        price: 1
      }, {
        id: 17,
        name: 'Looksaus',
        price: 1.5
      }, {
        id: 18,
        name: 'Cocktailsaus',
        price: 1.5
      }
    ],
    totalPrice: null,
    ingredientsAdded: []
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(input) {
    this.addIngredient(input)
    console.log(input);
  }

  addIngredient(ingredient) {
      this.setState(prevState => ({
        totalPrice: prevState.totalPrice + ingredient.price,
        ingredientsAdded: prevState.ingredientsAdded.concat(ingredient.name) + ' ',
      }))
    }
  
  render () {
    // MAP LIST ITEMS
    const broodjesList = this.state.broodjes.map((brood, i) => 
      <Ingredients 
        key={i}
        id={brood.id}
        ingredient={brood} 
        value='Broodjes' 
        handleClick={(ingredient) => this.handleClick(ingredient)} 
      />)

    const burgerList = this.state.burgers.map(burger => 
      <Ingredients 
        key={burger.id}
        ingredient={burger} 
        value='Burgers' 
        handleClick={(ingredient) => this.handleClick(ingredient)} 
      />)

    const belegList = this.state.beleg.map(smeersel => 
      <Ingredients 
        key={smeersel.id} 
        ingredient={smeersel} 
        value='Beleg' 
        handleClick={(ingredient) => this.handleClick(ingredient)} 
      />)

    const sauzenList = this.state.sauzen.map(saus => 
      <Ingredients 
        key={saus.id}
        ingredient={saus} 
        value='Sauzen' 
        handleClick={(ingredient) => this.handleClick(ingredient)} 
      />)
    

    return (
      <div>
        <div id="header">
          <Header />
          <AnchorLink href='#container'>
          <Fab></Fab>
          </AnchorLink>
        </div>

        <div id="container">
          <div className="ingredientList">
        
            <ul>
            <div><h3>Broodjes</h3></div>
              {broodjesList}
            </ul>
          </div>
          <div className="ingredientList">
            <h3>Burgers</h3>
            <ul>
              {burgerList}
            </ul>
          </div>
          <div className="ingredientList">
            <h3>Beleg</h3>
            <ul>
              {belegList}
            </ul>
          </div>
          <div className="ingredientList">
            <h3>Sauzen</h3>
            <ul>
              {sauzenList}
            </ul>
       
          </div>

 
        </div>
        
        <div id="totalement">
          <Totaal id={this.state} ingredientsAdded={this.state.ingredientsAdded} totalPrice={this.state.totalPrice} />
        </div>
      </div>

    )
  }
}


export default App