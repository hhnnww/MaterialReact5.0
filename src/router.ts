import { createHashRouter } from 'react-router-dom';

const router = createHashRouter([
	{
		path: '',
		lazy: () => import('./app/layout/route'),
		children: [
			{ index: true, lazy: () => import('./app/_index/route') },
			{
				path: 'MaterialEdit',
				lazy: () => import('./app/page_素材编辑/route'),
			},
			{
				path: 'MaterialMerge',
				lazy: () => import('./app/page_素材合并'),
			},
			{
				path: 'CountWechatBill',
				lazy: () => import('./app/page_微信账单计算'),
			},
			{
				path: 'MaterialDown',
				lazy: () => import('./app/page_素材下载/route'),
			},
			{
				path: 'MaterialAutoAction',
				lazy: () => import('./app/page_素材自动操作/route'),
			},
			{
				path: 'OpenBaiduLink',
				lazy: () => import('./app/page_打开网盘链接'),
			},
			{
				path: 'GetBaiduYunShareLinks',
				lazy: () => import('./app/page_获取网盘链接'),
			},
		],
	},
]);

export default router;
