export enum Api {
    Token = '/customer-oauth-server/oauth/token',
    GetUserName = '/customer-oauth-server/auth/getUserName',
    SignOut = '/customer-oauth-server/auth/signOut',
    getCode = '/customer-oauth-server/auth/code',
    SmsCode = '/customer-oauth-server/auth/smsCode',
    List = '/customer-oauth-server/social/list',
    LoginOAuthType = '/customer-oauth-server/social/login/', // login/{oauthType}
    RegisterOAuthType = '/customer-oauth-server/social/register/', // 'register/{oauthType}'
    Register = '/customer-oauth-server/social/register',
    CallbackOAuthType = '/customer-oauth-server/social/callback/', // callback/{oauthType}
    MobileRegisterOrLogin = '/customer-oauth-server/social/mobileRegisterOrLogin',
    GetCurInfo = '/customer-server/customer/getCurInfo',
    UpdateInfo = '/customer-server/customer/updateInfo',
    ForgetPwd = '/customer-server/customer/forgetPwd',
}

export enum CurrentApi {
    SelectFavorite = '/customer-server/project/selectFavorite',
}
