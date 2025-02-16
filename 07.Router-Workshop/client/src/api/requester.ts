async function requester<T>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    url: string,
    data?: unknown
): Promise<T> {
    const headers: HeadersInit = {
        "Content-Type": "application/json",
    };

    const accessToken = localStorage.getItem("accessToken");

    // if (accessToken) {
    //     headers["X-Authorization"] =  accessToken;
    // }

    const options: RequestInit = {
        method,
        headers,
    };

    // Add content type for non-GET requests
    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}

export const get = <T>(url: string) => requester<T>("GET", url);
export const post = <T>(url: string, data: unknown) =>
    requester<T>("POST", url, data);
export const put = <T>(url: string, data: unknown) =>
    requester<T>("PUT", url, data);
export const del = <T>(url: string) => requester<T>("DELETE", url);
