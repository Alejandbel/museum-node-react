import React, { forwardRef } from 'react';

/**
 * @param {
 * {
 *   name: string,
 *   label: string
 * } & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>} props
 * @param ref
 */
function Input(props, ref) {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        id={props.name}
        ref={ref}
        {...props}
      />
    </>
  );
}

export default forwardRef(Input);
