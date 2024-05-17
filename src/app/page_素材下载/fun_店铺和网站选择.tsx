import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import CloudDownloadTwoToneIcon from '@mui/icons-material/CloudDownloadTwoTone';
import SnippetFolderTwoToneIcon from '@mui/icons-material/SnippetFolderTwoTone';
import { Button, FormControl, InputLabel, Stack } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { DefaultService } from '~/client';
import { GridHeader } from '~/component/box';
import { useAppStore } from '../useAppStore';
import { down_material_list } from './com_获取素材';
import { useMaterialDownStore, useMaterialList } from './store_素材下载';

export function Fun_选择面板() {
	const store = useAppStore();
	const down_store = useMaterialDownStore();

	function fun_获取素材() {
		down_material_list(down_store).then((res) => {
			useMaterialList.setState((state) => {
				state.material_list = res.material_list;
				state.count = res.count;
			});
		});
	}

	return (
		<>
			<GridHeader title='选择店铺和下载网站' />

			<Grid2 xs={4}>
				<FormControl>
					<InputLabel>{'店铺选择'}</InputLabel>
					<Select
						label={'店铺选择'}
						onChange={(event) => {
							useMaterialDownStore.setState((state) => {
								state.shop_name = event.target.value as string;
							});
						}}
						value={down_store.shop_name}
						name='shop_name'
					>
						{store.shop_name_list.map((item) => (
							<MenuItem key={item} value={item}>
								{item}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid2>

			<Grid2 xs={4}>
				<FormControl>
					<InputLabel>{'网站选择'}</InputLabel>
					<Select
						name='material_site'
						value={down_store.material_site}
						label={'网站选择'}
						onChange={(event) => {
							useMaterialDownStore.setState((state) => {
								state.material_site = event.target
									.value as string;
							});
						}}
					>
						{store.material_site_list.map((item) => (
							<MenuItem key={item} value={item}>
								{item}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid2>

			<Grid2 xs={4}>
				<FormControl>
					<InputLabel>{'下载地址'}</InputLabel>
					<Select
						label='下载地址'
						defaultValue={down_store.down_path}
						onChange={(event) => {
							useMaterialDownStore.setState((state) => {
								state.down_path = event.target.value as string;
							});
						}}
						name='down_path'
					>
						{['D', 'E', 'F', 'G', 'H'].map((item) => (
							<MenuItem
								key={item}
								value={item + ':\\DOWN'}
								defaultChecked={item === 'F' && true}
							>
								{item + ':\\DOWN'}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid2>

			<Grid2 xs={12}>
				<Stack direction={'row'} spacing={2}>
					<Button
						variant='contained'
						onClick={fun_获取素材}
						startIcon={<CloudDownloadTwoToneIcon />}
					>
						加载素材 {useMaterialList().count}
					</Button>

					<Button
						variant='contained'
						onClick={() => {
							DefaultService.funDownPathMergeV1MaterialDownDownPathMergePost(
								down_store,
							);
						}}
						startIcon={<SnippetFolderTwoToneIcon />}
					>
						文件夹合并
					</Button>

					<Button
						onClick={() => {
							if (confirm('确定要删除吗') === true) {
								DefaultService.clearUnDownMaterialV1MaterialDownClearUnDownMaterialPost(
									down_store,
								).then(() => {
									fun_获取素材();
								});
							}
						}}
						startIcon={<ClearTwoToneIcon />}
						color='error'
						variant='contained'
					>
						清空未下载
					</Button>
				</Stack>
			</Grid2>
		</>
	);
}
