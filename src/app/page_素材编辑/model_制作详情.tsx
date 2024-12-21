import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { DefaultService, type MakeProductImageRequestModel } from "~/client";
import { GridHeader } from "~/component/box";
import { useMaterialEditStore } from "./useMaterialEditStore";

export function ProductImageModel() {
	const store = useMaterialEditStore();
	const selectList = [
		{
			label: "单行图片数量",
			key: "oneline_number",
			menus: [
				{ key: 1, value: 1 },
				{ key: 2, value: 2 },
				{ key: 3, value: 3 },
				{ key: 4, value: 4 },
				{ key: 5, value: 5 },
				{ key: 6, value: 6 },
			],
			type: "number",
		},
		{
			label: "单行宽高比",
			key: "oneline_ratio",
			menus: [
				{ key: 1, value: 1 },
				{ key: 1.5, value: 1.5 },
				{ key: 2, value: 2 },
				{ key: 2.5, value: 2.5 },
				{ key: 3, value: 3 },
				{ key: 3.5, value: 3.5 },
				{ key: 5, value: 5 },
				{ key: 7, value: 7 },
				{ key: 9, value: 9 },
			],
			type: "number",
		},
		{
			label: "制作预览图详情",
			key: "has_preview_image",
			menus: [
				{ key: "制作", value: 1 },
				{ key: "不制作", value: 0 },
			],
			type: "number",
		},
		{
			label: "制作效果图详情",
			key: "has_effect_image",
			menus: [
				{ key: "制作", value: 1 },
				{ key: "不制作", value: 0 },
			],
			type: "number",
		},

		{
			label: "预览图携带素材信息",
			key: "preview_has_material_info",
			menus: [
				{ key: "制作", value: 1 },
				{ key: "不制作", value: 0 },
			],
			type: "number",
		},

		{
			label: "超长图片裁剪方式",
			key: "crop_position",
			menus: [
				{ key: "顶部裁剪", value: "start" },
				{ key: "中间裁剪", value: "center" },
				{ key: "底部裁剪", value: "end" },
			],
			type: "text",
		},
		{
			label: "预览图图片排序",
			key: "preview_image_sort",
			menus: [
				{ key: "正序", value: 1 },
				{ key: "倒序", value: 0 },
			],
			type: "number",
		},
		{
			label: "详情是否添加水印",
			key: "has_water",
			menus: [
				{ key: "添加水印", value: 1 },
				{ key: "无水印", value: 0 },
			],
			type: "number",
		},
	];

	return (
		<>
			<Grid2 container spacing={2}>
				<GridHeader title="制作详情" />

				{selectList.map((item) => (
					<Grid2 xs={2} key={item.key}>
						<FormControl>
							<InputLabel>{item.label}</InputLabel>
							<Select
								label={item.label}
								value={
									store.product_image_set[
										item.key as keyof typeof store.product_image_set
									]
								}
								type="number"
								onChange={(event) =>
									useMaterialEditStore.setState((state) => {
										// biome-ignore lint/suspicious/noExplicitAny: <explanation>
										(state.product_image_set as any)[item.key] =
											event.target.value;
									})
								}
							>
								{item.menus.map((menu) => (
									<MenuItem key={menu.value} value={menu.value}>
										{menu.key}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid2>
				))}

				<Grid2 xs={2}>
					<TextField
						label="预览图使用图片数量"
						type={"number"}
						value={store.product_image_set.preview_used_number}
						onChange={(event) => {
							useMaterialEditStore.setState((state) => {
								state.product_image_set.preview_used_number = Number.parseInt(
									event.target.value,
								);
							});
						}}
						inputProps={{ min: 0, step: 20 }}
					/>
				</Grid2>

				<Grid2 xs={12}>
					<MakeProductImageButton />
				</Grid2>
			</Grid2>
		</>
	);
}
function MakeProductImageButton() {
	const store = useMaterialEditStore();
	return (
		<>
			<Button
				onClick={async () => {
					await DefaultService.makeMaterialProductImageV1MakeMaterialProductImagePost(
						{
							crop_position: store.product_image_set
								.crop_position as MakeProductImageRequestModel.crop_position,
							effect_image_path: store.material_info.effect_image_path,
							has_effect_image: store.product_image_set.has_effect_image,
							has_preview_image: store.product_image_set.has_preview_image,
							material_id: store.material_info.material_id,
							material_path: store.material_info.material_path,
							material_source_file_size:
								store.material_info.material_source_file_size,
							material_source_format_number:
								store.material_info.material_source_format_number,
							material_source_format_title:
								store.material_info.material_source_format_title,
							oneline_number: store.product_image_set.oneline_number,
							oneline_ratio: store.product_image_set.oneline_ratio,
							preview_has_material_info:
								store.product_image_set.preview_has_material_info,
							preview_image_count: store.material_info.preview_image_count,
							preview_image_path: store.material_info.preview_image_path,
							preview_image_sort: store.product_image_set.preview_image_sort,
							preview_used_number: store.product_image_set.preview_used_number,
							shop_name: store.shop_name,
							xq_width: store.product_image_set.xq_width,
							has_water: store.product_image_set.has_water,
						},
					);
				}}
				variant="contained"
				startIcon={<AutoFixHighRoundedIcon />}
			>
				制作详情
			</Button>
		</>
	);
}
