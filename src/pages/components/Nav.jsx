import { Box, Center, Flex ,Text } from '@chakra-ui/react'
import React, { use, useState } from 'react'
import { AiFillHome,AiFillLayout  } from  'react-icons/ai'
import { HiOutlineSearch } from  'react-icons/hi'
import { IoRadioOutline,IoCaretForwardCircle } from  'react-icons/io5'
import { IoMdAlbums } from  'react-icons/io'

import { IconContext } from 'react-icons'

const Nav = () => {
    const [iconSize,setIconSize] = useState("28px")
    const [color1,setColor1] = useState("#F4425A")
    const [color2,setColor2] = useState("#dedede")
    const [color3,setColor3] = useState("#dedede")
    const [color4,setColor4] = useState("#dedede")
    const [color5,setColor5] = useState("#dedede")

    const navArray = [
        {
            text:"今すぐ聴く",
            icon:<IoCaretForwardCircle size={iconSize} color={color1} />,
        },
        {
            text:"見つける",
            icon:<AiFillLayout size={iconSize} color={color2} />,
        },
        {
            text:"ラジオ",
            icon:<IoRadioOutline size={iconSize} color={color3} />,
        },
        {
            text:"ライブラリ",
            icon:<IoMdAlbums size={iconSize} color={color4} />,
        },
        {
            text:"検索",
            icon:<HiOutlineSearch size={iconSize} color={color5} />,
        },
    ]
    const touch = (ev,Index) => {
        // console.log(Index)
        if ( 0 == Index ){
            setColor1("#F4425A")
            setColor2("#dedede")
            setColor3("#dedede")
            setColor4("#dedede")
            setColor5("#dedede")
        }else if (1 == Index) {
            setColor1("#dedede")
            setColor2("#F4425A")
            setColor3("#dedede")
            setColor4("#dedede")
            setColor5("#dedede")
        }else if (2 == Index) {
            setColor1("#dedede")
            setColor2("#dedede")
            setColor3("#F4425A")
            setColor4("#dedede")
            setColor5("#dedede")
        }else if (3 == Index) {
            setColor1("#dedede")
            setColor2("#dedede")
            setColor3("#dedede")
            setColor4("#F4425A")
            setColor5("#dedede")
        }else if (4 == Index) {
            setColor1("#dedede")
            setColor2("#dedede")
            setColor3("#dedede")
            setColor4("#dedede")
            setColor5("#F4425A")
        }

        // for (let forIndex = 0; forIndex < navArray.length; forIndex++) {
        //     console.log(forIndex);
        // }
    }

    return (
        

        <Flex position={"fixed"} backdropFilter={"blur(10px)"} bgColor={"#fefefecf"} bottom={"0px"} w={"100vw"} borderTop={"1px solid rgba(0,0,0,0.25)"} h={"90px"} justifyContent={"space-between"} padding={"0 16px 28px 16px"} >
            {navArray.map((e,i) => 
                <Center key={i} flexFlow={"column"} gap={"4px"} onClick={(ev)=>touch(ev,i)}>{e.icon}<Text fontSize={"10px"}>{e.text}</Text></Center>
            )}
        </Flex>
        
    )
}

export default Nav