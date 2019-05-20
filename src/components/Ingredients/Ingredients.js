import React, {Component} from 'react'
// import Button from '@material-ui/core/Button'

class Ingredients extends Component {

    render() {
        return (
        
                <li className="div">   
                    <p>{this.props.ingredient.name}</p>
                    <p id="prijs">
                    
                    <button  aria-label="Add" mini id={this.props.id} onClick={() => this.props.handleClick(this.props.ingredient)}>
                    €{this.props.ingredient.price}
                    </button></p> 
                    
                   
                </li>
        )
    } 
}

export default Ingredients