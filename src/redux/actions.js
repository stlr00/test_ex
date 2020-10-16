import {CREATE_AD, DELETE_AD, GET_ADS} from "./types";

export function createAd(ad) {
    return {
        type: CREATE_AD,
        payload: ad
    }
}

export function getAds(ads) {
    return {
        type: GET_ADS,
        payload: ads
    }
}

export function delAd(adId) {
    return {
        type: DELETE_AD,
        payload: adId
    }
}
