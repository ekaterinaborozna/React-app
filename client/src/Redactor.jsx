import React from 'react';
import Appmassive from './Appmassive';
import TextContainer from './TextContainer';
import Addinformation from './Addinformation';


class Redactor extends React.Component {


  render() {
      const my = this.props.myprops;

		return (  <div>
                 
        <div className="container">
<div className="row"> 
        <div className="col-4 headers"> 
        <h></h>
        <p>Detail information</p> 
        
        </div>
        <div className="col-8 headers">
            <h></h>
            <p>Conversation</p> 
            
        </div>
       </div>
        
<div className="row"> 
        <div className="col-4"> 
        <p><strong></strong></p>
        <Addinformation />
        </div>
        <div className="col-8">
            <TextContainer itemskey={my} />
        </div>
  
        </div>
        
        </div>
          </div>
           
               
               );
	}
}

export default Redactor;