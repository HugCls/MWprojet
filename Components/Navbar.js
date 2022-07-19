import { Switch } from "@chakra-ui/react"
import styles from '../styles/Layout.module.css'
import { useMediaQuery } from "@chakra-ui/react"
import { useState, useEffect } from 'react'
import Link from 'next/link'


const Navbar = ({ toggleTheme, currentTheme }) => {
    const [drawerVisible] = useMediaQuery("(max-width: 950px)")
    const [sticky, setSticky] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setSticky(true);
            return;
        }
        setSticky(false);
    }
}

export default Navbar