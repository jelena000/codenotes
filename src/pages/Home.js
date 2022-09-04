import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import './Home.css'
import home from '../Icons/home.svg'
import search from '../Icons/search.svg'
import plus from '../Icons/plus.svg'
import Card from '../components/Card'
import Modal from '../components/Modal'
import withRouter from '../components/NavigateWrapper'
import Modal2 from '../components/Modal2'

const data = [
    {
        title: 'React Examples',
        code: 21,
        color: '#fb75aa',
        id: 1
    },
    {
        title: 'Usefull Libraries',
        code: 64,
        color: '#34985d',
        id: 2

    },
    {
        title: 'HTML/CSS components',
        code: 3,
        color: '#347798',
        id: 3
    },
    {
        title: 'Express.js Routes',
        code: 14,
        color: '#98b459',
        id: 4
    },
]

class Home extends Component {
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
                        <div onClick={this.heandleXClick} className='shadow-lg openModal '>
                                <img src={plus} style={{width:16, height: 16}}/>
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
                                
                                <Card title={section.title} code={section.code} color={section.color} id={section.id} navigate={this.props.navigate}/>
                            ))
                        }
                    </div>
                    {this.state.openModal && <Modal2 
                        openModal={this.state.openModal}
                        onCloseModal={this.handleClose } 
                        onCreateNewCard={this.handleCreateNewCard}
                    /> }
                </div>
            </div>
        )
    }
}

export default withRouter(Home);
