import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("");
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleLoClick=()=>{
        const newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearText=()=>{
        setText("");
        props.showAlert("Text Cleared","success");
    }
    const handleTrimText=()=>{
        const newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spcaes removed.","success");
    }
    const handleCopyText=()=>{
        const text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }
  return (
    <>
    <div className={`text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="myBox" className='form-label' >Example textarea</label>
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Entire Text</button>
        <button className="btn btn-primary mx-2" onClick={handleTrimText}>Trim the Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Entire Text</button>
    </div>
    <div className={`container my-5 text-${props.mode==='light'?'dark':'light'}`}>
        <h2>Your Text Summary</h2>
        <p>{text.split.length} words and {text.length} characters</p>
        <p>{0.008*text.length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text in above textbox to preview here."}</p>
    </div>
    </>
  )
}
