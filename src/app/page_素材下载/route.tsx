import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect } from "react";
import { down_material_list } from "./com_获取素材";
import { Fun_选择面板 } from "./fun_店铺和网站选择";
import { Fun_素材列表 } from "./fun_素材列表";
import { Fun_素材采集面板 } from "./fun_素材采集";
import { Fun_翻页面板 } from "./fun_翻页面板";
import { useMaterialDownStore, useMaterialList } from "./store_素材下载";

export function Component() {
	const down_store = useMaterialDownStore();

	// 重新加载
	useEffect(() => {
		useMaterialList.setState((state) => {
			state.material_list = [];
		});

		if (down_store.shop_name !== "" && down_store.material_site !== "") {
			down_material_list(down_store).then((res) => {
				useMaterialList.setState((state) => {
					state.material_list = res.material_list;
					state.count = res.count;
				});
			});
		}
	}, [down_store]);

	// 店铺名和网站变化，采集窗口初始化

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		useMaterialDownStore.setState((state) => {
			state.page = 1;
			state.scrapy_url = "";
			state.scrapy_num = 1;
		});
	}, [down_store.shop_name, down_store.material_site]);

	return (
		<>
			<Grid2 spacing={3} container>
				<Fun_选择面板 />
				<Fun_素材采集面板 />
				<Fun_翻页面板 />
				<Fun_素材列表 />
				<Fun_翻页面板 />
			</Grid2>
		</>
	);
}
