export const BASE_URL = `http://localhost:5000/api/v1`;
export const EXTRACT_LINKS_URL = BASE_URL + `/page/info/extractLinks`;
export const EXTRACT_TOPICS_URL = BASE_URL + `/page/info/extractTopics`;
export const URL_PATTERN = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;