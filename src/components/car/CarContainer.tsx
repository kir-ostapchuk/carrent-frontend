import React, {FC, useState} from 'react';
import {Car, CarStatus} from "../../types/types";
import LocalStorage from "../../storage/LocalStorage";
import {updateBalance} from "../../slices/BalanceSlice";
import {useDispatch} from "react-redux";
import CarView from "./CarView";
import AuthApiService from "../../api/ProtectedApiService";

interface CarContainerProps {
    car: Car,
}

const CarContainer: FC<CarContainerProps> = ({car}) => {

    const [updCar, setUpdCar] = useState<Car>(car);
    const dispatch = useDispatch();

    const processOrderReducer = (status: CarStatus, carId: number) => {
        const order = {
            userId: LocalStorage.getUserId(),
            carId: carId,
            carStatus: status,
        }
        AuthApiService.processOrder(order)
            .then(() => {
                setUpdCar({...car, carStatus: status})
                if (status === CarStatus.FREE) {
                    AuthApiService.findBalance().then((res: any) => {
                        dispatch(updateBalance(res.data))
                    })
                }
            });
    }

    return (
        <CarView key={updCar.id}
                 car={updCar}
                 startRent={() => processOrderReducer(CarStatus.IN_RENT, car.id)}
                 startBook={() => processOrderReducer(CarStatus.IN_BOOKING, car.id)}
                 finishRide={() => processOrderReducer(CarStatus.FREE, car.id)}
                 pauseRent={() => processOrderReducer(CarStatus.IN_RENT_PAUSED, car.id)}/>
    );
};

export default CarContainer;
