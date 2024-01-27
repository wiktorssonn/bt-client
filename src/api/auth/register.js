const register = async (email, password) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        })
    }

    try {
        const response = await fetch(`http://localhost:3001/register`, options);
        const result = await response.json();
        console.log('result: ', result);
        return result;
    }
    catch (error) {
        console.log(`[Register] error: ${error}`);
        return null;
    }
}

export default register;