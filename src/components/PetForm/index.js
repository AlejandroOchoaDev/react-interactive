import React, {Component} from 'react';
//import { format } from 'url';
import Button from '../Button';

class PetForm extends Component {
  constructor (props){
    super(props)
    this.state={
      name : '',
      breed: '',
      img:''
    };
  }

  onChange(event){
    const {id,value}=event.target

    this.setState({[id]:value})
  }

  async onSubmit(event){
    event.preventDefault();

    const response = await fetch ('http://localhost:8080/pets/',{
     method: 'POST',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
       name: this.state.name,
       breed:this.state.breed,
       photo: this.state.img,
       ageInMonths:1,
       size: 'medium',
       spacies:'dog',
       owner:'me',
       userId:0
      })
     });

     const {success} = await response.json();
     if(success) this.props.onSuccess();

     this.setState({
      name : '',
      breed: '',
      img:''
     });
  }


  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-grup">
          <label htmlFor="name">
              Name
          </label>
          <input
             className="form-control"
             id="name"
             aria-describedby="pet-name"
             placeholder="Enter the name of the pet"
             value={this.state.name}
             onChange={this.onChange.bind(this)}
          />
        </div>

        <div className="form-grup">
          <label htmlFor="breed">
              Breed
          </label>
          <input
             className="form-control"
             id="breed"
             aria-describedby="pet-breed"
             placeholder="Enter the breed of the pet"
             value={this.state.breed}
             onChange={this.onChange.bind(this)}
          />
        </div>

        <div className="form-grup">
          <label htmlFor="img">
              Image Link
          </label>
          <input
             className="form-control"
             id="img"
             aria-describedby="pet-img"
             placeholder="Enter the img link of the pet"
             value={this.state.img}
             onChange={this.onChange.bind(this)}
          />
        </div>
        <Button 
        className="btn-primary"
        text="crear Pet" />
      </form>
    )
  }
}



export default PetForm;
