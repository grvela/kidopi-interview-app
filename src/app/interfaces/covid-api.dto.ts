export interface CountryDTO {
    id: number;
    name: string;
}

export interface CovidInfoDTO{
    id: number;
    country: string;
    state: string;
    confirmed_cases: number;
    confirmed_deaths: number;
}