import { truncate } from "@utils/common-functions";
import { Button } from "devextreme-react";
import './FoodOrderInfo.scss';

function FoodOrderInfo(food) {
    return <>
         <div className="food-order-info row">
            <div className="col-md-2">
                <img className="food-order-info__img" alt={`'${food.name}'`} src={food.photos[0].value} />
            </div>
            <div className="col-md-6">
                <div className='food-order-info__title text-break'>{truncate(food.name, 30)} </div>
            </div>
            <div className="col-md-4 d-flex">
                <div>
                    <Button className="food-order-info__btn food-order-info__btn--add" icon="fa-regular fa-plus i-color--white" />
                </div>
                
                <div className="quantity">150</div>
                <div>
                    <Button className="food-order-info__btn food-order-info__btn--minus" icon="fa-regular fa-minus i-color--white" />
                </div>
               
            </div>
        </div>
    </>
}

export default FoodOrderInfo;