//import all necessary libraries and packages
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import NewsItemsLarge from './newsView/NewsItemsLarge';
import NewsItemsSmall from './newsView/NewsItemsSmall';
import {
  QueryLocalNews,
  QueryForeignNews,
} from '../functions/NewsQueryFunctions';

//main exported function
export default function ForeignNewsList1({
  navigation,
  category,
  language,
  pageSize,
  type,
  openModal,
}) {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoadingError, setImageLoadingError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [largeNews, setLargeNews] = useState(true);

  useEffect(() => {
    if (type === 'local') {
      //call the local news query function if the news type is 'local'
      QueryLocalNews(
        category,
        language,
        pageSize,
        setArticle,
        setIsLoading,
        setLargeNews,
      );
    } else {
      //call the foreign news query function if the news type is 'foreign'
      QueryForeignNews(
        category,
        language,
        pageSize,
        setArticle,
        setIsLoading,
        setLargeNews,
      );
    }
  }, [isLoading, category, language, pageSize, type]);

  return (
    <FlatList
      data={article}
      renderItem={({item}) =>
        //check the user's preferred news type and return it
        largeNews ? (
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
      keyExtractor={(item) => item.url}
      onRefresh={() => setIsLoading(true)}
      refreshing={isLoading}
    />
  );
}
