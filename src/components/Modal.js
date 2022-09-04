import React, { Component } from 'react';
import './Modal.css'
import airplay from '../Icons/airplay.svg'


export default class Modal extends Component {
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
        this.props.closeModal();
    }
   
    updateInputValue =(e)=>{
        e.preventDefault();

        this.setState({
            title: e.target.value
        });
    }



    
    render() {
        return <div>
                <div className='modalBackground'>
                        <div className='modalContainer'>
                            <div className= 'modalHader'>Create a Section</div>
                            <div className='modalInpContainer' >
                                <input className="newCardTitle" type="text" placeholder='Title' value={this.state.title} onChange={this.updateInputValue}></input>
                            </div>
                            <div style={{display:'flex', alignItems:'center'}} className='colorSection'>
                                <div style={{marginRight:20}}>Color</div>
                                <div className='choseColorBorder' style={{border: this.state.color === '#FF76AC' ? '1px solid #FF76AC' : '0px'}}>
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
                                <div className='choseColorBorder' style={{border: this.state.color === '#57B7BD' ? '1px solid #57B7BD' : '0px'}}>
                                    <div onClick={() => { this.setState({ color: '#57B7BD'});}} className='choseColor colorTwo'>
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
                                <div className='choseColorBorder' style={{border: this.state.color === '#6645AB' ? '1px solid #6645AB' : '0px'}}>
                                    <div onClick={() => { this.setState({ color: '#6645AB'});}} className='choseColor colorThree'>
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
                                <div className='choseColorBorder' style={{border: this.state.color === '#B9CD3F' ? '1px solid #B9CD3F' : '0px'}}>
                                    <div onClick={() => { this.setState({ color: '#B9CD3F'});}} className='choseColor colorFour'>
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
                                <div className='choseColorBorder' style={{border: this.state.color === '#41BF82' ? '1px solid #41BF82' : '0px'}}>
                                    <div onClick={() => { this.setState({ color: '#41BF82'});}} className='choseColor colorFive' >
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
                                <div className='choseColorBorder' style={{border: this.state.color === '#C4C4C4' ? '1px solid #C4C4C4' : '0px'}}>
                                    <div onClick={() => { this.setState({ color: '#C4C4C4'});}} className='choseColor colorSix'>
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
                            <div className='cancelCreate'>
                                <div onClick={this.props.closeModal} className='cancelBtn'>Cancel</div>
                                <div onClick={this.createNewCard} className='createBtn' style={{}}>Create</div>
                            </div>    
                        </div>
                    </div> 
              </div>;
    }
}
