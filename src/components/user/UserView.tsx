import shortid from "shortid";
import {User} from "../../types/types";
import React, {FC} from "react";

interface UserViewProps {
    user: User,
    status: string,
    handleStatusChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    statuses: string[],
    role: string,
    handleRoleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    roles: string[],
    verified: boolean,
    handleVerifiedChange: () => void,
    handleSave: () => void,
}

const UserView: FC<UserViewProps> = ({
                                         user,
                                         status,
                                         handleStatusChange,
                                         statuses,
                                         role,
                                         handleRoleChange,
                                         roles,
                                         verified,
                                         handleVerifiedChange,
                                         handleSave,
                                     }) => {
    return (
        <>
            <tr>
                <th scope="row">{user.id}</th>
                <td>{user.firstName} {user.lastName}</td>
                <td>
                    <select name="statuses"
                            value={status}
                            onChange={handleStatusChange}
                            className="form-select"
                            aria-label={status}
                    >
                        {statuses.map(s =>
                            <option key={shortid.generate()}
                                    value={s}>
                                {s}
                            </option>
                        )}
                    </select>
                </td>
                <td>
                    <select name="roles"
                            value={role}
                            onChange={handleRoleChange}
                            className="form-select"
                            aria-label={role}
                    >
                        {roles.map(r =>
                            <option key={shortid.generate()}
                                    value={r}>
                                {r}
                            </option>
                        )}
                    </select>
                </td>
                <td>
                    {user.passportUrl
                        ? <img src={user.passportUrl}
                               alt={"img doc 1"}
                               width={200}/>
                        : "Not uploaded"}
                </td>
                <td>
                    {user.drivingLicenseUrl
                        ? <img src={user.drivingLicenseUrl}
                               alt={"img doc 2"}
                               width={200}/>
                        : "Not uploaded"}
                </td>
                <td>
                    <input type={"checkbox"}
                           defaultChecked={verified}
                           onChange={handleVerifiedChange}
                    />
                </td>
                <td>
                    <button type="button"
                            className="btn btn-primary"
                            onClick={handleSave}
                    >
                        Save
                    </button>
                </td>
            </tr>
        </>
    );
}

export default UserView;
