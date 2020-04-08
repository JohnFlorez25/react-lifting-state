import React, { Component } from 'react'
import ProfileForm from '../components/ProfileForm';
import ProfileCard from '../components/ProfileCard';

class ProfileGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            form : {
                name : '',
                last_name: '',
                phone: '',
            }
         }
    }

    _handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        }
        )
    }

    render() { 
        return ( <div className="container-profile">
                    <ProfileForm 
                        formProfile = {this.state.form}
                        handleChange = {this._handleChange}
                    /> 
                    <ProfileCard 
                        name = {this.state.form.name}
                        lastName = {this.state.form.last_name}
                        phone = {this.state.form.phone}
                    />
                 </div>);
    }
}
 
export default ProfileGenerator;