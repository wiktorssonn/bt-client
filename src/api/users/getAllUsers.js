const getAllUsers = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }

    try {
        const response = await fetch(`http://localhost:3001/users`, options);
        const result = await response.json();
        console.log('result: ', result);
        return result;
    }
    catch (error) {
        console.log(`Login error: ${error}`);
        return null;
    }
}

export default getAllUsers;