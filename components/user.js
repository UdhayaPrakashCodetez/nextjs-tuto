function User({ user }) {
    return (
        <>
            <p>{user.name}</p>
            <br/>
            <p>{user.email}</p>
            <br/>
        </>
    )
};

export default User