import { View, Text, Image } from 'react-native'
import React from 'react'

export const NumbersHealth = () => {
  return (
    <View className='flex-1'>
        <View className='px-4 pt-12 gap-4'>
            <Text className='text-[#004474] font-bold text-[32px] leading-9 text-center'>HEALTH em números</Text>
            <Text className='text-[#666666] text-base leading-[22px] text-center'>
            A HEALTH é uma plataforma digital de serviços para saúde que nasceu para simplificar os métodos tradicionais, 
            e entregar uma solução fácil e segura aos pacientes, levando saúde, cuidado e bem estar no conforto do seu lar. E para que tudo isso aconteça, esses são nossos números.
            </Text>
        </View>
        <View className='gap-12 mt-12 items-center justify-center'>
            <Image source={require('../assets/pacientes.png')}/>
            <Image source={require('../assets/exames.png')}/>
            <Image source={require('../assets/cidades.png')}/>
            <Image source={require('../assets/exames disponiveis.png')}/>
        </View>
        <View className='border-b-2 flex-1 mx-4 mt-14 items-center bg-[#6666] opacity-30'></View>
    </View>
  )
}
