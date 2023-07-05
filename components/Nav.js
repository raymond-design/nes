import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Head from "next/head";
import EaseInTransition from "../components/EaseInTransition.tsx";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav({navigation}) {
  return (
    <div>
        <Head>
            <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Spinnaker&display=swap"
            />
        </Head>
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto mb-1 max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open Menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start"> {/* Modified */}
                <div className="bg-transparent mt-0.5">
                  <EaseInTransition delay={0.35}>
                    <div className="max-w-screen-xl mx-auto lg:px-40 px-6">
                      <div className="flex justify-between items-center border-gray-100 py-2 md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                          <a href="#">
                            <span className="text-3xl md:text-4xl font-medium" style={{ fontFamily: "Spinnaker, sans-serif" }}>
                              nes<span className="text-blue-500">.</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </EaseInTransition>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <EaseInTransition delay={0.5}>
                    <div className="flex space-x-4 mt-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'underline text-gray-900 font-bold' : 'text-gray-700 hover:text-gray-500',
                            'rounded-md px-3 py-2 text-md font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                          style={{ fontFamily: "Spinnaker, sans-serif" }}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </EaseInTransition>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-blue-400 text-white' : 'text-gray-300 hover:text-gray-700',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  style={{ fontFamily: "Spinnaker, sans-serif" }}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  )
}
