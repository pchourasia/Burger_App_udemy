import React, {Component} from 'react';
import Aux from '../Auxx/Auxx';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        state = {
            error: null
        }
        componentDidMount(){
            this.reqInterceptor = axios.interceptors.request.use(req =>{
                this.setState({error: null});
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error =>{
                this.setState({error: error});
            })
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandled = () => {
            this.setState({error: null});
        }

        render(){
            return(
                <Aux>
                    <Modal show={this.state.error} hide={this.errorConfirmedHandled}>
                        {this.state.error? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent/>
                </Aux>
            )
        }
    }
};

export default withErrorHandler;