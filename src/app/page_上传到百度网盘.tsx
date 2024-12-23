import { Button, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { DefaultService } from "~/client";

const upBaiduStore = create(
	immer(() => ({
		parent_path: "",
		start_stem: 0,
		end_stem: 99999999,
	})),
);

export function Component() {
	const store = upBaiduStore();
	return (
		<>
			<Grid2 container spacing={2}>
				<Grid2 xs={6}>
					<TextField
						label="素材文件夹"
						value={store.parent_path}
						onChange={(event) => {
							upBaiduStore.setState((draft) => {
								draft.parent_path = event.target.value;
							});
						}}
						name="parent_path"
					/>
				</Grid2>

				<Grid2 xs={3}>
					<TextField
						name="start_stem"
						label="起始文件夹"
						value={store.start_stem}
						onChange={(event) => {
							upBaiduStore.setState((draft) => {
								draft.start_stem = Number.parseInt(event.target.value);
							});
						}}
						type="number"
					/>
				</Grid2>

				<Grid2 xs={3}>
					<TextField
						name="end_stem"
						label="终止文件夹"
						value={store.end_stem}
						onChange={(event) => {
							upBaiduStore.setState((draft) => {
								draft.end_stem = Number.parseInt(event.target.value);
							});
						}}
						type="number"
					/>
				</Grid2>

				<Grid2 xs={12}>
					<Button
						variant="contained"
						onClick={() => {
							DefaultService.routeUpToBaiduwangpanUpBaiduwangpanPost({
								parent_path: store.parent_path,
								start_stem: store.start_stem,
								end_stem: store.end_stem,
							});
						}}
						type="submit"
					>
						提交
					</Button>
				</Grid2>
			</Grid2>
		</>
	);
}
