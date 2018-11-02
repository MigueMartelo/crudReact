import React, { Component } from 'react';

class Form extends Component {

    titleRef = React.createRef();
    bodyRef = React.createRef();

    createPost = (e) => {
        e.preventDefault();
        
        const post = {
            title: this.titleRef.current.value,
            body: this.bodyRef.current.value,
            userId: 1
        }

        this.props.createPost(post);
    }

    render() {
        return (            
            <form onSubmit={this.createPost} className="col-8">
                <legend className="text-center">Crear Nuevo Post</legend>
                <div className="form-group">
                    <label htmlFor="title">Titulo del Post:</label>
                    <input ref={this.titleRef} type="text" className="form-control" placeholder="Titulo del Post"/>
                </div>
                <div className="form-group">
                    <label htmlFor="body">Contenido del Post:</label>
                    <textarea ref={this.bodyRef} name="body" className="form-control" cols="30" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-success">Crear</button>
            </form>
        );
    }
}

export default Form;