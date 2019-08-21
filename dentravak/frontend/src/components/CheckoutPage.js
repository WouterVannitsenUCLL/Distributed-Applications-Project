import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

const breadTypes = [
    {text: 'Turkish bread', id: 'TURKISH_BREAD'},
    {text: 'Wrap', id: 'WRAP'},
    {text: 'Boterhammekes', id: 'BOTERHAMMEKES'}
]

export default class CheckoutPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phoneNumber: '',
            breadType: breadTypes[0].id
        }
    }

    handleInputChange = (event) => {
        this.setState({phoneNumber: event.target.value})
    }

    handleSubmit = () => {
        if (this.state.phoneNumber === '') {
            alert('Please fill in your phone number')
        } else {
            const _order = {
                sandwichId: this.props.sandwich.id,
                phoneNumber: this.state.phoneNumber,
                breadType: this.state.breadType
            }

            this.props.handleSubmit(_order)
        }
    }

    render() {
        return (
            <div>
                <Typography variant="h4">Checkout</Typography>
                <Typography variant="h6">Your sandwich: <br /><b>{this.props.sandwich.name} ({this.props.sandwich.ingredients})</b><br /><b>€ {this.props.sandwich.price}</b></Typography>
                <TextField label="phoneNumber" value={this.state.phoneNumber} onChange={this.handleInputChange} margin="normal" /><br />
                <Select value={this.state.breadType} onChange={breadType => this.setState({breadType: breadType.target.value})}>
                    {breadTypes.map(type => {
                        return (
                            <MenuItem value={type.id} key={type.id}>{type.text}</MenuItem>
                        )
                    })}
                </Select><br />
                <Button variant="contained" onClick={this.handleSubmit}>Order sandwich</Button>
            </div>
        )
    }
}