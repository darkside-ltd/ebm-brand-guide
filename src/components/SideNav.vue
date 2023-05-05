
<script setup>
// import { getCollection } from 'astro:content';
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  CalendarDaysIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

    // const allPosts = await getCollection("data");
    // const navigation = allPosts.map((post, i) => {

    // const title = post.data.title
    // let href = post.data.title.toLowerCase()
    // if(href === "intro") href=""
    // href = "/" + href
    // // console.log({href})
    // return {
    //   name: title,
    //   href: href,
    //   icon: null,
    //   current: false
    // }

    // });

const navigation = [
  { name: '✅ Home', href: '/', icon: null, current: false },
  { name: 'Strategy', href: '/strategy', icon: null, current: false },
  { name: '✅ Accessibility', href: '/accessibility', icon: null, current: false },
  { name: '✅ Typography', href: '/typography', icon: null, current: false },
  { name: '✅ Logo', href: '/logo', icon: null, current: false },
  { name: '✅ Colour', href: '/colour', icon: null, current: false },
  { name: '✅ Imagery', href: '/imagery', icon: null, current: false },
  { name: '✅ Graphics', href: '/graphics', icon: null, current: false },
  { name: 'Social', href: '/social', icon: null, current: false },
  { name: '✅ Application', href: '/application', icon: null, current: false },
]


import logoAsset from '../assets/logo/Primary.svg';
import logoHorizontal from '../assets/logo/horizontal-logo.svg';

const logo = { src: logoAsset.src, alt: 'Every Body Moves' }

const sidebarOpen = ref(false)

</script>

<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-4 px-6 pb-4">
                <div class="flex flex-col py-16 shrink-0 items-start justify-center">
                 <!-- <a href="/"><img class="h-24 w-auto" :src="logo.src" alt="Every Body Moves" /></a> -->
                </div>
                
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <a :href="item.href" :class="[item.current ? 'bg-indigo-700 text-white' : 'text-indigo-200 hover:text-white hover:bg-indigo-700', 'group flex gap-x-3 rounded-md p-2 leading-6 font-regular text-lg']">
                            <component :is="item.icon" :class="[item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="mt-auto">
                      <a href="/information" class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white">
                        Contact and Support
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col desktop-nav">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-4 px-6 pb-4">
        <div class="flex flex-col py-6 shrink-0 items-start justify-center">
          <a href="/"><img class="h-24 w-auto" :src="logo.src" alt="Every Body Moves" /></a>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <a :href="item.href" :class="[item.current ? 'bg-indigo-700 text-white' : 'text-indigo-200 hover:text-white hover:bg-indigo-700', 'group flex gap-x-3 rounded-md p-2 leading-6 font-regular text-lg']">
                    <component :is="item.icon" :class="[item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <a href="/information" class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white">
                Contact and Support
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div class="lg:hidden sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-4 px-4 sm:gap-x-6 sm:px-6 lg:px-8">

        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6 text-white" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-white/10 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <!-- <form class="relative flex flex-1" action="#" method="GET">
            <label for="search-field" class="sr-only">Search</label>
            <MagnifyingGlassIcon class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400" aria-hidden="true" />
            <input id="search-field" class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." type="search" name="search" />
          </form> -->
          <div class="flex items-center gap-x-4 lg:gap-x-6">

            <div class="flex">
          <a href="/"><img class="h-8 w-auto" :src="logoHorizontal.src" alt="Every Body Moves" /></a>
        </div>

            <!-- <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button> -->

            <!-- Separator -->
            <!-- <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" /> -->

            <!-- Profile dropdown -->
            <!-- <Menu as="div" class="relative">
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <span class="hidden lg:flex lg:items-center">
                  <span class="ml-4 text-sm font-regular leading-6 text-gray-900" aria-hidden="true">Tom Cook</span>
                  <ChevronDownIcon class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </MenuButton>
            </Menu> -->
          </div>
        </div>
      </div>

      <main class="">
          <slot></slot>
      </main>
    </div>
  </div>
</template>

<style scoped>
main{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.desktop-nav{
  border-right: 2px solid var(--purple--900--xiketic);
}
</style>