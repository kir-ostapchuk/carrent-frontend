import {IDetailProps, OrderStatus} from "../../types/types";
import React, {FC} from 'react';
import DetailsRowView from "./DetailsRowView";

interface DetailsRowContainerProps {
    detail: IDetailProps,
    key: string,
}

const DetailsRowContainer: FC<DetailsRowContainerProps> = ({detail, key}) => {

    const retrieveStatusValue = (status: OrderStatus) => {
        switch (status) {
            case OrderStatus.RENT:
                return "Renting"
            case OrderStatus.BOOKING:
                return "Booking"
            case OrderStatus.RENT_PAUSED:
                return "Renting paused"
            default:
                return "No status"
        }
    }

    return (
        <DetailsRowView detail={detail} key={key} retrieveStatusValue={retrieveStatusValue}/>
    );
}

export default DetailsRowContainer;