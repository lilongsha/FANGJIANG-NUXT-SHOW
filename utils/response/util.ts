export const getDataResult = (res: any): any => {
  if (res.code !== 200) {
    return undefined;
  }
  return res.data.content;
}

export const getPageResult = (res: any): any => {
  if (res.code !== 200) {
    return undefined;
  }
  
}