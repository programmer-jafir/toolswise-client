import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');
    useEffect( () =>{
        // console.log('object', user);
        const email = user?.user?.email;
        const currentUser = {email: email}
        console.log('email', email);
        console.log('currentUser', currentUser);
        console.log('url', `http://localhost:5000/user/${email}`);
        if(email){
            fetch(`http://localhost:5000/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data =>{
                console.log('data inside', data);
            })
        }
    }, [user]);
        return [token];
}

export default useToken;