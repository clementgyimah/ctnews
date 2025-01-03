//import all necessary libraries and packages
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import NewsItemsLarge from './newsView/NewsItemsLarge';
import NewsItemsSmall from './newsView/NewsItemsSmall';
import {useNewsQuery} from '../hooks/useNewsQuery';
import {useSelector} from 'react-redux';
import {newsType} from '../constants';

//main exported function
export default function ForeignNewsList1({
  navigation,
  category,
  language,
  pageSize,
  local,
  openModal,
}) {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoadingError, setImageLoadingError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const type = useSelector(state => state.settings.type);

  const {queryNews} = useNewsQuery({category, language, pageSize, local});

  useEffect(() => {
    newsQuery();
  }, [newsQuery]);

  const newsQuery = useCallback(async () => {
    setIsLoading(true);
    const articles = await queryNews({category, language, pageSize, local});
    if (articles) {
      setArticle(articles);
    }
    setIsLoading(false);
  }, [category, language, local, pageSize, queryNews]);

  return (
    <FlatList
      data={article}
      renderItem={({item}) =>
        //check the user's preferred news type
        type === newsType.large ? (
          <NewsItemsLarge
            title={item.title}
            sourceName={item.source.name}
            navigation={navigation}
            imageSrc={item.urlToImage}
            url={item.url}
            publishedAt={item.publishedAt}
            imageLoadingError={imageLoadingError}
            setImageLoadingError={setImageLoadingError}
            imageLoading={imageLoading}
            setImageLoading={setImageLoading}
            openModal={openModal}
          />
        ) : (
          <NewsItemsSmall
            title={item.title}
            sourceName={item.source.name}
            navigation={navigation}
            imageSrc={item.urlToImage}
            url={item.url}
            publishedAt={item.publishedAt}
            imageLoadingError={imageLoadingError}
            setImageLoadingError={setImageLoadingError}
            imageLoading={imageLoading}
            setImageLoading={setImageLoading}
            openModal={openModal}
          />
        )
      }
      keyExtractor={(_, index) => index}
      onRefresh={newsQuery}
      refreshing={isLoading}
    />
  );
}
