import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useImmer } from "use-immer";
import { DefaultService } from "~/client";
import { GridHeader } from "~/component/box";

export function Fun_上传到淘宝() {
	const [store, setStore] = useImmer({
		start_stem: 0,
	});
	return (
		<>
			<Grid2 container spacing={2}>
				<GridHeader title="上传到淘宝" />
				<Grid2 xs={12}>
					<TextField
						type="number"
						label="起始ID"
						onChange={(event) => {
							setStore((draft) => {
								draft.start_stem = Number.parseInt(event.target.value);
							});
						}}
					/>
				</Grid2>

				<Grid2 xs={12}>
					<Button
						onClick={() => {
							DefaultService.upTaobaoV1AutoActionUpTaobaoPost({
								start_stem: store.start_stem,
							});
						}}
						variant="contained"
					>
						提交
					</Button>
				</Grid2>
			</Grid2>
		</>
	);
}
