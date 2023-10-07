import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex h-screen'>
      <div className='m-auto text-center'>
        <div className='flex'>
          <Image src="/logo.svg" alt="MKS Logo" className="w-48" width={100} height={24} priority />
          <div className='p-10'>
            <div className='text-4xl my-5'>mapca.in</div>
            <div>
              We’ll be back soon!
            </div>
            <div>
              Sorry for the inconvenience. We’re performing some maintenance at the moment, we’ll be back up shortly!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
