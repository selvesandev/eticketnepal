import React from 'react';
import { Dimensions, ScrollView, Text, View, Image, FlatList, TouchableHighlight } from 'react-native';
import { paragraph_styles, title_style } from '../../assets/styles';
import { IntroHeader, VerticalSpacing, AppScreen, AppSearchField } from '../../components';
import { DARK, PRIMARY, ALERT_DANGER, DIMER, GRAY } from '../../config/colors';

const menuItems = ['Events', 'Venues', 'Comedy', 'Movies', 'Travels'];
const listData = [
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '4' },
    { key: '5' }
];
const numOfColumns = 2;
const WIDTH = Dimensions.get('window').width;

function HomeScreen(props) {

    const _renderItem = ({ item, index }) => {
        if (item.empty === true) return <View style={{
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            // height: (WIDTH / numOfColumns),
            margin: 3,
            flex: 1,
        }}></View>
        return <TouchableHighlight underlayColor={DIMER} onPress={() => {
            console.log("Hey");
        }} style={{
            width: '50%',
            backgroundColor: 'white',
            height: 'auto',
            margin: 3,
            marginBottom: 10,
            // shadowColor: "#000",
            // shadowOffset: {
            //     width: 1,
            //     height: 1,
            // },
            // shadowOpacity: 0.25,
            // shadowRadius: 1,
            // elevation: 2,
            borderWidth: 0.5,
            borderColor: "#ccc",
            borderRadius: 1,
            // border: '1px solid #ccc',
            flex: 1,
            padding: 3,
            justifyContent: 'space-between'
        }}><View >
                <Image source={{ uri: 'https://res.cloudinary.com/galaktik-nepal-p-ltd/image/upload/c_thumb,h_195,q_100,w_312/v1542626323/event/RbXNOGNFuHRMjxMTqp8g.jpg' }}
                    style={{ width: '100%', height: 100 }} />
                <View style={{ paddingVertical: 10 }}><Text style={{ ...title_style }}>International Youth Summit</Text></View>
                <View style={{
                    padding: 5,
                    backgroundColor: 'rgba(0, 0, 0, 0.03)',
                    borderTopWidth: 0.5,
                    borderColor: "rgba(0, 0, 0, 0.125)",
                    borderRadius: 1,
                }}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ ...paragraph_styles, marginTop: 0, fontSize: 12, lineHeight: 13 }} numberOfLines={2}>
                            NPR &nbsp;
                        <Text style={{ fontWeight: 'bold' }}>
                                200.00
                        </Text> on 31st Dec onward at &nbsp;
                        <Text style={{ fontWeight: 'bold' }}>Bhrikutimandap Exihibition Hall
                        </Text>


                        </Text>
                    </View>
                </View>
            </View ></TouchableHighlight>;
    }

    function formatData(dataList, numOfColumns) {
        const totalRows = Math.floor(dataList.length / numOfColumns);
        let totalLastRows = dataList.length - (totalRows * numOfColumns);
        while (totalLastRows !== 0 && totalLastRows !== numOfColumns) {
            dataList.push({ key: 'blank', empty: true });
            totalLastRows++;
        }
        return dataList;
    }

    return <AppScreen>
        <VerticalSpacing height={10} />
        <View style={{ height: 40, }}>
            <ScrollView
                contentContainerStyle={{ alignItems: 'center' }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                {menuItems.map((item, key) => {
                    return <View key={key}><Text style={{
                        backgroundColor: key === 0 ? PRIMARY : 'transparent',
                        marginRight: 20,
                        color: key === 0 ? 'white' : DARK, borderRadius: 200,
                        height: 30,
                        paddingLeft: 15,
                        paddingRight: 15,
                        lineHeight: 27
                    }}>{item}</Text>
                        {item === 'Comedy' ? <Text style={{
                            position: 'absolute',
                            fontSize: 10,
                            backgroundColor: ALERT_DANGER,
                            color: 'white',
                            borderRadius: 14,
                            paddingLeft: 3,
                            paddingRight: 3,
                            right: 20,
                            top: -6
                        }}>New</Text> : null}
                    </View>
                })}
            </ScrollView>
        </View>
        <VerticalSpacing height={15} />
        <IntroHeader title="Featured" titleSpecial={'Events'} subTitle={"Most happening events with tons of entertainment in your city by authorized organizers"} />
        <VerticalSpacing height={20} />

        <FlatList horizontal showsVerticalScrollIndicator={false}
            ListHeaderComponent={<>
                {/* <VerticalSpacing height={20} /> */}
                {/* <AppSearchField /> */}

            </>}
            // numColumns={2}
            data={formatData(listData, numOfColumns)}
            renderItem={_renderItem}
            keyExtractor={(item, index) => index.toString()} />
    </AppScreen>;
}


export { HomeScreen };