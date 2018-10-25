import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

class NavBar extends Component {
  render() {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="assets/logo.png" alt="logo" />
                    Task & Events App
                </Menu.Item>
                <Menu.Item name="Now!" />
                <Menu.Item>
                    <Button floated="right" positive inverted content="Create Task or Event" />
                </Menu.Item>
                <Menu.Item position="right">
                    <Button basic inverted content="Sign In" />
                    <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
                </Menu.Item>
            </Container>
        </Menu>
    )
  }
}

export default NavBar