import { LoginSchema } from "@/types";
import { GET, POST } from "../http";

const API = 'http://localhost:8000';
const url='/api/auth';

export async function getUser() {return await GET(`${API}${url}/me`);}

export async function login(
    payload: LoginSchema
) {
    return await POST(`${API}${url}/login`, payload);
};

export async function refreshAuth() {
    return await POST(`${API}${url}/refresh`);
}