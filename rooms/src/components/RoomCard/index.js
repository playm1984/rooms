import React from 'react'

import { Card, Image, Icon } from 'semantic-ui-react'

import './room-card.css'

function RoomCard ({ title, image, price, address, like, onLike })  {

    let color = "gray";
    if (like) {
      color += " red";
    } 

    return(
        <Card>
            <Image src={image} />
            <Card.Content>
                <Card.Header >{title}</Card.Header>
                <Card.Meta>
                    <span >{address}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra >
                <Icon name='rub' /> {price}
                <Icon name='heart' onClick={onLike} className={color}/>    
            </Card.Content>
        </Card>
    )
}
    

export default RoomCard 

