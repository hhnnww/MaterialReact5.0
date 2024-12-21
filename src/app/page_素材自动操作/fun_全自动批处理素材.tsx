import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useImmer } from "use-immer";
import { DefaultService } from "~/client";
import { GridHeader } from "~/component/box";
import { useAppStore } from "../useAppStore";

export function Fun_全自动批处理素材() {
	const tb_name = useAppStore();
	const [store, setStore] = useImmer({
		shop_name: "",
		start_stem: 0,
		parent_path: "",
	});
	return (
		<Grid2 container spacing={2}>
			<GridHeader title={"全自动批处理素材"} />

			<Grid2 xs={2}>
				<FormControl>
					<InputLabel>{"店铺选择"}</InputLabel>
					<Select
						label={"店铺选择"}
						onChange={(event) => {
							setStore((draft) => {
								draft.shop_name = event.target.value as string;
							});
						}}
					>
						{tb_name.shop_name_list.map((item) => (
							<MenuItem key={item} value={item}>
								{item}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid2>

			<Grid2 xs={2}>
				<TextField
					type="number"
					label="第一个文件夹的数字名"
					onChange={(event) =>
						setStore((draft) => {
							draft.start_stem = Number.parseInt(event.target.value) as number;
						})
					}
				/>
			</Grid2>

			<Grid2 xs={8}>
				<TextField
					label="素材文件夹"
					onChange={(event) => {
						setStore((draft) => {
							draft.parent_path = event.target.value;
						});
					}}
				/>
			</Grid2>

			<Grid2>
				<Button
					variant="contained"
					onClick={() => {
						DefaultService.autoEditMaterialV1AutoActionAutoEditMaterialPost({
							parent_path: store.parent_path,
							shop_name: store.shop_name,
							start_stem: store.start_stem,
						});
					}}
				>
					提交
				</Button>
			</Grid2>
		</Grid2>
	);
}
