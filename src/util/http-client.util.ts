import * as querystring from 'query-string';

export namespace HttpClient {
    const fetchApi = window.fetch;

    export function Get(uri: string, reqOptions: {
        headers?: Headers,
        params?: HttpClientOptionParams,
        watch?: 'json' | 'text'
    } = {}) {
        return this.RawRequest(uri, {
            method: 'get',
            headers: reqOptions.headers,
            json: (!(reqOptions && reqOptions.watch !== 'json'))
        }, reqOptions.params);
    }

    export function Head(uri: string, reqOptions: {
        headers?: Headers,
        params?: HttpClientOptionParams,
        watch?: 'json' | 'text'
    } = {}) {
        return this.RawRequest(uri, {
            method: 'head',
            headers: reqOptions.headers,
            json: (!(reqOptions && reqOptions.watch !== 'json'))
        }, reqOptions.params);
    }

    export function Post(uri: string, reqOptions: {
        headers?: Headers,
        params?: HttpClientOptionParams,
        watch?: 'json' | 'text',
        body?: any
    } = {}) {
        return this.RawRequest(uri, {
            method: 'post',
            headers: reqOptions.headers,
            json: (!(reqOptions && reqOptions.watch !== 'json')),
            body: reqOptions.body
        }, reqOptions.params);
    }

    export function Put(uri: string, reqOptions: {
        headers?: Headers,
        params?: HttpClientOptionParams,
        watch?: 'json' | 'text',
        body?: any
    } = {}) {
        return this.RawRequest(uri, {
            method: 'put',
            headers: reqOptions.headers,
            json: (!(reqOptions && reqOptions.watch !== 'json')),
            body: reqOptions.body
        }, reqOptions.params);
    }

    export function Delete(uri: string, reqOptions: {
        headers?: Headers,
        params?: HttpClientOptionParams,
        watch?: 'json' | 'text',
        body?: any
    } = {}) {
        return this.RawRequest(uri, {
            method: 'delete',
            headers: reqOptions.headers,
            json: (!(reqOptions && reqOptions.watch !== 'json')),
            body: reqOptions.body
        }, reqOptions.params);
    }

    export function Connect(uri: string, reqOptions: {
        headers?: Headers,
        params?: HttpClientOptionParams,
        watch?: 'json' | 'text'
    } = {}) {
        return this.RawRequest(uri, {
            method: 'connect',
            headers: reqOptions.headers,
            json: (!(reqOptions && reqOptions.watch !== 'json'))
        }, reqOptions.params);
    }

    export function Options(uri: string, reqOptions: {
        headers?: Headers,
        params?: HttpClientOptionParams,
        watch?: 'json' | 'text'
    } = {}) {
        return this.RawRequest(uri, {
            method: 'options',
            headers: reqOptions.headers,
            json: (!(reqOptions && reqOptions.watch !== 'json'))
        }, reqOptions.params);
    }

    export function Patch(uri: string, reqOptions: {
        headers?: Headers,
        params?: HttpClientOptionParams,
        watch?: 'json' | 'text',
        body?: any
    } = {}) {
        return this.RawRequest(uri, {
            method: 'patch',
            headers: reqOptions.headers,
            json: (!(reqOptions && reqOptions.watch !== 'json')),
            body: reqOptions.body
        }, reqOptions.params);
    }

    export function RawRequest(uri: string, options: RequestInit & { json?: boolean }, queryParams: HttpClientOptionParams = {}) {
        let joint = '?';
        if (uri.match(/\?/) !== null) {
            joint = '&';
        }
        uri += joint + querystring.stringify(queryParams);
        const req = new Request(uri, options);
        return fetchApi(req)
            .then(x => {
                if (options && !(options.json)) {
                    return x.text();
                } else {
                    return x.json();
                }
            });
    }
}

export interface HttpClientOption {
    method: string;
}

export interface HttpClientOptionParams {
    [key: string]: string | number | boolean;
}