import { Token } from '@/types/data'

// 使用常量来存储 key
const KEY = 'geek-h5-token'

export const getToken = (): Token => {
  const value = localStorage.getItem(KEY)
  if (value) {
    return JSON.parse(value)
  }
}

export const setToken = (token: Token): void => {
  localStorage.setItem(KEY, JSON.stringify(token))
}

// 创建 清除 token
export const clearToken = () => localStorage.removeItem(KEY)

// 创建 根据 token 判断是否登录
export const isAuth = () => !!getToken()
