import DataGrid, {
	Column,
	FilterRow,
	Lookup,
	Pager,
	Paging,
} from "devextreme-react/data-grid";

import { ActionCellTemplate } from "@components/shared";
import "./list.scss";

export default function OrderList() {
	const onEditClicked = (e, data) => {
		console.log(data);
	};

	const onDeleteClicked = (e, data) => {
		console.log(data);
	};

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
			>
				<Paging defaultPageSize={10} />
				<Pager showPageSizeSelector={true} showInfo={true} />
				<FilterRow visible={true} />

				<Column
					dataField={"Task_ID"}
					width={100}
					caption={"Mã nhà hàng"}
					alignment="center"
				/>
				<Column
					dataField={"Task_Subject"}
					width={300}
					caption={"Tên nhà hàng"}
				/>
				<Column dataField={"Task_Status"} caption={"Trạng thái"} />
				<Column
					dataField={"Task_Status"}
					caption={"Người tạo đơn"}
					alignment={'left'}
				/>
				<Column
					dataField={"Task_Start_Date"}
					caption={"Ngày tạo đơn"}
					dataType={"date"}
				/>
				<Column dataField={"Task_Priority"} caption={"Số người đã đặt"} width={100}>
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
		</>
	);
}

const dataSource = {
	store: {
		type: "odata",
		key: "Task_ID",
		url: "https://js.devexpress.com/Demos/DevAV/odata/Tasks",
	},
	expand: "ResponsibleEmployee",
	select: [
		"Task_ID",
		"Task_Subject",
		"Task_Start_Date",
		"Task_Due_Date",
		"Task_Status",
		"Task_Priority",
		"Task_Completion",
		"ResponsibleEmployee/Employee_Full_Name",
	],
};

const priorities = [
	{ name: "High", value: 4 },
	{ name: "Urgent", value: 3 },
	{ name: "Normal", value: 2 },
	{ name: "Low", value: 1 },
];
