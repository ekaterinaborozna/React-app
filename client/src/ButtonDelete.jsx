import React from 'react';
class ButtonDelete extends React.Component {
       constructor () {
    super()
    this.state = {
    deleteword: '',
    responseToDeletePost: ''
    }; 
    };
    
    
    DeleteKeyword = async e =>  {
       console.log(e);
       this.setState({ deleteword: e });
        
       const response = await fetch('/api/delete', {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json',
       },
       body: JSON.stringify({deleteword: this.state.deleteword}),
       });
        const body = await response.text();
        this.setState({ responseToDeletePost: body });  
    }; 
     
    
    render() {
        const keyword = this.props.keyondelete;
        console.log('keyword= '+this.props.keyondelete);
        this.state.deleteword = keyword;
        
    return ( <span>{this.state.responseToDeletePost}
       <button className="btn btn-light btn-delete"  
                   
                            onClick={() =>{
                             this.DeleteKeyword(keyword);
                             }}><img id="deletebutton" src="delete.jpg"/></button>     
       </span> );    
    };   
    };

export default ButtonDelete;