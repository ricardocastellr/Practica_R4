export interface Root {
  topartists: Topartists
}

export interface Topartists {
  artist: Artist[]
  "@attr": Attr
}

export interface Artist {
  name: string
  listeners: string
  mbid: string
  url: string
  streamable: string
  image: Image[]
}

export interface Image {
  "#text": string
  size: string
}

export interface Attr {
  country: string
  page: string
  perPage: string
  totalPages: string
  total: string
}