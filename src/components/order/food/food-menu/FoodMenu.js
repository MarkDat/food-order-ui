import { List } from "devextreme-react";
import { memo } from "react";
import FoodInfo from "./food-info/FoodInfo";

function FoodMenu({foods}) {

    console.log(foods);

    return <>
        <List
            className="group-food-list"
            dataSource={foods}
            height={500}
            focusStateEnabled={true}
            itemRender={FoodInfo}>
        </List>
    </>
}

export default memo(FoodMenu);