import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import {
	Autocomplete,
	Button,
	ButtonGroup,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { GridHeader } from "~/component/box";
import { get_material_info } from "~functions/getMaterialInfo";
import Path from "~functions/pathlib";
import { useAppStore } from "../useAppStore";
import { useMaterialEditStore } from "./useMaterialEditStore";
import { useRootPathStore } from "./useRootPathList";

export function RootPathModel() {
	return (
		<>
			<Grid2 container spacing={2}>
				<RootPathInput />
				<ShopNameInput />
				<PreviewImageNumber />
				<PreviewImageSort />
				<GetMaterialInfoButton />
			</Grid2>
		</>
	);
}

function GetMaterialInfoButton() {
	const store = useMaterialEditStore();

	const current_stem = new Path(store.root_path).stem;
	let next_stem = "";
	let prev_stem = "";

	if (Number.parseInt(current_stem.substring(1))) {
		next_stem =
			current_stem[0] +
			(Number.parseInt(current_stem.substring(1)) + 1).toString();
		prev_stem =
			current_stem[0] +
			(Number.parseInt(current_stem.substring(1)) - 1).toString();

		while (next_stem.length < current_stem.length) {
			next_stem = `${next_stem[0]}0${next_stem.substring(1)}`;
		}

		while (prev_stem.length < current_stem.length) {
			prev_stem = `${prev_stem[0]}0${prev_stem.substring(1)}`;
		}
	}

	return (
		<>
			<Grid2 xs={12}>
				<Stack direction={"row"} alignItems={"center"} spacing={2}>
					<Button
						startIcon={<AutoFixHighOutlinedIcon />}
						onClick={get_material_info}
						variant="contained"
					>
						获取素材信息
					</Button>

					{store.root_path !== "" &&
						store.shop_name !== "" &&
						prev_stem !== "" &&
						next_stem !== "" && (
							<ButtonGroup variant="contained">
								<Button
									onClick={() =>
										useMaterialEditStore.setState((state) => {
											state.root_path = `${
												new Path(state.root_path).parent.path
											}/${prev_stem}`;
										})
									}
									startIcon={<ArrowBackRoundedIcon />}
								>
									{prev_stem} 上一个文件夹
								</Button>
								<Button>{current_stem}</Button>
								<Button
									onClick={() =>
										useMaterialEditStore.setState((state) => {
											state.root_path = `${
												new Path(state.root_path).parent.path
											}/${next_stem}`;
										})
									}
									endIcon={<ArrowForwardRoundedIcon />}
								>
									下一个文件夹 {next_stem}
								</Button>
							</ButtonGroup>
						)}
				</Stack>
			</Grid2>
		</>
	);
}
function PreviewImageNumber() {
	const store = useMaterialEditStore();
	return (
		<>
			<Grid2 xs={2}>
				<TextField
					label="获取图片数量 0为全部获取"
					type="number"
					value={store.get_preview_number}
					onChange={(event) =>
						useMaterialEditStore.setState((state) => {
							state.get_preview_number = Number.parseInt(event.target.value);
						})
					}
					inputProps={{ step: 10, min: 0 }}
				/>
			</Grid2>
		</>
	);
}

function PreviewImageSort() {
	const store = useMaterialEditStore();
	return (
		<>
			<Grid2 xs={2}>
				<FormControl>
					<InputLabel>获取的图片排序方式</InputLabel>
					<Select
						label="获取的图片排序方式"
						value={store.get_preview_sort ? 1 : 0}
						onChange={(event) =>
							useMaterialEditStore.setState((state) => {
								if (event.target.value === 1) {
									state.get_preview_sort = true;
								} else {
									state.get_preview_sort = false;
								}
							})
						}
					>
						<MenuItem value={1}>正序</MenuItem>
						<MenuItem value={0}>倒序</MenuItem>
					</Select>
				</FormControl>
			</Grid2>
		</>
	);
}

function ShopNameInput() {
	const shopNameList = useAppStore().shop_name_list;
	const store = useMaterialEditStore();
	return (
		<>
			<Grid2 xs={2}>
				<FormControl>
					<InputLabel>店铺选择</InputLabel>
					<Select
						label="店铺选择"
						value={store.shop_name}
						onChange={(event) =>
							useMaterialEditStore.setState((state) => {
								state.shop_name = event.target.value;
							})
						}
					>
						{shopNameList.map((item) => (
							<MenuItem key={item} value={item}>
								{item}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid2>
		</>
	);
}

function RootPathInput() {
	type AutocompleteOption = string;
	const store = useMaterialEditStore();

	useRootPathStore.setState((state) => {
		if (!state.root_path_list) {
			state.root_path_list = [];
		}
	});

	return (
		<>
			<GridHeader title="素材输入" />
			<Grid2 xs={6}>
				<Autocomplete
					value={store.root_path}
					onChange={(_event, value) =>
						useMaterialEditStore.setState((state) => {
							state.root_path = value as string;
						})
					}
					onInputChange={(_event, value) =>
						useMaterialEditStore.setState((state) => {
							state.root_path = value as string;
						})
					}
					options={
						useRootPathStore(
							(state) => state.root_path_list,
						) as AutocompleteOption[]
					}
					freeSolo
					renderInput={(params) => <TextField label="素材根目录" {...params} />}
				/>
			</Grid2>
		</>
	);
}
