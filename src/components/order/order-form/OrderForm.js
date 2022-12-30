import { memo, useEffect, useState } from "react"
import { FoodGroup, FoodMenu, FoodOrder } from "@components";

function OrderForm() {
	const [menu] = useState(menuFake);
	const [menuGroups, setMenuGroups] = useState([]);
	const [selectedGroupNo, setSelectedGroupNo] = useState(-1);
	
	const [foods, setFoods] = useState([]); 


	// Handle get group menu
	useEffect(() => {
		const menuTempt = menu.reply.menu_infos.map(e => {
			const menuGroup = { ...e };
			delete menuGroup.dishes;

			return menuGroup;
		});

		menuTempt.unshift({dish_type_id: -1, dish_type_name: 'Tất cả'});
		setMenuGroups(menuTempt);
	}, [menu]);

	// Handle get menu from group
	useEffect(() => {
		const groupMenuTemp = [...menu.reply.menu_infos];
		let foodsTemp = [];

		if(selectedGroupNo === -1) {
			groupMenuTemp.map(e => foodsTemp = [...foodsTemp, ...e.dishes]);
			setFoods(foodsTemp);
			return;
		}

		const food = groupMenuTemp.find(_ => _.dish_type_id === selectedGroupNo);
		setFoods(food.dishes);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedGroupNo]);

	// Handle clicked food group
	const onClickedFoodGroup = ({itemData}) => {
		const groupNo = itemData.dish_type_id;
		setSelectedGroupNo(groupNo);
	}


	return <>
		<div className="row">
			<div className="col-md-3">
				<h3 className="text-center">Nhóm</h3>
				<FoodGroup menuGroups={menuGroups} onClickedFoodGroup={onClickedFoodGroup}></FoodGroup>
			</div>
			<div className="col-md-6"><FoodMenu foods={foods}></FoodMenu></div>
			<div className="col-md-3"><FoodOrder></FoodOrder></div>
		</div>
	</>
}

export default memo(OrderForm);


