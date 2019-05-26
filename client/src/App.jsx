import React, { Component } from 'react';
import './App.css';
import Apphighlight from './Apphighlight';

import Text from './Text';

import ButtonsPanel from './ButtonsPanel';
import Redactor from './Redactor';
import Appmassive from './Appmassive';
import Metrics from './Metrics';
import {BrowserRouter, Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
class App extends Component {
state = {
    messages: [],
    postmessage: '',
    postname:'',
    responseToPost: ''
    };

  componentDidMount() {
    this.callApi()
      .then(messages => {console.log("messages: " + messages);
                         this.setState({messages: messages });
                         
                          })
      .catch(err => console.log(err));
     
  }
  callApi = async () => {
    const responset = await fetch('/api/hello');
    const body = await responset.json();
    if (responset.status !== 200) throw Error();
    console.log('body');
    console.log(body);
    console.log(typeof(body));
    return body.messages;   
      
  };
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postname: this.state.postname, postmessage: this.state.postmessage }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  }; 
    
render() {
        
    return (
        
      <div className="App">        
        
        <BrowserRouter>
         <ButtonsPanel/>
       <div>
          <Route path='/redactor' 
          render={() => <Redactor myprops={this.state.messages} />}/>
          <Route path='/metrics' 
          render={() => <Metrics myprops={this.state.messages} />}/>            
       </div>
       </BrowserRouter> 
       
      <div className="container">
<div className="row"> 
        <div className="col headers"> 
        <h6></h6>
        <h></h>
        <p>Metrics1</p> 
        
        </div>
        <div className="col headers">
           <h6></h6>
            <h></h>
            <p>Metrics2</p> 
            
        </div>
        <div className="col headers">
           <h6></h6>
            <h></h>
            <p>Metrics3</p> 
            
        </div>
       </div>
        
<div className="row"> 
        <div className="col"> 
        
       <div>
          <form onSubmit={this.handleSubmit}>
          <p>
            <strong></strong>
          </p>
           <input
            className="form-control" type="text" placeholder="metrics"
            value={this.state.postname}
            onChange={e => this.setState({ postname: e.target.value })}
          />
           <input
            className="form-control" type="text" placeholder="keyword"
            value={this.state.postmessage}
            onChange={e => this.setState({ postmessage: e.target.value })}
          />
          <div>
          <button className="btn btn-light" type="submit" id="addnew">Add new</button>
          </div>
        </form>
        <p>{this.state.responseToPost}</p>
        <Appmassive items={this.state.messages} />
        </div>
        
        </div>
        
               <div className="col"> 
        
       <div>
          <form onSubmit={this.handleSubmit}>
          <p>
            <strong></strong>
          </p>
           <input
            className="form-control" type="text" placeholder="metrics"
            value={this.state.postname}
            onChange={e => this.setState({ postname: e.target.value })}
          />
           <input
            className="form-control" type="text" placeholder="keyword"
            value={this.state.postmessage}
            onChange={e => this.setState({ postmessage: e.target.value })}
          />
          <div>
          <button className="btn btn-light" type="submit" id="addnew">Add new</button>
          </div>
        </form>
        <p>{this.state.responseToPost}</p>
        <Appmassive items={this.state.messages} />
        </div>
        
        </div>
        
                <div className="col"> 
        
       <div>
          <form onSubmit={this.handleSubmit}>
          <p>
            <strong></strong>
          </p>
           <input
            className="form-control" type="text" placeholder="metrics"
            value={this.state.postname}
            onChange={e => this.setState({ postname: e.target.value })}
          />
           <input
            className="form-control" type="text" placeholder="keyword"
            value={this.state.postmessage}
            onChange={e => this.setState({ postmessage: e.target.value })}
          />
          <div>
          <button className="btn btn-light" type="submit" id="addnew">Add new</button>
          </div>
        </form>
        <p>{this.state.responseToPost}</p>
        <Appmassive items={this.state.messages} />
        </div>
        
        </div>
    
        </div>
        
        </div>

 
        </div>
    );
  }
}
export default App;

/*<div className="containerbutpan">
         <ButtonsPanel />
              
        </div>*/

 /*<NavLink to={'/redactor'}>    
          <button className="btn btn-warning" 
             id="print"
            
          >Ehhhh</button>     
         </NavLink>*/

  
    /*    <header className="App-header">
          <p className="App-name">
            <h3>Call Wizard</h3>
          </p>
        </header>*/