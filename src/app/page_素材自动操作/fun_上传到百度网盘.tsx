import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useImmer } from "use-immer";
import { DefaultService } from "~/client";
import { GridHeader } from "~/component/box";
export function Fun_上传到百度网盘() {
	const [store, setStore] = useImmer({
		parent_path: "",
		start_stem: 0,
	});

	return (
		<Grid2 container spacing={2}>
			<GridHeader title="上传到百度网盘" />

			<Grid2 xs={3}>
				<TextField
					label="起始文件夹名"
					name="start_stem"
					type="number"
					onChange={(event) => {
						setStore((draft) => {
							draft.start_stem = Number.parseInt(event.target.value);
						});
					}}
				/>
			</Grid2>

			<Grid2 xs={9}>
				<TextField
					label="素材文件夹"
					name="parent_path"
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
						DefaultService.autoUploadBaiduV1AutoActionAutoUploadBaiduPost({
							parent_path: store.parent_path,
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
