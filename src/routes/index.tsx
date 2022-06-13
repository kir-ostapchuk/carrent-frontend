import LoginContainer from "../components/Login/LoginContainer";
import RegisterContainer from "../components/Register/RegisterContainer";
import RidesContainer from "../components/rides/RidesContainer";
import CarsContainer from "../components/Cars/CarsContainer";
import CarContainer from "../components/Cars/CarContainer";
import RegistrationResultView from "../components/Register/RegistrationResultView";
import UploadFileComponent from "../components/documents/UploadFileComponent";
import UsersContainer from "../components/users/UsersContainer";
import ResultContainer from "../components/payment/ResultContainer";
import React from 'react';
import AddCarContainer from "../components/addCar/AddCarContainer";

export const RouteNames = {
    LOGIN: "/login",
    REGISTER: "/register",
    RIDES: "/rides",
    CARS: "/cars",
    SUCCESS_PAYMENT: "/success-payment",
    CANCELLED_PAYMENT: "/cancelled-payment",
    CAR: "/cars/:id",
    REGISTER_RESULT: "/register-result",
    DOCUMENTS: "/documents",
    ADMIN_USERS: "/admin/users",
    ADMIN_USER: "/admin/users/:id",
    ADD_CAR: "/admin/add-car"
}

export const publicRoutes = [
    {path: RouteNames.LOGIN, component: <LoginContainer/>},
    {path: RouteNames.REGISTER, component: <RegisterContainer/>},
    {path: RouteNames.CARS, component: <CarsContainer/>},
    {path: RouteNames.CAR, component: <CarContainer/>},
    {path: RouteNames.REGISTER_RESULT, component: <RegistrationResultView/>},
    {path: RouteNames.ADD_CAR, component: <AddCarContainer/>},
]

export const allRoutes = [
    ...publicRoutes,
    {path: RouteNames.RIDES, component: <RidesContainer/>},
    {
        path: RouteNames.SUCCESS_PAYMENT, component: <ResultContainer success={true}
                                                                                   message="Success payment"/>
    },
    {
        path: RouteNames.CANCELLED_PAYMENT, component: <ResultContainer success={false}
                                                                                     message="Cancelled payment"/>
    },
    {path: RouteNames.DOCUMENTS, component: <UploadFileComponent/>},
    {path: RouteNames.ADMIN_USERS, component: <UsersContainer/>},
]
