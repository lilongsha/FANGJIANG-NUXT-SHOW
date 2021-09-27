export const getDataResult = (res: any): any => {
  if (res.code !== 200) {
    return undefined;
  }
  return res.data.content;
}

export const getListResult = (res: any): any[] => {
  if (res.code !== 200) {
    return [];
  }
  return res.data.content;
}

/**
 * 
 * @param res 
 * @returns content: content, page: { number, size, numberOfElements, totalPages, totalElements }
 */
export const getPageResult = (res: any): any => {
  if (res.code !== 200) {
    return undefined;
  }
  return { content: res.data.content, page: res.data.page }
}