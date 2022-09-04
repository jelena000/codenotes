import React, { Component } from 'react';
import './Modal.css'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

export default class Modal2 extends Component {
    constructor(props){
        super(props);

        this.state = {
            cancelBtn: true,
            title: '',
            color: '',
        }
    }  

    createNewCard = () =>{
        let data = {
            title: this.state.title,
            color: this.state.color,
            code: 0
        };

        this.props.onCreateNewCard(data);
        this.props.onCloseModal();
    }
   
    updateInputValue =(e)=>{
        e.preventDefault();

        this.setState({
            title: e.target.value
        });
    }
    
    render() {
        return (
            <Modal center className='modalBackground-t' open={this.props.openModal} onClose={this.props.onCloseModal} style={{backgroundColor:'#413F49'}} >
                <div className='modalContainer-t'>
                    <div className= 'modalHader-t'>Create a Section</div>
                    <div className='modalInpContainer-t' >
                        <input className="newCardTitle-t" type="text" placeholder='Title..' value={this.state.title} onChange={this.updateInputValue} style={{fontSize: 15, color: '#eee', minHeight: 40}} ></input>
                    </div>
                    <div style={{display:'flex', alignItems:'center'}} className='colorSection-t'>
                        <div style={{marginRight:20}}>Color</div>
                        <div className='choseColorBorder-t' style={{border: this.state.color === '#FF76AC' ? '1px solid #FF76AC' : '0px'}}>
                            <div onClick={() => { this.setState({ color: '#FF76AC', });}} className='choseColor colorOne'>
                                {
                                    this.state.color === '#FF76AC' ?
                                    <div  style={{display:'flex', justifyContent:'center',alignItem:'center'}}>
                                        <div className="material-icons" style={{ fontSize:12}}>
                                            check
                                        </div>
                                    </div> :
                                    <div></div>
                                }     
                            </div>
                        </div>
                        <div className='choseColorBorder-t'style={{border: this.state.color === '#57B7BD' ? '1px solid #57B7BD' : '0px'}} >
                            <div onClick={() => { this.setState({ color: '#57B7BD'});}} className='choseColor-t colorTwo-t'>
                                {
                                    this.state.color === '#57B7BD' ?
                                    <div  style={{display:'flex', justifyContent:'center',alignItem:'center'}}>
                                        <div className="material-icons" style={{ fontSize:12}}>
                                            check
                                        </div>
                                    </div> :
                                    <div></div>
                                }
                            </div>
                        </div>
                        <div className='choseColorBorder-t'style={{border: this.state.color === '#6645AB' ? '1px solid #6645AB' : '0px'}} >
                            <div  onClick={() => { this.setState({ color: '#6645AB'});}} className='choseColor-t colorThree-t'>
                                {
                                    this.state.color === '#6645AB' ?
                                    <div  style={{display:'flex', justifyContent:'center',alignItem:'center'}}>
                                        <div className="material-icons" style={{ fontSize:12}}>
                                            check
                                        </div>
                                    </div> :
                                    <div></div>
                                }
                            </div>
                        </div>
                        <div style={{border: this.state.color === '#B9CD3F' ? '1px solid #B9CD3F' : '0px'}} className='choseColorBorder-t'>
                            <div onClick={() => { this.setState({ color: '#B9CD3F'});}}  className='choseColor-t colorFour-t'>
                                {
                                    this.state.color === '#B9CD3F' ?
                                    <div  style={{display:'flex', justifyContent:'center',alignItem:'center'}}>
                                        <div className="material-icons" style={{ fontSize:12}}>
                                            check
                                        </div>
                                    </div> :
                                    <div></div>
                                }
                            </div>
                        </div>
                        <div style={{border: this.state.color === '#41BF82' ? '1px solid #41BF82' : '0px'}} className='choseColorBorder-t' >
                            <div  onClick={() => { this.setState({ color: '#41BF82'});}}  className='choseColor-t colorFive-t' >
                                {
                                    this.state.color === '#41BF82' ?
                                    <div  style={{display:'flex', justifyContent:'center',alignItem:'center'}}>
                                        <div className="material-icons" style={{ fontSize:12}}>
                                            check
                                        </div>
                                    </div> :
                                    <div></div>
                                } 
                            </div>
                        </div>
                        <div style={{border: this.state.color === '#C4C4C4' ? '1px solid #C4C4C4' : '0px'}} className='choseColorBorder-t' >
                            <div onClick={() => { this.setState({ color: '#C4C4C4'});}} className='choseColor-t colorSix-t'>
                                {
                                    this.state.color === '#C4C4C4' ?
                                    <div  style={{display:'flex', justifyContent:'center',alignItem:'center'}}>
                                        <div className="material-icons" style={{ fontSize:12}}>
                                            check
                                        </div>
                                    </div> :
                                    <div></div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='cancelCreate-t'>
                        <div className='cancelBtn-t' onClick={this.props.onCloseModal}>Cancel</div>
                        <div  className='createBtn-t' onClick={this.createNewCard} style={{}}>Create</div>
                    </div>     
                </div>         
            </Modal>
        );
    }
}
