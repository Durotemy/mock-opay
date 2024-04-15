import AsyncStorage from "@react-native-async-storage/async-storage";


const storeUserData = async (userData: string) => {
    try {
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
        console.error('Error storing user data:', error);
        throw error;
    }
};

const getUserData = async () => {
    try {
        const userData = await AsyncStorage.getItem('userData');
        return userData ? JSON.parse(userData) : null;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};


const removeUserData = async () => {
    try {
        await AsyncStorage.removeItem('userData');
    } catch (error) {
        console.error('Error removing user data:', error);
        throw error;
    }
};
export { storeUserData, getUserData, removeUserData }