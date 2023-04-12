import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [dataForm, setDataForm] = React.useState({
    firstName: "", lastName: "", email: "", comments: "", 
    isFriendly: false, employment: "", favColor: ""
  })

    function handleChange(event) {
      const {name, value, type, checked} = event.target
        setDataForm(prevState => {
          return {
            ...prevState,
            [name]: type === "checkbox" ? checked : value
          }
        })
    }
    
    function handleSubmit(event) {
      event.preventDefault()
      console.log(dataForm)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name='firstName'
                value={dataForm.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name='lastName'
                value={dataForm.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={dataForm.email}
            />
            <textarea
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
                value={dataForm.comments}
            />
            <input
                type="checkbox"
                id="isFriendly"
                checked={dataForm.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br /> <br />

            <fieldset>
              <legend>Current Employment Status</legend>

              <input
                type="radio"
                id="unemployed"
                name='employment'
                value="unemployed"
                checked={dataForm.employment === "unemployed"}
                onChange={handleChange} 
              />
              <label htmlFor="unemployed">Unemployed</label>
              <br />

              <input
                type="radio"
                id="part-time"
                name='employment'
                value="part-time"
                checked={dataForm.employment === "part-time"}
                onChange={handleChange} 
              />
              <label htmlFor="part-time">Part-time</label>
              <br />

              <input
                type="radio"
                id='full-time'
                name='employment'
                value="full-time"
                checked={dataForm.employment === "full-time"}
                onChange={handleChange} 
              />
              <label htmlFor='full-time'>Full-time</label>
              <br />
            </fieldset>
            <br />

            <label htmlFor='favColor'>What is your favorite color?</label>
            <br />
            <select id='favColor' value={dataForm.favColor} onChange={handleChange} name='favColor'>
              <option value="">--Choose--</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="pink">Pink</option>
              <option value="brown">Brown</option>
              <option value="black">Black</option>
            </select>
            <br />

            <button>Submit</button>
            
        </form>
    )
  
  
}

export default App
