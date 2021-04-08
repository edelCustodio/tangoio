export interface IStockData {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
}

export interface IApiResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IStockData[];
}