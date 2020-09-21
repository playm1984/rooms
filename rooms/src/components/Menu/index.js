import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuComponents extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fluid widths={3}>
        <Menu.Item
          name='catalog'
          active={activeItem === 'catalog'}
          onClick={this.handleItemClick}
        >
          Каталог
        </Menu.Item>

        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          О нас
        </Menu.Item>

        <Menu.Item
          name='contacts'
          active={activeItem === 'contacts'}
          onClick={this.handleItemClick}
        >
          Контакты
        </Menu.Item>
      </Menu>
    )
  }
}