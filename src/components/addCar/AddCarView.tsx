import React, {FC} from 'react'
import {CarStatus, carStatusesToStatusName, IAddCar} from "../../types/types";

// todo:
    // 1. move statuses to container and pass them to view
    // 2. rename all the things into proper manner formUser->formCar
    // 3. set status
    // 4. add methods to ApiService to call backend endpoint (post, /api/v1/cars, body(formCar))
    // 5. rentPricePerHour, bookPricePerHour -> make number
    // 6. restructure code (pages, components)
    // 7. yup (+ formik)

interface AddCarViewProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    formUser: IAddCar,
}

const AddCarView: FC<AddCarViewProps> = ({handleSubmit, handleFormChange, formUser}) => {

    const statuses = Object.keys(CarStatus).filter((item) => {
        return isNaN(Number(item));
    });

    return (
        <div className="vh-100 bg-image pt-5">
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{borderRadius: "15px"}}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Add Car</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-outline mb-2">
                                            <input type="text"
                                                   className="form-control form-control-lg"
                                                   onChange={handleFormChange}
                                                   name="brand"
                                                   value={formUser.brand}
                                                   placeholder="Brand"
                                            />
                                        </div>
                                        <div className="form-outline mb-2">
                                            <input type="text"
                                                   className="form-control form-control-lg"
                                                   onChange={handleFormChange}
                                                   name="model"
                                                   value={formUser.model}
                                                   placeholder="Model"
                                            />
                                        </div>
                                        <div className="form-outline mb-2">
                                            <input type="text"
                                                   className="form-control form-control-lg"
                                                   onChange={handleFormChange}
                                                   name="rentPricePerHour"
                                                   value={formUser.rentPricePerHour}
                                                   placeholder="Car Rent Price"
                                            />
                                        </div>
                                        <div className="form-outline mb-2">
                                            <input type="text"
                                                   className="form-control form-control-lg"
                                                   onChange={handleFormChange}
                                                   name="bookPricePerHour"
                                                   value={formUser.bookPricePerHour}
                                                   placeholder="Car Book Price"
                                            />
                                        </div>
                                        <div className="form-outline mb-2">
                                            <input type="text"
                                                   className="form-control form-control-lg"
                                                   onChange={handleFormChange}
                                                   name="imgUrl"
                                                   value={formUser.imgUrl}
                                                   placeholder="Car Image URL"
                                            />
                                        </div>

                                        <div className="form-outline mb-2">

                                            <div className="dropdown">
                                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                                        id="dropdownMenu2" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                    Car Status
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                    {statuses.map(s => {
                                                        return (
                                                            <li>
                                                            <button className="dropdown-item"
                                                                    type="button"
                                                            >
                                                                {carStatusesToStatusName.get(s)}
                                                            </button>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center mt-4">
                                            <button
                                                className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body">
                                                Save Car
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddCarView;