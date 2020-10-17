import React from "react";
//import ReactDOM from "react-dom";
import { Component } from 'react';
//import { jsx } from '@emotion/core';
import Button from '@atlaskit/button';
import Dropdown from './dropdown';
import './App.css'
import ShowMore from 'react-show-more';  
import Select from 'react-select';


const options = [
  {value: '1', label: 'Singapore'},
  {value: '2', label: 'Malaysia'},
  {value: '3', label: 'Indonesia'},
  {value: '4', label: 'Phillippines'},
  {value: '5', label: 'Thailand'},
  {value: '6', label: 'Russia'},
  {value: '7', label: 'Germany'},
  {value: '8', label: 'France'},
  {value: '9', label: 'Peru'},
  {value: '10', label: 'England'}
]

//const { colors } = defaultTheme;

const selectStyles = {
  control: provided => ({ ...provided, minWidth: 240, margin: 8 }),
  menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' }),
};
  
class App extends Component {
  state = { isOpen: false, value: undefined };

  toggleOpen = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };
  onSelectChange = value => {
    this.toggleOpen();
    this.setState({ value });
  };

  render() {
    const { isOpen, value } = this.state;
    return (
      <div className="container">
      <Dropdown
        isOpen={isOpen}
        onClose={this.toggleOpen}
        target={
          <Button
            id="buttonBase"
            iconAfter={<ChevronDown />}
            onClick={this.toggleOpen}
            isSelected={isOpen}
          >
            {value ? ` ${value.label}` : 'Select a location'}
          </Button>
        }
      >
        <Select
          autoFocus
          backspaceRemovesValue={false}
          components={{ DropdownIndicator, IndicatorSeparator: null }}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          menuIsOpen
          onChange={this.onSelectChange}
          options={options}
          placeholder="Search..."
          styles={selectStyles}
          tabSelectsValue={false}
          value={value}
        />
      </Dropdown>
      </div>
    );
  }
}

// styled components

  const Svg = p => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      focusable="false"
      role="presentation"
      {...p}
    />
  );
  const DropdownIndicator = () => (
    <div css={{  height: 24, width: 32  }}>
      <Svg>
        <path
          d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </Svg>
    </div>
  );
  const ChevronDown = () => (
    <Svg style={{ marginRight: -6 }}>
      <path
        d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </Svg>)




export default App;



