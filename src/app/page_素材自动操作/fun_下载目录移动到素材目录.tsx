import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useImmer } from "use-immer";
import { DefaultService } from "~/client";
import { GridHeader } from "~/component/box";
export function Fun_下载目录移动到素材目录() {
	const [store, setStore] = useImmer({
		down_path: "",
		material_path: "",
	});
	return (
		<Grid2 container spacing={2}>
			<GridHeader title="下载目录移动到素材目录" />

			<Grid2 xs={6}>
				<TextField
					label={"下载目录"}
					name="down_path"
					onChange={(event) => {
						setStore((draft) => {
							draft.down_path = event.target.value;
						});
					}}
				/>
			</Grid2>

			<Grid2 xs={6}>
				<TextField
					label={"素材目录"}
					name="material_path"
					onChange={(event) => {
						setStore((draft) => {
							draft.material_path = event.target.value;
						});
					}}
				/>
			</Grid2>

			<Grid2 xs={12}>
				<Button
					variant="contained"
					onClick={() => {
						DefaultService.downPathMoveToMaterialPathV1AutoActionDownPathMoveToMaterialPathPost(
							{
								ori_path: store.down_path,
								dst_path: store.material_path,
							},
						);
					}}
				>
					提交
				</Button>
			</Grid2>
		</Grid2>
	);
}
