"use client"

import React from 'react'
import { getGoogleSignupUrl } from '../services/auth.service';

const useGoogleSignup = () => {
    const handleGoogleLogin = async () => {
        try {
            const res = await getGoogleSignupUrl();
            const authUrl = res.data.data;
            console.log(authUrl)

            window.location.href = authUrl;
        } catch (error) {
            console.error("Google login initiation failed:", error);
        }
    }
    return handleGoogleLogin
}

export default useGoogleSignup
