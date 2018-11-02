import React, { Component } from 'react';

class Edit extends Component {

    titleRef = React.createRef();
    bodyRef = React.createRef();

    editPost = (e) => {
        e.preventDefault();
        
        const post = {
            title: this.titleRef.current.value,
            body: this.bodyRef.current.value,
            userId: 1,
            id: this.props.post.id
        }

        this.props.editPost(post);
    }

    loadForm = () => {

        if(!this.props.post) return null;

        const {title, body} = this.props.post;

        return (
            <form onSubmit={this.editPost} className="col-8">
                <legend className="text-center">Editar Post</legend>
                <div className="form-group">
                    <label htmlFor="title">Titulo del Post:</label>
                    <input ref={this.titleRef} type="text" className="form-control" defaultValue={title}/>
                </div>
                <div className="form-group">
                    <label htmlFor="body">Contenido del Post:</label>
                    <textarea ref={this.bodyRef} name="body" className="form-control" cols="30" rows="5" defaultValue={body}></textarea>
                </div>
                <button type="submit" className="btn btn-success">Guardar Cambios</button>
            </form>
        )
    }

    render() {        
        return (            
            <React.Fragment>
                {this.loadForm()}
            </React.Fragment>
        );
    }
}

export default Edit;