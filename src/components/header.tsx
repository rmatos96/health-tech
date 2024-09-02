import { View, Text, Image, Button, Pressable, TextInput } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'


export const Header = () => {
  return (
    <View>
        

        <View className='relative h-[586]'>
            <Image className='w-full h-[360]' source={require('../assets/IMAGEM TOPO.png')} />
            <View className='bg-[#ED1E79] w-full h-[296] absolute top-[290] opacity-95'>
                <View className='mt-12 pl-4'>
                    <Text className='text-4xl font-semibold text-[#fff]'>Vacinas e exames</Text>
                    <Text className='text-4xl font-semibold text-[#fff]'>no conforto</Text>
                    <Text className='text-4xl font-semibold text-[#fff]'>do seu lar.</Text>
                    <Text className='text-4xl font-semibold text-[#fff]'>A HEALTH vai até você!</Text>
                </View>

                <Pressable className='bg-[#004474] mt-4 ml-4 items-center rounded-full h-10 w-44 py-3 px-6'>
                    <Text className='text-xs font-semibold text-[#fff]'>AGENDE SUA COLETA</Text>
                </Pressable>
            </View>

            <View className='gap-4 absolute right-4 bottom-32'>
                <View className='rounded-full bg-[#004474] h-10 w-10 items-center justify-center'>
                    <Ionicons name='chatbubble-ellipses-outline' color={'#fff'} size={20}/>
                </View>
                <View className='rounded-full bg-[#004474] h-10 w-10 items-center justify-center'>
                    <Ionicons name='logo-whatsapp' size={20} color={'#fff'}/>
                </View>
            </View>
        </View>

        <View className='bg-[#F2F5F8] h-72 w-full'>
            <Text className='pl-4 pt-12 text-[#004474] text-3xl font-bold mb-6'>Procure seu exame ou vacina</Text>
            <View className='px-4'>
                <View className='flex-row w-full h-16 rounded-full items-center bg-[#004474] pl-6 gap-5 mb-6'>
                    <Ionicons name='search' color={'#fff'} size={24} />
                    <TextInput className='placeholder:text-xl placeholder:text-[#fff] placeholder:opacity-50' placeholder='Busque pelo nome ou termo'/>
                </View>
            </View>
            <Text className='text-center text-xl text-[#555]'>Ou veja quais são os <Text className='font-bold underline'>convênios</Text></Text>
            <Text className='text-center text-xl text-[#555]'>que são nossos parceiros de saúde</Text>
        </View>
    </View>
  )
}
