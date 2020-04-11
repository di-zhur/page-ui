import {useEffect, useState} from "react";
import Http from "axios";
import {CALCULATION_FIND_URL, CATEGORY_URL} from "../../constants/ApiConstants";

export function useLinkList(url) {
  const [links, setLinks] = useState( []);

  async function fetchLinks() {
    return await extractLinks(url);
  }

  useEffect(() => {
    fetchLinks().then(result => {
      setLinks(result.data)
    }).catch(err => console.error(err));
  }, [url]);

  return [links, setLinks];
}

export function useTopicList(url) {
  const [topics, setTopics] = useState( []);

  async function fetchSchema() {
    return await extractTopics(url);
  }

  useEffect(() => {
    fetchSchema().then(result => {
      setTopics(result.data);
    }).catch(err => console.error(err));
  }, [url]);

  return [topics, setTopics];
}

export const extractLinks = (url) => {
  return Http.post("http://localhost:5000/api/v1/page/info/extractLinks", {
    url
  });
}

export const extractTopics = (url) => {
  return Http.post("http://localhost:5000/api/v1/page/info/extractTopics", {
    url
  });
}