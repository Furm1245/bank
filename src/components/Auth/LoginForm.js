import React, { useContext, useState } from 'react';
import classes from './AuthForm.module.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../shared/context/auth-context';
import { Form } from 'react-bootstrap';

const LoginForm = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    async function loginUser(event) {
        event.preventDefault()
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    password,
                }),
            })

            const data = await response.json()

            auth.login(data.userId, data.token)
            if (data.userId) {
                localStorage.setItem('token', data.userId)
                navigate('/profile')
            } else {
                alert('Please check your username and password')
            }
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <section className={classes.page}>
            <div className={classes.auth}>
                <h1>Login</h1>
                <Form onSubmit={loginUser}>
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
                    <div className={classes.actions}>
                        <button>Submit</button>
                    </div>
                </Form>
            </div>
        </section>
    );
};

export default LoginForm
