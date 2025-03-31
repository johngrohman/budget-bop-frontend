// Time API Client

const url='/api/time/years-months';
const API = 'http://localhost:8000';

export async function getAllTime() {
    try {
        const response = await fetch(`${API}${url}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch years:', error);
        return ([]);
    }
}