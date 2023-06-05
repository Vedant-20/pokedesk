import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Search from './Search'
import { searchState } from '@/atoms/SearchAtom'
import { useRecoilState } from 'recoil'
import { loadingState } from "@/atoms/LoadingAtom";
import Loader from "./Loader";

const Layout = ({children}) => {

const [isPopupOpen,setIsPopupOpen] = useRecoilState(searchState);
const [isLoading, setIsLoading] = useRecoilState(loadingState);


  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
        {isPopupOpen && <Search/>}
        {isLoading && <Loader />}
    </div>
  )
}

export default Layout