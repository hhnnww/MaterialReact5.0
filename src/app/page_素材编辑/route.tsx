// import { Box, Typography } from '@mui/material';
// import { useMaterialEditStore } from './useMaterialEditStore';

import { Divider, Stack } from "@mui/material";
import { ProductImageModel } from "./model_制作详情";
import { FirstImageModel } from "./model_制作首图";
import PublishToTaoBao from "./model_发布到淘宝";
import { ImageListModel } from "./model_图片列表";
import { MaterialInfoModel } from "./model_素材信息";
import { MaterialPathActionModel } from "./model_素材操作";
import { RootPathModel } from "./model_素材路径";
import { useMaterialEditStore } from "./useMaterialEditStore";

export function Component() {
	const store = useMaterialEditStore();
	const spacing = 3;
	return (
		<>
			<Stack direction={"column"} spacing={spacing} divider={<Divider />}>
				<RootPathModel />
				{store.root_path !== "" && store.shop_name !== "" && (
					<Stack direction={"column"} spacing={spacing} divider={<Divider />}>
						<MaterialPathActionModel />
						<PublishToTaoBao />
						<MaterialInfoModel />
						<FirstImageModel />
						<ProductImageModel />
						<ImageListModel />
					</Stack>
				)}
			</Stack>
		</>
	);
}
