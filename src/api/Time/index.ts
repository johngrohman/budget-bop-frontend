// Time API Client

import { GET } from "../http";

const url='/api/time/years-months';
const API = 'http://localhost:8000';

export async function getAllTime(accessToken: string) {return await GET(`${API}${url}`, accessToken)}