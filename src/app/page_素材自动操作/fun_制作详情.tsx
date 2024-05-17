import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useImmer } from 'use-immer';
import { DefaultService } from '~/client';
import { GridHeader } from '~/component/box';
import { useAppStore } from '../useAppStore';

export function Fun_制作详情() {
	const appStore = useAppStore();
	const [store, setStore] = useImmer({
		parent_path: '',
		start_stem: 0,
		shop_name: '',
	});
	return (
		<Grid2 container spacing={2}>
			<GridHeader title={'制作详情页'} />

			<Grid2 xs={3}>
				<FormControl>
					<InputLabel>{'制作详情'}</InputLabel>
					<Select
						label='制作详情'
						onChange={(event) => {
							setStore((draft) => {
								draft.shop_name = event.target.value as string;
							});
						}}
					>
						{appStore.shop_name_list.map((item) => (
							<MenuItem key={item} value={item}>
								{item}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid2>

			<Grid2 xs={3}>
				<TextField
					type='number'
					label='起始ID'
					onChange={(event) => {
						setStore((draft) => {
							draft.start_stem = parseInt(event.target.value);
						});
					}}
				/>
			</Grid2>

			<Grid2 xs={6}>
				<TextField
					label='素材文件夹'
					onChange={(event) => {
						setStore((draft) => {
							draft.parent_path = event.target.value;
						});
					}}
				/>
			</Grid2>

			<Grid2>
				<Button
					variant='contained'
					onClick={() => {
						DefaultService.makeAllXqV1AutoActionMakeAllXqPost({
							material_parent_path: store.parent_path,
							start_item: store.start_stem,
							shop_name: store.shop_name,
						});
					}}
				>
					提交
				</Button>
			</Grid2>
		</Grid2>
	);
}
