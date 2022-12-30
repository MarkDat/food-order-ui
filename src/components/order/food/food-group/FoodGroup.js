import { List } from "devextreme-react";
import { memo } from "react"

import './FoodGroup.scss'

function FoodGroup({menuGroups, onClickedFoodGroup}) {
    return <>
        <List
            className="group-food-list"
            dataSource={menuGroups}
            height={400}
            focusStateEnabled={true}
            selectionMode={'single'}
            keyExpr={'dish_type_id'}
            displayExpr={'dish_type_name'}
            defaultSelectedItemKeys={[-1]}
            onItemClick={onClickedFoodGroup}>
        </List>
    </>
}

export default memo(FoodGroup);
