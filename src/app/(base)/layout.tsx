import HeaderComp from '@/app/components/Navbar'

export default function BaseLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className={'w-full h-full'}>
      <HeaderComp />
      {children}
    </section>
  )
}
