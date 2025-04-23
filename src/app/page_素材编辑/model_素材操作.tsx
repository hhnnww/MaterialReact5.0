import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import EditRoadOutlinedIcon from "@mui/icons-material/EditRoadOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import ImageNotSupportedOutlinedIcon from "@mui/icons-material/ImageNotSupportedOutlined";
import MoveUpOutlinedIcon from "@mui/icons-material/MoveUpOutlined";
import PhotoSizeSelectLargeOutlinedIcon from "@mui/icons-material/PhotoSizeSelectLargeOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { Button, ButtonGroup, type ButtonGroupOwnProps } from "@mui/material";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { type ReactNode, useState } from "react";
import { DefaultService } from "~/client";
import { GridHeader } from "~/component/box";
import { get_material_info } from "~functions/getMaterialInfo";
import { useMaterialEditStore } from "./useMaterialEditStore";

type buttonItemList = {
	color: ButtonGroupOwnProps["color"];
	list: {
		name: string;
		icon: ReactNode;
		confirm?: boolean;
		info?: string;
	}[];
}[];

export function MaterialPathActionModel() {
	const buttonList: buttonItemList = [
		{
			color: "primary",
			list: [
				{ name: "打开桌面上传文件夹", icon: <FolderOutlinedIcon /> },
				{ name: "打开素材文件夹", icon: <FolderOutlinedIcon /> },
				{ name: "打开效果图文件夹", icon: <FolderOutlinedIcon /> },
				{ name: "打开预览图文件夹", icon: <FolderOutlinedIcon /> },
			],
		},
		{
			color: "primary",
			list: [
				{ name: "解压ZIP", icon: <SaveOutlinedIcon /> },
				{ name: "删除广告文件", icon: <AdsClickOutlinedIcon /> },

				{ name: "移动到根目录", icon: <MoveUpOutlinedIcon /> },
				{ name: "文件重命名", icon: <EditRoadOutlinedIcon /> },
				{
					name: "按数字分类",
					icon: <PhotoSizeSelectLargeOutlinedIcon />,
				},
			],
		},
		{
			color: "primary",
			list: [
				{
					name: "AI文件移动到子目录",
					icon: <PhotoSizeSelectLargeOutlinedIcon />,
					info: "把根目录的AI文件移动到子目录",
				},
				{
					name: "删除享设计文件夹结构的预览图",
					icon: <PhotoSizeSelectLargeOutlinedIcon />,
					info: "删除享设计文件夹结构的素材文件夹中的预览图",
				},
				{
					name: "删除AI对应的PNG文件",
					icon: <EditRoadOutlinedIcon />,
				},
			],
		},
		{
			color: "primary",
			list: [
				{
					name: "子目录内文件移动到根",
					icon: <MoveUpOutlinedIcon />,
				},
				{
					name: "子目录重命名",
					icon: <EditRoadOutlinedIcon />,
				},
				{ name: "享设计文件夹重构", icon: <EditRoadOutlinedIcon /> },
				{
					name: "AI文件重命名",
					icon: <EditRoadOutlinedIcon />,
				},
				{
					name: "享设计制作预览图",
					icon: <PhotoSizeSelectLargeOutlinedIcon />,
				},
				{
					name: "打开所有子文件夹",
					icon: <PhotoSizeSelectLargeOutlinedIcon />,
				},
				{
					name: "打开没有预览图的AI文件",
					icon: <PhotoSizeSelectLargeOutlinedIcon />,
				},
				{
					name: "打开没有预览图的PSD文件",
					icon: <PhotoSizeSelectLargeOutlinedIcon />,
				},
			],
		},
		{
			color: "primary",
			list: [
				{ name: "子目录PSD重命名", icon: <EditRoadOutlinedIcon /> },
				{ name: "子目录图片重命名", icon: <EditRoadOutlinedIcon /> },
				{ name: "子目录拼接图片", icon: <EditRoadOutlinedIcon /> },
				{ name: "目录内放置广告", icon: <EditRoadOutlinedIcon /> },
				{
					name: "AI批量导出图片重命名",
					icon: <EditRoadOutlinedIcon />,
				},
				{
					name: "生成SKP导出命令",
					icon: <EditRoadOutlinedIcon />,
				},
				{
					name: "打开没有预览图的SKP",
					icon: <EditRoadOutlinedIcon />,
				},
				{
					name: "AI导出效果图改名",
					icon: <EditRoadOutlinedIcon />,
				},
			],
		},
		{
			color: "primary",
			list: [
				{
					name: "复制图片到预览图",
					icon: <PhotoSizeSelectLargeOutlinedIcon />,
				},
				{
					name: "素材图水印",
					icon: <PhotoSizeSelectLargeOutlinedIcon />,
				},
				{
					name: "移动到效果图",
					icon: <PhotoSizeSelectLargeOutlinedIcon />,
				},
				{
					name: "图片添加白色背景",
					icon: <EditRoadOutlinedIcon />,
				},
				{ name: "删除图片边框", icon: <EditRoadOutlinedIcon /> },
				{ name: "效果图蜘蛛水印", icon: <EditRoadOutlinedIcon /> },
				{ name: "效果图扩大", icon: <EditRoadOutlinedIcon /> },
				{ name: "效果图webp转png", icon: <EditRoadOutlinedIcon /> },
				{ name: "eps转ai", icon: <EditRoadOutlinedIcon /> },
				{ name: "CMYK转RGB", icon: <EditRoadOutlinedIcon /> },
				{ name: "透明转白底", icon: <EditRoadOutlinedIcon /> },
			],
		},
		{
			color: "primary",
			list: [
				{
					name: "PSD-删除广告-导出图片-添加广告",
					icon: <AddPhotoAlternateOutlinedIcon />,
				},
				{
					name: "PSD-图层名删除广告-导出图片-添加广告",
					icon: <AddPhotoAlternateOutlinedIcon />,
				},
				{
					name: "PSD-图层改名-导出图片-添加广告",
					icon: <AddPhotoAlternateOutlinedIcon />,
				},
				{
					name: "PSD-导出图片-添加广告",
					icon: <AddPhotoAlternateOutlinedIcon />,
				},
				{
					name: "PSD-删除错误PSD-导出图片-添加广告",
					icon: <AddPhotoAlternateOutlinedIcon />,
				},
				{
					name: "PSD-导出图片",
					icon: <AddPhotoAlternateOutlinedIcon />,
				},
			],
		},
		{
			color: "primary",
			list: [
				{
					name: "AI-导出图片",
					icon: <AddPhotoAlternateOutlinedIcon />,
				},
				{
					name: "PPT-删除备注",
					icon: <AddPhotoAlternateOutlinedIcon />,
				},
				{
					name: "PPT-导出图片",
					icon: <AddPhotoAlternateOutlinedIcon />,
				},
				{
					name: "打开没有预览图的PPT",
					icon: <AddPhotoAlternateOutlinedIcon />,
				},
			],
		},
		{
			color: "error",
			list: [
				{
					name: "删除素材文件夹内所有图片",
					icon: <ImageNotSupportedOutlinedIcon />,
					confirm: true,
				},
				{
					name: "删除效果图",
					icon: <ImageNotSupportedOutlinedIcon />,
					confirm: true,
				},
				{
					name: "删除预览图",
					icon: <ImageNotSupportedOutlinedIcon />,
					confirm: true,
				},
				{
					name: "删除EPS文件",
					icon: <ImageNotSupportedOutlinedIcon />,
					confirm: true,
				},
				{
					name: "删除ZIP文件",
					icon: <ImageNotSupportedOutlinedIcon />,
					confirm: true,
				},
				{
					name: "删除预览小图",
					icon: <ImageNotSupportedOutlinedIcon />,
					confirm: true,
				},
			],
		},
	];
	const store = useMaterialEditStore();
	const [open, setOpen] = useState(false);
	const [mess, setMess] = useState("");
	return (
		<>
			<Grid2 container spacing={2}>
				<GridHeader title="文件夹操作" />

				{buttonList.map((line_item) => (
					<Grid2 key={line_item.color} xs={12}>
						<ButtonGroup color={line_item.color} variant="contained">
							{line_item.list.map((item) => (
								<Button
									key={item.name}
									startIcon={item.icon}
									title={item.info}
									onClick={async () => {
										setOpen(false);
										if (item.confirm) {
											if (confirm("确定要操作吗?") === true) {
												await DefaultService.materialPathActionV1MaterialPathActionPost(
													{
														action: item.name,
														root_path: store.root_path,
														shop_name: store.shop_name,

														file_start_stem:
															store.material_info.file_start_stem,
														path_start_stem:
															store.material_info.path_start_stem,
													},
												);

												await get_material_info();
											}
										} else {
											await DefaultService.materialPathActionV1MaterialPathActionPost(
												{
													action: item.name,
													root_path: store.root_path,
													shop_name: store.shop_name,

													file_start_stem: store.material_info.file_start_stem,
													path_start_stem: store.material_info.path_start_stem,
												},
											);

											await get_material_info();
										}

										setMess(`${item.name}成功`);
										setOpen(true);
									}}
								>
									{item.name}
								</Button>
							))}
						</ButtonGroup>
						<Snackbar sx={{ width: "100%" }} open={open} autoHideDuration={0}>
							<Alert sx={{ width: "100%" }} severity="success">
								{mess}
							</Alert>
						</Snackbar>
					</Grid2>
				))}
			</Grid2>
		</>
	);
}
