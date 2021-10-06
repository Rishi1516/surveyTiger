import '../App.css'

import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

export default function SingleSelect(){
    return(
        <div className="question-container">
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Q</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="User Question" />
            </InputGroup>
            <p className="p-tag">Options</p>
            <div>
                <input className="option-container" placeholder="Option 1" />
                <button className="option-btn">+</button>
                <button className="option-btn">-</button>
            </div>
            <div>
                <input className="option-container" placeholder="Option 2" />
                <button className="option-btn">+</button>
                <button className="option-btn">-</button>
            </div>
            <div className="btn-grp">
                <Button className="survey-main-btn">Add Question</Button>
                <Button className="survey-main-btn">Publish</Button>
            </div>
        </div>
    )
};