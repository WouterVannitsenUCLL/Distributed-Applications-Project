import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

export default class SandwichOverview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Typography variant="h4">Choose your sandwich</Typography><br />
                <div style={{display: 'flex'}}>
                    {this.props.sandwiches !== undefined ? this.props.sandwiches.map(sandwich => {
                        return (
                            <Card key={sandwich.id} style={{width: '500px', margin: '10px'}}>
                                <CardContent>
                                    <Typography variant="h5">{sandwich.name}</Typography>
                                    <Typography variant="h6">€ {sandwich.price}</Typography>
                                    <Typography>{sandwich.ingredients}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="secondary" onClick={() => this.props.selectSandwich(sandwich)}>Order this sandwich</Button>
                                </CardActions>
                            </Card>
                        )
                    }) : null}
                </div>
            </div>
        )
    }
}