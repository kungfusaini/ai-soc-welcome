import React from "react";
import './Popup.css';

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={()=> props.setTrigger(false)}>close me</button>
            <NameForm/>
            {props.children}
        </div>
    </div>
  ) : "";
}

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        first:'',
        last:'',
        email:'',
        prompt:'',
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
      Generate(this.state.prompt);
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
          <label for="propmt">What shall we make?</label>
          <input type="text" name="prompt" value={this.state.prompt} onChange={this.handleChange}/>
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


  async function Generate(prompt){
    const response = await fetch('http://127.0.0.1:5000/generateArt', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        prompt: prompt,
      }), // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

export default Popup