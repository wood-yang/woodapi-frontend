// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getTopInterfaceInvoke GET /api/analysis/top/interface/invoke */
export async function getTopInterfaceInvokeUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListInterfaceInfoVO_>('/api/analysis/top/interface/invoke', {
    method: 'GET',
    ...(options || {}),
  });
}
