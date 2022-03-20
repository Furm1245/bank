import React, { useState } from 'react';
import classes from './AuthForm.module.css';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router'

const AuthForm = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [account, setAccount] = useState("")
  const [balance, setBalance] = useState("")

  async function registerUser(event) {
    event.preventDefault()
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          password,
          account,
          balance
        })
      });
      const responseData = await response.json()

      if (responseData.status === 'ok') {
        navigate('/login')
      }
      if (!response.ok) {
        throw new Error(responseData.message)
      }
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <section className={classes.page} >
      <div className={classes.auth}>
        <h1>Register</h1>
        <Form onSubmit={registerUser}>
          <Form.Group className={classes.control} >
            <Form.Label>name</Form.Label>
            <Form.Control
              value={name}
              type='text'
              onChange={(e) => setName(e.target.value)}
              required />
          </Form.Group>
          <Form.Group className={classes.control}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              required />
          </Form.Group>
          <Form.Group className={classes.control} >
            <Form.Label>Account Number</Form.Label>
            <Form.Control
              value={account}
              type='number'
              min={1000}
              max={10000}
              onChange={(e) => setAccount(e.target.value)}
              required />
          </Form.Group>
          <Form.Group className={classes.control}>
            <Form.Label>Balance</Form.Label>
            <Form.Control
              value={balance}
              type='number'
              min={1}
              max={9999999}
              onChange={(e) => setBalance(e.target.value)}
              required />
          </Form.Group>
          <div className={classes.actions}>
            <button>Submit</button>
          </div>
        </Form>
      </div>
    </section >
  );
};

export default AuthForm
