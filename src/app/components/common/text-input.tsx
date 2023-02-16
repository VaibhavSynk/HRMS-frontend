import React from 'react';
import { InputGroup } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import { style } from '../../theming/style/style';

export default function CommonTextInput(props:any) {
    const { textFieldValue } = props;
  return (
    <div>
      <InputGroup className='mb-1 rounded-3'>
       <Form.Floating style={{...style.inputFloating}}> 
       <Form.Control
       className='rounded-3'
       placeholder={textFieldValue.label}
        id={textFieldValue.controlId}
        type={textFieldValue.iconsValue ? 'text' : textFieldValue.inputType}
        name={textFieldValue.name}
        value={textFieldValue.value}
        onChange={textFieldValue.handleChange}
        isValid={Boolean(textFieldValue.touchedValue && textFieldValue.errorsValue)}
        isInvalid={textFieldValue.touchedValue && textFieldValue.errorsValue}
        />
        <label htmlFor={textFieldValue.controlId}>{textFieldValue.label}</label>
        
        <Form.Control.Feedback type='invalid'>{textFieldValue.errorsValue}</Form.Control.Feedback>  
        
        </Form.Floating>
        {textFieldValue.passwordIcon && <InputGroup.Text className='rounded-3 fa-sm' style={{...style.eyeBtn}}>{textFieldValue.iconsValue ? <Eye onClick={textFieldValue.handleShowPassword} /> : <EyeSlash onClick={textFieldValue.handleShowPassword} />}</InputGroup.Text>}
       
        </InputGroup>

    </div>
  )
}
