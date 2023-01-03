import { Button, List } from "devextreme-react";
import { memo } from "react";
import {FoodOrderInfo} from "@components";

import './FoodOrder.scss';
import { useOrderFood } from "@contexts/order-food";

function FoodOrder() {

    const {orderFoods} = useOrderFood();

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

    const FoodOrderFooter = () => {
        return <>
            <div className="food-order-footer d-flex justify-content-between">
                <h4>Tổng:</h4>
                <span>150.000</span>
            </div>
        </>
    }



    return <>
        <div className="food-order">
            <FoodOrderHeader />
            <List
                className="food-order-list"
                dataSource={orderFoods}
                noDataText={'Hãy chọn món đi!!!'}
                height={300}
                focusStateEnabled={false}
                itemRender={FoodOrderInfo}>
            </List>
            <FoodOrderFooter />
        </div>
    </>
}

export default memo(FoodOrder);