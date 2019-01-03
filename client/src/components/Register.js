import React, { Component } from 'react'
import { register } from './UserFunctions'
class Register extends Component{
constructor(){
    super()
    this.state = {
        first_name:'',
        last_name:'',
        adresse:'',
        tel:'',
        date:'',
        horaire_livraison:'',
        email: '',
        password:''
    }
this.onChange = this.onChange.bind(this)
this.onSubmit = this.onSubmit.bind(this)

}
onChange(e){
this.setState({[e.target.name]: e.target.value})
}

onSubmit (e){
e.preventDefault()

const user = {
    first_name:this.state.first_name,
    last_name:this.state.last_name,
    adresse:this.state.adresse,
    tel:this.state.tel,
    date:this.state.date,
    horaire_livraison:this.state.horaire_livraison,
    email: this.state.email,
    password: this.state.password
}
register(user).then(res => {
    

        this.props.history.push('/login')
   
})
}

render(){
return(
<div className="container">
<div className="row">
<div className="col-md-6 mt-5 mx-auto">

<form noValidate onSubmit={this.onSubmit}>
<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
<div className="form-group">
<label htmlFor="first_name">Prénom</label>
<input type="text"
className="form-control"
name="first_name"
placeholder="Entrez votre prenom"
value={this.state.first_name}
onChange={this.onChange}
/>
</div>
<div className="form-group">
<label htmlFor="last_name">Nom</label>
<input type="text"
className="form-control"
name="last_name"
placeholder="Entrez votre nom"
value={this.state.last_name}
onChange={this.onChange}
/>
</div>

<div className="form-group">
<label htmlFor="adresse">Adresse</label>
<input type="text"
className="form-control"
name="adresse"

value={this.state.adresse}
onChange={this.onChange}
/>
</div>

<div className="form-group">
<label htmlFor="tel">Téléphone</label>
<input className="form-control"
name="tel"
value={this.state.tel}
onChange={this.onChange}
/>
</div>

<div className="form-group">
<label htmlFor="date">Date</label>
<input type="date"
className="form-control"
name="date"

value={this.state.date}
onChange={this.onChange}
/>
</div>

<div className="form-group">
<label htmlFor="horaire_livraison">Horaire Livraison</label>
<input type="time"
className="form-control"
name="horaire_livraison"

value={this.state.horaire_livraison}
onChange={this.onChange}
/>
</div>

<div className="form-group">
<label htmlFor="email"> Email</label>
<input type="text"
className="form-control"
name="email"

value={this.state.email}
onChange={this.onChange}
/>
</div>

<div className="form-group">
<label htmlFor="password">password</label>
<input type="password"
className="form-control"
name="password"
placeholder="Entrer Password"
value={this.state.password}
onChange={this.onChange}
/>
</div>
<button type="submit" className="btn btn-lg btn-primary btn-block">
Register 
</button>
</form>
</div>

</div>
</div>


)

}
}

export default Register