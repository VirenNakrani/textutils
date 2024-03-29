import React, {useState} from 'react'

export default function TextForm(props) 
{
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase!", "Success")
    }
    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To Lowercase!", "Success")
    }
    const handleClearClick = ()=>{
        let newText = ' ';
        setText(newText)
        props.showAlert("Text Clered!", "Success")
    }
    const handleOnChange = (event)=>{
       // console.log("On change");
        setText(event.target.value);
    }

// EXTRA
    const handleCopy = ()=>{
        console.log("I Am Copy");
        var text= document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy To Clipboard!", "Success")
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!", "Success")
    }

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    //setText("new text"); // Correct way to change the state
return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#1d153e'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#1d153e'}} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Conveer to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#1d153e'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something In The Textbox Above To Preview It Here"}</p>
    </div>
    </>
)
}
