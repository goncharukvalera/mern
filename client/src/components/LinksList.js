import React from 'react'
import {Link} from 'react-router-dom'

export const LinksList = ({links}) => {
    if (!links.length) {
        return <p className="center">No links yet</p>
    }
    return (
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Original</th>
                <th>Shorted</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {links.map((link, i) => {
                return (
                    <tr key={link._id}>
                        <td>{i + 1}</td>
                        <td>{link.from}</td>
                        <td>{link.to}</td>
                        <td>
                            <Link to={`/detail/${link._id}`}>
                                <span className="btn-small btn-floating blue" title="Detail info">&#8505;</span>
                            </Link>
                            <span className="btn-small red ml1" title="Remove link">&#10006;</span>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}