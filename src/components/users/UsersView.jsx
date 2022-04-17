import UserContainer from "./user/UserContainer";

const UsersView = ({loading, users, roles, statuses, updateUsers}) => {
    return (
        <div className="container">
            {loading
                ?
                <p>⏱⏱⏱⏱⏱</p>
                :
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First & Last Names</th>
                        <th scope="col">Status</th>
                        <th scope="col">Role</th>
                        <th scope="col">Img 1</th>
                        <th scope="col">Img 2</th>
                        <th scope="col">Verification</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(u =>
                        <UserContainer key={u.id}
                                       user={u}
                                       roles={roles}
                                       statuses={statuses}
                                       updateUsers={updateUsers}
                        />
                    )}
                    </tbody>
                </table>
            }
        </div>
    );
}

export default UsersView;