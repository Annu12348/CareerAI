"use client"

import React from 'react'
import { getGithubSignupUrl } from '../services/auth.service';

const useGithubSignup = () => {

    const handleGithubSignup = async () => {
        try {
            const res = await getGithubSignupUrl();
            const authUrl = res.data.data.authUrl;
            console.log(authUrl)

            window.location.href = authUrl;
        } catch (error) {
            console.error("Google login initiation failed:", error);
        }
    }

    return handleGithubSignup;
}

export default useGithubSignup;
