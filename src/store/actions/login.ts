import { RootThunkAction } from '@/types/store'
import http from '@/utils/http'
import { setToken } from '@/utils/token'
import type { Token } from '@/types/data'

// login函数的参数类型
type LoginParams = { mobie: string; code: string }
// login接口的响应类型
type LoginResponse = { message: string; data: Token }

export const Login = (values: LoginParams): RootThunkAction => {
  return async (dispatch) => {
    // 发送请求
    const res = await http.post<LoginResponse>('/authorizations', values)
    // 拿到返回数据
    const tokens = res.data.data
    // 设置本地token
    setToken(tokens)
    // 分发action,将token保存到redux state中
    dispatch({ type: 'login/token', payload: tokens })
  }
}
