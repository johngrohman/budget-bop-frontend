import { getUser, login } from "@/api/Auth";
import { LoginSchema } from "@/types";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useLayoutEffect, useState } from "react";

const AuthContext = createContext<any>(undefined);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be within a AuthContextProvider');
    }
    return context;
}

export default function AuthContextProvider({children}: {children: ReactNode}) {

    const [authenticated, setAuthenticated] = useState<boolean | undefined>();
    const router = useRouter();

    const fetchMe = async () => {
        return await getUser()
        .then((response) => {
            console.log('get user: ', response)
            setAuthenticated(true);
            return true;
        })
        .catch(() => {
            console.log('error get User');
            setAuthenticated(false);
            return false;
        })
    }

    useLayoutEffect(() => {
        const fetchMe = async () => {
            return await getUser()
            .then((response) => {
                console.log('get user: ', response)
                setAuthenticated(true);
                return true;
            })
            .catch(() => {
                console.log('error get User');
                setAuthenticated(false);
                router.push('/login');
                return false;
            })
        }
        fetchMe();
    }, []);

    const handleLogin = async ({username, password}: LoginSchema) => {
        await login({ username, password })
        .then((response) => {
            setAuthenticated(true);
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
                fetchMe,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
