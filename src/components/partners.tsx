import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

export const Partners = () => {
  return (
    <View className='h-[895] bg-[#002844] relative'>
      <View className='h-[436] mt-16 mx-4 rounded-2xl bg-[#fff]'>
        <View className='flex-row pt-8 px-7 gap-16 justify-center'>
            <View>
                <Image source={require('../assets/bemcare.png')}/>
                <Text className='pt-6 text-center text-[#004474] font-semibold text-lg'>bem.care</Text>
            </View>

            <View>
                <Image source={require('../assets/careplus.png')}/>
                <Text className='pt-[17] text-center text-[#004474] font-semibold text-lg'>Careplus</Text>
            </View>
        </View>

        <View className='flex-row pt-9 px-7 gap-9 justify-center'>
            <View className='items-center'>
                <Image source={require('../assets/doctorprime.png')}/>
                <Text className='pt-[29px] text-center text-[#004474] font-semibold text-lg leading-[22px]'>Doctor</Text>
                <Text className='text-center text-[#004474] font-semibold text-lg leading-[22px]'>Prime</Text>
            </View>

            <View className='items-center'>
                <Image source={require('../assets/verde.png')}/>
                <Text className='pt-[24px] text-center text-[#004474] font-semibold text-lg leading-[22px]'>Garantia</Text>
                <Text className='text-center text-[#004474] font-semibold text-lg leading-[22px]'>de Saúde</Text>
            </View>
        </View>

        <View className='flex-row pt-8 px-7 gap-16 justify-center'>
            <View className='items-center'>
                <Image source={require('../assets/plena.png')}/>
                <Text className='pt-6 text-center text-[#004474] font-semibold text-lg'>Plena Saúde</Text>
            </View>
        </View>
      </View>

      <View className='mt-14 mx-4'>
        <Text className='font-bold text-[32px] leading-9 text-[#fff]'>Nossos parceiros</Text>
        <Text className='font-bold text-[32px] leading-9 text-[#fff]'>de saúde</Text>

        <View className='mt-4'>
            <Text className='text-[#fff] text-base leading-[22px]'>A HEALTH está crescendo mais a cada dia</Text>
            <Text className='text-[#fff] text-base leading-[22px]'>que passa, e com isso estamos sempre em</Text>
            <Text className='text-[#fff] text-base leading-[22px]'>contato com convênios para que seus</Text>
            <Text className='text-[#fff] text-base leading-[22px]'>pacientes tenham a facilidade de serem</Text>
            <Text className='text-[#fff] text-base leading-[22px]'>atendidos aonde quer que estejam.</Text>
        </View>
      </View>

      <Pressable className='h-10 w-44 bg-[#fff] items-center justify-center rounded-full ml-4 mt-[14px]'>
        <Text className='font-bold text-xs'>AGENDE SEU EXAME</Text>
      </Pressable>

      <Image className='absolute bottom-0 right-0 opacity-45' source={require('../assets/Group 206.png')}/>
    </View>
  )
}
