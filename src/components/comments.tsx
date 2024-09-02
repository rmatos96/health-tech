import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { comments } from '@/comments'

interface CommentProps{
    name: string,
    lastName: string,
    comment: string,
    imageUrl: string
}

export const Comments = () => {
    const [arrayOfComments, setArrayOfComments] = useState<CommentProps[]>([])

    useEffect(() => {
        setArrayOfComments(comments)
    },[])

  return (
    <View>
        {/* {comments.map(item => (
            <View>
            <View className='relative h-[632px]'>
                <View className='flex-row'>
                    <Image className='w-[174px] h-[244px]' source={{uri: item.imageUrl}}/>
                    <View>
                        <Image className='ml-14' source={require('../assets/setas.png')}/>
                        <View className='pl-4 pt-24'> 
                            <Text className='font-semibold text-2xl text-[#000]'>{item.name}</Text>
                            <Text className='font-semibold text-2xl text-[#000]'>{item.lastName}</Text>
                        </View>
                    </View>
                </View>
    
                <View className='w-[301] h-[344] bg-[#ED1E79] pl-6 pt-6 opacity-90 absolute bottom-32 right-0'>
                    <Image source={require('../assets/asterisco.png')}/>
                    <View className='pt-4 pr-2'>
                        <Text className='font-semibold text-2xl leading-[30px] text-[#fff]'>
                            {item.comment}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
        ))} */}

    <FlatList 
        data={arrayOfComments}
        renderItem={({item}) => 
        <View className='relative h-[632px]'>
            <View className='flex-row'>
                <Image className='w-[174px] h-[244px]' source={{uri: item.imageUrl}}/>
                <View>
                    <Image className='ml-14' source={require('../assets/setas.png')}/>
                    <View className='pl-4 pt-24'> 
                        <Text className='font-semibold text-2xl text-[#000]'>{item.name}</Text>
                        <Text className='font-semibold text-2xl text-[#000]'>{item.lastName}</Text>
                    </View>
                </View>
            </View>

            <View className='w-[301] h-[344] bg-[#ED1E79] pl-6 pt-6 opacity-90 absolute bottom-32 right-0'>
                <Image source={require('../assets/asterisco.png')}/>
                <View className='pt-4 pr-2'>
                    <Text className='font-semibold text-2xl leading-[30px] text-[#fff]'>
                        {item.comment}
                    </Text>
                </View>
            </View>
        </View>}
        horizontal={true}
        contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight: 16}}
        showsHorizontalScrollIndicator={false}
    />
    </View>
  )
}
