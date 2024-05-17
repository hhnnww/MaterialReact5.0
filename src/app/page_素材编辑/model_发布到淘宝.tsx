import BackupTwoToneIcon from '@mui/icons-material/BackupTwoTone';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { GridHeader } from '~/component/box';
import { useMaterialEditStore } from './useMaterialEditStore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function PublishToTaoBao() {
	const store = useMaterialEditStore();
	return (
		<>
			<Grid2 container spacing={2}>
				<GridHeader title={'发布到淘宝'} />

				<Grid2 xs={12}>
					<TextField
						label='标题'
						value={store.taobao_title}
						onChange={(event) =>
							useMaterialEditStore.setState((state) => {
								state.taobao_title = event.target.value;
							})
						}
					/>
				</Grid2>

				<Grid2 xs={12}>
					<Button
						variant='contained'
						startIcon={<BackupTwoToneIcon />}
						onClick={() => {
							navigator.clipboard
								.writeText(store.taobao_title)
								.then(() => {
									window.open(
										'https://item.upload.taobao.com/sell/publish.htm?catId=201160807&smartRouter=true&keyProps=%7B%7D&newRouter=1&paramCacheId=merge_router_cache_389353239_1694673279246_988&x-gpf-submit-trace-id=213e259e16946732792022149e0968',
									);
								});
						}}
					>
						发布
					</Button>
				</Grid2>
			</Grid2>
		</>
	);
}
