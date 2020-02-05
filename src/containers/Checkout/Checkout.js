import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import queryString from 'query-string';

class Checkout extends Component{
    state={
        ingredients:{ 
            cheese:1,
            bacon:1,
            meat:1,
            salad:1
        }
    }

    componentDidMount(){
        
        //const query = new URLSearchParams(this.props.location.search);    //not working
        const ingredient = queryString.parse(this.props.location.search);
        this.setState({ingredients: ingredient});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
            </div>
        )
    }
}

export default Checkout;