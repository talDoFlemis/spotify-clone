import { CurrentSongInfo } from "typings"
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
  collaborative: boolean
  description: string
  external_urls: {
    spotify: string
  }
  followers: {
    href: string
    total: number
  }
  href: string
  id: string
  images: {
    height: number
    url: string
    width: number
  }[]
  name: string
  owner: {
    display_name: string
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    type: string
    uri: string
  }
  primary_color: string
  public: boolean
  snapshot_id: string
  tracks: {
    href: string
    total: number
    items: {
      added_at: string
      added_by: {
        external_urls: {
          spotify: string
        }
        href: string
        id: string
        type: string
        uri: string
      }
      is_local: boolean
      primary_color: string
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
        episode: boolean
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
        track: boolean
        track_number: number
        type: string
        uri: string
      }
      video_thumbnail: {
        url: string
      }
    }[]
  }
  type: string
  uri: string
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
    episodes: {
      total: number
      items: {
        audio_preview_url: string
        description: string
        duration_ms: number
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
        is_playable: boolean
        language: string
        languages: string
        name: string
        release_date: string
        release_date_precision: string
        type: string
        uri: string
      }[]
    }
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

export interface CurrentSongInfo {
  timestamp: number
  context: {
    external_urls: {
      spotify: string
    }
    href: string
    type: string
    uri: string
  }
  progress_ms: number
  item: {
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
    is_local: boolean
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
  }
  currently_playing_type: string
  actions: {
    disallows: {
      resuming: boolean
    }
  }
  is_playing: true
}

export interface PlayerStatus {
  device: {
    id: string
    is_active: boolean
    is_private_session: boolean
    is_restricted: boolean
    name: string
    type: string
    volume_percent: number
  }
  shuffle_state: boolean
  repeat_state: string
  timestamp: number
  context: {
    external_urls: {
      spotify: string
    }
    href: string
    type: string
    uri: string
  }
  progress_ms: number
  item: {
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
    is_local: boolean
    name: string
    show: ShowsData["show"]
    images: {
      height: number
      url: string
      width: number
    }[]
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
  }
  currently_playing_type: string
  actions: {
    disallows: {
      resuming: boolean
    }
  }
  is_playing: boolean
}

export interface EpisodeData {
  audio_preview_url: string
  description: string
  duration_ms: number
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
  is_playable: boolean
  language: string
  languages: string
  name: string
  release_date: string
  release_date_precision: string
  show: {
    copyrights: []
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
  type: string
  uri: string
}

export interface AlbumsData {
  album_group: string
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
  tracks: { total: number; items: CurrentSongInfo["item"][] }
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

export interface userGithubData {
  name: string
  login: string
  avatarUrl: string
  url: string
  bio: string
  email: string
  repositories: {
    nodes: {
      id: string
      name: string
      stargazerCount: number
      updatedAt: string
      url: string
      homepageUrl: string
      languages: {
        totalSize: number
        edges: {
          size: number
          node: {
            color: string
            id: string
            name: string
          }
        }[]
      }
    }[]
  }
}
