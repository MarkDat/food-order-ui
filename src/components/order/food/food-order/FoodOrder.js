import { Button, List } from "devextreme-react";
import { memo } from "react";
import {FoodOrderInfo} from "@components";

import './FoodOrder.scss';

function FoodOrder({orderFoods}) {

    const FoodOrderHeader = () => {
        return <>
            <div className="food-order__header d-flex justify-content-between">
                <h3 className="mt-1">Giỏ hàng</h3>
                <div className="order-button">
                    <Button className="order-button__action br-color--accent" icon="fa-solid fa-cart-plus i-color--white" />
                </div>
            </div>
        </>
    }


    return <>
        <div className="food-order">
            <FoodOrderHeader />
            <List
                className="food-order-list"
                dataSource={[]}
                height={500}
                focusStateEnabled={false}
                itemRender={FoodOrderInfo}>
            </List>
        </div>
    </>
}

export default memo(FoodOrder);