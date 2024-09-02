import { View, Text, ScrollView, FlatList, Image, Pressable, Modal } from 'react-native'
import Constants from 'expo-constants'
import React, { useState } from 'react'

import { Header } from '../components/header'
import { HowToWork } from '../components/howToWork'
import { Partners } from '../components/partners'
import { Comments } from '../components/comments'
import { NumbersHealth } from '../components/numbersHealth'
import { Certifieds } from '../components/certifieds'
import { Footer } from '../components/footer'
import { RightsReserved } from '../components/rightsReserved'
import { Ionicons } from '@expo/vector-icons'

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <ScrollView 
      style={{flex:1}}
      showsVerticalScrollIndicator={false}
      className='bg-[#fff]'
    >
      <Modal 
        animationType='slide'
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className='bg-[#004474] opacity-80 flex-1 relative'>
          <View className='pt-14 flex-row w-full justify-center items-center'>
            <View className='gap-6 flex-row justify-center items-center'>
              <Ionicons name='bag-handle-outline' size={20} color={'#fff'}/>
              <View className='h-[58px] w-[2px] bg-[#fff]'></View>
              <Ionicons name='person-outline' size={20} color={'#fff'}/>
            </View>
            <Ionicons name='close' size={30} color={'#fff'} 
              className='absolute top-[48px] right-3'
              onPress={() => setModalVisible(false)}
            />
          </View>

          <View className='pt-10 gap-7 justify-center items-center'>
            <Pressable className='bg-[#ED1E79] items-center justify-center rounded-full h-[46px] w-[167px]'>
                    <Text className='text-[#fff] font-semibold'>AGENDAMENTO</Text>
            </Pressable>
            <Pressable className='items-center justify-center rounded-full h-[46px] w-[167px] border border-[#fff]'>
                    <Text className='text-[#fff] font-semibold'>RESULTADOS</Text>
            </Pressable>

            <View className='gap-6 items-center justify-center'>
              <Text className='text-[#fff] text-base'>Vacinas</Text>
              <Text className='text-[#fff] text-base'>Exames</Text>
              <Text className='text-[#fff] text-base'>Quem Somos</Text>
              <Text className='text-[#fff] text-base'>Empresas</Text>
              <Text className='text-[#fff] text-base'>Convênios</Text>
              <Text className='text-[#fff] text-base font-bold'>COVID-19</Text>
            </View>


          </View>

          <View className='border-b-2 mt-[19px] mx-4 items-center bg-[#fff] opacity-50'></View>

          <Text className='text-center font-bold text-[#fff] text-base mt-5'>Conheça nosso APP</Text>

          <View className='flex-1 px-[17px] gap-6 mt-4 flex-row '>
            <Pressable className='h-[50] flex-1 rounded-full bg-[#fff] justify-center items-center'>
              <Image source={require('../assets/app.png')} />
            </Pressable>

            <Pressable className='h-[50] flex-1 rounded-full bg-[#fff] justify-center items-center'>
              <Image source={require('../assets/google.png')}/>
            </Pressable>
          </View>

        </View>
      </Modal>

      <View style={{marginTop: statusBarHeight +16}}>
        <View className='flex-row mt-6 mb-8 pl-4  gap-16 items-center '>
            <Image  source={require('../assets/cross.png')}/>

            <View className='flex-row gap-10 items-center pl-6'>
                <Pressable className='bg-[#ED1E79] items-center justify-center rounded-full h-[46px] w-[150px]'>
                    <Text className='text-[#fff] font-semibold'>AGENDAMENTO</Text>
                </Pressable>

                <View className='flex-row items-center gap-6'>
                    <Image source={require('../assets/Rectangle 4.png')}/>

                    <Ionicons name='menu' size={24} onPress={() => setModalVisible(true)}/>
                </View>
            </View>
        </View>
        <Header />
        <HowToWork />
        <Partners />
        <Text className='ml-4 mt-12 mb-8 font-bold text-[32px] leading-9 text-[#004474]'>Depoimentos</Text>
        <Comments />
        <NumbersHealth />
        <Certifieds />
        <Footer />
        <RightsReserved />
      </View>

    </ScrollView>
  )
}
