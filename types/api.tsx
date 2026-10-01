export interface MetaData {
    meta_title: string;
    meta_description: string;
    canonical_url: string;
}

export interface Banner {
    banner_image_url: string;
    banner_image_caption?: string;
    banner_image_description?: string;
}

export interface TokenResponse {
    access_token: string;
}

export interface HomeIntroProps {
    introduction_caption: string;
    introduction_description: string;
    introduction_image_url: string;
}

export interface HomeSliderProps {
    slider_caption: string;
    slider_description: string;
    slider_link: string;
    slider_image_url: string;
}

export interface HomeMilestoneProps {
    milestone_caption: string;
    milestone_icon_url: string;
    milestone_achievement: string;
}

export interface ServicesProps {
    service_name: string;
    service_thumbnail_url: string;
    service_url_slug: string;
}

export interface ServiceProps {
    service_name: string;
    service_description: string;
    banner_image_url: string;
    service_thumbnail_url: string;
    canonical_url: string;
    meta_title: string;
    meta_description: string;
}

export interface ClientProps {
    client_name: string;
    client_logo_url: string;
    category_name: string;
}

export interface AboutIntroductionProps {
    introduction_caption: string;
    introduction_description: string;
}

export interface AboutManagementProps {
    management_name: string;
    management_designation: string;
    management_description: string;
}

export interface ProjectsProps {
    project_name: string;
    project_thumbnail_url: string;
    project_url_slug: string;
    project_category_name: string;
    project_category_url_slug: string;
}

export interface ProjectProps {
    project_category_name: string;
    project_name: string;
    project_location: string;
    project_website: string;
    project_caption: string;
    project_size: string;
    project_type: string;
    banner_image_url: string;
    project_thumbnail_url: string;
    canonical_url: string;
    meta_title: string;
    meta_description: string;
}

export interface AwardsProps {
    award_name: string;
    award_image_url: string;
    award_year: string;
    award_description: string;
}

export interface CareerIntroductionProps {
    introduction_description: string;
}

export interface CompliancesIntroductionProps {
    introduction_caption: string;
    introduction_description: string;
    introduction_image_url: string;
}

export interface CompliancesProps {
    investor_caption: string;
    investor_pdf_url: string;
}