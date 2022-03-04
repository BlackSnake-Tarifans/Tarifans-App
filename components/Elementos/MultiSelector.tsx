import * as React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { MultipleSelectPicker } from 'react-native-multi-select-picker'
 
export default class App extends React.Component<any, {}> {
    state = {
        selectectedItems: [],
        isShownPicker: false
    }
    multiSelect: any
 
    render() {
        const items = [
            { label: 'Básica', value: '1' },
            { label: 'Premium', value: '2' },
            { label: 'Platinum', value: '3' },           
        ]
        return (
            <ScrollView>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({ isShownPicker: !this.state.isShownPicker })
                    }}
                    style={styles.ViewPicker}
                >
                    <Text style={styles.TextfileTitle}>Categorías</Text>
                </TouchableOpacity>
                {this.state.isShownPicker ? <MultipleSelectPicker
                    items={items}
                    onSelectionsChange={(ele: any) => { this.setState({ selectectedItems: ele }) }}
                    selectedItems={this.state.selectectedItems}
                    buttonStyle={{ height: 100, justifyContent: 'center', alignItems: 'center' }}
                    buttonText='hello'
                    checkboxStyle={{ height: 20, width: 20 }}
                    rowStyle={{backgroundColor:'transparent'}}
                    labelStyle={styles.TextfileCate}
                />
                    : null
                }
 
                {(this.state.selectectedItems || []).map((item: any, index) => {
                    return <Text style={{color:'#b3b3b3'}} key={index}>
                        {item.label}
                    </Text>
                })}
 
            </ScrollView >
        )
    }
}
const styles = StyleSheet.create({    
    TextfileTitle: {
      fontWeight: 'bold',
      color: '#f28e43'
    },
    ViewPicker:{
        height: 50, width: '100%', justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'transparent' 
    },
    TextfileCate:{
        fontWeight: 'bold',
      color: '#b3b3b3'
    }
  });