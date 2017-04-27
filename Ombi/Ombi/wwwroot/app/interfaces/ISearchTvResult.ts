﻿export interface ISearchTvResult {
    id: number,
    seriesName: string,
    aliases: string[],
    banner: string,
    seriesId: number,
    status: string,
    firstAired: string,
    network: string,
    networkId: string,
    runtime: string,
    genre: string[],
    overview: string,
    lastUpdated: number,
    airsDayOfWeek: string,
    airsTime: string,
    rating: string,
    imdbId: string,
    siteRating: number,
    trailer: string,
    homepage:string,
    episodes:IEpisodeModel[],
}

export interface IEpisodeModel {
    seasonNumber: number,
    episodeNumber:number,
}