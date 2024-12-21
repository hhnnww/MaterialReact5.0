import { TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { GridHeader } from "~/component/box";
import { useMaterialEditStore } from "./useMaterialEditStore";

export function MaterialInfoModel() {
	const store = useMaterialEditStore();

	function getKeys() {
		const ignore_list = [
			"preview_image_list",
			"effect_image_list",
			"preview_image_path",
			"effect_image_path",
			"material_path",
		];
		const key_list = [];
		for (const key in store.material_info) {
			if (ignore_list.indexOf(key) === -1) {
				key_list.push(key);
			}
		}
		return key_list;
	}

	const labelChinese = {
		material_id: "素材ID",
		material_source_file_size: "素材大小",
		material_source_file_count: "素材数量",
		material_source_format: "素材格式",
		material_source_format_title: "素材格式标题",
		material_source_format_number: "素材数量标题",
		preview_image_count: "预览图数量",
		file_start_stem: "文件起始ID",
		path_start_stem: "文件夹起始ID",
	};

	return (
		<>
			<Grid2 container spacing={2}>
				<GridHeader title="素材信息" />

				{getKeys().map((item) => {
					return (
						<Grid2 key={item} xs={2}>
							<TextField
								label={labelChinese[item as keyof typeof labelChinese]}
								value={
									store.material_info[item as keyof typeof store.material_info]
								}
								onChange={(event) =>
									useMaterialEditStore.setState((state) => {
										// biome-ignore lint/suspicious/noExplicitAny: <explanation>
										(state.material_info as any)[item] = event.target.value;
									})
								}
							/>
						</Grid2>
					);
				})}
			</Grid2>
		</>
	);
}
