import { persist, createJSONStorage } from 'zustand/middleware';

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useMaterialDownStore = create(
	persist(
		immer(() => ({
			shop_name: '',
			material_site: '',
			down_path: 'F:\\DOWN',

			scrapy_url: '',
			scrapy_num: 1,
			cookie: '',

			page: 1,
		})),
		{
			name: 'down_store',
			storage: createJSONStorage(() => sessionStorage),
		},
	),
);

export const useMaterialList = create(
	immer(() => ({
		material_list: [],
		count: 0,
	})),
);
