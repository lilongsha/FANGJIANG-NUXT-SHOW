export enum Api {
    Token = '/customer-oauth-server/oauth/token',
    PostRefreshToken = '/customer-oauth-server/oauth/token',
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
    UploadAvatar = '/customer-server/file/uploadAvatar',
    Update = '/customer-server/customer/update', // 修改密码
}

export enum CurrentApi {
    SelectFavorite = '/customer-server/project/selectFavorite',
    DeleteFavorite = '/customer-server/project/deleteFavorite', // projectId
    AddFavoriteProject = '/customer-server/project/addFavoriteProject', // projectId
}

export enum AnswerApi {
    Agree = '/customer-server/close/answer/agree', // id
    Add = '/customer-server/close/answer/add',
    update = '/customer-server/close/answer/update',
    myAnswer = '/customer-server/close/answer/myAnswer',
    GetAnswers = '/customer-server/answer/getAnswers', // questionId
}
export enum QuestionApi {
    Add = '/customer-server/close/question/add',
    MyQuestion = '/customer-server/close/question/myQuestion',
}

export enum SaleApi {
    Top = '/customer-server/saleTop/top',
    TopCity = '/customer-server/saleTop/topCity',
}

export async function refreshToken ($axios: any, refreshParam: any) {
    $axios.setHeader('Authorization', 'Basic Y3VzdG9tZXI6ZmFuZ2ppYW5nd2FuZw==')
    const param = {
        grant_type: 'refresh_token',
        refresh_token: refreshParam.refresh_token,
        client_id: 'postman',
        client_secret: 'fangjiangwang',
        scope: 'all'
    }
    const result = await $axios.$post(Api.PostRefreshToken, param)
    $axios.setHeader('Authorization', '')
    return result
}

export async function uploadUserImg($axios: any, formData: any) {
      const result = await $axios.$post(
        {
          url: Api.UploadAvatar,
          data: formData,
          config: { headers: { 'Content-Type': 'multipart/form-data;charset=UTF-8' } },
        },
      );
      return result;
}