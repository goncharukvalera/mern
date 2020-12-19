import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from "../hooks/http.hook"
import {AuthContext} from "../context/AuthContext"

export const CreatePage = () => {
    const [link, setLink] = useState('')
    const {request} = useHttp()
    const auth = useContext(AuthContext)
    useEffect(() => {
        window.M.updateTextFields()
    }, [])
    const pressHandler = async e => {
        if (e.key === 'Enter') {
            try {
                const data = await request(
                    '/api/link/generate',
                    'POST',
                    {from: link},
                    {Authorization: `Bearer ${auth.token}`}
                )
                console.log(data);
            } catch (e) {

            }
        }
    }
    return (
        <div className="row">
            <div className="col s8 offset-s2">
                <div className="input-field">
                    <input
                        id="link"
                        type="text"
                        placeholder="Enter link"
                        value={link}
                        onChange={e => setLink(e.target.value)}
                        onKeyPress={pressHandler}/>
                    <label htmlFor="link">Enter link</label>
                </div>
            </div>
        </div>
    )
}