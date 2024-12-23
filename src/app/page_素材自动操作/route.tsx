import { Stack } from "@mui/material";
import { Fun_下载目录移动到素材目录 } from "./fun_下载目录移动到素材目录";
import { Fun_全自动批处理素材 } from "./fun_全自动批处理素材";
import { Fun_制作详情 } from "./fun_制作详情";

export function Component() {
	return (
		<>
			<Stack spacing={5} direction={"column"}>
				<Fun_下载目录移动到素材目录 />
				<Fun_全自动批处理素材 />
				<Fun_制作详情 />
			</Stack>
		</>
	);
}
