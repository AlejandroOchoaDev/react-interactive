import React, { Component } from 'react';

import Card from '../components/Card';

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          title: 'Perejil',
          subtitle: 'Alaska Malamute',
          img: 'https://www.dogalize.com/wp-content/uploads/2016/11/Alaskan-Malamute-perro.jpg',
          adopt: false
        },
        {
          title: 'Nita',
          subtitle: 'Pitbull',
          img: 'https://www.dogalize.com/wp-content/uploads/2016/11/Alaskan-Malamute-perro.jpg',
          adopt: false
        },
        {
          title: 'Copito',
          subtitle: 'Gato',
          img: 'https://www.dogalize.com/wp-content/uploads/2016/11/Alaskan-Malamute-perro.jpg',
          adopt: false
        },
      ],
    };
  }

  render() {
    const cards = this.state.list.map((petInfo, index, onClick) => (
      <div
        className="col-md-4"
        key={index}
      >
        <Card {...petInfo}/>
      </div>
    ));

    return (
      <div className="container">
        <div className="row">
          { cards }
        </div>
      </div>
    )
  }
}

export default Index;
