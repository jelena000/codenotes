import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import './Home.css'
import './Tasks.css'
import home from '../Icons/home.svg'
import search from '../Icons/search.svg'
import plus from '../Icons/plus.svg'
import Card from '../components/Card'
import SpecificCard from '../components/SpecificCard'
import Modal from '../components/Modal'

const data = [
    {
        title: 'Fixed Sidebar with window height',
        tools: ["html","css","jecapeca"],
        color: '#fb75aa'
    },
    {
        title: 'Uploading multiple images',
        tools: ["axios", "images"],
        color: '#34985d'
    },
    {
        title: 'App.js router with and without redux',
        tools: ["react", "react-router"],
        color: '#347798'
    },
    {
        title: 'Complete Redux setup ( strore, actions, reducers)',
        tools: ["react", "redux"],
        color: '#98b459'
    },
]

export default class Tasks extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchTerm:"",
            sections: [],
            openModal: false,
        }
    }

    componentDidMount(){
        this.setState({ 
            sections: data,
        });

        //this.loadSections();
    }

    loadSections = () => {
        /*
        axios.get('/getAllSections')
        .then((res) => {
            const server_data = res.data;

            if(server_data.msg == ''){
                //
                let sections = server_data.sections;

                this.setState({
                    sections: sections
                })
            }else {
                console.log(server_data.msg);
            }
        })
        .catch((err) => {

        });
        */
    }
    
    heandleXClick= () => {
        this.setState({
          openModal : true
        })
    }

    handleClose=()=>{
        this.setState({
            openModal : false
        });
    }

    handleCreateNewCard = (data) => {
        let newSections = [...this.state.sections, data];
        //newSections.push(data);
        
        this.setState({
            sections: newSections
        });

        /*let body = data;

        axios.post('/createNewSection', body)
        .then((res) => {
            const server_data = res.data;

            if(server_data.msg == ''){
                //
                this.loadSections();
            }else {
                console.log(server_data.msg);
            }
        })
        .catch((err) => {

        });
        */
    }

    render() {
        return (
            <div>
                <Sidebar></Sidebar>
                <div className='pageContent'>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:"flex-start", alignItems:'flex-start'}}>
                        <div className='search'>
                            <div className='searchBar'>
                                    <div className='icon-s'>
                                        <img src={search} style={{width:16, height: 16}}/>
                                        </div>
                                    <input type='text' name='searchs' placeholder="Search..." className="search-input" onChange={event => {this.setState({searchTerm:event.target.value})}}></input>
                            </div>
                        </div>
                    </div>
                   <div className='cardContainer row'>
                       {
                        this.state.sections.filter((section)=>{
                            if(this.state.searchTerm == ""){
                                return section;
                            }else if(section.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
                                return section;
                            }
                        })
                        .map((section) => (
                            <SpecificCard title={section.title} tools={section.tools} color={section.color}  />
                        ))
                       }
                   </div>
                   {this.state.openModal && 
                   <Modal 
                        closeModal={this.handleClose } 
                        onCreateNewCard={this.handleCreateNewCard}
                    /> 
                    }   
                </div>
                
            </div>
        )
    }
}
