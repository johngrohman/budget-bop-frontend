/**
 * HTTP functions 
 */

/**
 * Send a get request
 * @param url string
 * @returns promise
 */
async function GET(url: string) {
    try {
        const response = await fetch (
            url,
            {
                method: 'GET',
            }
        );
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to get: ', error);
        return error;
    }
}

/**
 * Send a put request
 * @param url string
 * @param body object
 * @returns promise
 */
async function PUT(url: string, body: object) {
    try {
        const response = await fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to patch: ', error);
        return ({});
    }
}

/**
 * Send a patch request
 * @param url string
 * @param body object
 * @returns promise
 */
async function PATCH(url: string, body: object) {
    try {
        const response = await fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to patch: ', error);
        return ({});
    }
}

/**
 * Send a post request
 * @param url string
 * @param body object
 * @returns promise
 */
async function POST(url: string, body: object) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to post: ', error);
        return ({});
    }
}

/**
 * Send a delete request
 * @param url string
 * @param body object
 * @returns promise
 */
async function DELETE(url: string, body: object | null) {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to delete: ', error);
        return ({});
    }
}

export {
    GET,
    POST,
    PUT,
    PATCH,
    DELETE,
};