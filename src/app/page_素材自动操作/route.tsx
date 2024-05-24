import { Stack } from '@mui/material';
import { Fun_上传到淘宝 } from './fun_上传到淘宝';
import { Fun_上传到百度网盘 } from './fun_上传到百度网盘';
import { Fun_下载目录移动到素材目录 } from './fun_下载目录移动到素材目录';
import { Fun_全自动批处理素材 } from './fun_全自动批处理素材';
import { Fun_制作详情 } from './fun_制作详情';
import { Fun_获取网盘链接 } from './fun_获取百度网盘分享链接';

export function Component() {
	return (
		<>
			<Stack spacing={5} direction={'column'}>
				<Fun_下载目录移动到素材目录 />
				<Fun_全自动批处理素材 />
				<Fun_上传到百度网盘 />
				<Fun_制作详情 />
				<Fun_上传到淘宝 />
				<Fun_获取网盘链接 />
			</Stack>
		</>
	);
}
