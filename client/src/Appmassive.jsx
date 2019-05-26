import React from 'react';
import ButtonDelete from './ButtonDelete';
class Appmassive extends React.Component {

        
	render() {
 
        const arr = this.props.items;

		const list = 1;
        console.log('this.props.items'+this.props.items);
        console.log(JSON.stringify(this.props.items));
        const items = this.props.items;
//        const items = [1,2,3];
        

		return (<ul>
			{items.map((item,i) => <li key={i}>{item} <ButtonDelete keyondelete = {item} />
        
                  </li>)}
		</ul>);
	}
}

export default Appmassive;

 /*this.setState({ responseToDeletePost: body });  */    
/*  componentDidMount() {
    this.DeleteKeyword()
      .then(messages => {console.log("messages: " + messages);
                         this.setState({deleteword: messages });
                          })
      .catch(err => console.log(err));
     
  }*/