// 'use client'
import * as React from 'react'
import type { Metadata } from 'next'
import Welcome from '@c/landing/welcome'
import Culture from '@c/landing/culture'
import Products from '@c/landing/products'
import Platform from '@c/landing/platform'
import Reviews from '@c/landing/reviews'
import Club from '@c/landing/club'

export const metadata: Metadata = {
  title: 'Speaking Community',
  description: 'Welcome to our Speaking Community',
}

export default function ElevateAppBar() {
  return (
    <>
      <Welcome />
      <Culture />
      <Products />
      <Platform />
      {/* <Reviews /> */}
      <Club />
    </>
  );
}
