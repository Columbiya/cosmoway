import React from 'react'
import { useNavigate } from 'react-router-dom';
import metamaskStore from '../../store/metamaskStore';

const WithRedirect = ({element: Element}) => {
    const navigate = useNavigate()

    if (!metamaskStore.isChainMatic) {
        navigate('/')
        return null
    }

    return (
        <Element />
    )
}

export default WithRedirect