import { GET, POST } from "../http";

const API = 'http://localhost:8000';
const url='/api/user';

type UserInSchema = {
    username: string
    password: string
}

export async function getUser() {return await GET(`${API}${url}/me`)}

export async function Login(payload: UserInSchema) {return await POST(`${API}${url}/login`, payload)}