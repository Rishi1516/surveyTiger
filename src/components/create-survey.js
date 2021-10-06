import '../App.css';
import SingleSelect from './single-select-comp';
import MultiSelect from './multi-select-comp';

import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default function CreateSurvey(){
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpenText, setDropdownOpenText] = useState('Select Question Type');

    const toggle = () => setDropdownOpen(prevState => !prevState);
  
    return (
        <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="survey-dropdown-btn" caret>
            {dropdownOpenText}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => setDropdownOpenText('Multi Select Question')} >
              Multi Select Question
          </DropdownItem>
          <DropdownItem onClick={() => setDropdownOpenText('Single Select Question')}> 
              Single Select Question
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {dropdownOpenText==='Multi Select Question'?<MultiSelect />:null}
      {dropdownOpenText==='Single Select Question'?<SingleSelect />:null}
    </>
    );
};