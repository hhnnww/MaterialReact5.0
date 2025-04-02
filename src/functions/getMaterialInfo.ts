import { useMaterialEditStore } from "~/app/page_素材编辑/useMaterialEditStore";
import { useRootPathStore } from "~/app/page_素材编辑/useRootPathList";
import { DefaultService } from "~/client";
// import { getAllImageRatio } from './imageListAction';

export async function get_material_info() {
	const store = useMaterialEditStore.getState();

	if (store.root_path === "") {
		alert("必须输入素材根文件夹");
		return;
	}

	if (store.shop_name === "") {
		alert("必须输入店铺名字");
		return;
	}

	const response = await DefaultService.getMaterialInfoV1GetMaterialInfoPost({
		shop_name: store.shop_name,
		root_path: store.root_path,
		preview_num: store.get_preview_number,
		preview_sort: store.get_preview_sort,
	});

	useMaterialEditStore.setState((state) => {
		state.material_info.effect_image_list = [];
		state.material_info.preview_image_list = [];
		state.selected_image = [];
		for (const store_key in state.material_info) {
			for (const res_key in response) {
				if (store_key === res_key) {
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					(state.material_info as any)[store_key] = (response as any)[res_key];
				}
			}
		}

		state.product_image_set.preview_used_number = response.preview_image_count;

		state.material_info.preview_image_list.map((_item, index) => {
			state.material_info.preview_image_list[index].isSelected = false;
			// state.material_info.preview_image_list[index].ratio = 0;
		});

		state.material_info.effect_image_list.map((_item, index) => {
			state.material_info.effect_image_list[index].isSelected = false;
			// state.material_info.effect_image_list[index].ratio = 0;
		});

		state.first_image_set.first_image_title = `${state.material_info.material_source_file_count.toString()}套 `;
		state.first_image_set.bg_color = "FFFFFF";

		let ma_format_title = state.material_info.material_source_format_title;
		ma_format_title = ma_format_title.replace(/\s*/g, "");

		state.taobao_title =
			state.first_image_set.first_image_title +
			ma_format_title +
			state.material_info.material_id;
	});

	useRootPathStore.setState((state) => {
		if (state.root_path_list.indexOf(store.root_path) !== -1) {
			state.root_path_list.map((item, index) => {
				if (item === store.root_path) {
					state.root_path_list.splice(index, 1);
				}
			});
		}
		state.root_path_list.unshift(store.root_path);
	});

	// getAllImageRatio();
}
