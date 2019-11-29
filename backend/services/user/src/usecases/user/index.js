import { createUser, getUserByEmail, getUserById } from 'data/user';
import { makeHandleUserLogin } from 'usecases/user/handle-user-login';

const handleUserLogin = makeHandleUserLogin({ createUser, getUserByEmail });

const byEmail = getUserByEmail;
const byId = getUserById;

export { createUser, byEmail, handleUserLogin, byId };
