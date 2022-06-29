import { Text } from 'react-native';

import { MENU } from '../data/food-data';

function FoodOverviewScreen({ route }) {
    const foodId = route.params.menuId;

    return <Text>hgdfyjtf({foodId})</Text>
}

export default FoodOverviewScreen;