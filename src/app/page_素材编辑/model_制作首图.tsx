import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
	DefaultService,
	type ImageModel,
	type MakeFirstImageModel,
} from "~/client";
import { GridHeader } from "~/component/box";
import { useMaterialEditStore } from "./useMaterialEditStore";

export function FirstImageModel() {
	const store = useMaterialEditStore();

	return (
		<>
			<Grid2 container spacing={2}>
				<GridHeader title={"制作首图"} />

				<Grid2 xs={2}>
					<TextField
						value={store.first_image_set.first_image_title}
						onChange={(event) => {
							useMaterialEditStore.setState((state) => {
								state.first_image_set.first_image_title = event.target.value;
							});
						}}
						label="首图标题"
						autoComplete="off"
					/>
				</Grid2>

				<Grid2 xs={2}>
					<FormControl>
						<InputLabel>首图样式</InputLabel>
						<Select
							value={store.first_image_set.first_image_style}
							onChange={(event) =>
								useMaterialEditStore.setState((state) => {
									state.first_image_set.first_image_style = event.target.value;
								})
							}
							label="首图样式"
						>
							{[
								"T500",
								"黑鲸",
								// '黑鲸高',
								"黑鲸笔刷",
								"泡泡",
								"无样式",
							].map((item) => (
								<MenuItem key={item} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid2>

				<Grid2 xs={2}>
					<FormControl>
						<InputLabel>首图行数</InputLabel>
						<Select
							label="首图行数"
							value={store.first_image_set.first_image_line}
							onChange={(event) =>
								useMaterialEditStore.setState((state) => {
									state.first_image_set.first_image_line = event.target
										.value as number;
								})
							}
						>
							{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
								<MenuItem key={item} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid2>

				<Grid2 xs={2}>
					<FormControl>
						<InputLabel>布局样式</InputLabel>
						<Select
							label="布局样式"
							value={store.first_image_set.first_image_layout}
							onChange={(event) =>
								useMaterialEditStore.setState((state) => {
									state.first_image_set.first_image_layout = event.target.value;
								})
							}
						>
							{[
								"固定裁剪",
								"固定裁剪-圆角",
								"自适应裁剪",
								"列-自适应",
								"列-固定尺寸",
								"行-自适应",
								"行-固定尺寸",
								"1大N行-自适应",
								"1竖-2排小竖-自适应",
								"1大3小-自适应",
								"竖橫竖竖",
								"3列横竖错落",
								"3列1大横竖错落",
								"2大竖-4小竖",
								"超长图",
								"背景图",
								"小元素排列",
								"横版-1221",
								"竖版-1221",
								"横版-1212",
								"横版-122112",
								"中间大四周小",
								"1-2",
								"1-3",
								"1-4",
								"1-2-3",
								"1-2-3-3",
								"1-2-3-3-3",
								"1-2-3-3-3-3",
								"1大33正方形",
								"S1-2",
								"S1-3",
								"1大2行2列",
								"1大3行2列",
							].map((item) => (
								<MenuItem key={item} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid2>
				<Grid2 xs={2}>
					<FormControl>
						<InputLabel>首图缩放方式</InputLabel>
						<Select
							label="首图缩放方式"
							value={store.first_image_set.first_image_resize}
							onChange={(event) =>
								useMaterialEditStore.setState((state) => {
									state.first_image_set.first_image_resize = event.target.value;
								})
							}
						>
							{["裁剪", "缩放"].map((item) => (
								<MenuItem key={item} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid2>
				<Grid2 xs={2}>
					<FormControl>
						<InputLabel>首图裁剪方式</InputLabel>
						<Select
							label="首图裁剪方式"
							value={store.first_image_set.crop_position}
							onChange={(event) =>
								useMaterialEditStore.setState((state) => {
									state.first_image_set.crop_position = event.target.value;
								})
							}
						>
							<MenuItem value="start">顶部裁剪</MenuItem>
							<MenuItem value="center">居中裁剪</MenuItem>
							<MenuItem value="end">底部裁剪</MenuItem>
						</Select>
					</FormControl>
				</Grid2>

				<Grid2 xs={2}>
					<FormControl>
						<InputLabel>首图间距</InputLabel>
						<Select
							label="首图间距"
							value={store.first_image_set.spacing}
							onChange={(event) =>
								useMaterialEditStore.setState((state) => {
									state.first_image_set.spacing = event.target.value as number;
								})
							}
						>
							<MenuItem value={0}>无间距</MenuItem>
							<MenuItem value={3}>小间距-3</MenuItem>
							<MenuItem value={5}>包含间距-5</MenuItem>
							<MenuItem value={10}>中大间距-10</MenuItem>
							<MenuItem value={20}>大间距-20</MenuItem>
						</Select>
					</FormControl>
				</Grid2>

				<Grid2 xs={2}>
					<FormControl>
						<InputLabel>首图名称</InputLabel>
						<Select
							label="首图名称"
							value={store.first_image_set.first_image_num}
							onChange={(event) =>
								useMaterialEditStore.setState((state) => {
									state.first_image_set.first_image_num = event.target.value;
								})
							}
						>
							{["1", "2", "3", "4", "5", "6"].map((item) => (
								<MenuItem key={item} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid2>

				<Grid2 xs={2}>
					<TextField
						value={store.first_image_set.bg_color}
						onChange={(event) => {
							useMaterialEditStore.setState((state) => {
								state.first_image_set.bg_color = event.target.value;
							});
						}}
						label="背景颜色"
					/>
				</Grid2>

				<Grid2 xs={2}>
					<FormControl>
						<InputLabel>是否包含外边距</InputLabel>
						<Select
							label="是否包含外边距"
							value={store.first_image_set.out_space}
							onChange={(event) =>
								useMaterialEditStore.setState((state) => {
									state.first_image_set.out_space = event.target
										.value as number;
								})
							}
							type="number"
						>
							<MenuItem value={1}>包含外边距</MenuItem>
							<MenuItem value={0}>不包含外边距</MenuItem>
						</Select>
					</FormControl>
				</Grid2>

				<Grid2 xs={2}>
					<FormControl>
						<InputLabel>圆角</InputLabel>
						<Select
							label="圆角"
							value={store.first_image_set.radio}
							onChange={(event) =>
								useMaterialEditStore.setState((state) => {
									state.first_image_set.radio = event.target.value as number;
								})
							}
							type="number"
						>
							<MenuItem value={1}>包含</MenuItem>
							<MenuItem value={0}>不包含</MenuItem>
						</Select>
					</FormControl>
				</Grid2>

				<Grid2 xs={12}>
					<Button
						onClick={async () => {
							// useMaterialEditStore.setState((state) => {
							// 	state.selected_image.map((item, index) => {
							// 		if (item.ratio === undefined) {
							// 			const img = new Image();
							// 			img.src =
							// 				state.img_server_url + item.path;
							// 			state.selected_image[index].ratio =
							// 				img.width / img.height;
							// 		}
							// 	});
							// });
							await DefaultService.makeFirstImageV1MakeFirstImagePost({
								root_path: store.root_path,
								bg_color: store.first_image_set.bg_color,
								first_image_title: store.first_image_set.first_image_title,
								first_image_line: store.first_image_set.first_image_line,
								first_image_style: store.first_image_set.first_image_style,
								select_image_list: store.selected_image as ImageModel[],
								first_image_layout: store.first_image_set.first_image_layout,
								crop_position: store.first_image_set
									.crop_position as MakeFirstImageModel.crop_position,
								first_image_num: store.first_image_set.first_image_num,
								spacing: store.first_image_set.spacing,
								format_title: store.material_info.material_source_format_title,
								material_id: store.material_info.material_id,
								shop_name: store.shop_name,
								source_format: store.material_info.material_source_format,
								source_count:
									store.material_info.material_source_file_count.toString(),
								out_space: store.first_image_set.out_space,
								first_image_resize: store.first_image_set.first_image_resize,
								radio: store.first_image_set.radio,
							});
						}}
						variant="contained"
						startIcon={<AutoFixHighOutlinedIcon />}
					>
						制作首图
					</Button>
				</Grid2>
			</Grid2>
		</>
	);
}
