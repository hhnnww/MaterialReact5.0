// import { Box, Typography } from '@mui/material';
// import { useMaterialEditStore } from './useMaterialEditStore';

import { MaterialPathActionModel } from './model_素材操作';
import { RootPathModel } from './model_素材路径';
import { MaterialInfoModel } from './model_素材信息';
import { FirstImageModel } from './model_制作首图';
import { ProductImageModel } from './model_制作详情';
import { ImageListModel } from './model_图片列表';
import { useMaterialEditStore } from './useMaterialEditStore';
import PublishToTaoBao from './model_发布到淘宝';

export function Component() {
	const store = useMaterialEditStore();
	return (
		<>
			{/* <Box>
				<Typography variant="body1" component={'pre'}>
					{JSON.stringify(
						useMaterialEditStore((state) => state),
						null,
						'    ',
					)}
				</Typography>
			</Box> */}
			<RootPathModel />

			{store.root_path !== '' && store.shop_name !== '' && (
				<>
					<MaterialPathActionModel />
					<PublishToTaoBao />
					<MaterialInfoModel />
					<FirstImageModel />
					<ProductImageModel />
					<ImageListModel />
				</>
			)}
		</>
	);
}