const menuFake = {
    "reply": {
        "delivery_detail": {
            "total_order": 0,
            "rating": {
                "total_review": 1000,
                "avg": 4.6,
                "display_total_review": "999+",
                "app_link": "foody://foody.vn?action=reviewlist&id=986724"
            },
            "is_subscribe": false,
            "is_favorite": false,
            "city_id": 219,
            "phones": [
                "0905895957"
            ],
            "restaurant_id": 986724,
            "is_now_delivery": true,
            "district_id": 31,
            "brand_id": 0,
            "video": null,
            "asap_is_available": true,
            "contract_type": 1,
            "id": 102205,
            "location_url": "da-nang",
            "is_quality_merchant": true,
            "available_times": [
                {
                    "date": "2022-12-30",
                    "times": [
                        "16:35",
                        "16:40",
                        "16:45",
                        "16:50",
                        "16:55",
                        "17:00",
                        "17:05",
                        "17:10",
                        "17:15",
                        "17:20",
                        "17:25",
                        "17:30",
                        "17:35",
                        "17:40",
                        "17:45",
                        "17:50",
                        "17:55",
                        "18:00",
                        "18:05",
                        "18:10",
                        "18:15",
                        "18:20",
                        "18:25",
                        "18:30",
                        "18:35",
                        "18:40",
                        "18:45",
                        "18:50",
                        "18:55",
                        "19:00",
                        "19:05",
                        "19:10",
                        "19:15",
                        "19:20",
                        "19:25",
                        "19:30",
                        "19:35",
                        "19:40",
                        "19:45",
                        "19:50",
                        "19:55",
                        "20:00"
                    ]
                }
            ],
            "is_city_alert": false,
            "categories": [
                "Quán ăn"
            ],
            "cuisines": [
                "Món Việt"
            ],
            "short_description": null,
            "url_rewrite_name": "tiem-com-bep-nha-que",
            "price_slash_discounts": [],
            "delivery_fees": [],
            "vat": null,
            "confirm_language": null,
            "service_type": 1,
            "brand": null,
            "limit_distance": 20000,
            "delivery_categories": [
                2412
            ],
            "user_favorite_count": 0,
            "delivery": {
                "promotions": [
                    {
                        "apply_times": [
                            {
                                "apply_time_type": 2,
                                "denied_times": [],
                                "allow_times": [],
                                "allow_dates": [
                                    {
                                        "start_date": "2022-11-15",
                                        "end_date": "2023-02-28"
                                    }
                                ],
                                "denied_dates": []
                            }
                        ],
                        "promo_code": "HOMECRE50",
                        "is_check_airpay_new_user": false,
                        "discount_value_type": 2,
                        "min_order_value": "100,000đ",
                        "merchant_type": 2,
                        "custom_condition": [
                            {
                                "content": "100,000đ",
                                "label": "Đặt tối thiểu"
                            },
                            {
                                "content": "15/11/2022-28/02/2023",
                                "label": "Thời gian áp dụng giao hàng"
                            },
                            {
                                "content": "Không áp dụng cho đơn hàng Tự đến lấy",
                                "label": ""
                            },
                            {
                                "content": "Áp dụng cho các quán giao bởi ShopeeFood",
                                "label": ""
                            },
                            {
                                "content": "28/02/2023 23:59",
                                "label": "HSD"
                            },
                            {
                                "content": "Visa/Master/JCB",
                                "label": "Phương thức thanh toán"
                            },
                            {
                                "content": "1 lần/ thẻ",
                                "label": "Số lượng ưu đãi"
                            },
                            {
                                "content": "Home Credit",
                                "label": "Loại ngân hàng"
                            },
                            {
                                "content": "Số lượng ưu đãi có hạn",
                                "label": ""
                            },
                            {
                                "content": "1 lần/ khách hàng",
                                "label": "Số lượng ưu đãi"
                            },
                            {
                                "content": "Chỉ áp dụng cho người dùng mới của Visa/Master/JCB Home Credit",
                                "label": ""
                            }
                        ],
                        "promotion_type": 2,
                        "promotion_id": 28716362,
                        "id": 28716362,
                        "title": {
                            "message": "Thanh toán thẻ tín dụng Home Credit: Giảm 50K, đơn tối thiểu 50K cho lần đầu liên kết và thanh toán bằng thẻ Home Credit trên ShopeeFood"
                        },
                        "max_discount_value": "50,000đ",
                        "discount_on_type": 2,
                        "browsing_icon": "https://images.foody.vn/icon/browsing_discount/s/shopeefood_voucher_14.png",
                        "icon": "https://images.foody.vn/icon/discount/s/shopeefood_voucher_14.png",
                        "card_partner": {
                            "limit_per_card": 1,
                            "bank": {
                                "id": 51,
                                "name": "Home Credit"
                            }
                        },
                        "foody_service_ids": [
                            1,
                            5
                        ],
                        "payment_option": [
                            4
                        ],
                        "discount_type": 1,
                        "display_type": 2,
                        "apply_order": 100,
                        "expired": "28/02/2023 23:59",
                        "discount_amount": 50000,
                        "min_order_amount": 100000,
                        "discount": "50,000đ",
                        "display_order": 100,
                        "short_title": "Thanh toán thẻ tín dụng Home Credit: Giảm 50K, đơn tối thiểu 50K cho lần đầu liên kết và thanh toán bằng thẻ Home Credit trên ShopeeFood",
                        "home_title": "Home Credit giảm 50K",
                        "user_condition": {
                            "platforms": [],
                            "is_check_new_cardholder": true,
                            "limit_per_user": [
                                {
                                    "max_usage_time": 1,
                                    "period": 0
                                }
                            ],
                            "is_check_recipient_phone": false
                        },
                        "max_discount_amount": 50000,
                        "shipping_methods": [
                            1
                        ]
                    }
                ],
                "delivery_alert": null,
                "time": {
                    "available": [],
                    "week_days": [
                        {
                            "start_time": "10:00",
                            "week_day": 2,
                            "end_time": "20:00"
                        },
                        {
                            "start_time": "10:00",
                            "week_day": 4,
                            "end_time": "20:00"
                        },
                        {
                            "start_time": "10:00",
                            "week_day": 5,
                            "end_time": "20:00"
                        }
                    ],
                    "not_available": []
                },
                "service_by": "ShopeeFood",
                "service_fee": {
                    "text": "0.0%",
                    "value": 0
                },
                "merchant_limit_distance": -1,
                "payment_methods": [
                    6,
                    1,
                    4,
                    8
                ],
                "has_contract": true,
                "setting_limit_distance": 20000,
                "merchant_time": 12,
                "prepare_duration": 12,
                "ship_types": [],
                "avg_price": {
                    "text": "31k",
                    "format_text": {
                        "resource_name": "avg_price_format",
                        "resource_args": [
                            "31k"
                        ]
                    },
                    "value": 30875,
                    "unit": "đ"
                },
                "min_order_value": {
                    "text": "20,000đ",
                    "value": 20000,
                    "unit": "đ"
                },
                "operating": {
                    "status": 1,
                    "color": "#239839",
                    "close_time": "20:00:00",
                    "open_time": "10:00:00",
                    "text": {
                        "resource_name": "delivery_restaurant_opening"
                    }
                },
                "is_open": true,
                "shipping_fee": {
                    "text": {
                        "resource_name": "delivery_shipping_fee",
                        "resource_args": [
                            "6,500đ"
                        ]
                    },
                    "value": 6500,
                    "is_increasing": 0,
                    "rate": 1,
                    "minimum_fee": "15,000đ",
                    "unit": "đ"
                },
                "is_peak_mode": false,
                "min_charge": "3,000đ",
                "is_foody_delivery": true
            },
            "photos": [
                {
                    "width": 60,
                    "value": "https://images.foody.vn/res/g99/986724/prof/s60x60/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                    "height": 60
                },
                {
                    "width": 120,
                    "value": "https://images.foody.vn/res/g99/986724/prof/s120x120/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                    "height": 120
                },
                {
                    "width": 160,
                    "value": "https://images.foody.vn/res/g99/986724/prof/s160x120/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                    "height": 120
                },
                {
                    "width": 160,
                    "value": "https://images.foody.vn/res/g99/986724/prof/s160x160/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                    "height": 160
                },
                {
                    "width": 180,
                    "value": "https://images.foody.vn/res/g99/986724/prof/s180x180/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                    "height": 180
                },
                {
                    "width": 240,
                    "value": "https://images.foody.vn/res/g99/986724/prof/s240x240/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                    "height": 240
                },
                {
                    "width": 280,
                    "value": "https://images.foody.vn/res/g99/986724/prof/s280x175/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                    "height": 175
                },
                {
                    "width": 400,
                    "value": "https://images.foody.vn/res/g99/986724/prof/s400x216/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                    "height": 216
                },
                {
                    "width": 600,
                    "value": "https://images.foody.vn/res/g99/986724/prof/s600x324/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                    "height": 324
                },
                {
                    "width": 640,
                    "value": "https://images.foody.vn/res/g99/986724/prof/s640x400/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                    "height": 400
                },
                {
                    "width": 640,
                    "value": "https://images.foody.vn/res/g99/986724/prof/s640x640/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                    "height": 640
                },
                {
                    "width": 750,
                    "value": "https://images.foody.vn/res/g99/986724/prof/s750x400/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                    "height": 400
                },
                {
                    "width": 1242,
                    "value": "https://images.foody.vn/res/g99/986724/prof/s1242x600/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                    "height": 600
                }
            ],
            "is_display_cutlery": true,
            "confirm_methods": {},
            "address": "17 Đường 2 Tháng 9, Quận Hải Châu, Đà Nẵng",
            "name_en": "",
            "foody_service_id": 1,
            "min_order_value": {
                "text": "20,000đ",
                "value": 20000,
                "unit": "đ"
            },
            "root_category_ids": [
                2411,
                2387,
                2410,
                2414,
                2391
            ],
            "campaigns": [],
            "name": "Tiệm Cơm Bếp Nhà Quê",
            "url": "https://shopeefood.vn/da-nang/tiem-com-bep-nha-que",
            "display_order": 0,
            "delivery_id": 102205,
            "restaurant_url": "tiem-com-bep-nha-que",
            "is_pickup": false,
            "price_range": {
                "min_price": 15000,
                "max_price": 35000
            },
            "parent_category_id": 2387,
            "position": {
                "latitude": 16.03140916,
                "is_verified": false,
                "longitude": 108.22419287
            },
            "res_photos": [
                {
                    "photos": [
                        {
                            "width": 60,
                            "value": "https://images.foody.vn/res/g99/986724/prof/s60x60/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                            "height": 60
                        },
                        {
                            "width": 120,
                            "value": "https://images.foody.vn/res/g99/986724/prof/s120x120/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/prof/s160x120/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/prof/s160x160/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                            "height": 160
                        },
                        {
                            "width": 180,
                            "value": "https://images.foody.vn/res/g99/986724/prof/s180x180/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                            "height": 180
                        },
                        {
                            "width": 240,
                            "value": "https://images.foody.vn/res/g99/986724/prof/s240x240/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                            "height": 240
                        },
                        {
                            "width": 280,
                            "value": "https://images.foody.vn/res/g99/986724/prof/s280x175/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                            "height": 175
                        },
                        {
                            "width": 400,
                            "value": "https://images.foody.vn/res/g99/986724/prof/s400x216/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                            "height": 216
                        },
                        {
                            "width": 600,
                            "value": "https://images.foody.vn/res/g99/986724/prof/s600x324/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                            "height": 324
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/prof/s640x400/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                            "height": 400
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/prof/s640x640/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                            "height": 640
                        },
                        {
                            "width": 750,
                            "value": "https://images.foody.vn/res/g99/986724/prof/s750x400/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                            "height": 400
                        },
                        {
                            "width": 1242,
                            "value": "https://images.foody.vn/res/g99/986724/prof/s1242x600/foody-upload-api-foody-mobile-64796ce2-c45d-4b0f-a-200511171036.jpg",
                            "height": 600
                        }
                    ]
                },
                {
                    "photos": [
                        {
                            "width": 60,
                            "value": "https://images.foody.vn/res/g99/986724/s60x60/foody-tiem-com-bep-nha-que-424-637265558119289773.jpg",
                            "height": 60
                        },
                        {
                            "width": 120,
                            "value": "https://images.foody.vn/res/g99/986724/s120x120/foody-tiem-com-bep-nha-que-424-637265558119289773.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x120/foody-tiem-com-bep-nha-que-424-637265558119289773.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x160/foody-tiem-com-bep-nha-que-424-637265558119289773.jpg",
                            "height": 160
                        },
                        {
                            "width": 180,
                            "value": "https://images.foody.vn/res/g99/986724/s180x180/foody-tiem-com-bep-nha-que-424-637265558119289773.jpg",
                            "height": 180
                        },
                        {
                            "width": 240,
                            "value": "https://images.foody.vn/res/g99/986724/s250x250/foody-tiem-com-bep-nha-que-424-637265558119289773.jpg",
                            "height": 240
                        },
                        {
                            "width": 280,
                            "value": "https://images.foody.vn/res/g99/986724/s280x175/foody-tiem-com-bep-nha-que-424-637265558119289773.jpg",
                            "height": 175
                        },
                        {
                            "width": 400,
                            "value": "https://images.foody.vn/res/g99/986724/s400x400/foody-tiem-com-bep-nha-que-424-637265558119289773.jpg",
                            "height": 216
                        },
                        {
                            "width": 600,
                            "value": "https://images.foody.vn/res/g99/986724/s600x600/foody-tiem-com-bep-nha-que-424-637265558119289773.jpg",
                            "height": 324
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x400/foody-tiem-com-bep-nha-que-424-637265558119289773.jpg",
                            "height": 400
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x640/foody-tiem-com-bep-nha-que-424-637265558119289773.jpg",
                            "height": 640
                        },
                        {
                            "width": 750,
                            "value": "https://images.foody.vn/res/g99/986724/s750x400/foody-tiem-com-bep-nha-que-424-637265558119289773.jpg",
                            "height": 400
                        },
                        {
                            "width": 1242,
                            "value": "https://images.foody.vn/res/g99/986724/s1242x600/foody-tiem-com-bep-nha-que-424-637265558119289773.jpg",
                            "height": 600
                        }
                    ]
                },
                {
                    "photos": [
                        {
                            "width": 60,
                            "value": "https://images.foody.vn/res/g99/986724/s60x60/foody-tiem-com-bep-nha-que-245-637265558120539878.jpg",
                            "height": 60
                        },
                        {
                            "width": 120,
                            "value": "https://images.foody.vn/res/g99/986724/s120x120/foody-tiem-com-bep-nha-que-245-637265558120539878.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x120/foody-tiem-com-bep-nha-que-245-637265558120539878.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x160/foody-tiem-com-bep-nha-que-245-637265558120539878.jpg",
                            "height": 160
                        },
                        {
                            "width": 180,
                            "value": "https://images.foody.vn/res/g99/986724/s180x180/foody-tiem-com-bep-nha-que-245-637265558120539878.jpg",
                            "height": 180
                        },
                        {
                            "width": 240,
                            "value": "https://images.foody.vn/res/g99/986724/s250x250/foody-tiem-com-bep-nha-que-245-637265558120539878.jpg",
                            "height": 240
                        },
                        {
                            "width": 280,
                            "value": "https://images.foody.vn/res/g99/986724/s280x175/foody-tiem-com-bep-nha-que-245-637265558120539878.jpg",
                            "height": 175
                        },
                        {
                            "width": 400,
                            "value": "https://images.foody.vn/res/g99/986724/s400x400/foody-tiem-com-bep-nha-que-245-637265558120539878.jpg",
                            "height": 216
                        },
                        {
                            "width": 600,
                            "value": "https://images.foody.vn/res/g99/986724/s600x600/foody-tiem-com-bep-nha-que-245-637265558120539878.jpg",
                            "height": 324
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x400/foody-tiem-com-bep-nha-que-245-637265558120539878.jpg",
                            "height": 400
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x640/foody-tiem-com-bep-nha-que-245-637265558120539878.jpg",
                            "height": 640
                        },
                        {
                            "width": 750,
                            "value": "https://images.foody.vn/res/g99/986724/s750x400/foody-tiem-com-bep-nha-que-245-637265558120539878.jpg",
                            "height": 400
                        },
                        {
                            "width": 1242,
                            "value": "https://images.foody.vn/res/g99/986724/s1242x600/foody-tiem-com-bep-nha-que-245-637265558120539878.jpg",
                            "height": 600
                        }
                    ]
                },
                {
                    "photos": [
                        {
                            "width": 60,
                            "value": "https://images.foody.vn/res/g99/986724/s60x60/foody-tiem-com-bep-nha-que-581-637265558120696137.jpg",
                            "height": 60
                        },
                        {
                            "width": 120,
                            "value": "https://images.foody.vn/res/g99/986724/s120x120/foody-tiem-com-bep-nha-que-581-637265558120696137.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x120/foody-tiem-com-bep-nha-que-581-637265558120696137.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x160/foody-tiem-com-bep-nha-que-581-637265558120696137.jpg",
                            "height": 160
                        },
                        {
                            "width": 180,
                            "value": "https://images.foody.vn/res/g99/986724/s180x180/foody-tiem-com-bep-nha-que-581-637265558120696137.jpg",
                            "height": 180
                        },
                        {
                            "width": 240,
                            "value": "https://images.foody.vn/res/g99/986724/s250x250/foody-tiem-com-bep-nha-que-581-637265558120696137.jpg",
                            "height": 240
                        },
                        {
                            "width": 280,
                            "value": "https://images.foody.vn/res/g99/986724/s280x175/foody-tiem-com-bep-nha-que-581-637265558120696137.jpg",
                            "height": 175
                        },
                        {
                            "width": 400,
                            "value": "https://images.foody.vn/res/g99/986724/s400x400/foody-tiem-com-bep-nha-que-581-637265558120696137.jpg",
                            "height": 216
                        },
                        {
                            "width": 600,
                            "value": "https://images.foody.vn/res/g99/986724/s600x600/foody-tiem-com-bep-nha-que-581-637265558120696137.jpg",
                            "height": 324
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x400/foody-tiem-com-bep-nha-que-581-637265558120696137.jpg",
                            "height": 400
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x640/foody-tiem-com-bep-nha-que-581-637265558120696137.jpg",
                            "height": 640
                        },
                        {
                            "width": 750,
                            "value": "https://images.foody.vn/res/g99/986724/s750x400/foody-tiem-com-bep-nha-que-581-637265558120696137.jpg",
                            "height": 400
                        },
                        {
                            "width": 1242,
                            "value": "https://images.foody.vn/res/g99/986724/s1242x600/foody-tiem-com-bep-nha-que-581-637265558120696137.jpg",
                            "height": 600
                        }
                    ]
                },
                {
                    "photos": [
                        {
                            "width": 60,
                            "value": "https://images.foody.vn/res/g99/986724/s60x60/foody-tiem-com-bep-nha-que-995-637255165573257890.jpg",
                            "height": 60
                        },
                        {
                            "width": 120,
                            "value": "https://images.foody.vn/res/g99/986724/s120x120/foody-tiem-com-bep-nha-que-995-637255165573257890.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x120/foody-tiem-com-bep-nha-que-995-637255165573257890.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x160/foody-tiem-com-bep-nha-que-995-637255165573257890.jpg",
                            "height": 160
                        },
                        {
                            "width": 180,
                            "value": "https://images.foody.vn/res/g99/986724/s180x180/foody-tiem-com-bep-nha-que-995-637255165573257890.jpg",
                            "height": 180
                        },
                        {
                            "width": 240,
                            "value": "https://images.foody.vn/res/g99/986724/s250x250/foody-tiem-com-bep-nha-que-995-637255165573257890.jpg",
                            "height": 240
                        },
                        {
                            "width": 280,
                            "value": "https://images.foody.vn/res/g99/986724/s280x175/foody-tiem-com-bep-nha-que-995-637255165573257890.jpg",
                            "height": 175
                        },
                        {
                            "width": 400,
                            "value": "https://images.foody.vn/res/g99/986724/s400x400/foody-tiem-com-bep-nha-que-995-637255165573257890.jpg",
                            "height": 216
                        },
                        {
                            "width": 600,
                            "value": "https://images.foody.vn/res/g99/986724/s600x600/foody-tiem-com-bep-nha-que-995-637255165573257890.jpg",
                            "height": 324
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x400/foody-tiem-com-bep-nha-que-995-637255165573257890.jpg",
                            "height": 400
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x640/foody-tiem-com-bep-nha-que-995-637255165573257890.jpg",
                            "height": 640
                        },
                        {
                            "width": 750,
                            "value": "https://images.foody.vn/res/g99/986724/s750x400/foody-tiem-com-bep-nha-que-995-637255165573257890.jpg",
                            "height": 400
                        },
                        {
                            "width": 1242,
                            "value": "https://images.foody.vn/res/g99/986724/s1242x600/foody-tiem-com-bep-nha-que-995-637255165573257890.jpg",
                            "height": 600
                        }
                    ]
                },
                {
                    "photos": [
                        {
                            "width": 60,
                            "value": "https://images.foody.vn/res/g99/986724/s60x60/foody-tiem-com-bep-nha-que-594-637255121156760688.jpg",
                            "height": 60
                        },
                        {
                            "width": 120,
                            "value": "https://images.foody.vn/res/g99/986724/s120x120/foody-tiem-com-bep-nha-que-594-637255121156760688.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x120/foody-tiem-com-bep-nha-que-594-637255121156760688.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x160/foody-tiem-com-bep-nha-que-594-637255121156760688.jpg",
                            "height": 160
                        },
                        {
                            "width": 180,
                            "value": "https://images.foody.vn/res/g99/986724/s180x180/foody-tiem-com-bep-nha-que-594-637255121156760688.jpg",
                            "height": 180
                        },
                        {
                            "width": 240,
                            "value": "https://images.foody.vn/res/g99/986724/s250x250/foody-tiem-com-bep-nha-que-594-637255121156760688.jpg",
                            "height": 240
                        },
                        {
                            "width": 280,
                            "value": "https://images.foody.vn/res/g99/986724/s280x175/foody-tiem-com-bep-nha-que-594-637255121156760688.jpg",
                            "height": 175
                        },
                        {
                            "width": 400,
                            "value": "https://images.foody.vn/res/g99/986724/s400x400/foody-tiem-com-bep-nha-que-594-637255121156760688.jpg",
                            "height": 216
                        },
                        {
                            "width": 600,
                            "value": "https://images.foody.vn/res/g99/986724/s600x600/foody-tiem-com-bep-nha-que-594-637255121156760688.jpg",
                            "height": 324
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x400/foody-tiem-com-bep-nha-que-594-637255121156760688.jpg",
                            "height": 400
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x640/foody-tiem-com-bep-nha-que-594-637255121156760688.jpg",
                            "height": 640
                        },
                        {
                            "width": 750,
                            "value": "https://images.foody.vn/res/g99/986724/s750x400/foody-tiem-com-bep-nha-que-594-637255121156760688.jpg",
                            "height": 400
                        },
                        {
                            "width": 1242,
                            "value": "https://images.foody.vn/res/g99/986724/s1242x600/foody-tiem-com-bep-nha-que-594-637255121156760688.jpg",
                            "height": 600
                        }
                    ]
                },
                {
                    "photos": [
                        {
                            "width": 60,
                            "value": "https://images.foody.vn/res/g99/986724/s60x60/foody-tiem-com-bep-nha-que-867-637255116864853847.jpg",
                            "height": 60
                        },
                        {
                            "width": 120,
                            "value": "https://images.foody.vn/res/g99/986724/s120x120/foody-tiem-com-bep-nha-que-867-637255116864853847.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x120/foody-tiem-com-bep-nha-que-867-637255116864853847.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x160/foody-tiem-com-bep-nha-que-867-637255116864853847.jpg",
                            "height": 160
                        },
                        {
                            "width": 180,
                            "value": "https://images.foody.vn/res/g99/986724/s180x180/foody-tiem-com-bep-nha-que-867-637255116864853847.jpg",
                            "height": 180
                        },
                        {
                            "width": 240,
                            "value": "https://images.foody.vn/res/g99/986724/s250x250/foody-tiem-com-bep-nha-que-867-637255116864853847.jpg",
                            "height": 240
                        },
                        {
                            "width": 280,
                            "value": "https://images.foody.vn/res/g99/986724/s280x175/foody-tiem-com-bep-nha-que-867-637255116864853847.jpg",
                            "height": 175
                        },
                        {
                            "width": 400,
                            "value": "https://images.foody.vn/res/g99/986724/s400x400/foody-tiem-com-bep-nha-que-867-637255116864853847.jpg",
                            "height": 216
                        },
                        {
                            "width": 600,
                            "value": "https://images.foody.vn/res/g99/986724/s600x600/foody-tiem-com-bep-nha-que-867-637255116864853847.jpg",
                            "height": 324
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x400/foody-tiem-com-bep-nha-que-867-637255116864853847.jpg",
                            "height": 400
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x640/foody-tiem-com-bep-nha-que-867-637255116864853847.jpg",
                            "height": 640
                        },
                        {
                            "width": 750,
                            "value": "https://images.foody.vn/res/g99/986724/s750x400/foody-tiem-com-bep-nha-que-867-637255116864853847.jpg",
                            "height": 400
                        },
                        {
                            "width": 1242,
                            "value": "https://images.foody.vn/res/g99/986724/s1242x600/foody-tiem-com-bep-nha-que-867-637255116864853847.jpg",
                            "height": 600
                        }
                    ]
                },
                {
                    "photos": [
                        {
                            "width": 60,
                            "value": "https://images.foody.vn/res/g99/986724/s60x60/foody-tiem-com-bep-nha-que-869-637255114849931487.jpg",
                            "height": 60
                        },
                        {
                            "width": 120,
                            "value": "https://images.foody.vn/res/g99/986724/s120x120/foody-tiem-com-bep-nha-que-869-637255114849931487.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x120/foody-tiem-com-bep-nha-que-869-637255114849931487.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x160/foody-tiem-com-bep-nha-que-869-637255114849931487.jpg",
                            "height": 160
                        },
                        {
                            "width": 180,
                            "value": "https://images.foody.vn/res/g99/986724/s180x180/foody-tiem-com-bep-nha-que-869-637255114849931487.jpg",
                            "height": 180
                        },
                        {
                            "width": 240,
                            "value": "https://images.foody.vn/res/g99/986724/s250x250/foody-tiem-com-bep-nha-que-869-637255114849931487.jpg",
                            "height": 240
                        },
                        {
                            "width": 280,
                            "value": "https://images.foody.vn/res/g99/986724/s280x175/foody-tiem-com-bep-nha-que-869-637255114849931487.jpg",
                            "height": 175
                        },
                        {
                            "width": 400,
                            "value": "https://images.foody.vn/res/g99/986724/s400x400/foody-tiem-com-bep-nha-que-869-637255114849931487.jpg",
                            "height": 216
                        },
                        {
                            "width": 600,
                            "value": "https://images.foody.vn/res/g99/986724/s600x600/foody-tiem-com-bep-nha-que-869-637255114849931487.jpg",
                            "height": 324
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x400/foody-tiem-com-bep-nha-que-869-637255114849931487.jpg",
                            "height": 400
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x640/foody-tiem-com-bep-nha-que-869-637255114849931487.jpg",
                            "height": 640
                        },
                        {
                            "width": 750,
                            "value": "https://images.foody.vn/res/g99/986724/s750x400/foody-tiem-com-bep-nha-que-869-637255114849931487.jpg",
                            "height": 400
                        },
                        {
                            "width": 1242,
                            "value": "https://images.foody.vn/res/g99/986724/s1242x600/foody-tiem-com-bep-nha-que-869-637255114849931487.jpg",
                            "height": 600
                        }
                    ]
                },
                {
                    "photos": [
                        {
                            "width": 60,
                            "value": "https://images.foody.vn/res/g99/986724/s60x60/foody-tiem-com-bep-nha-que-833-637255112779290094.jpg",
                            "height": 60
                        },
                        {
                            "width": 120,
                            "value": "https://images.foody.vn/res/g99/986724/s120x120/foody-tiem-com-bep-nha-que-833-637255112779290094.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x120/foody-tiem-com-bep-nha-que-833-637255112779290094.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x160/foody-tiem-com-bep-nha-que-833-637255112779290094.jpg",
                            "height": 160
                        },
                        {
                            "width": 180,
                            "value": "https://images.foody.vn/res/g99/986724/s180x180/foody-tiem-com-bep-nha-que-833-637255112779290094.jpg",
                            "height": 180
                        },
                        {
                            "width": 240,
                            "value": "https://images.foody.vn/res/g99/986724/s250x250/foody-tiem-com-bep-nha-que-833-637255112779290094.jpg",
                            "height": 240
                        },
                        {
                            "width": 280,
                            "value": "https://images.foody.vn/res/g99/986724/s280x175/foody-tiem-com-bep-nha-que-833-637255112779290094.jpg",
                            "height": 175
                        },
                        {
                            "width": 400,
                            "value": "https://images.foody.vn/res/g99/986724/s400x400/foody-tiem-com-bep-nha-que-833-637255112779290094.jpg",
                            "height": 216
                        },
                        {
                            "width": 600,
                            "value": "https://images.foody.vn/res/g99/986724/s600x600/foody-tiem-com-bep-nha-que-833-637255112779290094.jpg",
                            "height": 324
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x400/foody-tiem-com-bep-nha-que-833-637255112779290094.jpg",
                            "height": 400
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x640/foody-tiem-com-bep-nha-que-833-637255112779290094.jpg",
                            "height": 640
                        },
                        {
                            "width": 750,
                            "value": "https://images.foody.vn/res/g99/986724/s750x400/foody-tiem-com-bep-nha-que-833-637255112779290094.jpg",
                            "height": 400
                        },
                        {
                            "width": 1242,
                            "value": "https://images.foody.vn/res/g99/986724/s1242x600/foody-tiem-com-bep-nha-que-833-637255112779290094.jpg",
                            "height": 600
                        }
                    ]
                },
                {
                    "photos": [
                        {
                            "width": 60,
                            "value": "https://images.foody.vn/res/g99/986724/s60x60/foody-tiem-com-bep-nha-que-434-637255096828094309.jpg",
                            "height": 60
                        },
                        {
                            "width": 120,
                            "value": "https://images.foody.vn/res/g99/986724/s120x120/foody-tiem-com-bep-nha-que-434-637255096828094309.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x120/foody-tiem-com-bep-nha-que-434-637255096828094309.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x160/foody-tiem-com-bep-nha-que-434-637255096828094309.jpg",
                            "height": 160
                        },
                        {
                            "width": 180,
                            "value": "https://images.foody.vn/res/g99/986724/s180x180/foody-tiem-com-bep-nha-que-434-637255096828094309.jpg",
                            "height": 180
                        },
                        {
                            "width": 240,
                            "value": "https://images.foody.vn/res/g99/986724/s250x250/foody-tiem-com-bep-nha-que-434-637255096828094309.jpg",
                            "height": 240
                        },
                        {
                            "width": 280,
                            "value": "https://images.foody.vn/res/g99/986724/s280x175/foody-tiem-com-bep-nha-que-434-637255096828094309.jpg",
                            "height": 175
                        },
                        {
                            "width": 400,
                            "value": "https://images.foody.vn/res/g99/986724/s400x400/foody-tiem-com-bep-nha-que-434-637255096828094309.jpg",
                            "height": 216
                        },
                        {
                            "width": 600,
                            "value": "https://images.foody.vn/res/g99/986724/s600x600/foody-tiem-com-bep-nha-que-434-637255096828094309.jpg",
                            "height": 324
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x400/foody-tiem-com-bep-nha-que-434-637255096828094309.jpg",
                            "height": 400
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x640/foody-tiem-com-bep-nha-que-434-637255096828094309.jpg",
                            "height": 640
                        },
                        {
                            "width": 750,
                            "value": "https://images.foody.vn/res/g99/986724/s750x400/foody-tiem-com-bep-nha-que-434-637255096828094309.jpg",
                            "height": 400
                        },
                        {
                            "width": 1242,
                            "value": "https://images.foody.vn/res/g99/986724/s1242x600/foody-tiem-com-bep-nha-que-434-637255096828094309.jpg",
                            "height": 600
                        }
                    ]
                },
                {
                    "photos": [
                        {
                            "width": 60,
                            "value": "https://images.foody.vn/res/g99/986724/s60x60/foody-tiem-com-bep-nha-que-954-637252130432155572.jpg",
                            "height": 60
                        },
                        {
                            "width": 120,
                            "value": "https://images.foody.vn/res/g99/986724/s120x120/foody-tiem-com-bep-nha-que-954-637252130432155572.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x120/foody-tiem-com-bep-nha-que-954-637252130432155572.jpg",
                            "height": 120
                        },
                        {
                            "width": 160,
                            "value": "https://images.foody.vn/res/g99/986724/s160x160/foody-tiem-com-bep-nha-que-954-637252130432155572.jpg",
                            "height": 160
                        },
                        {
                            "width": 180,
                            "value": "https://images.foody.vn/res/g99/986724/s180x180/foody-tiem-com-bep-nha-que-954-637252130432155572.jpg",
                            "height": 180
                        },
                        {
                            "width": 240,
                            "value": "https://images.foody.vn/res/g99/986724/s250x250/foody-tiem-com-bep-nha-que-954-637252130432155572.jpg",
                            "height": 240
                        },
                        {
                            "width": 280,
                            "value": "https://images.foody.vn/res/g99/986724/s280x175/foody-tiem-com-bep-nha-que-954-637252130432155572.jpg",
                            "height": 175
                        },
                        {
                            "width": 400,
                            "value": "https://images.foody.vn/res/g99/986724/s400x400/foody-tiem-com-bep-nha-que-954-637252130432155572.jpg",
                            "height": 216
                        },
                        {
                            "width": 600,
                            "value": "https://images.foody.vn/res/g99/986724/s600x600/foody-tiem-com-bep-nha-que-954-637252130432155572.jpg",
                            "height": 324
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x400/foody-tiem-com-bep-nha-que-954-637252130432155572.jpg",
                            "height": 400
                        },
                        {
                            "width": 640,
                            "value": "https://images.foody.vn/res/g99/986724/s640x640/foody-tiem-com-bep-nha-que-954-637252130432155572.jpg",
                            "height": 640
                        },
                        {
                            "width": 750,
                            "value": "https://images.foody.vn/res/g99/986724/s750x400/foody-tiem-com-bep-nha-que-954-637252130432155572.jpg",
                            "height": 400
                        },
                        {
                            "width": 1242,
                            "value": "https://images.foody.vn/res/g99/986724/s1242x600/foody-tiem-com-bep-nha-que-954-637252130432155572.jpg",
                            "height": 600
                        }
                    ]
                }
            ]
        },
        "menu_infos": [
            {
                "dish_type_id": 6460448,
                "dish_type_name": "Combo",
                "dishes": [
                    {
                        "is_deleted": false,
                        "description": "",
                        "price": {
                            "text": "44,000đ",
                            "unit": "đ",
                            "value": 44000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "0",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/1f39e63f-2ae0-4b7f-a25c-455e5976-b5182a4a-221212101806.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/1f39e63f-2ae0-4b7f-a25c-455e5976-b5182a4a-221212101806.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/1f39e63f-2ae0-4b7f-a25c-455e5976-b5182a4a-221212101806.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/1f39e63f-2ae0-4b7f-a25c-455e5976-b5182a4a-221212101806.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/1f39e63f-2ae0-4b7f-a25c-455e5976-b5182a4a-221212101806.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/1f39e63f-2ae0-4b7f-a25c-455e5976-b5182a4a-221212101806.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "00:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 153214549,
                        "is_group_discount_item": true,
                        "name": "Cơm Ba Chỉ Giòn Da + 1 Chai Sprite"
                    },
                    {
                        "available_time": "2022-12-30 23:59:59",
                        "is_deleted": false,
                        "description": "",
                        "price": {
                            "text": "42,000đ",
                            "unit": "đ",
                            "value": 42000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "0",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/43e09e6b-08bf-4288-8b45-2192e095-d6787d04-221212101712.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/43e09e6b-08bf-4288-8b45-2192e095-d6787d04-221212101712.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/43e09e6b-08bf-4288-8b45-2192e095-d6787d04-221212101712.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/43e09e6b-08bf-4288-8b45-2192e095-d6787d04-221212101712.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/43e09e6b-08bf-4288-8b45-2192e095-d6787d04-221212101712.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/43e09e6b-08bf-4288-8b45-2192e095-d6787d04-221212101712.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": false,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "00:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 153214572,
                        "is_group_discount_item": true,
                        "name": "Cơm Cá Chiên Mắm Xoài + 1 Chai Coca"
                    },
                    {
                        "available_time": "2022-12-30 23:59:59",
                        "is_deleted": false,
                        "description": "",
                        "price": {
                            "text": "50,000đ",
                            "unit": "đ",
                            "value": 50000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "0",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/d01d6443-167c-4e8f-bd80-c5eb0da1-420021a1-221212101742.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/d01d6443-167c-4e8f-bd80-c5eb0da1-420021a1-221212101742.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/d01d6443-167c-4e8f-bd80-c5eb0da1-420021a1-221212101742.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/d01d6443-167c-4e8f-bd80-c5eb0da1-420021a1-221212101742.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/d01d6443-167c-4e8f-bd80-c5eb0da1-420021a1-221212101742.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/d01d6443-167c-4e8f-bd80-c5eb0da1-420021a1-221212101742.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": false,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "00:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 153214565,
                        "is_group_discount_item": true,
                        "name": "Cơm Sườn Sa tế + 1 Sữa NutriBoost"
                    }
                ]
            },
            {
                "dish_type_id": 1007521,
                "dish_type_name": "Cơm Bếp Nhà Quê (bán từ 10h30 đến 22h00)",
                "dishes": [
                    {
                        "is_deleted": false,
                        "description": "Món phục thay đổi hằng ngày",
                        "price": {
                            "text": "32,000đ",
                            "unit": "đ",
                            "value": 32000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "100+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/58a3b995-fd35-41b4-8a57-aaaaaf7bb068.jpg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/58a3b995-fd35-41b4-8a57-aaaaaf7bb068.jpg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/58a3b995-fd35-41b4-8a57-aaaaaf7bb068.jpg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/58a3b995-fd35-41b4-8a57-aaaaaf7bb068.jpg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/58a3b995-fd35-41b4-8a57-aaaaaf7bb068.jpg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/58a3b995-fd35-41b4-8a57-aaaaaf7bb068.jpg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10174787,
                        "is_group_discount_item": true,
                        "name": "Cơm Ba Chỉ Giòn Da mắm nước"
                    },
                    {
                        "available_time": "2022-12-30 23:59:59",
                        "is_deleted": false,
                        "description": "Món phụ thay đổi hằng ngày",
                        "price": {
                            "text": "35,000đ",
                            "unit": "đ",
                            "value": 35000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "100+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/533d0836-9bdc-4a82-b344-913dbbfe5eae.jpg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/533d0836-9bdc-4a82-b344-913dbbfe5eae.jpg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/533d0836-9bdc-4a82-b344-913dbbfe5eae.jpg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/533d0836-9bdc-4a82-b344-913dbbfe5eae.jpg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/533d0836-9bdc-4a82-b344-913dbbfe5eae.jpg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/533d0836-9bdc-4a82-b344-913dbbfe5eae.jpg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": false,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 9342589,
                        "is_group_discount_item": true,
                        "name": "Cơm Sườn  Sa Tế"
                    },
                    {
                        "is_deleted": false,
                        "description": "Món phục thay đổi hằng ngày",
                        "price": {
                            "text": "30,000đ",
                            "unit": "đ",
                            "value": 30000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "100+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/41ae4a4d-fa77-4690-9e53-bc1bec52-36462247-210403193407.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/41ae4a4d-fa77-4690-9e53-bc1bec52-36462247-210403193407.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/41ae4a4d-fa77-4690-9e53-bc1bec52-36462247-210403193407.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/41ae4a4d-fa77-4690-9e53-bc1bec52-36462247-210403193407.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/41ae4a4d-fa77-4690-9e53-bc1bec52-36462247-210403193407.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/41ae4a4d-fa77-4690-9e53-bc1bec52-36462247-210403193407.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10266513,
                        "is_group_discount_item": true,
                        "name": "Cơm Thịt Rim Lá Chanh"
                    },
                    {
                        "available_time": "2022-12-30 23:59:59",
                        "is_deleted": false,
                        "description": "Món phụ thay đổi hàng ngay",
                        "price": {
                            "text": "30,000đ",
                            "unit": "đ",
                            "value": 30000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "50+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/3cff44cf-0625-4225-b4a2-67e16c27-a8dfbd8c-201203103648.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/3cff44cf-0625-4225-b4a2-67e16c27-a8dfbd8c-201203103648.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/3cff44cf-0625-4225-b4a2-67e16c27-a8dfbd8c-201203103648.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/3cff44cf-0625-4225-b4a2-67e16c27-a8dfbd8c-201203103648.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/3cff44cf-0625-4225-b4a2-67e16c27-a8dfbd8c-201203103648.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/3cff44cf-0625-4225-b4a2-67e16c27-a8dfbd8c-201203103648.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": false,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10716059,
                        "is_group_discount_item": true,
                        "name": "Cơm Cá Chiên Mắm Xoài"
                    },
                    {
                        "is_deleted": false,
                        "description": "",
                        "price": {
                            "text": "5,000đ",
                            "unit": "đ",
                            "value": 5000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "10+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/b6c0bc3a-8ad5-4a2f-9856-bc18b1ce8434.jpg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/b6c0bc3a-8ad5-4a2f-9856-bc18b1ce8434.jpg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/b6c0bc3a-8ad5-4a2f-9856-bc18b1ce8434.jpg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/b6c0bc3a-8ad5-4a2f-9856-bc18b1ce8434.jpg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/b6c0bc3a-8ad5-4a2f-9856-bc18b1ce8434.jpg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/b6c0bc3a-8ad5-4a2f-9856-bc18b1ce8434.jpg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "22:00"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "22:00"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "22:00"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "22:00"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "22:00"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "22:00"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "22:00"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 9096851,
                        "is_group_discount_item": true,
                        "name": "Cơm thêm"
                    },
                    {
                        "is_deleted": false,
                        "description": "món phụ thay đổi hằng ngày",
                        "price": {
                            "text": "30,000đ",
                            "unit": "đ",
                            "value": 30000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "50+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/221f1467-5ed4-4548-8ae2-7b93dd68bda1.jpg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/221f1467-5ed4-4548-8ae2-7b93dd68bda1.jpg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/221f1467-5ed4-4548-8ae2-7b93dd68bda1.jpg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/221f1467-5ed4-4548-8ae2-7b93dd68bda1.jpg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/221f1467-5ed4-4548-8ae2-7b93dd68bda1.jpg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/221f1467-5ed4-4548-8ae2-7b93dd68bda1.jpg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "22:00"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "22:00"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "22:00"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "22:00"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "22:00"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "22:00"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "22:00"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 9096850,
                        "is_group_discount_item": true,
                        "name": "Cơm gà kho sả ớt"
                    },
                    {
                        "is_deleted": false,
                        "description": "Món phụ thay đổi hàng ngayf",
                        "price": {
                            "text": "32,000đ",
                            "unit": "đ",
                            "value": 32000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "50+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/ed7e4a23-f033-4e3a-a034-1d433abd-695dc99b-201228214907.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/ed7e4a23-f033-4e3a-a034-1d433abd-695dc99b-201228214907.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/ed7e4a23-f033-4e3a-a034-1d433abd-695dc99b-201228214907.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/ed7e4a23-f033-4e3a-a034-1d433abd-695dc99b-201228214907.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/ed7e4a23-f033-4e3a-a034-1d433abd-695dc99b-201228214907.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/ed7e4a23-f033-4e3a-a034-1d433abd-695dc99b-201228214907.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10436719,
                        "is_group_discount_item": true,
                        "name": "Cơm Gà Chiên Mắm Tỏi Ớt"
                    },
                    {
                        "is_deleted": false,
                        "description": "Món phụ thay đổi hàng ngayf",
                        "price": {
                            "text": "35,000đ",
                            "unit": "đ",
                            "value": 35000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "10+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/4a38e9c3-ce45-4e9c-b09b-8a7e7252-b1d48cf0-210403192826.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/4a38e9c3-ce45-4e9c-b09b-8a7e7252-b1d48cf0-210403192826.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/4a38e9c3-ce45-4e9c-b09b-8a7e7252-b1d48cf0-210403192826.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/4a38e9c3-ce45-4e9c-b09b-8a7e7252-b1d48cf0-210403192826.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/4a38e9c3-ce45-4e9c-b09b-8a7e7252-b1d48cf0-210403192826.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/4a38e9c3-ce45-4e9c-b09b-8a7e7252-b1d48cf0-210403192826.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10576054,
                        "is_group_discount_item": true,
                        "name": "Cơm Sườn Non Rim Mặn Ngọt"
                    },
                    {
                        "is_deleted": false,
                        "description": "",
                        "price": {
                            "text": "32,000đ",
                            "unit": "đ",
                            "value": 32000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "50+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/e1c73de2-d3da-45e2-99aa-7b0cb838b2c0.jpg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/e1c73de2-d3da-45e2-99aa-7b0cb838b2c0.jpg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/e1c73de2-d3da-45e2-99aa-7b0cb838b2c0.jpg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/e1c73de2-d3da-45e2-99aa-7b0cb838b2c0.jpg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/e1c73de2-d3da-45e2-99aa-7b0cb838b2c0.jpg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/e1c73de2-d3da-45e2-99aa-7b0cb838b2c0.jpg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10281875,
                        "is_group_discount_item": true,
                        "name": "Cơm Gà Rô Ti"
                    },
                    {
                        "is_deleted": false,
                        "description": "Món phục thay đổi hằng ngày",
                        "price": {
                            "text": "30,000đ",
                            "unit": "đ",
                            "value": 30000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "10+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/8440e5ae-6561-4b99-9194-9c05842dee78.jpg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/8440e5ae-6561-4b99-9194-9c05842dee78.jpg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/8440e5ae-6561-4b99-9194-9c05842dee78.jpg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/8440e5ae-6561-4b99-9194-9c05842dee78.jpg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/8440e5ae-6561-4b99-9194-9c05842dee78.jpg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/8440e5ae-6561-4b99-9194-9c05842dee78.jpg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 9374204,
                        "is_group_discount_item": true,
                        "name": "Cơm Thịt Luộc"
                    },
                    {
                        "is_deleted": false,
                        "description": "Món phục thay đổi hằng ngày",
                        "price": {
                            "text": "30,000đ",
                            "unit": "đ",
                            "value": 30000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "10+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/dd133c05-8ace-44da-bf3e-68742f4c-96849afd-211026112403.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/dd133c05-8ace-44da-bf3e-68742f4c-96849afd-211026112403.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/dd133c05-8ace-44da-bf3e-68742f4c-96849afd-211026112403.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/dd133c05-8ace-44da-bf3e-68742f4c-96849afd-211026112403.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/dd133c05-8ace-44da-bf3e-68742f4c-96849afd-211026112403.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/dd133c05-8ace-44da-bf3e-68742f4c-96849afd-211026112403.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10209931,
                        "is_group_discount_item": true,
                        "name": "Cơm Mực Xào Thơm Cà"
                    },
                    {
                        "is_deleted": false,
                        "description": "Món phục thay đổi hằng ngày",
                        "price": {
                            "text": "32,000đ",
                            "unit": "đ",
                            "value": 32000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "10+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/b87bd8c2-b561-4f21-aa36-a9d576c8-ecbdd1ec-220608141527.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/b87bd8c2-b561-4f21-aa36-a9d576c8-ecbdd1ec-220608141527.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/b87bd8c2-b561-4f21-aa36-a9d576c8-ecbdd1ec-220608141527.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/b87bd8c2-b561-4f21-aa36-a9d576c8-ecbdd1ec-220608141527.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/b87bd8c2-b561-4f21-aa36-a9d576c8-ecbdd1ec-220608141527.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/b87bd8c2-b561-4f21-aa36-a9d576c8-ecbdd1ec-220608141527.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10209928,
                        "is_group_discount_item": true,
                        "name": "Cơm Ba Chỉ Giòn Da Mắm Nêm"
                    },
                    {
                        "available_time": "2022-12-30 23:59:59",
                        "is_deleted": false,
                        "description": "món phụ thay đổi hàng ngày",
                        "price": {
                            "text": "30,000đ",
                            "unit": "đ",
                            "value": 30000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "10+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/453b2a94-bf0b-4063-bdd3-97626535-dd330643-220213121539.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/453b2a94-bf0b-4063-bdd3-97626535-dd330643-220213121539.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/453b2a94-bf0b-4063-bdd3-97626535-dd330643-220213121539.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/453b2a94-bf0b-4063-bdd3-97626535-dd330643-220213121539.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/453b2a94-bf0b-4063-bdd3-97626535-dd330643-220213121539.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/453b2a94-bf0b-4063-bdd3-97626535-dd330643-220213121539.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": false,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10249221,
                        "is_group_discount_item": true,
                        "name": "Cơm Cá Sốt Cà"
                    },
                    {
                        "available_time": "2022-12-30 23:59:59",
                        "is_deleted": false,
                        "description": "",
                        "price": {
                            "text": "30,000đ",
                            "unit": "đ",
                            "value": 30000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "10+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/e3196573-c13d-4fa3-8691-1e9dc265-6efa8a88-210403193305.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/e3196573-c13d-4fa3-8691-1e9dc265-6efa8a88-210403193305.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/e3196573-c13d-4fa3-8691-1e9dc265-6efa8a88-210403193305.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/e3196573-c13d-4fa3-8691-1e9dc265-6efa8a88-210403193305.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/e3196573-c13d-4fa3-8691-1e9dc265-6efa8a88-210403193305.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/e3196573-c13d-4fa3-8691-1e9dc265-6efa8a88-210403193305.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": false,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10289750,
                        "is_group_discount_item": true,
                        "name": "Cơm Đậu Khuôn Độn Thịt Sốt Cà Chua"
                    },
                    {
                        "available_time": "2022-12-30 23:59:59",
                        "is_deleted": false,
                        "description": "Món phụ thay đổi hàng ngayf",
                        "price": {
                            "text": "30,000đ",
                            "unit": "đ",
                            "value": 30000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "6",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/d8e2dd32-80d6-41d0-b3ba-bb96a0bc-f3911072-220516195425.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/d8e2dd32-80d6-41d0-b3ba-bb96a0bc-f3911072-220516195425.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/d8e2dd32-80d6-41d0-b3ba-bb96a0bc-f3911072-220516195425.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/d8e2dd32-80d6-41d0-b3ba-bb96a0bc-f3911072-220516195425.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/d8e2dd32-80d6-41d0-b3ba-bb96a0bc-f3911072-220516195425.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/d8e2dd32-80d6-41d0-b3ba-bb96a0bc-f3911072-220516195425.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": false,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10430028,
                        "is_group_discount_item": true,
                        "name": "Cơm Cá Kho Tiêu"
                    },
                    {
                        "is_deleted": false,
                        "description": "Món phụ thay đổi hằng ngày",
                        "price": {
                            "text": "45,000đ",
                            "unit": "đ",
                            "value": 45000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "7",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/a0906417-12fe-4d39-b223-a5c2e41b-45e23c52-210702101817.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/a0906417-12fe-4d39-b223-a5c2e41b-45e23c52-210702101817.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/a0906417-12fe-4d39-b223-a5c2e41b-45e23c52-210702101817.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/a0906417-12fe-4d39-b223-a5c2e41b-45e23c52-210702101817.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/a0906417-12fe-4d39-b223-a5c2e41b-45e23c52-210702101817.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/a0906417-12fe-4d39-b223-a5c2e41b-45e23c52-210702101817.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 16728582,
                        "is_group_discount_item": true,
                        "name": "Cơm Ba Chỉ Giòn Da+ Sườn Non Rim Mặn Ngọt)"
                    },
                    {
                        "available_time": "2022-12-30 23:59:59",
                        "is_deleted": false,
                        "description": "",
                        "price": {
                            "text": "30,000đ",
                            "unit": "đ",
                            "value": 30000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "10+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/2c61a342-e26e-461a-9c95-2ebfc036-e5925226-211026104641.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/2c61a342-e26e-461a-9c95-2ebfc036-e5925226-211026104641.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/2c61a342-e26e-461a-9c95-2ebfc036-e5925226-211026104641.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/2c61a342-e26e-461a-9c95-2ebfc036-e5925226-211026104641.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/2c61a342-e26e-461a-9c95-2ebfc036-e5925226-211026104641.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/2c61a342-e26e-461a-9c95-2ebfc036-e5925226-211026104641.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": false,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10281873,
                        "is_group_discount_item": true,
                        "name": "Cơm Thịt Cuộn Lá Lốt"
                    },
                    {
                        "available_time": "2022-12-30 23:59:59",
                        "is_deleted": false,
                        "description": "",
                        "price": {
                            "text": "30,000đ",
                            "unit": "đ",
                            "value": 30000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "3",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/1b68d498-44bd-44c7-b0a2-e5f585be-caf444be-221018110303.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/1b68d498-44bd-44c7-b0a2-e5f585be-caf444be-221018110303.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/1b68d498-44bd-44c7-b0a2-e5f585be-caf444be-221018110303.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/1b68d498-44bd-44c7-b0a2-e5f585be-caf444be-221018110303.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/1b68d498-44bd-44c7-b0a2-e5f585be-caf444be-221018110303.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/1b68d498-44bd-44c7-b0a2-e5f585be-caf444be-221018110303.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": false,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10486876,
                        "is_group_discount_item": true,
                        "name": "Cơm Thịt kho tàu"
                    },
                    {
                        "is_deleted": false,
                        "description": "Món phụ thay đổi hàng ngày",
                        "price": {
                            "text": "45,000đ",
                            "unit": "đ",
                            "value": 45000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "0",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/24d613a0-a266-4d3c-9f6b-7b5a5206-35b69575-210608195057.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/24d613a0-a266-4d3c-9f6b-7b5a5206-35b69575-210608195057.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/24d613a0-a266-4d3c-9f6b-7b5a5206-35b69575-210608195057.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/24d613a0-a266-4d3c-9f6b-7b5a5206-35b69575-210608195057.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/24d613a0-a266-4d3c-9f6b-7b5a5206-35b69575-210608195057.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/24d613a0-a266-4d3c-9f6b-7b5a5206-35b69575-210608195057.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10535401,
                        "is_group_discount_item": true,
                        "name": "Combo Cơm Ba Chỉ Giòn Da + Sprite"
                    },
                    {
                        "available_time": "2022-12-30 23:59:59",
                        "is_deleted": false,
                        "description": "Món phụ thay đổi hằng ngày",
                        "price": {
                            "text": "40,000đ",
                            "unit": "đ",
                            "value": 40000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "1",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/a5caaec2-86a1-43a9-a0f1-36c4c180-42288da5-210608195203.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/a5caaec2-86a1-43a9-a0f1-36c4c180-42288da5-210608195203.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/a5caaec2-86a1-43a9-a0f1-36c4c180-42288da5-210608195203.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/a5caaec2-86a1-43a9-a0f1-36c4c180-42288da5-210608195203.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/a5caaec2-86a1-43a9-a0f1-36c4c180-42288da5-210608195203.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/a5caaec2-86a1-43a9-a0f1-36c4c180-42288da5-210608195203.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": false,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10476724,
                        "is_group_discount_item": true,
                        "name": "Combo Cơm Cá Chiên Mắm Xoài + Cocacola"
                    },
                    {
                        "is_deleted": false,
                        "description": "món phụ thay đổi hằng ngày",
                        "price": {
                            "text": "30,000đ",
                            "unit": "đ",
                            "value": 30000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "1",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/e0dd1345-8cd8-42c9-9734-7c484de8-879f09f6-210312104357.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/e0dd1345-8cd8-42c9-9734-7c484de8-879f09f6-210312104357.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/e0dd1345-8cd8-42c9-9734-7c484de8-879f09f6-210312104357.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/e0dd1345-8cd8-42c9-9734-7c484de8-879f09f6-210312104357.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/e0dd1345-8cd8-42c9-9734-7c484de8-879f09f6-210312104357.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/e0dd1345-8cd8-42c9-9734-7c484de8-879f09f6-210312104357.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10725249,
                        "is_group_discount_item": true,
                        "name": "Cơm Ốc Xào Sả Ớt"
                    },
                    {
                        "is_deleted": false,
                        "description": "Món phụ thay đổi hàng ngày",
                        "price": {
                            "text": "42,000đ",
                            "unit": "đ",
                            "value": 42000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "4",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/ac76c0c6-8e84-4c94-b28f-450477cd-9b801804-210202101459.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/ac76c0c6-8e84-4c94-b28f-450477cd-9b801804-210202101459.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/ac76c0c6-8e84-4c94-b28f-450477cd-9b801804-210202101459.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/ac76c0c6-8e84-4c94-b28f-450477cd-9b801804-210202101459.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/ac76c0c6-8e84-4c94-b28f-450477cd-9b801804-210202101459.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/ac76c0c6-8e84-4c94-b28f-450477cd-9b801804-210202101459.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 13931632,
                        "is_group_discount_item": true,
                        "name": "Combo Gà Chiên Mắm Tỏi Ớt + Cocacola"
                    },
                    {
                        "is_deleted": false,
                        "description": "Món phụ thay đổi hàng ngayf",
                        "price": {
                            "text": "30,000đ",
                            "unit": "đ",
                            "value": 30000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "0",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/77daa7e9-b051-4634-87ac-7e334c55a20e.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/77daa7e9-b051-4634-87ac-7e334c55a20e.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/77daa7e9-b051-4634-87ac-7e334c55a20e.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/77daa7e9-b051-4634-87ac-7e334c55a20e.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/77daa7e9-b051-4634-87ac-7e334c55a20e.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/77daa7e9-b051-4634-87ac-7e334c55a20e.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10514524,
                        "is_group_discount_item": true,
                        "name": "Cơm thịt kho đậu khuôn"
                    }
                ]
            },
            {
                "dish_type_id": 1122037,
                "dish_type_name": "Đồ uống",
                "dishes": [
                    {
                        "is_deleted": false,
                        "description": "",
                        "price": {
                            "text": "12,000đ",
                            "unit": "đ",
                            "value": 12000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "10+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/095e1a77-7464-43af-a4c2-446669dd4230.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/095e1a77-7464-43af-a4c2-446669dd4230.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/095e1a77-7464-43af-a4c2-446669dd4230.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/095e1a77-7464-43af-a4c2-446669dd4230.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/095e1a77-7464-43af-a4c2-446669dd4230.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/095e1a77-7464-43af-a4c2-446669dd4230.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "00:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10510725,
                        "is_group_discount_item": true,
                        "name": "Cocacola"
                    },
                    {
                        "available_time": "2022-12-30 23:59:59",
                        "is_deleted": false,
                        "description": "",
                        "price": {
                            "text": "12,000đ",
                            "unit": "đ",
                            "value": 12000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "5",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/769535f7-9a58-4e45-8f77-7b2d2e3ca550.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/769535f7-9a58-4e45-8f77-7b2d2e3ca550.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/769535f7-9a58-4e45-8f77-7b2d2e3ca550.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/769535f7-9a58-4e45-8f77-7b2d2e3ca550.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/769535f7-9a58-4e45-8f77-7b2d2e3ca550.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/769535f7-9a58-4e45-8f77-7b2d2e3ca550.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": false,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "00:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10510741,
                        "is_group_discount_item": true,
                        "name": "Sprite"
                    },
                    {
                        "is_deleted": false,
                        "description": "",
                        "price": {
                            "text": "20,000đ",
                            "unit": "đ",
                            "value": 20000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "1",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/32fa2c4a-d59f-4c46-9678-6ecd145cd542.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/32fa2c4a-d59f-4c46-9678-6ecd145cd542.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/32fa2c4a-d59f-4c46-9678-6ecd145cd542.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/32fa2c4a-d59f-4c46-9678-6ecd145cd542.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/32fa2c4a-d59f-4c46-9678-6ecd145cd542.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/32fa2c4a-d59f-4c46-9678-6ecd145cd542.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "00:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10510717,
                        "is_group_discount_item": true,
                        "name": "Bò húc"
                    },
                    {
                        "is_deleted": false,
                        "description": "",
                        "price": {
                            "text": "12,000đ",
                            "unit": "đ",
                            "value": 12000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "1",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/a02a9c5c-1fa1-40ac-b222-0e68de62ff42.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/a02a9c5c-1fa1-40ac-b222-0e68de62ff42.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/a02a9c5c-1fa1-40ac-b222-0e68de62ff42.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/a02a9c5c-1fa1-40ac-b222-0e68de62ff42.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/a02a9c5c-1fa1-40ac-b222-0e68de62ff42.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/a02a9c5c-1fa1-40ac-b222-0e68de62ff42.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "00:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10510758,
                        "is_group_discount_item": true,
                        "name": "Nước Suối"
                    },
                    {
                        "is_deleted": false,
                        "description": "",
                        "price": {
                            "text": "12,000đ",
                            "unit": "đ",
                            "value": 12000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "1",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/dea4a983-d01f-48ea-9f92-4e8adb6e-5fcae06b-220629095505.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/dea4a983-d01f-48ea-9f92-4e8adb6e-5fcae06b-220629095505.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/dea4a983-d01f-48ea-9f92-4e8adb6e-5fcae06b-220629095505.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/dea4a983-d01f-48ea-9f92-4e8adb6e-5fcae06b-220629095505.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/dea4a983-d01f-48ea-9f92-4e8adb6e-5fcae06b-220629095505.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/dea4a983-d01f-48ea-9f92-4e8adb6e-5fcae06b-220629095505.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "00:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10510733,
                        "is_group_discount_item": true,
                        "name": "Teppy Cam"
                    },
                    {
                        "available_time": "2022-12-30 23:59:59",
                        "is_deleted": false,
                        "description": "",
                        "price": {
                            "text": "15,000đ",
                            "unit": "đ",
                            "value": 15000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "0",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/e3aee76e-6406-49c9-8bf8-95f50e10-9aa89e3f-220629095634.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/e3aee76e-6406-49c9-8bf8-95f50e10-9aa89e3f-220629095634.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/e3aee76e-6406-49c9-8bf8-95f50e10-9aa89e3f-220629095634.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/e3aee76e-6406-49c9-8bf8-95f50e10-9aa89e3f-220629095634.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/e3aee76e-6406-49c9-8bf8-95f50e10-9aa89e3f-220629095634.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/e3aee76e-6406-49c9-8bf8-95f50e10-9aa89e3f-220629095634.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": false,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "00:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "00:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 10467306,
                        "is_group_discount_item": true,
                        "name": "Nutriboost Cam"
                    }
                ]
            },
            {
                "dish_type_id": 1603322,
                "dish_type_name": "Đồ Ăn Thêm",
                "dishes": [
                    {
                        "is_deleted": false,
                        "description": "",
                        "price": {
                            "text": "6,000đ",
                            "unit": "đ",
                            "value": 6000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "10+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/8835deeb-6a41-4fcc-9313-372158dc-10ab29cd-210401142115.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/8835deeb-6a41-4fcc-9313-372158dc-10ab29cd-210401142115.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/8835deeb-6a41-4fcc-9313-372158dc-10ab29cd-210401142115.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/8835deeb-6a41-4fcc-9313-372158dc-10ab29cd-210401142115.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/8835deeb-6a41-4fcc-9313-372158dc-10ab29cd-210401142115.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/8835deeb-6a41-4fcc-9313-372158dc-10ab29cd-210401142115.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 14474124,
                        "is_group_discount_item": true,
                        "name": "Trứng Ốp La"
                    },
                    {
                        "available_time": "2022-12-30 23:59:59",
                        "is_deleted": false,
                        "description": " ",
                        "price": {
                            "text": "6,000đ",
                            "unit": "đ",
                            "value": 6000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "10+",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/97c21e27-1a26-487a-86eb-9d636bd2-74d79ffb-210401142025.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/97c21e27-1a26-487a-86eb-9d636bd2-74d79ffb-210401142025.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/97c21e27-1a26-487a-86eb-9d636bd2-74d79ffb-210401142025.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/97c21e27-1a26-487a-86eb-9d636bd2-74d79ffb-210401142025.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/97c21e27-1a26-487a-86eb-9d636bd2-74d79ffb-210401142025.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/97c21e27-1a26-487a-86eb-9d636bd2-74d79ffb-210401142025.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": false,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 14474112,
                        "is_group_discount_item": true,
                        "name": "Đậu Khuôn Độn Thịt Thêm"
                    },
                    {
                        "is_deleted": false,
                        "description": "",
                        "price": {
                            "text": "39,000đ",
                            "unit": "đ",
                            "value": 39000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "5",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/d20f2752-97e9-40f0-9423-e2266366-6fd2584a-201029155548.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/d20f2752-97e9-40f0-9423-e2266366-6fd2584a-201029155548.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/d20f2752-97e9-40f0-9423-e2266366-6fd2584a-201029155548.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/d20f2752-97e9-40f0-9423-e2266366-6fd2584a-201029155548.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/d20f2752-97e9-40f0-9423-e2266366-6fd2584a-201029155548.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/d20f2752-97e9-40f0-9423-e2266366-6fd2584a-201029155548.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 12234600,
                        "is_group_discount_item": true,
                        "name": " 100g Ba Chỉ Giòn Da"
                    },
                    {
                        "is_deleted": false,
                        "description": "",
                        "price": {
                            "text": "20,000đ",
                            "unit": "đ",
                            "value": 20000
                        },
                        "is_active": true,
                        "display_order": 0,
                        "total_like": "2",
                        "properties": [],
                        "photos": [
                            {
                                "width": 120,
                                "value": "https://images.foody.vn/res/g99/986724/s120x120/2abfa3d4-79a9-4b99-8122-f4919808-8e3eeafc-210401215441.jpeg",
                                "height": 120
                            },
                            {
                                "width": 180,
                                "value": "https://images.foody.vn/res/g99/986724/s180x180/2abfa3d4-79a9-4b99-8122-f4919808-8e3eeafc-210401215441.jpeg",
                                "height": 180
                            },
                            {
                                "width": 400,
                                "value": "https://images.foody.vn/res/g99/986724/s400x400/2abfa3d4-79a9-4b99-8122-f4919808-8e3eeafc-210401215441.jpeg",
                                "height": 400
                            },
                            {
                                "width": 560,
                                "value": "https://images.foody.vn/res/g99/986724/s570x570/2abfa3d4-79a9-4b99-8122-f4919808-8e3eeafc-210401215441.jpeg",
                                "height": 560
                            },
                            {
                                "width": 750,
                                "value": "https://images.foody.vn/res/g99/986724/s750x750/2abfa3d4-79a9-4b99-8122-f4919808-8e3eeafc-210401215441.jpeg",
                                "height": 750
                            },
                            {
                                "width": 1242,
                                "value": "https://images.foody.vn/res/g99/986724/s1242x1242/2abfa3d4-79a9-4b99-8122-f4919808-8e3eeafc-210401215441.jpeg",
                                "height": 1242
                            }
                        ],
                        "options": [],
                        "is_available": true,
                        "time": {
                            "available": [],
                            "week_days": [
                                {
                                    "start": "09:00",
                                    "week_day": 1,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 2,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 3,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 4,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 5,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 6,
                                    "end": "23:59"
                                },
                                {
                                    "start": "09:00",
                                    "week_day": 7,
                                    "end": "23:59"
                                }
                            ],
                            "not_available": []
                        },
                        "quantity": 0,
                        "id": 14478739,
                        "is_group_discount_item": true,
                        "name": "Sườn Nướng Sa Tế Thêm"
                    }
                ]
            }
        ]
    },
    "result": "success"
}