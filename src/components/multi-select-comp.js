import { useState } from "react"
import { Button, Input, InputGroup, InputGroupText, InputGroupAddon } from "reactstrap";

export default function MultiSelect(){
    const [options, setOptions]=useState([""]);
    const addOption=()=>{
        if(options.length<4){
            setOptions([...options, ""]);
        }
    };
    const removeOption=(optionIdx)=>{
        if(options.length>1){
            options.splice(optionIdx, 1)
            setOptions([...options]);
        }
    };

    return(
        <div className="question-container">
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Q</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="User Question" />
            </InputGroup>
            <p className="p-tag">Options</p>
            {
                options.map((option, optionIdx)=>(
                    <div>
                        <input className="option-container" placeholder={`Option ${optionIdx+1}`} value={option} />
                        <button className="option-btn" onClick={addOption} disabled={options.length===4}>+</button>
                        <button className="option-btn" onClick={()=>removeOption(optionIdx)} >-</button>
                    </div>
                ))
            }
            {
                options.length===4 ?(
                    <div className="btn-grp">
                        <Button className="survey-main-btn">Add Question</Button>
                        <Button className="survey-main-btn">Publish</Button>
                    </div>
                ):null
            }
        </div>
    )
};