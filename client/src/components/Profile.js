import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'
class Profile extends Component{

    constructor(){

        super()
        this.state = {
            first_name :'',
            last_name:'',
            adresse:'',
            tel:'',
            date:'',
            horaire_livraison:'',
            email: ''
          
        }
    }

    componentDidMount(){
        const token = localStorage.usertoken
        const decoded =jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            adresse: decoded.adresse,
            tel: decoded.tel,
            date: decoded.date,
            horaire_livraison: decoded.horaire_livraison,
            email: decoded.email

        })
    }


    render(){
        return(
            <div className="container">
            <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto"></div>
            <h1 className="text-center">PROFILE</h1>
            
            </div>
            <table className="table col-md-6 mx-auto">
            <tbody>

<tr>
    <td>Prénom</td>
    <td>{this.state.first_name}</td>
</tr>
<tr>
    <td>Nom</td>
    <td>{this.state.last_name}</td>
</tr>
<tr>
    <td>Adresse</td>
    <td>{this.state.adresse}</td>
</tr>
<tr>
    <td>Telephone</td>
    <td>{this.state.tel}</td>
</tr>
<tr>
    <td>Date</td>
    <td>{this.state.date}</td>
</tr>
<tr>
    <td>Horaire_livraison</td>
    <td>{this.state.horaire_livraison}</td>
</tr>
<tr>
    <td>Email</td>
    <td>{this.state.email}</td>
</tr>

            </tbody>
            
            
            </table>
            </div>

        )
    }
} 
export default Profile