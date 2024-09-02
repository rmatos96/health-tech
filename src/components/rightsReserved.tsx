import { View, Text } from 'react-native'
import React from 'react'

export const RightsReserved = () => {
  return (
    <View className='pl-4 pt-8 bg-[#464646]'>
      <Text className='text-xs leading-6 text-[#eeeeee]'>© HEALTH Lab 2021 | Todos os direitos reservados</Text>
      
      <View className='mt-2 mb-9'>
        <Text className='text-sm leading-10 text-[#eeeeee]'>Vacinas</Text>
        <Text className='text-sm leading-10 text-[#eeeeee]'>Exames</Text>
        <Text className='text-sm leading-10 text-[#eeeeee]'>Quem Somos</Text>
        <Text className='text-sm leading-10 text-[#eeeeee]'>Empresas</Text>
        <Text className='text-sm leading-10 text-[#eeeeee]'>Convênios</Text>
        <Text className='text-sm leading-10 text-[#eeeeee] font-bold'>COVID 19</Text>
      </View>
    </View>
  )
}
