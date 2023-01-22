import React, {FC} from "react";
import {RegistrationUser} from "./RegistrationContainer";
import RegistrationForm from "./RegistrationForm";

interface RegistrationViewProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    formUser: RegistrationUser,
}

const RegistrationView: FC<RegistrationViewProps> = ({handleSubmit, handleFormChange, formUser}) => {
    return (<div className="vh-100 bg-image">
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{borderRadius: "15px"}}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                    <RegistrationForm handleSubmit={handleSubmit}
                                                      handleFormChange={handleFormChange}
                                                      formUser={formUser}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationView;
