import React, { Component } from 'react';
import './Modal.css';
import Aux from '../../../hoc/Auxx/Auxx'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render(){
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.hide}/>
                <div className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <span style={{display:'flex', float:'right', cursor:'pointer'}} onClick={this.props.hide}>x</span>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;