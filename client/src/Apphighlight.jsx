/*
import React from 'react';

class Apphighlight extends React.Component {
    
	render() {
    const textt = this.props.text;
    getHighlightedText(textt, higlight) {
    // Split on higlight term and include term into parts, ignore case
    let parts = textt.split(new RegExp(`(${higlight})`, 'gi'));
        
    
            
            
    return <span> { parts.map((part, i) => 
        <span key={i} style={part.toLowerCase() === higlight.toLowerCase() ? { fontWeight: 'bold' } : {} }>
            { part }
        </span>)
                   } </span>;
}

}

export default Apphighlight;
*/
