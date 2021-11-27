import React from 'react'
import { ApiProvider } from './Api/Api.context'
import { AppProvider } from './App/App.context'

const GlobalProvider = ({children}) => {
    return (
        <ApiProvider>
            <AppProvider>
                {children}
            </AppProvider>
        </ApiProvider>
    )
}

export default GlobalProvider
