import React from 'react';
import Text from './Text';
console.log("localStorage: "+localStorage.getItem('myKey'));
const ft = localStorage.getItem('myKey');

class TextContainer extends React.Component {    
       
    constructor () {
    super()
    this.state = {
    spantext: ft,
    keywords: ['test'],
    needKey: '',
    arr:[],
  }; 
    };

  
    render () {
        const arr = this.props.itemskey;
        const script = this.state.spantext; 
        console.log(this.props.itemskey);
        this.state.keywords = arr;
                
        return (  
            <div>
            <p><strong></strong></p>
          
            <Text key={this.state.needKey} name={this.state.spantext} query={this.state.keywords} />  
              <button
            id="add"
            className="btn btn-light"
            onClick={() => { 
              const script = document.getElementById("text").innerText;
              localStorage.setItem('myKey', script); 
              this.setState({spantext: script});
              console.log('script'+script);
              this.setState({ needKey: Math.random() });
              this.setState({ keywords: arr });
                 }}>
            Save script
            </button>
            </div>
               );
    }
};
export default TextContainer;


