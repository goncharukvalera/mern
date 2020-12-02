import {useState, useCallback} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            const resp = await fetch(url, {method, body, headers})
            const data = await resp.json()
            if (!resp.ok) {
                throw new Error(data.message || 'Something went wrong')
            } 
            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])
    const clearError = () => setError(null)
    return {loading, request, error, clearError}
}