export interface NasaLibItem {
  href: string;
  data: {
    center: string;
    title: string;
    keywords: string[];
    nasa_id: string;
    date_created: string;
    media_type: string;
    description: string;
    asset: string;
  }[];
  links: {
    href: string;
    rel: string;
    render?: string;
  }[];
}

export interface NasaLibItemAssetCollection {
  href: string;
}

export interface NasaLibAssetCollection {
  collection: {
    version: string;
    href: string;
    items: NasaLibItemAssetCollection[];
  };
}
