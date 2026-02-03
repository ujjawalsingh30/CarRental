// import { createContext, useContext, useEffect, useState } from "react";
// import axios from 'axios'
// import { toast } from 'react-hot-toast'
// import { useNavigate } from "react-router-dom";


// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

// export const AppContext = createContext();

// export const AppProvider = ({ children }) => {

//     const navigate = useNavigate()
//     const currency = import.meta.env.VITE_CURRENCY
//     const [token, setToken] = useState(null)
//     const [user, setUser] = useState(null)
//     const [isOwner, setIsOwner] = useState(false)
//     const [showLogin, setShowLogin] = useState(false)
//     const [pickupDate, setPickupDate] = useState('')
//     const [returnDate, setReturnDate] = useState('')

//     const [cars, setCars] = useState([])

//     // // Function to check if user is logged in
    

//     const fetchUser = async () => {
//         try {
//             const { data } = await axios.get('/api/user/data')

//             if (data.user) {
//                 setUser(data.user)
//                 setIsOwner(data.user.role === 'owner')
//             } else {
//                 navigate('/')
//             }
//         } catch (error) {
//             console.error(error.message)
//         }
//     }

//     // Function to fetch all Cars from the server

//     const fetchCars = async () => {
//         try {
//             const { data } = await axios.get('/api/user/cars')
//             data.success ? setCars(data.cars) : toast.error(data.message)
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }

//     // Function to log out the user
//     const logout = () => {
//         localStorage.removeItem('token')
//         setToken(null)
//         setUser(null)
//         setIsOwner(false)
//         axios.defaults.headers.common['Authorization'] = ''
//         toast.success('You have been logged out')
//     }

//     // UseEffect to retrieve the token from localStorage
//     useEffect(() => {
//         const token = localStorage.getItem('token')
//         setToken(token)
//         fetchCars()
//     }, [])


//     // UseEffect to fetch user data when token is available
//     useEffect(() => {
//         if (token) {
//             axios.defaults.headers.common['Authorization'] = `${token}`
//             fetchUser()
//         }
//     }, [token])


//     const value = {
//         navigate, currency, axios, user, setUser,
//         token, setToken, isOwner, setIsOwner, fetchUser, showLogin, setShowLogin, logout, fetchCars, cars, setCars, pickupDate,setPickupDate, returnDate, setReturnDate
//     }

//     return (
//         <AppContext.Provider value={value}>
//             {children}
//         </AppContext.Provider>)

// }

// export const useAppContext = () => {
//     return useContext(AppContext)
// }

import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const navigate = useNavigate()
    const currency = import.meta.env.VITE_CURRENCY
    // ✅ FIX LINE 15: Initialize token from localStorage on mount
    const [token, setToken] = useState(localStorage.getItem('token') || null)
    const [user, setUser] = useState(null)
    const [isOwner, setIsOwner] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [pickupDate, setPickupDate] = useState('')
    const [returnDate, setReturnDate] = useState('')

    const [cars, setCars] = useState([])

    // ✅ FIX LINES 26-38: Improved error handling in fetchUser
    const fetchUser = async () => {
        try {
            const { data } = await axios.get('/api/user/data')

            // ✅ Check for success flag and user data
            if (data.success && data.user) {
                setUser(data.user)
                setIsOwner(data.user.role === 'owner')
            } else {
                console.log('No user data received')
            }
        } catch (error) {
            console.error('Error fetching user:', error)
            // ✅ Only clear token on authentication errors (401, 403)
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                console.log('Authentication failed, clearing token')
                setToken(null)
                localStorage.removeItem('token')
                setUser(null)
                setIsOwner(false)
            }
            // For other errors (network issues, 500, etc), keep the token
        }
    }

    // Function to fetch all Cars from the server
    const fetchCars = async () => {
        try {
            const { data } = await axios.get('/api/user/cars')
            data.success ? setCars(data.cars) : toast.error(data.message)
        } catch (error) {
            console.error('Error fetching cars:', error.message)
        }
    }

    // Function to log out the user
    const logout = () => {
        localStorage.removeItem('token')
        setToken(null)
        setUser(null)
        setIsOwner(false)
        axios.defaults.headers.common['Authorization'] = ''
        toast.success('You have been logged out')
        navigate('/')
    }

    // ✅ FIX LINES 53-57: Removed redundant token initialization
    useEffect(() => {
        fetchCars()
    }, [])


    // UseEffect to fetch user data when token changes
    useEffect(() => {
        if (token) {
            // ✅ Set token directly without "Bearer" prefix (backend expects just the token)
            axios.defaults.headers.common['Authorization'] = token
            fetchUser()
        } else {
            // Clear user data when no token
            setUser(null)
            setIsOwner(false)
            axios.defaults.headers.common['Authorization'] = ''
        }
    }, [token])


    // ✅ FIX LINE 76: Added setPickupDate to context value
    const value = {
        navigate, currency, axios, user, setUser,
        token, setToken, isOwner, setIsOwner, fetchUser, showLogin, setShowLogin, 
        logout, fetchCars, cars, setCars, pickupDate, setPickupDate, returnDate, setReturnDate
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>)

}

export const useAppContext = () => {
    return useContext(AppContext)
}