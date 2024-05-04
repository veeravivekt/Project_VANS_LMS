// @flow
import * as React from 'react';

type Props = {};
export const ProfessorSelector = (props: Props) => {
  return (
    <div className='w-full'>
      <div
        className='relative'
        data-hs-combo-box='{
    "groupingType": "default",
    "preventSelection": true,
    "isOpenOnFocus": true,
    "groupingTitleTemplate": "<div class=\"block text-xs text-gray-500 m-3 mb-1 dark:text-neutral-500 dark:border-neutral-700\"></div>"
  }'
      >
        <div className='relative'>
          <div className='pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-3.5'>
            <svg
              className='size-4 flex-shrink-0 text-gray-900'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <circle cx='11' cy='11' r='8'></circle>
              <path d='m21 21-4.3-4.3'></path>
            </svg>
          </div>
          <input
            className='block w-full rounded-full border-gray-200 bg-white bg-opacity-40 py-3 pl-10 pr-4 text-lg backdrop-blur-3xl focus:border-blue-500 focus:ring-blue-500'
            type='text'
            placeholder='Search or type a command'
            value=''
            data-hs-combo-box-input=''
          />
        </div>

        <div
          className='absolute z-50 w-full rounded-xl bg-white shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-800'
          style={{ display: 'none' }}
          data-hs-combo-box-output=''
        >
          <div
            className='max-h-[500px] overflow-hidden overflow-y-auto p-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar]:w-2'
            data-hs-combo-box-output-items-wrapper=''
          >
            <div
              data-hs-combo-box-output-item='{"group": {"name": "people", "title": "Select a Professor"}}'
              tabIndex={3}
            >
              <a
                className='flex items-center gap-x-3 rounded-lg px-2.5 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'
                href='/'
              >
                <img
                  className='size-5 flex-shrink-0 rounded-full'
                  src='https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80'
                  alt='Image Description'
                />
                <span
                  className='text-sm text-gray-800 dark:text-neutral-200'
                  data-hs-combo-box-search-text='Kim Ya Sung'
                  data-hs-combo-box-value=''
                >
                  Kim Ya Sung
                </span>
                <span
                  className='ms-auto text-xs text-teal-600'
                  data-hs-combo-box-search-text='Online'
                  data-hs-combo-box-value=''
                >
                  Online
                </span>
              </a>
            </div>
            <div
              data-hs-combo-box-output-item='{"group": {"name": "people", "title": "People"}}'
              tabIndex={6}
            >
              <a
                className='flex items-center gap-x-3 rounded-lg px-2.5 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'
                href='/'
              >
                <img
                  className='size-5 flex-shrink-0 rounded-full'
                  src='https://images.unsplash.com/photo-1610186593977-82a3e3696e7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80'
                  alt='Image Description'
                />
                <span
                  className='text-sm text-gray-800 dark:text-neutral-200'
                  data-hs-combo-box-search-text='Chris Peti'
                  data-hs-combo-box-value=''
                >
                  Chris Peti
                </span>
                <span
                  className='ms-auto text-xs text-gray-400 dark:text-neutral-500'
                  data-hs-combo-box-search-text='Offline'
                  data-hs-combo-box-value=''
                >
                  Offline
                </span>
              </a>
            </div>
            <div
              data-hs-combo-box-output-item='{"group": {"name": "people", "title": "People"}}'
              tabIndex={7}
            >
              <a
                className='flex items-center gap-x-3 rounded-lg px-2.5 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'
                href='/'
              >
                <img
                  className='size-5 flex-shrink-0 rounded-full'
                  src='https://images.unsplash.com/photo-1568048689711-5e0325cea8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80'
                  alt='Image Description'
                />
                <span
                  className='text-sm text-gray-800 dark:text-neutral-200'
                  data-hs-combo-box-search-text='Martin Azara'
                  data-hs-combo-box-value=''
                >
                  Martin Azara
                </span>
                <span
                  className='ms-auto text-xs text-gray-400 dark:text-neutral-500'
                  data-hs-combo-box-search-text='Offline'
                  data-hs-combo-box-value=''
                >
                  Offline
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
