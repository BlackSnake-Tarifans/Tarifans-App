import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  
} from 'react-native';
import { MultipleSelectPicker } from 'react-native-multi-select-picker';

const styles = StyleSheet.create({
  TextfileTitle: {
    fontWeight: 'bold',
    color: '#f28e43',
  },
  ViewPicker: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  TextfileCate: {
    fontWeight: 'bold',
    color: '#949494',
  },
  CheckBoxStyle: {
    width: 20,
    height: 20,
    backgroundColor: '#edd4ff',
    borderRadius: 20,
  },
});

function Multiselector({selected}: any){
  

    let [selectectedItems, setSelectedItems] = React.useState(selected!==[]?selected: []);
    let [isShownPicker, setIsShownPicker] = React.useState(false);
  
    const items = [
      { label: 'Básica', value: '1' },
      { label: 'Premium', value: '2' },
      { label: 'Platinum', value: '3' },
    ];

    return (
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            setIsShownPicker(!isShownPicker);
          }}
          style={styles.ViewPicker}
        >
          <Text style={styles.TextfileTitle}>Categorías</Text>
        </TouchableOpacity>
        {isShownPicker ? (
          <MultipleSelectPicker
            items={items}
            onSelectionsChange={(ele: any) => {
              setSelectedItems(ele);
            }}
            selectedItems={selectectedItems}
            buttonStyle={{
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            buttonText="hello"
            checkboxStyle={styles.CheckBoxStyle}
            rowStyle={{ backgroundColor: 'transparent' }}
            labelStyle={styles.TextfileCate}
          />
        ) : null}

        {(selectectedItems || []).map((item: any, index) => {
          return (
            <Text style={{ color: '#b3b3b3' }} key={index}>
              {item.label}
            </Text>
          );
        })}
      </ScrollView>
    );
  
}

export default Multiselector;