import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import DevicesFoldOutlinedIcon from "@mui/icons-material/DevicesFoldOutlined";
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useImmer } from "use-immer";
import { DefaultService } from "~/client";
import { GridHeader } from "~/component/box";
import { useAppStore } from "./useAppStore";

export function Component() {
	const shop_name_list = useAppStore().shop_name_list;
	const [merge, setMerge] = useImmer({
		shop_name: "",
		ori_path: "",
		dst_path: "",
	});
	return (
		<>
			<Grid2 container spacing={2} alignItems={"center"}>
				<GridHeader title="素材合并" />

				<Grid2 xs={2}>
					<FormControl>
						<InputLabel>店铺选择</InputLabel>
						<Select
							label="店铺选择"
							value={merge.shop_name}
							onChange={(event) =>
								setMerge((draft) => {
									draft.shop_name = event.target.value;
								})
							}
						>
							{shop_name_list.map((item) => (
								<MenuItem key={item} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid2>

				<Grid2 xs={4}>
					<TextField
						label="源目录"
						value={merge.ori_path}
						onChange={(evnet) =>
							setMerge((darft) => {
								darft.ori_path = evnet.target.value as string;
							})
						}
						autoComplete=""
					/>
				</Grid2>

				<Grid2 sx={{ textAlign: "center" }}>
					<ArrowRightAltRoundedIcon />
				</Grid2>

				<Grid2 xs={4}>
					<TextField
						value={merge.dst_path}
						onChange={(event) => {
							setMerge((state) => {
								state.dst_path = event.target.value;
							});
						}}
						label="目标目录"
						autoComplete=""
					/>
				</Grid2>

				<Grid2 xs={12}>
					<Button
						onClick={async () => {
							await DefaultService.materialMergeV1MaterialMergePost({
								dst_path: merge.dst_path,
								ori_path: merge.ori_path,
								shop_name: merge.shop_name,
							});
						}}
						variant="contained"
						startIcon={<DevicesFoldOutlinedIcon />}
					>
						合并
					</Button>
				</Grid2>
			</Grid2>
		</>
	);
}
