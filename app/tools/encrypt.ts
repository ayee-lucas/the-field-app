import { hash, compare } from 'bcrypt';

export async function hashPassword(password: string) {
  try {
    return await hash(password, 10);
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function comparePassword(password: string, hashPass: string) {
  try {
    return await compare(password, hashPass);
  } catch (err) {
    console.log(err);
    return false;
  }
}
