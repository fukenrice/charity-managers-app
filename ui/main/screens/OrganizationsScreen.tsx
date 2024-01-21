import {StyleSheet, Text, View} from 'react-native';
import PagerTitle from "../components/PagerTitle";
import {useRef, useState} from "react";
import {BACKGROUND_COLOR} from "../../../styles/colors";
import {CharityModel} from "../../../data/model/СharityModel";
import {FlatList} from "react-native-gesture-handler";
import CharityListItem from "../../charity/components/CharityListItem";
import PagerView from "react-native-pager-view";
import {refresh} from "@react-native-community/netinfo";

export default function OrganizationsScreen() {
    const [page, setPage] = useState<number>(0)
    const pagerRef = useRef<PagerView>(null);
    const orgsSample: CharityModel[] = [{
        name: "Name",
        briefDescription: "slfjlkjsflsajflsjflkjslf lksjfljdslkfjsalj flj lafdlfldjlkf jasdlfjalksjd lsjadfl kjsdfl jasf",
        description: "slfjlkjsflsajflsjflkjslf lksjfljdslkfjsalj flj lafdlfldjlkf jasdlfjalksjd lsjadfl kjsdfl jasf",
        url: null,
        address: null,
        tags: []
    },
        {
            name: "Name22",
            briefDescription: "slfjlkjsflsajflsjflkjslf lksjfljdslkfjsalj flj lafdlfldjlkf jasdlfjalksjd lsjadfl kjsdfl jasf",
            description: "slfjlkjsflsajflsjflkjslf lksjfljdslkfjsalj flj lafdlfldjlkf jasdlfjalksjd lsjadfl kjsdfl jasf",
            url: null,
            address: null,
            tags: []
        }
    ]

    const changePage = (pageNum: number) => {
        console.log(pageNum)
        setPage(pageNum)
        if (pagerRef.current) {
            pagerRef.current.setPage(pageNum)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Мои организации</Text>
            <PagerTitle selected={page} firstLabel={"Одобренные"} secondLabel={"Заявки"} onSelect={changePage}/>

            <PagerView style={{flex: 1, width: "100%"}} ref={pagerRef} initialPage={0}
                       onPageSelected={event => {
                           setPage(event.nativeEvent.position)
                       }}>
                <View key="1">
                    <FlatList style={{width: "100%"}} data={orgsSample} renderItem={(item => {
                        return <CharityListItem charity={item.item} onPress={(charity) => {
                        }}/>
                    })}
                              ItemSeparatorComponent={() => <View style={{height: 20}}/>}
                    />
                </View>
                <View key="2">
                    <FlatList style={{width: "100%"}} data={orgsSample} renderItem={(item => {
                        return <CharityListItem charity={item.item} onPress={(charity) => {
                        }}/>
                    })}
                              ItemSeparatorComponent={() => <View style={{height: 20}}/>}
                    />
                </View>
            </PagerView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
        alignItems: 'center',
        padding: "4%"
    },
    label: {
        alignSelf: "flex-start",
        fontWeight: "700",
        fontSize: 30,
        color: "#2E5C40",
    }
});
