import img0797 from '@/assets/images/life/img_0797.jpg'
import img0907 from '@/assets/images/life/img_0907.jpg'
import img1463 from '@/assets/images/life/img_1463.jpg'
import img1538 from '@/assets/images/life/img_1538.jpg'
import img1931 from '@/assets/images/life/img_1931.jpg'
import img2295 from '@/assets/images/life/img_2295.jpg'
import img3267 from '@/assets/images/life/img_3267.jpg'
import img3437 from '@/assets/images/life/img_3437.jpg'
import img3814 from '@/assets/images/life/img_3814.jpg'
import img4198 from '@/assets/images/life/img_4198.jpg'
import img4298 from '@/assets/images/life/img_4298.jpg'
import img4815 from '@/assets/images/life/img_4815.jpg'
import img5838 from '@/assets/images/life/img_5838.jpg'
import img6375 from '@/assets/images/life/img_6375.jpg'
import img8047 from '@/assets/images/life/img_8047.jpg'
import img9832 from '@/assets/images/life/img_9832.jpg'

export interface Photo {
  id: number
  src: string
  alt: string
  caption?: string
}

export function getShuffledPhotos(): Photo[] {
  const arr = [...photos]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j]!, arr[i]!]
  }
  return arr
}

export const photos: Photo[] = [
  { id: 1, src: img0797, alt: '生活照' },
  { id: 2, src: img0907, alt: '生活照' },
  { id: 3, src: img1463, alt: '生活照' },
  { id: 4, src: img1538, alt: '生活照' },
  { id: 5, src: img1931, alt: '生活照' },
  { id: 6, src: img2295, alt: '生活照' },
  { id: 7, src: img3267, alt: '生活照' },
  { id: 8, src: img3437, alt: '生活照' },
  { id: 9, src: img3814, alt: '生活照' },
  { id: 10, src: img4198, alt: '生活照' },
  { id: 11, src: img4298, alt: '生活照' },
  { id: 12, src: img4815, alt: '生活照' },
  { id: 13, src: img5838, alt: '生活照' },
  { id: 14, src: img6375, alt: '生活照' },
  { id: 15, src: img8047, alt: '生活照' },
  { id: 16, src: img9832, alt: '生活照' },
]
