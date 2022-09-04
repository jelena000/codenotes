import React, { Component } from 'react'
import './Card.css'
import codeImg from '../Icons/code.svg'

export default class Card extends Component {   
    constructor(props){
        super(props);
    }

    handleClick = () =>{
        let id = this.props.id;
        this.props.navigate("/tasks/"+id);

    }
    render() {
        const { title, code, id } = this.props;

        return (
            <div className='one-card'>
                <div onClick={this.handleClick} className='card' style={{ borderColor: this.props.color || '#fff'}}>
                    <div className='card-title'>{title}</div>
                    <div className='card-icon'>
                         <img src={codeImg} style={{width:16, height: 16}}/>
                         <div>
                             {code}
                         </div>
                    </div>
                </div>
            </div>
        )
    }
}
