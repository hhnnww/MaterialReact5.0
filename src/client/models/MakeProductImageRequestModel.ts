/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MakeProductImageRequestModel = {
    shop_name: string;
    material_path: string;
    preview_image_path: string;
    effect_image_path: string;
    material_id: string;
    material_source_file_size: string;
    material_source_format_title: string;
    material_source_format_number: string;
    oneline_number: number;
    oneline_ratio: number;
    has_preview_image: number;
    has_effect_image: number;
    preview_image_sort: number;
    preview_used_number: number;
    preview_has_material_info: number;
    preview_image_count: number;
    crop_position: MakeProductImageRequestModel.crop_position;
    xq_width: number;
    save_sub_path?: boolean;
};

export namespace MakeProductImageRequestModel {

    export enum crop_position {
        START = 'start',
        CENTER = 'center',
        END = 'end',
    }


}
