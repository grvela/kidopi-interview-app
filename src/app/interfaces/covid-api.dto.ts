export interface CountryDTO {
    id: number;
    name: string;
}

export interface CovidInfoDTO{
    id: number;
    country: string;
    province: string;
    confirmed: number;
    deaths: number;
}