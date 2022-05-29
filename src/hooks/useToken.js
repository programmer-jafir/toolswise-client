import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        // console.log('object', user);
        const email = user?.user?.email;
        const currentUser = { email: email }
        console.log('email', email);
        console.log('currentUser', currentUser);
        console.log('url', `https://vast-scrubland-15201.herokuapp.com/user/${email}`);
        if (email) {
            fetch(`https://vast-scrubland-15201.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);
                })
        }
    }, [user]);
    return [token];
}

export default useToken;