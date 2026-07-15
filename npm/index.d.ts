declare module '@apiverve/murmurhash' {
  export interface murmurhashOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface murmurhashResponse {
    status: string;
    error: string | null;
    data: MurmurHashData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface MurmurHashData {
      hash:    number | null;
      hashHex: null | string;
      variant: null | string;
      seed:    number | null;
  }

  export default class murmurhashWrapper {
    constructor(options: murmurhashOptions);

    execute(callback: (error: any, data: murmurhashResponse | null) => void): Promise<murmurhashResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: murmurhashResponse | null) => void): Promise<murmurhashResponse>;
    execute(query?: Record<string, any>): Promise<murmurhashResponse>;
  }
}
