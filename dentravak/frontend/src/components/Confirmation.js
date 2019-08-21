import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography'

export default class Confirmation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Typography variant="h5">Thank you for placing your order</Typography>
                <Typography variant="h6">Your sandwich: <br /><b>{this.props.sandwich.name} ({this.props.sandwich.ingredients})</b><br /><b>€ {this.props.sandwich.price}</b></Typography>
                
            </div>
        )
    }
}