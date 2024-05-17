import CloudSyncTwoToneIcon from '@mui/icons-material/CloudSyncTwoTone';
import { Button, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { GridHeader } from '~/component/box';
import { useMaterialDownStore, useMaterialList } from './store_素材下载';
import { DefaultService } from '~/client';
import { down_material_list } from './com_获取素材';

export function Fun_素材采集面板() {
	const down_store = useMaterialDownStore();
	return (
		<>
			<GridHeader title='素材采集面板' />
			<Grid2 xs={6}>
				<TextField
					label={'采集网址'}
					onChange={(event) => {
						useMaterialDownStore.setState((state) => {
							state.scrapy_url = event.target.value as string;
						});
					}}
					value={down_store.scrapy_url}
					name='scrapy_url'
				/>
			</Grid2>

			<Grid2 xs={3}>
				<TextField
					label={'采集页面'}
					type='number'
					defaultValue={1}
					onChange={(event) => {
						useMaterialDownStore.setState((state) => {
							state.scrapy_num = parseInt(
								event.target.value,
							) as number;
						});
					}}
					value={down_store.scrapy_num}
					name='scrapy_num'
				/>
			</Grid2>

			<Grid2 xs={3}>
				<TextField
					label={'COOKIE'}
					onChange={(event) => {
						useMaterialDownStore.setState((state) => {
							state.cookie = event.target.value as string;
						});
					}}
					name='cookie'
				/>
			</Grid2>

			<Grid2 xs={12}>
				<Button
					variant='contained'
					onClick={() => {
						DefaultService.scrapyMaterialV1MaterialDownScrapyMaterialPost(
							down_store,
						).then(() => {
							down_material_list(down_store).then((res) => {
								useMaterialList.setState((state) => {
									state.material_list = res.material_list;
								});
							});
						});
					}}
					startIcon={<CloudSyncTwoToneIcon />}
				>
					开始采集
				</Button>
			</Grid2>
		</>
	);
}
