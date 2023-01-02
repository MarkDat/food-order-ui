
import { truncate } from '@utils/common-functions';
import { Button } from 'devextreme-react';
import './FoodInfo.scss';

function FoodInfo(food) {
    
    const OverButton = () => {
        return  <div className='btn-over'>Hết hàng</div>;
    };

    const AddButton = () => {
        return <>
            <Button className='btn-add' icon='fa-sharp fa-solid fa-plus i-color--white'/>
        </>;
    }

    return <>
       <div className="food-info row">
            <div className="col-md-2">
                <img className="food-info__img" alt={`'${food.name}'`} src={food.photos[0].value}/>
            </div>
            <div className="col-md-6">
                <div className='food-info__title text-break'>{truncate(food.name, 30)} </div>
                <div className='food-info__desc text-break'>{truncate(food.description, 50)} </div>
            </div>
            <div className="col-md-4 d-flex justify-content-end">
                <div className='food-info__money me-2'>
                    <div className='price'>{(+food.price.value).toMoneyString()}<span className='price__unit'>đ</span></div>
                    <div className='cost'>23.000 <span className='cost__unit'>đ</span></div>
                </div>
                <div className='food-info__add-button'>
                  {food.is_available ? <AddButton /> : <OverButton />} 
                </div>
            </div>
       </div>
    </>
}

export default FoodInfo;