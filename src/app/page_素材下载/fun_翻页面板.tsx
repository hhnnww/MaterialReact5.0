import HistoryTwoToneIcon from "@mui/icons-material/HistoryTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import KeyboardDoubleArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardDoubleArrowLeftTwoTone";
import KeyboardDoubleArrowRightTwoToneIcon from "@mui/icons-material/KeyboardDoubleArrowRightTwoTone";
import { ButtonGroup, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { GridHeader } from "~/component/box";
import { down_material_list } from "./com_获取素材";
import { useMaterialDownStore, useMaterialList } from "./store_素材下载";

export function Fun_翻页面板() {
	const down_store = useMaterialDownStore();

	async function goto_page(num: number) {
		useMaterialDownStore.setState((state) => {
			state.page = num;
		});
	}

	function fun_获取素材() {
		down_material_list(down_store).then((res) => {
			useMaterialList.setState((state) => {
				state.material_list = res.material_list;
				state.count = res.count;
			});
		});
	}

	return (
		<>
			<GridHeader title="" />
			<Grid2 xs={12} mb={4}>
				<Stack direction={"row"} spacing={2}>
					<ButtonGroup variant="contained">
						<Button
							onClick={() => {
								goto_page(1);
							}}
							disabled={!(down_store.page > 1)}
							startIcon={<HomeTwoToneIcon />}
						>
							首页
						</Button>

						<Button
							onClick={() => {
								goto_page(down_store.page - 1);
							}}
							disabled={!(down_store.page > 1)}
							startIcon={<KeyboardDoubleArrowLeftTwoToneIcon />}
						>
							{down_store.page > 1 && down_store.page - 1} 上一页
						</Button>

						<Button>{down_store.page}</Button>
						<Button
							onClick={() => {
								goto_page(down_store.page + 1);
							}}
							endIcon={<KeyboardDoubleArrowRightTwoToneIcon />}
						>
							下一页 {down_store.page + 1}
						</Button>
					</ButtonGroup>

					<Button
						variant="contained"
						startIcon={<HistoryTwoToneIcon />}
						onClick={fun_获取素材}
					>
						刷新
					</Button>
				</Stack>
			</Grid2>
		</>
	);
}
