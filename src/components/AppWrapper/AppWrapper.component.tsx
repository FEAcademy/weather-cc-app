import { Navbar } from 'components/Navbar'
import { HomePage } from 'pages/Home'
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { OuterWrapper } from './AppWrapper.styled'

export function AppWrapper() {
  const location = useLocation()

  const isPageScrollable: boolean = location.pathname === ('/map' || '/about') ? true : false

  return (
    <OuterWrapper>
      <Navbar isPageScrollable={isPageScrollable} />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </OuterWrapper>
  )
}
