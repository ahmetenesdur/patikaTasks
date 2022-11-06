import { useState } from 'react'

import {useUser} from '../context/UserContext'

function Profile() {
    const { user, setUser } = useUser();

    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setUser({ id: 1, name: 'John Doe', bio: 'lorem ipsum dolor sit amet' });
            setLoading(false);
        }, 1000);
    }

    return (
        <div>
            {!user && <button onClick={handleLogin}>{loading ? 'Loading...' : 'Login'}</button>}
            
            <br />
            <code> {JSON.stringify(user)} </code>

            <br />
            {user && <button onClick={() => setUser(null)}>Logout</button>}
        </div>
    );
}

export default Profile;