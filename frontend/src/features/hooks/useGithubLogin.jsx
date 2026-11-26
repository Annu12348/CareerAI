"use client"

import React from 'react'
import { getGithubLoginUrl } from '../services/auth.service';

const useGithubLogin = () => {

    const handleGithubLogin = async () => {
        try {
            const res = await getGithubLoginUrl();
            const authUrl = res.data.data.authUrl;
            console.log(authUrl)

            window.location.href = authUrl;
        } catch (error) {
            console.error("Google login initiation failed:", error);
        }
    }

    return handleGithubLogin;
}

export default useGithubLogin;
