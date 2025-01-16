/* eslint-disable no-mixed-spaces-and-tabs */
import LastPageTwoToneIcon from "@mui/icons-material/LastPageTwoTone";
import PageviewTwoToneIcon from "@mui/icons-material/PageviewTwoTone";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Stack from "@mui/material/Stack";

import Grid2 from "@mui/material/Unstable_Grid2";
import { DefaultService } from "~/client";
import { down_material_list } from "./com_获取素材";
import { useMaterialDownStore, useMaterialList } from "./store_素材下载";

interface materialModel {
	url: string;
	img: string;
	_id: string;
	create_date: string;
}

export function Fun_素材列表() {
	const store = useMaterialList();
	const down_store = useMaterialDownStore();
	return (
		<>
			<Grid2 xs={12}>
				<ImageList sx={{ width: "100%" }} cols={6} gap={24} variant="standard">
					{store.material_list.map((item: materialModel, index) => {
						return (
							<ImageListItem key={item._id}>
								{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								{/* biome-ignore lint/a11y/useAltText: <explanation> */}
								<img
									src={
										down_store.material_site === "包图"
												? `http://127.0.0.1:8000/v1/img/get_url?img_url=${item.img}`
												: down_store.material_site === "享设计"
													? `${item.img}?x-oss-process=style/prev_w_750_h_auto`
													: `${item.img}`
									}
									style={{
										objectFit: "contain",
										background: "#efefef",
										cursor: "pointer",
										borderRadius: "6px",
									}}
									onClick={() => {
										window.open(
											`http://127.0.0.1:8000/v1/MaterialDown/get_material_down_link?shop_name=${down_store.shop_name}&material_site=${down_store.material_site}&material_id=${item._id}&down_path=${down_store.down_path}`,
										);
										useMaterialList.setState((state) => {
											state.material_list.splice(index, 1);
										});
									}}
								/>
								<ImageListItemBar
									title={
										<Stack direction={"row"} spacing={1} mt={1}>
											<Button
												startIcon={<PageviewTwoToneIcon />}
												onClick={() => {
													window.open(item.url);
												}}
												variant="contained"
												color="inherit"
												size="small"
											>
												查看
											</Button>
											<Button
												startIcon={<LastPageTwoToneIcon />}
												variant="contained"
												color="inherit"
												size="small"
												onClick={() => {
													DefaultService.cutMaterialListV1MaterialDownCutMaterialListPost(
														{
															shop_name: down_store.shop_name,
															material_site: down_store.material_site,
															material_id: item._id,
														},
													).then(() => {
														down_material_list(down_store).then((res) => {
															useMaterialList.setState((state) => {
																state.material_list = res.material_list;
																state.count = res.count;
															});
														});
													});
												}}
											>
												截止
											</Button>
										</Stack>
									}
									subtitle={
										<Stack
											mt={2}
											spacing={1}
											sx={{ textTransform: "uppercase" }}
										>
											<div className="">{item.create_date}</div>
											<div className="">{item._id}</div>
											<div className="">ID:{index}</div>
										</Stack>
									}
									position="below"
								/>
							</ImageListItem>
						);
					})}
				</ImageList>
			</Grid2>
		</>
	);
}
