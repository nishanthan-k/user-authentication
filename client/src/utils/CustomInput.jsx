import { useField } from 'formik'
import React from 'react'

const CustomInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name)

  // field => {name: 'email', value: '', onChange: ƒ, onBlur: ƒ}
  // meta => {value: '', error: undefined, touched: false, initialValue: '', initialTouched: false, initialError: ''}
  // helpers => {setValue: ƒ, setTouched: ƒ, setError: ƒ}

  const handleBlur = () => helpers.setTouched(true)
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor={props.name || props.id}>{label}</label>
      <input
        {...field}
        {...props}
        onBlur={handleBlur}
        style={{ height: "30px", paddingLeft: "10px" }}
      />

      {meta.touched  && (<span style={{color: 'red'}}>{meta.error}</span>)}
    </div>
  )
}

export default CustomInput