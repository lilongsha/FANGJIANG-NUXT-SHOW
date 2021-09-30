export enum Api {
  GetQuestions = '/nhouse-server/question/getQuestions', // projectId
  GetQuestion = '/nhouse-server/question/getQuestion', // id
}

export async function getQuestions($axios: any, projectId: string, pageSize = 2, pageNum = 0) {
  const param: any = {
    data: {
      projectId,
    },
    page: {
      pageSize,
      pageNum,
    }
  }
  return await $axios.$post(Api.GetQuestions, param)
}

export async function getQuestion($axios: any, id: string) {
  const param: any = {
    data: {
      id,
    },
  }
  return await $axios.$post(Api.GetQuestion, param)
}