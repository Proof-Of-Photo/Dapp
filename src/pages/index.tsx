import Image from 'next/image';
import { useState } from 'react';
import {
  BanknotesIcon,
  BriefcaseIcon,
  ChatBubbleBottomCenterTextIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='bg-white text-black'>
      <header className='navbar fixed top-0 left-0 z-50 w-full border-stroke bg-white duration-300'>
        <div className='container relative lg:max-w-[1305px] lg:px-10'>
          <div className='flex items-center justify-between'>
            <div className='block py-4 lg:py-0'>
              <a href='index.html' className='block max-w-[145px] sm:max-w-[180px]'>
                <Image src='/logo-text-dark.png' alt='logo' width={125} height={15} />
              </a>
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className='navbarOpen absolute right-4 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 flex-col items-center justify-center space-y-[6px] font-bold lg:hidden'
              aria-label='navbarOpen'
              name='navbarOpen'>
              <span className='block h-[2px] w-7 bg-black '></span>
              <span className='block h-[2px] w-7 bg-black '></span>
              <span className='block h-[2px] w-7 bg-black '></span>
            </button>

            <div
              className={`menu-wrapper relative ${isOpen ? '' : 'hidden'} justify-between lg:flex`}>
              <button
                onClick={() => setIsOpen(false)}
                className='navbarClose fixed top-10 right-10 z-[9999] flex h-10 w-10 flex-col items-center justify-center font-bold lg:hidden'
                name='navbarClose'
                aria-label='navbarClose'>
                <span className='block h-[2px] w-7 rotate-45 bg-black '></span>
                <span className='-mt-[2px] block h-[2px] w-7 -rotate-45 bg-black '></span>
              </button>

              <nav className='fixed top-0 left-0 z-[999] flex h-screen w-full items-center justify-center bg-white bg-opacity-95 text-center backdrop-blur-sm lg:static lg:h-auto lg:w-max lg:bg-transparent lg:backdrop-blur-none '>
                <ul className='items-center space-y-3 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-10'>
                  <li className='menu-item'>
                    <a
                      onClick={() => setIsOpen(false)}
                      href='#features'
                      className='menu-scroll inline-flex items-center text-base font-medium text-black hover:text-redpraha   lg:py-7'>
                      Features
                    </a>
                  </li>
                  <li className='menu-item'>
                    <a
                      onClick={() => setIsOpen(false)}
                      href='#about'
                      className='menu-scroll inline-flex items-center text-base font-medium text-black hover:text-redpraha   lg:py-7'>
                      About
                    </a>
                  </li>
                  <li className='menu-item'>
                    <a
                      onClick={() => setIsOpen(false)}
                      href='#work-process'
                      className='menu-scroll inline-flex items-center text-base font-medium text-black hover:text-redpraha   lg:py-7'>
                      How It Works
                    </a>
                  </li>
                  <li className='menu-item'>
                    <a
                      onClick={() => setIsOpen(false)}
                      href='#faq'
                      className='menu-scroll inline-flex items-center text-base font-medium text-black hover:text-redpraha   lg:py-7'>
                      Support
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className='mr-[60px] flex items-center justify-end lg:mr-0'>
              <a
                href='/dashboard'
                className='rounded-md bg-redpraha py-[6px] px-[12px] xl:py-[10px] xl:px-[30px] text-base font-medium text-white hover:bg-opacity-90'>
                Use The App
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id='home' className='pt-[165px]'>
          <div className='container lg:max-w-[1305px] lg:px-10'>
            <div className='-mx-4 flex flex-wrap items-center'>
              <div className='w-full px-4 lg:w-7/12'>
                <div className='wow fadeInUp mb-12 lg:mb-0 lg:max-w-[570px]' data-wow-delay='.2s'>
                  <span className='mb-5 block text-2xl font-medium leading-tight text-black sm:text-[40px] md:text-[50px] lg:text-[42px] xl:text-[50px]'>
                    to fight misinformation in the age of AI...
                  </span>
                  <h1 className='mb-6 text-5xl font-bold leading-tight text-black  sm:text-[50px] md:text-[70px] lg:text-[52px] xl:text-[60px]'>
                    we need{' '}
                    <span className='inline bg-redpraha bg-clip-text text-transparent'>
                      {' '}
                      authentic
                    </span>
                    photos from
                    <span className='inline bg-redpraha bg-clip-text text-transparent mx-2'>
                      real
                    </span>
                    people
                  </h1>
                  <p className='mb-10 max-w-[475px] text-base leading-relaxed text-body'>
                    Proof of Picture helps people earn from sharing real photos with the news
                    organizations that need them the most
                  </p>

                  <div className='flex flex-wrap items-center'>
                    <a
                      target='_blank'
                      href='https://github.com/orgs/Witness-Market/repositories'
                      className='mr-6 mb-6 inline-flex h-[60px] items-center rounded-lg bg-black py-[14px] px-[30px] text-white hover:bg-opacity-90'>
                      <span className='mr-[18px] border-r border-stroke border-opacity-40 pr-[18px] leading-relaxed '>
                        View on Github
                      </span>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'>
                          <path
                            fill='#FFF'
                            d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
                          />
                        </svg>
                      </span>
                    </a>
                    <a
                      target='_blank'
                      href='https://github.com/TalentLayer-Labs/starter-kit'
                      className='mr-6 mb-6 inline-flex h-[60px] items-center rounded-lg bg-redpraha py-[14px] px-[30px] text-white hover:bg-opacity-90'>
                      Use the App
                    </a>

                    {/* <a
                      href='javascript:void(0)'
                      className='glightbox mb-6 inline-flex items-center py-4 text-black hover:text-primary '>
                      <span className='mr-[12px] flex h-[56px] w-[56px] items-center justify-center rounded-full border-2 border-current'>
                        <svg
                          width='14'
                          height='16'
                          viewBox='0 0 14 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M13.5 7.06367C14.1667 7.44857 14.1667 8.41082 13.5 8.79572L1.5 15.7239C0.833334 16.1088 -3.3649e-08 15.6277 0 14.8579L6.05683e-07 1.00149C6.39332e-07 0.231693 0.833334 -0.249434 1.5 0.135466L13.5 7.06367Z'
                            fill='currentColor'
                          />
                        </svg>
                      </span>
                      <span className='text-base font-medium'>
                        <span className='block text-sm'> Watch Demo </span>
                        See how it works
                      </span>
                    </a> */}
                  </div>
                </div>
              </div>

              <div className='w-full px-4 lg:w-5/12'>
                <div
                  className='wow fadeInUp relative z-10 mx-auto w-full max-w-[530px] pt-8 lg:mr-0'
                  data-wow-delay='.3s'>
                  <img
                    src='/images/home/hero/hero-light.png'
                    alt='hero image'
                    className='mx-auto max-w-full'
                  />
                  <div className='max-auto absolute top-0 left-0 right-0 -z-10 aspect-square w-full rounded-full bg-redpraha'>
                    <div className='absolute bottom-10 left-0'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='features' className='relative z-10 pt-[110px]'>
          <div className='container'>
            <div
              className='wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]'
              data-wow-delay='.2s'>
              <div
                className='wow fadeInUp relative mx-auto mb-10 w-full max-w-[530px]'
                data-wow-delay='.3s'>
                <img src='/logo-text-dark.png' alt='hero image' className='mx-auto max-w-full' />
              </div>
              <h2 className='mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight'>
                the marketplace empowering organizations to source and validate hard-to-get images
              </h2>
              <p className='text-base text-body'>
                Proof of Picture is a marketplace where news organizations can request photos of
                specific events, local photographers can upload and verify images - earning from
                each photo they submit.
              </p>
            </div>
          </div>

          <div className='container max-w-[1390px]'>
            <div className='rounded-2xl bg-white px-5 pt-14 pb-14 shadow-md md:pb-1 lg:pt-20 lg:pb-5 xl:px-10'>
              <div className='-mx-4 flex flex-wrap'>
                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.4s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <BriefcaseIcon width={48} height={48} />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      news orgs post requests for photos they need
                    </h3>
                    <p className='text-base text-body'>
                      instead of sending reporters to conflict zones, news orgs can make photo
                      requests, which are then searchable by locals in the target geography
                    </p>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.3s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <img
                        src='/logo.png'
                        alt='author'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      C2PA anti-AI image verification
                    </h3>
                    <p className='text-base text-body'>
                      C2PA is an image validation standard that helps us validate if an image was AI
                      generated or not, and if it came from a specific location
                    </p>
                  </div>
                </div>
                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.2s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <BanknotesIcon width={48} height={48} />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      secured escrow to pay out photographers
                    </h3>
                    <p className='text-base text-body'>
                      photographers can earn cryptocurrency - this means that even when banking
                      infra is down in conflice zones, people can still earn a living
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='absolute top-0 right-0 -z-10'>
            <svg
              width='602'
              height='1154'
              viewBox='0 0 602 1154'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g opacity='0.25' filter='url(#filter0_f_26_84)'>
                <circle cx='577' cy='577' r='317' fill='url(#paint0_linear_26_84)' />
              </g>
              <defs>
                <filter
                  id='filter0_f_26_84'
                  x='0'
                  y='0'
                  width='1154'
                  height='1154'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='130' result='effect1_foregroundBlur_26_84' />
                </filter>
                <linearGradient
                  id='paint0_linear_26_84'
                  x1='183.787'
                  y1='894'
                  x2='970.173'
                  y2='346.491'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#8EA5FE' />
                  <stop offset='0.541667' stopColor='#BEB3FD' />
                  <stop offset='1' stopColor='#90D1FF' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='absolute left-0 -bottom-1/2 -z-10 hidden md:block'>
            <svg
              width='622'
              height='1236'
              viewBox='0 0 622 1236'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g opacity='0.2' filter='url(#filter0_f_26_85)'>
                <circle cx='4' cy='618' r='368' fill='url(#paint0_linear_26_85)' />
              </g>
              <defs>
                <filter
                  id='filter0_f_26_85'
                  x='-614'
                  y='0'
                  width='1236'
                  height='1236'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='125' result='effect1_foregroundBlur_26_85' />
                </filter>
                <linearGradient
                  id='paint0_linear_26_85'
                  x1='-364'
                  y1='250'
                  x2='506.12'
                  y2='754.835'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#FF8FE8' />
                  <stop offset='1' stopColor='#FFC960' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        <section id='about' className='relative pt-[150px]'>
          <div className='container lg:max-w-[1120px]'>
            <div>
              <div className='-mx-4 flex flex-wrap items-center justify-between'>
                <div className='w-full px-4 lg:w-1/2'>
                  <div
                    className='wow fadeInUp relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mx-0 lg:mb-0'
                    data-wow-delay='.2s'>
                    <img
                      src='/about-1-light.png'
                      alt='about image'
                      className='mx-auto max-w-full'
                    />
                  </div>
                </div>

                <div className='w-full px-4 lg:w-1/2'>
                  <div className='wow fadeInUp lg:ml-auto lg:max-w-[510px]' data-wow-delay='.3s'>
                    <h2 className='mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight'>
                      powerful tools for authenticating the truth
                    </h2>
                    <div className='mb-[30px] flex items-center'>
                      <div className='shrink-0 mr-3 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black text-center '>
                        01
                      </div>
                      <div>
                        <h5 className='text-xl font-medium text-black '>
                          combating AI-based misinformation campaigns
                        </h5>
                        <p className='text-base text-body'>
                          it's now easier than ever to create images that evidence fake events or
                          inaccurate depictions of the truth. AI has caused us to question our
                          reality in a way that we didn't have to before - this has caused many
                          issues for news organizations. many major publications have been caught
                          accidentally posting images that were creted or doctored by AI. now, with
                          Proof of Picture, publications can guarantee that photos were not
                          doctored, regardless of their origin.
                        </p>
                      </div>
                    </div>

                    <div className='flex items-center'>
                      <div className='shrink-0 mr-3 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black  '>
                        02
                      </div>
                      <div>
                        <h5 className='text-xl font-medium text-black '>
                          empowering activist reporting
                        </h5>
                        <p className='text-base text-body'>
                          in the past, it was hard for publications to accept photographs taken by
                          reporters that the publication didn't have a prior relationship with. this
                          is because the authenticity of photos was difficult to proove. now,
                          publications can accept images from anyone thanks to C2PA technology and
                          Proof of Picture.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='absolute right-0 top-36 -z-10'>
            <svg
              width='95'
              height='190'
              viewBox='0 0 95 190'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <circle cx='95' cy='95' r='77' stroke='url(#paint0_linear_47_27)' strokeWidth='36' />
              <defs>
                <linearGradient
                  id='paint0_linear_47_27'
                  x1='0'
                  y1='0'
                  x2='224.623'
                  y2='130.324'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#FF8FE8' />
                  <stop offset='1' stopColor='#FFC960' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        <section id='work-process' className='relative z-10 pt-[110px]'>
          <div className='container'>
            <div
              className='wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]'
              data-wow-delay='.2s'>
              <h2 className='mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight'>
                combining innovative technologies for a global impact
              </h2>
            </div>
          </div>

          <div className='container max-w-[1390px]'>
            <div className='rounded-2xl bg-white px-5 pt-14 pb-14 shadow-md md:pb-1 lg:pt-20 lg:pb-5 xl:px-10'>
              <div className='-mx-4 flex flex-wrap justify-center'>
                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.2s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <img
                        src='/request-logo.png'
                        alt='author'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Request Network
                    </h3>
                    <p className='text-base text-body'>
                      an ecosystem for interoperable financial services products
                    </p>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.3s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <img
                        src='/logo.png'
                        alt='author'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      C2PA
                    </h3>
                    <p className='text-base text-body'>
                      a novel photograph verification standard developed by Sony, Adobe, and others
                    </p>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.4s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <img
                        src='/tl-logo.png'
                        alt='author'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      TalentLayer
                    </h3>
                    <p className='text-base text-body'>
                      an interoperable ecosystem of hiring platforms
                    </p>
                  </div>
                </div>
                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.4s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <img
                        src='/mantle-logo.webp'
                        alt='author'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Mantle
                    </h3>
                    <p className='text-base text-body'>
                      an ETHereum rollup with fast payments - perfect for news agencies that need
                      quick turn around on photos
                    </p>
                  </div>
                </div>
                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.4s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <img
                        src='/celo-logo.png'
                        alt='author'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Celo
                    </h3>
                    <p className='text-base text-body'>
                      a carbon neutral blockchain, perfect for publications and photographers that
                      want to preserve the environment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='absolute -top-28 left-0 -z-10 hidden md:block'>
            <svg
              width='632'
              height='1179'
              viewBox='0 0 632 1179'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g opacity='0.25' filter='url(#filter0_f_38_24)'>
                <circle cx='42.5' cy='589.5' r='329.5' fill='url(#paint0_linear_38_24)' />
              </g>
              <defs>
                <filter
                  id='filter0_f_38_24'
                  x='-547'
                  y='0'
                  width='1179'
                  height='1179'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='130' result='effect1_foregroundBlur_38_24' />
                </filter>
                <linearGradient
                  id='paint0_linear_38_24'
                  x1='-366.218'
                  y1='919'
                  x2='451.176'
                  y2='349.901'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#8EA5FE' />
                  <stop offset='0.541667' stopColor='#BEB3FD' />
                  <stop offset='1' stopColor='#90D1FF' />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className='absolute right-0 top-20 -z-10'>
            <svg
              width='637'
              height='1277'
              viewBox='0 0 637 1277'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g opacity='0.2' filter='url(#filter0_f_38_23)'>
                <circle cx='638.5' cy='638.5' r='388.5' fill='url(#paint0_linear_38_23)' />
              </g>
              <defs>
                <filter
                  id='filter0_f_38_23'
                  x='0'
                  y='0'
                  width='1277'
                  height='1277'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='125' result='effect1_foregroundBlur_38_23' />
                </filter>
                <linearGradient
                  id='paint0_linear_38_23'
                  x1='250'
                  y1='250'
                  x2='1168.59'
                  y2='782.957'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#FF8FE8' />
                  <stop offset='1' stopColor='#FFC960' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        <section id='testimonials' className='relative z-10 pt-[110px] pb-[60px]'>
          <div className='container'>
            <div
              className='wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]'
              data-wow-delay='.2s'>
              <h1 className='mb-6 text-5xl font-bold leading-tight text-black  sm:text-[50px] md:text-[70px] lg:text-[52px] xl:text-[60px]'>
                how do we know what's{' '}
                <span className='inline bg-redpraha bg-clip-text text-transparent'>authentic</span>
                and what's
                <span className='inline bg-redpraha bg-clip-text text-transparent mx-2'>fake</span>
                in the age of AI?
              </h1>
              <div
                className='wow fadeInUp relative mx-auto mb-5 w-full max-w-[530px]'
                data-wow-delay='.3s'>
                <img src='/pope.png' alt='hero image' className='mx-auto max-w-full' />
              </div>
              <h2 className='mb-4 text-3xl font-bold text-redpraha  sm:text-4xl md:text-[44px] md:leading-tight'>
                the mysterious case of the fake pope
              </h2>
              <p className='text-base text-body'>
                In August, 2023, Matt, an organizer of ETH Warsaw posted an AI-generated picture of
                the Pope on Twitter. It quickly became popular on Twitter and began getting
                re-posted by various Catholic facebook groups as authentic. Matt was later
                approached by the media to inquire into the authenticity of the photo. As AI
                technology matures, it will get harder and harder for media and individuals alike to
                determine what's fake and what's real.
              </p>
              <div
                className='wow fadeInUp mb-[50px] rounded-lg bg-white py-9 px-7 shadow-md sm:px-9 lg:px-7 xl:px-9'
                data-wow-delay='.2s'>
                <div className='mb-5 border-b border-stroke'>
                  <p className='pb-9 text-base text-body  sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-[20px]'>
                    "Yea, I just like posted the AI pope picture to social media, then a bunch of
                    facebook groups picked it up and it went viral. All those people thought it was
                    real."
                  </p>
                </div>

                <div className='items-center justify-between sm:flex lg:block xl:flex'>
                  <div className='mb-4 flex items-center sm:mb-0 lg:mb-4 xl:mb-0'>
                    <div className='mr-4 h-[56px] w-full max-w-[56px] rounded-full'>
                      <img
                        src='/matt.jpeg'
                        alt='author'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <div>
                      <h5 className='text-base font-medium text-black '>Matt</h5>
                      <p className='text-sm text-body'>Organizer, ETH Warsaw</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='faq' className='relative z-10 bg-[#F8FAFB] py-[110px] '>
          <div className='container'>
            <div
              className='wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]'
              data-wow-delay='.2s'>
              <div
                className='wow fadeInUp relative mx-auto mb-20 w-full max-w-[530px]'
                data-wow-delay='.3s'>
                <img src='/c2pa-logo.png' alt='hero image' className='mx-auto max-w-full' />
              </div>
              <h2 className='mb-4 mt-10 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight'>
                Proof of Photo is one of the first open-source implementations of C2PA photo
                authenticity technology
              </h2>
              <a
                target='_blank'
                href='https://c2pa.org/'
                className='mr-6 mt-10 mb-6 inline-flex h-[60px] items-center rounded-lg bg-redpraha py-[14px] px-[30px] text-white hover:bg-opacity-90'>
                Learn about C2PA
              </a>
            </div>
          </div>
        </section>

        <section id='support' className='pt-[100px] pb-[110px]'>
          <div className='container'>
            <div
              className='wow fadeInUp mx-auto mb-10 max-w-[690px] text-center'
              data-wow-delay='.2s'>
              <h2 className='mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight'>
                get started with Proof of Picture today
              </h2>
              <p className='text-base text-body mb-10'>
                view the code on Github or use the demo applicaiton now
              </p>
              <a
                target='_blank'
                href='https://github.com/orgs/Witness-Market/repositories'
                className='mr-6 mb-6 inline-flex h-[60px] items-center rounded-lg bg-black py-[14px] px-[30px] text-white hover:bg-opacity-90'>
                <span className='mr-[18px] border-r border-stroke border-opacity-40 pr-[18px] leading-relaxed '>
                  View on Github
                </span>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'>
                    <path
                      fill='#FFF'
                      d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
                    />
                  </svg>
                </span>
              </a>
              <a
                target='_blank'
                href='/dashboard'
                className='mr-6 mb-6 inline-flex h-[60px] items-center rounded-lg bg-redpraha py-[14px] px-[30px] text-white hover:bg-opacity-90'>
                Use the App
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className='wow fadeInUp bg-redpraha py-7' data-wow-delay='.2s'>
          <div className='container max-w-[1390px]'>
            <div className='-mx-3 flex flex-wrap'>
              <div className='order-last w-full px-3 lg:order-first lg:w-1/3'>
                <p className='mt-4 text-center text-base text-white lg:mt-0 lg:text-left'>
                  &copy; 2023 Proof of Picture
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
