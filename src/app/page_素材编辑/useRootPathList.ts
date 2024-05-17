import { createJSONStorage, persist } from 'zustand/middleware';

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useRootPathStore = create(
	persist(
		immer(() => ({
			root_path_list: [] as string[],
		})),
		{
			name: 'root_path_list', // name of the item in the storage (must be unique)
			storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
		},
	),
);
