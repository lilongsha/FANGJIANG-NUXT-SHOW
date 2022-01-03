export enum ActivityApi {
    GetByCity = '/clue-server/clueActivity/getByCity',
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
    projectEntities?: string;
}