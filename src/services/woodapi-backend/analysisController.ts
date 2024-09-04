// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** analysisInterfaceInfo GET /api/analysis/interfaceInfo */
export async function analysisInterfaceInfoUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListInterfaceInfoVO_>('/api/analysis/interfaceInfo', {
    method: 'GET',
    ...(options || {}),
  });
}
