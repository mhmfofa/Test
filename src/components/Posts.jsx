import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

class Posts extends Component {
    constructor(props){
        super(props);
        this.state= {notes:[]};
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({notes:data}));
    }
    render() {
        const newPosts = this.state.notes.map(note => ({ header: note.title, description: note.body,meta:note.id  }));
        return (
            <div>
                <br />
                <br />
                <br />
                <h1>Post List</h1>
              <Card.Group items={newPosts} />
            </div>
        );
    }
}

export default Posts;