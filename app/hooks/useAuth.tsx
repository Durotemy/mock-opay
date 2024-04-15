import { useState, useEffect } from 'react';
import { getUserData, storeUserData, removeUserData } from '../utility/cache';
import axios from 'axios'
import { useUser } from '../context/userContext';




const useAuth = () => {
    const baseUrl = "https://mock-opay-backend.onrender.com"

    // const [user, setUser] = useState(null);
    // @ts-ignore
    const { setUser } = useUser();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const userData = await getUserData();
                if (userData) {
                    setUser(userData);
                }
                // setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
           
            }
        };

        checkAuthentication();
    }, []);


    const login = async (data: { phone: string, password: string }) => {
        try {
            const response = await axios.post(`${baseUrl}/login`, data);
            const userData = response?.data?.user; 
            setUser(userData);
            removeUserData() 
            storeUserData(userData)
          
            console.log("response", response?.data?.user);
        } catch (error) {
            console.log('Network error:', error);
            throw new Error('Failed to connect to the server');
        }
    };

    return { login,  setUser, loading }
}


export { useAuth }