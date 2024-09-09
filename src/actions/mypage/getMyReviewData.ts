import { myReviewCountData, myWritenReviewDatas } from '@/datas/dummy/mypage/MyReviewData'
import { reviewCountType, writenReviewType } from '@/types/MyPageTypes'

export async function getMyReviewCount() {
  const res = myReviewCountData as reviewCountType
  return res
}

export async function getMyWritenReview(range: string): Promise<writenReviewType[]> {
  const res = myWritenReviewDatas as writenReviewType[]
  // const res = await fetch()
  // if(!res.ok){
  //   throw new Error('Fail to fetch')
  // }
  // const data = (await res.json()) as commonResType;
  //return data.data as writenReviewType[];
  return res
}
