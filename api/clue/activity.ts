export enum ActivityApi {
    GetByCity = '/clue-server/clueActivity/getByCity',
    GetByProjectId = '/clue-server/clueActivity/getByProjectId',
    GetById = '/clue-server/clueActivity/getById',
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