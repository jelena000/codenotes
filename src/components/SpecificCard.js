import React, { Component } from 'react'
import dot from '../Icons/dot.svg'
import './SpecificCard.css'

export default class SpecificCard extends Component {
   constructor(props){
     super(props);
   }  
  render() {
    const { title, tools, color } = this.props;  
    return (
        <div className='one-card-s'>
        <div className='card-s'>
            <div className='card-title-s'>{title}</div>
            <div className='card-icon-s'>
                 <div style={{display:'flex',alignItems:"center"}}>
                   {
                      tools.map((t)=>  
                        <div className='tools-s'>
                          <div style={{ marginTop: 2,display:'flex',flexDirection:'row',border:'1px solid',borderRadius:90, width:9, height:9, color: this.props.color || '#fff', backgroundColor: this.props.color || '#fff'}}></div>
                          {t}
                        </div>
                      )
                   }
                 </div>
                 <img src={dot} style={{width:16, height: 16}}/>
            </div>
        </div>
    </div>
    )
  }
}
