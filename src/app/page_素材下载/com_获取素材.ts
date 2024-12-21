import { DefaultService } from "~/client";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function down_material_list(store: any) {
	const res =
		await DefaultService.getMaterialListV1MaterialDownGetMaterialListPost(
			store,
		);
	return res;
}
