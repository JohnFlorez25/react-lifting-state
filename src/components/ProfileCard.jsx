import React, { Component } from 'react';

class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>Card del perfil</h1>
                <h3>{this.props.name || 'Nombre'}</h3>
                <h3>{this.props.lastName || 'Apellido'}</h3>
                <h3>{this.props.phone || 'Telefono'}</h3>
            </div>
         );
    }
}
 
export default ProfileCard;