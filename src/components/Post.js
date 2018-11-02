import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert2';

class Post extends Component {

    deleteConfirmation = () => {
        const {id} = this.props.post;
        swal({
            title: 'Estas seguro?',
            text: 'No podras volver a ver el post',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borralo',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if(result.value) {
                this.props.deletePost(id)
                swal(
                    'Post Borrado!',
                    'El post ha sido borrado.',
                    'success'
                )
            }
        })
    }

    render() {
        const {id, title} = this.props.post;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <Link to={`/post/${id}`} className="btn btn-sm btn-primary">Ver</Link>
                    <Link to={`/editar/${id}`} className="btn btn-sm btn-warning">Editar</Link>
                    <button type="button" onClick={ this.deleteConfirmation} className="btn btn-sm btn-danger">Eliminar</button>
                </td>
            </tr>
        );
    }
}

export default Post;