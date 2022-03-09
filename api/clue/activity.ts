export enum ActivityApi {
    GetByCity = '/customer-server/clueActivity/getByCity',
    GetByProjectId = '/customer-server/clueActivity/getByProjectId',
    GetById = '/customer-server/clueActivity/getById',
}

export interface ActivityModel {
    id?: string;
    title?: string;
    description?: string;
    sort?: string;
    type?: string;
    expireTime?: string;
    headImg?: string;
    userNumber?: string;
    cityId?: string;
    state?: string;
    createTime?: string;
    createBy?: string;
    updateTime?: string;
    updateBy?: string;
    cityByCityId?: string;
    createByUser?: string;
    updateByUser?: string;
    projectEntities?: any;
}