import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export const Footer = () => {
  return (
    <View className='pl-4 pt-16 bg-[#545454]'>
      <Image source={require('../assets/isalab.png')}/>
      <Text className='text-xs leading-6 text-[#eeeeee] mt-8'>CNPJ: 00.547.516/0001-50</Text>
      <Text className='text-xs leading-6 text-[#eeeeee]'>© HEALTH Lab | Albor Diagnósticos Laboratoriais LTDA</Text>

      <Text className='text-xs leading-4 text-[#eeeeee] font-bold mt-4'>Responsável ténico</Text>
      <Text className='text-xs leading-4 text-[#eeeeee]'>Dr. David Pares | CRM-SP 150642</Text>
      
      <View className='mt-16 gap-4 flex-row items-center'>
        <Ionicons name='mail-outline' color='#eeeeee' size={20}/>
        <Text className='text-xs leading-7 text-[#eeeeee]'>contato@Healthlab.com.br</Text>
      </View>

      <View className='gap-4 flex-row items-center'>
        <Ionicons name='logo-whatsapp' color='#eeeeee' size={20}/>
        <Text className='text-xs leading-7 text-[#eeeeee]'>(11) 99196-1033</Text>
      </View>

      <View className='gap-4 flex-row items-center'>
        <Ionicons name='headset-outline' color='#eeeeee' size={20}/>
        <Text className='text-xs leading-7 text-[#eeeeee]'>(11) 2199-4725</Text>
      </View>

      <View className='mt-[18px] gap-4 mb-24 flex-row'>
        <Pressable className='w-7 h-7 rounded-full items-center justify-center border border-[#eeeeee]'>
            <Ionicons name='logo-instagram' color='#eeeeee' size={14}/>
        </Pressable>

        <Pressable className='w-7 h-7 rounded-full items-center justify-center border border-[#eeeeee]'>
            <Ionicons name='logo-linkedin' color='#eeeeee' size={14}/>
        </Pressable>

        <Pressable className='w-7 h-7 rounded-full items-center justify-center border border-[#eeeeee]'>
            <Ionicons name='logo-facebook' color='#eeeeee' size={14}/>
        </Pressable>
      </View>
    </View>
  )
}

