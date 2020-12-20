# ETICKET APP WITH REACT NATIVE

## Install Google Fonts

[LINK](https://www.youtube.com/watch?v=LBmsecuEXNQ&ab_channel=DesignIntoCode)

## React Navigation

### Installation

[REAT NAVIGATION](https://reactnavigation.org/docs/getting-started)

#### Navigating Between Screens

```react
const component=({navigation})=>{}
```

```react
navigation.navigate('register',{id:2});
```

Or

```react
import { useNavigation } from '@react-navigation/native';
navigation.navigate('register');
```

```react
navigation.navigate('register',{id:2});
```

### Touchables

```react
<Text onPress={()=>{}}></Text>
```

```react
import {TouchableWithoutFeedback,TouchableOpacity,TouchableHighlight} from 'react-native';
```

**NOTE** All the touchables will accept `onPress` prop.
