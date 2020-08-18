import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {styles} from '../styles/common';
import Compilation from './compilation';
import Loading from './common/loading';

const COMPILATIONS_URL =
  'https://raw.githubusercontent.com/fedefunes96/Imvelo/master/assets/compilations.json';

const Compilations = ({navigation}) => {
  const [compilations, setCompilations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCompilations = async () => {
      try {
        setLoading(true);
        const response = await fetch(COMPILATIONS_URL);
        setCompilations(response.json());
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCompilations();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <FlatList
        data={compilations}
        renderItem={({item}) => (
          <Compilation
            data={item}
            onPress={() =>
              navigation.navigate('CompilationDetails', {
                compilationId: item.id,
              })
            }
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Compilations;
