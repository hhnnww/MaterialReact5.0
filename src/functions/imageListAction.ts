import {
	type PathObj,
	useMaterialEditStore,
} from "~/app/page_素材编辑/useMaterialEditStore";
import Path from "./pathlib";

/* 
根据图片尺寸排序
*/
export function sortAllImageBySize(sort_by: boolean) {
	// getAllImageRatio();
	useMaterialEditStore.setState((state) => {
		state.material_info.effect_image_list.sort((a, b) => {
			if (a.radio && b.radio) {
				if (sort_by === true) {
					return a.radio - b.radio;
				}
				return b.radio - a.radio;
			}
			return 0;
		});

		state.material_info.preview_image_list.sort((a, b) => {
			if (a.radio && b.radio) {
				if (sort_by === true) {
					return a.radio - b.radio;
				}
				return b.radio - a.radio;
			}
			return 0;
		});
	});
}

/* 
根据图片名称排序
*/
export function sortAllImageByNmae(sort_by: boolean) {
	useMaterialEditStore.setState((state) => {
		state.material_info.effect_image_list.sort((a, b) => {
			if (sort_by === true) {
				return new Path(a.path).num - new Path(b.path).num;
			}
			return new Path(b.path).num - new Path(a.path).num;
		});

		state.material_info.preview_image_list.sort((a, b) => {
			if (sort_by === true) {
				return new Path(a.path).num - new Path(b.path).num;
			}
			return new Path(b.path).num - new Path(a.path).num;
		});
	});
}

/* 
选择所有图片
*/
export function selectAllImage() {
	useMaterialEditStore.setState((state) => {
		const allImage = state.material_info.effect_image_list.concat(
			state.material_info.preview_image_list,
		);

		allImage.map((item) => {
			if (item.isSelected === false) {
				state.selected_image.push(item);
			}
		});

		state.material_info.effect_image_list.map((_item, index) => {
			state.material_info.effect_image_list[index].isSelected = true;
		});

		state.material_info.preview_image_list.map((_item, index) => {
			state.material_info.preview_image_list[index].isSelected = true;
		});
	});
}

/* 
清空所有选择
*/
export function clearSelect() {
	useMaterialEditStore.setState((state) => {
		state.selected_image = [];

		state.material_info.preview_image_list.map((_item, index) => {
			state.material_info.preview_image_list[index].isSelected = false;
		});

		state.material_info.effect_image_list.map((_item, index) => {
			state.material_info.effect_image_list[index].isSelected = false;
		});
	});
}

/* 
选择单个图片
*/
export function selectSingleImage(img_obj: PathObj) {
	useMaterialEditStore.setState((state) => {
		if (img_obj.isSelected === false) {
			state.selected_image.push(img_obj);

			state.material_info.preview_image_list.map((item, index) => {
				if (item.path === img_obj.path) {
					state.material_info.preview_image_list[index].isSelected = true;
				}
			});

			state.material_info.effect_image_list.map((item, index) => {
				if (item.path === img_obj.path) {
					state.material_info.effect_image_list[index].isSelected = true;
				}
			});
		} else {
			state.selected_image.map((item, index) => {
				if (item.path === img_obj.path) {
					state.selected_image.splice(index, 1);
				}
				state.material_info.preview_image_list.map((item, index) => {
					if (item.path === img_obj.path) {
						state.material_info.preview_image_list[index].isSelected = false;
					}
				});

				state.material_info.effect_image_list.map((item, index) => {
					if (item.path === img_obj.path) {
						state.material_info.effect_image_list[index].isSelected = false;
					}
				});
			});
		}
	});
}
