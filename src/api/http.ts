/**
 * HTTP functions 
 */

import { refreshAuth } from "./Auth";

function getCookie(cookie: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${cookie}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
}

/**
 * Send a get request
 * @param url string
 * @returns promise
 */
async function GET(url: string, params: any = undefined) {
    const response = await fetch(
        `${url}${params? `?${new URLSearchParams(params).toString()}`:''}`, 
        {
            method: 'GET',
            credentials: 'include',
        }
    );
    if (!response.ok) {
        if (response.status === 401) {
            await refreshAuth()
            .then(async () => {
                return await GET(url, params)}
            )
        }
        throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
}

/**
 * Send a put request
 * @param url string
 * @param body object
 * @returns promise
 */
async function PUT(url: string, body: object) {
    const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(body),
        credentials: 'include',
        headers: {
            "X-CSRFToken": getCookie('csrftoken')!,
        }
    });
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
}

/**
 * Send a patch request
 * @param url string
 * @param body object
 * @returns promise
 */
async function PATCH(url: string,  body: object) {
    const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(body),
        credentials: 'include',
        headers: {
            "X-CSRFToken": getCookie('csrftoken')!,
        }
    });
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
}

/**
 * Send a post request
 * @param url string
 * @param body object
 * @returns promise
 */
async function POST(url: string,  body: object | null = null) {
    const response =  await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        credentials: 'include',
        headers: {
            "X-CSRFToken": getCookie('csrftoken')!,
        }
    });
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    return await response.json()
}

/**
 * Send a post request
 * @param url string
 * @param body object
 * @returns promise
 */
async function POSTFile(url: string,  body: BodyInit | null = null) {
    const response =  await fetch(url, {
        method: 'POST',
        body: body,
        credentials: 'include',
        headers: {
            "X-CSRFToken": getCookie('csrftoken')!,
        }
    });
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    return await response.json()
}

/**
 * Send a delete request
 * @param url string
 * @param body object
 * @returns promise
 */
async function DELETE(url: string,  body: object | null = null) {
    const response = await fetch(url, {
        method: 'DELETE',
        body: JSON.stringify(body),
        credentials: 'include',
        headers: {
            "X-CSRFToken": getCookie('csrftoken')!,
        }
    });
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
}

export {
    GET,
    POST,
    PUT,
    PATCH,
    DELETE,
    POSTFile
};