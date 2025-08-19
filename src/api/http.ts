/**
 * HTTP functions 
 */

/**
 * Send a get request
 * @param url string
 * @returns promise
 */
async function GET(url: string, access_token: string) {
    try {
        const response = await fetch (url,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                }
            }
        );
        return await response.json();
    } catch (error) {
        throw new Error('error')
    }
}

/**
 * Send a put request
 * @param url string
 * @param body object
 * @returns promise
 */
async function PUT(url: string, access_token: string, body: object) {
    try {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${access_token}`,
            },
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
async function PATCH(url: string, access_token: string, body: object) {
    try {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${access_token}`,
            },
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
async function POST(url: string, access_token: string, body: object) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${access_token}`,
            },
            body: JSON.stringify(body),

        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error('Failed to post');
    }
}

/**
 * Send a delete request
 * @param url string
 * @param body object
 * @returns promise
 */
async function DELETE(url: string, access_token: string, body: object | null) {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${access_token}`,
            },
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