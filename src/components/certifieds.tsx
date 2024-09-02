import { View, Text, Image } from 'react-native'
import React from 'react'

export const Certifieds = () => {
  return (
    <View className='mt-16 '>
        <View>
            <Text className='font-semibold leading-8 text-2xl text-[#004474] text-center'>Nossos certificados</Text>
            <Text className='font-semibold leading-8 text-2xl text-[#004474] text-center'>de qualidade</Text>
        </View>
        <View className='flex-1 mx-4 mt-4'>
            <Text className='text-base leading-6 text-[#666666] text-center'>Entendemos que segurança e bem-estar são aliados e que cada indivíduo é único.</Text>
            <Text className='text-base font-bold leading-6 text-[#666666] text-center'>A qualidade do nosso atendimento é atestada pelos seguintes selos:</Text>
        </View>
        <View className='flex-1 mx-[105px] mt-7 gap-16 mb-24'>
            <Image source={require('../assets/acreditado.png')} className='drop-shadow-2xl '/>
            <Image source={require('../assets/controllab.png')} className='drop-shadow-2xl'/>
            <Image source={require('../assets/pelm.png')} className='drop-shadow-2xl'/>
        </View>
    </View>
  )
}
