import React,{useState} from 'react'
//const [text, setText] = useState("Enter text here");
export default function TextForm(props) {
    const HandleUpClick = () =>{
        console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        //setText("You have clicked on handleUpClick");
    }
        const HandleOnClick = (event) =>{
        console.log("On changed" );
        //let newText = text.toUpperCase();
        //setText(newText);
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
    // text="New text"; // Wrong way to change the state
    // setText("New text"); // Correct way to change the state
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/*<label for="MyBox" className="form-label">Example Text Area</label>*/}
        <textarea className="form-control" id="MyBox" rows="8" value={text} onChange={HandleOnClick}></textarea>
        </div>
        <button className="btn btn-primary " onClick={HandleUpClick}>Convert to Upper Case</button>
    </div>
  )
} 
