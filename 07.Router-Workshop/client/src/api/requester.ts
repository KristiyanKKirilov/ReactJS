async function requester<T>(method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, data?: unknown): Promise<T>{
    const options: RequestInit = {};

    if(method !== 'GET'){
        options.method = method;
    }

    if(data){
        options.headers = {
            'Content-Type' : 'application/json',
        };

        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const result = response.json();

    return result;
}

export const get = <T> (url:string) => requester<T>('GET', url);
export const post = <T> (url:string, data: unknown) => requester<T>('POST', url, data);
export const put = <T> (url:string, data: unknown) => requester<T>('PUT', url, data);
export const del = <T> (url:string) => requester<T>('DELETE', url);
