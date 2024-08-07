import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const apiUrl = import.meta.env.VITE_API_ENDPOINT;

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()

    const logout = async () => {
        setLoading(true)
        try {
            const response = await axios.get("${apiUrl}/api/users/logout");
            console.log(response);
            localStorage.removeItem("room-user")
            setAuthUser(null);
        } 
        catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false)
        }
    }
    return {loading, logout};
}

export default useLogout;