import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';


export default function TextForm(props) {

const [text, setText]= useState('Enter some text here')
const [boldText, setBoldText] = useState({
    fontWeight: "normal"
})


const [boldBtnText, setboldBtnText] = useState('Bold')
const toggleBold = () => {
    if(boldText.fontWeight === 'bold'){
        setBoldText({
            fontWeight: "normal"
        })
        setboldBtnText('Bold')
        props.displayAlert('success', 'Text has been unbold')
    }
    else{
        setBoldText({
            fontWeight: "bold"
        })
        setboldBtnText('Un Bold')
        props.displayAlert('success', 'Text has been bold')

    }
}

const upperCaseTextSetter = () => {
    setText(text.toUpperCase())
    props.displayAlert('success', 'Text has been uppercased')

}

const lowerCaseTextSetter = () => {
    setText(text.toLowerCase())
    props.displayAlert('success', 'Text has been lowercased')

}

const clearText = () => {
    setText('') 
    props.displayAlert('success', 'Cleared!')

}

const copyText =  () => {
    // var mytext = document.getElementById('box')
    // mytext.select()
    navigator.clipboard.writeText(text)
    props.displayAlert('success', 'Copied to Clipboard!')

}

const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    props.displayAlert('success', 'Extra spaces have been removed')

}

const handleOnChange = (event) => {
    setText(event.target.value)
}

const textAreaColor = {
    backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
    color: props.mode === 'dark' ? 'white' : '#042743'
}

return (
    <>
        <div className='container my-5'>
            <div id='text-area'  className={`form-group text-${props.mode=== 'light' ? 'dark' : 'light'}`}>
                <h2><label htmlFor="box">{props.heading}</label></h2>
                <textarea className="form-control" style={{...boldText, ...textAreaColor}}  id="box" value={text} onChange={handleOnChange} rows="12"></textarea>
            </div>
            <div className= "my-2">
                <button disabled={text.length === 0} type='button' className='btn btn-primary' onClick={upperCaseTextSetter}>Upper Case</button>
                <button disabled={text.length === 0} type='button' className='btn btn-primary mx-2' onClick={lowerCaseTextSetter}>Lower Case</button>
                <button disabled={text.length === 0} type='button' className='btn btn-primary mx-2' onClick={clearText}>Clear</button>
                <button disabled={text.length === 0} type='button' className='btn btn-primary mx-2' onClick={toggleBold}>{boldBtnText}</button>
                <button disabled={text.length === 0} type='button' className='btn btn-primary mx-2' onClick={copyText}>Copy</button>
                <button disabled={text.length === 0} type='button' className='btn btn-primary mx-2' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>

        </div>
        <div className={`container my-5 text-${props.mode=== 'light' ? 'dark' : 'light'}`}>
            <h4>Text Summary</h4>
            <div>
                 <b>Words: </b>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length}
            </div>
            <div>
                 <b>Characters: </b>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length}
            </div>
            <div>
                 <b>Minutes to Read: </b>{0.008 * text.split(/\s+/).filter((element)=> {return element.length!==0}).length}
            </div>
            <div className='my-3'>
                <h4>Preview</h4>
                {text.length >0 ? text : "Nothing to preview..."}
            </div>
        </div>
    </>
    

)

}

TextForm.prototype = {
    heading: PropTypes.string.isRequired
}