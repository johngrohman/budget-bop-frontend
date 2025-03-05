// Year API Client

const url = "/api/years";
const API = "http://localhost:8000";

interface Year {
  id: string;
  year: string;
}

/**
 * Get All Years
 * @returns array of years
 */
export async function getYears(): Promise<Year[]> {
    try {
        const response = await fetch(`${API}${url}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
    return await response.json();
    } catch (error) {
        console.error("Failed to fetch years:", error);
    return [];
    }
}

/**
 * Post Year
 * @returns year object that was created
 */
export async function createYear(year: Year): Promise<Year> {
    try {
        const response = await fetch(`${API}${url}`, {
            method: 'POST',
            body: JSON.stringify(year),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
    return await response.json();
    } catch (error) {
        console.error("Failed to fetch years:", error);
        return {id:'', year:''};
    }
}

/**
 * Get Year By Id
 * @param year_id 
 * @returns year
 */
export async function getYearById(year_id: Year['id']): Promise<Year> {
    try {
        const response = await fetch(`${API}${url}/${year_id}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch years:", error);
        return {id:'', year:''};
    }
}

/**
 * Patch Year By Id
 * @param year 
 * @returns 
 */
export async function patchYearById(year_id: Year['id'], year: Year['year']): Promise<Year> {
    try {
        const response = await fetch(`${API}${url}/${year_id}`, {
            method: 'PATCH',
            body: JSON.stringify(year),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch years:", error);
        return {id:'', year:''};
    }
}

/**
 * Delete Year By Id
 * @param year_id 
 * @returns 
 */
export async function deleteYear(year_id: Year['id']): Promise<{}> {
    try {
        const response = await fetch(`${API}${url}/${year_id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch years:", error);
        return {id:'', year:''};
    }
}

/**
 * Post Complete Year
 * @returns year object that was created
 */
export async function createCompleteYear(year: Year): Promise<Year> {
    try {
        const response = await fetch(`${API}${url}/complete`, {
            method: 'POST',
            body: JSON.stringify(year),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
    return await response.json();
    } catch (error) {
        console.error("Failed to fetch years:", error);
        return {id:'', year:''};
    }
}
