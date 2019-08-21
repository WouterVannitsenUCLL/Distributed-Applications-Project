import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography'

import CheckoutPage from '../components/CheckoutPage'
import SandwichOverview from '../components/SandwichOverview'
import Confirmation from '../components/Confirmation'

export default class CustomerScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedSandwich: null,
            ordered: false
        }
    }

    selectSandwich = (selectedSandwich) => {
        this.setState({selectedSandwich})
    }

    handleSubmit = (order) => {
        fetch('http://localhost:8080/orders', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        }).then(res => this.setState({ordered: true}))
        this.props.refresh()
    }

    render() {
        return (
            <div>
                {this.state.selectedSandwich === null
                ?
                    <SandwichOverview sandwiches={this.props.sandwiches} selectSandwich={this.selectSandwich} />
                :
                    this.state.ordered
                    ?
                        <Confirmation sandwich={this.state.selectedSandwich} />
                    :
                        <CheckoutPage sandwich={this.state.selectedSandwich} handleSubmit={(order) => this.handleSubmit(order)} />

                }
            </div>
        )
    }
}