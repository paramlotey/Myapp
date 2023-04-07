import React ,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log(text)
        setText(text.toUpperCase())
    }
    const handelOnChange=(event)=>{
        console.log("on change")
        setText(event.target.value)
    }

    const[text,setText]=useState()
    return (
        <>
                <h3>{props.heading}</h3>
                <div className="form-group">
                    <textarea className="form-control" id="myBox" rows={8} value={text} onChange={handelOnChange}/>
                </div>
                <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>

        </>
    )
}
