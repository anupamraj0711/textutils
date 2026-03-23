import React,{useState} from 'react'
//const [text, setText] = useState("Enter text here");
export default function TextForm(props) {
    const HandleUpClick = () =>{
        //console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        //setText("You have clicked on handleUpClick");
    }
        const HandleLoClick = () =>{
        //console.log("On changed" );
        let newText = text.toLowerCase();
        setText(newText);
        //setText(event.target.value);
    }
    const HandleOnClick = (event) =>{
        //console.log("On changed" );
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
    // text="New text"; // Wrong way to change the state
    // setText("New text"); // Correct way to change the state
  return (
    <>
    
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/*<label for="MyBox" className="form-label">Example Text Area</label>*/}
        <textarea className="form-control" id="MyBox" rows="8" value={text} onChange={HandleOnClick}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2 " onClick={HandleLoClick}>Convert to Lower Case</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
} 
