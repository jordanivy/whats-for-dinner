export interface LocationSuggestions {
    has_more: number,
    has_total: number,
    location_suggestions: Object[],
    status: string
}

export interface LocationSuggestion {
    city_id: number,
    city_name: string,
    country_id: number,
    country_name: string,
    entity_id: number,
    entity_type: string,
    latitude: number,
    longitude: number,
    title: string
}