import httpInstance from '../httpInstance';

interface ReqLogin {
  userId: string;
  password: string;
}

/*
  POST /api/auth/login
*/
export const reqLogin = async ({ userId, password }: ReqLogin) => {
  const data = await httpInstance.post('/api/auth/login', {
    userId,
    password,
  });

  return data;
};

/*
  GET /api/auth/check
  세션 만료에 대한 체크
*/
export const check = async () => {
  await httpInstance.get('/api/auth/check');
};

/*
  POST /api/auth/logout
*/
export const logout = async () => {
  await httpInstance.post('/api/auth/logout');
};
