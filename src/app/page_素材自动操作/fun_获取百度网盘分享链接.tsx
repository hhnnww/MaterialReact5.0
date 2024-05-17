import { Button, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useImmer } from 'use-immer';
import { DefaultService } from '~/client';
import { GridHeader } from '~/component/box';

export function Fun_获取网盘链接() {
	const [store, setStore] = useImmer({
		start_stem: 0,
		end_stem: 0,
		parent_path: '',
	});
	return (
		<>
			<Grid2 container spacing={2} mb={6}>
				<GridHeader title='获取网盘链接' />

				<Grid2 xs={3}>
					<TextField
						label={'起始ID'}
						name='start_stem'
						onChange={(event) => {
							setStore((draft) => {
								draft.start_stem = parseInt(event.target.value);
							});
						}}
						type='number'
					/>
				</Grid2>

				<Grid2 xs={3}>
					<TextField
						label={'终止ID'}
						name='end_stem'
						onChange={(event) => {
							setStore((draft) => {
								draft.end_stem = parseInt(event.target.value);
							});
						}}
						type='number'
					/>
				</Grid2>

				<Grid2 xs={6}>
					<TextField
						label={'素材文件夹'}
						name='end_stem'
						onChange={(event) => {
							setStore((draft) => {
								draft.parent_path = event.target.value;
							});
						}}
					/>
				</Grid2>

				<Grid2 xs={12}>
					<Button
						variant='contained'
						onClick={() => {
							DefaultService.getBaiduLinkV1AutoActionGetBaiduLinkPost(
								{
									start_stem: store.start_stem,
									end_stem: store.end_stem,
									parent_path: store.parent_path,
								},
							);
						}}
					>
						提交
					</Button>
				</Grid2>
			</Grid2>
		</>
	);
}
