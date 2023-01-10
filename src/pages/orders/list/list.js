import DataGrid, {
	Column,
	FilterRow,
	Lookup,
	Pager,
	Paging,
} from "devextreme-react/data-grid";

import { ActionCellTemplate } from "@components/shared";
import "./list.scss";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "devextreme-react";
import { useRef } from "react";

export default function OrderList() {
	const navigate = useNavigate();
	const tooltipRef = useRef();

	const onEditClicked = (e, data) => {
		console.log(data);
		navigate('/orders/1');
	};

	const onDeleteClicked = (e, data) => {
		console.log(data);
	};

	const onCellHoverChanged = (e) => {
		if(e.eventType === "mouseover") {
			console.log(e);
			tooltipRef.current.instance.show(e.cellElement);
		}

		if(e.eventType === "mouseout") {
			tooltipRef.current.instance.hide();
		}
	}

	return (
		<>
			<DataGrid
				className={"dx-card wide-card"}
				dataSource={dataSource}
				showBorders={false}
				focusedRowEnabled={false}
				defaultFocusedRowIndex={0}
				columnAutoWidth={true}
				columnHidingEnabled={false}
				hoverStateEnabled={true}
				wordWrapEnabled={true}
				onCellHoverChanged={onCellHoverChanged}
			>
				<Paging defaultPageSize={10} />
				<Pager showPageSizeSelector={true} showInfo={true} />
				<FilterRow visible={true} />

				<Column
					dataField={"id"}
					width={100}
					caption={"Mã đơn"}
					alignment="center"
				/>
				<Column
					dataField={"restaurantName"}
					width={300}
					caption={"Tên nhà hàng"}
				/>
				<Column dataField={"status"} caption={"Trạng thái đơn"} />
				<Column
					dataField={"owner"}
					caption={"Người tạo đơn"}
					alignment={'left'}
				/>
				<Column
					dataField={"createDate"}
					caption={"Ngày tạo đơn"}
					dataType={"date"}
				/>
				<Column dataField={"personOrderNumber"} caption={"Số người đã đặt"} width={100}>
					<Lookup
						dataSource={priorities}
						valueExpr={"value"}
						displayExpr={"name"}
					/>
				</Column>

				<Column
					width={60}
					fixed={true}
					fixedPosition="right"
					cellRender={(e) => (
						<ActionCellTemplate
							event={e}
							onEditClicked={onEditClicked}
							onDeleteClicked={onDeleteClicked}
						/>
					)}
				/>
			</DataGrid>

			<Tooltip ref={tooltipRef} position={"top"}>
				<div>kaka</div>
			</Tooltip>
		</>
	);
}

const dataSource = [
	{
		id: 1,
		restaurantName: 'Co tam',
		status: 'Đang chờ',
		owner: 'Quynh Nguyen',
		createDate: '2023-01-10',
		personOrderNumber: 8
	}
];

const priorities = [
	{ name: "High", value: 4 },
	{ name: "Urgent", value: 3 },
	{ name: "Normal", value: 2 },
	{ name: "Low", value: 1 },
];
