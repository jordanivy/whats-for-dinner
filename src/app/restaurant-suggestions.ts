import { Restaurant } from "./restaurant";

export interface RestaurantSuggestions {
    results_found: number,
    results_start: number,
    results_shown: number,
    restaurants: Restaurant[]
}
