import React, {useState} from 'react'
import {useHttp} from "../hooks/http.hook";

export const AuthPage = () => {
    const {loading, request} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const changeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log('Data', data)
        } catch (e) {}
    }
    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Short link</h1>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div>
                            <div className="input-field">
                                <input id="email" type="text" placeholder="Email" name="email" onChange={changeHandler} />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input id="password" type="password" placeholder="Password" name="password" onChange={changeHandler} />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4 offset-l1 mr1"
                                disabled={loading}
                        >
                            Sign In
                        </button>
                        <button className="btn grey lighten-1 black-text"
                                onClick={registerHandler}
                                disabled={loading}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}