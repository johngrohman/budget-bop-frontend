import { LoginSchema } from "@/types";
import { GET, POST } from "../http";

const API = 'http://localhost:8000';
const url='/api/auth';

export async function getUser(access_token: string) {return await GET(`${API}${url}/me`, access_token)}

export async function login(
    payload: LoginSchema
) {
    return await POST(`${API}${url}/login`, '', payload);
};