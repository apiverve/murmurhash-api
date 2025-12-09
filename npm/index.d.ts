declare module '@apiverve/murmurhash' {
  export interface murmurhashOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface murmurhashResponse {
    status: string;
    error: string | null;
    data: MurmurHashData;
    code?: number;
  }


  interface MurmurHashData {
      hash:    number;
      hashHex: string;
      variant: string;
      seed:    number;
  }

  export default class murmurhashWrapper {
    constructor(options: murmurhashOptions);

    execute(callback: (error: any, data: murmurhashResponse | null) => void): Promise<murmurhashResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: murmurhashResponse | null) => void): Promise<murmurhashResponse>;
    execute(query?: Record<string, any>): Promise<murmurhashResponse>;
  }
}
