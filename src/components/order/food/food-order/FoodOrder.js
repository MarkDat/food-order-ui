import { Button, List } from "devextreme-react";
import { memo, useEffect, useState } from "react";
import {FoodOrderInfo} from "@components";

import './FoodOrder.scss';
import { useOrderFood } from "@contexts/order-food";

function FoodOrder() {
    const [total, setTotal] = useState(0);
    const {orderFoods} = useOrderFood();


    useEffect(() => {
        const totalTemp = orderFoods.reduce((a,b) => {
            const price = !b.discount_price ? b.price.value ?? 0 : b.discount_price.value;

            return a + price;
        }, 0);

         setTotal(totalTemp);
    }, [orderFoods]);

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
                <span>{total}</span>
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
                itemRender={(food) => <FoodOrderInfo food={food} />}>
            </List>
            <FoodOrderFooter />
        </div>
    </>
}

export default memo(FoodOrder);