/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AxiosResponse } from 'axios';
import { ResponseError } from '../interfaces/interfaces';

interface IReturn<T, F = T> {
  data: T | F;
  errors: ResponseError | null;
  success: boolean;
  status?: number;
}

async function doRequest<T, F = T>(
  request: (...args: any[]) => Promise<AxiosResponse<any>>,
  params?: unknown
): Promise<IReturn<T, F>> {
  try {
    const response = await request(params);

    return {
      data: response.data,
      errors: null,
      success: !!response?.data,
    };
  } catch (_e) {
    const e = _e as any;
    console.error('HTMLRequest Error: ', e);
    return {
      data: e?.response?.data,
      errors: e?.response?.data?.error || e?.response?.data?.errors,
      success: false,
      status: e?.response?.status,
    };
  }
}

export default doRequest;
