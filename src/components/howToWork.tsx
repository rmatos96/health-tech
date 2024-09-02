import { View, Text, Image } from 'react-native'
import React from 'react'

export const HowToWork = () => {
  return (
    <View className='h-[640px] bg-[#fff] pt-24'>
      <Image source={require('../assets/Group 235.png')}  />
      <Text className='font-bold text-[32px] text-[#004474] text-center pt-12'>Como a Health funciona</Text>

      <View className='pt-6 pl-6 flex-row gap-8'>
        <View className='flex-row gap-6'>
            <Image source={require('../assets/Group 164.png')} />
            <View>
                <Text className='text-xl text-[#666666]'>Em nosso site ou em</Text>
                <Text className='text-xl text-[#666666]'>nosso APP escolha sua</Text>
                <Text className='text-xl font-bold text-[#666666]'>vacina, exame ou</Text>
                <Text className='text-xl font-bold text-[#666666]'>texte de CODIV-19.</Text>
            </View>
        </View>
        <Image className='ml-8 h-full' source={require('../assets/Group 152.png')}/>
      </View>
    </View>
  )
}
