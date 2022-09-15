import banner from './static/banner.png';
import './App.css';
import React from 'react';
import Image from 'react-image-resizer';

function App() {
  return (
      <div>
        <DisplayBanner />
        <NameForm />
      </div>
      

  );
}

function DisplayBanner(){
  return <img src={banner} alt="banner" class="center"/>
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first:'',
      last:'',
      email:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    SaveUser(this.state.email, this.state.first, this.state.last);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="fname">First Name</label>
        <input type="text" name="first" value={this.state.first} onChange={this.handleChange}/>
        <label for="lname">Last Name</label>
        <input type="text" name="last" value={this.state.last} onChange={this.handleChange}/>
        <label for="email">Email</label>
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

async function SaveUser(email, first, last){
  const response = await fetch('http://127.0.0.1:5000/storeInfo', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      email: email,
      first: first,
      last: last
    }), // string or object
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

// async function SaveUser(email, first, last){
//   const response = await fetch('http://127.0.0.1:5000/healthcheck', {
//     method: 'POST',
//   });
// }

export default App;













