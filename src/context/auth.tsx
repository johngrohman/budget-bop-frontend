import { login } from "@/api/Auth";
import { LoginSchema } from "@/types";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>(undefined);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be within a AuthContextProvider');
    }
    return context;
}

export default function AuthContextProvider({children}: {children: ReactNode}) {

    const [authenticated, setAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState(undefined);

    useEffect(() => {
        const token = document.cookie.match('(^|;)\\s*' + 'access_token' + '\\s*=\\s*([^;]+)')?.pop() || '';
    }, []);

    const handleLogin = async ({username, password}: LoginSchema) => {
        await login({ username, password })
        .then(async (response) => {
            document.cookie = `access_token=${response.access_token}; path=/api/; `;
            setAuthenticated(true);
            setAccessToken(response.access_token);
        })
        .catch((e) => {
            console.log('error');
        })
    };

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                setAuthenticated,
                handleLogin,
                accessToken
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
