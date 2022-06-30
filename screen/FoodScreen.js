import { FlatList } from "react-native";

import CategoryGridTile from "../component/CategoryGridTile";

import { MENU } from "../data/food-data"

function FoodScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate("FoodOverview", {
                menuId: itemData.item.id,
                menuName: itemData.item.name,
                menuPrice: itemData.item.price,
                menuDefinition: itemData.item.definition,
                menuImage: itemData.item.picture,
            });
        }
        return (
            <CategoryGridTile
                title={itemData.item.name}
                onPress={pressHandler}
            />
        );
    }
    return (
        <FlatList
            data={MENU}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}

export default FoodScreen
