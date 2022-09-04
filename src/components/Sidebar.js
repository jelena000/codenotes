import React, { Component } from 'react';
import './Sidebar.css';
import airplay from '../Icons/airplay.svg'
import globe from '../Icons/globe (1).svg'
import box from '../Icons/box.svg'
import award from '../Icons/award.svg'
import home from '../Icons/home.svg'

export default class Sidebar extends Component {
    render() {
        return (
            <div className='sbComp'>
                <div style={{marginTop:20, fontWeight:500, fontSize: 21}}>
                    W
                </div>
                <div className='icons-container'>
                    <div className='icon'>
                        <img src={home} style={{width:16, height: 16}}/>
                    </div>
                    <div className='icon'>
                        <img src={globe} style={{width:16, height: 16}}/>
                    </div>
                    <div className='icon'>
                        <img src={box} style={{width:16, height: 16}}/>
                    </div>
                    <div className='icon'>
                        <img src={award} style={{width:16, height: 16}}/>
                    </div>
                    <div className='icon'>
                        <img src={airplay} style={{width:16, height: 16}}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}
