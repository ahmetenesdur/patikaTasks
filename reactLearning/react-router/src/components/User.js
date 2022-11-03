import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';

function User() {
  const { id } = useParams()
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(response.data))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h1>User Detail</h1>
      {loading && <p>Loading...</p>}
      {!loading && <pre>{JSON.stringify(user, null, 2)}</pre>}

      <br />
      <br />

      <Link to={`/users/${Number(id) + 1}`}>Next User ({Number(id) + 1})</Link>
    </div>
  )
}

export default User