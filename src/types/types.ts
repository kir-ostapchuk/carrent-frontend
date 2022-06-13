export enum CarStatus {
    FREE = "FREE",
    IN_RENT = "IN_RENT",
    IN_BOOKING = "IN_BOOKING",
    IN_RENT_PAUSED = "IN_RENT_PAUSED",
    UNAVAILABLE = "UNAVAILABLE",
}

export const carStatusesToStatusName = new Map();
carStatusesToStatusName.set(CarStatus.FREE, "Free");
carStatusesToStatusName.set(CarStatus.IN_RENT, "In rent");
carStatusesToStatusName.set(CarStatus.IN_BOOKING, "In booking");
carStatusesToStatusName.set(CarStatus.IN_RENT_PAUSED, "In rent paused");
carStatusesToStatusName.set(CarStatus.UNAVAILABLE, "Unavailable");

export interface IDetailProps {
    start: Date,
    end: Date,
    status: OrderStatus,
    price: number,
}

export interface ICar {
    id: number,
    mark: string,
    model: string,
    imgUrl: string,
    rentPricePerHour: number,
    bookPricePerHour: number,
    carStatus: CarStatus,
}

export interface IAddCar {
    brand: string,
    model: string,
    imgUrl: string,
    rentPricePerHour: string,
    bookPricePerHour: string,
    carStatus: CarStatus | null,
}

export interface ILoginUser {
    email: string,
    password: string,
}

export interface IRegisterUser {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
}

export enum OrderStatus {
    RENT = "RENT",
    BOOKING = "BOOKING",
    RENT_PAUSED = "RENT_PAUSED",
}

export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    documentImg1: string,
    documentImg2: string,
    verified: boolean,
    role: string,
    status: string,
}

export interface IDetail {
    start: Date,
    end: Date,
    status: OrderStatus,
    price: number,
}

export interface IRide {
    mark: string,
    model: string,
    date: Date,
    totalPrice: number,
    totalTimeHours: number,
    rideDetailsDtos: IDetail[],
}
