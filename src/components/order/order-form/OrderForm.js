import { memo } from "react"
import {FoodGroup, FoodMenu, FoodOrder} from "@components";

function OrderForm() {
    return <>
       <div className="row">
            <div className="col-md-3"><FoodGroup></FoodGroup></div>
            <div className="col-md-6"><FoodMenu></FoodMenu></div>
            <div className="col-md-3"><FoodOrder></FoodOrder></div>
       </div>
    </>
}

export default memo(OrderForm);