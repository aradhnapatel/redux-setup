/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getBookData, getPostsData} from '../action/books';

export const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCurrent, setPageCurrent] = useState(1);

  const dispatch = useDispatch();
  const getPost = () => dispatch(getBookData());
  const getPostdata = useSelector(state => state.Books.bookList);

  useEffect(() => {
    // setIsLoading(true);
    getPost();
    setData(getPostdata);
    return () => {};
  }, [pageCurrent]);

  const handleDataChange = async () => {
    // getPost(pageCurrent);
    // setData(getPostdata);
    // setIsLoading(false);
  };

  const renderItem = ({item}) => {
    console.log('===============item item=====================');
    console.log(item);
    console.log('====================================');
    return (
      <View style={{marginHorizontal: 20}}>
        <Text style={{fontWeight: 'bold', paddingBottom: 10}}>{item.id}</Text>
        <Text style={{fontWeight: 'bold', paddingBottom: 10}}>
          {item.title}
        </Text>
        <Text style={{fontWeight: '400', paddingBottom: 10}}>{item.body}</Text>
      </View>
    );
  };
  const renderFooter = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    ) : null;
  };
  const handleLoadMore = async () => {
    setPageCurrent(pageCurrent + 1);
    setIsLoading(true);
    const res = await getPostsData(pageCurrent);
    console.log('==============res.data======================');
    console.log(JSON.stringify(res));
    console.log('====================================');
    setData(data.concat(res));
    setIsLoading(false);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={styles.container}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
});
