import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../theme/colorsTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
  iconName: string
}

const TouchableIcon = ({ iconName }: Props) => {
  const { changeFavoriteIcon } = useContext(AuthContext);// changeFavoriteIcon comes from provider values.
  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}>
      <Icon name={iconName} size={80} color={colors.primary}></Icon>
    </TouchableOpacity>
  )
}

export default TouchableIcon
