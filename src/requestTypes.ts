export namespace Types {
  export interface ExecuteQuery {
    name?: string;
    query?: string;
  }

  export interface ImportQuery {
    type: string;
    row: object[];
  }

  export interface ImportHeaderQuery {
    type: string;
  }

  export interface IssueSoQuery {
    soNumber: string;
  }

  export interface QuickShipQuery {
    soNumber: string;
    fulfillServiceItems?: boolean;
    errorIfNotFulfilled?: boolean;
    shipDate?: string;
  }

  export interface VoidSoQuery {
    soNumber: string;
  }

  export interface SendEmailQuery {
    email: string;
    reportName: string;
    reportTree: string;
    reportParams: object[];
  }
}
