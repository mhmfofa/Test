import React, { Component } from 'react';
import logo from './logo.svg';
import tempParagraph from './components/paragraph.png';
import { Link, BrowserRouter } from 'react-router-dom'
import './App.css';
import Routes from './Routes';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu fixed='top' inverted>
            <Container>
              <Menu.Item as='a' header>
                <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
                Project Name
        </Menu.Item>
              <Menu.Item as='a'>
              <Link to='/'>Home</Link>
              </Menu.Item>
              <Menu.Item as='a'>
              <Link to='/posts'>Posts</Link>
              </Menu.Item>
              <Menu.Item as='a'>
              <Link to='/photos'>Photos</Link>
              </Menu.Item>

           
            </Container>
          </Menu>

          <Routes />

          <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign='center'>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Group 1' />
                    <List link inverted>
                      <List.Item as='a'>Link One</List.Item>
                      <List.Item as='a'>Link Two</List.Item>
                      <List.Item as='a'>Link Three</List.Item>
                      <List.Item as='a'>Link Four</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Group 2' />
                    <List link inverted>
                      <List.Item as='a'>Link One</List.Item>
                      <List.Item as='a'>Link Two</List.Item>
                      <List.Item as='a'>Link Three</List.Item>
                      <List.Item as='a'>Link Four</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Group 3' />
                    <List link inverted>
                      <List.Item as='a'>Link One</List.Item>
                      <List.Item as='a'>Link Two</List.Item>
                      <List.Item as='a'>Link Three</List.Item>
                      <List.Item as='a'>Link Four</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Footer Header' />
                    <p>
                      Extra space for a call to action inside the footer that could help re-engage users.
              </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Divider inverted section />
              <Image centered size='mini' src='/logo.png' />
              <List horizontal inverted divided link>
                <List.Item as='a' href='#'>
                  Site Map
          </List.Item>
                <List.Item as='a' href='#'>
                  Contact Us
          </List.Item>
                <List.Item as='a' href='#'>
                  Terms and Conditions
          </List.Item>
                <List.Item as='a' href='#'>
                  Privacy Policy
          </List.Item>
              </List>
            </Container>
          </Segment>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
