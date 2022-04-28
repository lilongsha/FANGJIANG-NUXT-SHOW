export enum SearchApi {
    All = '/customer-server/search/all',
    Nhouse = '/customer-server/search/nhouse',
    News = '/customer-server/search/news',
    Videos = '/customer-server/search/videos',
    Ohouse = '/customer-server/search/ohouse',
    GetOHouse = 'customer-server/ohouse/p',
    oNumber = '/customer-server/ohouse/h',
    AddFavorite = '/customer-server/ohouse/addFavoriteProject',
    DeleteFavorite = '/customer-server/ohouse/deleteFavorite',
    SelectFavorite = '/customer-server/ohouse/selectFavorite',
}

export enum BrandApi {
    Get = '/customer-server/brand/get',
}

export enum aroundApi {
    Around = '/customer-server/place/around',
}
