import React, { Component } from 'react';

import Card from '../components/Card';
import PetForm from '../components/PetForm';


class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    };
  }

  onClick(index)
  {
    const list = this.state.list.map((pet,petIndex)=>{
      if (index === petIndex) {

      return {...pet,adopt:true}
    }
      return pet
    })
    this.setState({list})
  }

  async componentDidMount(){
    this.fetchData()
  }

  async fetchData(){
    const response =await fetch('http://localhost:8080/pets/');
    const { payload } = await response.json();
    

    
    const list = payload.allPets.map((pet)=>{
      const{
        name: title,
        breed:subtitle,
        photo:img,
        isAdopt: adopt
      }=pet;

      return {
        title,
        subtitle,
        img,
        adopt
      };
    })

    this.setState({ list });

  }


  render() {
    const cards = this.state.list.map((petInfo, index) => (
      <div
        className="col-md-4"
        key={index}
      >
        <Card
        onClick={this.onClick.bind(this, index)}
        {...petInfo}/>
      </div>
    ));

    return (
      <div className="container">
        <PetForm onSuccess={this.fetchData.bind(this)}/>
        <div className="row">
          { cards }
        </div>
      </div>
    )
  }
}

export default Index;
