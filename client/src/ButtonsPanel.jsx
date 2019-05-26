import React from 'react';

import {NavLink} from 'react-router-dom';


class ButtonsPanel extends React.Component {
    

	render() {
 
		return (<div className="container">
		    <div className="row buttonpanel">
		    
		  <div className="col btnpanel">
		    <button className="btn btn-warning"
            id="print"
            onClick={() => {
            window.print();
            }}
          >Main Page</button>
          </div> 
          
                  
         <div className="col btnpanel">
          <NavLink to={'/metrics'}>    
          <button className="btn btn-warning" 
             id="print"
          >Metrics</button>     
         </NavLink> 
          </div>
          
          <div className="col btnpanel">
          <NavLink to={'/redactor'}>    
          <button className="btn btn-warning" 
             id="print"
          >Script</button>     
         </NavLink> 
          </div>
          
          <div className="col btnpanel">
          <button className="btn btn-warning" 
             id="print"
            onClick={() => {
            window.print();
            }}
          >Print</button>
          </div>
          
          
          
          
        </div>  
		</div>);
	}
}

export default ButtonsPanel;