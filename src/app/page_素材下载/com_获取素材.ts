import { DefaultService } from '~/client';

export async function down_material_list(store: any) {
	const res =
		await DefaultService.getMaterialListV1MaterialDownGetMaterialListPost(
			store,
		);
	return res;
}
