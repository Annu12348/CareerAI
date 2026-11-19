"use client"

import React from 'react'
import { getGoogleAuthUrl } from '../services/auth.service';

const useGoogleAuth = () => {
    const handleGoogleLogin = async () => {
        try {
            const res = await getGoogleAuthUrl();
            const authUrl = res.data.data;
            console.log(authUrl)

            window.location.href = authUrl;
        } catch (error) {
            console.error("Google login initiation failed:", error);
        }
    }
    return handleGoogleLogin
}

export default useGoogleAuth
