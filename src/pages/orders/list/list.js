import DataGrid, {
	Column, FilterRow,
	Lookup, Pager,
	Paging
} from 'devextreme-react/data-grid';

import { ActionCellTemplate } from '@components/shared';
import './list.scss';

export default function OrderList() {

	const onEditClicked = (e) => {
		console.log(e);
	}

	const onDeleteClicked = (e) => {
		console.log(e);
	}

	return (
		<>
			<DataGrid
				className={'dx-card wide-card'}
				dataSource={dataSource}
				showBorders={false}
				focusedRowEnabled={true}
				defaultFocusedRowIndex={0}
				columnAutoWidth={true}
				columnHidingEnabled={true}
			>
				<Paging defaultPageSize={10} />
				<Pager showPageSizeSelector={true} showInfo={true} />
				<FilterRow visible={true} />

				{/* <Column dataField={'Task_ID'} width={90} hidingPriority={2} caption={'Mã nhà hàng'} alignment='center'/> */}
				<Column
					dataField={'Task_Subject'}
					width={190}
					caption={'Tên nhà hàng'}
					hidingPriority={8}
				/>
				<Column
					dataField={'Task_Status'}
					caption={'Trạng thái'}
					hidingPriority={6}
				/>
				<Column
					dataField={'Task_Priority'}
					caption={'Số người đặt'}
					hidingPriority={5}
				>
					<Lookup
						dataSource={priorities}
						valueExpr={'value'}
						displayExpr={'name'}
					/>
				</Column>
				<Column
					dataField={'Task_Start_Date'}
					caption={'Ngày tạo đơn'}
					dataType={'date'}
					hidingPriority={3}
				/>
				<Column
					dataField={'Task_Due_Date'}
					caption={'Due Date'}
					dataType={'date'}
					hidingPriority={4}
				/>
				<Column
					dataField={'Task_Priority'}
					caption={'Priority'}
					name={'Priority'}
					hidingPriority={1}
				/>
				<Column
					dataField={'Task_Completion'}
					caption={'Completion'}
					hidingPriority={0}
				/>

				<Column
					width={60}
					fixed={true}
					fixedPosition="right"
					cellRender={(e) => <ActionCellTemplate event={e} onEditClicked={onEditClicked} onDeleteClicked={onDeleteClicked} />}
				/>
			</DataGrid>
		</>
	)
};

const dataSource = {
	store: {
		type: 'odata',
		key: 'Task_ID',
		url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
	},
	expand: 'ResponsibleEmployee',
	select: [
		'Task_ID',
		'Task_Subject',
		'Task_Start_Date',
		'Task_Due_Date',
		'Task_Status',
		'Task_Priority',
		'Task_Completion',
		'ResponsibleEmployee/Employee_Full_Name'
	]
};

const priorities = [
	{ name: 'High', value: 4 },
	{ name: 'Urgent', value: 3 },
	{ name: 'Normal', value: 2 },
	{ name: 'Low', value: 1 }
];