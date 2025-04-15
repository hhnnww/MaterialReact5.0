import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";
import { Box, Button, ButtonGroup, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DefaultService } from "~/client";
import { GridHeader } from "~/component/box";
import {
	clearSelect,
	getImageRatio,
	selectAllImage,
	selectSingleImage,
	sortAllImageByNmae,
	sortAllImageBySize,
} from "~functions/imageListAction";
// import Path from '~functions/pathlib';
import { type PathObj, useMaterialEditStore } from "./useMaterialEditStore";

export function ImageListModel() {
	const store = useMaterialEditStore();

	return (
		<>
			<Grid2
				container
				spacing={2}
				alignItems={"end"}
				sx={{ marginBottom: "200px" }}
			>
				<GridHeader
					title={`效果图列表 已选择: ${store.selected_image.length.toString()}`}
				/>
				<ImageAction />
				{store.material_info.effect_image_list.map((item) => (
					<Grid2 key={item.path} xs={2}>
						<SingleImage img_obj={item} />
					</Grid2>
				))}

				<GridHeader
					title={`预览图列表 已选择: ${store.selected_image.length.toString()}`}
				/>
				{store.material_info.preview_image_list.map((item) => (
					<Grid2 key={item.path} xs={2}>
						<SingleImage img_obj={item} />
					</Grid2>
				))}
			</Grid2>
		</>
	);
}

function SingleImage(props: { img_obj: PathObj }) {
	const store = useMaterialEditStore();

	return (
		<>
			<div>
				<Box
					sx={(theme) => ({
						img: {
							width: "100%",
							padding: "15px",
							cursor: "pointer",
						},
						backgroundColor: `${
							props.img_obj.isSelected
								? theme.vars.palette.primary.main
								: theme.vars.palette.background.default
						}`,
						pb: 2,
					})}
				>
					<LazyLoadImage
						onLoad={() => getImageRatio(props.img_obj)}
						onClick={() => selectSingleImage(props.img_obj)}
						src={store.img_server_url + props.img_obj.path}
						placeholderSrc={""}
						threshold={100}
					/>

					<Stack
						px={2.5}
						direction={"column"}
						justifyContent={"space-between"}
						alignItems={"left"}
						sx={{ fontSize: "13px" }}
						spacing={1}
					>
						<Box>{props.img_obj.path}</Box>
						<Box>
							{(
								Math.round((props.img_obj.ratio as number) * 100) / 100
							).toString()}
						</Box>
					</Stack>

					<Stack spacing={1} px={2.5} pt={2}>
						<Box>
							<Button
								onClick={() => {
									if (confirm("确定删除素材图和预览图吗？") === true) {
										DefaultService.funDeleImageV1Post({
											root_path: store.root_path,
											image_path: props.img_obj.path,
										}).then((res) => {
											if (res) {
												useMaterialEditStore.setState((state) => {
													state.material_info.effect_image_list =
														state.material_info.effect_image_list.filter(
															(item) => item.path !== props.img_obj.path,
														);
													state.material_info.preview_image_list =
														state.material_info.preview_image_list.filter(
															(item) => item.path !== props.img_obj.path,
														);
												});
											}
										});
									}
								}}
								color="error"
								variant="contained"
							>
								删除素材图和预览图
							</Button>
						</Box>
					</Stack>
				</Box>
			</div>
		</>
	);
}

function ImageAction() {
	return (
		<>
			<Grid2 xs={12}>
				<Stack direction={"row"} alignItems={"center"} spacing={2}>
					<ButtonGroup variant="contained">
						<Button
							startIcon={<RadioButtonCheckedRoundedIcon />}
							onClick={selectAllImage}
						>
							全选
						</Button>
						<Button
							startIcon={<HighlightOffOutlinedIcon />}
							onClick={clearSelect}
						>
							取消全选
						</Button>
					</ButtonGroup>

					<ButtonGroup variant="contained">
						<Button
							onClick={() => sortAllImageByNmae(true)}
							startIcon={<ExpandMoreRoundedIcon />}
						>
							文件名正序
						</Button>
						<Button
							onClick={() => sortAllImageByNmae(false)}
							startIcon={<ExpandLessRoundedIcon />}
						>
							文件名倒序
						</Button>
					</ButtonGroup>

					<ButtonGroup variant="contained">
						<Button
							onClick={() => sortAllImageBySize(false)}
							startIcon={<ExpandMoreRoundedIcon />}
						>
							图片正序
						</Button>
						<Button
							onClick={() => sortAllImageBySize(true)}
							startIcon={<ExpandLessRoundedIcon />}
						>
							图片倒序
						</Button>
					</ButtonGroup>
				</Stack>
			</Grid2>
		</>
	);
}
