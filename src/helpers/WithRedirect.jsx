import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import metamaskStore from '../store/metamaskStore';
import { observer } from 'mobx-react-lite';

const WithRedirect = ({ children }) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!metamaskStore.isConnected || !metamaskStore.isChainMatic) {
            navigate('/')
        }
    }, [metamaskStore.isConnected, metamaskStore.isChainMatic])

    return (
        <>
            {children}
        </>
    )
}

export default observer(WithRedirect)