import React from 'react'

function Form() {
  return (
    <form>
    <label>Username</label>
    <input placeholder='Enter Username'/>

    <label>Password</label>
    <input placeholder='Enter Password'/>

    <button type='submit'>Submit</button>
  </form>
  )
}

export default Form