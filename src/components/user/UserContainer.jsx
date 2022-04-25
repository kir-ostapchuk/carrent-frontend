import {useState} from "react";
import ApiService from "../../api/ApiService";
import UserView from "./UserView";

const UserContainer = ({user, statuses, roles, updateUsers, updateMessage}) => {

    // todo: make it like one state

    const [verified, setVerified] = useState(user.verified);
    const [role, setRole] = useState(user.role);
    const [status, setStatus] = useState(user.status);

    const handleVerifiedChange = () => {
        setVerified(!verified);
    }

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    }

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    }

    const handleSave = () => {
        const userRequest = {
            ...user,
            role: role,
            verified: verified,
            status: status
        }
        ApiService.updateUser(userRequest)
            .then(r => {
                updateUsers();
                updateMessage("Successfully updated the user");
            })
            .catch(e => {
                updateMessage("Could not update the user");
            })
    }

    return (
        <UserView user={user}
                  status={status}
                  handleStatusChange={handleStatusChange}
                  statuses={statuses}
                  role={role}
                  handleRoleChange={handleRoleChange}
                  roles={roles}
                  verified={verified}
                  handleVerifiedChange={handleVerifiedChange}
                  handleSave={handleSave}
                  updateMessage={updateMessage}
        />
    )
}

export default UserContainer;