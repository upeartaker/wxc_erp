import HeaderComp from '@/app/components/Navbar'

export default function BaseLayout({
  children,
  modal
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <section className={'w-full h-full'}>
      <HeaderComp />
      {children}
      {modal}
    </section>
  )
}
