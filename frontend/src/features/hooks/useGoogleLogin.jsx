"use client"

import React from 'react'
import { getGoogleLoginUrl } from '../services/auth.service';

const useGoogleLogin = () => {
    const handleGoogleLogin = async () => {
        try {
            const res = await getGoogleLoginUrl();
            const authUrl = res.data.data;
            console.log(authUrl)
    
            window.location.href = authUrl;
        } catch (error) {
            console.error("Google login initiation failed:", error);
        }
    }
    return handleGoogleLogin
}

export default useGoogleLogin
