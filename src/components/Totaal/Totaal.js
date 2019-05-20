import React, {Component} from 'react'

class Totaal extends Component {
    render() {
        return (
            <div>
                <div className="totaalIngred">
                    <p>Alle Ingredienten</p>
                </div>
                <div className="totaalEuro">
                    <p>Totaal: {this.props.ingredientsAdded}</p>
                    <p>Bedrag: {this.props.totalPrice}</p>
                </div>
            </div>
        )
    }
}

export default Totaal