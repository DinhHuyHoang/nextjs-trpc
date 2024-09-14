import localFont from 'next/font/local'

export const Pretendard = localFont({
  src: [
    {
      path: './Pretendard-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Pretendard-Bold.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Pretendard-ExtraBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Pretendard-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
  ],
})
