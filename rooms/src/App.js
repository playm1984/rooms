import React, { Component } from 'react'

import axios from 'axios'
import { Card, Container, Responsive, Segment } from 'semantic-ui-react'

import Menu from './components/Menu'
import RoomCard from './components/RoomCard'
import Loader from './components/Loader'

export default class App extends Component {
  state ={
    data: null,
    isReady: false,
  }

  

  componentDidMount() {
    axios.get('/db.json')
      .then(res=>{this.setState(
        {
          data: res.data,
          isReady: true
        }
        )})
  }

  onLike(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, like: !old.like };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    }); 
  } 

  render() {
    this.onLike = this.onLike.bind(this);


    const {data, isReady} = this.state; 
    return (
      <Segment.Group>
          <Responsive as={Segment} minWidth={768}>
                <Container >
                  <Menu/>
                  <Card.Group itemsPerRow={4} >
                      {
                        !isReady 
                        ? <Loader />
                        :data.map((data, id) => <RoomCard key={id} {...data} onLike={()=>this.onLike(id)} />)
                      }
                  </Card.Group>  
                </Container>
          </Responsive>

          <Responsive as={Segment} maxWidth={767}>
                <Container >
                  <Menu />
                  <Card.Group itemsPerRow={2} >
                      {
                        !isReady 
                        ? <Loader />
                        :data.map((data, id) => <RoomCard key={id} {...data} onLike={()=>this.onLike(id)} />)
                      }
                  </Card.Group>  
                </Container>
          </Responsive>
      </Segment.Group>
    )
  }
}


