import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const breadTypes = [
    {text: 'Turkish bread', id: 'TURKISH_BREAD'},
    {text: 'Wrap', id: 'WRAP'},
    {text: 'Boterhammekes', id: 'BOTERHAMMEKES'}
]

export default class AdminScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            ingredients: '',
            price: ''
        }
    }
    getSandwichName = (id) => {
        return this.props.sandwiches.map(sandwich => {
            if (sandwich.id === id) {
                return sandwich.name
            }
        })
    }

    getBreadType = (breadType) => {
        return breadTypes.map(type => {
            if (type.id === breadType) {
                return type.text
            }
        })
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = () => {
        const {name, price, ingredients} = this.state

        if (name === '' || price === '' || ingredients === '') {
            alert('All fields are required')
        } else {
            const _sandwich = {
                name: this.state.name,
                price: this.state.price,
                ingredients: this.state.ingredients
            }

            fetch('http://localhost:8080/sandwiches', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(_sandwich)
            }).then(() => {
                this.setState({name: '', ingredients: '', price: ''})
                alert('Sandwich successfully added')
            })
            this.props.refresh()
        }
    }

    render() {
        return (
            <div>
                <Typography variant="h4">Admin</Typography>
                <Typography variant="h6">Orders</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Sandwich</TableCell>
                            <TableCell>Bread Type</TableCell>
                            <TableCell>PhoneNumber</TableCell>
                            <TableCell>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.orders.map(order => {
                            return (
                                <TableRow key={order.id}>
                                    <TableCell>{this.getSandwichName(order.sandwichId)}</TableCell>
                                    <TableCell>{this.getBreadType(order.breadType)}</TableCell>
                                    <TableCell>{order.phoneNumber}</TableCell>
                                    <TableCell>{order.date}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table><br /><br />
                <Typography variant="h6">New Sandwich</Typography>
                <TextField label="name" name="name" value={this.state.name} onChange={this.handleInputChange} margin="normal" /><br />
                <TextField label="ingredients" name="ingredients" value={this.state.ingredients} onChange={this.handleInputChange} margin="normal" /><br />
                <TextField label="price" name="price" value={this.state.price} onChange={this.handleInputChange} margin="normal" /><br />
                <Button variant="contained" onClick={this.handleSubmit}>Add Sandwich</Button>

            </div>
        )
    }
}