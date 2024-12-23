/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaiduItem } from '../models/BaiduItem';
import type { CutMaterialModel } from '../models/CutMaterialModel';
import type { DelBaiduFolder } from '../models/DelBaiduFolder';
import type { DownItem } from '../models/DownItem';
import type { EditItem } from '../models/EditItem';
import type { GetBaiduLink } from '../models/GetBaiduLink';
import type { GetBaiduShareLinkItem } from '../models/GetBaiduShareLinkItem';
import type { GetMateialIdItem } from '../models/GetMateialIdItem';
import type { GetMaterialInfoModel } from '../models/GetMaterialInfoModel';
import type { ItemIn } from '../models/ItemIn';
import type { MakeFirstImageModel } from '../models/MakeFirstImageModel';
import type { MakeProductImageRequestModel } from '../models/MakeProductImageRequestModel';
import type { MakeXQ } from '../models/MakeXQ';
import type { MaterialDownModel } from '../models/MaterialDownModel';
import type { MaterialInfo } from '../models/MaterialInfo';
import type { MaterialMergeModel } from '../models/MaterialMergeModel';
import type { ReqModel } from '../models/ReqModel';
import type { RequestMaterialPathActionModel } from '../models/RequestMaterialPathActionModel';
import type { ResModel } from '../models/ResModel';
import type { ShopNameModel } from '../models/ShopNameModel';
import type { UpBaiduModel } from '../models/UpBaiduModel';
import type { UpBaiduResponseModel } from '../models/UpBaiduResponseModel';
import type { UpTB } from '../models/UpTB';
import type { XQReqModel } from '../models/XQReqModel';
import type { XQResModel } from '../models/XQResModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Route Up To Baiduwangpan
     * 上传到百度网盘.
     * @param requestBody 
     * @returns UpBaiduResponseModel Successful Response
     * @throws ApiError
     */
    public static routeUpToBaiduwangpanUpBaiduwangpanPost(
requestBody: UpBaiduModel,
): CancelablePromise<UpBaiduResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/up_baiduwangpan',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Img
     * @param img 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getImgV1BlobGet(
img: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/blob',
            query: {
                'img': img,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Thumbnail
     * 获取缩略图
 *
 * Args:
 * img_path (str): _description_
 *
 * Returns:
 * Response: _description_
     * @param imgPath 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getThumbnailV1BlobThumbnailGet(
imgPath: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/blob/thumbnail',
            query: {
                'img_path': imgPath,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Material Info
     * 获取素材信息路由.
     * @param requestBody 
     * @returns MaterialInfo Successful Response
     * @throws ApiError
     */
    public static getMaterialInfoV1GetMaterialInfoPost(
requestBody: GetMaterialInfoModel,
): CancelablePromise<MaterialInfo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/GetMaterialInfo',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Make Material Product Image
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static makeMaterialProductImageV1MakeMaterialProductImagePost(
requestBody: MakeProductImageRequestModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/MakeMaterialProductImage',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Material Path Action
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static materialPathActionV1MaterialPathActionPost(
requestBody: RequestMaterialPathActionModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/MaterialPathAction',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Make First Image
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static makeFirstImageV1MakeFirstImagePost(
requestBody: MakeFirstImageModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/MakeFirstImage',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Material Merge
     * 素材合并函数
 *
 * Args:
 * item (MaterialMergeModel): _description_
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static materialMergeV1MaterialMergePost(
requestBody: MaterialMergeModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/MaterialMerge',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Baidu Link
     * 获取百度网盘连接
 *
 * Args:
 * item (GetBaiduLink): _description_
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getBaiduLinkV1AutoActionGetBaiduLinkPost(
requestBody: GetBaiduLink,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/AutoAction/get_baidu_link',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Up Taobao
     * 上传到淘宝函数
 *
 * Args:
 * item (UpTB): _description_
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static upTaobaoV1AutoActionUpTaobaoPost(
requestBody: UpTB,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/AutoAction/up_taobao',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Make All Xq
     * 制作所有淘宝详情.
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static makeAllXqV1AutoActionMakeAllXqPost(
requestBody: MakeXQ,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/AutoAction/make_all_xq',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Auto Upload Baidu
     * 上传到百度网盘.
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static autoUploadBaiduV1AutoActionAutoUploadBaiduPost(
requestBody: BaiduItem,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/AutoAction/auto_upload_baidu',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Down Path Move To Material Path
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static downPathMoveToMaterialPathV1AutoActionDownPathMoveToMaterialPathPost(
requestBody: DownItem,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/AutoAction/down_path_move_to_material_path',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Auto Edit Material
     * 自动编辑素材
 *
 * Args:
 * item (EditItem): _description_
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static autoEditMaterialV1AutoActionAutoEditMaterialPost(
requestBody: EditItem,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/AutoAction/auto_edit_material',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Fun Down Path Merge
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static funDownPathMergeV1MaterialDownDownPathMergePost(
requestBody: MaterialDownModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/MaterialDown/down_path_merge',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Cut Material List
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static cutMaterialListV1MaterialDownCutMaterialListPost(
requestBody: CutMaterialModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/MaterialDown/cut_material_list',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Scrapy Material
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static scrapyMaterialV1MaterialDownScrapyMaterialPost(
requestBody: MaterialDownModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/MaterialDown/scrapy_material',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Clear Un Down Material
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static clearUnDownMaterialV1MaterialDownClearUnDownMaterialPost(
requestBody: MaterialDownModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/MaterialDown/clear_un_down_material',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Material Down Link
     * @param shopName 
     * @param materialSite 
     * @param materialId 
     * @param downPath 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getMaterialDownLinkV1MaterialDownGetMaterialDownLinkGet(
shopName: string,
materialSite: string,
materialId: string,
downPath: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/MaterialDown/get_material_down_link',
            query: {
                'shop_name': shopName,
                'material_site': materialSite,
                'material_id': materialId,
                'down_path': downPath,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Material List
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getMaterialListV1MaterialDownGetMaterialListPost(
requestBody: MaterialDownModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/MaterialDown/get_material_list',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Url
     * @param imgUrl 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getUrlV1ImgGetUrlGet(
imgUrl: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/img/get_url',
            query: {
                'img_url': imgUrl,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Open Baidu Link
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static openBaiduLinkOpenBaiduLinkOpenLinkPost(
requestBody: ItemIn,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/open_baidu_link/open_link',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Fun 获取商家编码
     * 获取千牛和自动发货的商家编码
 * 千牛的商家编码可以删除仓库中的产品对应的网盘文件
 * 自动发货的商家编码可以用来获取网盘链接
     * @param requestBody 
     * @returns string Successful Response
     * @throws ApiError
     */
    public static funBaiduyunDelShareRequestGetMaterialIdPost(
requestBody: GetMateialIdItem,
): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/baiduyun_del_share_request/get_material_id',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Fun 删除网盘文件夹
     * 1 获取需要删除的产品的商家编码
 * 2 构建成百度网盘的路径
 * 3 发送请求删除这个路径
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static funBaiduyunDelShareRequestDelBaiduFolderPost(
requestBody: DelBaiduFolder,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/baiduyun_del_share_request/del_baidu_folder',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Fun 获取网盘分享链接
     * 获取网盘分享链接
 * 1 先从百度网盘的请求中返回的JSON获取文件夹ID
 * 2 获取分享文件夹的接口和HEADER
 * 3 从自动发货后台获取需要获取的产品ID
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static funBaiduyunDelShareRequestGetBaiduShareLinkPost(
requestBody: GetBaiduShareLinkItem,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/baiduyun_del_share_request/get_baidu_share_link',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Fun Make Xq Str
     * 制作淘宝详情
     * @param requestBody 
     * @returns XQResModel Successful Response
     * @throws ApiError
     */
    public static funMakeXqStrChromePluginMakeXqStrPost(
requestBody: XQReqModel,
): CancelablePromise<XQResModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chrome_plugin/make_xq_str',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Fun Scrapy Material
     * 采集素材函数
     * @param requestBody 
     * @returns ResModel Successful Response
     * @throws ApiError
     */
    public static funScrapyMaterialChromePluginScrapyMaterialPost(
requestBody: ReqModel,
): CancelablePromise<ResModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chrome_plugin/scrapy_material',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Fun Get Shop Name Material Site
     * 获取店铺名列表和素材网站的函数
     * @returns ShopNameModel Successful Response
     * @throws ApiError
     */
    public static funGetShopNameMaterialSiteChromePluginGetShopNameMaterialSiteGet(): CancelablePromise<ShopNameModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chrome_plugin/get_shop_name_material_site',
        });
    }

}
