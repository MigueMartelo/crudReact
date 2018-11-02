import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Navegation from './Navegation';
import Posts from './Posts';
import SinglePost from './SinglePost';

class Router extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    deletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                if(res.status === 200) {
                    const posts = [...this.state.posts];

                    let res = posts.filter(post => (
                        post.id != id
                    ));
                    this.setState({
                        posts: res
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row justify-content-center">
                        <Header />
                        <Navegation />
                        <Switch>
                            <Route exact path="/" render={ () => {
                                return (
                                    <Posts
                                        posts = {this.state.posts}
                                        deletePost = {this.deletePost}
                                    />
                                )
                            }}/>

                            <Route exact path="/post/:postId" render={ (props) => {
                                let idPost = props.location.pathname.replace('/post/', '');

                                const posts = this.state.posts;

                                let post;
                                post = posts.filter(post => (
                                    post.id === Number(idPost)
                                ));

                                return (
                                    <SinglePost
                                        post={post[0]}
                                    />
                                )
                            }} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
    
}

export default Router;