import { useEffect, useState } from "react";

const HandleLogout = () => {
    
    localStorage.setItem('user', '');
    window.location.reload();
}

export default HandleLogout;