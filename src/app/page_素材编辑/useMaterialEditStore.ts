import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface PathObj {
	path: string;
	ratio?: number | undefined;
	isSelected?: boolean | undefined;
}

export const useMaterialEditStore = create(
	immer(() => ({
		shop_name: "",
		root_path: "",
		get_preview_number: 0,
		get_preview_sort: true,
		img_server_url: "http://127.0.0.1:8000/v1/blob?img=",
		selected_image: [] as PathObj[],
		taobao_title: "",

		material_info: {
			material_path: "",
			material_id: "",
			material_source_file_size: "", // 789MB
			material_source_file_count: 0, // 89
			material_source_format: "", // PSD AI
			material_source_format_title: "", // PSD 分层设计素材
			material_source_format_number: "", // 78个 PSD 文件

			preview_image_path: "",
			preview_image_count: 0,
			preview_image_list: [] as PathObj[],

			effect_image_path: "",
			effect_image_list: [] as PathObj[],

			file_start_stem: "1",
			path_start_stem: "1",
		},

		first_image_set: {
			first_image_title: "",

			first_image_style: "黑鲸",
			first_image_layout: "固定裁剪",
			first_image_line: 3,
			crop_position: "center",
			first_image_num: "1",
			spacing: 5,

			bg_color: "255 255 255 255",
			out_space: 0,
		},

		product_image_set: {
			oneline_number: 2,
			oneline_ratio: 2.5,
			has_preview_image: 1,
			has_effect_image: 1,

			preview_image_sort: 1,
			preview_used_number: 0,
			preview_has_material_info: 1,
			crop_position: "start",
			xq_width: 1500,
			has_water: 1,
			effect_has_watermark: 1,
		},
	})),
);

if (import.meta.env.MODE === "development") {
	mountStoreDevtool("materialEditStore", useMaterialEditStore);
}
