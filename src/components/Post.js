import React, { Component } from 'react';

class Post extends Component {
    render() {
        const {id, title} = this.props.post;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary">Ver</button>
                    <button type="button" className="btn btn-sm btn-danger">Eliminar</button>
                </td>
            </tr>
        );
    }
}

export default Post;