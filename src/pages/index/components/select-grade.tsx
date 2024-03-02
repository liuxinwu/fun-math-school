import { View, Text,  } from "@tarojs/components";
import { PropsWithChildren, useState } from "react";

export default function SelectGrade({  }: PropsWithChildren<{
  grade: number
}>) {
  const [visible, setVisible] = useState(false)

  return <>
    <View className='title-wrap align-items_flex-end p-row_20' onClick={() => setVisible(true)}>
      <Text className='title-text'>一年级上册 </Text>
    </View>

  </>
}
