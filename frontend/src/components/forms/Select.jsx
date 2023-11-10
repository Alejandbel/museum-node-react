import React, { forwardRef } from 'react';

/**
 * @param {
 * {
 *   name: string,
 *   label: string
 *   items: {key, value, option}[]
 * } & DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>} props
 * @param ref
 */
function Select(props, ref) {
  return (
    <>
      <div>
        <label htmlFor={props.name}>{props.label}</label>
      </div>
      <select
        id={props.name}
        ref={ref}
        {...props}
      >
        {props.items.map((item) => (
          <option key={item.key} value={item.value}>
            {item.option}
          </option>
        ))}
      </select>
    </>
  );
}

export default forwardRef(Select);
