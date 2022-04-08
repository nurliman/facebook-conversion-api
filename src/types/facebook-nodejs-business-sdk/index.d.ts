// Type definitions for facebook-nodejs-business-sdk x.x
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Nurliman Diara <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class APIRequest {
    constructor(nodeId: any, method: any, endpoint: any);

    addField(field: any): any;

    addFields(fields: any): any;

    addFile(filePath: any): any;

    addFiles(filePaths: any): any;

    addParam(key: any, value: any): any;

    addParams(params: any): any;

}

export class APIResponse {
    constructor(response: any, call: any);

}

export class AbstractCrudObject {
    constructor(...args: any[]);

    clearHistory(): any;

    createEdge(endpoint: any, fields: any, ...args: any[]): any;

    delete(...args: any[]): any;

    deleteEdge(endpoint: any, ...args: any[]): any;

    exportAllData(): any;

    exportData(): any;

    getApi(): any;

    getEdge(targetClass: any, fields: any, ...args: any[]): any;

    getId(): any;

    getNodePath(): any;

    getParentId(): any;

    read(fields: any, ...args: any[]): any;

    setData(data: any): any;

    update(...args: any[]): any;

    static Fields: {
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Ad {
    constructor(...args: any[]);

    createAdLabel(fields: any, ...args: any[]): any;

    createCopy(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAdCreatives(fields: any, ...args: any[]): any;

    getAdRulesGoverned(fields: any, ...args: any[]): any;

    getCopies(fields: any, ...args: any[]): any;

    getInsights(fields: any, ...args: any[]): any;

    getInsightsAsync(fields: any, ...args: any[]): any;

    getLeads(fields: any, ...args: any[]): any;

    getPreviews(fields: any, ...args: any[]): any;

    getTargetingSentenceLines(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static BidType: {
        absolute_ocpm: string;
        cpa: string;
        cpc: string;
        cpm: string;
        multi_premium: string;
    };

    static ConfiguredStatus: {
        active: string;
        archived: string;
        deleted: string;
        paused: string;
    };

    static DatePreset: {
        data_maximum: string;
        last_14d: string;
        last_28d: string;
        last_30d: string;
        last_3d: string;
        last_7d: string;
        last_90d: string;
        last_month: string;
        last_quarter: string;
        last_week_mon_sun: string;
        last_week_sun_sat: string;
        last_year: string;
        maximum: string;
        this_month: string;
        this_quarter: string;
        this_week_mon_today: string;
        this_week_sun_today: string;
        this_year: string;
        today: string;
        yesterday: string;
    };

    static EffectiveStatus: {
        active: string;
        adset_paused: string;
        archived: string;
        campaign_paused: string;
        deleted: string;
        disapproved: string;
        in_process: string;
        paused: string;
        pending_billing_info: string;
        pending_review: string;
        preapproved: string;
        with_issues: string;
    };

    static ExecutionOptions: {
        include_recommendations: string;
        synchronous_ad_review: string;
        validate_only: string;
    };

    static Fields: {
        account_id: string;
        ad_review_feedback: string;
        adlabels: string;
        adset: string;
        adset_id: string;
        bid_amount: string;
        bid_info: string;
        bid_type: string;
        campaign: string;
        campaign_id: string;
        configured_status: string;
        conversion_domain: string;
        conversion_specs: string;
        created_time: string;
        creative: string;
        demolink_hash: string;
        display_sequence: string;
        effective_status: string;
        engagement_audience: string;
        failed_delivery_checks: string;
        id: string;
        issues_info: string;
        last_updated_by_app_id: string;
        name: string;
        preview_shareable_link: string;
        priority: string;
        recommendations: string;
        source_ad: string;
        source_ad_id: string;
        status: string;
        targeting: string;
        tracking_and_conversion_with_defaults: string;
        tracking_specs: string;
        updated_time: string;
    };

    static Operator: {
        all: string;
        any: string;
    };

    static Status: {
        active: string;
        archived: string;
        deleted: string;
        paused: string;
    };

    static StatusOption: {
        active: string;
        inherited_from_source: string;
        paused: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdAccount {
    constructor(...args: any[]);

    createAd(fields: any, ...args: any[]): any;

    createAdCreative(fields: any, ...args: any[]): any;

    createAdImage(fields: any, ...args: any[]): any;

    createAdLabel(fields: any, ...args: any[]): any;

    createAdPlacePageSet(fields: any, ...args: any[]): any;

    createAdPlacePageSetsAsync(fields: any, ...args: any[]): any;

    createAdPlayable(fields: any, ...args: any[]): any;

    createAdRulesLibrary(fields: any, ...args: any[]): any;

    createAdSet(fields: any, ...args: any[]): any;

    createAdVideo(fields: any, ...args: any[]): any;

    createAdsPixel(fields: any, ...args: any[]): any;

    createAssignedUser(fields: any, ...args: any[]): any;

    createAsyncAdRequestSet(fields: any, ...args: any[]): any;

    createAsyncBatchRequest(fields: any, ...args: any[]): any;

    createBlockListDraft(fields: any, ...args: any[]): any;

    createCampaign(fields: any, ...args: any[]): any;

    createCreateAndApplyPublisherBlockList(fields: any, ...args: any[]): any;

    createCustomAudience(fields: any, ...args: any[]): any;

    createCustomAudiencesTo(fields: any, ...args: any[]): any;

    createCustomConversion(fields: any, ...args: any[]): any;

    createManagedPartnerAd(fields: any, ...args: any[]): any;

    createProductAudience(fields: any, ...args: any[]): any;

    createPublisherBlockList(fields: any, ...args: any[]): any;

    createReachFrequencyPrediction(fields: any, ...args: any[]): any;

    createSubscribedApp(fields: any, ...args: any[]): any;

    createTracking(fields: any, ...args: any[]): any;

    deleteAdImages(...args: any[]): any;

    deleteAdVideos(...args: any[]): any;

    deleteAgencies(...args: any[]): any;

    deleteAssignedUsers(...args: any[]): any;

    deleteCampaigns(...args: any[]): any;

    deleteSubscribedApps(...args: any[]): any;

    deleteUsersOfAnyAudience(...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getActivities(fields: any, ...args: any[]): any;

    getAdCloudPlayables(fields: any, ...args: any[]): any;

    getAdCreatives(fields: any, ...args: any[]): any;

    getAdCreativesByLabels(fields: any, ...args: any[]): any;

    getAdImages(fields: any, ...args: any[]): any;

    getAdLabels(fields: any, ...args: any[]): any;

    getAdPlacePageSets(fields: any, ...args: any[]): any;

    getAdPlayables(fields: any, ...args: any[]): any;

    getAdRulesHistory(fields: any, ...args: any[]): any;

    getAdRulesLibrary(fields: any, ...args: any[]): any;

    getAdSets(fields: any, ...args: any[]): any;

    getAdSetsByLabels(fields: any, ...args: any[]): any;

    getAdStudies(fields: any, ...args: any[]): any;

    getAdVideos(fields: any, ...args: any[]): any;

    getAds(fields: any, ...args: any[]): any;

    getAdsByLabels(fields: any, ...args: any[]): any;

    getAdsPixels(fields: any, ...args: any[]): any;

    getAdsVolume(fields: any, ...args: any[]): any;

    getAdvertisableApplications(fields: any, ...args: any[]): any;

    getAffectedAdSets(fields: any, ...args: any[]): any;

    getAgencies(fields: any, ...args: any[]): any;

    getApplications(fields: any, ...args: any[]): any;

    getAssignedUsers(fields: any, ...args: any[]): any;

    getAsyncAdRequestSets(fields: any, ...args: any[]): any;

    getAsyncRequests(fields: any, ...args: any[]): any;

    getBroadTargetingCategories(fields: any, ...args: any[]): any;

    getCampaigns(fields: any, ...args: any[]): any;

    getCampaignsByLabels(fields: any, ...args: any[]): any;

    getConnectedInstagramAccounts(fields: any, ...args: any[]): any;

    getContentDeliveryReport(fields: any, ...args: any[]): any;

    getCustomAudiences(fields: any, ...args: any[]): any;

    getCustomAudiencesTos(fields: any, ...args: any[]): any;

    getCustomConversions(fields: any, ...args: any[]): any;

    getDeliveryEstimate(fields: any, ...args: any[]): any;

    getDeprecatedTargetingAdSets(fields: any, ...args: any[]): any;

    getGeneratePreviews(fields: any, ...args: any[]): any;

    getImpactingAdStudies(fields: any, ...args: any[]): any;

    getInsights(fields: any, ...args: any[]): any;

    getInsightsAsync(fields: any, ...args: any[]): any;

    getInstagramAccounts(fields: any, ...args: any[]): any;

    getIosFourteenCampaignLimits(fields: any, ...args: any[]): any;

    getMatchedSearchApplications(fields: any, ...args: any[]): any;

    getMaxBid(fields: any, ...args: any[]): any;

    getMinimumBudgets(fields: any, ...args: any[]): any;

    getOfflineConversionDataSets(fields: any, ...args: any[]): any;

    getOnBehalfRequests(fields: any, ...args: any[]): any;

    getPromotePages(fields: any, ...args: any[]): any;

    getPublisherBlockLists(fields: any, ...args: any[]): any;

    getReachEstimate(fields: any, ...args: any[]): any;

    getReachFrequencyPredictions(fields: any, ...args: any[]): any;

    getSavedAudiences(fields: any, ...args: any[]): any;

    getSubscribedApps(fields: any, ...args: any[]): any;

    getTargetingBrowse(fields: any, ...args: any[]): any;

    getTargetingSearch(fields: any, ...args: any[]): any;

    getTargetingSentenceLines(fields: any, ...args: any[]): any;

    getTargetingSuggestions(fields: any, ...args: any[]): any;

    getTargetingValidation(fields: any, ...args: any[]): any;

    getTracking(fields: any, ...args: any[]): any;

    getUsers(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static ClaimObjective: {
        automotive_model: string;
        collaborative_ads: string;
        home_listing: string;
        media_title: string;
        product: string;
        travel: string;
        vehicle: string;
        vehicle_offer: string;
    };

    static ContentType: {
        automotive_model: string;
        destination: string;
        flight: string;
        home_listing: string;
        hotel: string;
        job: string;
        local_service_business: string;
        location_based_item: string;
        media_title: string;
        offline_product: string;
        product: string;
        vehicle: string;
        vehicle_offer: string;
    };

    static Currency: {
        aed: string;
        ars: string;
        aud: string;
        bdt: string;
        bob: string;
        brl: string;
        cad: string;
        chf: string;
        clp: string;
        cny: string;
        cop: string;
        crc: string;
        czk: string;
        dkk: string;
        dzd: string;
        egp: string;
        eur: string;
        gbp: string;
        gtq: string;
        hkd: string;
        hnl: string;
        huf: string;
        idr: string;
        ils: string;
        inr: string;
        isk: string;
        jpy: string;
        kes: string;
        krw: string;
        mop: string;
        mxn: string;
        myr: string;
        ngn: string;
        nio: string;
        nok: string;
        nzd: string;
        pen: string;
        php: string;
        pkr: string;
        pln: string;
        pyg: string;
        qar: string;
        ron: string;
        sar: string;
        sek: string;
        sgd: string;
        thb: string;
        try: string;
        twd: string;
        uah: string;
        usd: string;
        uyu: string;
        vnd: string;
        zar: string;
    };

    static Fields: {
        account_id: string;
        account_status: string;
        ad_account_promotable_objects: string;
        age: string;
        agency_client_declaration: string;
        amount_spent: string;
        attribution_spec: string;
        balance: string;
        business: string;
        business_city: string;
        business_country_code: string;
        business_name: string;
        business_state: string;
        business_street: string;
        business_street2: string;
        business_zip: string;
        can_create_brand_lift_study: string;
        capabilities: string;
        created_time: string;
        currency: string;
        disable_reason: string;
        end_advertiser: string;
        end_advertiser_name: string;
        existing_customers: string;
        extended_credit_invoice_group: string;
        failed_delivery_checks: string;
        fb_entity: string;
        funding_source: string;
        funding_source_details: string;
        has_advertiser_opted_in_odax: string;
        has_migrated_permissions: string;
        has_page_authorized_adaccount: string;
        id: string;
        io_number: string;
        is_attribution_spec_system_default: string;
        is_direct_deals_enabled: string;
        is_in_3ds_authorization_enabled_market: string;
        is_notifications_enabled: string;
        is_personal: string;
        is_prepay_account: string;
        is_tax_id_required: string;
        line_numbers: string;
        media_agency: string;
        min_campaign_group_spend_cap: string;
        min_daily_budget: string;
        name: string;
        offsite_pixels_tos_accepted: string;
        owner: string;
        partner: string;
        rf_spec: string;
        show_checkout_experience: string;
        spend_cap: string;
        tax_id: string;
        tax_id_status: string;
        tax_id_type: string;
        timezone_id: string;
        timezone_name: string;
        timezone_offset_hours_utc: string;
        tos_accepted: string;
        user_tasks: string;
        user_tos_accepted: string;
    };

    static Subtype: {
        app: string;
        bag_of_accounts: string;
        claim: string;
        custom: string;
        engagement: string;
        fox: string;
        lookalike: string;
        managed: string;
        measurement: string;
        offline_conversion: string;
        partner: string;
        regulated_categories_audience: string;
        study_rule_audience: string;
        video: string;
        website: string;
    };

    static Tasks: {
        aa_analyze: string;
        advertise: string;
        analyze: string;
        draft: string;
        manage: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdAccountActivity {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        created_by: string;
        created_time: string;
        credit_new: string;
        credit_old: string;
        currency_new: string;
        currency_old: string;
        daily_spend_limit_new: string;
        daily_spend_limit_old: string;
        event_time: string;
        event_type: string;
        funding_id_new: string;
        funding_id_old: string;
        grace_period_time_new: string;
        grace_period_time_old: string;
        id: string;
        manager_id_new: string;
        manager_id_old: string;
        name_new: string;
        name_old: string;
        spend_cap_new: string;
        spend_cap_old: string;
        status_new: string;
        status_old: string;
        terms_new: string;
        terms_old: string;
        tier_new: string;
        tier_old: string;
        time_updated_new: string;
        time_updated_old: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdAsyncRequest {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    static Fields: {
        async_request_set: string;
        created_time: string;
        id: string;
        input: string;
        result: string;
        scope_object_id: string;
        status: string;
        type: string;
        updated_time: string;
    };

    static Statuses: {
        canceled: string;
        canceled_dependency: string;
        error: string;
        error_conflicts: string;
        error_dependency: string;
        in_progress: string;
        initial: string;
        pending_dependency: string;
        process_by_ad_async_engine: string;
        process_by_event_processor: string;
        success: string;
        user_canceled: string;
        user_canceled_dependency: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdAsyncRequestSet {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getRequests(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        canceled_count: string;
        created_time: string;
        error_count: string;
        id: string;
        in_progress_count: string;
        initial_count: string;
        is_completed: string;
        name: string;
        notification_mode: string;
        notification_result: string;
        notification_status: string;
        notification_uri: string;
        owner_id: string;
        success_count: string;
        total_count: string;
        updated_time: string;
    };

    static NotificationMode: {
        off: string;
        on_complete: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdCampaignActivity {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static BidStrategyNew: {
        cost_cap: string;
        lowest_cost_with_bid_cap: string;
        lowest_cost_without_cap: string;
    };

    static BidStrategyOld: {
        cost_cap: string;
        lowest_cost_with_bid_cap: string;
        lowest_cost_without_cap: string;
    };

    static BillingEventNew: {
        app_installs: string;
        clicks: string;
        impressions: string;
        link_clicks: string;
        listing_interaction: string;
        none: string;
        offer_claims: string;
        page_likes: string;
        post_engagement: string;
        purchase: string;
        thruplay: string;
    };

    static BillingEventOld: {
        app_installs: string;
        clicks: string;
        impressions: string;
        link_clicks: string;
        listing_interaction: string;
        none: string;
        offer_claims: string;
        page_likes: string;
        post_engagement: string;
        purchase: string;
        thruplay: string;
    };

    static Fields: {
        auto_create_lookalike_new: string;
        auto_create_lookalike_old: string;
        bid_adjustments_spec_new: string;
        bid_adjustments_spec_old: string;
        bid_amount_new: string;
        bid_amount_old: string;
        bid_constraints_new: string;
        bid_constraints_old: string;
        bid_info_new: string;
        bid_info_old: string;
        bid_strategy_new: string;
        bid_strategy_old: string;
        bid_type_new: string;
        bid_type_old: string;
        billing_event_new: string;
        billing_event_old: string;
        budget_limit_new: string;
        budget_limit_old: string;
        created_time: string;
        daily_impressions_new: string;
        daily_impressions_old: string;
        dco_mode_new: string;
        dco_mode_old: string;
        delivery_behavior_new: string;
        delivery_behavior_old: string;
        destination_type_new: string;
        destination_type_old: string;
        event_time: string;
        event_type: string;
        id: string;
        invoicing_limit_new: string;
        invoicing_limit_old: string;
        min_spend_target_new: string;
        min_spend_target_old: string;
        name_new: string;
        name_old: string;
        optimization_goal_new: string;
        optimization_goal_old: string;
        pacing_type_new: string;
        pacing_type_old: string;
        promoted_object_id_new: string;
        promoted_object_id_old: string;
        run_status_new: string;
        run_status_old: string;
        schedule_new: string;
        schedule_old: string;
        spend_cap_new: string;
        spend_cap_old: string;
        start_time_new: string;
        start_time_old: string;
        stop_time_new: string;
        stop_time_old: string;
        targeting_expansion_new: string;
        targeting_expansion_old: string;
        targeting_new: string;
        targeting_old: string;
        updated_time_new: string;
        updated_time_old: string;
    };

    static OptimizationGoalNew: {
        ad_recall_lift: string;
        app_installs: string;
        app_installs_and_offsite_conversions: string;
        conversations: string;
        derived_events: string;
        engaged_users: string;
        event_responses: string;
        impressions: string;
        in_app_value: string;
        landing_page_views: string;
        lead_generation: string;
        link_clicks: string;
        none: string;
        offsite_conversions: string;
        page_likes: string;
        post_engagement: string;
        quality_call: string;
        quality_lead: string;
        reach: string;
        thruplay: string;
        value: string;
        visit_instagram_profile: string;
    };

    static OptimizationGoalOld: {
        ad_recall_lift: string;
        app_installs: string;
        app_installs_and_offsite_conversions: string;
        conversations: string;
        derived_events: string;
        engaged_users: string;
        event_responses: string;
        impressions: string;
        in_app_value: string;
        landing_page_views: string;
        lead_generation: string;
        link_clicks: string;
        none: string;
        offsite_conversions: string;
        page_likes: string;
        post_engagement: string;
        quality_call: string;
        quality_lead: string;
        reach: string;
        thruplay: string;
        value: string;
        visit_instagram_profile: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdCampaignGroupActivity {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        budget_limit_new: string;
        budget_limit_old: string;
        buying_type_new: string;
        buying_type_old: string;
        event_time: string;
        event_type: string;
        id: string;
        is_autobid_new: string;
        is_autobid_old: string;
        is_average_price_pacing_new: string;
        is_average_price_pacing_old: string;
        name_new: string;
        name_old: string;
        objective_new: string;
        objective_old: string;
        pacing_type: string;
        run_status_new: string;
        run_status_old: string;
        spend_cap_new: string;
        spend_cap_old: string;
        time_created: string;
        time_updated_new: string;
        time_updated_old: string;
    };

    static ObjectiveNew: {
        app_installs: string;
        brand_awareness: string;
        canvas_app_engagement: string;
        canvas_app_installs: string;
        event_responses: string;
        lead_generation: string;
        link_clicks: string;
        local_awareness: string;
        messages: string;
        mobile_app_engagement: string;
        mobile_app_installs: string;
        none: string;
        offer_claims: string;
        page_likes: string;
        post_engagement: string;
        product_catalog_sales: string;
        video_views: string;
        website_conversions: string;
    };

    static ObjectiveOld: {
        app_installs: string;
        brand_awareness: string;
        canvas_app_engagement: string;
        canvas_app_installs: string;
        event_responses: string;
        lead_generation: string;
        link_clicks: string;
        local_awareness: string;
        messages: string;
        mobile_app_engagement: string;
        mobile_app_installs: string;
        none: string;
        offer_claims: string;
        page_likes: string;
        post_engagement: string;
        product_catalog_sales: string;
        video_views: string;
        website_conversions: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdCreative {
    constructor(...args: any[]);

    createAdLabel(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getCreativeInsights(fields: any, ...args: any[]): any;

    getPreviews(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static ApplinkTreatment: {
        automatic: string;
        deeplink_with_appstore_fallback: string;
        deeplink_with_web_fallback: string;
        web_only: string;
    };

    static AuthorizationCategory: {
        none: string;
        political: string;
    };

    static CallToActionType: {
        add_to_cart: string;
        apply_now: string;
        book_travel: string;
        buy: string;
        buy_now: string;
        buy_tickets: string;
        call: string;
        call_me: string;
        call_now: string;
        contact: string;
        contact_us: string;
        donate: string;
        donate_now: string;
        download: string;
        event_rsvp: string;
        find_a_group: string;
        find_your_groups: string;
        follow_news_storyline: string;
        follow_page: string;
        follow_user: string;
        get_directions: string;
        get_offer: string;
        get_offer_view: string;
        get_quote: string;
        get_showtimes: string;
        install_app: string;
        install_mobile_app: string;
        learn_more: string;
        like_page: string;
        listen_music: string;
        listen_now: string;
        message_page: string;
        mobile_download: string;
        moments: string;
        no_button: string;
        open_link: string;
        order_now: string;
        pay_to_access: string;
        play_game: string;
        play_game_on_facebook: string;
        purchase_gift_cards: string;
        record_now: string;
        refer_friends: string;
        request_time: string;
        say_thanks: string;
        see_more: string;
        sell_now: string;
        send_a_gift: string;
        send_gift_money: string;
        share: string;
        shop_now: string;
        sign_up: string;
        sotto_subscribe: string;
        start_order: string;
        subscribe: string;
        swipe_up_product: string;
        swipe_up_shop: string;
        update_app: string;
        use_app: string;
        use_mobile_app: string;
        video_annotation: string;
        video_call: string;
        visit_pages_feed: string;
        watch_more: string;
        watch_video: string;
        whatsapp_message: string;
        woodhenge_support: string;
    };

    static CategorizationCriteria: {
        brand: string;
        category: string;
        product_type: string;
    };

    static CategoryMediaSource: {
        category: string;
        mixed: string;
        products_collage: string;
        products_slideshow: string;
    };

    static DynamicAdVoice: {
        dynamic: string;
        story_owner: string;
    };

    static Fields: {
        account_id: string;
        actor_id: string;
        adlabels: string;
        applink_treatment: string;
        asset_feed_spec: string;
        authorization_category: string;
        auto_update: string;
        body: string;
        branded_content_sponsor_page_id: string;
        bundle_folder_id: string;
        call_to_action_type: string;
        categorization_criteria: string;
        category_media_source: string;
        collaborative_ads_lsb_image_bank_id: string;
        destination_set_id: string;
        dynamic_ad_voice: string;
        effective_authorization_category: string;
        effective_instagram_media_id: string;
        effective_instagram_story_id: string;
        effective_object_story_id: string;
        enable_direct_install: string;
        enable_launch_instant_app: string;
        id: string;
        image_crops: string;
        image_hash: string;
        image_url: string;
        instagram_actor_id: string;
        instagram_permalink_url: string;
        instagram_story_id: string;
        instagram_user_id: string;
        interactive_components_spec: string;
        link_deep_link_url: string;
        link_destination_display_url: string;
        link_og_id: string;
        link_url: string;
        messenger_sponsored_message: string;
        name: string;
        object_id: string;
        object_store_url: string;
        object_story_id: string;
        object_story_spec: string;
        object_type: string;
        object_url: string;
        omnichannel_link_spec: string;
        place_page_set_id: string;
        platform_customizations: string;
        playable_asset_id: string;
        portrait_customizations: string;
        product_set_id: string;
        recommender_settings: string;
        source_instagram_media_id: string;
        status: string;
        template_url: string;
        template_url_spec: string;
        thumbnail_id: string;
        thumbnail_url: string;
        title: string;
        url_tags: string;
        use_page_actor_override: string;
        video_id: string;
    };

    static InstantCheckoutSetting: {
        off: string;
        on: string;
    };

    static ObjectType: {
        application: string;
        domain: string;
        event: string;
        invalid: string;
        offer: string;
        page: string;
        photo: string;
        post_deleted: string;
        privacy_check_fail: string;
        share: string;
        status: string;
        store_item: string;
        video: string;
    };

    static Operator: {
        all: string;
        any: string;
    };

    static Status: {
        active: string;
        deleted: string;
        in_process: string;
        with_issues: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdImage {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        account_id: string;
        created_time: string;
        creatives: string;
        hash: string;
        height: string;
        id: string;
        is_associated_creatives_in_adgroups: string;
        name: string;
        original_height: string;
        original_width: string;
        permalink_url: string;
        status: string;
        updated_time: string;
        url: string;
        url_128: string;
        width: string;
    };

    static Status: {
        active: string;
        deleted: string;
        internal: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdLabel {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAdCreatives(fields: any, ...args: any[]): any;

    getAdSets(fields: any, ...args: any[]): any;

    getAds(fields: any, ...args: any[]): any;

    getCampaigns(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        account: string;
        created_time: string;
        id: string;
        name: string;
        updated_time: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdMonetizationProperty {
    constructor(...args: any[]);

    createAdNetworkAnalytic(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAdNetworkAnalytics(fields: any, ...args: any[]): any;

    getAdNetworkAnalyticsResults(fields: any, ...args: any[]): any;

    static Fields: {
        id: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdPlacePageSet {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        account_id: string;
        id: string;
        location_types: string;
        name: string;
        pages_count: string;
        parent_page: string;
    };

    static LocationTypes: {
        home: string;
        recent: string;
    };

    static TargetedAreaType: {
        custom_radius: string;
        marketing_area: string;
        none: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdPlacement {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        bundle_id: string;
        display_format: string;
        external_placement_id: string;
        google_display_format: string;
        id: string;
        name: string;
        platform: string;
        status: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdReportRun {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getInsights(fields: any, ...args: any[]): any;

    static Fields: {
        account_id: string;
        async_percent_completion: string;
        async_status: string;
        date_start: string;
        date_stop: string;
        emails: string;
        friendly_name: string;
        id: string;
        is_bookmarked: string;
        is_running: string;
        schedule_id: string;
        time_completed: string;
        time_ref: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdRule {
    constructor(...args: any[]);

    createExecute(fields: any, ...args: any[]): any;

    createPreview(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getHistory(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        account_id: string;
        created_by: string;
        created_time: string;
        evaluation_spec: string;
        execution_spec: string;
        id: string;
        name: string;
        schedule_spec: string;
        status: string;
        updated_time: string;
    };

    static Status: {
        deleted: string;
        disabled: string;
        enabled: string;
        has_issues: string;
    };

    static UiCreationSource: {
        am_account_overview_recommendations: string;
        am_activity_history_table: string;
        am_ad_object_name_card: string;
        am_amfe_l3_recommendation: string;
        am_editor_card: string;
        am_info_card: string;
        am_mid_flight_resolution_card: string;
        am_name_cell_dropdown: string;
        am_performance_summary: string;
        am_rule_landing_page_banner: string;
        am_toolbar_create_rule_dropdown: string;
        pe_campaign_structure_menu: string;
        pe_editor_card: string;
        pe_info_card: string;
        pe_toolbar_create_rule_dropdown: string;
        rule_creation_success_dialog: string;
        rule_syd_redirect: string;
        rule_templates_dialog: string;
        rules_management_page_action_dropdown: string;
        rules_management_page_rule_group: string;
        rules_management_page_rule_name: string;
        rules_management_page_top_nav: string;
        rules_view_active_rules_dialog: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdRuleEvaluationSpec {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static EvaluationType: {
        schedule: string;
        trigger: string;
    };

    static Fields: {
        evaluation_type: string;
        filters: string;
        id: string;
        trigger: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdRuleExecutionSpec {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static ExecutionType: {
        add_interest_relaxation: string;
        add_questionnaire_interests: string;
        audience_consolidation: string;
        change_bid: string;
        change_budget: string;
        change_campaign_budget: string;
        increase_radius: string;
        notification: string;
        pause: string;
        ping_endpoint: string;
        rebalance_budget: string;
        rotate: string;
        unpause: string;
        update_creative: string;
        update_lax_budget: string;
        update_lax_duration: string;
    };

    static Fields: {
        execution_options: string;
        execution_type: string;
        id: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdSet {
    constructor(...args: any[]);

    createAdLabel(fields: any, ...args: any[]): any;

    createCopy(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    deleteAdLabels(...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getActivities(fields: any, ...args: any[]): any;

    getAdCreatives(fields: any, ...args: any[]): any;

    getAdRulesGoverned(fields: any, ...args: any[]): any;

    getAdStudies(fields: any, ...args: any[]): any;

    getAds(fields: any, ...args: any[]): any;

    getAsyncAdRequests(fields: any, ...args: any[]): any;

    getContentDeliveryReport(fields: any, ...args: any[]): any;

    getCopies(fields: any, ...args: any[]): any;

    getDeliveryEstimate(fields: any, ...args: any[]): any;

    getInsights(fields: any, ...args: any[]): any;

    getInsightsAsync(fields: any, ...args: any[]): any;

    getTargetingSentenceLines(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static BidStrategy: {
        cost_cap: string;
        lowest_cost_with_bid_cap: string;
        lowest_cost_without_cap: string;
    };

    static BillingEvent: {
        app_installs: string;
        clicks: string;
        impressions: string;
        link_clicks: string;
        listing_interaction: string;
        none: string;
        offer_claims: string;
        page_likes: string;
        post_engagement: string;
        purchase: string;
        thruplay: string;
    };

    static ConfiguredStatus: {
        active: string;
        archived: string;
        deleted: string;
        paused: string;
    };

    static DatePreset: {
        data_maximum: string;
        last_14d: string;
        last_28d: string;
        last_30d: string;
        last_3d: string;
        last_7d: string;
        last_90d: string;
        last_month: string;
        last_quarter: string;
        last_week_mon_sun: string;
        last_week_sun_sat: string;
        last_year: string;
        maximum: string;
        this_month: string;
        this_quarter: string;
        this_week_mon_today: string;
        this_week_sun_today: string;
        this_year: string;
        today: string;
        yesterday: string;
    };

    static DestinationType: {
        app: string;
        applinks_automatic: string;
        facebook: string;
        messenger: string;
        undefined: string;
        website: string;
    };

    static EffectiveStatus: {
        active: string;
        archived: string;
        campaign_paused: string;
        deleted: string;
        in_process: string;
        paused: string;
        with_issues: string;
    };

    static ExecutionOptions: {
        include_recommendations: string;
        validate_only: string;
    };

    static Fields: {
        account_id: string;
        adlabels: string;
        adset_schedule: string;
        asset_feed_id: string;
        attribution_spec: string;
        bid_adjustments: string;
        bid_amount: string;
        bid_constraints: string;
        bid_info: string;
        bid_strategy: string;
        billing_event: string;
        budget_remaining: string;
        campaign: string;
        campaign_id: string;
        configured_status: string;
        created_time: string;
        creative_sequence: string;
        daily_budget: string;
        daily_min_spend_target: string;
        daily_spend_cap: string;
        destination_type: string;
        effective_status: string;
        end_time: string;
        existing_customer_budget_percentage: string;
        frequency_control_specs: string;
        full_funnel_exploration_mode: string;
        id: string;
        instagram_actor_id: string;
        is_dynamic_creative: string;
        issues_info: string;
        learning_stage_info: string;
        lifetime_budget: string;
        lifetime_imps: string;
        lifetime_min_spend_target: string;
        lifetime_spend_cap: string;
        multi_optimization_goal_weight: string;
        name: string;
        optimization_goal: string;
        optimization_sub_event: string;
        pacing_type: string;
        promoted_object: string;
        recommendations: string;
        recurring_budget_semantics: string;
        review_feedback: string;
        rf_prediction_id: string;
        source_adset: string;
        source_adset_id: string;
        start_time: string;
        status: string;
        targeting: string;
        targeting_optimization_types: string;
        time_based_ad_rotation_id_blocks: string;
        time_based_ad_rotation_intervals: string;
        updated_time: string;
        use_new_app_click: string;
    };

    static FullFunnelExplorationMode: {
        extended_exploration: string;
        limited_exploration: string;
        none_exploration: string;
    };

    static MultiOptimizationGoalWeight: {
        balanced: string;
        prefer_event: string;
        prefer_install: string;
        undefined: string;
    };

    static Operator: {
        all: string;
        any: string;
    };

    static OptimizationGoal: {
        ad_recall_lift: string;
        app_installs: string;
        app_installs_and_offsite_conversions: string;
        conversations: string;
        derived_events: string;
        engaged_users: string;
        event_responses: string;
        impressions: string;
        in_app_value: string;
        landing_page_views: string;
        lead_generation: string;
        link_clicks: string;
        none: string;
        offsite_conversions: string;
        page_likes: string;
        post_engagement: string;
        quality_call: string;
        quality_lead: string;
        reach: string;
        thruplay: string;
        value: string;
        visit_instagram_profile: string;
    };

    static OptimizationSubEvent: {
        none: string;
        travel_intent: string;
        travel_intent_bucket_01: string;
        travel_intent_bucket_02: string;
        travel_intent_bucket_03: string;
        travel_intent_bucket_04: string;
        travel_intent_bucket_05: string;
        travel_intent_no_destination_intent: string;
        trip_consideration: string;
        video_sound_on: string;
    };

    static Status: {
        active: string;
        archived: string;
        deleted: string;
        paused: string;
    };

    static StatusOption: {
        active: string;
        inherited_from_source: string;
        paused: string;
    };

    static TuneForCategory: {
        credit: string;
        employment: string;
        housing: string;
        issues_elections_politics: string;
        none: string;
        online_gambling_and_gaming: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdStudy {
    constructor(...args: any[]);

    createInstance(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getCells(fields: any, ...args: any[]): any;

    getInstances(fields: any, ...args: any[]): any;

    getObjectives(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        business: string;
        canceled_time: string;
        cooldown_start_time: string;
        created_by: string;
        created_time: string;
        description: string;
        end_time: string;
        id: string;
        name: string;
        observation_end_time: string;
        results_first_available_date: string;
        start_time: string;
        type: string;
        updated_by: string;
        updated_time: string;
    };

    static Type: {
        continuous_lift_config: string;
        geo_lift: string;
        lift: string;
        split_test: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdStudyCell {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAdAccounts(fields: any, ...args: any[]): any;

    getAdSets(fields: any, ...args: any[]): any;

    getCampaigns(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static CreationTemplate: {
        automatic_placements: string;
        brand_awareness: string;
        facebook: string;
        facebook_audience_network: string;
        facebook_instagram: string;
        facebook_news_feed: string;
        facebook_news_feed_in_stream_video: string;
        high_frequency: string;
        in_stream_video: string;
        instagram: string;
        low_frequency: string;
        medium_frequency: string;
        mobile_optimized_video: string;
        page_post_engagement: string;
        reach: string;
        tv_commercial: string;
        tv_facebook: string;
        video_view_optimization: string;
    };

    static Fields: {
        ad_entities_count: string;
        control_percentage: string;
        id: string;
        name: string;
        treatment_percentage: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdStudyObjective {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getAdsPixels(fields: any, ...args: any[]): any;

    getApplications(fields: any, ...args: any[]): any;

    getCustomConversions(fields: any, ...args: any[]): any;

    getOfflineConversionDataSets(fields: any, ...args: any[]): any;

    getPartnerStudies(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        id: string;
        is_primary: string;
        last_updated_results: string;
        name: string;
        results: string;
        type: string;
    };

    static Type: {
        brand: string;
        brandlift: string;
        conversions: string;
        ftl: string;
        mae: string;
        mai: string;
        mpc_conversion: string;
        nonsales: string;
        partner: string;
        sales: string;
        telco: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdVideo {
    constructor(...args: any[]);

    create(batch: any, failureHandler: any, successHandler: any): any;

    getThumbnails(fields: any, params: any): any;

    waitUntilEncodingReady(...args: any[]): void;

    static Fields: {
        filepath: string;
        id: string;
        slideshow_spec: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdgroupActivity {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        ad_creative_id_new: string;
        ad_creative_id_old: string;
        asset_feed_id_new: string;
        asset_feed_id_old: string;
        bid_amount_new: string;
        bid_amount_old: string;
        bid_info_new: string;
        bid_info_old: string;
        bid_type_new: string;
        bid_type_old: string;
        conversion_specs_new: string;
        conversion_specs_old: string;
        created_time: string;
        display_sequence_new: string;
        display_sequence_old: string;
        engagement_audience_new: string;
        engagement_audience_old: string;
        event_time: string;
        event_type: string;
        force_run_status_new: string;
        force_run_status_old: string;
        friendly_name_new: string;
        friendly_name_old: string;
        id: string;
        is_reviewer_admin_new: string;
        is_reviewer_admin_old: string;
        objective_new: string;
        objective_old: string;
        objective_source_new: string;
        objective_source_old: string;
        priority_new: string;
        priority_old: string;
        reason_new: string;
        reason_old: string;
        run_status_new: string;
        run_status_old: string;
        source_adgroup_id_new: string;
        source_adgroup_id_old: string;
        start_time_new: string;
        start_time_old: string;
        stop_time_new: string;
        stop_time_old: string;
        target_spec_id_new: string;
        target_spec_id_old: string;
        targets_spec_new: string;
        targets_spec_old: string;
        tracking_specs_new: string;
        tracking_specs_old: string;
        update_time_new: string;
        update_time_old: string;
        view_tags_new: string;
        view_tags_old: string;
    };

    static ObjectiveNew: {
        app_installs: string;
        brand_awareness: string;
        canvas_app_engagement: string;
        canvas_app_installs: string;
        event_responses: string;
        lead_generation: string;
        link_clicks: string;
        local_awareness: string;
        messages: string;
        mobile_app_engagement: string;
        mobile_app_installs: string;
        none: string;
        offer_claims: string;
        page_likes: string;
        post_engagement: string;
        product_catalog_sales: string;
        video_views: string;
        website_conversions: string;
    };

    static ObjectiveOld: {
        app_installs: string;
        brand_awareness: string;
        canvas_app_engagement: string;
        canvas_app_installs: string;
        event_responses: string;
        lead_generation: string;
        link_clicks: string;
        local_awareness: string;
        messages: string;
        mobile_app_engagement: string;
        mobile_app_installs: string;
        none: string;
        offer_claims: string;
        page_likes: string;
        post_engagement: string;
        product_catalog_sales: string;
        video_views: string;
        website_conversions: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdoptablePet {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getAugmentedRealitiesMetadata(fields: any, ...args: any[]): any;

    getChannelsToIntegrityStatus(fields: any, ...args: any[]): any;

    getVideosMetadata(fields: any, ...args: any[]): any;

    static Fields: {
        address: string;
        adoptable_pet_id: string;
        adoption_application_form_url: string;
        age_bucket: string;
        animal_type: string;
        applinks: string;
        availability: string;
        breed: string;
        category_specific_fields: string;
        coat_length: string;
        color: string;
        currency: string;
        description: string;
        features: string;
        gender: string;
        id: string;
        image_fetch_status: string;
        images: string;
        name: string;
        price: string;
        sanitized_images: string;
        secondary_color: string;
        shelter_email: string;
        shelter_name: string;
        shelter_page_id: string;
        shelter_phone: string;
        size: string;
        tertiary_color: string;
        unit_price: string;
        url: string;
    };

    static ImageFetchStatus: {
        direct_upload: string;
        fetch_failed: string;
        fetched: string;
        no_status: string;
        outdated: string;
        partial_fetch: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AdsPixel {
    constructor(...args: any[]);

    createAssignedUser(fields: any, ...args: any[]): any;

    createEvent(fields: any, ...args: any[]): any;

    createShadowTrafficHelper(fields: any, ...args: any[]): any;

    createSharedAccount(fields: any, ...args: any[]): any;

    createTelemetry(fields: any, ...args: any[]): any;

    deleteSharedAccounts(...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAssignedUsers(fields: any, ...args: any[]): any;

    getDaChecks(fields: any, ...args: any[]): any;

    getSharedAccounts(fields: any, ...args: any[]): any;

    getSharedAgencies(fields: any, ...args: any[]): any;

    getStats(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static AutomaticMatchingFields: {
        country: string;
        ct: string;
        db: string;
        em: string;
        external_id: string;
        fn: string;
        ge: string;
        ln: string;
        ph: string;
        st: string;
        zp: string;
    };

    static DataUseSetting: {
        advertising_and_analytics: string;
        analytics_only: string;
        empty: string;
    };

    static Fields: {
        automatic_matching_fields: string;
        can_proxy: string;
        code: string;
        creation_time: string;
        creator: string;
        data_use_setting: string;
        enable_automatic_matching: string;
        first_party_cookie_status: string;
        id: string;
        is_created_by_business: string;
        is_crm: string;
        is_unavailable: string;
        last_fired_time: string;
        name: string;
        owner_ad_account: string;
        owner_business: string;
    };

    static FirstPartyCookieStatus: {
        empty: string;
        first_party_cookie_disabled: string;
        first_party_cookie_enabled: string;
    };

    static SortBy: {
        last_fired_time: string;
        name: string;
    };

    static Tasks: {
        aa_analyze: string;
        advertise: string;
        analyze: string;
        edit: string;
        upload: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Album {
    constructor(...args: any[]);

    createComment(fields: any, ...args: any[]): any;

    createLike(fields: any, ...args: any[]): any;

    createPhoto(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getComments(fields: any, ...args: any[]): any;

    getLikes(fields: any, ...args: any[]): any;

    getPhotos(fields: any, ...args: any[]): any;

    getPicture(fields: any, ...args: any[]): any;

    static Fields: {
        backdated_time: string;
        backdated_time_granularity: string;
        can_backdate: string;
        can_upload: string;
        count: string;
        cover_photo: string;
        created_time: string;
        description: string;
        edit_link: string;
        event: string;
        from: string;
        id: string;
        is_user_facing: string;
        link: string;
        location: string;
        modified_major: string;
        name: string;
        photo_count: string;
        place: string;
        privacy: string;
        type: string;
        updated_time: string;
        video_count: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AppRequest {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    static Fields: {
        action_type: string;
        application: string;
        created_time: string;
        data: string;
        from: string;
        id: string;
        message: string;
        object: string;
        to: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Application {
    constructor(...args: any[]);

    createAccount(fields: any, ...args: any[]): any;

    createActivity(fields: any, ...args: any[]): any;

    createAdNetworkAnalytic(fields: any, ...args: any[]): any;

    createAemConversion(fields: any, ...args: any[]): any;

    createAemSkanReadiness(fields: any, ...args: any[]): any;

    createAggregateRevenue(fields: any, ...args: any[]): any;

    createAppIndexing(fields: any, ...args: any[]): any;

    createAppIndexingSession(fields: any, ...args: any[]): any;

    createAppPushDeviceToken(fields: any, ...args: any[]): any;

    createAsset(fields: any, ...args: any[]): any;

    createCodelessEventMapping(fields: any, ...args: any[]): any;

    createInsightsPushSchedule(fields: any, ...args: any[]): any;

    createLeaderboardsCreate(fields: any, ...args: any[]): any;

    createLeaderboardsDeleteEntry(fields: any, ...args: any[]): any;

    createLeaderboardsReset(fields: any, ...args: any[]): any;

    createMmpAuditing(fields: any, ...args: any[]): any;

    createMonetizedDigitalStoreObject(fields: any, ...args: any[]): any;

    createOccludesPopup(fields: any, ...args: any[]): any;

    createPageActivity(fields: any, ...args: any[]): any;

    createPaymentCurrency(fields: any, ...args: any[]): any;

    createSubscribedDomain(fields: any, ...args: any[]): any;

    createSubscribedDomainsPhishing(fields: any, ...args: any[]): any;

    createSubscription(fields: any, ...args: any[]): any;

    createUpload(fields: any, ...args: any[]): any;

    createUserProperty(fields: any, ...args: any[]): any;

    deleteAccounts(...args: any[]): any;

    deleteBanned(...args: any[]): any;

    deleteSubscriptions(...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAccounts(fields: any, ...args: any[]): any;

    getAdNetworkAnalytics(fields: any, ...args: any[]): any;

    getAdNetworkAnalyticsResults(fields: any, ...args: any[]): any;

    getAdNetworkPlacements(fields: any, ...args: any[]): any;

    getAemConversionConfigs(fields: any, ...args: any[]): any;

    getAemConversionFilter(fields: any, ...args: any[]): any;

    getAgencies(fields: any, ...args: any[]): any;

    getAndroidDialogConfigs(fields: any, ...args: any[]): any;

    getAppAssets(fields: any, ...args: any[]): any;

    getAppEventTypes(fields: any, ...args: any[]): any;

    getAppInstalledGroups(fields: any, ...args: any[]): any;

    getAuthorizedAdAccounts(fields: any, ...args: any[]): any;

    getButtonAutoDetectionDeviceSelection(fields: any, ...args: any[]): any;

    getCloudbridgeSettings(fields: any, ...args: any[]): any;

    getDaChecks(fields: any, ...args: any[]): any;

    getEvents(fields: any, ...args: any[]): any;

    getInsightsPushSchedule(fields: any, ...args: any[]): any;

    getIosDialogConfigs(fields: any, ...args: any[]): any;

    getMobileSdkGk(fields: any, ...args: any[]): any;

    getPermissions(fields: any, ...args: any[]): any;

    getProducts(fields: any, ...args: any[]): any;

    getPurchases(fields: any, ...args: any[]): any;

    getRoles(fields: any, ...args: any[]): any;

    getSubscribedDomains(fields: any, ...args: any[]): any;

    getSubscribedDomainsPhishing(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static AnPlatforms: {
        android: string;
        desktop: string;
        galaxy: string;
        instant_articles: string;
        ios: string;
        mobile_web: string;
        oculus: string;
        unknown: string;
        xiaomi: string;
    };

    static Fields: {
        aam_rules: string;
        an_ad_space_limit: string;
        an_platforms: string;
        android_key_hash: string;
        android_sdk_error_categories: string;
        app_domains: string;
        app_events_config: string;
        app_events_feature_bitmask: string;
        app_events_session_timeout: string;
        app_install_tracked: string;
        app_name: string;
        app_signals_binding_ios: string;
        app_type: string;
        auth_dialog_data_help_url: string;
        auth_dialog_headline: string;
        auth_dialog_perms_explanation: string;
        auth_referral_default_activity_privacy: string;
        auth_referral_enabled: string;
        auth_referral_extended_perms: string;
        auth_referral_friend_perms: string;
        auth_referral_response_type: string;
        auth_referral_user_perms: string;
        auto_event_mapping_android: string;
        auto_event_mapping_ios: string;
        auto_event_setup_enabled: string;
        canvas_fluid_height: string;
        canvas_fluid_width: string;
        canvas_url: string;
        category: string;
        client_config: string;
        company: string;
        configured_ios_sso: string;
        contact_email: string;
        created_time: string;
        creator_uid: string;
        daily_active_users: string;
        daily_active_users_rank: string;
        deauth_callback_url: string;
        default_share_mode: string;
        description: string;
        financial_id: string;
        gdpv4_chrome_custom_tabs_enabled: string;
        gdpv4_enabled: string;
        gdpv4_nux_content: string;
        gdpv4_nux_enabled: string;
        has_messenger_product: string;
        hosting_url: string;
        icon_url: string;
        id: string;
        ios_bundle_id: string;
        ios_sdk_dialog_flows: string;
        ios_sdk_error_categories: string;
        ios_sfvc_attr: string;
        ios_supports_native_proxy_auth_flow: string;
        ios_supports_system_auth: string;
        ipad_app_store_id: string;
        iphone_app_store_id: string;
        latest_sdk_version: string;
        link: string;
        logging_token: string;
        login_secret: string;
        logo_url: string;
        migrations: string;
        mobile_profile_section_url: string;
        mobile_web_url: string;
        monthly_active_users: string;
        monthly_active_users_rank: string;
        name: string;
        namespace: string;
        object_store_urls: string;
        page_tab_default_name: string;
        page_tab_url: string;
        photo_url: string;
        privacy_policy_url: string;
        profile_section_url: string;
        property_id: string;
        real_time_mode_devices: string;
        restrictions: string;
        restrictive_data_filter_params: string;
        restrictive_data_filter_rules: string;
        sdk_update_message: string;
        seamless_login: string;
        secure_canvas_url: string;
        secure_page_tab_url: string;
        server_ip_whitelist: string;
        smart_login_bookmark_icon_url: string;
        smart_login_menu_icon_url: string;
        social_discovery: string;
        subcategory: string;
        suggested_events_setting: string;
        supported_platforms: string;
        supports_apprequests_fast_app_switch: string;
        supports_attribution: string;
        supports_implicit_sdk_logging: string;
        suppress_native_ios_gdp: string;
        terms_of_service_url: string;
        url_scheme_suffix: string;
        user_support_email: string;
        user_support_url: string;
        website_url: string;
        weekly_active_users: string;
    };

    static LoggingSource: {
        messenger_bot: string;
    };

    static LoggingTarget: {
        app: string;
        app_and_page: string;
        page: string;
    };

    static MutationMethod: {
        add: string;
        delete: string;
        replace: string;
    };

    static Platform: {
        android: string;
        ios: string;
    };

    static PostMethod: {
        codeless: string;
        eymt: string;
    };

    static RequestType: {
        app_indexing: string;
        button_sampling: string;
        plugin: string;
    };

    static ScoreType: {
        custom: string;
        numeric: string;
        time: string;
    };

    static SortOrder: {
        higher_is_better: string;
        lower_is_better: string;
    };

    static SupportedPlatforms: {
        amazon: string;
        android: string;
        canvas: string;
        gameroom: string;
        instant_game: string;
        ipad: string;
        iphone: string;
        mobile_web: string;
        oculus: string;
        samsung: string;
        supplementary_images: string;
        web: string;
        windows: string;
        xiaomi: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AsyncSession {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        app: string;
        complete_time: string;
        error_code: string;
        exception: string;
        id: string;
        method: string;
        name: string;
        page: string;
        percent_completed: string;
        platform_version: string;
        result: string;
        start_time: string;
        status: string;
        uri: string;
        user: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AudioCopyright {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        creation_time: string;
        displayed_matches_count: string;
        id: string;
        in_conflict: string;
        isrc: string;
        match_rule: string;
        ownership_countries: string;
        reference_file_status: string;
        ridge_monitoring_status: string;
        tags: string;
        update_time: string;
        whitelisted_fb_users: string;
        whitelisted_ig_users: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class AutomotiveModel {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getAugmentedRealitiesMetadata(fields: any, ...args: any[]): any;

    getChannelsToIntegrityStatus(fields: any, ...args: any[]): any;

    getVideosMetadata(fields: any, ...args: any[]): any;

    static BodyStyle: {
        convertible: string;
        coupe: string;
        crossover: string;
        estate: string;
        grandtourer: string;
        hatchback: string;
        minibus: string;
        minivan: string;
        mpv: string;
        none: string;
        other: string;
        pickup: string;
        roadster: string;
        saloon: string;
        sedan: string;
        small_car: string;
        sportscar: string;
        supercar: string;
        supermini: string;
        suv: string;
        truck: string;
        van: string;
        wagon: string;
    };

    static Fields: {
        applinks: string;
        automotive_model_id: string;
        availability: string;
        body_style: string;
        category_specific_fields: string;
        currency: string;
        custom_label_0: string;
        description: string;
        drivetrain: string;
        exterior_color: string;
        finance_description: string;
        finance_type: string;
        fuel_type: string;
        generation: string;
        id: string;
        image_fetch_status: string;
        images: string;
        interior_color: string;
        interior_upholstery: string;
        make: string;
        model: string;
        price: string;
        sanitized_images: string;
        title: string;
        transmission: string;
        trim: string;
        unit_price: string;
        url: string;
        year: string;
    };

    static ImageFetchStatus: {
        direct_upload: string;
        fetch_failed: string;
        fetched: string;
        no_status: string;
        outdated: string;
        partial_fetch: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class BatchProcessor {
    constructor(batch_size: any, concurrent_requests: any);

    processEventRequests(_x: any, ...args: any[]): any;

    processEventRequestsGenerator(event_requests: any): any;

    processEvents(_x2: any, _x3: any, ...args: any[]): any;

    processEventsGenerator(event_request_to_clone: any, all_events: any): any;

}

export class Business {
    constructor(...args: any[]);

    createAccessToken(fields: any, ...args: any[]): any;

    createAdAccount(fields: any, ...args: any[]): any;

    createAdNetworkAnalytic(fields: any, ...args: any[]): any;

    createAdNetworkApplication(fields: any, ...args: any[]): any;

    createAdStudy(fields: any, ...args: any[]): any;

    createAdsPixel(fields: any, ...args: any[]): any;

    createBlockListDraft(fields: any, ...args: any[]): any;

    createBusinessUser(fields: any, ...args: any[]): any;

    createClaimCustomConversion(fields: any, ...args: any[]): any;

    createClientApp(fields: any, ...args: any[]): any;

    createClientPage(fields: any, ...args: any[]): any;

    createCollaborativeAdsCollaborationRequest(fields: any, ...args: any[]): any;

    createCpasBusinessSetupConfig(fields: any, ...args: any[]): any;

    createCreateAndApplyPublisherBlockList(fields: any, ...args: any[]): any;

    createCustomConversion(fields: any, ...args: any[]): any;

    createDraftNegativeKeywordList(fields: any, ...args: any[]): any;

    createEventSourceGroup(fields: any, ...args: any[]): any;

    createManagedBusiness(fields: any, ...args: any[]): any;

    createManagedPartnerBusiness(fields: any, ...args: any[]): any;

    createManagedPartnerBusinessSetup(fields: any, ...args: any[]): any;

    createManagedPartnerChildBusinessAsset(fields: any, ...args: any[]): any;

    createOfflineConversionDataSet(fields: any, ...args: any[]): any;

    createOwnedAdAccount(fields: any, ...args: any[]): any;

    createOwnedApp(fields: any, ...args: any[]): any;

    createOwnedBusiness(fields: any, ...args: any[]): any;

    createOwnedPage(fields: any, ...args: any[]): any;

    createOwnedProductCatalog(fields: any, ...args: any[]): any;

    createPixelTo(fields: any, ...args: any[]): any;

    createSystemUser(fields: any, ...args: any[]): any;

    deleteAdAccounts(...args: any[]): any;

    deleteAgencies(...args: any[]): any;

    deleteClients(...args: any[]): any;

    deleteInstagramAccounts(...args: any[]): any;

    deleteManagedBusinesses(...args: any[]): any;

    deleteOwnedBusinesses(...args: any[]): any;

    deletePages(...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAdNetworkAnalytics(fields: any, ...args: any[]): any;

    getAdNetworkAnalyticsResults(fields: any, ...args: any[]): any;

    getAdStudies(fields: any, ...args: any[]): any;

    getAdsPixels(fields: any, ...args: any[]): any;

    getAgencies(fields: any, ...args: any[]): any;

    getAnPlacements(fields: any, ...args: any[]): any;

    getBusinessAssetGroups(fields: any, ...args: any[]): any;

    getBusinessInvoices(fields: any, ...args: any[]): any;

    getBusinessUsers(fields: any, ...args: any[]): any;

    getClientAdAccounts(fields: any, ...args: any[]): any;

    getClientApps(fields: any, ...args: any[]): any;

    getClientOffsiteSignalContainerBusinessObjects(fields: any, ...args: any[]): any;

    getClientPages(fields: any, ...args: any[]): any;

    getClientPixels(fields: any, ...args: any[]): any;

    getClientProductCatalogs(fields: any, ...args: any[]): any;

    getClientWhatsAppBusinessAccounts(fields: any, ...args: any[]): any;

    getClients(fields: any, ...args: any[]): any;

    getCollaborativeAdsCollaborationRequests(fields: any, ...args: any[]): any;

    getCollaborativeAdsSuggestedPartners(fields: any, ...args: any[]): any;

    getCommerceMerchantSettings(fields: any, ...args: any[]): any;

    getContentDeliveryReport(fields: any, ...args: any[]): any;

    getCpasMerchantConfig(fields: any, ...args: any[]): any;

    getEventSourceGroups(fields: any, ...args: any[]): any;

    getExtendedCreditApplications(fields: any, ...args: any[]): any;

    getExtendedCredits(fields: any, ...args: any[]): any;

    getInitiatedAudienceSharingRequests(fields: any, ...args: any[]): any;

    getInstagramAccounts(fields: any, ...args: any[]): any;

    getInstagramBusinessAccounts(fields: any, ...args: any[]): any;

    getNegativeKeywordLists(fields: any, ...args: any[]): any;

    getOfflineConversionDataSets(fields: any, ...args: any[]): any;

    getOwnedAdAccounts(fields: any, ...args: any[]): any;

    getOwnedApps(fields: any, ...args: any[]): any;

    getOwnedBusinesses(fields: any, ...args: any[]): any;

    getOwnedInstagramAccounts(fields: any, ...args: any[]): any;

    getOwnedOffsiteSignalContainerBusinessObjects(fields: any, ...args: any[]): any;

    getOwnedPages(fields: any, ...args: any[]): any;

    getOwnedPixels(fields: any, ...args: any[]): any;

    getOwnedProductCatalogs(fields: any, ...args: any[]): any;

    getOwnedWhatsAppBusinessAccounts(fields: any, ...args: any[]): any;

    getPendingClientAdAccounts(fields: any, ...args: any[]): any;

    getPendingClientApps(fields: any, ...args: any[]): any;

    getPendingClientPages(fields: any, ...args: any[]): any;

    getPendingOwnedAdAccounts(fields: any, ...args: any[]): any;

    getPendingOwnedPages(fields: any, ...args: any[]): any;

    getPendingSharedOffsiteSignalContainerBusinessObjects(fields: any, ...args: any[]): any;

    getPendingUsers(fields: any, ...args: any[]): any;

    getPicture(fields: any, ...args: any[]): any;

    getReceivedAudienceSharingRequests(fields: any, ...args: any[]): any;

    getSystemUsers(fields: any, ...args: any[]): any;

    getThirdPartyMeasurementReportDataset(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        block_offline_analytics: string;
        collaborative_ads_managed_partner_business_info: string;
        collaborative_ads_managed_partner_eligibility: string;
        cpas_business_setup_config: string;
        created_by: string;
        created_time: string;
        extended_updated_time: string;
        id: string;
        is_hidden: string;
        link: string;
        name: string;
        payment_account_id: string;
        primary_page: string;
        profile_picture_uri: string;
        timezone_id: string;
        two_factor_type: string;
        updated_by: string;
        updated_time: string;
        verification_status: string;
        vertical: string;
        vertical_id: string;
    };

    static PagePermittedTasks: {
        advertise: string;
        analyze: string;
        cashier_role: string;
        create_content: string;
        manage: string;
        manage_jobs: string;
        manage_leads: string;
        messaging: string;
        moderate: string;
        moderate_community: string;
        pages_messaging: string;
        pages_messaging_subscriptions: string;
        profile_plus_advertise: string;
        profile_plus_analyze: string;
        profile_plus_create_content: string;
        profile_plus_facebook_access: string;
        profile_plus_full_control: string;
        profile_plus_manage: string;
        profile_plus_messaging: string;
        profile_plus_moderate: string;
        profile_plus_revenue: string;
        read_page_mailboxes: string;
        view_monetization_insights: string;
    };

    static PermittedTasks: {
        advertise: string;
        analyze: string;
        cashier_role: string;
        create_content: string;
        manage: string;
        manage_jobs: string;
        manage_leads: string;
        messaging: string;
        moderate: string;
        moderate_community: string;
        pages_messaging: string;
        pages_messaging_subscriptions: string;
        profile_plus_advertise: string;
        profile_plus_analyze: string;
        profile_plus_create_content: string;
        profile_plus_facebook_access: string;
        profile_plus_full_control: string;
        profile_plus_manage: string;
        profile_plus_messaging: string;
        profile_plus_moderate: string;
        profile_plus_revenue: string;
        read_page_mailboxes: string;
        view_monetization_insights: string;
    };

    static SurveyBusinessType: {
        advertiser: string;
        agency: string;
        app_developer: string;
        publisher: string;
    };

    static TwoFactorType: {
        admin_required: string;
        all_required: string;
        none: string;
    };

    static Vertical: {
        advertising: string;
        automotive: string;
        consumer_packaged_goods: string;
        ecommerce: string;
        education: string;
        energy_and_utilities: string;
        entertainment_and_media: string;
        financial_services: string;
        gaming: string;
        government_and_politics: string;
        health: string;
        luxury: string;
        marketing: string;
        non_profit: string;
        organizations_and_associations: string;
        other: string;
        professional_services: string;
        restaurant: string;
        retail: string;
        technology: string;
        telecom: string;
        travel: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class BusinessAssetGroup {
    constructor(...args: any[]);

    createAssignedUser(fields: any, ...args: any[]): any;

    createContainedAdAccount(fields: any, ...args: any[]): any;

    createContainedApplication(fields: any, ...args: any[]): any;

    createContainedCustomConversion(fields: any, ...args: any[]): any;

    createContainedInstagramAccount(fields: any, ...args: any[]): any;

    createContainedOfflineConversionDataSet(fields: any, ...args: any[]): any;

    createContainedPage(fields: any, ...args: any[]): any;

    createContainedPixel(fields: any, ...args: any[]): any;

    createContainedProductCatalog(fields: any, ...args: any[]): any;

    deleteAssignedUsers(...args: any[]): any;

    deleteContainedAdAccounts(...args: any[]): any;

    deleteContainedApplications(...args: any[]): any;

    deleteContainedCustomConversions(...args: any[]): any;

    deleteContainedInstagramAccounts(...args: any[]): any;

    deleteContainedOfflineConversionDataSets(...args: any[]): any;

    deleteContainedPages(...args: any[]): any;

    deleteContainedPixels(...args: any[]): any;

    deleteContainedProductCatalogs(...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAssignedUsers(fields: any, ...args: any[]): any;

    getContainedAdAccounts(fields: any, ...args: any[]): any;

    getContainedApplications(fields: any, ...args: any[]): any;

    getContainedCustomConversions(fields: any, ...args: any[]): any;

    getContainedInstagramAccounts(fields: any, ...args: any[]): any;

    getContainedOfflineConversionDataSets(fields: any, ...args: any[]): any;

    getContainedPages(fields: any, ...args: any[]): any;

    getContainedPixels(fields: any, ...args: any[]): any;

    getContainedProductCatalogs(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static AdaccountTasks: {
        aa_analyze: string;
        advertise: string;
        analyze: string;
        draft: string;
        manage: string;
    };

    static Fields: {
        id: string;
        name: string;
    };

    static OfflineConversionDataSetTasks: {
        aa_analyze: string;
        advertise: string;
        manage: string;
        upload: string;
        view: string;
    };

    static PageTasks: {
        advertise: string;
        analyze: string;
        cashier_role: string;
        create_content: string;
        manage: string;
        manage_jobs: string;
        manage_leads: string;
        messaging: string;
        moderate: string;
        moderate_community: string;
        pages_messaging: string;
        pages_messaging_subscriptions: string;
        profile_plus_advertise: string;
        profile_plus_analyze: string;
        profile_plus_create_content: string;
        profile_plus_facebook_access: string;
        profile_plus_full_control: string;
        profile_plus_manage: string;
        profile_plus_messaging: string;
        profile_plus_moderate: string;
        profile_plus_revenue: string;
        read_page_mailboxes: string;
        view_monetization_insights: string;
    };

    static PixelTasks: {
        aa_analyze: string;
        advertise: string;
        analyze: string;
        edit: string;
        upload: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class BusinessAssetSharingAgreement {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        id: string;
        initiator: string;
        recipient: string;
        relationship_type: string;
        request_status: string;
        request_type: string;
    };

    static RequestStatus: {
        approve: string;
        decline: string;
        expired: string;
        in_progress: string;
        pending: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class BusinessImage {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        business: string;
        creation_time: string;
        hash: string;
        height: string;
        id: string;
        media_library_url: string;
        name: string;
        url: string;
        url_128: string;
        width: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class BusinessOwnedObjectOnBehalfOfRequest {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        business_owned_object: string;
        id: string;
        receiving_business: string;
        requesting_business: string;
        status: string;
    };

    static Status: {
        approve: string;
        decline: string;
        expired: string;
        in_progress: string;
        pending: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class BusinessRoleRequest {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        created_by: string;
        created_time: string;
        email: string;
        expiration_time: string;
        expiry_time: string;
        finance_role: string;
        id: string;
        invite_link: string;
        ip_role: string;
        owner: string;
        role: string;
        status: string;
        updated_by: string;
        updated_time: string;
    };

    static Role: {
        admin: string;
        ads_rights_reviewer: string;
        default: string;
        developer: string;
        employee: string;
        finance_analyst: string;
        finance_edit: string;
        finance_editor: string;
        finance_view: string;
        manage: string;
        partner_center_admin: string;
        partner_center_analyst: string;
        partner_center_education: string;
        partner_center_marketing: string;
        partner_center_operations: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class BusinessUser {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAssignedAdAccounts(fields: any, ...args: any[]): any;

    getAssignedBusinessAssetGroups(fields: any, ...args: any[]): any;

    getAssignedPages(fields: any, ...args: any[]): any;

    getAssignedProductCatalogs(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        business: string;
        email: string;
        finance_permission: string;
        first_name: string;
        id: string;
        ip_permission: string;
        last_name: string;
        marked_for_removal: string;
        name: string;
        pending_email: string;
        role: string;
        title: string;
        two_fac_status: string;
    };

    static Role: {
        admin: string;
        ads_rights_reviewer: string;
        default: string;
        developer: string;
        employee: string;
        finance_analyst: string;
        finance_edit: string;
        finance_editor: string;
        finance_view: string;
        manage: string;
        partner_center_admin: string;
        partner_center_analyst: string;
        partner_center_education: string;
        partner_center_marketing: string;
        partner_center_operations: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class CPASAdvertiserPartnershipRecommendation {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        advertiser_business_id: string;
        brand_business_id: string;
        brands: string;
        countries: string;
        id: string;
        merchant_business_id: string;
        merchant_categories: string;
        status: string;
        status_reason: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class CPASBusinessSetupConfig {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getAdAccounts(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        accepted_collab_ads_tos: string;
        business: string;
        business_capabilities_status: string;
        capabilities_compliance_status: string;
        id: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class CPASCollaborationRequest {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        brands: string;
        contact_email: string;
        contact_first_name: string;
        contact_last_name: string;
        id: string;
        phone_number: string;
        receiver_business: string;
        requester_agency_or_brand: string;
        sender_client_business: string;
        status: string;
    };

    static RequesterAgencyOrBrand: {
        agency: string;
        brand: string;
        merchant: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class CPASMerchantConfig {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        accepted_tos: string;
        beta_features: string;
        business_outcomes_status: string;
        id: string;
        is_test_merchant: string;
        outcomes_compliance_status: string;
        qualified_to_onboard: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Campaign {
    constructor(...args: any[]);

    createAdLabel(fields: any, ...args: any[]): any;

    createCopy(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAdRulesGoverned(fields: any, ...args: any[]): any;

    getAdSets(fields: any, ...args: any[]): any;

    getAdStudies(fields: any, ...args: any[]): any;

    getAds(fields: any, ...args: any[]): any;

    getContentDeliveryReport(fields: any, ...args: any[]): any;

    getCopies(fields: any, ...args: any[]): any;

    getInsights(fields: any, ...args: any[]): any;

    getInsightsAsync(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static BidStrategy: {
        cost_cap: string;
        lowest_cost_with_bid_cap: string;
        lowest_cost_without_cap: string;
    };

    static ConfiguredStatus: {
        active: string;
        archived: string;
        deleted: string;
        paused: string;
    };

    static DatePreset: {
        data_maximum: string;
        last_14d: string;
        last_28d: string;
        last_30d: string;
        last_3d: string;
        last_7d: string;
        last_90d: string;
        last_month: string;
        last_quarter: string;
        last_week_mon_sun: string;
        last_week_sun_sat: string;
        last_year: string;
        maximum: string;
        this_month: string;
        this_quarter: string;
        this_week_mon_today: string;
        this_week_sun_today: string;
        this_year: string;
        today: string;
        yesterday: string;
    };

    static EffectiveStatus: {
        active: string;
        archived: string;
        deleted: string;
        in_process: string;
        paused: string;
        with_issues: string;
    };

    static ExecutionOptions: {
        include_recommendations: string;
        validate_only: string;
    };

    static Fields: {
        account_id: string;
        ad_strategy_group_id: string;
        ad_strategy_id: string;
        adlabels: string;
        bid_strategy: string;
        boosted_object_id: string;
        brand_lift_studies: string;
        budget_rebalance_flag: string;
        budget_remaining: string;
        buying_type: string;
        can_create_brand_lift_study: string;
        can_use_spend_cap: string;
        configured_status: string;
        created_time: string;
        daily_budget: string;
        effective_status: string;
        id: string;
        is_skadnetwork_attribution: string;
        issues_info: string;
        last_budget_toggling_time: string;
        lifetime_budget: string;
        name: string;
        objective: string;
        pacing_type: string;
        promoted_object: string;
        recommendations: string;
        smart_promotion_type: string;
        source_campaign: string;
        source_campaign_id: string;
        special_ad_categories: string;
        special_ad_category: string;
        special_ad_category_country: string;
        spend_cap: string;
        start_time: string;
        status: string;
        stop_time: string;
        topline_id: string;
        updated_time: string;
    };

    static Objective: {
        app_installs: string;
        brand_awareness: string;
        conversions: string;
        event_responses: string;
        lead_generation: string;
        link_clicks: string;
        local_awareness: string;
        messages: string;
        offer_claims: string;
        page_likes: string;
        post_engagement: string;
        product_catalog_sales: string;
        reach: string;
        store_visits: string;
        video_views: string;
    };

    static Operator: {
        all: string;
        any: string;
    };

    static SmartPromotionType: {
        guided_creation: string;
        smart_app_promotion: string;
    };

    static SpecialAdCategories: {
        credit: string;
        employment: string;
        housing: string;
        issues_elections_politics: string;
        none: string;
        online_gambling_and_gaming: string;
    };

    static SpecialAdCategory: {
        credit: string;
        employment: string;
        housing: string;
        issues_elections_politics: string;
        none: string;
        online_gambling_and_gaming: string;
    };

    static SpecialAdCategoryCountry: {
        ad: string;
        ae: string;
        af: string;
        ag: string;
        ai: string;
        al: string;
        am: string;
        an: string;
        ao: string;
        aq: string;
        ar: string;
        as: string;
        at: string;
        au: string;
        aw: string;
        ax: string;
        az: string;
        ba: string;
        bb: string;
        bd: string;
        be: string;
        bf: string;
        bg: string;
        bh: string;
        bi: string;
        bj: string;
        bl: string;
        bm: string;
        bn: string;
        bo: string;
        bq: string;
        br: string;
        bs: string;
        bt: string;
        bv: string;
        bw: string;
        by: string;
        bz: string;
        ca: string;
        cc: string;
        cd: string;
        cf: string;
        cg: string;
        ch: string;
        ci: string;
        ck: string;
        cl: string;
        cm: string;
        cn: string;
        co: string;
        cr: string;
        cu: string;
        cv: string;
        cw: string;
        cx: string;
        cy: string;
        cz: string;
        de: string;
        dj: string;
        dk: string;
        dm: string;
        do: string;
        dz: string;
        ec: string;
        ee: string;
        eg: string;
        eh: string;
        er: string;
        es: string;
        et: string;
        fi: string;
        fj: string;
        fk: string;
        fm: string;
        fo: string;
        fr: string;
        ga: string;
        gb: string;
        gd: string;
        ge: string;
        gf: string;
        gg: string;
        gh: string;
        gi: string;
        gl: string;
        gm: string;
        gn: string;
        gp: string;
        gq: string;
        gr: string;
        gs: string;
        gt: string;
        gu: string;
        gw: string;
        gy: string;
        hk: string;
        hm: string;
        hn: string;
        hr: string;
        ht: string;
        hu: string;
        id: string;
        ie: string;
        il: string;
        im: string;
        in: string;
        io: string;
        iq: string;
        ir: string;
        is: string;
        it: string;
        je: string;
        jm: string;
        jo: string;
        jp: string;
        ke: string;
        kg: string;
        kh: string;
        ki: string;
        km: string;
        kn: string;
        kp: string;
        kr: string;
        kw: string;
        ky: string;
        kz: string;
        la: string;
        lb: string;
        lc: string;
        li: string;
        lk: string;
        lr: string;
        ls: string;
        lt: string;
        lu: string;
        lv: string;
        ly: string;
        ma: string;
        mc: string;
        md: string;
        me: string;
        mf: string;
        mg: string;
        mh: string;
        mk: string;
        ml: string;
        mm: string;
        mn: string;
        mo: string;
        mp: string;
        mq: string;
        mr: string;
        ms: string;
        mt: string;
        mu: string;
        mv: string;
        mw: string;
        mx: string;
        my: string;
        mz: string;
        na: string;
        nc: string;
        ne: string;
        nf: string;
        ng: string;
        ni: string;
        nl: string;
        no: string;
        np: string;
        nr: string;
        nu: string;
        nz: string;
        om: string;
        pa: string;
        pe: string;
        pf: string;
        pg: string;
        ph: string;
        pk: string;
        pl: string;
        pm: string;
        pn: string;
        pr: string;
        ps: string;
        pt: string;
        pw: string;
        py: string;
        qa: string;
        re: string;
        ro: string;
        rs: string;
        ru: string;
        rw: string;
        sa: string;
        sb: string;
        sc: string;
        sd: string;
        se: string;
        sg: string;
        sh: string;
        si: string;
        sj: string;
        sk: string;
        sl: string;
        sm: string;
        sn: string;
        so: string;
        sr: string;
        ss: string;
        st: string;
        sv: string;
        sx: string;
        sy: string;
        sz: string;
        tc: string;
        td: string;
        tf: string;
        tg: string;
        th: string;
        tj: string;
        tk: string;
        tl: string;
        tm: string;
        tn: string;
        to: string;
        tr: string;
        tt: string;
        tv: string;
        tw: string;
        tz: string;
        ua: string;
        ug: string;
        um: string;
        us: string;
        uy: string;
        uz: string;
        va: string;
        vc: string;
        ve: string;
        vg: string;
        vi: string;
        vn: string;
        vu: string;
        wf: string;
        ws: string;
        xk: string;
        ye: string;
        yt: string;
        za: string;
        zm: string;
        zw: string;
    };

    static Status: {
        active: string;
        archived: string;
        deleted: string;
        paused: string;
    };

    static StatusOption: {
        active: string;
        inherited_from_source: string;
        paused: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Canvas {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getPreviews(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        background_color: string;
        body_elements: string;
        business_id: string;
        canvas_link: string;
        collection_hero_image: string;
        collection_hero_video: string;
        collection_thumbnails: string;
        element_payload: string;
        elements: string;
        fb_body_elements: string;
        id: string;
        is_hidden: string;
        is_published: string;
        last_editor: string;
        linked_documents: string;
        name: string;
        owner: string;
        property_list: string;
        source_template: string;
        store_url: string;
        style_list: string;
        tags: string;
        ui_property_list: string;
        unused_body_elements: string;
        update_time: string;
        use_retailer_item_ids: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class CanvasTemplate {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        channels: string;
        description: string;
        document: string;
        id: string;
        is_multi_tab_supportable: string;
        is_new: string;
        name: string;
        objectives: string;
        owner_id: string;
        required_capabilities: string;
        snapshot_photo: string;
        status: string;
        sub_verticals: string;
        verticals: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class CloudGame {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        id: string;
        name: string;
        owner: string;
        playable_ad_file_size: string;
        playable_ad_orientation: string;
        playable_ad_package_name: string;
        playable_ad_reject_reason: string;
        playable_ad_status: string;
        playable_ad_upload_time: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class CollaborativeAdsShareSettings {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        agency_business: string;
        id: string;
        product_catalog_proxy_id: string;
        utm_campaign: string;
        utm_medium: string;
        utm_source: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Comment {
    constructor(...args: any[]);

    createComment(fields: any, ...args: any[]): any;

    createLike(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    deleteLikes(...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getComments(fields: any, ...args: any[]): any;

    getLikes(fields: any, ...args: any[]): any;

    getReactions(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static CommentPrivacyValue: {
        declined_by_admin_assistant: string;
        default_privacy: string;
        friends_and_post_owner: string;
        friends_only: string;
        graphql_multiple_value_hack_do_not_use: string;
        owner_or_commenter: string;
        pending_approval: string;
        removed_by_admin_assistant: string;
        side_conversation: string;
        side_conversation_and_post_owner: string;
        spotlight_tab: string;
    };

    static Fields: {
        admin_creator: string;
        application: string;
        attachment: string;
        can_comment: string;
        can_hide: string;
        can_like: string;
        can_remove: string;
        can_reply_privately: string;
        comment_count: string;
        created_time: string;
        from: string;
        id: string;
        is_hidden: string;
        is_private: string;
        like_count: string;
        live_broadcast_timestamp: string;
        message: string;
        message_tags: string;
        object: string;
        parent: string;
        permalink_url: string;
        private_reply_conversation: string;
        user_likes: string;
    };

    static Filter: {
        stream: string;
        toplevel: string;
    };

    static LiveFilter: {
        filter_low_quality: string;
        no_filter: string;
    };

    static Order: {
        chronological: string;
        reverse_chronological: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class CommerceMerchantSettings {
    constructor(...args: any[]);

    createAcknowledgeOrder(fields: any, ...args: any[]): any;

    createOrderManagementApp(fields: any, ...args: any[]): any;

    createShippingProfile(fields: any, ...args: any[]): any;

    createWhatsappChannel(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getCommerceOrders(fields: any, ...args: any[]): any;

    getCommercePayouts(fields: any, ...args: any[]): any;

    getCommerceTransactions(fields: any, ...args: any[]): any;

    getOrderManagementApps(fields: any, ...args: any[]): any;

    getProductCatalogs(fields: any, ...args: any[]): any;

    getReturns(fields: any, ...args: any[]): any;

    getSetupStatus(fields: any, ...args: any[]): any;

    getShippingProfiles(fields: any, ...args: any[]): any;

    getShops(fields: any, ...args: any[]): any;

    getTaxSettings(fields: any, ...args: any[]): any;

    static Fields: {
        braintree_merchant_id: string;
        checkout_message: string;
        commerce_store: string;
        contact_email: string;
        cta: string;
        disable_checkout_urls: string;
        display_name: string;
        external_merchant_id: string;
        facebook_channel: string;
        feature_eligibility: string;
        has_discount_code: string;
        has_onsite_intent: string;
        id: string;
        instagram_channel: string;
        merchant_alert_email: string;
        merchant_page: string;
        merchant_status: string;
        onsite_commerce_merchant: string;
        payment_provider: string;
        privacy_url_by_locale: string;
        review_rejection_messages: string;
        review_rejection_reasons: string;
        supported_card_types: string;
        terms: string;
        terms_url_by_locale: string;
        whatsapp_channel: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class CommerceOrder {
    constructor(...args: any[]);

    createAcknowledgeOrder(fields: any, ...args: any[]): any;

    createCancellation(fields: any, ...args: any[]): any;

    createFulfillOrder(fields: any, ...args: any[]): any;

    createRefund(fields: any, ...args: any[]): any;

    createShipment(fields: any, ...args: any[]): any;

    createUpdateShipment(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getCancellations(fields: any, ...args: any[]): any;

    getItems(fields: any, ...args: any[]): any;

    getPayments(fields: any, ...args: any[]): any;

    getPromotionDetails(fields: any, ...args: any[]): any;

    getPromotions(fields: any, ...args: any[]): any;

    getRefunds(fields: any, ...args: any[]): any;

    getReturns(fields: any, ...args: any[]): any;

    getShipments(fields: any, ...args: any[]): any;

    static Fields: {
        buyer_details: string;
        channel: string;
        created: string;
        estimated_payment_details: string;
        id: string;
        is_group_buy: string;
        is_test_order: string;
        last_updated: string;
        merchant_order_id: string;
        order_status: string;
        selected_shipping_option: string;
        ship_by_date: string;
        shipping_address: string;
    };

    static Filters: {
        has_cancellations: string;
        has_fulfillments: string;
        has_refunds: string;
        no_cancellations: string;
        no_refunds: string;
        no_shipments: string;
    };

    static ReasonCode: {
        buyers_remorse: string;
        damaged_goods: string;
        facebook_initiated: string;
        not_as_described: string;
        quality_issue: string;
        refund_compromised: string;
        refund_for_return: string;
        refund_reason_other: string;
        refund_sfi_fake: string;
        refund_sfi_real: string;
        wrong_item: string;
    };

    static State: {
        completed: string;
        created: string;
        fb_processing: string;
        in_progress: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class CommerceOrderTransactionDetail {
    constructor(...args: any[]);

    getItems(fields: any, ...args: any[]): any;

    getTaxDetails(fields: any, ...args: any[]): any;

    static Fields: {
        id: string;
        net_payment_amount: string;
        order_details: string;
        payout_reference_id: string;
        processing_fee: string;
        tax_rate: string;
        transaction_date: string;
        transaction_type: string;
        transfer_id: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Content {
    constructor(id?: any, quantity?: any, item_price?: any, title?: any, description?: any, brand?: any, category?: any, delivery_category?: any);

    normalize(): any;

    setBrand(brand: any): any;

    setCategory(category: any): any;

    setDeliveryCategory(delivery_category: any): any;

    setDescription(description: any): any;

    setId(id: any): any;

    setItemPrice(item_price: any): any;

    setQuantity(quantity: any): any;

    setTitle(title: any): any;

}

export class CopyrightAudioAsset {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        creation_time: string;
        id: string;
        title: string;
        update_time: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class CustomAudience {
    constructor(...args: any[]);

    createAdAccount(fields: any, ...args: any[]): any;

    createUser(fields: any, ...args: any[]): any;

    createUsersReplace(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    deleteAdAccounts(...args: any[]): any;

    deleteUsers(...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAdAccounts(fields: any, ...args: any[]): any;

    getAds(fields: any, ...args: any[]): any;

    getSessions(fields: any, ...args: any[]): any;

    getSharedAccountInfo(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static ActionSource: {
        physical_store: string;
        website: string;
    };

    static ClaimObjective: {
        automotive_model: string;
        collaborative_ads: string;
        home_listing: string;
        media_title: string;
        product: string;
        travel: string;
        vehicle: string;
        vehicle_offer: string;
    };

    static ContentType: {
        automotive_model: string;
        destination: string;
        flight: string;
        home_listing: string;
        hotel: string;
        job: string;
        local_service_business: string;
        location_based_item: string;
        media_title: string;
        offline_product: string;
        product: string;
        vehicle: string;
        vehicle_offer: string;
    };

    static CustomerFileSource: {
        both_user_and_partner_provided: string;
        partner_provided_only: string;
        user_provided_only: string;
    };

    static Fields: {
        account_id: string;
        approximate_count_lower_bound: string;
        approximate_count_upper_bound: string;
        customer_file_source: string;
        data_source: string;
        data_source_types: string;
        datafile_custom_audience_uploading_status: string;
        delete_time: string;
        delivery_status: string;
        description: string;
        excluded_custom_audiences: string;
        external_event_source: string;
        household_audience: string;
        id: string;
        included_custom_audiences: string;
        is_household: string;
        is_snapshot: string;
        is_value_based: string;
        lookalike_audience_ids: string;
        lookalike_spec: string;
        name: string;
        operation_status: string;
        opt_out_link: string;
        page_deletion_marked_delete_time: string;
        permission_for_actions: string;
        pixel_id: string;
        regulated_audience_spec: string;
        retention_days: string;
        rev_share_policy_id: string;
        rule: string;
        rule_aggregation: string;
        rule_v2: string;
        seed_audience: string;
        sharing_status: string;
        subtype: string;
        time_content_updated: string;
        time_created: string;
        time_updated: string;
    };

    static Subtype: {
        app: string;
        bag_of_accounts: string;
        claim: string;
        custom: string;
        engagement: string;
        fox: string;
        lookalike: string;
        managed: string;
        measurement: string;
        offline_conversion: string;
        partner: string;
        regulated_categories_audience: string;
        study_rule_audience: string;
        video: string;
        website: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class CustomConversion {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getStats(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static CustomEventType: {
        add_payment_info: string;
        add_to_cart: string;
        add_to_wishlist: string;
        complete_registration: string;
        contact: string;
        content_view: string;
        customize_product: string;
        donate: string;
        facebook_selected: string;
        find_location: string;
        initiated_checkout: string;
        lead: string;
        listing_interaction: string;
        other: string;
        purchase: string;
        schedule: string;
        search: string;
        start_trial: string;
        submit_application: string;
        subscribe: string;
    };

    static Fields: {
        account_id: string;
        aggregation_rule: string;
        business: string;
        creation_time: string;
        custom_event_type: string;
        data_sources: string;
        default_conversion_value: string;
        description: string;
        event_source_type: string;
        first_fired_time: string;
        id: string;
        is_archived: string;
        is_unavailable: string;
        last_fired_time: string;
        name: string;
        offline_conversion_data_set: string;
        pixel: string;
        retention_days: string;
        rule: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class CustomData {
    constructor(value?: any, currency?: any, content_name?: any, content_category?: any, content_ids?: any, contents?: any, content_type?: any, order_id?: any, predicted_ltv?: any, num_items?: any, search_string?: any, status?: any, item_number?: any, delivery_category?: any, custom_properties?: any);

    add_custom_property(key: any, value: any): void;

    normalize(): any;

    setContentCategory(content_category: any): any;

    setContentIds(content_ids: any): any;

    setContentName(content_name: any): any;

    setContentType(content_type: any): any;

    setContents(contents: any): any;

    setCurrency(currency: any): any;

    setCustomProperties(custom_properties: any): any;

    setDeliveryCategory(delivery_category: any): any;

    setItemNumber(item_number: any): any;

    setNumItems(num_items: any): any;

    setOrderId(order_id: any): any;

    setPredictedLtv(predicted_ltv: any): any;

    setSearchString(search_string: any): any;

    setStatus(status: any): any;

    setValue(value: any): any;

}

export class Destination {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getAugmentedRealitiesMetadata(fields: any, ...args: any[]): any;

    getChannelsToIntegrityStatus(fields: any, ...args: any[]): any;

    getVideosMetadata(fields: any, ...args: any[]): any;

    static Fields: {
        address: string;
        applinks: string;
        category_specific_fields: string;
        currency: string;
        description: string;
        destination_id: string;
        id: string;
        image_fetch_status: string;
        images: string;
        name: string;
        price: string;
        price_change: string;
        sanitized_images: string;
        types: string;
        unit_price: string;
        url: string;
    };

    static ImageFetchStatus: {
        direct_upload: string;
        fetch_failed: string;
        fetched: string;
        no_status: string;
        outdated: string;
        partial_fetch: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class DestinationCatalogSettings {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        generate_items_from_pages: string;
        id: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class DynamicContentSet {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        business_id: string;
        id: string;
        name: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class DynamicPriceConfigByDate {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        checkin_date: string;
        id: string;
        prices: string;
        prices_pretty: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Event {
    constructor(...args: any[]);

    createLiveVideo(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getComments(fields: any, ...args: any[]): any;

    getFeed(fields: any, ...args: any[]): any;

    getLiveVideos(fields: any, ...args: any[]): any;

    getPhotos(fields: any, ...args: any[]): any;

    getPicture(fields: any, ...args: any[]): any;

    getPosts(fields: any, ...args: any[]): any;

    getRoles(fields: any, ...args: any[]): any;

    getTicketTiers(fields: any, ...args: any[]): any;

    getVideos(fields: any, ...args: any[]): any;

    static Category: {
        art_event: string;
        book_event: string;
        class_event: string;
        comedy_event: string;
        conference_event: string;
        dance_event: string;
        dining_event: string;
        family_event: string;
        festival_event: string;
        fitness: string;
        food_tasting: string;
        fundraiser: string;
        lecture: string;
        meetup: string;
        movie_event: string;
        music_event: string;
        neighborhood: string;
        nightlife: string;
        other: string;
        religious_event: string;
        shopping: string;
        sports_event: string;
        theater_event: string;
        volunteering: string;
        workshop: string;
    };

    static EventStateFilter: {
        canceled: string;
        draft: string;
        published: string;
        scheduled_draft_for_publication: string;
    };

    static Fields: {
        attending_count: string;
        can_guests_invite: string;
        category: string;
        cover: string;
        created_time: string;
        declined_count: string;
        description: string;
        discount_code_enabled: string;
        end_time: string;
        event_times: string;
        guest_list_enabled: string;
        id: string;
        interested_count: string;
        is_canceled: string;
        is_draft: string;
        is_online: string;
        is_page_owned: string;
        maybe_count: string;
        name: string;
        noreply_count: string;
        online_event_format: string;
        online_event_third_party_url: string;
        owner: string;
        parent_group: string;
        place: string;
        scheduled_publish_time: string;
        start_time: string;
        ticket_setting: string;
        ticket_uri: string;
        ticket_uri_start_sales_time: string;
        ticketing_privacy_uri: string;
        ticketing_terms_uri: string;
        timezone: string;
        type: string;
        updated_time: string;
    };

    static OnlineEventFormat: {
        fb_live: string;
        messenger_room: string;
        none: string;
        other: string;
        third_party: string;
    };

    static TimeFilter: {
        past: string;
        upcoming: string;
    };

    static Type: {
        community: string;
        friends: string;
        group: string;
        private: string;
        public: string;
        work_company: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class EventRequest {
    constructor(access_token: any, pixel_id: any, ...args: any[]);

    cloneWithoutEvents(): any;

    execute(): any;

    setAccessToken(access_token: any): any;

    setDebugMode(debug_mode: any): any;

    setEvents(events: any): any;

    setHttpService(http_service: any): any;

    setNamespaceId(namespace_id: any): any;

    setPartnerAgent(partner_agent: any): any;

    setPixelId(pixel_id: any): any;

    setTestEventCode(test_event_code: any): any;

    setUploadId(upload_id: any): any;

    setUploadSource(upload_source: any): any;

    setUploadTag(upload_tag: any): any;

}

export class EventResponse {
    constructor(events_received: any, messages: any, fbtrace_id: any, id: any, num_processed_entries: any);

    setEventsReceived(events_received: any): any;

    setFbtraceId(fbtrace_id: any): any;

    setId(num_processed_entries: any): any;

    setMessages(messages: any): any;

}

export class EventSourceGroup {
    constructor(...args: any[]);

    createSharedAccount(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getSharedAccounts(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        business: string;
        event_sources: string;
        id: string;
        name: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ExtendedCredit {
    constructor(...args: any[]);

    createExtendedCreditInvoiceGroup(fields: any, ...args: any[]): any;

    createOwningCreditAllocationConfig(fields: any, ...args: any[]): any;

    createWhatsappCreditSharingAndAttach(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getExtendedCreditInvoiceGroups(fields: any, ...args: any[]): any;

    getOwningCreditAllocationConfigs(fields: any, ...args: any[]): any;

    static Fields: {
        allocated_amount: string;
        balance: string;
        credit_available: string;
        credit_type: string;
        id: string;
        is_access_revoked: string;
        is_automated_experience: string;
        legal_entity_name: string;
        liable_biz_name: string;
        max_balance: string;
        online_max_balance: string;
        owner_business: string;
        owner_business_name: string;
        partition_from: string;
        receiving_credit_allocation_config: string;
        send_bill_to_biz_name: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ExtendedCreditAllocationConfig {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        currency_amount: string;
        id: string;
        liability_type: string;
        owning_business: string;
        owning_credential: string;
        partition_type: string;
        receiving_business: string;
        receiving_credential: string;
        request_status: string;
        send_bill_to: string;
    };

    static LiabilityType: {
        msa: string;
        normal: string;
        sequential: string;
    };

    static PartitionType: {
        auth: string;
        fixed: string;
    };

    static SendBillTo: {
        advertiser: string;
        agency: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ExtendedCreditInvoiceGroup {
    constructor(...args: any[]);

    createAdAccount(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    deleteAdAccounts(...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAdAccounts(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        auto_enroll: string;
        customer_po_number: string;
        email: string;
        emails: string;
        id: string;
        name: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class FacebookAdsApi {
    constructor(accessToken: any, ...args: any[]);

    call(method: any, path$$1: any, ...args: any[]): any;

    getAppID(): any;

    setDebug(flag: any): any;

    setShowHeader(flag: any): any;

    static GRAPH: string;

    static GRAPH_VIDEO: string;

    static SDK_VERSION: string;

    static VERSION: string;

    static getDefaultApi(): any;

    static init(accessToken: any, ...args: any[]): any;

    static setDefaultApi(api: any): void;

}

export class FacebookAdsApiBatch {
    constructor(api: any, successCallback: any, failureCallback: any);

    add(method: any, relativePath: any, params: any, files: any, successCallback: any, failureCallback: any, request: any): any;

    addRequest(request: any, successCallback: any, failureCallback: any): any;

    execute(): any;

}

export class Flight {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getAugmentedRealitiesMetadata(fields: any, ...args: any[]): any;

    getChannelsToIntegrityStatus(fields: any, ...args: any[]): any;

    getVideosMetadata(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        applinks: string;
        category_specific_fields: string;
        currency: string;
        description: string;
        destination_airport: string;
        destination_city: string;
        flight_id: string;
        id: string;
        image_fetch_status: string;
        images: string;
        oneway_currency: string;
        oneway_price: string;
        origin_airport: string;
        origin_city: string;
        price: string;
        sanitized_images: string;
        unit_price: string;
        url: string;
    };

    static ImageFetchStatus: {
        direct_upload: string;
        fetch_failed: string;
        fetched: string;
        no_status: string;
        outdated: string;
        partial_fetch: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class FundraiserPersonToCharity {
    constructor(...args: any[]);

    createEndFundraiser(fields: any, ...args: any[]): any;

    createExternalDonation(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getExternalDonations(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        amount_raised: string;
        charity_id: string;
        currency: string;
        description: string;
        donations_count: string;
        donors_count: string;
        end_time: string;
        external_amount_raised: string;
        external_donations_count: string;
        external_donors_count: string;
        external_event_name: string;
        external_event_start_time: string;
        external_event_uri: string;
        external_fundraiser_uri: string;
        external_id: string;
        goal_amount: string;
        id: string;
        internal_amount_raised: string;
        internal_donations_count: string;
        internal_donors_count: string;
        name: string;
        uri: string;
    };

    static FundraiserType: {
        person_for_charity: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Group {
    constructor(...args: any[]);

    createAdmin(fields: any, ...args: any[]): any;

    createAlbum(fields: any, ...args: any[]): any;

    createFeed(fields: any, ...args: any[]): any;

    createGroup(fields: any, ...args: any[]): any;

    createLiveVideo(fields: any, ...args: any[]): any;

    createMember(fields: any, ...args: any[]): any;

    createPhoto(fields: any, ...args: any[]): any;

    createShiftSetting(fields: any, ...args: any[]): any;

    createVideo(fields: any, ...args: any[]): any;

    deleteAdmins(...args: any[]): any;

    deleteMembers(...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAlbums(fields: any, ...args: any[]): any;

    getDocs(fields: any, ...args: any[]): any;

    getEvents(fields: any, ...args: any[]): any;

    getFeed(fields: any, ...args: any[]): any;

    getFiles(fields: any, ...args: any[]): any;

    getGroups(fields: any, ...args: any[]): any;

    getLiveVideos(fields: any, ...args: any[]): any;

    getOptedInMembers(fields: any, ...args: any[]): any;

    getPicture(fields: any, ...args: any[]): any;

    getVideos(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        archived: string;
        cover: string;
        created_time: string;
        description: string;
        email: string;
        icon: string;
        id: string;
        link: string;
        member_count: string;
        member_request_count: string;
        name: string;
        parent: string;
        permissions: string;
        privacy: string;
        purpose: string;
        subdomain: string;
        updated_time: string;
        venue: string;
    };

    static GroupType: {
        books: string;
        casual: string;
        close_friends: string;
        club: string;
        couple: string;
        coworkers: string;
        custom: string;
        deals: string;
        ephemeral: string;
        event_planning: string;
        family: string;
        fandom_radar: string;
        fantasy_league: string;
        fitness: string;
        for_sale: string;
        for_work: string;
        fraternity: string;
        game: string;
        health_support: string;
        high_school_forum: string;
        jobs: string;
        learning: string;
        mentorship: string;
        music_casa_bundle: string;
        neighbors: string;
        none: string;
        oculus: string;
        parenting: string;
        parents: string;
        project: string;
        real_world: string;
        real_world_at_work: string;
        school_class: string;
        sorority: string;
        sports: string;
        sports_activity: string;
        streamer: string;
        study_group: string;
        support: string;
        teammates: string;
        theme: string;
        together_vr: string;
        travel_planning: string;
        work_announcement: string;
        work_demo_group: string;
        work_discussion: string;
        work_ephemeral: string;
        work_feedback: string;
        work_for_sale: string;
        work_garden: string;
        work_guest_group: string;
        work_learning: string;
        work_mentorship: string;
        work_multi_company: string;
        work_recruiting: string;
        work_resume_review: string;
        work_social: string;
        work_stages: string;
        work_team: string;
        work_teamwork: string;
        work_vc_call: string;
    };

    static JoinSetting: {
        admin_only: string;
        anyone: string;
        none: string;
    };

    static PostPermissions: {
        value_0: string;
        value_1: string;
        value_2: string;
    };

    static Purpose: {
        books: string;
        casual: string;
        close_friends: string;
        club: string;
        couple: string;
        coworkers: string;
        custom: string;
        deals: string;
        ephemeral: string;
        event_planning: string;
        family: string;
        fandom_radar: string;
        fantasy_league: string;
        fitness: string;
        for_sale: string;
        for_work: string;
        fraternity: string;
        game: string;
        health_support: string;
        high_school_forum: string;
        jobs: string;
        learning: string;
        mentorship: string;
        music_casa_bundle: string;
        neighbors: string;
        none: string;
        oculus: string;
        parenting: string;
        parents: string;
        project: string;
        real_world: string;
        real_world_at_work: string;
        school_class: string;
        sorority: string;
        sports: string;
        sports_activity: string;
        streamer: string;
        study_group: string;
        support: string;
        teammates: string;
        theme: string;
        together_vr: string;
        travel_planning: string;
        work_announcement: string;
        work_demo_group: string;
        work_discussion: string;
        work_ephemeral: string;
        work_feedback: string;
        work_for_sale: string;
        work_garden: string;
        work_guest_group: string;
        work_learning: string;
        work_mentorship: string;
        work_multi_company: string;
        work_recruiting: string;
        work_resume_review: string;
        work_social: string;
        work_stages: string;
        work_team: string;
        work_teamwork: string;
        work_vc_call: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class HomeListing {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAugmentedRealitiesMetadata(fields: any, ...args: any[]): any;

    getChannelsToIntegrityStatus(fields: any, ...args: any[]): any;

    getVideosMetadata(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        ac_type: string;
        additional_fees_description: string;
        agent_company: string;
        agent_email: string;
        agent_fb_page_id: string;
        agent_name: string;
        agent_phone: string;
        applinks: string;
        area_size: string;
        area_unit: string;
        availability: string;
        category_specific_fields: string;
        currency: string;
        days_on_market: string;
        description: string;
        furnish_type: string;
        group_id: string;
        heating_type: string;
        home_listing_id: string;
        id: string;
        image_fetch_status: string;
        images: string;
        laundry_type: string;
        listing_type: string;
        max_currency: string;
        max_price: string;
        min_currency: string;
        min_price: string;
        name: string;
        num_baths: string;
        num_beds: string;
        num_rooms: string;
        num_units: string;
        parking_type: string;
        partner_verification: string;
        pet_policy: string;
        price: string;
        property_type: string;
        sanitized_images: string;
        url: string;
        year_built: string;
    };

    static ImageFetchStatus: {
        direct_upload: string;
        fetch_failed: string;
        fetched: string;
        no_status: string;
        outdated: string;
        partial_fetch: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Hotel {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAugmentedRealitiesMetadata(fields: any, ...args: any[]): any;

    getChannelsToIntegrityStatus(fields: any, ...args: any[]): any;

    getHotelRooms(fields: any, ...args: any[]): any;

    getVideosMetadata(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        address: string;
        applinks: string;
        brand: string;
        category: string;
        category_specific_fields: string;
        currency: string;
        description: string;
        guest_ratings: string;
        hotel_id: string;
        id: string;
        image_fetch_status: string;
        images: string;
        lowest_base_price: string;
        loyalty_program: string;
        margin_level: string;
        name: string;
        phone: string;
        sale_price: string;
        sanitized_images: string;
        star_rating: string;
        unit_price: string;
        url: string;
    };

    static ImageFetchStatus: {
        direct_upload: string;
        fetch_failed: string;
        fetched: string;
        no_status: string;
        outdated: string;
        partial_fetch: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class HotelRoom {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getPricingVariables(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        applinks: string;
        base_price: string;
        currency: string;
        description: string;
        id: string;
        images: string;
        margin_level: string;
        name: string;
        room_id: string;
        sale_price: string;
        url: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class HttpServiceInterface {
    constructor();

    executeRequest(url: any, method: any, headers: any, params: any): any;

}

export class IGComment {
    constructor(...args: any[]);

    createReply(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getReplies(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        from: string;
        hidden: string;
        id: string;
        like_count: string;
        media: string;
        parent_id: string;
        text: string;
        timestamp: string;
        user: string;
        username: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class IGMedia {
    constructor(...args: any[]);

    createComment(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getChildren(fields: any, ...args: any[]): any;

    getComments(fields: any, ...args: any[]): any;

    getInsights(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        caption: string;
        comments_count: string;
        id: string;
        ig_id: string;
        is_comment_enabled: string;
        like_count: string;
        media_product_type: string;
        media_type: string;
        media_url: string;
        owner: string;
        permalink: string;
        shortcode: string;
        thumbnail_url: string;
        timestamp: string;
        username: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class IGUser {
    constructor(...args: any[]);

    createMedia(fields: any, ...args: any[]): any;

    createMediaPublish(fields: any, ...args: any[]): any;

    createMention(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getContentPublishingLimit(fields: any, ...args: any[]): any;

    getInsights(fields: any, ...args: any[]): any;

    getLiveMedia(fields: any, ...args: any[]): any;

    getMedia(fields: any, ...args: any[]): any;

    getRecentlySearchedHashtags(fields: any, ...args: any[]): any;

    getStories(fields: any, ...args: any[]): any;

    getTags(fields: any, ...args: any[]): any;

    static Fields: {
        biography: string;
        business_discovery: string;
        followers_count: string;
        follows_count: string;
        id: string;
        ig_id: string;
        media_count: string;
        mentioned_comment: string;
        mentioned_media: string;
        name: string;
        profile_picture_url: string;
        shopping_review_status: string;
        username: string;
        website: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ImageCopyright {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        artist: string;
        copyright_monitoring_status: string;
        creation_time: string;
        creator: string;
        custom_id: string;
        description: string;
        filename: string;
        id: string;
        image: string;
        matches_count: string;
        original_content_creation_date: string;
        ownership_countries: string;
        tags: string;
        title: string;
        update_time: string;
    };

    static GeoOwnership: {
        ad: string;
        ae: string;
        af: string;
        ag: string;
        ai: string;
        al: string;
        am: string;
        an: string;
        ao: string;
        aq: string;
        ar: string;
        as: string;
        at: string;
        au: string;
        aw: string;
        ax: string;
        az: string;
        ba: string;
        bb: string;
        bd: string;
        be: string;
        bf: string;
        bg: string;
        bh: string;
        bi: string;
        bj: string;
        bl: string;
        bm: string;
        bn: string;
        bo: string;
        bq: string;
        br: string;
        bs: string;
        bt: string;
        bv: string;
        bw: string;
        by: string;
        bz: string;
        ca: string;
        cc: string;
        cd: string;
        cf: string;
        cg: string;
        ch: string;
        ci: string;
        ck: string;
        cl: string;
        cm: string;
        cn: string;
        co: string;
        cr: string;
        cu: string;
        cv: string;
        cw: string;
        cx: string;
        cy: string;
        cz: string;
        de: string;
        dj: string;
        dk: string;
        dm: string;
        do: string;
        dz: string;
        ec: string;
        ee: string;
        eg: string;
        eh: string;
        er: string;
        es: string;
        et: string;
        fi: string;
        fj: string;
        fk: string;
        fm: string;
        fo: string;
        fr: string;
        ga: string;
        gb: string;
        gd: string;
        ge: string;
        gf: string;
        gg: string;
        gh: string;
        gi: string;
        gl: string;
        gm: string;
        gn: string;
        gp: string;
        gq: string;
        gr: string;
        gs: string;
        gt: string;
        gu: string;
        gw: string;
        gy: string;
        hk: string;
        hm: string;
        hn: string;
        hr: string;
        ht: string;
        hu: string;
        id: string;
        ie: string;
        il: string;
        im: string;
        in: string;
        io: string;
        iq: string;
        ir: string;
        is: string;
        it: string;
        je: string;
        jm: string;
        jo: string;
        jp: string;
        ke: string;
        kg: string;
        kh: string;
        ki: string;
        km: string;
        kn: string;
        kp: string;
        kr: string;
        kw: string;
        ky: string;
        kz: string;
        la: string;
        lb: string;
        lc: string;
        li: string;
        lk: string;
        lr: string;
        ls: string;
        lt: string;
        lu: string;
        lv: string;
        ly: string;
        ma: string;
        mc: string;
        md: string;
        me: string;
        mf: string;
        mg: string;
        mh: string;
        mk: string;
        ml: string;
        mm: string;
        mn: string;
        mo: string;
        mp: string;
        mq: string;
        mr: string;
        ms: string;
        mt: string;
        mu: string;
        mv: string;
        mw: string;
        mx: string;
        my: string;
        mz: string;
        na: string;
        nc: string;
        ne: string;
        nf: string;
        ng: string;
        ni: string;
        nl: string;
        no: string;
        np: string;
        nr: string;
        nu: string;
        nz: string;
        om: string;
        pa: string;
        pe: string;
        pf: string;
        pg: string;
        ph: string;
        pk: string;
        pl: string;
        pm: string;
        pn: string;
        pr: string;
        ps: string;
        pt: string;
        pw: string;
        py: string;
        qa: string;
        re: string;
        ro: string;
        rs: string;
        ru: string;
        rw: string;
        sa: string;
        sb: string;
        sc: string;
        sd: string;
        se: string;
        sg: string;
        sh: string;
        si: string;
        sj: string;
        sk: string;
        sl: string;
        sm: string;
        sn: string;
        so: string;
        sr: string;
        ss: string;
        st: string;
        sv: string;
        sx: string;
        sy: string;
        sz: string;
        tc: string;
        td: string;
        tf: string;
        tg: string;
        th: string;
        tj: string;
        tk: string;
        tl: string;
        tm: string;
        tn: string;
        to: string;
        tp: string;
        tr: string;
        tt: string;
        tv: string;
        tw: string;
        tz: string;
        ua: string;
        ug: string;
        um: string;
        us: string;
        uy: string;
        uz: string;
        va: string;
        vc: string;
        ve: string;
        vg: string;
        vi: string;
        vn: string;
        vu: string;
        wf: string;
        ws: string;
        xk: string;
        ye: string;
        yt: string;
        za: string;
        zm: string;
        zw: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class InstagramUser {
    constructor(...args: any[]);

    createAuthorizedAdAccount(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAgencies(fields: any, ...args: any[]): any;

    getAuthorizedAdAccounts(fields: any, ...args: any[]): any;

    static Fields: {
        follow_count: string;
        followed_by_count: string;
        has_profile_picture: string;
        id: string;
        is_private: string;
        is_published: string;
        media_count: string;
        mini_shop_storefront: string;
        profile_pic: string;
        username: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class InstantArticle {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getInsights(fields: any, ...args: any[]): any;

    static Fields: {
        canonical_url: string;
        development_mode: string;
        html_source: string;
        id: string;
        most_recent_import_status: string;
        photos: string;
        publish_status: string;
        published: string;
        videos: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class JobsJob {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getAugmentedRealitiesMetadata(fields: any, ...args: any[]): any;

    getChannelsToIntegrityStatus(fields: any, ...args: any[]): any;

    getVideosMetadata(fields: any, ...args: any[]): any;

    static Fields: {
        address: string;
        applinks: string;
        category_specific_fields: string;
        custom_label_0: string;
        custom_label_1: string;
        custom_label_2: string;
        custom_label_3: string;
        custom_label_4: string;
        custom_label_5: string;
        custom_label_6: string;
        id: string;
        image_fetch_status: string;
        images: string;
        jobs_job_id: string;
        sanitized_images: string;
        unit_price: string;
        url: string;
    };

    static ImageFetchStatus: {
        direct_upload: string;
        fetch_failed: string;
        fetched: string;
        no_status: string;
        outdated: string;
        partial_fetch: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Lead {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    static Fields: {
        ad_id: string;
        ad_name: string;
        adset_id: string;
        adset_name: string;
        campaign_id: string;
        campaign_name: string;
        created_time: string;
        custom_disclaimer_responses: string;
        field_data: string;
        form_id: string;
        home_listing: string;
        id: string;
        is_organic: string;
        partner_name: string;
        platform: string;
        retailer_item_id: string;
        vehicle: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class LeadgenForm {
    constructor(...args: any[]);

    createTestLead(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getLeads(fields: any, ...args: any[]): any;

    getTestLeads(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        allow_organic_lead: string;
        block_display_for_non_targeted_viewer: string;
        context_card: string;
        created_time: string;
        expired_leads_count: string;
        follow_up_action_text: string;
        follow_up_action_url: string;
        id: string;
        is_optimized_for_quality: string;
        leads_count: string;
        legal_content: string;
        locale: string;
        name: string;
        organic_leads_count: string;
        page: string;
        page_id: string;
        privacy_policy_url: string;
        question_page_custom_headline: string;
        questions: string;
        status: string;
        thank_you_page: string;
        tracking_parameters: string;
    };

    static Locale: {
        ar_ar: string;
        cs_cz: string;
        da_dk: string;
        de_de: string;
        en_gb: string;
        en_us: string;
        es_es: string;
        es_la: string;
        fi_fi: string;
        fr_fr: string;
        he_il: string;
        hi_in: string;
        hu_hu: string;
        id_id: string;
        it_it: string;
        ja_jp: string;
        ko_kr: string;
        nb_no: string;
        nl_nl: string;
        pl_pl: string;
        pt_br: string;
        pt_pt: string;
        ro_ro: string;
        ru_ru: string;
        sv_se: string;
        th_th: string;
        tr_tr: string;
        vi_vn: string;
        zh_cn: string;
        zh_hk: string;
        zh_tw: string;
    };

    static Status: {
        active: string;
        archived: string;
        deleted: string;
        draft: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class LifeEvent {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getLikes(fields: any, ...args: any[]): any;

    static Fields: {
        description: string;
        end_time: string;
        from: string;
        id: string;
        is_hidden: string;
        start_time: string;
        title: string;
        updated_time: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Link {
    constructor(...args: any[]);

    createComment(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getLikes(fields: any, ...args: any[]): any;

    static Fields: {
        caption: string;
        created_time: string;
        description: string;
        from: string;
        icon: string;
        id: string;
        link: string;
        message: string;
        multi_share_optimized: string;
        name: string;
        privacy: string;
        via: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class LiveVideo {
    constructor(...args: any[]);

    createInputStream(fields: any, ...args: any[]): any;

    createPoll(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getBlockedUsers(fields: any, ...args: any[]): any;

    getComments(fields: any, ...args: any[]): any;

    getCrosspostSharedPages(fields: any, ...args: any[]): any;

    getCrosspostedBroadcasts(fields: any, ...args: any[]): any;

    getErrors(fields: any, ...args: any[]): any;

    getPolls(fields: any, ...args: any[]): any;

    getReactions(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static BroadcastStatus: {
        live: string;
        live_stopped: string;
        processing: string;
        scheduled_canceled: string;
        scheduled_expired: string;
        scheduled_live: string;
        scheduled_unpublished: string;
        unpublished: string;
        vod: string;
    };

    static Fields: {
        ad_break_config: string;
        ad_break_failure_reason: string;
        broadcast_start_time: string;
        copyright: string;
        creation_time: string;
        dash_ingest_url: string;
        dash_preview_url: string;
        description: string;
        embed_html: string;
        from: string;
        id: string;
        ingest_streams: string;
        is_manual_mode: string;
        is_reference_only: string;
        live_views: string;
        overlay_url: string;
        permalink_url: string;
        planned_start_time: string;
        recommended_encoder_settings: string;
        seconds_left: string;
        secure_stream_url: string;
        status: string;
        stream_url: string;
        targeting: string;
        title: string;
        total_views: string;
        video: string;
    };

    static LiveCommentModerationSetting: {
        default: string;
        discussion: string;
        followed: string;
        follower: string;
        no_hyperlink: string;
        protected_mode: string;
        restricted: string;
        slow: string;
        supporter: string;
        tagged: string;
    };

    static PersistentStreamKeyStatus: {
        disable: string;
        enable: string;
        regenerate: string;
    };

    static Projection: {
        cubemap: string;
        equirectangular: string;
        half_equirectangular: string;
    };

    static Source: {
        owner: string;
        target: string;
    };

    static SpatialAudioFormat: {
        ambix_4: string;
    };

    static Status: {
        live_now: string;
        scheduled_canceled: string;
        scheduled_live: string;
        scheduled_unpublished: string;
        unpublished: string;
    };

    static StereoscopicMode: {
        left_right: string;
        mono: string;
        top_bottom: string;
    };

    static StreamType: {
        ambient: string;
        regular: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class LiveVideoError {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        creation_time: string;
        error_code: string;
        error_message: string;
        error_type: string;
        id: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class LiveVideoInputStream {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        dash_ingest_url: string;
        dash_preview_url: string;
        id: string;
        is_master: string;
        secure_stream_url: string;
        stream_health: string;
        stream_id: string;
        stream_url: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class LocalServiceBusiness {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getChannelsToIntegrityStatus(fields: any, ...args: any[]): any;

    static Availability: {
        available_for_order: string;
        discontinued: string;
        in_stock: string;
        out_of_stock: string;
        pending: string;
        preorder: string;
    };

    static Condition: {
        pc_cpo: string;
        pc_new: string;
        pc_open_box_new: string;
        pc_refurbished: string;
        pc_used: string;
        pc_used_fair: string;
        pc_used_good: string;
        pc_used_like_new: string;
    };

    static Fields: {
        address: string;
        applinks: string;
        availability: string;
        brand: string;
        category: string;
        category_specific_fields: string;
        condition: string;
        cuisine_type: string;
        currency: string;
        custom_label_0: string;
        custom_label_1: string;
        custom_label_2: string;
        custom_label_3: string;
        custom_label_4: string;
        description: string;
        expiration_date: string;
        gtin: string;
        id: string;
        image_fetch_status: string;
        images: string;
        local_service_business_id: string;
        phone: string;
        price: string;
        price_range: string;
        retailer_category: string;
        sanitized_images: string;
        size: string;
        title: string;
        unit_price: string;
        url: string;
        vendor_id: string;
    };

    static ImageFetchStatus: {
        direct_upload: string;
        fetch_failed: string;
        fetched: string;
        no_status: string;
        outdated: string;
        partial_fetch: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class MailingAddress {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        city: string;
        city_page: string;
        country: string;
        id: string;
        postal_code: string;
        region: string;
        street1: string;
        street2: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class MediaFingerprint {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        duration_in_sec: string;
        fingerprint_content_type: string;
        fingerprint_type: string;
        id: string;
        metadata: string;
        title: string;
        universal_content_id: string;
    };

    static FingerprintContentType: {
        am_songtrack: string;
        episode: string;
        movie: string;
        other: string;
        songtrack: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class MusicVideoCopyright {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        creation_time: string;
        displayed_matches_count: string;
        id: string;
        in_conflict: string;
        isrc: string;
        match_rule: string;
        ownership_countries: string;
        reference_file_status: string;
        ridge_monitoring_status: string;
        tags: string;
        update_time: string;
        video_asset: string;
        whitelisted_fb_users: string;
        whitelisted_ig_users: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class NativeOffer {
    constructor(...args: any[]);

    createCode(fields: any, ...args: any[]): any;

    createNativeOfferView(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getViews(fields: any, ...args: any[]): any;

    static BarcodeType: {
        code128: string;
        code128b: string;
        code93: string;
        databar: string;
        databar_expanded: string;
        databar_expanded_stacked: string;
        databar_limited: string;
        datamatrix: string;
        ean: string;
        pdf417: string;
        qr: string;
        upc_a: string;
        upc_e: string;
    };

    static Fields: {
        barcode_photo: string;
        barcode_photo_uri: string;
        barcode_type: string;
        barcode_value: string;
        block_reshares: string;
        details: string;
        disable_location: string;
        discounts: string;
        expiration_time: string;
        id: string;
        instore_code: string;
        location_type: string;
        max_save_count: string;
        online_code: string;
        page: string;
        page_set_id: string;
        redemption_code: string;
        redemption_link: string;
        save_count: string;
        terms: string;
        title: string;
        total_unique_codes: string;
        unique_codes: string;
        unique_codes_file_code_type: string;
        unique_codes_file_name: string;
        unique_codes_file_upload_status: string;
    };

    static LocationType: {
        both: string;
        offline: string;
        online: string;
    };

    static UniqueCodesFileCodeType: {
        barcodes: string;
        discount_and_barcodes: string;
        discount_and_discount: string;
        discount_codes: string;
        instore_barcodes: string;
        instore_discount_codes: string;
        online_discount_codes: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class NativeOfferView {
    constructor(...args: any[]);

    createPhoto(fields: any, ...args: any[]): any;

    createVideo(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        id: string;
        offer: string;
        save_count: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class OfflineConversionDataSet {
    constructor(...args: any[]);

    createAdAccount(fields: any, ...args: any[]): any;

    createAgency(fields: any, ...args: any[]): any;

    createEvent(fields: any, ...args: any[]): any;

    createUpload(fields: any, ...args: any[]): any;

    createValidate(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAdAccounts(fields: any, ...args: any[]): any;

    getAgencies(fields: any, ...args: any[]): any;

    getAudiences(fields: any, ...args: any[]): any;

    getCustomConversions(fields: any, ...args: any[]): any;

    getStats(fields: any, ...args: any[]): any;

    getUploads(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        business: string;
        config: string;
        creation_time: string;
        description: string;
        duplicate_entries: string;
        enable_auto_assign_to_accounts: string;
        event_stats: string;
        event_time_max: string;
        event_time_min: string;
        id: string;
        is_mta_use: string;
        is_restricted_use: string;
        is_unavailable: string;
        last_upload_app: string;
        last_upload_app_changed_time: string;
        match_rate_approx: string;
        matched_entries: string;
        name: string;
        usage: string;
        valid_entries: string;
    };

    static PermittedRoles: {
        admin: string;
        advertiser: string;
        uploader: string;
    };

    static RelationshipType: {
        ad_manager: string;
        agency: string;
        aggregator: string;
        audience_manager: string;
        other: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class OfflineConversionDataSetUpload {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getProgress(fields: any, ...args: any[]): any;

    getPullSessions(fields: any, ...args: any[]): any;

    static Fields: {
        api_calls: string;
        creation_time: string;
        duplicate_entries: string;
        event_stats: string;
        event_time_max: string;
        event_time_min: string;
        first_upload_time: string;
        id: string;
        is_excluded_for_lift: string;
        last_upload_time: string;
        match_rate_approx: string;
        matched_entries: string;
        upload_tag: string;
        valid_entries: string;
    };

    static Order: {
        ascending: string;
        descending: string;
    };

    static SortBy: {
        api_calls: string;
        creation_time: string;
        event_time_max: string;
        event_time_min: string;
        first_upload_time: string;
        is_excluded_for_lift: string;
        last_upload_time: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class OffsitePixel {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        creator: string;
        id: string;
        js_pixel: string;
        last_firing_time: string;
        name: string;
        tag: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class OmegaCustomerTrx {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getCampaigns(fields: any, ...args: any[]): any;

    static Fields: {
        ad_account_ids: string;
        advertiser_name: string;
        amount: string;
        amount_due: string;
        billed_amount_details: string;
        billing_period: string;
        cdn_download_uri: string;
        currency: string;
        download_uri: string;
        due_date: string;
        entity: string;
        id: string;
        invoice_date: string;
        invoice_id: string;
        invoice_type: string;
        liability_type: string;
        payment_status: string;
        payment_term: string;
        type: string;
    };

    static Type: {
        cm: string;
        dm: string;
        inv: string;
        pro_forma: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class OpenGraphContext {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        id: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Page {
    constructor(...args: any[]);

    createAcknowledgeOrder(fields: any, ...args: any[]): any;

    createAgency(fields: any, ...args: any[]): any;

    createAssignedUser(fields: any, ...args: any[]): any;

    createBlocked(fields: any, ...args: any[]): any;

    createBusinessDatum(fields: any, ...args: any[]): any;

    createCanvasElement(fields: any, ...args: any[]): any;

    createCanvase(fields: any, ...args: any[]): any;

    createChatPlugin(fields: any, ...args: any[]): any;

    createCopyrightManualClaim(fields: any, ...args: any[]): any;

    createCustomLabel(fields: any, ...args: any[]): any;

    createCustomUserSetting(fields: any, ...args: any[]): any;

    createExtendThreadControl(fields: any, ...args: any[]): any;

    createFeed(fields: any, ...args: any[]): any;

    createImageCopyright(fields: any, ...args: any[]): any;

    createInstantArticle(fields: any, ...args: any[]): any;

    createInstantArticlesPublish(fields: any, ...args: any[]): any;

    createLeadGenForm(fields: any, ...args: any[]): any;

    createLiveVideo(fields: any, ...args: any[]): any;

    createLocation(fields: any, ...args: any[]): any;

    createMediaFingerprint(fields: any, ...args: any[]): any;

    createMessage(fields: any, ...args: any[]): any;

    createMessageAttachment(fields: any, ...args: any[]): any;

    createMessengerProfile(fields: any, ...args: any[]): any;

    createNativeOffer(fields: any, ...args: any[]): any;

    createNlpConfig(fields: any, ...args: any[]): any;

    createNotificationMessagesDevSupport(fields: any, ...args: any[]): any;

    createPageBackedInstagramAccount(fields: any, ...args: any[]): any;

    createPageWhatsappNumberVerification(fields: any, ...args: any[]): any;

    createPassThreadControl(fields: any, ...args: any[]): any;

    createPassThreadMetadatum(fields: any, ...args: any[]): any;

    createPersona(fields: any, ...args: any[]): any;

    createPhoto(fields: any, ...args: any[]): any;

    createPicture(fields: any, ...args: any[]): any;

    createReleaseThreadControl(fields: any, ...args: any[]): any;

    createRequestThreadControl(fields: any, ...args: any[]): any;

    createSetting(fields: any, ...args: any[]): any;

    createSubscribedApp(fields: any, ...args: any[]): any;

    createTab(fields: any, ...args: any[]): any;

    createTakeThreadControl(fields: any, ...args: any[]): any;

    createUnlinkAccount(fields: any, ...args: any[]): any;

    createVideo(fields: any, ...args: any[]): any;

    createVideoCopyright(fields: any, ...args: any[]): any;

    createVideoCopyrightRule(fields: any, ...args: any[]): any;

    deleteAgencies(...args: any[]): any;

    deleteAssignedUsers(...args: any[]): any;

    deleteBlocked(...args: any[]): any;

    deleteCustomUserSettings(...args: any[]): any;

    deleteLocations(...args: any[]): any;

    deleteMessengerProfile(...args: any[]): any;

    deleteSubscribedApps(...args: any[]): any;

    deleteTabs(...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAdsPosts(fields: any, ...args: any[]): any;

    getAgencies(fields: any, ...args: any[]): any;

    getAlbums(fields: any, ...args: any[]): any;

    getAssignedUsers(fields: any, ...args: any[]): any;

    getBlocked(fields: any, ...args: any[]): any;

    getCallToActions(fields: any, ...args: any[]): any;

    getCanvasElements(fields: any, ...args: any[]): any;

    getCanvases(fields: any, ...args: any[]): any;

    getChatPlugin(fields: any, ...args: any[]): any;

    getClaimedUrls(fields: any, ...args: any[]): any;

    getCommerceEligibility(fields: any, ...args: any[]): any;

    getCommerceMerchantSettings(fields: any, ...args: any[]): any;

    getCommerceOrders(fields: any, ...args: any[]): any;

    getCommercePayouts(fields: any, ...args: any[]): any;

    getCommerceTransactions(fields: any, ...args: any[]): any;

    getConversations(fields: any, ...args: any[]): any;

    getCopyrightWhitelistedPartners(fields: any, ...args: any[]): any;

    getCrosspostWhitelistedPages(fields: any, ...args: any[]): any;

    getCustomLabels(fields: any, ...args: any[]): any;

    getCustomUserSettings(fields: any, ...args: any[]): any;

    getEvents(fields: any, ...args: any[]): any;

    getFeed(fields: any, ...args: any[]): any;

    getGlobalBrandChildren(fields: any, ...args: any[]): any;

    getGroups(fields: any, ...args: any[]): any;

    getImageCopyrights(fields: any, ...args: any[]): any;

    getIndexedVideos(fields: any, ...args: any[]): any;

    getInsights(fields: any, ...args: any[]): any;

    getInstagramAccounts(fields: any, ...args: any[]): any;

    getInstantArticles(fields: any, ...args: any[]): any;

    getInstantArticlesInsights(fields: any, ...args: any[]): any;

    getInstantArticlesStats(fields: any, ...args: any[]): any;

    getLeadGenForms(fields: any, ...args: any[]): any;

    getLikes(fields: any, ...args: any[]): any;

    getLiveVideos(fields: any, ...args: any[]): any;

    getLocations(fields: any, ...args: any[]): any;

    getMediaFingerprints(fields: any, ...args: any[]): any;

    getMessagingFeatureReview(fields: any, ...args: any[]): any;

    getMessengerProfile(fields: any, ...args: any[]): any;

    getNativeOffers(fields: any, ...args: any[]): any;

    getPageBackedInstagramAccounts(fields: any, ...args: any[]): any;

    getPersonas(fields: any, ...args: any[]): any;

    getPhotos(fields: any, ...args: any[]): any;

    getPicture(fields: any, ...args: any[]): any;

    getPosts(fields: any, ...args: any[]): any;

    getProductCatalogs(fields: any, ...args: any[]): any;

    getPublishedPosts(fields: any, ...args: any[]): any;

    getRatings(fields: any, ...args: any[]): any;

    getRoles(fields: any, ...args: any[]): any;

    getRtbDynamicPosts(fields: any, ...args: any[]): any;

    getScheduledPosts(fields: any, ...args: any[]): any;

    getSecondaryReceivers(fields: any, ...args: any[]): any;

    getSettings(fields: any, ...args: any[]): any;

    getShopSetupStatus(fields: any, ...args: any[]): any;

    getSubscribedApps(fields: any, ...args: any[]): any;

    getTabs(fields: any, ...args: any[]): any;

    getTagged(fields: any, ...args: any[]): any;

    getThreadOwner(fields: any, ...args: any[]): any;

    getThreads(fields: any, ...args: any[]): any;

    getVideoCopyrightRules(fields: any, ...args: any[]): any;

    getVideoLists(fields: any, ...args: any[]): any;

    getVideos(fields: any, ...args: any[]): any;

    getVisitorPosts(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Alignment: {
        left: string;
        right: string;
    };

    static Attire: {
        casual: string;
        dressy: string;
        unspecified: string;
    };

    static DeveloperAction: {
        enable_followup_message: string;
        send_re_optin: string;
    };

    static EntryPointIcon: {
        chat_angular_icon: string;
        chat_round_icon: string;
        messenger_icon: string;
        none: string;
    };

    static EntryPointLabel: {
        ask_us: string;
        chat: string;
        help: string;
        none: string;
    };

    static Fields: {
        about: string;
        access_token: string;
        ad_campaign: string;
        affiliation: string;
        app_id: string;
        artists_we_like: string;
        attire: string;
        awards: string;
        band_interests: string;
        band_members: string;
        best_page: string;
        bio: string;
        birthday: string;
        booking_agent: string;
        built: string;
        business: string;
        can_checkin: string;
        can_post: string;
        category: string;
        category_list: string;
        checkins: string;
        company_overview: string;
        connected_instagram_account: string;
        connected_page_backed_instagram_account: string;
        contact_address: string;
        copyright_whitelisted_ig_partners: string;
        country_page_likes: string;
        cover: string;
        culinary_team: string;
        current_location: string;
        delivery_and_pickup_option_info: string;
        description: string;
        description_html: string;
        differently_open_offerings: string;
        directed_by: string;
        display_subtext: string;
        displayed_message_response_time: string;
        emails: string;
        engagement: string;
        fan_count: string;
        featured_video: string;
        features: string;
        followers_count: string;
        food_styles: string;
        founded: string;
        general_info: string;
        general_manager: string;
        genre: string;
        global_brand_page_name: string;
        global_brand_root_id: string;
        has_added_app: string;
        has_transitioned_to_new_page_experience: string;
        has_whatsapp_business_number: string;
        has_whatsapp_number: string;
        hometown: string;
        hours: string;
        id: string;
        impressum: string;
        influences: string;
        instagram_business_account: string;
        instant_articles_review_status: string;
        is_always_open: string;
        is_chain: string;
        is_community_page: string;
        is_eligible_for_branded_content: string;
        is_messenger_bot_get_started_enabled: string;
        is_messenger_platform_bot: string;
        is_owned: string;
        is_permanently_closed: string;
        is_published: string;
        is_unclaimed: string;
        is_verified: string;
        is_webhooks_subscribed: string;
        keywords: string;
        leadgen_tos_acceptance_time: string;
        leadgen_tos_accepted: string;
        leadgen_tos_accepting_user: string;
        link: string;
        location: string;
        members: string;
        merchant_id: string;
        merchant_review_status: string;
        messaging_feature_status: string;
        messenger_ads_default_icebreakers: string;
        messenger_ads_default_page_welcome_message: string;
        messenger_ads_default_quick_replies: string;
        messenger_ads_quick_replies_type: string;
        mini_shop_storefront: string;
        mission: string;
        mpg: string;
        name: string;
        name_with_location_descriptor: string;
        network: string;
        new_like_count: string;
        offer_eligible: string;
        overall_star_rating: string;
        page_token: string;
        parent_page: string;
        parking: string;
        payment_options: string;
        personal_info: string;
        personal_interests: string;
        pharma_safety_info: string;
        phone: string;
        pickup_options: string;
        place_type: string;
        plot_outline: string;
        preferred_audience: string;
        press_contact: string;
        price_range: string;
        privacy_info_url: string;
        produced_by: string;
        products: string;
        promotion_eligible: string;
        promotion_ineligible_reason: string;
        public_transit: string;
        rating_count: string;
        recipient: string;
        record_label: string;
        release_date: string;
        restaurant_services: string;
        restaurant_specialties: string;
        schedule: string;
        screenplay_by: string;
        season: string;
        single_line_address: string;
        starring: string;
        start_info: string;
        store_code: string;
        store_location_descriptor: string;
        store_number: string;
        studio: string;
        supports_donate_button_in_live_video: string;
        supports_instant_articles: string;
        talking_about_count: string;
        temporary_status: string;
        unread_message_count: string;
        unread_notif_count: string;
        unseen_message_count: string;
        username: string;
        verification_status: string;
        voip_info: string;
        website: string;
        were_here_count: string;
        whatsapp_number: string;
        written_by: string;
    };

    static FoodStyles: {
        afghani: string;
        american_new_: string;
        american_traditional_: string;
        asian_fusion: string;
        barbeque: string;
        brazilian: string;
        breakfast: string;
        british: string;
        brunch: string;
        buffets: string;
        burgers: string;
        burmese: string;
        cajun_creole: string;
        caribbean: string;
        chinese: string;
        creperies: string;
        cuban: string;
        delis: string;
        diners: string;
        ethiopian: string;
        fast_food: string;
        filipino: string;
        fondue: string;
        food_stands: string;
        french: string;
        german: string;
        greek_and_mediterranean: string;
        hawaiian: string;
        himalayan_nepalese: string;
        hot_dogs: string;
        indian_pakistani: string;
        irish: string;
        italian: string;
        japanese: string;
        korean: string;
        latin_american: string;
        mexican: string;
        middle_eastern: string;
        moroccan: string;
        pizza: string;
        russian: string;
        sandwiches: string;
        seafood: string;
        singaporean: string;
        soul_food: string;
        southern: string;
        spanish_basque: string;
        steakhouses: string;
        sushi_bars: string;
        taiwanese: string;
        tapas_bars: string;
        tex_mex: string;
        thai: string;
        turkish: string;
        vegan: string;
        vegetarian: string;
        vietnamese: string;
    };

    static GreetingDialogDisplay: {
        hide: string;
        show: string;
        welcome_message: string;
    };

    static GuestChatMode: {
        disabled: string;
        enabled: string;
    };

    static MessagingType: {
        message_tag: string;
        response: string;
        update: string;
    };

    static MobileChatDisplay: {
        app_switch: string;
        chat_tab: string;
    };

    static Model: {
        arabic: string;
        chinese: string;
        croatian: string;
        custom: string;
        danish: string;
        dutch: string;
        english: string;
        french_standard: string;
        georgian: string;
        german_standard: string;
        greek: string;
        hebrew: string;
        hungarian: string;
        irish: string;
        italian_standard: string;
        korean: string;
        norwegian_bokmal: string;
        polish: string;
        portuguese: string;
        romanian: string;
        spanish: string;
        swedish: string;
        vietnamese: string;
    };

    static NotificationType: {
        no_push: string;
        regular: string;
        silent_push: string;
    };

    static PermittedTasks: {
        advertise: string;
        analyze: string;
        cashier_role: string;
        create_content: string;
        manage: string;
        manage_jobs: string;
        manage_leads: string;
        messaging: string;
        moderate: string;
        moderate_community: string;
        pages_messaging: string;
        pages_messaging_subscriptions: string;
        profile_plus_advertise: string;
        profile_plus_analyze: string;
        profile_plus_create_content: string;
        profile_plus_facebook_access: string;
        profile_plus_full_control: string;
        profile_plus_manage: string;
        profile_plus_messaging: string;
        profile_plus_moderate: string;
        profile_plus_revenue: string;
        read_page_mailboxes: string;
        view_monetization_insights: string;
    };

    static PickupOptions: {
        curbside: string;
        in_store: string;
        other: string;
    };

    static Platform: {
        instagram: string;
        messenger: string;
    };

    static PublishStatus: {
        draft: string;
        live: string;
    };

    static SenderAction: {
        mark_seen: string;
        react: string;
        typing_off: string;
        typing_on: string;
        unreact: string;
    };

    static SubscribedFields: {
        affiliation: string;
        attire: string;
        awards: string;
        bio: string;
        birthday: string;
        branded_camera: string;
        category: string;
        checkins: string;
        company_overview: string;
        conversations: string;
        culinary_team: string;
        current_location: string;
        description: string;
        email: string;
        feature_access_list: string;
        feed: string;
        founded: string;
        general_info: string;
        general_manager: string;
        hometown: string;
        hours: string;
        inbox_labels: string;
        invoice_access_invoice_change: string;
        invoice_access_onboarding_status_active: string;
        leadgen: string;
        leadgen_fat: string;
        live_videos: string;
        local_delivery: string;
        location: string;
        mcom_invoice_change: string;
        members: string;
        mention: string;
        merchant_review: string;
        message_deliveries: string;
        message_echoes: string;
        message_mention: string;
        message_reactions: string;
        message_reads: string;
        messages: string;
        messaging_account_linking: string;
        messaging_appointments: string;
        messaging_checkout_updates: string;
        messaging_customer_information: string;
        messaging_direct_sends: string;
        messaging_fblogin_account_linking: string;
        messaging_feedback: string;
        messaging_game_plays: string;
        messaging_handovers: string;
        messaging_optins: string;
        messaging_optouts: string;
        messaging_page_feedback: string;
        messaging_payments: string;
        messaging_policy_enforcement: string;
        messaging_postbacks: string;
        messaging_pre_checkouts: string;
        messaging_referrals: string;
        mission: string;
        name: string;
        page_about_story: string;
        page_change_proposal: string;
        page_upcoming_change: string;
        parking: string;
        payment_options: string;
        personal_info: string;
        personal_interests: string;
        phone: string;
        picture: string;
        price_range: string;
        product_review: string;
        products: string;
        public_transit: string;
        publisher_subscriptions: string;
        ratings: string;
        registration: string;
        standby: string;
        user_action: string;
        video_text_question_responses: string;
        videos: string;
        website: string;
    };

    static Tasks: {
        advertise: string;
        analyze: string;
        cashier_role: string;
        create_content: string;
        manage: string;
        manage_jobs: string;
        manage_leads: string;
        messaging: string;
        moderate: string;
        moderate_community: string;
        pages_messaging: string;
        pages_messaging_subscriptions: string;
        profile_plus_advertise: string;
        profile_plus_analyze: string;
        profile_plus_create_content: string;
        profile_plus_facebook_access: string;
        profile_plus_full_control: string;
        profile_plus_manage: string;
        profile_plus_messaging: string;
        profile_plus_moderate: string;
        profile_plus_revenue: string;
        read_page_mailboxes: string;
        view_monetization_insights: string;
    };

    static TemporaryStatus: {
        differently_open: string;
        no_data: string;
        operating_as_usual: string;
        temporarily_closed: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class PageAdminNote {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        body: string;
        from: string;
        id: string;
        note_label: string;
        user: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class PageCallToAction {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static AndroidDestinationType: {
        app_deeplink: string;
        become_a_volunteer: string;
        email: string;
        facebook_app: string;
        follow: string;
        marketplace_inventory_page: string;
        menu_on_facebook: string;
        messenger: string;
        mini_shop: string;
        mobile_center: string;
        none: string;
        phone_call: string;
        shop_on_facebook: string;
        website: string;
    };

    static Fields: {
        android_app: string;
        android_deeplink: string;
        android_destination_type: string;
        android_package_name: string;
        android_url: string;
        created_time: string;
        email_address: string;
        from: string;
        id: string;
        intl_number_with_plus: string;
        iphone_app: string;
        iphone_deeplink: string;
        iphone_destination_type: string;
        iphone_url: string;
        status: string;
        type: string;
        updated_time: string;
        web_destination_type: string;
        web_url: string;
    };

    static IphoneDestinationType: {
        app_deeplink: string;
        become_a_volunteer: string;
        email: string;
        facebook_app: string;
        follow: string;
        marketplace_inventory_page: string;
        menu_on_facebook: string;
        messenger: string;
        mini_shop: string;
        none: string;
        phone_call: string;
        shop_on_facebook: string;
        website: string;
    };

    static Type: {
        become_a_volunteer: string;
        book_appointment: string;
        book_now: string;
        buy_tickets: string;
        call_now: string;
        charity_donate: string;
        contact_us: string;
        donate_now: string;
        email: string;
        follow_page: string;
        get_directions: string;
        get_offer: string;
        get_offer_view: string;
        interested: string;
        learn_more: string;
        listen: string;
        local_dev_platform: string;
        message: string;
        mobile_center: string;
        open_app: string;
        order_food: string;
        play_music: string;
        play_now: string;
        purchase_gift_cards: string;
        request_appointment: string;
        request_quote: string;
        shop_now: string;
        shop_on_facebook: string;
        sign_up: string;
        view_inventory: string;
        view_menu: string;
        view_shop: string;
        visit_group: string;
        watch_now: string;
        woodhenge_support: string;
    };

    static WebDestinationType: {
        become_a_volunteer: string;
        become_supporter: string;
        email: string;
        follow: string;
        messenger: string;
        mobile_center: string;
        none: string;
        shop_on_facebook: string;
        website: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class PagePost {
    constructor(...args: any[]);

    createComment(fields: any, ...args: any[]): any;

    createLike(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    deleteLikes(...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAttachments(fields: any, ...args: any[]): any;

    getComments(fields: any, ...args: any[]): any;

    getDynamicPosts(fields: any, ...args: any[]): any;

    getInsights(fields: any, ...args: any[]): any;

    getLikes(fields: any, ...args: any[]): any;

    getReactions(fields: any, ...args: any[]): any;

    getSharedPosts(fields: any, ...args: any[]): any;

    getSponsorTags(fields: any, ...args: any[]): any;

    getTo(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static BackdatedTimeGranularity: {
        day: string;
        hour: string;
        min: string;
        month: string;
        none: string;
        year: string;
    };

    static FeedStoryVisibility: {
        hidden: string;
        visible: string;
    };

    static Fields: {
        actions: string;
        admin_creator: string;
        allowed_advertising_objectives: string;
        application: string;
        backdated_time: string;
        call_to_action: string;
        can_reply_privately: string;
        child_attachments: string;
        comments_mirroring_domain: string;
        coordinates: string;
        created_time: string;
        event: string;
        expanded_height: string;
        expanded_width: string;
        feed_targeting: string;
        from: string;
        full_picture: string;
        height: string;
        icon: string;
        id: string;
        instagram_eligibility: string;
        is_app_share: string;
        is_eligible_for_promotion: string;
        is_expired: string;
        is_hidden: string;
        is_inline_created: string;
        is_instagram_eligible: string;
        is_popular: string;
        is_published: string;
        is_spherical: string;
        message: string;
        message_tags: string;
        multi_share_end_card: string;
        multi_share_optimized: string;
        parent_id: string;
        permalink_url: string;
        picture: string;
        place: string;
        privacy: string;
        promotable_id: string;
        promotion_status: string;
        properties: string;
        scheduled_publish_time: string;
        shares: string;
        status_type: string;
        story: string;
        story_tags: string;
        subscribed: string;
        target: string;
        targeting: string;
        timeline_visibility: string;
        updated_time: string;
        via: string;
        video_buying_eligibility: string;
        width: string;
    };

    static TimelineVisibility: {
        forced_allow: string;
        hidden: string;
        normal: string;
    };

    static With: {
        location: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class PageSavedFilter {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        display_name: string;
        filters: string;
        id: string;
        page_id: string;
        section: string;
        time_created: string;
        time_updated: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class PageUpcomingChange {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        change_type: string;
        effective_time: string;
        id: string;
        page: string;
        proposal: string;
        timer_status: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class PageUserMessageThreadLabel {
    constructor(...args: any[]);

    createLabel(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    deleteLabel(...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    static Fields: {
        id: string;
        page_label_name: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class PartnerStudy {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        additional_info: string;
        brand: string;
        client_name: string;
        emails: string;
        id: string;
        input_ids: string;
        is_export: string;
        lift_study: string;
        location: string;
        match_file_ds: string;
        name: string;
        partner_defined_id: string;
        partner_household_graph_dataset_id: string;
        status: string;
        study_end_date: string;
        study_start_date: string;
        study_type: string;
        submit_date: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class PaymentEnginePayment {
    constructor(...args: any[]);

    createDispute(fields: any, ...args: any[]): any;

    createRefund(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    static Fields: {
        actions: string;
        application: string;
        country: string;
        created_time: string;
        disputes: string;
        fraud_status: string;
        fulfillment_status: string;
        id: string;
        is_from_ad: string;
        is_from_page_post: string;
        items: string;
        payout_foreign_exchange_rate: string;
        phone_support_eligible: string;
        platform: string;
        refundable_amount: string;
        request_id: string;
        tax: string;
        tax_country: string;
        test: string;
        user: string;
    };

    static Reason: {
        banned_user: string;
        denied_refund: string;
        granted_replacement_item: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class PaymentSubscription {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        amount: string;
        app_param_data: string;
        application: string;
        billing_period: string;
        canceled_reason: string;
        created_time: string;
        currency: string;
        id: string;
        last_payment: string;
        next_bill_time: string;
        next_period_amount: string;
        next_period_currency: string;
        next_period_product: string;
        payment_status: string;
        pending_cancel: string;
        period_start_time: string;
        product: string;
        status: string;
        test: string;
        trial_amount: string;
        trial_currency: string;
        trial_expiry_time: string;
        updated_time: string;
        user: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Persona {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    static Fields: {
        id: string;
        name: string;
        profile_picture_url: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Photo {
    constructor(...args: any[]);

    createComment(fields: any, ...args: any[]): any;

    createLike(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getComments(fields: any, ...args: any[]): any;

    getInsights(fields: any, ...args: any[]): any;

    getLikes(fields: any, ...args: any[]): any;

    getSponsorTags(fields: any, ...args: any[]): any;

    static BackdatedTimeGranularity: {
        day: string;
        hour: string;
        min: string;
        month: string;
        none: string;
        year: string;
    };

    static Fields: {
        album: string;
        alt_text: string;
        alt_text_custom: string;
        backdated_time: string;
        backdated_time_granularity: string;
        can_backdate: string;
        can_delete: string;
        can_tag: string;
        created_time: string;
        event: string;
        from: string;
        height: string;
        icon: string;
        id: string;
        images: string;
        link: string;
        name: string;
        name_tags: string;
        page_story_id: string;
        picture: string;
        place: string;
        position: string;
        source: string;
        target: string;
        updated_time: string;
        webp_images: string;
        width: string;
    };

    static Type: {
        profile: string;
        tagged: string;
        uploaded: string;
    };

    static UnpublishedContentType: {
        ads_post: string;
        draft: string;
        inline_created: string;
        published: string;
        reviewable_branded_content: string;
        scheduled: string;
        scheduled_recurring: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Place {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        id: string;
        location: string;
        name: string;
        overall_rating: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class PlaceTopic {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        count: string;
        has_children: string;
        icon_url: string;
        id: string;
        name: string;
        parent_ids: string;
        plural_name: string;
        top_subtopic_names: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class PlayableContent {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        id: string;
        name: string;
        owner: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Post {
    constructor(...args: any[]);

    createComment(fields: any, ...args: any[]): any;

    createLike(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    deleteLikes(...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAttachments(fields: any, ...args: any[]): any;

    getComments(fields: any, ...args: any[]): any;

    getDynamicPosts(fields: any, ...args: any[]): any;

    getInsights(fields: any, ...args: any[]): any;

    getReactions(fields: any, ...args: any[]): any;

    getSharedPosts(fields: any, ...args: any[]): any;

    getSponsorTags(fields: any, ...args: any[]): any;

    getTo(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static BackdatedTimeGranularity: {
        day: string;
        hour: string;
        min: string;
        month: string;
        none: string;
        year: string;
    };

    static CheckinEntryPoint: {
        branding_checkin: string;
        branding_other: string;
        branding_photo: string;
        branding_status: string;
    };

    static FeedStoryVisibility: {
        hidden: string;
        visible: string;
    };

    static Fields: {
        actions: string;
        admin_creator: string;
        allowed_advertising_objectives: string;
        application: string;
        backdated_time: string;
        call_to_action: string;
        can_reply_privately: string;
        caption: string;
        child_attachments: string;
        comments_mirroring_domain: string;
        coordinates: string;
        created_time: string;
        description: string;
        event: string;
        expanded_height: string;
        expanded_width: string;
        feed_targeting: string;
        from: string;
        full_picture: string;
        height: string;
        icon: string;
        id: string;
        instagram_eligibility: string;
        is_app_share: string;
        is_eligible_for_promotion: string;
        is_expired: string;
        is_hidden: string;
        is_inline_created: string;
        is_instagram_eligible: string;
        is_popular: string;
        is_published: string;
        is_spherical: string;
        link: string;
        message: string;
        message_tags: string;
        multi_share_end_card: string;
        multi_share_optimized: string;
        name: string;
        object_id: string;
        parent_id: string;
        permalink_url: string;
        picture: string;
        place: string;
        privacy: string;
        promotable_id: string;
        promotion_status: string;
        properties: string;
        scheduled_publish_time: string;
        shares: string;
        source: string;
        status_type: string;
        story: string;
        story_tags: string;
        subscribed: string;
        target: string;
        targeting: string;
        timeline_visibility: string;
        type: string;
        updated_time: string;
        via: string;
        video_buying_eligibility: string;
        width: string;
    };

    static Formatting: {
        markdown: string;
        plaintext: string;
    };

    static PlaceAttachmentSetting: {
        value_1: string;
        value_2: string;
    };

    static PostSurfacesBlacklist: {
        value_1: string;
        value_2: string;
        value_3: string;
        value_4: string;
        value_5: string;
    };

    static PostingToRedspace: {
        disabled: string;
        enabled: string;
    };

    static TargetSurface: {
        story: string;
        timeline: string;
    };

    static TimelineVisibility: {
        forced_allow: string;
        hidden: string;
        normal: string;
    };

    static UnpublishedContentType: {
        ads_post: string;
        draft: string;
        inline_created: string;
        published: string;
        reviewable_branded_content: string;
        scheduled: string;
        scheduled_recurring: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class PrivateLiftStudyInstance {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        breakdown_key: string;
        created_time: string;
        id: string;
        latest_status_update_time: string;
        server_ips: string;
        status: string;
        tier: string;
    };

    static Operation: {
        aggregate: string;
        compute: string;
        id_match: string;
        next: string;
        none: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ProductCatalog {
    constructor(...args: any[]);

    createAgency(fields: any, ...args: any[]): any;

    createAssignedUser(fields: any, ...args: any[]): any;

    createAutomotiveModel(fields: any, ...args: any[]): any;

    createBatch(fields: any, ...args: any[]): any;

    createCatalogWebsiteSetting(fields: any, ...args: any[]): any;

    createCategory(fields: any, ...args: any[]): any;

    createCpasLsbImageBank(fields: any, ...args: any[]): any;

    createExternalEventSource(fields: any, ...args: any[]): any;

    createHomeListing(fields: any, ...args: any[]): any;

    createHotel(fields: any, ...args: any[]): any;

    createHotelRoomsBatch(fields: any, ...args: any[]): any;

    createItemsBatch(fields: any, ...args: any[]): any;

    createLocalizedItemsBatch(fields: any, ...args: any[]): any;

    createMediaTitle(fields: any, ...args: any[]): any;

    createPricingVariablesBatch(fields: any, ...args: any[]): any;

    createProduct(fields: any, ...args: any[]): any;

    createProductFeed(fields: any, ...args: any[]): any;

    createProductGroup(fields: any, ...args: any[]): any;

    createProductSet(fields: any, ...args: any[]): any;

    createVehicle(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    deleteAgencies(...args: any[]): any;

    deleteAssignedUsers(...args: any[]): any;

    deleteExternalEventSources(...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAgencies(fields: any, ...args: any[]): any;

    getArEffectsBatchStatus(fields: any, ...args: any[]): any;

    getAssignedUsers(fields: any, ...args: any[]): any;

    getAutomotiveModels(fields: any, ...args: any[]): any;

    getCategories(fields: any, ...args: any[]): any;

    getCheckBatchRequestStatus(fields: any, ...args: any[]): any;

    getCollaborativeAdsLsbImageBank(fields: any, ...args: any[]): any;

    getCollaborativeAdsShareSettings(fields: any, ...args: any[]): any;

    getDestinations(fields: any, ...args: any[]): any;

    getDiagnostics(fields: any, ...args: any[]): any;

    getEventStats(fields: any, ...args: any[]): any;

    getExternalEventSources(fields: any, ...args: any[]): any;

    getFlights(fields: any, ...args: any[]): any;

    getHomeListings(fields: any, ...args: any[]): any;

    getHotelRoomsBatch(fields: any, ...args: any[]): any;

    getHotels(fields: any, ...args: any[]): any;

    getPricingVariablesBatch(fields: any, ...args: any[]): any;

    getProductFeeds(fields: any, ...args: any[]): any;

    getProductGroups(fields: any, ...args: any[]): any;

    getProductSets(fields: any, ...args: any[]): any;

    getProductSetsBatch(fields: any, ...args: any[]): any;

    getProducts(fields: any, ...args: any[]): any;

    getVehicleOffers(fields: any, ...args: any[]): any;

    getVehicles(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        business: string;
        commerce_merchant_settings: string;
        da_display_settings: string;
        default_image_url: string;
        fallback_image_url: string;
        feed_count: string;
        id: string;
        is_catalog_segment: string;
        name: string;
        product_count: string;
        store_catalog_settings: string;
        vertical: string;
    };

    static ItemSubType: {
        appliances: string;
        baby_feeding: string;
        baby_transport: string;
        beauty: string;
        bedding: string;
        cameras: string;
        cell_phones_and_smart_watches: string;
        cleaning_supplies: string;
        clothing: string;
        clothing_accessories: string;
        computers_and_tablets: string;
        diapering_and_potty_training: string;
        electronics_accessories: string;
        furniture: string;
        health: string;
        home_goods: string;
        jewelry: string;
        nursery: string;
        printers_and_scanners: string;
        projectors: string;
        shoes_and_footwear: string;
        software: string;
        toys: string;
        tvs_and_monitors: string;
        video_game_consoles_and_video_games: string;
        watches: string;
    };

    static PermittedRoles: {
        admin: string;
        advertiser: string;
    };

    static PermittedTasks: {
        advertise: string;
        manage: string;
        manage_ar: string;
    };

    static Standard: {
        google: string;
    };

    static Tasks: {
        advertise: string;
        manage: string;
        manage_ar: string;
    };

    static Vertical: {
        adoptable_pets: string;
        bookable: string;
        commerce: string;
        destinations: string;
        flights: string;
        home_listings: string;
        hotels: string;
        jobs: string;
        local_delivery_shipping_profiles: string;
        local_service_businesses: string;
        offer_items: string;
        offline_commerce: string;
        ticketed_experiences: string;
        transactable_items: string;
        vehicles: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ProductFeed {
    constructor(...args: any[]);

    createRule(fields: any, ...args: any[]): any;

    createSupplementaryFeedAssoc(fields: any, ...args: any[]): any;

    createUpload(fields: any, ...args: any[]): any;

    createUploadSchedule(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAutomotiveModels(fields: any, ...args: any[]): any;

    getDestinations(fields: any, ...args: any[]): any;

    getFlights(fields: any, ...args: any[]): any;

    getHomeListings(fields: any, ...args: any[]): any;

    getHotels(fields: any, ...args: any[]): any;

    getProducts(fields: any, ...args: any[]): any;

    getRules(fields: any, ...args: any[]): any;

    getUploadSchedules(fields: any, ...args: any[]): any;

    getUploads(fields: any, ...args: any[]): any;

    getVehicleOffers(fields: any, ...args: any[]): any;

    getVehicles(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Delimiter: {
        autodetect: string;
        bar: string;
        comma: string;
        semicolon: string;
        tab: string;
        tilde: string;
    };

    static Encoding: {
        autodetect: string;
        latin1: string;
        utf16be: string;
        utf16le: string;
        utf32be: string;
        utf32le: string;
        utf8: string;
    };

    static FeedType: {
        auto: string;
        automotive_model: string;
        destination: string;
        flight: string;
        home_listing: string;
        hotel: string;
        hotel_room: string;
        local_inventory: string;
        market: string;
        media_title: string;
        offer: string;
        products: string;
        transactable_items: string;
        vehicle_offer: string;
        vehicles: string;
    };

    static Fields: {
        country: string;
        created_time: string;
        default_currency: string;
        deletion_enabled: string;
        delimiter: string;
        encoding: string;
        file_name: string;
        id: string;
        ingestion_source_type: string;
        item_sub_type: string;
        latest_upload: string;
        migrated_from_feed_id: string;
        name: string;
        override_type: string;
        primary_feeds: string;
        product_count: string;
        quoted_fields_mode: string;
        schedule: string;
        supplementary_feeds: string;
        update_schedule: string;
    };

    static IngestionSourceType: {
        primary_feed: string;
        supplementary_feed: string;
    };

    static ItemSubType: {
        appliances: string;
        baby_feeding: string;
        baby_transport: string;
        beauty: string;
        bedding: string;
        cameras: string;
        cell_phones_and_smart_watches: string;
        cleaning_supplies: string;
        clothing: string;
        clothing_accessories: string;
        computers_and_tablets: string;
        diapering_and_potty_training: string;
        electronics_accessories: string;
        furniture: string;
        health: string;
        home_goods: string;
        jewelry: string;
        nursery: string;
        printers_and_scanners: string;
        projectors: string;
        shoes_and_footwear: string;
        software: string;
        toys: string;
        tvs_and_monitors: string;
        video_game_consoles_and_video_games: string;
        watches: string;
    };

    static OverrideType: {
        catalog_segment_customize_default: string;
        country: string;
        language: string;
        language_and_country: string;
        local: string;
    };

    static QuotedFieldsMode: {
        autodetect: string;
        off: string;
        on: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ProductFeedRule {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        attribute: string;
        id: string;
        params: string;
        rule_type: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ProductFeedSchedule {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static DayOfWeek: {
        friday: string;
        monday: string;
        saturday: string;
        sunday: string;
        thursday: string;
        tuesday: string;
        wednesday: string;
    };

    static Fields: {
        day_of_month: string;
        day_of_week: string;
        hour: string;
        id: string;
        interval: string;
        interval_count: string;
        minute: string;
        timezone: string;
        url: string;
        username: string;
    };

    static Interval: {
        daily: string;
        hourly: string;
        monthly: string;
        weekly: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ProductFeedUpload {
    constructor(...args: any[]);

    createErrorReport(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getErrors(fields: any, ...args: any[]): any;

    static Fields: {
        end_time: string;
        error_count: string;
        error_report: string;
        filename: string;
        id: string;
        input_method: string;
        num_deleted_items: string;
        num_detected_items: string;
        num_invalid_items: string;
        num_persisted_items: string;
        start_time: string;
        url: string;
        warning_count: string;
    };

    static InputMethod: {
        google_sheets_fetch: string;
        manual_upload: string;
        reupload_last_file: string;
        server_fetch: string;
        user_initiated_server_fetch: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ProductFeedUploadError {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getSamples(fields: any, ...args: any[]): any;

    getSuggestedRules(fields: any, ...args: any[]): any;

    static AffectedSurfaces: {
        dynamic_ads: string;
        marketplace: string;
        us_marketplace: string;
    };

    static Fields: {
        affected_surfaces: string;
        description: string;
        error_type: string;
        id: string;
        severity: string;
        summary: string;
        total_count: string;
    };

    static Severity: {
        fatal: string;
        warning: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ProductFeedUploadErrorSample {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        id: string;
        retailer_id: string;
        row_number: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ProductGroup {
    constructor(...args: any[]);

    createProduct(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getProducts(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        id: string;
        product_catalog: string;
        retailer_id: string;
        variants: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ProductImage {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        id: string;
        image_url: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ProductItem {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getChannelsToIntegrityStatus(fields: any, ...args: any[]): any;

    getProductSets(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static AgeGroup: {
        adult: string;
        all_ages: string;
        infant: string;
        kids: string;
        newborn: string;
        teen: string;
        toddler: string;
    };

    static Availability: {
        available_for_order: string;
        discontinued: string;
        in_stock: string;
        out_of_stock: string;
        pending: string;
        preorder: string;
    };

    static CommerceTaxCategory: {
        fb_animal: string;
        fb_animal_supp: string;
        fb_aprl: string;
        fb_aprl_accessories: string;
        fb_aprl_athl_unif: string;
        fb_aprl_cases: string;
        fb_aprl_clothing: string;
        fb_aprl_costume: string;
        fb_aprl_cstm: string;
        fb_aprl_formal: string;
        fb_aprl_handbag: string;
        fb_aprl_jewelry: string;
        fb_aprl_shoe: string;
        fb_aprl_shoe_acc: string;
        fb_aprl_swim: string;
        fb_aprl_swim_chil: string;
        fb_aprl_swim_cvr: string;
        fb_arts: string;
        fb_arts_hobby: string;
        fb_arts_party: string;
        fb_arts_party_gift_card: string;
        fb_arts_ticket: string;
        fb_baby: string;
        fb_baby_bath: string;
        fb_baby_blanket: string;
        fb_baby_diaper: string;
        fb_baby_gift_set: string;
        fb_baby_health: string;
        fb_baby_nursing: string;
        fb_baby_potty_trn: string;
        fb_baby_safe: string;
        fb_baby_toys: string;
        fb_baby_transport: string;
        fb_baby_transport_acc: string;
        fb_bags: string;
        fb_bags_bkpk: string;
        fb_bags_boxes: string;
        fb_bags_brfcs: string;
        fb_bags_csmt_bag: string;
        fb_bags_dffl: string;
        fb_bags_dipr: string;
        fb_bags_fnny: string;
        fb_bags_grmt: string;
        fb_bags_lug_acc: string;
        fb_bags_lugg: string;
        fb_bags_msgr: string;
        fb_bags_tote: string;
        fb_bags_trn_cas: string;
        fb_bldg: string;
        fb_bldg_acc: string;
        fb_bldg_cnsmb: string;
        fb_bldg_fence: string;
        fb_bldg_fuel_tnk: string;
        fb_bldg_ht_vnt: string;
        fb_bldg_lock: string;
        fb_bldg_matrl: string;
        fb_bldg_plmb: string;
        fb_bldg_pump: string;
        fb_bldg_pwrs: string;
        fb_bldg_s_eng: string;
        fb_bldg_str_tank: string;
        fb_bldg_tl_acc: string;
        fb_bldg_tool: string;
        fb_busind: string;
        fb_busind_advertising: string;
        fb_busind_agriculture: string;
        fb_busind_automation: string;
        fb_busind_heavy_mach: string;
        fb_busind_lab: string;
        fb_busind_medical: string;
        fb_busind_retail: string;
        fb_busind_sanitary_ct: string;
        fb_busind_sign: string;
        fb_busind_storage: string;
        fb_busind_storage_acc: string;
        fb_busind_work_gear: string;
        fb_camera_acc: string;
        fb_camera_camera: string;
        fb_camera_optic: string;
        fb_camera_optics: string;
        fb_camera_photo: string;
        fb_elec: string;
        fb_elec_acc: string;
        fb_elec_arcdade: string;
        fb_elec_audio: string;
        fb_elec_circuit: string;
        fb_elec_comm: string;
        fb_elec_computer: string;
        fb_elec_gps_acc: string;
        fb_elec_gps_nav: string;
        fb_elec_gps_trk: string;
        fb_elec_marine: string;
        fb_elec_network: string;
        fb_elec_part: string;
        fb_elec_print: string;
        fb_elec_radar: string;
        fb_elec_sftwr: string;
        fb_elec_speed_rdr: string;
        fb_elec_television: string;
        fb_elec_toll: string;
        fb_elec_vid_gm_acc: string;
        fb_elec_vid_gm_cnsl: string;
        fb_elec_video: string;
        fb_food: string;
        fb_furn: string;
        fb_furn_baby: string;
        fb_furn_bench: string;
        fb_furn_cart: string;
        fb_furn_chair: string;
        fb_furn_chair_acc: string;
        fb_furn_divide: string;
        fb_furn_divide_acc: string;
        fb_furn_ent_ctr: string;
        fb_furn_futn: string;
        fb_furn_futn_pad: string;
        fb_furn_office: string;
        fb_furn_office_acc: string;
        fb_furn_otto: string;
        fb_furn_outdoor: string;
        fb_furn_outdoor_acc: string;
        fb_furn_sets: string;
        fb_furn_shelve_acc: string;
        fb_furn_shlf: string;
        fb_furn_sofa: string;
        fb_furn_sofa_acc: string;
        fb_furn_storage: string;
        fb_furn_tabl: string;
        fb_furn_tabl_acc: string;
        fb_generic_taxable: string;
        fb_hlth: string;
        fb_hlth_hlth: string;
        fb_hlth_jwl_cr: string;
        fb_hlth_lilp_blm: string;
        fb_hlth_ltn_spf: string;
        fb_hlth_prsl_cr: string;
        fb_hlth_skn_cr: string;
        fb_hmgn: string;
        fb_hmgn_bath: string;
        fb_hmgn_dcor: string;
        fb_hmgn_emgy: string;
        fb_hmgn_fplc: string;
        fb_hmgn_fplc_acc: string;
        fb_hmgn_gs_sft: string;
        fb_hmgn_hs_acc: string;
        fb_hmgn_hs_app: string;
        fb_hmgn_hs_spl: string;
        fb_hmgn_ktcn: string;
        fb_hmgn_lawn: string;
        fb_hmgn_lght: string;
        fb_hmgn_linn: string;
        fb_hmgn_lt_acc: string;
        fb_hmgn_otdr: string;
        fb_hmgn_pool: string;
        fb_hmgn_scty: string;
        fb_hmgn_smk_acc: string;
        fb_hmgn_umbr: string;
        fb_hmgn_umbr_acc: string;
        fb_mdia: string;
        fb_mdia_book: string;
        fb_mdia_dvds: string;
        fb_mdia_mag: string;
        fb_mdia_manl: string;
        fb_mdia_musc: string;
        fb_mdia_prj_pln: string;
        fb_mdia_sht_mus: string;
        fb_offc: string;
        fb_offc_bkac: string;
        fb_offc_crts: string;
        fb_offc_dskp: string;
        fb_offc_eqip: string;
        fb_offc_flng: string;
        fb_offc_gnrl: string;
        fb_offc_instm: string;
        fb_offc_lp_dsk: string;
        fb_offc_mats: string;
        fb_offc_nm_plt: string;
        fb_offc_ppr_hndl: string;
        fb_offc_prsnt_spl: string;
        fb_offc_sealr: string;
        fb_offc_ship_spl: string;
        fb_rlgn: string;
        fb_rlgn_cmny: string;
        fb_rlgn_item: string;
        fb_rlgn_wedd: string;
        fb_sftwr: string;
        fb_sfwr_cmptr: string;
        fb_sfwr_dgtl_gd: string;
        fb_sfwr_game: string;
        fb_shipping: string;
        fb_spor: string;
        fb_sport_athl: string;
        fb_sport_athl_clth: string;
        fb_sport_athl_shoe: string;
        fb_sport_athl_sprt: string;
        fb_sport_exrcs: string;
        fb_sport_indr_gm: string;
        fb_sport_otdr_gm: string;
        fb_toys: string;
        fb_toys_eqip: string;
        fb_toys_game: string;
        fb_toys_pzzl: string;
        fb_toys_tmrs: string;
        fb_toys_toys: string;
        fb_vehi: string;
        fb_vehi_part: string;
    };

    static Condition: {
        cpo: string;
        new: string;
        open_box_new: string;
        refurbished: string;
        used: string;
        used_fair: string;
        used_good: string;
        used_like_new: string;
    };

    static Fields: {
        additional_image_cdn_urls: string;
        additional_image_urls: string;
        additional_variant_attributes: string;
        age_group: string;
        applinks: string;
        ar_data: string;
        availability: string;
        brand: string;
        capability_to_review_status: string;
        category: string;
        category_specific_fields: string;
        color: string;
        commerce_insights: string;
        condition: string;
        currency: string;
        custom_data: string;
        custom_label_0: string;
        custom_label_1: string;
        custom_label_2: string;
        custom_label_3: string;
        custom_label_4: string;
        custom_number_0: string;
        custom_number_1: string;
        custom_number_2: string;
        custom_number_3: string;
        custom_number_4: string;
        description: string;
        expiration_date: string;
        fb_product_category: string;
        gender: string;
        gtin: string;
        id: string;
        image_cdn_urls: string;
        image_fetch_status: string;
        image_url: string;
        images: string;
        importer_address: string;
        importer_name: string;
        invalidation_errors: string;
        inventory: string;
        manufacturer_info: string;
        manufacturer_part_number: string;
        marked_for_product_launch: string;
        material: string;
        mobile_link: string;
        name: string;
        ordering_index: string;
        origin_country: string;
        parent_product_id: string;
        pattern: string;
        price: string;
        product_catalog: string;
        product_feed: string;
        product_group: string;
        product_type: string;
        quantity_to_sell_on_facebook: string;
        retailer_id: string;
        retailer_product_group_id: string;
        review_rejection_reasons: string;
        review_status: string;
        sale_price: string;
        sale_price_end_date: string;
        sale_price_start_date: string;
        shipping_weight_unit: string;
        shipping_weight_value: string;
        short_description: string;
        size: string;
        start_date: string;
        url: string;
        visibility: string;
        wa_compliance_category: string;
    };

    static Gender: {
        female: string;
        male: string;
        unisex: string;
    };

    static ImageFetchStatus: {
        direct_upload: string;
        fetch_failed: string;
        fetched: string;
        no_status: string;
        outdated: string;
        partial_fetch: string;
    };

    static MarkedForProductLaunch: {
        default: string;
        marked: string;
        not_marked: string;
    };

    static OriginCountry: {
        ad: string;
        ae: string;
        af: string;
        ag: string;
        ai: string;
        al: string;
        am: string;
        an: string;
        ao: string;
        aq: string;
        ar: string;
        as: string;
        at: string;
        au: string;
        aw: string;
        ax: string;
        az: string;
        ba: string;
        bb: string;
        bd: string;
        be: string;
        bf: string;
        bg: string;
        bh: string;
        bi: string;
        bj: string;
        bl: string;
        bm: string;
        bn: string;
        bo: string;
        bq: string;
        br: string;
        bs: string;
        bt: string;
        bv: string;
        bw: string;
        by: string;
        bz: string;
        ca: string;
        cc: string;
        cd: string;
        cf: string;
        cg: string;
        ch: string;
        ci: string;
        ck: string;
        cl: string;
        cm: string;
        cn: string;
        co: string;
        cr: string;
        cu: string;
        cv: string;
        cw: string;
        cx: string;
        cy: string;
        cz: string;
        de: string;
        dj: string;
        dk: string;
        dm: string;
        do: string;
        dz: string;
        ec: string;
        ee: string;
        eg: string;
        eh: string;
        er: string;
        es: string;
        et: string;
        fi: string;
        fj: string;
        fk: string;
        fm: string;
        fo: string;
        fr: string;
        ga: string;
        gb: string;
        gd: string;
        ge: string;
        gf: string;
        gg: string;
        gh: string;
        gi: string;
        gl: string;
        gm: string;
        gn: string;
        gp: string;
        gq: string;
        gr: string;
        gs: string;
        gt: string;
        gu: string;
        gw: string;
        gy: string;
        hk: string;
        hm: string;
        hn: string;
        hr: string;
        ht: string;
        hu: string;
        id: string;
        ie: string;
        il: string;
        im: string;
        in: string;
        io: string;
        iq: string;
        ir: string;
        is: string;
        it: string;
        je: string;
        jm: string;
        jo: string;
        jp: string;
        ke: string;
        kg: string;
        kh: string;
        ki: string;
        km: string;
        kn: string;
        kp: string;
        kr: string;
        kw: string;
        ky: string;
        kz: string;
        la: string;
        lb: string;
        lc: string;
        li: string;
        lk: string;
        lr: string;
        ls: string;
        lt: string;
        lu: string;
        lv: string;
        ly: string;
        ma: string;
        mc: string;
        md: string;
        me: string;
        mf: string;
        mg: string;
        mh: string;
        mk: string;
        ml: string;
        mm: string;
        mn: string;
        mo: string;
        mp: string;
        mq: string;
        mr: string;
        ms: string;
        mt: string;
        mu: string;
        mv: string;
        mw: string;
        mx: string;
        my: string;
        mz: string;
        na: string;
        nc: string;
        ne: string;
        nf: string;
        ng: string;
        ni: string;
        nl: string;
        no: string;
        np: string;
        nr: string;
        nu: string;
        nz: string;
        om: string;
        pa: string;
        pe: string;
        pf: string;
        pg: string;
        ph: string;
        pk: string;
        pl: string;
        pm: string;
        pn: string;
        pr: string;
        ps: string;
        pt: string;
        pw: string;
        py: string;
        qa: string;
        re: string;
        ro: string;
        rs: string;
        ru: string;
        rw: string;
        sa: string;
        sb: string;
        sc: string;
        sd: string;
        se: string;
        sg: string;
        sh: string;
        si: string;
        sj: string;
        sk: string;
        sl: string;
        sm: string;
        sn: string;
        so: string;
        sr: string;
        ss: string;
        st: string;
        sv: string;
        sx: string;
        sy: string;
        sz: string;
        tc: string;
        td: string;
        tf: string;
        tg: string;
        th: string;
        tj: string;
        tk: string;
        tl: string;
        tm: string;
        tn: string;
        to: string;
        tr: string;
        tt: string;
        tv: string;
        tw: string;
        tz: string;
        ua: string;
        ug: string;
        um: string;
        us: string;
        uy: string;
        uz: string;
        va: string;
        vc: string;
        ve: string;
        vg: string;
        vi: string;
        vn: string;
        vu: string;
        wf: string;
        ws: string;
        xk: string;
        ye: string;
        yt: string;
        za: string;
        zm: string;
        zw: string;
    };

    static ReviewStatus: {
        approved: string;
        outdated: string;
        pending: string;
        rejected: string;
    };

    static ShippingWeightUnit: {
        g: string;
        kg: string;
        lb: string;
        oz: string;
    };

    static Visibility: {
        published: string;
        staging: string;
    };

    static WaComplianceCategory: {
        country_origin_exempt: string;
        default: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ProductSet {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAutomotiveModels(fields: any, ...args: any[]): any;

    getDestinations(fields: any, ...args: any[]): any;

    getFlights(fields: any, ...args: any[]): any;

    getHomeListings(fields: any, ...args: any[]): any;

    getHotels(fields: any, ...args: any[]): any;

    getProducts(fields: any, ...args: any[]): any;

    getVehicleOffers(fields: any, ...args: any[]): any;

    getVehicles(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        auto_creation_url: string;
        filter: string;
        id: string;
        latest_metadata: string;
        live_metadata: string;
        name: string;
        ordering_info: string;
        product_catalog: string;
        product_count: string;
        retailer_id: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class Profile {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getPicture(fields: any, ...args: any[]): any;

    static Fields: {
        can_post: string;
        id: string;
        link: string;
        name: string;
        pic: string;
        pic_crop: string;
        pic_large: string;
        pic_small: string;
        pic_square: string;
        profile_type: string;
        username: string;
    };

    static ProfileType: {
        application: string;
        event: string;
        group: string;
        page: string;
        user: string;
    };

    static Type: {
        angry: string;
        care: string;
        fire: string;
        haha: string;
        hundred: string;
        like: string;
        love: string;
        none: string;
        pride: string;
        sad: string;
        thankful: string;
        wow: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class PublisherBlockList {
    constructor(...args: any[]);

    createAppEndPublisherUrl(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getPagedWebPublishers(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        app_publishers: string;
        business_owner_id: string;
        id: string;
        is_auto_blocking_on: string;
        is_eligible_at_campaign_level: string;
        last_update_time: string;
        last_update_user: string;
        name: string;
        owner_ad_account_id: string;
        web_publishers: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class RTBDynamicPost {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getComments(fields: any, ...args: any[]): any;

    getLikes(fields: any, ...args: any[]): any;

    static Fields: {
        child_attachments: string;
        created: string;
        description: string;
        id: string;
        image_url: string;
        link: string;
        message: string;
        owner_id: string;
        place_id: string;
        product_id: string;
        title: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ReachFrequencyPrediction {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Action: {
        cancel: string;
        quote: string;
        reserve: string;
    };

    static BuyingType: {
        auction: string;
        deprecated_reach_block: string;
        fixed_cpm: string;
        mixed: string;
        reachblock: string;
        research_poll: string;
        reserved: string;
    };

    static Fields: {
        account_id: string;
        activity_status: string;
        ad_formats: string;
        auction_entry_option_index: string;
        audience_size_lower_bound: string;
        audience_size_upper_bound: string;
        business_id: string;
        buying_type: string;
        campaign_group_id: string;
        campaign_id: string;
        campaign_time_start: string;
        campaign_time_stop: string;
        currency: string;
        curve_budget_reach: string;
        curve_reach: string;
        daily_grp_curve: string;
        daily_impression_curve: string;
        daily_impression_curve_map: string;
        day_parting_schedule: string;
        destination_id: string;
        end_time: string;
        expiration_time: string;
        external_budget: string;
        external_impression: string;
        external_maximum_budget: string;
        external_maximum_impression: string;
        external_maximum_reach: string;
        external_minimum_budget: string;
        external_minimum_impression: string;
        external_minimum_reach: string;
        external_reach: string;
        feed_ratio_0000: string;
        frequency_cap: string;
        frequency_distribution_map: string;
        frequency_distribution_map_agg: string;
        grp_audience_size: string;
        grp_avg_probability_map: string;
        grp_country_audience_size: string;
        grp_curve: string;
        grp_dmas_audience_size: string;
        grp_filtering_threshold_00: string;
        grp_points: string;
        grp_ratio: string;
        grp_reach_ratio: string;
        grp_status: string;
        holdout_percentage: string;
        id: string;
        impression_curve: string;
        instagram_destination_id: string;
        instream_packages: string;
        interval_frequency_cap: string;
        interval_frequency_cap_reset_period: string;
        is_bonus_media: string;
        is_conversion_goal: string;
        is_higher_average_frequency: string;
        is_io: string;
        is_reserved_buying: string;
        is_trp: string;
        name: string;
        objective: string;
        objective_name: string;
        pause_periods: string;
        placement_breakdown: string;
        placement_breakdown_map: string;
        plan_name: string;
        plan_type: string;
        prediction_mode: string;
        prediction_progress: string;
        reference_id: string;
        reservation_status: string;
        start_time: string;
        status: string;
        story_event_type: string;
        target_cpm: string;
        target_spec: string;
        time_created: string;
        time_updated: string;
        timezone_id: string;
        timezone_name: string;
        topline_id: string;
        video_view_length_constraint: string;
        viewtag: string;
    };

    static InstreamPackages: {
        beauty: string;
        entertainment: string;
        food: string;
        normal: string;
        premium: string;
        regular_animals_pets: string;
        regular_food: string;
        regular_games: string;
        regular_politics: string;
        regular_sports: string;
        regular_style: string;
        regular_tv_movies: string;
        spanish: string;
        sports: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class SavedAudience {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        account: string;
        approximate_count_lower_bound: string;
        approximate_count_upper_bound: string;
        delete_time: string;
        description: string;
        extra_info: string;
        id: string;
        name: string;
        operation_status: string;
        page_deletion_marked_delete_time: string;
        permission_for_actions: string;
        run_status: string;
        sentence_lines: string;
        targeting: string;
        time_created: string;
        time_updated: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class SavedMessageResponse {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        category: string;
        id: string;
        image: string;
        is_enabled: string;
        message: string;
        title: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ServerEvent {
    constructor(event_name?: any, event_time?: any, event_source_url?: any, user_data?: any, custom_data?: any, event_id?: any, opt_out?: any, action_source?: any, data_processing_options?: any, data_processing_options_country?: any, data_processing_options_state?: any);

    normalize(): any;

    setActionSource(action_source: any): any;

    setCustomData(custom_data: any): any;

    setDataProcessingOptions(data_processing_options: any): any;

    setDataProcessingOptionsCountry(data_processing_options_country: any): any;

    setDataProcessingOptionsState(data_processing_options_state: any): any;

    setEventId(event_id: any): any;

    setEventName(event_name: any): any;

    setEventSourceUrl(event_source_url: any): any;

    setEventTime(event_time: any): any;

    setOptOut(opt_out: any): any;

    setUserData(user_data: any): any;

}

export class Shop {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        fb_sales_channel: string;
        id: string;
        ig_sales_channel: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class SignalContent {
    constructor(id: any, quantity: any, price: any, item_price: any, title: any, description: any, brand: any, category: any, delivery_category: any, tax: any, external_content_id: any);

    setBrand(brand: any): any;

    setCategory(category: any): any;

    setDeliveryCategory(delivery_category: any): any;

    setDescription(description: any): any;

    setExternalContentId(external_content_id: any): any;

    setId(id: any): any;

    setItemPrice(item_price: any): any;

    setPrice(price: any): any;

    setQuantity(quantity: any): any;

    setTax(tax: any): any;

    setTitle(title: any): any;

}

export class SignalCustomData {
    constructor(value: any, currency: any, content_name: any, content_category: any, content_ids: any, contents: any, content_type: any, order_id: any, predicted_ltv: any, num_items: any, search_string: any, status: any, item_number: any, delivery_category: any, custom_properties: any, shipping_contact: any, billing_contact: any, external_order_id: any, original_order_id: any, message: any);

    add_custom_property(key: any, value: any): void;

    setBillingContact(billing_contact: any): any;

    setContentCategory(content_category: any): any;

    setContentIds(content_ids: any): any;

    setContentName(content_name: any): any;

    setContentType(content_type: any): any;

    setContents(contents: any): any;

    setCurrency(currency: any): any;

    setCustomProperties(custom_properties: any): any;

    setDeliveryCategory(delivery_category: any): any;

    setExternalOrderId(external_order_id: any): any;

    setItemNumber(item_number: any): any;

    setMessage(message: any): any;

    setNumItems(num_items: any): any;

    setOrderId(order_id: any): any;

    setOriginalOrderId(original_order_id: any): any;

    setPredictedLtv(predicted_ltv: any): any;

    setSearchString(search_string: any): any;

    setShippingContact(shipping_contact: any): any;

    setStatus(status: any): any;

    setValue(value: any): any;

}

export class SignalEvent {
    constructor(event_name: any, event_time: any, event_source_url: any, user_data: any, custom_data: any, event_id: any, opt_out: any, action_source: any, data_processing_options: any, data_processing_options_country: any, data_processing_options_state: any);

    setActionSource(action_source: any): any;

    setCustomData(custom_data: any): any;

    setDataProcessingOptions(data_processing_options: any): any;

    setDataProcessingOptionsCountry(data_processing_options_country: any): any;

    setDataProcessingOptionsState(data_processing_options_state: any): any;

    setEventId(event_id: any): any;

    setEventName(event_name: any): any;

    setEventSourceUrl(event_source_url: any): any;

    setEventTime(event_time: any): any;

    setOptOut(opt_out: any): any;

    setUserData(user_data: any): any;

    toJson(): any;

}

export class SignalEventRequest {
    constructor(access_token: any, pixel_id: any, page_id: any, ...args: any[]);

    execute(): any;

    setAccessToken(access_token: any): any;

    setDebugMode(debug_mode: any): any;

    setEvents(events: any): any;

    setHttpService(http_service: any): any;

    setNamespaceId(namespace_id: any): any;

    setPartnerAgent(partner_agent: any): any;

    setPixelId(pixel_id: any): any;

    setTestEventCode(test_event_code: any): any;

    setUploadId(upload_id: any): any;

    setUploadSource(upload_source: any): any;

    setUploadTag(upload_tag: any): any;

}

export class SignalUserData {
    constructor(email: any, phone: any, first_name: any, last_name: any, date_of_birth: any, city: any, state: any, zip: any, country: any, external_id: any, gender: any, client_ip_address: any, client_user_agent: any, fbp: any, fbc: any, subscription_id: any, fb_login_id: any, lead_id: any, dobd: any, dobm: any, doby: any, f5first: any, f5last: any, fi: any, address: any);

    setAddress(address: any): any;

    setCity(city: any): any;

    setClientIpAddress(client_ip_address: any): any;

    setClientUserAgent(client_user_agent: any): any;

    setCountry(country: any): any;

    setDateOfBirth(date_of_birth: any): any;

    setDobd(dobd: any): any;

    setDobm(dobm: any): any;

    setDoby(doby: any): any;

    setEmail(email: any): any;

    setExternalId(external_id: any): any;

    setF5First(f5first: any): any;

    setF5Last(f5last: any): any;

    setFbLoginId(fb_login_id: any): any;

    setFbc(fbc: any): any;

    setFbp(fbp: any): any;

    setFi(fi: any): any;

    setFirstName(first_name: any): any;

    setGender(gender: any): any;

    setLastName(last_name: any): any;

    setLeadId(lead_id: any): any;

    setPhone(phone: any): any;

    setState(state: any): any;

    setSubscriptionId(subscription_id: any): any;

    setZip(zip: any): any;

}

export class StoreCatalogSettings {
    constructor(...args: any[]);

    delete(fields: any, ...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        id: string;
        page: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class SystemUser {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getAssignedAdAccounts(fields: any, ...args: any[]): any;

    getAssignedBusinessAssetGroups(fields: any, ...args: any[]): any;

    getAssignedPages(fields: any, ...args: any[]): any;

    getAssignedProductCatalogs(fields: any, ...args: any[]): any;

    static Fields: {
        created_by: string;
        created_time: string;
        finance_permission: string;
        id: string;
        ip_permission: string;
        name: string;
    };

    static Role: {
        admin: string;
        ads_rights_reviewer: string;
        default: string;
        developer: string;
        employee: string;
        finance_analyst: string;
        finance_edit: string;
        finance_editor: string;
        finance_view: string;
        manage: string;
        partner_center_admin: string;
        partner_center_analyst: string;
        partner_center_education: string;
        partner_center_marketing: string;
        partner_center_operations: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class ThirdPartyMeasurementReportDataset {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        category: string;
        id: string;
        partner: string;
        product: string;
        schema: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class URL {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        development_instant_article: string;
        engagement: string;
        id: string;
        instant_article: string;
        og_object: string;
        ownership_permissions: string;
        scopes: string;
    };

    static Scopes: {
        news_tab: string;
        news_tab_dev_env: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class UnifiedThread {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getMessages(fields: any, ...args: any[]): any;

    static Fields: {
        can_reply: string;
        former_participants: string;
        id: string;
        is_subscribed: string;
        link: string;
        message_count: string;
        name: string;
        participants: string;
        scoped_thread_key: string;
        senders: string;
        snippet: string;
        subject: string;
        unread_count: string;
        updated_time: string;
        wallpaper: string;
    };

    static Platform: {
        instagram: string;
        messenger: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class User {
    constructor(...args: any[]);

    createAccessToken(fields: any, ...args: any[]): any;

    createAccount(fields: any, ...args: any[]): any;

    createAdStudy(fields: any, ...args: any[]): any;

    createApplication(fields: any, ...args: any[]): any;

    createBusiness(fields: any, ...args: any[]): any;

    createFeed(fields: any, ...args: any[]): any;

    createFundraiser(fields: any, ...args: any[]): any;

    createGameItem(fields: any, ...args: any[]): any;

    createGameTime(fields: any, ...args: any[]): any;

    createLiveVideo(fields: any, ...args: any[]): any;

    createNotification(fields: any, ...args: any[]): any;

    createPhoto(fields: any, ...args: any[]): any;

    createStagingResource(fields: any, ...args: any[]): any;

    createVideo(fields: any, ...args: any[]): any;

    delete(fields: any, ...args: any[]): any;

    deleteAccessTokens(...args: any[]): any;

    deleteBusinesses(...args: any[]): any;

    deletePermissions(...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAccounts(fields: any, ...args: any[]): any;

    getAdAccounts(fields: any, ...args: any[]): any;

    getAdStudies(fields: any, ...args: any[]): any;

    getAlbums(fields: any, ...args: any[]): any;

    getAppRequestFormerRecipients(fields: any, ...args: any[]): any;

    getAppRequests(fields: any, ...args: any[]): any;

    getAssignedAdAccounts(fields: any, ...args: any[]): any;

    getAssignedBusinessAssetGroups(fields: any, ...args: any[]): any;

    getAssignedPages(fields: any, ...args: any[]): any;

    getAssignedProductCatalogs(fields: any, ...args: any[]): any;

    getBusinessUsers(fields: any, ...args: any[]): any;

    getBusinesses(fields: any, ...args: any[]): any;

    getConversations(fields: any, ...args: any[]): any;

    getCustomLabels(fields: any, ...args: any[]): any;

    getEvents(fields: any, ...args: any[]): any;

    getFeed(fields: any, ...args: any[]): any;

    getFriends(fields: any, ...args: any[]): any;

    getGroups(fields: any, ...args: any[]): any;

    getIdsForApps(fields: any, ...args: any[]): any;

    getIdsForBusiness(fields: any, ...args: any[]): any;

    getIdsForPages(fields: any, ...args: any[]): any;

    getLikes(fields: any, ...args: any[]): any;

    getLiveVideos(fields: any, ...args: any[]): any;

    getMusic(fields: any, ...args: any[]): any;

    getPaymentTransactions(fields: any, ...args: any[]): any;

    getPermissions(fields: any, ...args: any[]): any;

    getPersonalAdAccounts(fields: any, ...args: any[]): any;

    getPhotos(fields: any, ...args: any[]): any;

    getPicture(fields: any, ...args: any[]): any;

    getPosts(fields: any, ...args: any[]): any;

    getRichMediaDocuments(fields: any, ...args: any[]): any;

    getVideos(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        about: string;
        age_range: string;
        birthday: string;
        cover: string;
        currency: string;
        education: string;
        email: string;
        favorite_athletes: string;
        favorite_teams: string;
        first_name: string;
        gender: string;
        hometown: string;
        id: string;
        inspirational_people: string;
        install_type: string;
        installed: string;
        is_guest_user: string;
        languages: string;
        last_name: string;
        link: string;
        local_news_megaphone_dismiss_status: string;
        local_news_subscription_status: string;
        locale: string;
        location: string;
        meeting_for: string;
        middle_name: string;
        name: string;
        name_format: string;
        payment_pricepoints: string;
        political: string;
        profile_pic: string;
        quotes: string;
        relationship_status: string;
        shared_login_upgrade_required_by: string;
        short_name: string;
        significant_other: string;
        sports: string;
        supports_donate_button_in_live_video: string;
        third_party_id: string;
        timezone: string;
        token_for_business: string;
        updated_time: string;
        verified: string;
        video_upload_limits: string;
        website: string;
    };

    static Filtering: {
        ema: string;
        groups: string;
        groups_social: string;
    };

    static LocalNewsMegaphoneDismissStatus: {
        no: string;
        yes: string;
    };

    static LocalNewsSubscriptionStatus: {
        status_off: string;
        status_on: string;
    };

    static Type: {
        content_update: string;
        generic: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class UserData {
    constructor(email?: any, phone?: any, gender?: any, first_name?: any, last_name?: any, date_of_birth?: any, city?: any, state?: any, zip?: any, country?: any, external_id?: any, client_ip_address?: any, client_user_agent?: any, fbp?: any, fbc?: any, subscription_id?: any, fb_login_id?: any, lead_id?: any, dobd?: any, dobm?: any, doby?: any);

    dedupArray(arr: any): any;

    normalize(): any;

    normalizeAndHashMultiValues(arr: any, fieldName: any): any;

    setCities(cities: any): any;

    setCity(city: any): any;

    setClientIpAddress(client_ip_address: any): any;

    setClientUserAgent(client_user_agent: any): any;

    setCountries(countries: any): any;

    setCountry(country: any): any;

    setDateOfBirth(date_of_birth: any): any;

    setDatesOfBirth(dates_of_birth: any): any;

    setDobd(dobd: any): any;

    setDobm(dobm: any): any;

    setDoby(doby: any): any;

    setEmail(email: any): any;

    setEmails(emails: any): any;

    setExternalId(external_id: any): any;

    setExternalIds(external_ids: any): any;

    setF5First(f5first: any): any;

    setF5Last(f5last: any): any;

    setFbLoginId(fb_login_id: any): any;

    setFbc(fbc: any): any;

    setFbp(fbp: any): any;

    setFi(fi: any): any;

    setFirstName(first_name: any): any;

    setFirstNames(first_names: any): any;

    setGender(gender: any): any;

    setGenders(genders: any): any;

    setLastName(last_name: any): any;

    setLastNames(last_names: any): any;

    setLeadId(lead_id: any): any;

    setPhone(phone: any): any;

    setPhones(phones: any): any;

    setState(state: any): any;

    setStates(states: any): any;

    setSubscriptionId(subscription_id: any): any;

    setZip(zip: any): any;

    setZips(zips: any): any;

    static Gender: {
        FEMALE: string;
        MALE: string;
    };

}

export class Vehicle {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getAugmentedRealitiesMetadata(fields: any, ...args: any[]): any;

    getChannelsToIntegrityStatus(fields: any, ...args: any[]): any;

    getVideosMetadata(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Availability: {
        available: string;
        not_available: string;
        pending: string;
    };

    static BodyStyle: {
        convertible: string;
        coupe: string;
        crossover: string;
        estate: string;
        grandtourer: string;
        hatchback: string;
        minibus: string;
        minivan: string;
        mpv: string;
        none: string;
        other: string;
        pickup: string;
        roadster: string;
        saloon: string;
        sedan: string;
        small_car: string;
        sportscar: string;
        supercar: string;
        supermini: string;
        suv: string;
        truck: string;
        van: string;
        wagon: string;
    };

    static Condition: {
        excellent: string;
        fair: string;
        good: string;
        none: string;
        other: string;
        poor: string;
        very_good: string;
    };

    static Drivetrain: {
        awd: string;
        four_wd: string;
        fwd: string;
        none: string;
        other: string;
        rwd: string;
        two_wd: string;
    };

    static Fields: {
        address: string;
        applinks: string;
        availability: string;
        body_style: string;
        category_specific_fields: string;
        condition: string;
        currency: string;
        custom_label_0: string;
        date_first_on_lot: string;
        dealer_communication_channel: string;
        dealer_email: string;
        dealer_id: string;
        dealer_name: string;
        dealer_phone: string;
        dealer_privacy_policy_url: string;
        description: string;
        drivetrain: string;
        exterior_color: string;
        fb_page_id: string;
        features: string;
        fuel_type: string;
        id: string;
        image_fetch_status: string;
        images: string;
        interior_color: string;
        legal_disclosure_impressum_url: string;
        make: string;
        mileage: string;
        model: string;
        previous_currency: string;
        previous_price: string;
        price: string;
        sale_currency: string;
        sale_price: string;
        sanitized_images: string;
        state_of_vehicle: string;
        title: string;
        transmission: string;
        trim: string;
        unit_price: string;
        url: string;
        vehicle_id: string;
        vehicle_registration_plate: string;
        vehicle_specifications: string;
        vehicle_type: string;
        vin: string;
        year: string;
    };

    static FuelType: {
        diesel: string;
        electric: string;
        flex: string;
        gasoline: string;
        hybrid: string;
        none: string;
        other: string;
        petrol: string;
        plugin_hybrid: string;
    };

    static ImageFetchStatus: {
        direct_upload: string;
        fetch_failed: string;
        fetched: string;
        no_status: string;
        outdated: string;
        partial_fetch: string;
    };

    static StateOfVehicle: {
        cpo: string;
        new: string;
        used: string;
    };

    static Transmission: {
        automatic: string;
        manual: string;
        none: string;
        other: string;
    };

    static VehicleType: {
        boat: string;
        car_truck: string;
        commercial: string;
        motorcycle: string;
        other: string;
        powersport: string;
        rv_camper: string;
        trailer: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class VehicleOffer {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getAugmentedRealitiesMetadata(fields: any, ...args: any[]): any;

    getChannelsToIntegrityStatus(fields: any, ...args: any[]): any;

    getVideosMetadata(fields: any, ...args: any[]): any;

    static Fields: {
        amount_currency: string;
        amount_percentage: string;
        amount_price: string;
        amount_qualifier: string;
        applinks: string;
        body_style: string;
        cashback_currency: string;
        cashback_price: string;
        category_specific_fields: string;
        currency: string;
        dma_codes: string;
        downpayment_currency: string;
        downpayment_price: string;
        downpayment_qualifier: string;
        end_date: string;
        end_time: string;
        id: string;
        image_fetch_status: string;
        images: string;
        make: string;
        model: string;
        offer_description: string;
        offer_disclaimer: string;
        offer_type: string;
        price: string;
        sanitized_images: string;
        start_date: string;
        start_time: string;
        term_length: string;
        term_qualifier: string;
        title: string;
        trim: string;
        unit_price: string;
        url: string;
        vehicle_offer_id: string;
        year: string;
    };

    static ImageFetchStatus: {
        direct_upload: string;
        fetch_failed: string;
        fetched: string;
        no_status: string;
        outdated: string;
        partial_fetch: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class VideoCopyright {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static ContentCategory: {
        episode: string;
        movie: string;
        web: string;
    };

    static Fields: {
        content_category: string;
        copyright_content_id: string;
        creator: string;
        excluded_ownership_segments: string;
        id: string;
        in_conflict: string;
        monitoring_status: string;
        monitoring_type: string;
        ownership_countries: string;
        reference_file: string;
        reference_file_disabled: string;
        reference_file_disabled_by_ops: string;
        reference_owner_id: string;
        rule_ids: string;
        tags: string;
        whitelisted_ids: string;
    };

    static MonitoringType: {
        audio_only: string;
        video_and_audio: string;
        video_only: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class VideoCopyrightRule {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        condition_groups: string;
        copyrights: string;
        created_date: string;
        creator: string;
        id: string;
        is_in_migration: string;
        name: string;
    };

    static Source: {
        match_settings_dialog: string;
        rules_selector: string;
        rules_tab: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class VideoList {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getVideos(fields: any, ...args: any[]): any;

    static Fields: {
        creation_time: string;
        description: string;
        id: string;
        last_modified: string;
        owner: string;
        season_number: string;
        thumbnail: string;
        title: string;
        videos_count: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class VideoPoll {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    getPollOptions(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Action: {
        attach_to_video: string;
        close: string;
        delete_poll: string;
        show_results: string;
        show_voting: string;
    };

    static Fields: {
        close_after_voting: string;
        default_open: string;
        id: string;
        question: string;
        show_gradient: string;
        show_results: string;
        status: string;
    };

    static Status: {
        closed: string;
        results_open: string;
        voting_open: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class WhatsAppBusinessAccount {
    constructor(...args: any[]);

    createAssignedUser(fields: any, ...args: any[]): any;

    createMessageTemplate(fields: any, ...args: any[]): any;

    createPhoneNumber(fields: any, ...args: any[]): any;

    createProductCatalog(fields: any, ...args: any[]): any;

    createSubscribedApp(fields: any, ...args: any[]): any;

    deleteAssignedUsers(...args: any[]): any;

    deleteMessageTemplates(...args: any[]): any;

    deleteProductCatalogs(...args: any[]): any;

    deleteSubscribedApps(...args: any[]): any;

    get(fields: any, ...args: any[]): any;

    getAssignedUsers(fields: any, ...args: any[]): any;

    getConversationAnalytics(fields: any, ...args: any[]): any;

    getMessageTemplates(fields: any, ...args: any[]): any;

    getPhoneNumbers(fields: any, ...args: any[]): any;

    getProductCatalogs(fields: any, ...args: any[]): any;

    getSubscribedApps(fields: any, ...args: any[]): any;

    static Category: {
        account_update: string;
        alert_update: string;
        appointment_update: string;
        auto_reply: string;
        issue_resolution: string;
        otp: string;
        payment_update: string;
        personal_finance_update: string;
        reservation_update: string;
        shipping_update: string;
        ticket_update: string;
        transportation_update: string;
    };

    static Fields: {
        account_review_status: string;
        analytics: string;
        creation_time: string;
        currency: string;
        id: string;
        message_template_namespace: string;
        name: string;
        on_behalf_of_business_info: string;
        owner_business_info: string;
        primary_funding_id: string;
        purchase_order_number: string;
        status: string;
        timezone_id: string;
    };

    static Tasks: {
        develop: string;
        manage: string;
        manage_phone: string;
        manage_templates: string;
        messaging: string;
        view_cost: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class WhatsAppBusinessProfile {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    update(fields: any, ...args: any[]): any;

    static Fields: {
        id: string;
        name_verification: string;
        whatsapp_business_api_data: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export class WoodhengePurchasedPAYGReceipt {
    constructor(...args: any[]);

    get(fields: any, ...args: any[]): any;

    static Fields: {
        id: string;
        number_of_subscriptions_purchased: string;
        purchase_time: string;
        user: string;
    };

    static getByIds(ids: any, fields: any, ...args: any[]): any;

}

export const DeliveryCategory: {
    CURBSIDE: string;
    HOME_DELIVERY: string;
    IN_STORE: string;
};

export const HttpMethod: {
    DELETE: string;
    GET: string;
    POST: string;
    PUT: string;
};

export function AREffectsBatchStatus(...args: any[]): any;

export function AdAccountAdRulesHistory(...args: any[]): any;

export function AdAccountAdVolume(...args: any[]): any;

export function AdAccountDefaultDestination(...args: any[]): any;

export function AdAccountDefaultObjective(...args: any[]): any;

export function AdAccountDeliveryEstimate(...args: any[]): any;

export function AdAccountIosFourteenCampaignLimits(...args: any[]): any;

export function AdAccountMatchedSearchApplicationsEdgeData(...args: any[]): any;

export function AdAccountMaxBid(...args: any[]): any;

export function AdAccountPromotableObjects(...args: any[]): any;

export function AdAccountReachEstimate(...args: any[]): any;

export function AdAccountRecommendedCamapaignBudget(...args: any[]): any;

export function AdAccountSubscribedApps(...args: any[]): any;

export function AdAccountTargetingUnified(...args: any[]): any;

export function AdAccountTrackingData(...args: any[]): any;

export function AdAccountUser(...args: any[]): any;

export function AdActivity(...args: any[]): any;

export function AdAssetFeedSpec(...args: any[]): any;

export function AdAssetFeedSpecAssetLabel(...args: any[]): any;

export function AdAssetFeedSpecBody(...args: any[]): any;

export function AdAssetFeedSpecCaption(...args: any[]): any;

export function AdAssetFeedSpecDescription(...args: any[]): any;

export function AdAssetFeedSpecGroupRule(...args: any[]): any;

export function AdAssetFeedSpecImage(...args: any[]): any;

export function AdAssetFeedSpecLinkURL(...args: any[]): any;

export function AdAssetFeedSpecTitle(...args: any[]): any;

export function AdAssetFeedSpecVideo(...args: any[]): any;

export function AdAsyncRequestSetNotificationResult(...args: any[]): any;

export function AdBidAdjustments(...args: any[]): any;

export function AdCampaignBidConstraint(...args: any[]): any;

export function AdCampaignDeliveryEstimate(...args: any[]): any;

export function AdCampaignDeliveryStatsUnsupportedReasons(...args: any[]): any;

export function AdCampaignFrequencyControlSpecs(...args: any[]): any;

export function AdCampaignIssuesInfo(...args: any[]): any;

export function AdCampaignLearningStageInfo(...args: any[]): any;

export function AdCampaignOptimizationEvent(...args: any[]): any;

export function AdCampaignPacedBidInfo(...args: any[]): any;

export function AdCreativeAdDisclaimer(...args: any[]): any;

export function AdCreativeCollectionThumbnailInfo(...args: any[]): any;

export function AdCreativeInsights(...args: any[]): any;

export function AdCreativeInteractiveComponentsSpec(...args: any[]): any;

export function AdCreativeLinkData(...args: any[]): any;

export function AdCreativeLinkDataAppLinkSpec(...args: any[]): any;

export function AdCreativeLinkDataCallToAction(...args: any[]): any;

export function AdCreativeLinkDataCallToActionValue(...args: any[]): any;

export function AdCreativeLinkDataChildAttachment(...args: any[]): any;

export function AdCreativeLinkDataImageLayerSpec(...args: any[]): any;

export function AdCreativeLinkDataImageOverlaySpec(...args: any[]): any;

export function AdCreativeLinkDataSponsorshipInfoSpec(...args: any[]): any;

export function AdCreativeLinkDataTemplateVideoSpec(...args: any[]): any;

export function AdCreativeObjectStorySpec(...args: any[]): any;

export function AdCreativeOmnichannelLinkSpec(...args: any[]): any;

export function AdCreativePhotoData(...args: any[]): any;

export function AdCreativePhotoDataMediaElements(...args: any[]): any;

export function AdCreativePlaceData(...args: any[]): any;

export function AdCreativePlatformCustomization(...args: any[]): any;

export function AdCreativePortraitCustomizations(...args: any[]): any;

export function AdCreativePostClickConfiguration(...args: any[]): any;

export function AdCreativeRecommenderSettings(...args: any[]): any;

export function AdCreativeStaticFallbackSpec(...args: any[]): any;

export function AdCreativeTemplateURLSpec(...args: any[]): any;

export function AdCreativeTextData(...args: any[]): any;

export function AdCreativeVideoData(...args: any[]): any;

export function AdCustomizationRuleSpec(...args: any[]): any;

export function AdDynamicCreative(...args: any[]): any;

export function AdEntityTargetSpend(...args: any[]): any;

export function AdKeywords(...args: any[]): any;

export function AdNetworkAnalyticsAsyncQueryResult(...args: any[]): any;

export function AdNetworkAnalyticsSyncQueryResult(...args: any[]): any;

export function AdPlacePageSetMetadata(...args: any[]): any;

export function AdPreview(...args: any[]): any;

export function AdPromotedObject(...args: any[]): any;

export function AdRecommendation(...args: any[]): any;

export function AdRecommendationData(...args: any[]): any;

export function AdRuleExecutionOptions(...args: any[]): any;

export function AdRuleFilters(...args: any[]): any;

export function AdRuleHistory(...args: any[]): any;

export function AdRuleHistoryResult(...args: any[]): any;

export function AdRuleHistoryResultAction(...args: any[]): any;

export function AdRuleSchedule(...args: any[]): any;

export function AdRuleScheduleSpec(...args: any[]): any;

export function AdRuleTrigger(...args: any[]): any;

export function AdStudyObjectiveID(...args: any[]): any;

export function AdStudyObjectiveOffsiteDatasets(...args: any[]): any;

export function AdgroupIssuesInfo(...args: any[]): any;

export function AdgroupPlacementSpecificReviewFeedback(...args: any[]): any;

export function AdgroupReviewFeedback(...args: any[]): any;

export function AdsActionStats(...args: any[]): any;

export function AdsImageCrops(...args: any[]): any;

export function AdsInsights(...args: any[]): any;

export function AdsOptimalDeliveryGrowthOpportunity(...args: any[]): any;

export function AdsPixelStats(...args: any[]): any;

export function AdsPixelStatsResult(...args: any[]): any;

export function AgeRange(...args: any[]): any;

export function AgencyClientDeclaration(...args: any[]): any;

export function AndroidAppLink(...args: any[]): any;

export function AppRequestFormerRecipient(...args: any[]): any;

export function AssignedUser(...args: any[]): any;

export function AsyncRequest(...args: any[]): any;

export function AttributionSpec(...args: any[]): any;

export function AudiencePermissionForActions(...args: any[]): any;

export function BrandSafetyBlockListUsage(...args: any[]): any;

export function BroadTargetingCategories(...args: any[]): any;

export function BusinessAdAccountRequest(...args: any[]): any;

export function BusinessApplicationRequest(...args: any[]): any;

export function BusinessManagedPartnerEligibility(...args: any[]): any;

export function BusinessPageRequest(...args: any[]): any;

export function CampaignGroupBrandConfiguration(...args: any[]): any;

export function CampaignGroupCollaborativeAdsPartnerInfo(...args: any[]): any;

export function CanvasAdSettings(...args: any[]): any;

export function CanvasBodyElement(...args: any[]): any;

export function CanvasCollectionThumbnail(...args: any[]): any;

export function CatalogBasedTargeting(...args: any[]): any;

export function CatalogItemAppLinks(...args: any[]): any;

export function CatalogItemAppealStatus(...args: any[]): any;

export function CatalogItemChannelsToIntegrityStatus(...args: any[]): any;

export function CatalogSubVerticalList(...args: any[]): any;

export function ChatPlugin(...args: any[]): any;

export function CheckBatchRequestStatus(...args: any[]): any;

export function ChildEvent(...args: any[]): any;

export function CollaborativeAdsPartnerInfoListItem(...args: any[]): any;

export function CommerceMerchantSettingsSetupStatus(...args: any[]): any;

export function CommercePayout(...args: any[]): any;

export function CommerceSettings(...args: any[]): any;

export function ConnectionsTargeting(...args: any[]): any;

export function ContentDeliveryReport(...args: any[]): any;

export function ContextualBundlingSpec(...args: any[]): any;

export function ConversionActionQuery(...args: any[]): any;

export function CopyrightReferenceContainer(...args: any[]): any;

export function CoverPhoto(...args: any[]): any;

export function CrashReporter(): void;

export function CreativeHistory(...args: any[]): any;

export function CreditPartitionActionOptions(...args: any[]): any;

export function Currency(...args: any[]): any;

export function CurrencyAmount(...args: any[]): any;

export function CustomAudienceAdAccount(...args: any[]): any;

export function CustomAudienceDataSource(...args: any[]): any;

export function CustomAudienceSession(...args: any[]): any;

export function CustomAudienceSharingStatus(...args: any[]): any;

export function CustomAudienceStatus(...args: any[]): any;

export function CustomAudiencesTOS(...args: any[]): any;

export function CustomAudiencesharedAccountInfo(...args: any[]): any;

export function CustomConversionStatsResult(...args: any[]): any;

export function CustomUserSettings(...args: any[]): any;

export function DACheck(...args: any[]): any;

export function DayPart(...args: any[]): any;

export function DeliveryCheck(...args: any[]): any;

export function DeliveryCheckExtraInfo(...args: any[]): any;

export function DeliveryWindow(...args: any[]): any;

export function DynamicPostChildAttachment(...args: any[]): any;

export function Engagement(...args: any[]): any;

export function EntityAtTextRange(...args: any[]): any;

export function Experience(...args: any[]): any;

export function ExternalEventSource(...args: any[]): any;

export function FAMEExportConfig(...args: any[]): any;

export function FlexibleTargeting(...args: any[]): any;

export function FundingSourceDetails(...args: any[]): any;

export function FundingSourceDetailsCoupon(...args: any[]): any;

export function HttpServiceClientConfig(): void;

export function IDName(...args: any[]): any;

export function InsightsResult(...args: any[]): any;

export function InstagramInsightsResult(...args: any[]): any;

export function InstagramInsightsValue(...args: any[]): any;

export function InstantArticleInsightsQueryResult(...args: any[]): any;

export function InstantArticlesStats(...args: any[]): any;

export function IosAppLink(...args: any[]): any;

export function KeyValue(...args: any[]): any;

export function LeadGenAppointmentBookingInfo(...args: any[]): any;

export function LeadGenConditionalQuestionsGroupChoices(...args: any[]): any;

export function LeadGenConditionalQuestionsGroupQuestions(...args: any[]): any;

export function LeadGenDraftQuestion(...args: any[]): any;

export function LeadGenPostSubmissionCheckResult(...args: any[]): any;

export function LeadGenQuestion(...args: any[]): any;

export function LeadGenQuestionOption(...args: any[]): any;

export function LiveVideoAdBreakConfig(...args: any[]): any;

export function LiveVideoRecommendedEncoderSettings(...args: any[]): any;

export function LiveVideoTargeting(...args: any[]): any;

export function Location(...args: any[]): any;

export function LookalikeSpec(...args: any[]): any;

export function ManagedPartnerBusiness(...args: any[]): any;

export function MessagingFeatureReview(...args: any[]): any;

export function MessagingFeatureStatus(...args: any[]): any;

export function MessengerDestinationPageWelcomeMessage(...args: any[]): any;

export function MessengerProfile(...args: any[]): any;

export function MinimumBudget(...args: any[]): any;

export function NativeOfferDiscount(...args: any[]): any;

export function NullNode(...args: any[]): any;

export function OfflineConversionDataSetPermissions(...args: any[]): any;

export function OfflineConversionDataSetUsage(...args: any[]): any;

export function OutcomePredictionPoint(...args: any[]): any;

export function PageCategory(...args: any[]): any;

export function PageChangeProposal(...args: any[]): any;

export function PageCommerceEligibility(...args: any[]): any;

export function PageParking(...args: any[]): any;

export function PagePaymentOptions(...args: any[]): any;

export function PageRestaurantServices(...args: any[]): any;

export function PageRestaurantSpecialties(...args: any[]): any;

export function PageSettings(...args: any[]): any;

export function PageStartInfo(...args: any[]): any;

export function PageThreadOwner(...args: any[]): any;

export function PaymentPricepoints(...args: any[]): any;

export function Permission(...args: any[]): any;

export function PlatformImageSource(...args: any[]): any;

export function Privacy(...args: any[]): any;

export function ProductCatalogCategory(...args: any[]): any;

export function ProductCatalogDiagnosticGroup(...args: any[]): any;

export function ProductCatalogHotelRoomsBatch(...args: any[]): any;

export function ProductCatalogImageSettings(...args: any[]): any;

export function ProductCatalogImageSettingsOperation(...args: any[]): any;

export function ProductCatalogPricingVariablesBatch(...args: any[]): any;

export function ProductCatalogProductSetsBatch(...args: any[]): any;

export function ProductEventStat(...args: any[]): any;

export function ProductFeedMissingFeedItemReplacement(...args: any[]): any;

export function ProductFeedRuleSuggestion(...args: any[]): any;

export function ProductFeedUploadErrorReport(...args: any[]): any;

export function ProductItemARData(...args: any[]): any;

export function ProductItemCommerceInsights(...args: any[]): any;

export function ProductItemImporterAddress(...args: any[]): any;

export function ProductSetMetadata(...args: any[]): any;

export function ProductVariant(...args: any[]): any;

export function ProfilePictureSource(...args: any[]): any;

export function RawCustomAudience(...args: any[]): any;

export function ReachFrequencyActivity(...args: any[]): any;

export function ReachFrequencyAdFormat(...args: any[]): any;

export function ReachFrequencyCurveLowerConfidenceRange(...args: any[]): any;

export function ReachFrequencyCurveUpperConfidenceRange(...args: any[]): any;

export function ReachFrequencyDayPart(...args: any[]): any;

export function ReachFrequencyEstimatesCurve(...args: any[]): any;

export function ReachFrequencyEstimatesPlacementBreakdown(...args: any[]): any;

export function ReachFrequencySpec(...args: any[]): any;

export function Recommendation(...args: any[]): any;

export function RevSharePolicy(...args: any[]): any;

export function RichMediaElement(...args: any[]): any;

export function SecuritySettings(...args: any[]): any;

export function ServerSideUtils(): void;

export function SplitTestWinner(...args: any[]): any;

export function Tab(...args: any[]): any;

export function Targeting(...args: any[]): any;

export function TargetingDynamicRule(...args: any[]): any;

export function TargetingGeoLocation(...args: any[]): any;

export function TargetingGeoLocationCity(...args: any[]): any;

export function TargetingGeoLocationCustomLocation(...args: any[]): any;

export function TargetingGeoLocationElectoralDistrict(...args: any[]): any;

export function TargetingGeoLocationGeoEntities(...args: any[]): any;

export function TargetingGeoLocationLocationCluster(...args: any[]): any;

export function TargetingGeoLocationLocationExpansion(...args: any[]): any;

export function TargetingGeoLocationMarket(...args: any[]): any;

export function TargetingGeoLocationPlace(...args: any[]): any;

export function TargetingGeoLocationPoliticalDistrict(...args: any[]): any;

export function TargetingGeoLocationRegion(...args: any[]): any;

export function TargetingGeoLocationZip(...args: any[]): any;

export function TargetingProductAudienceSpec(...args: any[]): any;

export function TargetingProductAudienceSubSpec(...args: any[]): any;

export function TargetingProspectingAudience(...args: any[]): any;

export function TargetingRelaxation(...args: any[]): any;

export function TargetingSentenceLine(...args: any[]): any;

export function TextWithEntities(...args: any[]): any;

export function TrackingAndConversionWithDefaults(...args: any[]): any;

export function UserCoverPhoto(...args: any[]): any;

export function UserDevice(...args: any[]): any;

export function UserIDForApp(...args: any[]): any;

export function UserIDForPage(...args: any[]): any;

export function UserLeadGenDisclaimerResponse(...args: any[]): any;

export function UserLeadGenFieldData(...args: any[]): any;

export function UserPaymentMobilePricepoints(...args: any[]): any;

export function ValueBasedEligibleSource(...args: any[]): any;

export function VideoCopyrightConditionGroup(...args: any[]): any;

export function VideoCopyrightGeoGate(...args: any[]): any;

export function VideoCopyrightSegment(...args: any[]): any;

export function VideoThumbnail(...args: any[]): any;

export function VideoUploadLimits(...args: any[]): any;

export function VoipInfo(...args: any[]): any;

export function WebAppLink(...args: any[]): any;

export function WindowsAppLink(...args: any[]): any;

export function WindowsPhoneAppLink(...args: any[]): any;

export function WorkUserFrontline(...args: any[]): any;

export namespace AREffectsBatchStatus {
    const Fields: {
        errors: string;
        product_groups: string;
        status: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAccountAdRulesHistory {
    const Action: {
        budget_not_redistributed: string;
        changed_bid: string;
        changed_budget: string;
        email: string;
        endpoint_pinged: string;
        error: string;
        facebook_notification_sent: string;
        message_sent: string;
        not_changed: string;
        paused: string;
        unpaused: string;
    };

    const EvaluationType: {
        schedule: string;
        trigger: string;
    };

    const Fields: {
        evaluation_spec: string;
        exception_code: string;
        exception_message: string;
        execution_spec: string;
        is_manual: string;
        results: string;
        rule_id: string;
        schedule_spec: string;
        timestamp: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAccountAdVolume {
    const Fields: {
        actor_id: string;
        actor_name: string;
        ad_limit_scope_business: string;
        ad_limit_scope_business_manager_id: string;
        ad_limit_set_by_page_admin: string;
        ads_running_or_in_review_count: string;
        ads_running_or_in_review_count_subject_to_limit_set_by_page: string;
        current_account_ads_running_or_in_review_count: string;
        future_limit_activation_date: string;
        future_limit_on_ads_running_or_in_review: string;
        limit_on_ads_running_or_in_review: string;
        recommendations: string;
    };

    const RecommendationType: {
        aco_toggle: string;
        aggregated_bid_limited: string;
        aggregated_budget_limited: string;
        aggregated_cost_limited: string;
        auction_overlap: string;
        audience_expansion: string;
        autoflow_opt_in: string;
        creative_fatigue: string;
        creative_limited: string;
        dead_link: string;
        ecosystem_bid_reduce_l1_cardinality: string;
        fragmentation: string;
        learning_limited: string;
        syd_test_mode: string;
        top_adsets_with_ads_under_cap: string;
        top_campaigns_with_ads_under_cap: string;
        uneconomical_ads_throttling: string;
        zero_impression: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAccountDefaultDestination {
    const Fields: {
        destination_id: string;
        destination_url: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAccountDefaultObjective {
    const DefaultObjectiveForUser: {
        app_installs: string;
        brand_awareness: string;
        canvas_app_engagement: string;
        canvas_app_installs: string;
        event_responses: string;
        lead_generation: string;
        link_clicks: string;
        local_awareness: string;
        messages: string;
        mobile_app_engagement: string;
        mobile_app_installs: string;
        none: string;
        offer_claims: string;
        page_likes: string;
        post_engagement: string;
        product_catalog_sales: string;
        video_views: string;
        website_conversions: string;
    };

    const Fields: {
        default_objective_for_user: string;
        objective_for_level: string;
    };

    const ObjectiveForLevel: {
        app_installs: string;
        brand_awareness: string;
        canvas_app_engagement: string;
        canvas_app_installs: string;
        event_responses: string;
        lead_generation: string;
        link_clicks: string;
        local_awareness: string;
        messages: string;
        mobile_app_engagement: string;
        mobile_app_installs: string;
        none: string;
        offer_claims: string;
        page_likes: string;
        post_engagement: string;
        product_catalog_sales: string;
        video_views: string;
        website_conversions: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAccountDeliveryEstimate {
    const Fields: {
        daily_outcomes_curve: string;
        estimate_dau: string;
        estimate_mau_lower_bound: string;
        estimate_mau_upper_bound: string;
        estimate_ready: string;
        targeting_optimization_types: string;
    };

    const OptimizationGoal: {
        ad_recall_lift: string;
        app_installs: string;
        app_installs_and_offsite_conversions: string;
        conversations: string;
        derived_events: string;
        engaged_users: string;
        event_responses: string;
        impressions: string;
        in_app_value: string;
        landing_page_views: string;
        lead_generation: string;
        link_clicks: string;
        none: string;
        offsite_conversions: string;
        page_likes: string;
        post_engagement: string;
        quality_call: string;
        quality_lead: string;
        reach: string;
        thruplay: string;
        value: string;
        visit_instagram_profile: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAccountIosFourteenCampaignLimits {
    const Fields: {
        campaign_group_limit: string;
        campaign_group_limits_details: string;
        campaign_limit: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAccountMatchedSearchApplicationsEdgeData {
    const AppStore: {
        amazon_app_store: string;
        apk_mirror: string;
        apk_monk: string;
        apk_pure: string;
        aptoide_a1_store: string;
        bemobi_mobile_store: string;
        does_not_exist: string;
        fb_android_store: string;
        fb_canvas: string;
        fb_gameroom: string;
        galaxy_store: string;
        google_play: string;
        instant_game: string;
        itunes: string;
        itunes_ipad: string;
        oculus_app_store: string;
        oppo: string;
        roku_store: string;
        uptodown: string;
        vivo: string;
        windows_10_store: string;
        windows_store: string;
        xiaomi: string;
    };

    const Fields: {
        app_id: string;
        are_app_events_unavailable: string;
        icon_url: string;
        name: string;
        search_source_store: string;
        store: string;
        unique_id: string;
        url: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAccountMaxBid {
    const Fields: {
        max_bid: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAccountPromotableObjects {
    const Fields: {
        promotable_app_ids: string;
        promotable_page_ids: string;
        promotable_urls: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAccountReachEstimate {
    const Fields: {
        estimate_ready: string;
        users_lower_bound: string;
        users_upper_bound: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAccountRecommendedCamapaignBudget {
    const Fields: {
        daily: string;
        lifetime: string;
        objective: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAccountSubscribedApps {
    const Fields: {
        app_id: string;
        app_name: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAccountTargetingUnified {
    const AppStore: {
        amazon_app_store: string;
        apk_mirror: string;
        apk_monk: string;
        apk_pure: string;
        aptoide_a1_store: string;
        bemobi_mobile_store: string;
        does_not_exist: string;
        fb_android_store: string;
        fb_canvas: string;
        fb_gameroom: string;
        galaxy_store: string;
        google_play: string;
        instant_game: string;
        itunes: string;
        itunes_ipad: string;
        oculus_app_store: string;
        oppo: string;
        roku_channel_store: string;
        uptodown: string;
        vivo: string;
        windows_10_store: string;
        windows_store: string;
        xiaomi: string;
    };

    const Fields: {
        audience_size_lower_bound: string;
        audience_size_upper_bound: string;
        conversion_lift: string;
        description: string;
        id: string;
        img: string;
        info: string;
        info_title: string;
        is_recommendation: string;
        key: string;
        link: string;
        name: string;
        parent: string;
        partner: string;
        path: string;
        performance_rating: string;
        raw_name: string;
        recommendation_model: string;
        search_interest_id: string;
        source: string;
        spend: string;
        type: string;
        valid: string;
    };

    const LimitType: {
        behaviors: string;
        college_years: string;
        education_majors: string;
        education_schools: string;
        education_statuses: string;
        ethnic_affinity: string;
        family_statuses: string;
        generation: string;
        home_ownership: string;
        home_type: string;
        home_value: string;
        household_composition: string;
        income: string;
        industries: string;
        interested_in: string;
        interests: string;
        life_events: string;
        location_categories: string;
        moms: string;
        net_worth: string;
        office_type: string;
        politics: string;
        relationship_statuses: string;
        user_adclusters: string;
        work_employers: string;
        work_positions: string;
    };

    const Mode: {
        best_performing: string;
        recently_used: string;
        related: string;
        suggestions: string;
    };

    const Objective: {
        app_installs: string;
        brand_awareness: string;
        conversions: string;
        event_responses: string;
        lead_generation: string;
        link_clicks: string;
        local_awareness: string;
        messages: string;
        offer_claims: string;
        page_likes: string;
        post_engagement: string;
        product_catalog_sales: string;
        reach: string;
        store_visits: string;
        video_views: string;
    };

    const RegulatedCategories: {
        credit: string;
        employment: string;
        housing: string;
        issues_elections_politics: string;
        none: string;
        online_gambling_and_gaming: string;
    };

    const WhitelistedTypes: {
        adgroup_id: string;
        age_max: string;
        age_min: string;
        alternate_auto_targeting_option: string;
        app_install_state: string;
        audience_network_positions: string;
        behaviors: string;
        brand_safety_content_filter_levels: string;
        brand_safety_content_severity_levels: string;
        catalog_based_targeting: string;
        cities: string;
        city_keys: string;
        college_years: string;
        conjunctive_user_adclusters: string;
        connections: string;
        contextual_targeting_categories: string;
        countries: string;
        country: string;
        country_groups: string;
        custom_audiences: string;
        device_platforms: string;
        direct_install_devices: string;
        dynamic_audience_ids: string;
        education_majors: string;
        education_schools: string;
        education_statuses: string;
        effective_audience_network_positions: string;
        effective_device_platforms: string;
        effective_facebook_positions: string;
        effective_instagram_positions: string;
        effective_messenger_positions: string;
        effective_oculus_positions: string;
        effective_publisher_platforms: string;
        effective_whatsapp_positions: string;
        engagement_specs: string;
        ethnic_affinity: string;
        exclude_previous_days: string;
        exclude_reached_since: string;
        excluded_brand_safety_content_types: string;
        excluded_connections: string;
        excluded_custom_audiences: string;
        excluded_dynamic_audience_ids: string;
        excluded_engagement_specs: string;
        excluded_geo_locations: string;
        excluded_mobile_device_model: string;
        excluded_product_audience_specs: string;
        excluded_publisher_categories: string;
        excluded_publisher_list_ids: string;
        excluded_user_adclusters: string;
        excluded_user_device: string;
        exclusions: string;
        facebook_positions: string;
        family_statuses: string;
        fb_deal_id: string;
        flexible_spec: string;
        follow_profiles: string;
        follow_profiles_negative: string;
        format: string;
        friends_of_connections: string;
        gatekeepers: string;
        genders: string;
        generation: string;
        geo_locations: string;
        home_ownership: string;
        home_type: string;
        home_value: string;
        household_composition: string;
        id: string;
        income: string;
        industries: string;
        instagram_hashtags: string;
        instagram_positions: string;
        instream_video_skippable_excluded: string;
        instream_video_sponsorship_placements: string;
        interest_defaults_source: string;
        interested_in: string;
        interests: string;
        is_instagram_destination_ad: string;
        is_whatsapp_destination_ad: string;
        keywords: string;
        life_events: string;
        locales: string;
        location_categories: string;
        location_cluster_ids: string;
        location_expansion: string;
        marketplace_product_categories: string;
        messenger_positions: string;
        mobile_device_model: string;
        moms: string;
        net_worth: string;
        oculus_positions: string;
        office_type: string;
        page_types: string;
        place_page_set_ids: string;
        political_views: string;
        politics: string;
        product_audience_specs: string;
        prospecting_audience: string;
        publisher_platforms: string;
        radius: string;
        region_keys: string;
        regions: string;
        relationship_statuses: string;
        rtb_flag: string;
        site_category: string;
        targeting_optimization: string;
        targeting_relaxation_types: string;
        timezones: string;
        topic: string;
        trending: string;
        user_adclusters: string;
        user_device: string;
        user_event: string;
        user_os: string;
        user_page_threads: string;
        user_page_threads_excluded: string;
        whatsapp_positions: string;
        wireless_carrier: string;
        work_employers: string;
        work_positions: string;
        zips: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAccountTrackingData {
    const Fields: {
        tracking_specs: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAccountUser {
    const Fields: {
        id: string;
        name: string;
        tasks: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdActivity {
    const Category: {
        account: string;
        ad: string;
        ad_keywords: string;
        ad_set: string;
        audience: string;
        bid: string;
        budget: string;
        campaign: string;
        date: string;
        status: string;
        targeting: string;
    };

    const DataSource: {
        calypso: string;
        tao: string;
        tao_ad_account: string;
        tao_ad_status: string;
    };

    const EventType: {
        account_spending_limit_reached: string;
        ad_account_add_user_to_role: string;
        ad_account_billing_charge: string;
        ad_account_billing_charge_failed: string;
        ad_account_billing_chargeback: string;
        ad_account_billing_chargeback_reversal: string;
        ad_account_billing_decline: string;
        ad_account_billing_refund: string;
        ad_account_remove_spend_limit: string;
        ad_account_remove_user_from_role: string;
        ad_account_reset_spend_limit: string;
        ad_account_set_business_information: string;
        ad_account_update_spend_limit: string;
        ad_account_update_status: string;
        ad_review_approved: string;
        ad_review_declined: string;
        add_funding_source: string;
        add_images: string;
        billing_event: string;
        campaign_ended: string;
        campaign_spending_limit_reached: string;
        conversion_event_updated: string;
        create_ad: string;
        create_ad_set: string;
        create_audience: string;
        create_campaign_group: string;
        create_campaign_legacy: string;
        delete_audience: string;
        delete_images: string;
        di_ad_set_learning_stage_exit: string;
        edit_and_update_ad_creative: string;
        edit_images: string;
        first_delivery_event: string;
        funding_event_initiated: string;
        funding_event_successful: string;
        lifetime_budget_spent: string;
        receive_audience: string;
        remove_funding_source: string;
        remove_shared_audience: string;
        share_audience: string;
        unknown: string;
        unshare_audience: string;
        update_ad_bid_info: string;
        update_ad_bid_type: string;
        update_ad_creative: string;
        update_ad_friendly_name: string;
        update_ad_labels: string;
        update_ad_run_status: string;
        update_ad_run_status_to_be_set_after_review: string;
        update_ad_set_ad_keywords: string;
        update_ad_set_bid_adjustments: string;
        update_ad_set_bid_strategy: string;
        update_ad_set_bidding: string;
        update_ad_set_budget: string;
        update_ad_set_duration: string;
        update_ad_set_learning_stage_status: string;
        update_ad_set_min_spend_target: string;
        update_ad_set_name: string;
        update_ad_set_optimization_goal: string;
        update_ad_set_run_status: string;
        update_ad_set_spend_cap: string;
        update_ad_set_target_spec: string;
        update_ad_targets_spec: string;
        update_adgroup_stop_delivery: string;
        update_audience: string;
        update_campaign_ad_scheduling: string;
        update_campaign_budget: string;
        update_campaign_budget_optimization_toggling_status: string;
        update_campaign_delivery_type: string;
        update_campaign_group_ad_scheduling: string;
        update_campaign_group_delivery_type: string;
        update_campaign_group_spend_cap: string;
        update_campaign_name: string;
        update_campaign_run_status: string;
        update_campaign_schedule: string;
        update_delivery_type_cross_level_shift: string;
    };

    const Fields: {
        actor_id: string;
        actor_name: string;
        application_id: string;
        application_name: string;
        date_time_in_timezone: string;
        event_time: string;
        event_type: string;
        extra_data: string;
        object_id: string;
        object_name: string;
        object_type: string;
        translated_event_type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAssetFeedSpec {
    const CallToActionTypes: {
        add_to_cart: string;
        apply_now: string;
        book_travel: string;
        buy: string;
        buy_now: string;
        buy_tickets: string;
        call: string;
        call_me: string;
        call_now: string;
        contact: string;
        contact_us: string;
        donate: string;
        donate_now: string;
        download: string;
        event_rsvp: string;
        find_a_group: string;
        find_your_groups: string;
        follow_news_storyline: string;
        follow_page: string;
        follow_user: string;
        get_directions: string;
        get_offer: string;
        get_offer_view: string;
        get_quote: string;
        get_showtimes: string;
        install_app: string;
        install_mobile_app: string;
        learn_more: string;
        like_page: string;
        listen_music: string;
        listen_now: string;
        message_page: string;
        mobile_download: string;
        moments: string;
        no_button: string;
        open_link: string;
        order_now: string;
        pay_to_access: string;
        play_game: string;
        play_game_on_facebook: string;
        purchase_gift_cards: string;
        record_now: string;
        refer_friends: string;
        request_time: string;
        say_thanks: string;
        see_more: string;
        sell_now: string;
        send_a_gift: string;
        send_gift_money: string;
        share: string;
        shop_now: string;
        sign_up: string;
        sotto_subscribe: string;
        start_order: string;
        subscribe: string;
        swipe_up_product: string;
        swipe_up_shop: string;
        update_app: string;
        use_app: string;
        use_mobile_app: string;
        video_annotation: string;
        video_call: string;
        visit_pages_feed: string;
        watch_more: string;
        watch_video: string;
        whatsapp_message: string;
        woodhenge_support: string;
    };

    const Fields: {
        ad_formats: string;
        additional_data: string;
        asset_customization_rules: string;
        autotranslate: string;
        bodies: string;
        call_to_action_types: string;
        call_to_actions: string;
        captions: string;
        carousels: string;
        descriptions: string;
        events: string;
        groups: string;
        images: string;
        link_urls: string;
        optimization_type: string;
        posts: string;
        titles: string;
        videos: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAssetFeedSpecAssetLabel {
    const Fields: {
        id: string;
        name: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAssetFeedSpecBody {
    const Fields: {
        adlabels: string;
        text: string;
        url_tags: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAssetFeedSpecCaption {
    const Fields: {
        adlabels: string;
        text: string;
        url_tags: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAssetFeedSpecDescription {
    const Fields: {
        adlabels: string;
        text: string;
        url_tags: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAssetFeedSpecGroupRule {
    const Fields: {
        body_label: string;
        caption_label: string;
        description_label: string;
        image_label: string;
        link_url_label: string;
        title_label: string;
        video_label: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAssetFeedSpecImage {
    const Fields: {
        adlabels: string;
        hash: string;
        image_crops: string;
        url: string;
        url_tags: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAssetFeedSpecLinkURL {
    const Fields: {
        adlabels: string;
        carousel_see_more_url: string;
        deeplink_url: string;
        display_url: string;
        url_tags: string;
        website_url: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAssetFeedSpecTitle {
    const Fields: {
        adlabels: string;
        text: string;
        url_tags: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAssetFeedSpecVideo {
    const Fields: {
        adlabels: string;
        caption_ids: string;
        thumbnail_hash: string;
        thumbnail_url: string;
        url_tags: string;
        video_id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdAsyncRequestSetNotificationResult {
    const Fields: {
        response: string;
        status: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdBidAdjustments {
    const Fields: {
        age_range: string;
        page_types: string;
        user_groups: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCampaignBidConstraint {
    const Fields: {
        roas_average_floor: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCampaignDeliveryEstimate {
    const Fields: {
        daily_outcomes_curve: string;
        estimate_dau: string;
        estimate_mau_lower_bound: string;
        estimate_mau_upper_bound: string;
        estimate_ready: string;
        targeting_optimization_types: string;
    };

    const OptimizationGoal: {
        ad_recall_lift: string;
        app_installs: string;
        app_installs_and_offsite_conversions: string;
        conversations: string;
        derived_events: string;
        engaged_users: string;
        event_responses: string;
        impressions: string;
        in_app_value: string;
        landing_page_views: string;
        lead_generation: string;
        link_clicks: string;
        none: string;
        offsite_conversions: string;
        page_likes: string;
        post_engagement: string;
        quality_call: string;
        quality_lead: string;
        reach: string;
        thruplay: string;
        value: string;
        visit_instagram_profile: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCampaignDeliveryStatsUnsupportedReasons {
    const Fields: {
        reason_data: string;
        reason_type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCampaignFrequencyControlSpecs {
    const Fields: {
        event: string;
        interval_days: string;
        max_frequency: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCampaignIssuesInfo {
    const Fields: {
        error_code: string;
        error_message: string;
        error_summary: string;
        error_type: string;
        level: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCampaignLearningStageInfo {
    const Fields: {
        attribution_windows: string;
        conversions: string;
        last_sig_edit_ts: string;
        status: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCampaignOptimizationEvent {
    const Fields: {
        custom_conversion_id: string;
        event_sequence: string;
        event_type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCampaignPacedBidInfo {
    const Fields: {
        bidding_status: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeAdDisclaimer {
    const Fields: {
        text: string;
        title: string;
        url: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeCollectionThumbnailInfo {
    const Fields: {
        element_child_index: string;
        element_crops: string;
        element_id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeInsights {
    const Fields: {
        aesthetics: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeInteractiveComponentsSpec {
    const Fields: {
        child_attachments: string;
        components: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeLinkData {
    const AttachmentStyle: {
        default: string;
        link: string;
    };

    const Fields: {
        ad_context: string;
        additional_image_index: string;
        app_link_spec: string;
        attachment_style: string;
        branded_content_shared_to_sponsor_status: string;
        branded_content_sponsor_page_id: string;
        call_to_action: string;
        caption: string;
        child_attachments: string;
        collection_thumbnails: string;
        customization_rules_spec: string;
        description: string;
        event_id: string;
        force_single_link: string;
        format_option: string;
        image_crops: string;
        image_hash: string;
        image_layer_specs: string;
        image_overlay_spec: string;
        link: string;
        message: string;
        multi_share_end_card: string;
        multi_share_optimized: string;
        name: string;
        offer_id: string;
        page_welcome_message: string;
        picture: string;
        post_click_configuration: string;
        preferred_image_tags: string;
        retailer_item_ids: string;
        show_multiple_images: string;
        static_fallback_spec: string;
        use_flexible_image_aspect_ratio: string;
    };

    const FormatOption: {
        carousel_ar_effects: string;
        carousel_images_multi_items: string;
        carousel_images_single_item: string;
        carousel_slideshows: string;
        single_image: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeLinkDataAppLinkSpec {
    const Fields: {
        android: string;
        ios: string;
        ipad: string;
        iphone: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeLinkDataCallToAction {
    const Fields: {
        type: string;
        value: string;
    };

    const Type: {
        add_to_cart: string;
        apply_now: string;
        book_travel: string;
        buy: string;
        buy_now: string;
        buy_tickets: string;
        call: string;
        call_me: string;
        call_now: string;
        contact: string;
        contact_us: string;
        donate: string;
        donate_now: string;
        download: string;
        event_rsvp: string;
        find_a_group: string;
        find_your_groups: string;
        follow_news_storyline: string;
        follow_page: string;
        follow_user: string;
        get_directions: string;
        get_offer: string;
        get_offer_view: string;
        get_quote: string;
        get_showtimes: string;
        install_app: string;
        install_mobile_app: string;
        learn_more: string;
        like_page: string;
        listen_music: string;
        listen_now: string;
        message_page: string;
        mobile_download: string;
        moments: string;
        no_button: string;
        open_link: string;
        order_now: string;
        pay_to_access: string;
        play_game: string;
        play_game_on_facebook: string;
        purchase_gift_cards: string;
        record_now: string;
        refer_friends: string;
        request_time: string;
        say_thanks: string;
        see_more: string;
        sell_now: string;
        send_a_gift: string;
        send_gift_money: string;
        share: string;
        shop_now: string;
        sign_up: string;
        sotto_subscribe: string;
        start_order: string;
        subscribe: string;
        swipe_up_product: string;
        swipe_up_shop: string;
        update_app: string;
        use_app: string;
        use_mobile_app: string;
        video_annotation: string;
        video_call: string;
        visit_pages_feed: string;
        watch_more: string;
        watch_video: string;
        whatsapp_message: string;
        woodhenge_support: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeLinkDataCallToActionValue {
    const Fields: {
        app_destination: string;
        app_link: string;
        application: string;
        event_id: string;
        lead_gen_form_id: string;
        link: string;
        link_caption: string;
        link_format: string;
        page: string;
        product_link: string;
        whatsapp_number: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeLinkDataChildAttachment {
    const Fields: {
        call_to_action: string;
        caption: string;
        description: string;
        image_crops: string;
        image_hash: string;
        link: string;
        name: string;
        picture: string;
        place_data: string;
        static_card: string;
        video_id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeLinkDataImageLayerSpec {
    const BlendingMode: {
        lighten: string;
        multiply: string;
        normal: string;
    };

    const Fields: {
        blending_mode: string;
        content: string;
        frame_image_hash: string;
        frame_source: string;
        image_source: string;
        layer_type: string;
        opacity: string;
        overlay_position: string;
        overlay_shape: string;
        scale: string;
        shape_color: string;
        text_color: string;
        text_font: string;
    };

    const FrameSource: {
        custom: string;
    };

    const ImageSource: {
        catalog: string;
    };

    const LayerType: {
        frame_overlay: string;
        image: string;
        text_overlay: string;
    };

    const OverlayPosition: {
        bottom: string;
        bottom_left: string;
        bottom_right: string;
        center: string;
        left: string;
        right: string;
        top: string;
        top_left: string;
        top_right: string;
    };

    const OverlayShape: {
        circle: string;
        none: string;
        pill: string;
        rectangle: string;
        triangle: string;
    };

    const TextFont: {
        droid_serif_regular: string;
        lato_regular: string;
        noto_sans_regular: string;
        nunito_sans_bold: string;
        open_sans_bold: string;
        open_sans_condensed_bold: string;
        pt_serif_bold: string;
        roboto_condensed_regular: string;
        roboto_medium: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeLinkDataImageOverlaySpec {
    const CustomTextType: {
        free_shipping: string;
        popular: string;
    };

    const Fields: {
        custom_text_type: string;
        float_with_margin: string;
        overlay_template: string;
        position: string;
        text_font: string;
        text_template_tags: string;
        text_type: string;
        theme_color: string;
    };

    const OverlayTemplate: {
        circle_with_text: string;
        pill_with_text: string;
        triangle_with_text: string;
    };

    const Position: {
        bottom_left: string;
        bottom_right: string;
        top_left: string;
        top_right: string;
    };

    const TextFont: {
        droid_serif_regular: string;
        dynads_hybrid_bold: string;
        lato_regular: string;
        noto_sans_regular: string;
        nunito_sans_bold: string;
        open_sans_bold: string;
        open_sans_condensed_bold: string;
        pt_serif_bold: string;
        roboto_condensed_regular: string;
        roboto_medium: string;
    };

    const TextType: {
        automated_personalize: string;
        custom: string;
        disclaimer: string;
        from_price: string;
        guest_rating: string;
        percentage_off: string;
        price: string;
        star_rating: string;
        strikethrough_price: string;
    };

    const ThemeColor: {
        background_000000_text_ffffff: string;
        background_0090ff_text_ffffff: string;
        background_00af4c_text_ffffff: string;
        background_595959_text_ffffff: string;
        background_755dde_text_ffffff: string;
        background_e50900_text_ffffff: string;
        background_f23474_text_ffffff: string;
        background_f78400_text_ffffff: string;
        background_ffffff_text_000000: string;
        background_ffffff_text_007ad0: string;
        background_ffffff_text_009c2a: string;
        background_ffffff_text_646464: string;
        background_ffffff_text_755dde: string;
        background_ffffff_text_c91b00: string;
        background_ffffff_text_f23474: string;
        background_ffffff_text_f78400: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeLinkDataSponsorshipInfoSpec {
    const Fields: {
        sponsor_image_url: string;
        sponsor_name: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeLinkDataTemplateVideoSpec {
    const Fields: {
        categorization_criteria: string;
        customization: string;
        template_id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeObjectStorySpec {
    const Fields: {
        instagram_actor_id: string;
        link_data: string;
        page_id: string;
        photo_data: string;
        template_data: string;
        text_data: string;
        video_data: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeOmnichannelLinkSpec {
    const Fields: {
        app: string;
        web: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativePhotoData {
    const Fields: {
        branded_content_shared_to_sponsor_status: string;
        branded_content_sponsor_page_id: string;
        caption: string;
        image_hash: string;
        page_welcome_message: string;
        url: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativePhotoDataMediaElements {
    const Fields: {
        element_id: string;
        element_type: string;
        x: string;
        y: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativePlaceData {
    const Fields: {
        address_string: string;
        label: string;
        latitude: string;
        location_source_id: string;
        longitude: string;
        type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativePlatformCustomization {
    const Fields: {
        instagram: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativePortraitCustomizations {
    const Fields: {
        carousel_delivery_mode: string;
        specifications: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativePostClickConfiguration {
    const Fields: {
        post_click_item_description: string;
        post_click_item_headline: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeRecommenderSettings {
    const Fields: {
        preferred_events: string;
        product_sales_channel: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeStaticFallbackSpec {
    const Fields: {
        call_to_action: string;
        description: string;
        image_hash: string;
        link: string;
        message: string;
        name: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeTemplateURLSpec {
    const Fields: {
        android: string;
        config: string;
        ios: string;
        ipad: string;
        iphone: string;
        web: string;
        windows_phone: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeTextData {
    const Fields: {
        message: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCreativeVideoData {
    const Fields: {
        additional_image_index: string;
        branded_content_shared_to_sponsor_status: string;
        branded_content_sponsor_page_id: string;
        call_to_action: string;
        collection_thumbnails: string;
        customization_rules_spec: string;
        image_hash: string;
        image_url: string;
        link_description: string;
        message: string;
        offer_id: string;
        page_welcome_message: string;
        post_click_configuration: string;
        retailer_item_ids: string;
        targeting: string;
        title: string;
        video_id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdCustomizationRuleSpec {
    const Fields: {
        caption: string;
        customization_spec: string;
        description: string;
        image_hash: string;
        link: string;
        message: string;
        name: string;
        priority: string;
        template_url_spec: string;
        video_id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdDynamicCreative {
    const Fields: {
        preview_url: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdEntityTargetSpend {
    const Fields: {
        amount: string;
        has_error: string;
        is_accurate: string;
        is_prorated: string;
        is_updating: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdKeywords {
    const Fields: {
        brands: string;
        product_categories: string;
        product_names: string;
        search_terms: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdNetworkAnalyticsAsyncQueryResult {
    const Fields: {
        data: string;
        error: string;
        query_id: string;
        results: string;
        status: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdNetworkAnalyticsSyncQueryResult {
    const AggregationPeriod: {
        day: string;
        total: string;
    };

    const Breakdowns: {
        ad_server_campaign_id: string;
        ad_space: string;
        age: string;
        app: string;
        clicked_view_tag: string;
        country: string;
        deal: string;
        deal_ad: string;
        deal_page: string;
        delivery_method: string;
        display_format: string;
        fail_reason: string;
        gender: string;
        instant_article_id: string;
        instant_article_page_id: string;
        is_deal_backfill: string;
        placement: string;
        placement_name: string;
        platform: string;
        property: string;
        sdk_version: string;
    };

    const Fields: {
        query_id: string;
        results: string;
    };

    const Metrics: {
        fb_ad_network_bidding_bid_rate: string;
        fb_ad_network_bidding_request: string;
        fb_ad_network_bidding_response: string;
        fb_ad_network_bidding_revenue: string;
        fb_ad_network_bidding_win_rate: string;
        fb_ad_network_click: string;
        fb_ad_network_cpm: string;
        fb_ad_network_ctr: string;
        fb_ad_network_fill_rate: string;
        fb_ad_network_filled_request: string;
        fb_ad_network_imp: string;
        fb_ad_network_impression_rate: string;
        fb_ad_network_request: string;
        fb_ad_network_revenue: string;
        fb_ad_network_show_rate: string;
        fb_ad_network_ua_spend: string;
        fb_ad_network_video_guarantee_revenue: string;
        fb_ad_network_video_mrc: string;
        fb_ad_network_video_mrc_rate: string;
        fb_ad_network_video_view: string;
        fb_ad_network_video_view_rate: string;
    };

    const OrderingColumn: {
        metric: string;
        time: string;
        value: string;
    };

    const OrderingType: {
        ascending: string;
        descending: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdPlacePageSetMetadata {
    const Fields: {
        audience: string;
        custom: string;
        extra_data: string;
        fixed_radius: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdPreview {
    const AdFormat: {
        audience_network_instream_video: string;
        audience_network_instream_video_mobile: string;
        audience_network_outstream_video: string;
        audience_network_rewarded_video: string;
        biz_disco_feed_mobile: string;
        desktop_feed_standard: string;
        facebook_reels_banner: string;
        facebook_reels_mobile: string;
        facebook_reels_sticker: string;
        facebook_story_mobile: string;
        facebook_story_sticker_mobile: string;
        instagram_explore_contextual: string;
        instagram_explore_immersive: string;
        instagram_feed_web: string;
        instagram_feed_web_m_site: string;
        instagram_reels: string;
        instagram_reels_overlay: string;
        instagram_shop: string;
        instagram_standard: string;
        instagram_story: string;
        instant_article_recirculation_ad: string;
        instant_article_standard: string;
        instream_banner_desktop: string;
        instream_banner_mobile: string;
        instream_video_desktop: string;
        instream_video_image: string;
        instream_video_mobile: string;
        job_browser_desktop: string;
        job_browser_mobile: string;
        marketplace_mobile: string;
        messenger_mobile_inbox_media: string;
        messenger_mobile_story_media: string;
        mobile_banner: string;
        mobile_feed_basic: string;
        mobile_feed_standard: string;
        mobile_fullwidth: string;
        mobile_interstitial: string;
        mobile_medium_rectangle: string;
        mobile_native: string;
        right_column_standard: string;
        suggested_video_desktop: string;
        suggested_video_mobile: string;
        watch_feed_home: string;
        watch_feed_mobile: string;
    };

    const Fields: {
        body: string;
    };

    const RenderType: {
        fallback: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdPromotedObject {
    const CustomEventType: {
        achievement_unlocked: string;
        add_payment_info: string;
        add_to_cart: string;
        add_to_wishlist: string;
        complete_registration: string;
        contact: string;
        content_view: string;
        customize_product: string;
        d2_retention: string;
        d7_retention: string;
        donate: string;
        find_location: string;
        initiated_checkout: string;
        lead: string;
        level_achieved: string;
        listing_interaction: string;
        messaging_conversation_started_7d: string;
        other: string;
        purchase: string;
        rate: string;
        schedule: string;
        search: string;
        service_booking_request: string;
        spent_credits: string;
        start_trial: string;
        submit_application: string;
        subscribe: string;
        tutorial_completion: string;
    };

    const Fields: {
        application_id: string;
        custom_conversion_id: string;
        custom_event_str: string;
        custom_event_type: string;
        event_id: string;
        fundraiser_campaign_id: string;
        mcme_conversion_id: string;
        object_store_url: string;
        offer_id: string;
        offline_conversion_data_set_id: string;
        page_id: string;
        pixel_aggregation_rule: string;
        pixel_id: string;
        pixel_rule: string;
        place_page_set_id: string;
        product_catalog_id: string;
        product_item_id: string;
        product_set_id: string;
        retention_days: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdRecommendation {
    const Confidence: {
        high: string;
        low: string;
        medium: string;
    };

    const Fields: {
        blame_field: string;
        code: string;
        confidence: string;
        importance: string;
        message: string;
        recommendation_data: string;
        title: string;
    };

    const Importance: {
        high: string;
        low: string;
        medium: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdRecommendationData {
    const Fields: {
        link: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdRuleExecutionOptions {
    const Fields: {
        field: string;
        operator: string;
        value: string;
    };

    const Operator: {
        equal: string;
        in: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdRuleFilters {
    const Fields: {
        field: string;
        operator: string;
        value: string;
    };

    const Operator: {
        all: string;
        any: string;
        contain: string;
        equal: string;
        greater_than: string;
        in: string;
        in_range: string;
        less_than: string;
        none: string;
        not_contain: string;
        not_equal: string;
        not_in: string;
        not_in_range: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdRuleHistory {
    const Action: {
        budget_not_redistributed: string;
        changed_bid: string;
        changed_budget: string;
        email: string;
        endpoint_pinged: string;
        error: string;
        facebook_notification_sent: string;
        message_sent: string;
        not_changed: string;
        paused: string;
        unpaused: string;
    };

    const Fields: {
        evaluation_spec: string;
        exception_code: string;
        exception_message: string;
        execution_spec: string;
        is_manual: string;
        results: string;
        schedule_spec: string;
        timestamp: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdRuleHistoryResult {
    const Fields: {
        actions: string;
        object_id: string;
        object_type: string;
    };

    const ObjectType: {
        ad: string;
        adset: string;
        campaign: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdRuleHistoryResultAction {
    const Fields: {
        action: string;
        field: string;
        new_value: string;
        old_value: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdRuleSchedule {
    const Fields: {
        days: string;
        end_minute: string;
        start_minute: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdRuleScheduleSpec {
    const Fields: {
        schedule: string;
        schedule_type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdRuleTrigger {
    const Fields: {
        field: string;
        operator: string;
        type: string;
        value: string;
    };

    const Operator: {
        all: string;
        any: string;
        contain: string;
        equal: string;
        greater_than: string;
        in: string;
        in_range: string;
        less_than: string;
        none: string;
        not_contain: string;
        not_equal: string;
        not_in: string;
        not_in_range: string;
    };

    const Type: {
        delivery_insights_change: string;
        metadata_creation: string;
        metadata_update: string;
        stats_change: string;
        stats_milestone: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdStudyObjectiveID {
    const Fields: {
        event_names: string;
        id: string;
        type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdStudyObjectiveOffsiteDatasets {
    const Fields: {
        event_names: string;
        id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdgroupIssuesInfo {
    const Fields: {
        error_code: string;
        error_message: string;
        error_summary: string;
        error_type: string;
        level: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdgroupPlacementSpecificReviewFeedback {
    const Fields: {
        account_admin: string;
        ad: string;
        ads_conversion_experiences: string;
        b2c: string;
        b2c_commerce_unified: string;
        bsg: string;
        city_community: string;
        commerce: string;
        daily_deals: string;
        daily_deals_legacy: string;
        dpa: string;
        dri_copyright: string;
        dri_counterfeit: string;
        facebook: string;
        facebook_pages_live_shopping: string;
        independent_work: string;
        instagram: string;
        instagram_shop: string;
        job_search: string;
        lead_gen_honeypot: string;
        marketplace: string;
        marketplace_home_rentals: string;
        marketplace_home_sales: string;
        marketplace_motors: string;
        marketplace_shops: string;
        max_review_placements: string;
        neighborhoods: string;
        page_admin: string;
        product: string;
        product_service: string;
        profile: string;
        seller: string;
        shops: string;
        traffic_quality: string;
        whatsapp: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdgroupReviewFeedback {
    const Fields: {
        global: string;
        placement_specific: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdsActionStats {
    const Fields: {
        action_brand: string;
        action_canvas_component_id: string;
        action_canvas_component_name: string;
        action_carousel_card_id: string;
        action_carousel_card_name: string;
        action_category: string;
        action_converted_product_id: string;
        action_destination: string;
        action_device: string;
        action_event_channel: string;
        action_link_click_destination: string;
        action_location_code: string;
        action_reaction: string;
        action_target_id: string;
        action_type: string;
        action_video_asset_id: string;
        action_video_sound: string;
        action_video_type: string;
        dda: string;
        inline: string;
        interactive_component_sticker_id: string;
        interactive_component_sticker_response: string;
        skan_click: string;
        skan_view: string;
        value: string;
        value_1d_click: string;
        value_1d_view: string;
        value_28d_click: string;
        value_28d_view: string;
        value_7d_click: string;
        value_7d_view: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdsImageCrops {
    const Fields: {
        value_100x100: string;
        value_100x72: string;
        value_191x100: string;
        value_400x150: string;
        value_400x500: string;
        value_600x360: string;
        value_90x160: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdsInsights {
    const ActionAttributionWindows: {
        dda: string;
        default: string;
        skan_click: string;
        skan_view: string;
        value_1d_click: string;
        value_1d_view: string;
        value_28d_click: string;
        value_28d_view: string;
        value_7d_click: string;
        value_7d_view: string;
    };

    const ActionBreakdowns: {
        action_canvas_component_name: string;
        action_carousel_card_id: string;
        action_carousel_card_name: string;
        action_destination: string;
        action_device: string;
        action_reaction: string;
        action_target_id: string;
        action_type: string;
        action_video_sound: string;
        action_video_type: string;
    };

    const ActionReportTime: {
        conversion: string;
        impression: string;
        mixed: string;
    };

    const Breakdowns: {
        ad_format_asset: string;
        age: string;
        app_id: string;
        body_asset: string;
        call_to_action_asset: string;
        country: string;
        description_asset: string;
        device_platform: string;
        dma: string;
        frequency_value: string;
        gender: string;
        hourly_stats_aggregated_by_advertiser_time_zone: string;
        hourly_stats_aggregated_by_audience_time_zone: string;
        image_asset: string;
        impression_device: string;
        link_url_asset: string;
        place_page_id: string;
        platform_position: string;
        product_id: string;
        publisher_platform: string;
        region: string;
        skan_conversion_id: string;
        title_asset: string;
        video_asset: string;
    };

    const DatePreset: {
        data_maximum: string;
        last_14d: string;
        last_28d: string;
        last_30d: string;
        last_3d: string;
        last_7d: string;
        last_90d: string;
        last_month: string;
        last_quarter: string;
        last_week_mon_sun: string;
        last_week_sun_sat: string;
        last_year: string;
        maximum: string;
        this_month: string;
        this_quarter: string;
        this_week_mon_today: string;
        this_week_sun_today: string;
        this_year: string;
        today: string;
        yesterday: string;
    };

    const Fields: {
        account_currency: string;
        account_id: string;
        account_name: string;
        action_values: string;
        actions: string;
        ad_bid_value: string;
        ad_click_actions: string;
        ad_id: string;
        ad_impression_actions: string;
        ad_name: string;
        adset_bid_value: string;
        adset_end: string;
        adset_id: string;
        adset_name: string;
        adset_start: string;
        age_targeting: string;
        attribution_setting: string;
        auction_bid: string;
        auction_competitiveness: string;
        auction_max_competitor_bid: string;
        buying_type: string;
        campaign_id: string;
        campaign_name: string;
        canvas_avg_view_percent: string;
        canvas_avg_view_time: string;
        catalog_segment_actions: string;
        catalog_segment_value: string;
        catalog_segment_value_mobile_purchase_roas: string;
        catalog_segment_value_omni_purchase_roas: string;
        catalog_segment_value_website_purchase_roas: string;
        clicks: string;
        conversion_rate_ranking: string;
        conversion_values: string;
        conversions: string;
        converted_product_quantity: string;
        converted_product_value: string;
        cost_per_15_sec_video_view: string;
        cost_per_2_sec_continuous_video_view: string;
        cost_per_action_type: string;
        cost_per_ad_click: string;
        cost_per_conversion: string;
        cost_per_dda_countby_convs: string;
        cost_per_estimated_ad_recallers: string;
        cost_per_inline_link_click: string;
        cost_per_inline_post_engagement: string;
        cost_per_one_thousand_ad_impression: string;
        cost_per_outbound_click: string;
        cost_per_thruplay: string;
        cost_per_unique_action_type: string;
        cost_per_unique_click: string;
        cost_per_unique_conversion: string;
        cost_per_unique_inline_link_click: string;
        cost_per_unique_outbound_click: string;
        cpc: string;
        cpm: string;
        cpp: string;
        created_time: string;
        ctr: string;
        date_start: string;
        date_stop: string;
        dda_countby_convs: string;
        dda_results: string;
        engagement_rate_ranking: string;
        estimated_ad_recall_rate: string;
        estimated_ad_recall_rate_lower_bound: string;
        estimated_ad_recall_rate_upper_bound: string;
        estimated_ad_recallers: string;
        estimated_ad_recallers_lower_bound: string;
        estimated_ad_recallers_upper_bound: string;
        frequency: string;
        full_view_impressions: string;
        full_view_reach: string;
        gender_targeting: string;
        impressions: string;
        inline_link_click_ctr: string;
        inline_link_clicks: string;
        inline_post_engagement: string;
        instant_experience_clicks_to_open: string;
        instant_experience_clicks_to_start: string;
        instant_experience_outbound_clicks: string;
        interactive_component_tap: string;
        labels: string;
        location: string;
        mobile_app_purchase_roas: string;
        objective: string;
        optimization_goal: string;
        outbound_clicks: string;
        outbound_clicks_ctr: string;
        place_page_name: string;
        purchase_roas: string;
        qualifying_question_qualify_answer_rate: string;
        quality_ranking: string;
        quality_score_ectr: string;
        quality_score_ecvr: string;
        quality_score_organic: string;
        reach: string;
        social_spend: string;
        spend: string;
        total_postbacks: string;
        unique_actions: string;
        unique_clicks: string;
        unique_conversions: string;
        unique_ctr: string;
        unique_inline_link_click_ctr: string;
        unique_inline_link_clicks: string;
        unique_link_clicks_ctr: string;
        unique_outbound_clicks: string;
        unique_outbound_clicks_ctr: string;
        unique_video_continuous_2_sec_watched_actions: string;
        unique_video_view_15_sec: string;
        updated_time: string;
        video_15_sec_watched_actions: string;
        video_30_sec_watched_actions: string;
        video_avg_time_watched_actions: string;
        video_continuous_2_sec_watched_actions: string;
        video_p100_watched_actions: string;
        video_p25_watched_actions: string;
        video_p50_watched_actions: string;
        video_p75_watched_actions: string;
        video_p95_watched_actions: string;
        video_play_actions: string;
        video_play_curve_actions: string;
        video_play_retention_0_to_15s_actions: string;
        video_play_retention_20_to_60s_actions: string;
        video_play_retention_graph_actions: string;
        video_thruplay_watched_actions: string;
        video_time_watched_actions: string;
        website_ctr: string;
        website_purchase_roas: string;
        wish_bid: string;
    };

    const Level: {
        account: string;
        ad: string;
        adset: string;
        campaign: string;
    };

    const SummaryActionBreakdowns: {
        action_canvas_component_name: string;
        action_carousel_card_id: string;
        action_carousel_card_name: string;
        action_destination: string;
        action_device: string;
        action_reaction: string;
        action_target_id: string;
        action_type: string;
        action_video_sound: string;
        action_video_type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdsOptimalDeliveryGrowthOpportunity {
    const Fields: {
        child_metadata: string;
        metadata: string;
        optimization_type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdsPixelStats {
    const Fields: {
        count: string;
        diagnostics_hourly_last_timestamp: string;
        event: string;
        value: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AdsPixelStatsResult {
    const Aggregation: {
        browser_type: string;
        custom_data_field: string;
        device_os: string;
        device_type: string;
        event: string;
        event_detection_method: string;
        event_processing_results: string;
        event_source: string;
        event_total_counts: string;
        event_value_count: string;
        had_pii: string;
        host: string;
        match_keys: string;
        pixel_fire: string;
        url: string;
        url_by_rule: string;
    };

    const Fields: {
        aggregation: string;
        data: string;
        start_time: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AgeRange {
    const Fields: {
        max: string;
        min: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AgencyClientDeclaration {
    const Fields: {
        agency_representing_client: string;
        client_based_in_france: string;
        client_city: string;
        client_country_code: string;
        client_email_address: string;
        client_name: string;
        client_postal_code: string;
        client_province: string;
        client_street: string;
        client_street2: string;
        has_written_mandate_from_advertiser: string;
        is_client_paying_invoices: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AndroidAppLink {
    const Fields: {
        app_name: string;
        class: string;
        package: string;
        url: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AppRequestFormerRecipient {
    const Fields: {
        id: string;
        recipient_id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AssignedUser {
    const Fields: {
        business: string;
        id: string;
        name: string;
        user_type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AsyncRequest {
    const Fields: {
        id: string;
        result: string;
        status: string;
        type: string;
    };

    const Status: {
        error: string;
        executing: string;
        finished: string;
        initialized: string;
    };

    const Type: {
        async_adgroup_creation: string;
        batch_api: string;
        drafts: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AttributionSpec {
    const Fields: {
        event_type: string;
        window_days: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace AudiencePermissionForActions {
    const Fields: {
        can_edit: string;
        can_see_insight: string;
        can_share: string;
        subtype_supports_lookalike: string;
        supports_recipient_lookalike: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace BrandSafetyBlockListUsage {
    const Fields: {
        current_usage: string;
        new_usage: string;
        platform: string;
        position: string;
        threshold: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace BroadTargetingCategories {
    const Fields: {
        category_description: string;
        id: string;
        name: string;
        parent_category: string;
        path: string;
        size_lower_bound: string;
        size_upper_bound: string;
        source: string;
        type: string;
        type_name: string;
        untranslated_name: string;
        untranslated_parent_name: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace BusinessAdAccountRequest {
    const Fields: {
        ad_account: string;
        id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace BusinessApplicationRequest {
    const Fields: {
        application: string;
        id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace BusinessManagedPartnerEligibility {
    const Fields: {
        is_eligible: string;
        reason_code: string;
        reason_description: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace BusinessPageRequest {
    const Fields: {
        id: string;
        page: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CampaignGroupBrandConfiguration {
    const Fields: {
        brand_product_name: string;
        locale: string;
        vertical: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CampaignGroupCollaborativeAdsPartnerInfo {
    const Fields: {
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CanvasAdSettings {
    const Fields: {
        is_canvas_collection_eligible: string;
        lead_form_created_time: string;
        lead_form_name: string;
        lead_gen_form_id: string;
        leads_count: string;
        product_set_id: string;
        use_retailer_item_ids: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CanvasBodyElement {
    const Fields: {
        element: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CanvasCollectionThumbnail {
    const Fields: {
        element_child_index: string;
        element_id: string;
        photo: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CatalogBasedTargeting {
    const Fields: {
        geo_targeting_type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CatalogItemAppLinks {
    const Fields: {
        android: string;
        ios: string;
        ipad: string;
        iphone: string;
        web: string;
        windows: string;
        windows_phone: string;
        windows_universal: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CatalogItemAppealStatus {
    const Fields: {
        handle: string;
        item_id: string;
        status: string;
        use_cases: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CatalogItemChannelsToIntegrityStatus {
    const Fields: {
        channels: string;
        rejection_information: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CatalogSubVerticalList {
    const Fields: {
        appliances: string;
        baby_feeding: string;
        baby_transport: string;
        beauty: string;
        bedding: string;
        cameras: string;
        cameras_and_photos: string;
        cell_phones_and_smart_watches: string;
        cleaning_supplies: string;
        clo_offer: string;
        clothing: string;
        clothing_accessories: string;
        computer_components: string;
        computers_and_tablets: string;
        computers_laptops_and_tablets: string;
        diapering_and_potty_training: string;
        digital_product_offer: string;
        electronic_accessories_and_cables: string;
        electronics_accessories: string;
        furniture: string;
        health: string;
        home: string;
        home_goods: string;
        household_and_cleaning_supplies: string;
        jewelry: string;
        large_appliances: string;
        local_service_business_item: string;
        local_service_business_restaurant: string;
        loyalty_offer: string;
        meetup_space: string;
        nursery: string;
        printers_and_scanners: string;
        printers_scanners_and_fax_machines: string;
        product_discount: string;
        projectors: string;
        shoes: string;
        shoes_and_footwear: string;
        software: string;
        televisions_and_monitors: string;
        test_child_sub_vertical: string;
        test_grand_child_sub_vertical: string;
        test_sub_vertical: string;
        test_sub_vertical_alias: string;
        test_sub_vertical_data_object: string;
        third_party_electronics: string;
        third_party_toys_and_games: string;
        toys: string;
        toys_and_games: string;
        tvs_and_monitors: string;
        vehicle_manufacturer: string;
        video_game_consoles_and_video_games: string;
        video_games_and_consoles: string;
        video_projectors: string;
        watches: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ChatPlugin {
    const Fields: {
        alignment: string;
        desktop_bottom_spacing: string;
        desktop_side_spacing: string;
        entry_point_icon: string;
        entry_point_label: string;
        greeting_dialog_display: string;
        guest_chat_mode: string;
        mobile_bottom_spacing: string;
        mobile_chat_display: string;
        mobile_side_spacing: string;
        theme_color: string;
        welcome_screen_greeting: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CheckBatchRequestStatus {
    const Fields: {
        errors: string;
        errors_total_count: string;
        handle: string;
        ids_of_invalid_requests: string;
        status: string;
        warnings: string;
        warnings_total_count: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ChildEvent {
    const Fields: {
        end_time: string;
        id: string;
        start_time: string;
        ticket_uri: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CollaborativeAdsPartnerInfoListItem {
    const Fields: {
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CommerceMerchantSettingsSetupStatus {
    const Fields: {
        deals_setup: string;
        marketplace_approval_status: string;
        marketplace_approval_status_details: string;
        payment_setup: string;
        review_status: string;
        shop_setup: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CommercePayout {
    const Fields: {
        amount: string;
        payout_date: string;
        payout_reference_id: string;
        status: string;
        transfer_id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CommerceSettings {
    const Fields: {
        inventory: string;
        total_inventory: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ConnectionsTargeting {
    const Fields: {
        id: string;
        name: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ContentDeliveryReport {
    const Fields: {
        content_name: string;
        content_url: string;
        creator_name: string;
        creator_url: string;
        estimated_impressions: string;
    };

    const Platform: {
        audience_network: string;
        facebook: string;
        hidden_aaa: string;
        instagram: string;
        messenger: string;
        oculus: string;
        unknown: string;
        whatsapp: string;
    };

    const Position: {
        all_placements: string;
        an_classic: string;
        biz_disco_feed: string;
        facebook_groups_feed: string;
        facebook_reels: string;
        facebook_reels_overlay: string;
        facebook_stories: string;
        feed: string;
        groups: string;
        hidden_aaa: string;
        instagram_explore: string;
        instagram_igtv: string;
        instagram_reels: string;
        instagram_shop: string;
        instagram_stories: string;
        instant_article: string;
        instream_video: string;
        jobs_browser: string;
        marketplace: string;
        messenger_inbox: string;
        messenger_stories: string;
        oculus_rewarded_video: string;
        oculus_twilight_developer_update: string;
        oculus_twilight_feed: string;
        oculus_twilight_feed_spotlight: string;
        oculus_twilight_search: string;
        oculus_twilight_search_null_state: string;
        oculus_vr_apps: string;
        others: string;
        rewarded_video: string;
        right_hand_column: string;
        search: string;
        status: string;
        stickers: string;
        suggested_video: string;
        unknown: string;
        video_feeds: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ContextualBundlingSpec {
    const Fields: {
        status: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ConversionActionQuery {
    const Fields: {
        action_type: string;
        application: string;
        conversion_id: string;
        creative: string;
        dataset: string;
        event: string;
        event_creator: string;
        event_type: string;
        fb_pixel: string;
        fb_pixel_event: string;
        leadgen: string;
        object: string;
        object_domain: string;
        offer: string;
        offer_creator: string;
        offsite_pixel: string;
        page: string;
        page_parent: string;
        post: string;
        post_object: string;
        post_object_wall: string;
        post_wall: string;
        question: string;
        question_creator: string;
        response: string;
        subtype: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CopyrightReferenceContainer {
    const Fields: {
        content_type: string;
        copyright_creation_time: string;
        download_hd_url: string;
        duration_in_sec: string;
        id: string;
        iswc: string;
        metadata: string;
        published_time: string;
        thumbnail_url: string;
        title: string;
        universal_content_id: string;
        writer_names: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CoverPhoto {
    const Fields: {
        cover_id: string;
        id: string;
        offset_x: string;
        offset_y: string;
        source: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CrashReporter {
    function disable(): void;

    function enable(): void;

}

export namespace CreativeHistory {
    const Fields: {
        creative_fingerprint: string;
        time_ranges: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CreditPartitionActionOptions {
    const Fields: {
        liability_type: string;
        partition_type: string;
        send_bill_to: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace Currency {
    const Fields: {
        currency_offset: string;
        usd_exchange: string;
        usd_exchange_inverse: string;
        user_currency: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CurrencyAmount {
    const Fields: {
        amount: string;
        amount_in_hundredths: string;
        currency: string;
        offsetted_amount: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CustomAudienceAdAccount {
    const Fields: {
        id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CustomAudienceDataSource {
    const Fields: {
        creation_params: string;
        sub_type: string;
        type: string;
    };

    const SubType: {
        anything: string;
        app_users: string;
        campaign_conversions: string;
        combination_custom_audience_users: string;
        constant_contacts_email_hashes: string;
        contact_importer: string;
        conversion_pixel_hits: string;
        copy_paste_email_hashes: string;
        custom_audience_users: string;
        custom_data_targeting: string;
        data_file: string;
        dynamic_rule: string;
        engagement_event_users: string;
        expanded_audience: string;
        external_ids: string;
        external_ids_mix: string;
        facebook_wifi_events: string;
        fb_event_signals: string;
        fb_pixel_hits: string;
        hashes: string;
        hashes_or_user_ids: string;
        household_expansion: string;
        ig_business_events: string;
        ig_promoted_post: string;
        instant_article_events: string;
        lookalike_platform: string;
        mail_chimp_email_hashes: string;
        mobile_advertiser_ids: string;
        mobile_app_combination_events: string;
        mobile_app_custom_audience_users: string;
        mobile_app_events: string;
        multi_data_events: string;
        multi_event_source: string;
        multi_hashes: string;
        multicountry_combination: string;
        nothing: string;
        offline_event_users: string;
        page_fans: string;
        page_smart_audience: string;
        partner_category_users: string;
        place_visits: string;
        platform: string;
        platform_users: string;
        s_expr: string;
        seed_list: string;
        signal_source: string;
        smart_audience: string;
        store_visit_events: string;
        tokens: string;
        user_ids: string;
        video_event_users: string;
        video_events: string;
        web_pixel_combination_events: string;
        web_pixel_hits: string;
        web_pixel_hits_custom_audience_users: string;
    };

    const Type: {
        contact_importer: string;
        copy_paste: string;
        event_based: string;
        file_imported: string;
        household_audience: string;
        seed_based: string;
        third_party_imported: string;
        unknown: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CustomAudienceSession {
    const Fields: {
        end_time: string;
        num_invalid_entries: string;
        num_matched: string;
        num_received: string;
        progress: string;
        session_id: string;
        stage: string;
        start_time: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CustomAudienceSharingStatus {
    const Fields: {
        sharing_relationship_id: string;
        status: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CustomAudienceStatus {
    const Fields: {
        code: string;
        description: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CustomAudiencesTOS {
    const Fields: {
        content: string;
        id: string;
        type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CustomAudiencesharedAccountInfo {
    const Fields: {
        account_id: string;
        account_name: string;
        business_id: string;
        business_name: string;
        sharing_status: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CustomConversionStatsResult {
    const Aggregation: {
        count: string;
        device_type: string;
        host: string;
        pixel_fire: string;
        unmatched_count: string;
        unmatched_usd_amount: string;
        url: string;
        usd_amount: string;
    };

    const Fields: {
        aggregation: string;
        data: string;
        timestamp: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace CustomUserSettings {
    const Fields: {
        page_level_persistent_menu: string;
        user_level_persistent_menu: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace DACheck {
    const ConnectionMethod: {
        all: string;
        app: string;
        browser: string;
        server: string;
    };

    const Fields: {
        action_uri: string;
        description: string;
        key: string;
        result: string;
        title: string;
        user_message: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace DayPart {
    const Fields: {
        days: string;
        end_minute: string;
        start_minute: string;
        timezone_type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace DeliveryCheck {
    const Fields: {
        check_name: string;
        description: string;
        extra_info: string;
        summary: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace DeliveryCheckExtraInfo {
    const Fields: {
        adgroup_ids: string;
        campaign_ids: string;
        countries: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace DeliveryWindow {
    const Fields: {
        ad: string;
        ae: string;
        af: string;
        ag: string;
        ai: string;
        al: string;
        all: string;
        am: string;
        an: string;
        ao: string;
        aq: string;
        ar: string;
        as: string;
        at: string;
        au: string;
        aw: string;
        ax: string;
        az: string;
        ba: string;
        bb: string;
        bd: string;
        be: string;
        bf: string;
        bg: string;
        bh: string;
        bi: string;
        bj: string;
        bl: string;
        bm: string;
        bn: string;
        bo: string;
        bq: string;
        br: string;
        bs: string;
        bt: string;
        bv: string;
        bw: string;
        by: string;
        bz: string;
        ca: string;
        cc: string;
        cd: string;
        cf: string;
        cg: string;
        ch: string;
        ci: string;
        ck: string;
        cl: string;
        cm: string;
        cn: string;
        co: string;
        cr: string;
        cu: string;
        cv: string;
        cw: string;
        cx: string;
        cy: string;
        cz: string;
        de: string;
        dj: string;
        dk: string;
        dm: string;
        do: string;
        dz: string;
        ec: string;
        ee: string;
        eg: string;
        eh: string;
        er: string;
        es: string;
        et: string;
        fi: string;
        fj: string;
        fk: string;
        fm: string;
        fo: string;
        fr: string;
        ga: string;
        gb: string;
        gd: string;
        ge: string;
        gf: string;
        gg: string;
        gh: string;
        gi: string;
        gl: string;
        gm: string;
        gn: string;
        gp: string;
        gq: string;
        gr: string;
        gs: string;
        gt: string;
        gu: string;
        gw: string;
        gy: string;
        hk: string;
        hm: string;
        hn: string;
        hr: string;
        ht: string;
        hu: string;
        id: string;
        ie: string;
        il: string;
        im: string;
        in: string;
        io: string;
        iq: string;
        ir: string;
        is: string;
        it: string;
        je: string;
        jm: string;
        jo: string;
        jp: string;
        ke: string;
        kg: string;
        kh: string;
        ki: string;
        km: string;
        kn: string;
        kp: string;
        kr: string;
        kw: string;
        ky: string;
        kz: string;
        la: string;
        lb: string;
        lc: string;
        li: string;
        lk: string;
        lr: string;
        ls: string;
        lt: string;
        lu: string;
        lv: string;
        ly: string;
        ma: string;
        mc: string;
        md: string;
        me: string;
        mf: string;
        mg: string;
        mh: string;
        mk: string;
        ml: string;
        mm: string;
        mn: string;
        mo: string;
        mp: string;
        mq: string;
        mr: string;
        ms: string;
        mt: string;
        mu: string;
        mv: string;
        mw: string;
        mx: string;
        my: string;
        mz: string;
        na: string;
        nc: string;
        ne: string;
        nf: string;
        ng: string;
        ni: string;
        nl: string;
        no: string;
        np: string;
        nr: string;
        nu: string;
        nz: string;
        om: string;
        pa: string;
        pe: string;
        pf: string;
        pg: string;
        ph: string;
        pk: string;
        pl: string;
        pm: string;
        pn: string;
        pr: string;
        ps: string;
        pt: string;
        pw: string;
        py: string;
        qa: string;
        re: string;
        ro: string;
        rs: string;
        ru: string;
        rw: string;
        sa: string;
        sb: string;
        sc: string;
        sd: string;
        se: string;
        sg: string;
        sh: string;
        si: string;
        sj: string;
        sk: string;
        sl: string;
        sm: string;
        sn: string;
        so: string;
        sr: string;
        ss: string;
        st: string;
        sv: string;
        sx: string;
        sy: string;
        sz: string;
        tc: string;
        td: string;
        tf: string;
        tg: string;
        th: string;
        tj: string;
        tk: string;
        tl: string;
        tm: string;
        tn: string;
        to: string;
        tr: string;
        tt: string;
        tv: string;
        tw: string;
        tz: string;
        ua: string;
        ug: string;
        um: string;
        us: string;
        uy: string;
        uz: string;
        va: string;
        vc: string;
        ve: string;
        vg: string;
        vi: string;
        vn: string;
        vu: string;
        wf: string;
        ws: string;
        xk: string;
        ye: string;
        yt: string;
        za: string;
        zm: string;
        zw: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace DynamicPostChildAttachment {
    const Fields: {
        description: string;
        image_url: string;
        link: string;
        place_id: string;
        product_id: string;
        title: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace Engagement {
    const Fields: {
        count: string;
        count_string: string;
        count_string_with_like: string;
        count_string_without_like: string;
        social_sentence: string;
        social_sentence_with_like: string;
        social_sentence_without_like: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace EntityAtTextRange {
    const Fields: {
        id: string;
        length: string;
        name: string;
        object: string;
        offset: string;
        type: string;
    };

    const Type: {
        application: string;
        event: string;
        group: string;
        page: string;
        user: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace Experience {
    const Fields: {
        description: string;
        from: string;
        id: string;
        name: string;
        with: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ExternalEventSource {
    const Fields: {
        id: string;
        name: string;
        source_type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace FAMEExportConfig {
    const Fields: {
        can_edit: string;
        column_id: string;
        display_name: string;
        format: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace FlexibleTargeting {
    const Fields: {
        behaviors: string;
        college_years: string;
        connections: string;
        custom_audiences: string;
        education_majors: string;
        education_schools: string;
        education_statuses: string;
        ethnic_affinity: string;
        family_statuses: string;
        friends_of_connections: string;
        generation: string;
        home_ownership: string;
        home_type: string;
        home_value: string;
        household_composition: string;
        income: string;
        industries: string;
        interested_in: string;
        interests: string;
        life_events: string;
        moms: string;
        net_worth: string;
        office_type: string;
        politics: string;
        relationship_statuses: string;
        user_adclusters: string;
        work_employers: string;
        work_positions: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace FundingSourceDetails {
    const Fields: {
        coupon: string;
        display_string: string;
        id: string;
        type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace FundingSourceDetailsCoupon {
    const Fields: {
        amount: string;
        currency: string;
        display_amount: string;
        expiration: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace HttpServiceClientConfig {
    function getClient(): any;

    function setClient(client: any): void;

}

export namespace IDName {
    const Fields: {
        id: string;
        name: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace InsightsResult {
    const DatePreset: {
        data_maximum: string;
        last_14d: string;
        last_28d: string;
        last_30d: string;
        last_3d: string;
        last_7d: string;
        last_90d: string;
        last_month: string;
        last_quarter: string;
        last_week_mon_sun: string;
        last_week_sun_sat: string;
        last_year: string;
        maximum: string;
        this_month: string;
        this_quarter: string;
        this_week_mon_today: string;
        this_week_sun_today: string;
        this_year: string;
        today: string;
        yesterday: string;
    };

    const Fields: {
        description: string;
        description_from_api_doc: string;
        id: string;
        name: string;
        period: string;
        title: string;
        values: string;
    };

    const Period: {
        day: string;
        days_28: string;
        lifetime: string;
        month: string;
        week: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace InstagramInsightsResult {
    const Fields: {
        description: string;
        id: string;
        name: string;
        period: string;
        title: string;
        values: string;
    };

    const Metric: {
        carousel_album_engagement: string;
        carousel_album_impressions: string;
        carousel_album_reach: string;
        carousel_album_saved: string;
        carousel_album_video_views: string;
        comments: string;
        engagement: string;
        exits: string;
        impressions: string;
        likes: string;
        plays: string;
        reach: string;
        replies: string;
        saved: string;
        shares: string;
        taps_back: string;
        taps_forward: string;
        video_views: string;
    };

    const Period: {
        day: string;
        days_28: string;
        lifetime: string;
        month: string;
        week: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace InstagramInsightsValue {
    const Fields: {
        end_time: string;
        value: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace InstantArticleInsightsQueryResult {
    const Breakdown: {
        age: string;
        country: string;
        gender: string;
        gender_and_age: string;
        is_organic: string;
        is_shared_by_ia_owner: string;
        no_breakdown: string;
        platform: string;
        region: string;
    };

    const Fields: {
        breakdowns: string;
        name: string;
        time: string;
        value: string;
    };

    const Period: {
        day: string;
        days_28: string;
        lifetime: string;
        month: string;
        week: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace InstantArticlesStats {
    const Fields: {
        error: string;
        metadata: string;
        metric: string;
        totals: string;
        x_axis_breakdown: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace IosAppLink {
    const Fields: {
        app_name: string;
        app_store_id: string;
        url: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace KeyValue {
    const Fields: {
        key: string;
        value: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace LeadGenAppointmentBookingInfo {
    const Fields: {
        advertiser_timezone_offset: string;
        appointment_durations: string;
        appointment_slots_by_day: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace LeadGenConditionalQuestionsGroupChoices {
    const Fields: {
        customized_token: string;
        next_question_choices: string;
        value: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace LeadGenConditionalQuestionsGroupQuestions {
    const Fields: {
        field_key: string;
        input_type: string;
        name: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace LeadGenDraftQuestion {
    const Fields: {
        conditional_questions_choices: string;
        conditional_questions_group_id: string;
        dependent_conditional_questions: string;
        inline_context: string;
        key: string;
        label: string;
        options: string;
        type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace LeadGenPostSubmissionCheckResult {
    const Fields: {
        api_call_result: string;
        api_error_message: string;
        shown_thank_you_page: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace LeadGenQuestion {
    const Fields: {
        conditional_questions_choices: string;
        conditional_questions_group_id: string;
        dependent_conditional_questions: string;
        id: string;
        inline_context: string;
        key: string;
        label: string;
        options: string;
        type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace LeadGenQuestionOption {
    const Fields: {
        key: string;
        value: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace LiveVideoAdBreakConfig {
    const Fields: {
        default_ad_break_duration: string;
        failure_reason_polling_interval: string;
        first_break_eligible_secs: string;
        guide_url: string;
        is_eligible_to_onboard: string;
        is_enabled: string;
        onboarding_url: string;
        preparing_duration: string;
        time_between_ad_breaks_secs: string;
        viewer_count_threshold: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace LiveVideoRecommendedEncoderSettings {
    const Fields: {
        audio_codec_settings: string;
        streaming_protocol: string;
        video_codec_settings: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace LiveVideoTargeting {
    const Fields: {
        age_max: string;
        age_min: string;
        excluded_countries: string;
        geo_locations: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace Location {
    const Fields: {
        city: string;
        city_id: string;
        country: string;
        country_code: string;
        latitude: string;
        located_in: string;
        longitude: string;
        name: string;
        region: string;
        region_id: string;
        state: string;
        street: string;
        zip: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace LookalikeSpec {
    const Fields: {
        country: string;
        is_financial_service: string;
        origin: string;
        origin_event_name: string;
        origin_event_source_name: string;
        origin_event_source_type: string;
        product_set_name: string;
        ratio: string;
        starting_ratio: string;
        target_countries: string;
        target_country_names: string;
        type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ManagedPartnerBusiness {
    const Fields: {
        ad_account: string;
        catalog_segment: string;
        extended_credit: string;
        page: string;
        seller_business_info: string;
        seller_business_status: string;
        template: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace MessagingFeatureReview {
    const Fields: {
        feature: string;
        status: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace MessagingFeatureStatus {
    const Fields: {
        hop_v2: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace MessengerDestinationPageWelcomeMessage {
    const Fields: {
        id: string;
        page_welcome_message_body: string;
        page_welcome_message_type: string;
        template_name: string;
        time_created: string;
        time_last_used: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace MessengerProfile {
    const Fields: {
        account_linking_url: string;
        get_started: string;
        greeting: string;
        ice_breakers: string;
        payment_settings: string;
        persistent_menu: string;
        subject_to_new_eu_privacy_rules: string;
        target_audience: string;
        whitelisted_domains: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace MinimumBudget {
    const Fields: {
        currency: string;
        min_daily_budget_high_freq: string;
        min_daily_budget_imp: string;
        min_daily_budget_low_freq: string;
        min_daily_budget_video_views: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace NativeOfferDiscount {
    const Fields: {
        currency: string;
        override: string;
        text: string;
        type: string;
        value1: string;
        value2: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace NullNode {
    const Fields: {
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace OfflineConversionDataSetPermissions {
    const Fields: {
        can_edit: string;
        can_edit_or_upload: string;
        can_upload: string;
        should_block_vanilla_business_employee_access: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace OfflineConversionDataSetUsage {
    const Fields: {
        num_lift_studies: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace OutcomePredictionPoint {
    const Fields: {
        actions: string;
        impressions: string;
        reach: string;
        spend: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace PageCategory {
    const Fields: {
        api_enum: string;
        fb_page_categories: string;
        id: string;
        name: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace PageChangeProposal {
    const Fields: {
        acceptance_status: string;
        category: string;
        current_value: string;
        id: string;
        proposed_value: string;
        upcoming_change_info: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace PageCommerceEligibility {
    const Fields: {
        offsite: string;
        onsite: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace PageParking {
    const Fields: {
        lot: string;
        street: string;
        valet: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace PagePaymentOptions {
    const Fields: {
        amex: string;
        cash_only: string;
        discover: string;
        mastercard: string;
        visa: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace PageRestaurantServices {
    const Fields: {
        catering: string;
        delivery: string;
        groups: string;
        kids: string;
        outdoor: string;
        pickup: string;
        reserve: string;
        takeout: string;
        waiter: string;
        walkins: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace PageRestaurantSpecialties {
    const Fields: {
        breakfast: string;
        coffee: string;
        dinner: string;
        drinks: string;
        lunch: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace PageSettings {
    const Fields: {
        setting: string;
        value: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace PageStartInfo {
    const Fields: {
        date: string;
        type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace PageThreadOwner {
    const Fields: {
        thread_owner: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace PaymentPricepoints {
    const Fields: {
        mobile: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace Permission {
    const Fields: {
        permission: string;
        status: string;
    };

    const Status: {
        declined: string;
        expired: string;
        granted: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace PlatformImageSource {
    const Fields: {
        height: string;
        source: string;
        width: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace Privacy {
    const Fields: {
        allow: string;
        deny: string;
        description: string;
        friends: string;
        networks: string;
        value: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ProductCatalogCategory {
    const CategorizationCriteria: {
        brand: string;
        category: string;
        product_type: string;
    };

    const Fields: {
        criteria_value: string;
        description: string;
        destination_uri: string;
        image_url: string;
        name: string;
        num_items: string;
        tokens: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ProductCatalogDiagnosticGroup {
    const AffectedChannels: {
        business_inbox_in_messenger: string;
        shops: string;
        test_capability: string;
        universal_checkout: string;
        us_marketplace: string;
    };

    const AffectedFeatures: {
        augmented_reality: string;
        checkout: string;
    };

    const Fields: {
        affected_channels: string;
        affected_features: string;
        diagnostics: string;
        error_code: string;
        number_of_affected_items: string;
        severity: string;
        subtitle: string;
        title: string;
        type: string;
    };

    const Severities: {
        must_fix: string;
        opportunity: string;
    };

    const Severity: {
        must_fix: string;
        opportunity: string;
    };

    const Type: {
        attributes_invalid: string;
        attributes_missing: string;
        category: string;
        checkout: string;
        image_quality: string;
        low_quality_title_and_description: string;
        policy_violation: string;
        shops_visibility_issues: string;
    };

    const Types: {
        attributes_invalid: string;
        attributes_missing: string;
        category: string;
        checkout: string;
        image_quality: string;
        low_quality_title_and_description: string;
        policy_violation: string;
        shops_visibility_issues: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ProductCatalogHotelRoomsBatch {
    const Fields: {
        errors: string;
        errors_total_count: string;
        handle: string;
        status: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ProductCatalogImageSettings {
    const Fields: {
        carousel_ad: string;
        single_ad: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ProductCatalogImageSettingsOperation {
    const Fields: {
        transformation_type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ProductCatalogPricingVariablesBatch {
    const Fields: {
        errors: string;
        errors_total_count: string;
        handle: string;
        status: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ProductCatalogProductSetsBatch {
    const Fields: {
        errors: string;
        errors_total_count: string;
        handle: string;
        status: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ProductEventStat {
    const Breakdowns: {
        device_type: string;
    };

    const DeviceType: {
        desktop: string;
        mobile_android_phone: string;
        mobile_android_tablet: string;
        mobile_ipad: string;
        mobile_iphone: string;
        mobile_ipod: string;
        mobile_phone: string;
        mobile_tablet: string;
        mobile_windows_phone: string;
        unknown: string;
    };

    const Event: {
        addtocart: string;
        addtowishlist: string;
        initiatecheckout: string;
        lead: string;
        purchase: string;
        search: string;
        subscribe: string;
        viewcontent: string;
    };

    const Fields: {
        date_start: string;
        date_stop: string;
        device_type: string;
        event: string;
        event_source: string;
        total_content_ids_matched_other_catalogs: string;
        total_matched_content_ids: string;
        total_unmatched_content_ids: string;
        unique_content_ids_matched_other_catalogs: string;
        unique_matched_content_ids: string;
        unique_unmatched_content_ids: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ProductFeedMissingFeedItemReplacement {
    const Fields: {
        home_listing: string;
        product_item: string;
        store_product_item: string;
        vehicle: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ProductFeedRuleSuggestion {
    const Fields: {
        attribute: string;
        params: string;
        type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ProductFeedUploadErrorReport {
    const Fields: {
        file_handle: string;
        report_status: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ProductItemARData {
    const Fields: {
        container_effect: string;
        effect_icon: string;
        effect_parameters: string;
        picker_icon: string;
        product_ar_link: string;
        state: string;
        surfaces: string;
    };

    const Surfaces: {
        b2c_marketplace: string;
        c2c_marketplace: string;
        da: string;
        daily_deals: string;
        daily_deals_legacy: string;
        ig_product_tagging: string;
        marketplace: string;
        marketplace_ads_deprecated: string;
        marketplace_shops: string;
        offline_conversions: string;
        shops: string;
        universal_checkout: string;
        whatsapp: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ProductItemCommerceInsights {
    const Fields: {
        message_sends: string;
        organic_impressions: string;
        paid_impressions: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ProductItemImporterAddress {
    const Fields: {
        city: string;
        country: string;
        postal_code: string;
        region: string;
        street1: string;
        street2: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ProductSetMetadata {
    const Fields: {
        cover_image_url: string;
        description: string;
        external_url: string;
        integrity_review_status: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ProductVariant {
    const Fields: {
        label: string;
        options: string;
        product_field: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ProfilePictureSource {
    const BreakingChange: {
        profile_picture: string;
    };

    const Fields: {
        bottom: string;
        cache_key: string;
        height: string;
        is_silhouette: string;
        left: string;
        right: string;
        top: string;
        url: string;
        width: string;
    };

    const Type: {
        album: string;
        small: string;
        thumbnail: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace RawCustomAudience {
    const Fields: {
        id: string;
        name: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ReachFrequencyActivity {
    const Fields: {
        account_id: string;
        campaign_active: string;
        campaign_started: string;
        creative_uploaded: string;
        io_approved: string;
        sf_link: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ReachFrequencyAdFormat {
    const Fields: {
        details: string;
        type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ReachFrequencyCurveLowerConfidenceRange {
    const Fields: {
        impression_lower: string;
        num_points: string;
        reach: string;
        reach_lower: string;
        uniq_video_views_2s_lower: string;
        video_views_2s_lower: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ReachFrequencyCurveUpperConfidenceRange {
    const Fields: {
        impression_upper: string;
        num_points: string;
        reach: string;
        reach_upper: string;
        uniq_video_views_2s_upper: string;
        video_views_2s_upper: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ReachFrequencyDayPart {
    const Fields: {
        days: string;
        end_minute: string;
        start_minute: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ReachFrequencyEstimatesCurve {
    const Fields: {
        budget: string;
        conversion: string;
        impression: string;
        interpolated_reach: string;
        num_points: string;
        raw_impression: string;
        raw_reach: string;
        reach: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ReachFrequencyEstimatesPlacementBreakdown {
    const Fields: {
        android: string;
        audience_network: string;
        desktop: string;
        ig_android: string;
        ig_ios: string;
        ig_other: string;
        ig_story: string;
        instant_articles: string;
        instream_videos: string;
        ios: string;
        msite: string;
        suggested_videos: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ReachFrequencySpec {
    const Fields: {
        countries: string;
        default_creation_data: string;
        global_io_max_campaign_duration: string;
        max_campaign_duration: string;
        max_days_to_finish: string;
        max_pause_without_prediction_rerun: string;
        min_campaign_duration: string;
        min_reach_limits: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace Recommendation {
    const Fields: {
        created_time: string;
        has_rating: string;
        has_review: string;
        open_graph_story: string;
        rating: string;
        recommendation_type: string;
        review_text: string;
        reviewer: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace RevSharePolicy {
    const Fields: {
        policy_id: string;
        policy_name: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace RichMediaElement {
    const Fields: {
        element: string;
        element_type: string;
        name: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace SecuritySettings {
    const Fields: {
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ServerSideUtils {
    function isInternationalPhoneNumber(phone_number: any): any;

    function normalizeAndHash(input: any, field: any): any;

    function normalizeCity(city: any): any;

    function normalizeCountry(country: any): any;

    function normalizeCurrency(currency: any): any;

    function normalizeDeliveryCategory(input: any): any;

    function normalizeDobd(dobd: any): any;

    function normalizeDobm(dobm: any): any;

    function normalizeDoby(doby: any): any;

    function normalizeEmail(email: any): any;

    function normalizeF5NameField(name: any): any;

    function normalizeGender(gender: any): any;

    function normalizePhone(phone_number: any): any;

    function normalizeState(state: any): any;

    function normalizeZip(zip: any): any;

    function toSHA256(input: any): any;

}

export namespace SplitTestWinner {
    const Fields: {
        ad_object_level: string;
        confidences: string;
        winner_ad_object_id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace Tab {
    const Fields: {
        application: string;
        custom_image_url: string;
        custom_name: string;
        id: string;
        image_url: string;
        is_non_connection_landing_tab: string;
        is_permanent: string;
        link: string;
        name: string;
        position: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace Targeting {
    const DevicePlatforms: {
        desktop: string;
        mobile: string;
    };

    const EffectiveDevicePlatforms: {
        desktop: string;
        mobile: string;
    };

    const Fields: {
        adgroup_id: string;
        age_max: string;
        age_min: string;
        alternate_auto_targeting_option: string;
        app_install_state: string;
        audience_network_positions: string;
        behaviors: string;
        brand_safety_content_filter_levels: string;
        catalog_based_targeting: string;
        cities: string;
        college_years: string;
        connections: string;
        contextual_targeting_categories: string;
        countries: string;
        country: string;
        country_groups: string;
        custom_audiences: string;
        device_platforms: string;
        direct_install_devices: string;
        dynamic_audience_ids: string;
        education_majors: string;
        education_schools: string;
        education_statuses: string;
        effective_audience_network_positions: string;
        effective_device_platforms: string;
        effective_facebook_positions: string;
        effective_instagram_positions: string;
        effective_messenger_positions: string;
        effective_publisher_platforms: string;
        engagement_specs: string;
        ethnic_affinity: string;
        exclude_reached_since: string;
        excluded_brand_safety_content_types: string;
        excluded_connections: string;
        excluded_custom_audiences: string;
        excluded_dynamic_audience_ids: string;
        excluded_engagement_specs: string;
        excluded_geo_locations: string;
        excluded_mobile_device_model: string;
        excluded_product_audience_specs: string;
        excluded_publisher_categories: string;
        excluded_publisher_list_ids: string;
        excluded_user_device: string;
        exclusions: string;
        facebook_positions: string;
        family_statuses: string;
        fb_deal_id: string;
        flexible_spec: string;
        friends_of_connections: string;
        genders: string;
        generation: string;
        geo_locations: string;
        home_ownership: string;
        home_type: string;
        home_value: string;
        household_composition: string;
        income: string;
        industries: string;
        instagram_positions: string;
        instream_video_skippable_excluded: string;
        interested_in: string;
        interests: string;
        is_whatsapp_destination_ad: string;
        keywords: string;
        life_events: string;
        locales: string;
        messenger_positions: string;
        moms: string;
        net_worth: string;
        office_type: string;
        place_page_set_ids: string;
        political_views: string;
        politics: string;
        product_audience_specs: string;
        prospecting_audience: string;
        publisher_platforms: string;
        radius: string;
        regions: string;
        relationship_statuses: string;
        site_category: string;
        targeting_optimization: string;
        user_adclusters: string;
        user_device: string;
        user_event: string;
        user_os: string;
        wireless_carrier: string;
        work_employers: string;
        work_positions: string;
        zips: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingDynamicRule {
    const Fields: {
        action_type: string;
        ad_group_id: string;
        campaign_group_id: string;
        campaign_id: string;
        impression_count: string;
        page_id: string;
        post: string;
        retention_seconds: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingGeoLocation {
    const Fields: {
        cities: string;
        countries: string;
        country_groups: string;
        custom_locations: string;
        electoral_districts: string;
        geo_markets: string;
        large_geo_areas: string;
        location_cluster_ids: string;
        location_expansion: string;
        location_types: string;
        medium_geo_areas: string;
        metro_areas: string;
        neighborhoods: string;
        places: string;
        political_districts: string;
        regions: string;
        small_geo_areas: string;
        subcities: string;
        subneighborhoods: string;
        zips: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingGeoLocationCity {
    const Fields: {
        country: string;
        distance_unit: string;
        key: string;
        name: string;
        radius: string;
        region: string;
        region_id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingGeoLocationCustomLocation {
    const Fields: {
        address_string: string;
        country: string;
        country_group: string;
        custom_type: string;
        distance_unit: string;
        key: string;
        latitude: string;
        longitude: string;
        max_population: string;
        min_population: string;
        name: string;
        primary_city_id: string;
        radius: string;
        region_id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingGeoLocationElectoralDistrict {
    const Fields: {
        country: string;
        electoral_district: string;
        key: string;
        name: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingGeoLocationGeoEntities {
    const Fields: {
        country: string;
        key: string;
        name: string;
        region: string;
        region_id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingGeoLocationLocationCluster {
    const Fields: {
        key: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingGeoLocationLocationExpansion {
    const Fields: {
        allowed: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingGeoLocationMarket {
    const Fields: {
        country: string;
        key: string;
        market_type: string;
        name: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingGeoLocationPlace {
    const Fields: {
        country: string;
        distance_unit: string;
        key: string;
        latitude: string;
        longitude: string;
        name: string;
        primary_city_id: string;
        radius: string;
        region_id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingGeoLocationPoliticalDistrict {
    const Fields: {
        country: string;
        key: string;
        name: string;
        political_district: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingGeoLocationRegion {
    const Fields: {
        country: string;
        key: string;
        name: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingGeoLocationZip {
    const Fields: {
        country: string;
        key: string;
        name: string;
        primary_city_id: string;
        region_id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingProductAudienceSpec {
    const Fields: {
        exclusions: string;
        inclusions: string;
        product_set_id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingProductAudienceSubSpec {
    const Fields: {
        retention_seconds: string;
        rule: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingProspectingAudience {
    const Fields: {
        sources: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingRelaxation {
    const Fields: {
        lookalike: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TargetingSentenceLine {
    const Fields: {
        id: string;
        params: string;
        targetingsentencelines: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TextWithEntities {
    const Fields: {
        text: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace TrackingAndConversionWithDefaults {
    const Fields: {
        custom_conversion: string;
        custom_tracking: string;
        default_conversion: string;
        default_tracking: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace UserCoverPhoto {
    const Fields: {
        offset_x: string;
        offset_y: string;
        source: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace UserDevice {
    const Fields: {
        hardware: string;
        os: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace UserIDForApp {
    const Fields: {
        app: string;
        id: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace UserIDForPage {
    const Fields: {
        id: string;
        page: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace UserLeadGenDisclaimerResponse {
    const Fields: {
        checkbox_key: string;
        is_checked: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace UserLeadGenFieldData {
    const Fields: {
        name: string;
        values: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace UserPaymentMobilePricepoints {
    const Fields: {
        mobile_country: string;
        phone_number_last4: string;
        pricepoints: string;
        user_currency: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace ValueBasedEligibleSource {
    const Fields: {
        id: string;
        title: string;
        type: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace VideoCopyrightConditionGroup {
    const Fields: {
        action: string;
        conditions: string;
        validity_status: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace VideoCopyrightGeoGate {
    const Fields: {
        excluded_countries: string;
        included_countries: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace VideoCopyrightSegment {
    const Fields: {
        duration_in_sec: string;
        media_type: string;
        start_time_in_sec: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace VideoThumbnail {
    const Fields: {
        height: string;
        id: string;
        is_preferred: string;
        name: string;
        scale: string;
        uri: string;
        width: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace VideoUploadLimits {
    const Fields: {
        length: string;
        size: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace VoipInfo {
    const Fields: {
        has_mobile_app: string;
        has_permission: string;
        is_callable: string;
        is_callable_webrtc: string;
        is_pushable: string;
        reason_code: string;
        reason_description: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace WebAppLink {
    const Fields: {
        should_fallback: string;
        url: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace WindowsAppLink {
    const Fields: {
        app_id: string;
        app_name: string;
        package_family_name: string;
        url: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace WindowsPhoneAppLink {
    const Fields: {
        app_id: string;
        app_name: string;
        url: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

export namespace WorkUserFrontline {
    const Fields: {
        has_access: string;
        is_frontline: string;
    };

    function getByIds(ids: any, fields: any, ...args: any[]): any;

}

