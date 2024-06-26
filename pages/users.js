import User from '../components/user';

function UserList({ users }) {
    return(
        <>
            <h1>List Of Users</h1>
            {
                users.map((user) => {
                    return (
                        <div key={users.id}>
                            {/* <p>{user.name}</p>
                            <p>{user.email}</p> */}
                            <User user={user}/>
                        </div>
                    )
                })
            }
        </>
    )
};

export default UserList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()

    return {
        props: {
            users: data
        }
    }
}