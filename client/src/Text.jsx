import React from 'react';
class Text extends React.Component {

    render() {
        
        const scriptt = this.props.name;//скрипт
    
        const query = this.props.query;// массив ключевых слов
        console.log('query'+query);
        
        
        
        const separators = query.join('|');
        console.log('separators'+separators);
        const regex = new RegExp("(" + separators + ")", "gi");
        const parts = scriptt.split(regex);
        console.log('parts'+parts);
        //перебираем элементы массива query и выделяем их
        return (
        <div key={1} contentEditable="true"  spellCheck="false" id="text">
                { parts.map(part => query.some(elem => elem.toLowerCase() === part.toLowerCase()) ?
                <b key={2} contentEditable="false" >{part}</b> : part)}    
                </div>
        );
        }
};

export default Text;




/*onkeydown="this.style.width = ((this.value.length + 1) * 8) + 'px';"*/
 /*contenteditable="true" role="textbox"*/
 /*return <span>{parts.map(part => part.toLowerCase() === query.toLowerCase() ? */
/*return <div>{parts.map(part => query.some(elem => elem.toLowerCase() === part.toLowerCase()) ? */
/*return <div>{parts.map(part => part.toLowerCase() === query[0].toLowerCase() ?*/



/* <div> <button
            id="add"
            className="button"
            onClick={() => {     
              const spankey = document.getElementById("divid").innerText;
              localStorage.setItem('myKey', spankey); 
              this.setState({spantext: spankey});}}
                     
          >перезапись текста </button>
        </div>*/
 
/*<div contenteditable="true" role="textbox" spellcheck="false" id="divid"
       ><span data-text="true" id="spanid">{this.state.spantext}</span></div>*/