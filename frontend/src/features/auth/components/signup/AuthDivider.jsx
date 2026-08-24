import React from 'react'

const AuthDivider = () => {
    return (
        <div className="w-full mt-6 flex items-center justify-center gap-2">
            <div className="h-[2px] bg-zinc-200 w-[48%]" />
            <span className="text-[12px] text-zinc-400">
                OR
            </span>
            <div className="h-[2px] bg-zinc-200 w-[48%]" />
        </div>
    )
}

export default AuthDivider
