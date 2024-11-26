import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useAppStore = create(
	immer(() => ({
		shop_name_list: ['小夕素材', '饭桶设计', '泡泡素材', '松子素材'],

		material_site_list: [
			'千图',
			'包图',
			'摄图',
			'千库',
			'享设计',
			'envato',
			'freepik',
			'pngtree',
			'allfreedown',
			'三老爹',
			'NEW模型',
			'黑鲸素材',
			'青青草素材王国',
			'加油鸭素材铺',
			'漫语摄影',
			'巴扎嘿',
			'轨迹',
			't500',
			'芒果',
		],
	})),
);
