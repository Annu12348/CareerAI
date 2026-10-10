import React from 'react'
import { ToastContainer } from "react-toastify"

export const ToastProvider = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="light"
        />
    )
}
