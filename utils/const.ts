export const SITE_TITLE = "ashcolor official website";

export const THUMBNAIL_BASE_URL = "/img/thumbnail/";
export const LYRIC_BASE_URL = "/txt/lyric/";

export const ALBUM_TITLES: { [key: string]: string } = {
    an_introduction_to_odds_and_ends: "ガラクタ概論",
    song_of_the_beginning: "はじまりの歌",
    after_the_dream: "ゆめのあと",
};

interface SINGER {
    name: string;
    color: string;
}
export const SINGERS: { [key: string]: SINGER } = {
    miku: {
        name: "初音ミク",
        color: "#39C5BB",
    },
    luka: {
        name: "巡音ルカ",
        color: "#ffc0cb",
    },
    ryo: {
        name: "Ryo",
        color: "#e7613e",
    },
};

export const NICONICO_URL_PREFIX = "https://www.nicovideo.jp/watch/";

export const YOUTUBE_URL_PREFIX = "https://youtu.be/";

export const pageTitle = (title?: string): string => {
    return title ? `${title} - ${SITE_TITLE}` : `${SITE_TITLE}`;
};
