import {useEffect, useState} from "react";
import Http from "axios";
import {EXTRACT_LINKS_URL, EXTRACT_TOPICS_URL} from "../../constants/PageConstants";

export function useLinkList(url) {
    const [links, setLinks] = useState([]);

    async function fetchLinks() {
        return await extractLinks(url);
    }

    useEffect(() => {
        fetchLinks().then(result => {
            setLinks(result.data)
        }).catch(err => {
            setLinks([]);
            console.error(err)
        });
    }, [url]);

    return [links, setLinks];
}

export function useTopicList(url) {
    const [topics, setTopics] = useState([]);

    async function fetchSchema() {
        return await extractTopics(url);
    }

    useEffect(() => {
        fetchSchema().then(result => {
            setTopics(result.data);
        }).catch(err => {
            setTopics([]);
            console.error(err)
        });
    }, [url]);

    return [topics, setTopics];
}

export const extractLinks = (url) => {
    return Http.post(EXTRACT_LINKS_URL, {
        url
    });
}

export const extractTopics = (url) => {
    return Http.post(EXTRACT_TOPICS_URL, {
        url
    });
}