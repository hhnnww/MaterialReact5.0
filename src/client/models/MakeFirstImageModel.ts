/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImageModel } from './ImageModel';

export type MakeFirstImageModel = {
    first_image_title: string;
    select_image_list: Array<ImageModel>;
    first_image_style: string;
    first_image_line: number;
    first_image_layout: string;
    crop_position: MakeFirstImageModel.crop_position;
    first_image_num: string;
    spacing: number;
    format_title: string;
    material_id: string;
    shop_name: string;
    source_format: string;
    source_count: string;
    bg_color: string;
    out_space: number;
};

export namespace MakeFirstImageModel {

    export enum crop_position {
        START = 'start',
        CENTER = 'center',
        END = 'end',
    }


}
