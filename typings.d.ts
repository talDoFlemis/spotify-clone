/* eslint-disable @typescript-eslint/no-unused-vars */
import { JWT } from "next-auth/jwt"
import NextAuth, { DefaultSession } from "next-auth"

declare module "components/svgs/*.svg" {
  import React from "react"

  const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

  export default Component
}
declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string
    refreshToken: string
    username: string
    accessTokenExpires: number
  }
}

declare module "next-auth" {
  interface Session {
    error?: string
    user: {
      accessToken: string
      refreshToken: string
      username: string
    } & DefaultSession["user"]
  }
}

export interface PlaylistData {
  collaborative?: boolean
  description?: string
  external_urls?: {
    spotify?: string
  }
  href?: string
  id?: string
  images?: {
    height: number
    url: string
    width: number
  }[]
  name?: string
  owner?: {
    display_name: string
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    type: string
    uri: string
  }
  primary_color?: string
  public?: boolean
  snapshot_id?: string
  tracks?: {
    href: string
    total: number
  }
  type?: string
  uri?: string
}

export interface ShowsData {
  added_at: string
  show: {
    copyrights: string[]
    description: string
    explicit: boolean
    external_urls: {
      spotify: string
    }
    href: string
    html_description: string
    id: string
    images: {
      height: number
      url: string
      width: number
    }[]

    is_externally_hosted: boolean
    languages: string[]
    media_type: string
    name: string
    publisher: string
    total_episodes: number
    type: string
    uri: string
  }
}

export interface TopTracksData {
  album: {
    album_type: string
    artists: [
      {
        external_urls: {
          spotify: string
        }
        href: string
        id: string
        name: string
        type: string
        uri: string
      }
    ]
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    images: {
      height: number
      url: string
      width: number
    }[]

    name: string
    release_date: string
    release_date_precision: string
    total_tracks: number
    type: string
    uri: string
  }
  artists: [
    {
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      name: string
      type: string
      uri: string
    }
  ]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: {
    isrc: string
  }
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
}

export interface TopArtistsData {
  external_urls: {
    spotify: string
  }
  followers: {
    href: string
    total: number
  }
  genres: string[]
  href: string
  id: string
  images: {
    height: number
    url: string
    width: number
  }[]
  name: string
  popularity: number
  type: string
  uri: string
}

export interface RecentlyPlayedData {
  track: {
    album: {
      album_type: string
      artists: {
        external_urls: {
          spotify: string
        }
        href: string
        id: string
        name: string
        type: string
        uri: string
      }[]
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      images: {
        height: number
        url: string
        width: number
      }[]
      name: string
      release_date: string
      release_date_precision: string
      total_tracks: number
      type: string
      uri: string
    }
    artists: {
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      name: string
      type: string
      uri: string
    }[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: {
      isrc: string
    }
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    is_local: number
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
  }
  played_at: string
  context: number
}
