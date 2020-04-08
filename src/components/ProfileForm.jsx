import React, { Component } from 'react';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //name : '',
      // last_name: '',
    };
  }

  //_handleChange = (e) => {
  //  this.setState({
  //     [e.target.name] : e.target.value
  // })
  // console.log(this.state.name)
  //}

  render() {
    return (
      <div className="container-form-profile">
        <h1>Formulario del Perfil</h1>
        <form>
          <label>Nombre</label>{' '}
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={this.props.formProfile.name}
            //value={this.state.name}
            onChange={this.props.handleChange}
            //onChange={this._handleChange}
          />
          <br />
          <label>Apellidos</label>{' '}
          <input
            type="text"
            name="last_name"
            placeholder="Apellidos"
            value={this.props.formProfile.last_name}
            onChange={this.props.handleChange}
          />
          <br />
          <label>Telefono</label>{' '}
          <input
            type="number"
            name="phone"
            placeholder="Telefono"
            value={this.props.formProfile.phone}
            onChange={this.props.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default ProfileForm;
