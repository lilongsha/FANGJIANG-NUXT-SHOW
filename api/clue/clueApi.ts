export enum Api {
    GetCode = '/customer-server/clue/getCode',
    Add = '/customer-server/clue/add',
}

export interface clueModel {
    id?: string;
    userId?: string;
    contact?: string;
    username?: string;
    nickname?: string;
    gender?: string;
    liveInProvince?: string;
    liveInCity?: string;
    liveInArea?: string;
    liveInAddress?: string;
    workInProvince?: string;
    workInCity?: string;
    workInArea?: string;
    workInAddress?: string;
    intentionProvince?: string;
    intentionCity?: string;
    intentionArea?: string;
    intentionProject?: string;
    purpose?: string;
    demand?: string;
    demandDescription?: string;
    activityId?: string;
    source?: string;
    state?: string;
    createTime?: string;
    createBy?: string;
    updateTime?: string;
    updateBy?: string;
    cityByIntentionCity?: string;
    userByUpdate?: string;
    activityByActivityId?: string;
    sysClueFollowBeans?: any[];
}