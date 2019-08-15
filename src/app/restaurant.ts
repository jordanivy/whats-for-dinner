export interface Restaurant {
    R: Object,
    all_reviews: Object[],
    all_reviews_count: number,
    apikey: string,
    average_cost_for_two: number,
    book_again_url: string,
    book_form_web_view_url: string,
    cuisines: string;
    currency: string,
    deeplink: string,
    establishment: string[],
    establishment_types: string[],
    events_url: string,
    featured_image: string,
    has_online_delivery: number,
    has_table_booking: number,
    highlights: string[],
    id: string,
    include_bogo_offers: boolean,
    is_book_form_web_view: boolean,
    is_delivering_now: boolean,
    is_table_reservation_supported: boolean,
    is_zomato_book_res: boolean,
    location: Object,
    menu_url: string,
    mezzo_provider: string,
    name: string,
    offers: string[],
    opentable_support: boolean,
    phone_numbers: string,
    photo_count: number,
    photos: Object[],
    photos_url: string,
    price_range: number,
    switch_to_order_menu: number,
    thumb: string,
    timings: string,
    url: string,
    user_rating: Object
}