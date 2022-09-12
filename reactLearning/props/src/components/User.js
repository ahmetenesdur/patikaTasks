import PropTypes from "prop-types";

function User({ name, surname, isLogin, age, friends, address }) {
    if (!isLogin) {
        return <h1>Please Login</h1>
    }

    return (
        <>
            <h1>{`Welcome ${name} ${surname} (${age})`}</h1>

            <h3>Address:</h3>
            {address.city} {address.zip}
            <br />
            <br />
            <h3>Friends:</h3>
            {friends && friends.map((friend) =>
                <div key={friend.id}>
                    {friend.id} - {friend.name}
                </div>
            )}
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLogin: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        city: PropTypes.string,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    name: '',
    isLogin: false,
};

export default User;