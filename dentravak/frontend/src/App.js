import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

import CustomerScreen from './screens/Customer'
import AdminScreen from './screens/Admin'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentScreen: 'customer',
        }
    }

    componentWillMount = () => {
        this.refresh()
    }

    refresh = () => {
        this._fetchSandwiches()
        this._fetchOrders()
    }

    _fetchSandwiches = () => {
        fetch('http://localhost:8080/sandwiches').then(response => response.json()).then(sandwiches => this.setState({sandwiches}))
    }

    _fetchOrders = () => {
        fetch('http://localhost:8080/orders').then(response => response.json()).then(orders => this.setState({orders}))
    }

    changeCurrentScreen = (screen) => {
        this.setState({currentScreen: screen})
    }

    render() {
        return (
            <div>
                <AppBar color="default">
                    <Container>
                        <Toolbar>
                            <Typography variant="h6" color="inherit" style={{marginRight: '50px'}}>
                                Den Travak
                            </Typography>
                            <Button color="inherit" style={{width: '100px'}} onClick={() => this.changeCurrentScreen('customer')}>Customer</Button>
                            <Button color="inherit" style={{width: '100px'}} onClick={() => this.changeCurrentScreen('admin')}>Admin</Button>
                        </Toolbar>
                    </Container>
                </AppBar>
                <Container style={{marginTop: '100px'}}>
                    {this.state.currentScreen === 'customer' ? 
                        <CustomerScreen sandwiches={this.state.sandwiches} refresh={this.refresh} /> 
                    : 
                        <AdminScreen sandwiches={this.state.sandwiches} orders={this.state.orders} refresh={this.refresh} />
                    }
                </Container>
            </div>
        )
    }
}