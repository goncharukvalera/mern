import React, {useState} from 'react'

export const AuthPage = () => {
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const changeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
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
                                <input id="email" type="text" placeholder="Email" name="email" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input id="password" type="password" placeholder="Password" name="password" />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4 offset-l1 mr1">Sign In</button>
                        <button className="btn grey lighten-1 black-text">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}