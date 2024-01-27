import { useEffect, useState } from "react";

const IsUserAuthenticated = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('user');
        setIsAuthenticated(isLoggedIn ? true : false);
    }, []);

    return { isAuthenticated };
}

export default IsUserAuthenticated;