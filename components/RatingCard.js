import {useEffect} from "react";

function RatingCard() {
  useEffect(() => { 
  })  

  const changeHandler = (e) => {
    const slider = document.getElementById('slider').defaultValue = 0
    console.log(e.target.value)
    const react1 = document.querySelector('#react1')
    const react2 = document.querySelector('#react2')
    const react3 = document.querySelector('#react3')
    const react4 = document.querySelector('#react4')
    const react5 = document.querySelector('#react5')
    const react6 = document.querySelector('#react6')
    const react7 = document.querySelector('#react7')
    const react8 = document.querySelector('#react8')
    console.log(e.target.value)
    switch(parseInt(e.target.value)) {
      case 0:
        react1.style.display = 'block'
        react2.style.display = 'none'
        react7.style.display = 'block'
        react5.style.display = 'block'
        react3.style.display = 'block'
        react1.style.display = 'block'
        react8.style.display = 'none'
        react4.style.display = 'none'
        react6.style.display = 'none'
        break;
      case 1: 
        react1.style.display = 'none'
        react2.style.display = 'block'
        react3.style.display = 'block'
        react4.style.display = 'none'
        react5.style.display = 'block'
        react6.style.display = 'none'
        react7.style.display = 'block'
        react8.style.display = 'none'
        break;
      case 2:
        react3.style.display = 'none'
        react4.style.display = 'block'
        react5.style.display = 'block'
        react6.style.display = 'none'
        react1.style.display = 'none'
        react2.style.display = 'block'          
        react7.style.display = 'block'
        react8.style.display = 'none'
        break;
      case 3: 
        react5.style.display = 'none'
        react6.style.display = 'block'
        react7.style.display = 'block'
        react8.style.display = 'none'          
        react1.style.display = 'none'
        react2.style.display = 'block'
        react3.style.display = 'none'
        react4.style.display = 'block'
        break;
      case 4:
        react7.style.display = 'none'
        react5.style.display = 'none'
        react3.style.display = 'none'
        react1.style.display = 'none'
        react8.style.display = 'block'
        react2.style.display = 'block'
        react4.style.display = 'block'
        react6.style.display = 'block'
        break;
      default:
        break;
    }
  }
    
  return (
    <>
      <div>
        <div className="py-12 px-4">
          <div className=" mx-auto container lg:max-w-[356px] md:max-w-[720px] max-w-[343px] py-12 px-12 bg-white shadow rounded-md relative">
            <svg className="absolute right-3 top-3 cursor-pointer" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 5L15 15" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-base font-semibold leading-snug text-center text-gray-800">How Would You Rate This Extension?</p>
            <div className="slider mt-4 mb-4 mx-auto ">
              <input id="slider" onChange={changeHandler} className="w-full cursor-pointer accent-indigo-700 rounded-full " defaultValue={0} type="range" min={0} max={4} step={1} />
            </div>
            <div className="flex gap-4 md:justify-between">
              <svg width={40} height={41} viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1017_391)">
                  <path d="M20 40.002C31.0457 40.002 40 31.0476 40 20.002C40 8.95626 31.0457 0.00195312 20 0.00195312C8.9543 0.00195312 0 8.95626 0 20.002C0 31.0476 8.9543 40.002 20 40.002Z" fill="#FFE17D" />
                  <path d="M22.9032 37.0987C11.8575 37.0987 2.9032 28.1444 2.9032 17.0987C2.9032 12.3153 4.58453 7.92594 7.3857 4.48438C2.87992 8.15156 0 13.7395 0 20.0019C0 31.0476 8.9543 40.0019 20 40.0019C26.2624 40.0019 31.8504 37.1219 35.5177 32.6161C32.076 35.4173 27.6866 37.0987 22.9032 37.0987Z" fill="#FFD164" />
                  <path d="M10.3186 23.3886C10.0225 23.3886 9.73775 23.2251 9.59658 22.9425C9.39752 22.544 9.55877 22.0599 9.9576 21.8604L13.676 20.0012L9.95752 18.142C9.55869 17.9426 9.39744 17.4584 9.5965 17.0599C9.79494 16.6617 10.2801 16.4986 10.6783 16.6992L15.8396 19.2798C16.1131 19.4165 16.2857 19.6957 16.2857 20.0012C16.2857 20.3068 16.1131 20.5859 15.8396 20.7226L10.6783 23.3033C10.5631 23.3609 10.4395 23.3886 10.3186 23.3886Z" fill="#AA7346" />
                  <path d="M29.672 23.3891C29.5511 23.3891 29.4276 23.3617 29.3123 23.3037L24.1509 20.7231C23.8775 20.5864 23.7048 20.3072 23.7048 20.0017C23.7048 19.6961 23.8775 19.417 24.1509 19.2803L29.3123 16.6996C29.7105 16.5012 30.1949 16.6625 30.3941 17.0603C30.5931 17.4589 30.4319 17.943 30.033 18.1425L26.3146 20.0017L30.0331 21.8609C30.4319 22.0603 30.5932 22.5445 30.3941 22.943C30.253 23.2256 29.9682 23.3891 29.672 23.3891Z" fill="#AA7346" />
                  <path d="M9.03283 15.6473C8.72346 15.6473 8.42861 15.4687 8.29502 15.1682C8.11416 14.7611 8.29752 14.2846 8.70455 14.1037L14.511 11.5231C14.9193 11.3403 15.395 11.5259 15.5758 11.9323C15.7567 12.3393 15.5733 12.8159 15.1663 12.9967L9.35979 15.5774C9.25338 15.6249 9.14182 15.6473 9.03283 15.6473Z" fill="#AA7346" />
                  <path d="M30.9669 15.6473C30.8579 15.6473 30.7463 15.6249 30.6399 15.5774L24.8334 12.9967C24.4264 12.8159 24.2431 12.3393 24.4239 11.9323C24.604 11.5259 25.0791 11.3403 25.4887 11.5231L31.2951 14.1037C31.7022 14.2846 31.8855 14.7611 31.7047 15.1682C31.5711 15.4687 31.2762 15.6473 30.9669 15.6473Z" fill="#AA7346" />
                  <path d="M26.7095 30.1463C26.2886 30.1463 25.8885 29.9636 25.6126 29.6449L23.3552 27.0403L21.0971 29.6455C20.5465 30.2818 19.4546 30.2824 18.9027 29.6449L16.6452 27.0403L14.3872 29.6455C13.836 30.2821 12.7453 30.2821 12.1934 29.6449L11.0038 28.2726C10.7121 27.9362 10.7481 27.4267 11.0851 27.1351C11.4215 26.8428 11.9306 26.8796 12.2223 27.216L13.2902 28.4481L15.5482 25.8431C15.8242 25.5246 16.2242 25.3423 16.6451 25.3423C16.6457 25.3423 16.6457 25.3423 16.6463 25.3423C17.0672 25.3426 17.4667 25.5253 17.7426 25.8438L20.0002 28.4484L22.2582 25.8431C22.5335 25.5253 22.933 25.3426 23.3538 25.3423C23.3545 25.3423 23.3545 25.3423 23.3551 25.3423C23.776 25.3423 24.176 25.5247 24.452 25.8431L26.71 28.4481L27.7779 27.216C28.069 26.8796 28.5781 26.8424 28.9151 27.1351C29.2522 27.4268 29.2881 27.9362 28.9963 28.2726L27.8062 29.6455C27.531 29.9636 27.131 30.1463 26.7095 30.1463Z" fill="#AA7346" />
                </g>
                <defs>
                  <clipPath id="clip0_1017_391">
                    <rect width={40} height={40} fill="white" transform="translate(0 0.00195312)" />
                  </clipPath>
                </defs>
              </svg>  
              <svg className="hidden" width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1017_93)">
                  <path d="M20 40.001C31.0457 40.001 40 31.0467 40 20.001C40 8.95528 31.0457 0.000976562 20 0.000976562C8.9543 0.000976562 0 8.95528 0 20.001C0 31.0467 8.9543 40.001 20 40.001Z" fill="#E5E7EB" />
                  <path d="M22.9032 37.0977C11.8575 37.0977 2.9032 28.1434 2.9032 17.0977C2.9032 12.3143 4.58453 7.92496 7.3857 4.4834C2.87992 8.15059 0 13.7386 0 20.0009C0 31.0466 8.9543 40.0009 20 40.0009C26.2624 40.0009 31.8504 37.1209 35.5177 32.6151C32.076 35.4163 27.6866 37.0977 22.9032 37.0977Z" fill="#D1D5DB" />
                  <path d="M10.3186 23.3877C10.0225 23.3877 9.73775 23.2242 9.59658 22.9416C9.39752 22.5431 9.55877 22.0589 9.9576 21.8595L13.676 20.0002L9.95752 18.141C9.55869 17.9417 9.39744 17.4574 9.5965 17.0589C9.79494 16.6607 10.2801 16.4976 10.6783 16.6982L15.8396 19.2788C16.1131 19.4156 16.2857 19.6947 16.2857 20.0002C16.2857 20.3058 16.1131 20.5849 15.8396 20.7217L10.6783 23.3023C10.5631 23.3599 10.4395 23.3877 10.3186 23.3877Z" fill="#9CA3AF" />
                  <path d="M29.672 23.3881C29.5511 23.3881 29.4276 23.3607 29.3123 23.3027L24.1509 20.7221C23.8775 20.5854 23.7048 20.3062 23.7048 20.0007C23.7048 19.6951 23.8775 19.416 24.1509 19.2793L29.3123 16.6987C29.7105 16.5002 30.1949 16.6615 30.3941 17.0594C30.5931 17.4579 30.4319 17.942 30.033 18.1415L26.3146 20.0007L30.0331 21.8599C30.4319 22.0593 30.5932 22.5435 30.3941 22.942C30.253 23.2246 29.9682 23.3881 29.672 23.3881Z" fill="#9CA3AF" />
                  <path d="M9.03283 15.6463C8.72346 15.6463 8.42861 15.4677 8.29502 15.1672C8.11416 14.7601 8.29752 14.2836 8.70455 14.1027L14.511 11.5221C14.9193 11.3394 15.395 11.5249 15.5758 11.9313C15.7567 12.3383 15.5733 12.8149 15.1663 12.9958L9.35979 15.5764C9.25338 15.624 9.14182 15.6463 9.03283 15.6463Z" fill="#9CA3AF" />
                  <path d="M30.9669 15.6463C30.8579 15.6463 30.7463 15.624 30.6399 15.5764L24.8334 12.9958C24.4264 12.8149 24.2431 12.3383 24.4239 11.9313C24.604 11.5249 25.0791 11.3394 25.4887 11.5221L31.2951 14.1027C31.7022 14.2836 31.8855 14.7601 31.7047 15.1672C31.5711 15.4677 31.2762 15.6463 30.9669 15.6463Z" fill="#9CA3AF" />
                  <path d="M26.7095 30.1454C26.2886 30.1454 25.8885 29.9626 25.6126 29.6439L23.3552 27.0393L21.0971 29.6445C20.5465 30.2808 19.4546 30.2815 18.9027 29.6439L16.6452 27.0393L14.3872 29.6445C13.836 30.2812 12.7453 30.2812 12.1934 29.6439L11.0038 28.2716C10.7121 27.9352 10.7481 27.4258 11.0851 27.1341C11.4215 26.8418 11.9306 26.8787 12.2223 27.2151L13.2902 28.4471L15.5482 25.8422C15.8242 25.5237 16.2242 25.3413 16.6451 25.3413C16.6457 25.3413 16.6457 25.3413 16.6463 25.3413C17.0672 25.3416 17.4667 25.5244 17.7426 25.8428L20.0002 28.4474L22.2582 25.8422C22.5335 25.5243 22.933 25.3416 23.3538 25.3413C23.3545 25.3413 23.3545 25.3413 23.3551 25.3413C23.776 25.3413 24.176 25.5237 24.452 25.8422L26.71 28.4471L27.7779 27.2151C28.069 26.8787 28.5781 26.8415 28.9151 27.1341C29.2522 27.4258 29.2881 27.9352 28.9963 28.2716L27.8062 29.6445C27.531 29.9626 27.131 30.1454 26.7095 30.1454Z" fill="#9CA3AF" />
                </g>
                <defs>
                  <clipPath id="clip0_1017_93">
                    <rect width={40} height={40} fill="white" transform="translate(0 0.000976562)" />
                  </clipPath>
                </defs>
              </svg>
              <svg id="react1" width={40} height={41} viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                <g clipPath="url(#clip0_1017_460)">
                  <path d="M20 40.002C31.0457 40.002 40 31.0476 40 20.002C40 8.95626 31.0457 0.00195312 20 0.00195312C8.9543 0.00195312 0 8.95626 0 20.002C0 31.0476 8.9543 40.002 20 40.002Z" fill="#E5E7EB" />
                  <path d="M13.2257 20.0019C12.3349 20.0019 11.6128 19.2798 11.6128 18.389V17.0987C11.6128 16.2079 12.3349 15.4858 13.2257 15.4858C14.1165 15.4858 14.8386 16.2079 14.8386 17.0987V18.389C14.8386 19.2798 14.1165 20.0019 13.2257 20.0019Z" fill="#4B5563" />
                  <path d="M13.2257 15.4858C13.1152 15.4858 13.0074 15.4972 12.9031 15.5183V17.7439C12.9031 18.2783 13.3364 18.7116 13.8708 18.7116C14.4053 18.7116 14.8385 18.2783 14.8385 17.7439V17.0987C14.8385 16.2079 14.1165 15.4858 13.2257 15.4858Z" fill="#6B7280" />
                  <path d="M26.7743 20.0019C25.8835 20.0019 25.1614 19.2798 25.1614 18.389V17.0987C25.1614 16.2079 25.8835 15.4858 26.7743 15.4858C27.665 15.4858 28.3872 16.2079 28.3872 17.0987V18.389C28.3872 19.2798 27.665 20.0019 26.7743 20.0019Z" fill="#4B5563" />
                  <path d="M26.7742 15.4858C26.6638 15.4858 26.556 15.4972 26.4517 15.5183V17.7439C26.4517 18.2783 26.8849 18.7116 27.4194 18.7116C27.9538 18.7116 28.3871 18.2783 28.3871 17.7439V17.0987C28.3871 16.2079 27.665 15.4858 26.7742 15.4858Z" fill="#6B7280" />
                  <path d="M13.5459 29.8406C13.3506 29.8406 13.1546 29.77 12.9996 29.6276C12.672 29.3258 12.6506 28.8158 12.9524 28.4878C14.5892 26.7089 17.2234 25.647 19.9974 25.647C22.7728 25.647 25.4063 26.7092 27.0425 28.4881C27.3443 28.8158 27.3229 29.3261 26.9953 29.6276C26.6683 29.9294 26.1573 29.9089 25.8555 29.58C24.5192 28.1271 22.3292 27.2599 19.9974 27.2599C17.6662 27.2599 15.4762 28.1271 14.1392 29.5803C13.9807 29.7531 13.7632 29.8406 13.5459 29.8406Z" fill="#9CA3AF" />
                  <path d="M22.9032 37.0987C11.8575 37.0987 2.9032 28.1444 2.9032 17.0987C2.9032 12.3153 4.58453 7.92594 7.3857 4.48438C2.87992 8.15156 0 13.7395 0 20.0019C0 31.0476 8.9543 40.0019 20 40.0019C26.2624 40.0019 31.8504 37.1219 35.5177 32.6161C32.076 35.4173 27.6866 37.0987 22.9032 37.0987Z" fill="#D1D5DB" />
                </g>
                <defs>
                  <clipPath id="clip0_1017_460">
                    <rect width={40} height={40} fill="white" transform="translate(0 0.00195312)" />
                  </clipPath>
                </defs>
              </svg>
              <svg id="react2" className="hidden" width={41} height={40} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1017_212)">
                  <path d="M20.75 40.001C31.7957 40.001 40.75 31.0467 40.75 20.001C40.75 8.95528 31.7957 0.000976562 20.75 0.000976562C9.7043 0.000976562 0.75 8.95528 0.75 20.001C0.75 31.0467 9.7043 40.001 20.75 40.001Z" fill="#FFE17D" />
                  <path d="M13.9757 20.001C13.0849 20.001 12.3628 19.2788 12.3628 18.3881V17.0978C12.3628 16.207 13.0849 15.4849 13.9757 15.4849C14.8665 15.4849 15.5886 16.207 15.5886 17.0978V18.3881C15.5886 19.2788 14.8665 20.001 13.9757 20.001Z" fill="#7D5046" />
                  <path d="M13.9757 15.4849C13.8652 15.4849 13.7574 15.4962 13.6531 15.5174V17.7429C13.6531 18.2774 14.0864 18.7106 14.6208 18.7106C15.1553 18.7106 15.5885 18.2774 15.5885 17.7429V17.0978C15.5885 16.2069 14.8665 15.4849 13.9757 15.4849Z" fill="#9C6846" />
                  <path d="M27.5243 20.001C26.6335 20.001 25.9114 19.2788 25.9114 18.3881V17.0978C25.9114 16.207 26.6335 15.4849 27.5243 15.4849C28.415 15.4849 29.1372 16.207 29.1372 17.0978V18.3881C29.1372 19.2788 28.415 20.001 27.5243 20.001Z" fill="#7D5046" />
                  <path d="M27.5242 15.4849C27.4138 15.4849 27.306 15.4962 27.2017 15.5174V17.7429C27.2017 18.2774 27.6349 18.7106 28.1694 18.7106C28.7038 18.7106 29.1371 18.2774 29.1371 17.7429V17.0978C29.1371 16.2069 28.415 15.4849 27.5242 15.4849Z" fill="#9C6846" />
                  <path d="M14.2959 29.8396C14.1006 29.8396 13.9046 29.769 13.7496 29.6266C13.422 29.3248 13.4006 28.8148 13.7024 28.4869C15.3392 26.7079 17.9734 25.646 20.7474 25.646C23.5228 25.646 26.1563 26.7083 27.7925 28.4872C28.0943 28.8148 28.0729 29.3251 27.7453 29.6266C27.4183 29.9284 26.9073 29.9079 26.6055 29.579C25.2692 28.1261 23.0792 27.2589 20.7474 27.2589C18.4162 27.2589 16.2262 28.1261 14.8892 29.5793C14.7307 29.7521 14.5132 29.8396 14.2959 29.8396Z" fill="#AA7346" />
                  <path d="M23.6532 37.0977C12.6075 37.0977 3.6532 28.1434 3.6532 17.0977C3.6532 12.3143 5.33453 7.92496 8.1357 4.4834C3.62992 8.15059 0.75 13.7386 0.75 20.0009C0.75 31.0466 9.7043 40.0009 20.75 40.0009C27.0124 40.0009 32.6004 37.1209 36.2677 32.6151C32.826 35.4163 28.4366 37.0977 23.6532 37.0977Z" fill="#FFD164" />
                </g>
                <defs>
                  <clipPath id="clip0_1017_212">
                    <rect width={40} height={40} fill="white" transform="translate(0.75 0.000976562)" />
                  </clipPath>
                </defs>
              </svg>
              <svg id="react3" width={40} height={41} viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1017_468)">
                  <path d="M20 40.002C31.0457 40.002 40 31.0476 40 20.002C40 8.95626 31.0457 0.00195312 20 0.00195312C8.9543 0.00195312 0 8.95626 0 20.002C0 31.0476 8.9543 40.002 20 40.002Z" fill="#E5E7EB" />
                  <path d="M19.9999 29.841C17.2246 29.841 14.591 28.7788 12.9548 26.9999C12.653 26.6722 12.6744 26.1619 13.0021 25.8604C13.3297 25.5589 13.8407 25.58 14.1418 25.908C15.4781 27.361 17.6681 28.2282 19.9999 28.2282C22.3317 28.2282 24.5217 27.3609 25.858 25.908C26.1592 25.58 26.6701 25.5589 26.9978 25.8604C27.3254 26.1619 27.3468 26.6722 27.045 26.9999C25.4088 28.7789 22.7752 29.841 19.9999 29.841Z" fill="#9CA3AF" />
                  <path d="M13.2257 20.0019C12.3349 20.0019 11.6128 19.2798 11.6128 18.389V17.0987C11.6128 16.2079 12.3349 15.4858 13.2257 15.4858C14.1165 15.4858 14.8386 16.2079 14.8386 17.0987V18.389C14.8386 19.2798 14.1165 20.0019 13.2257 20.0019Z" fill="#4B5563" />
                  <path d="M13.2257 15.4858C13.1152 15.4858 13.0074 15.4972 12.9031 15.5183V17.7439C12.9031 18.2783 13.3364 18.7116 13.8708 18.7116C14.4053 18.7116 14.8385 18.2783 14.8385 17.7439V17.0987C14.8385 16.2079 14.1165 15.4858 13.2257 15.4858Z" fill="#6B7280" />
                  <path d="M26.7743 20.0019C25.8835 20.0019 25.1614 19.2798 25.1614 18.389V17.0987C25.1614 16.2079 25.8835 15.4858 26.7743 15.4858C27.665 15.4858 28.3872 16.2079 28.3872 17.0987V18.389C28.3872 19.2798 27.665 20.0019 26.7743 20.0019Z" fill="#4B5563" />
                  <path d="M26.7742 15.4858C26.6638 15.4858 26.556 15.4972 26.4517 15.5183V17.7439C26.4517 18.2783 26.8849 18.7116 27.4194 18.7116C27.9538 18.7116 28.3871 18.2783 28.3871 17.7439V17.0987C28.3871 16.2079 27.665 15.4858 26.7742 15.4858Z" fill="#6B7280" />
                  <path d="M22.9032 37.0987C11.8575 37.0987 2.9032 28.1444 2.9032 17.0987C2.9032 12.3153 4.58453 7.92594 7.3857 4.48438C2.87992 8.15156 0 13.7395 0 20.0019C0 31.0476 8.9543 40.0019 20 40.0019C26.2624 40.0019 31.8504 37.1219 35.5177 32.6161C32.076 35.4173 27.6866 37.0987 22.9032 37.0987Z" fill="#D1D5DB" />
                </g>
                <defs>
                  <clipPath id="clip0_1017_468">
                    <rect width={40} height={40} fill="white" transform="translate(0 0.00195312)" />
                  </clipPath>
                </defs>
              </svg>
              <svg id="react4" className="hidden" width={41} height={40} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1017_165)">
                  <path d="M20.5 40.001C31.5457 40.001 40.5 31.0467 40.5 20.001C40.5 8.95528 31.5457 0.000976562 20.5 0.000976562C9.4543 0.000976562 0.5 8.95528 0.5 20.001C0.5 31.0467 9.4543 40.001 20.5 40.001Z" fill="#FFE17D" />
                  <path d="M20.4999 29.8401C17.7246 29.8401 15.091 28.7778 13.4548 26.9989C13.153 26.6712 13.1744 26.1609 13.5021 25.8594C13.8297 25.558 14.3407 25.5791 14.6418 25.907C15.9781 27.36 18.1681 28.2272 20.4999 28.2272C22.8317 28.2272 25.0217 27.3599 26.358 25.907C26.6592 25.5791 27.1701 25.558 27.4978 25.8594C27.8254 26.1609 27.8468 26.6712 27.545 26.9989C25.9088 28.7779 23.2752 29.8401 20.4999 29.8401Z" fill="#AA7346" />
                  <path d="M13.7257 20.001C12.8349 20.001 12.1128 19.2788 12.1128 18.3881V17.0978C12.1128 16.207 12.8349 15.4849 13.7257 15.4849C14.6165 15.4849 15.3386 16.207 15.3386 17.0978V18.3881C15.3386 19.2788 14.6165 20.001 13.7257 20.001Z" fill="#7D5046" />
                  <path d="M13.7257 15.4849C13.6152 15.4849 13.5074 15.4962 13.4031 15.5174V17.7429C13.4031 18.2774 13.8364 18.7106 14.3708 18.7106C14.9053 18.7106 15.3385 18.2774 15.3385 17.7429V17.0978C15.3385 16.2069 14.6165 15.4849 13.7257 15.4849Z" fill="#9C6846" />
                  <path d="M27.2743 20.001C26.3835 20.001 25.6614 19.2788 25.6614 18.3881V17.0978C25.6614 16.207 26.3835 15.4849 27.2743 15.4849C28.165 15.4849 28.8872 16.207 28.8872 17.0978V18.3881C28.8872 19.2788 28.165 20.001 27.2743 20.001Z" fill="#7D5046" />
                  <path d="M27.2742 15.4849C27.1638 15.4849 27.056 15.4962 26.9517 15.5174V17.7429C26.9517 18.2774 27.3849 18.7106 27.9194 18.7106C28.4538 18.7106 28.8871 18.2774 28.8871 17.7429V17.0978C28.8871 16.2069 28.165 15.4849 27.2742 15.4849Z" fill="#9C6846" />
                  <path d="M23.4032 37.0977C12.3575 37.0977 3.4032 28.1434 3.4032 17.0977C3.4032 12.3143 5.08453 7.92496 7.8857 4.4834C3.37992 8.15059 0.5 13.7386 0.5 20.0009C0.5 31.0466 9.4543 40.0009 20.5 40.0009C26.7624 40.0009 32.3504 37.1209 36.0177 32.6151C32.576 35.4163 28.1866 37.0977 23.4032 37.0977Z" fill="#FFD164" />
                </g>
                <defs>
                  <clipPath id="clip0_1017_165">
                    <rect width={40} height={40} fill="white" transform="translate(0.5 0.000976562)" />
                  </clipPath>
                </defs>
              </svg>
              <svg id="react5" width={40} height={41} viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1017_476)">
                  <path d="M20 40.002C31.0457 40.002 40 31.0476 40 20.002C40 8.95626 31.0457 0.00195312 20 0.00195312C8.9543 0.00195312 0 8.95626 0 20.002C0 31.0476 8.9543 40.002 20 40.002Z" fill="#E5E7EB" />
                  <path d="M22.9032 37.0987C11.8575 37.0987 2.9032 28.1444 2.9032 17.0987C2.9032 12.3153 4.58453 7.92594 7.3857 4.48438C2.87992 8.15156 0 13.7395 0 20.0019C0 31.0476 8.9543 40.0019 20 40.0019C26.2624 40.0019 31.8504 37.1219 35.5177 32.6161C32.076 35.4173 27.6866 37.0987 22.9032 37.0987Z" fill="#D1D5DB" />
                  <path d="M19.9998 23.8538C16.1465 23.8538 12.4682 23.4064 9.09374 22.5977C8.65663 22.4929 8.27991 22.9495 8.41476 23.4255C9.97101 28.9195 14.5646 32.9052 19.9999 32.9052C25.4352 32.9052 30.0287 28.9195 31.5851 23.4255C31.7199 22.9495 31.3432 22.4929 30.9061 22.5977C27.5315 23.4064 23.8532 23.8538 19.9998 23.8538Z" fill="#6B7280" />
                  <path d="M30.906 22.5977C27.5315 23.4064 23.8533 23.8538 19.9998 23.8538C16.1464 23.8538 12.4682 23.4065 9.09374 22.5977C8.65663 22.4929 8.27991 22.9495 8.41476 23.4255C8.8221 24.8636 9.44194 26.1945 10.2262 27.3815C13.4324 27.9906 16.6943 28.3256 20.0012 28.3256C23.3071 28.3256 26.5677 27.9908 29.773 27.3822C30.5575 26.195 31.1776 24.864 31.585 23.4255C31.7198 22.9495 31.3431 22.4929 30.906 22.5977Z" fill="#4B5563" />
                  <path d="M13.2257 18.0987C12.3349 18.0987 11.6128 17.3766 11.6128 16.4859V13.8727C11.6128 12.9819 12.3349 12.2598 13.2257 12.2598C14.1165 12.2598 14.8386 12.9819 14.8386 13.8727V16.4859C14.8386 17.3766 14.1165 18.0987 13.2257 18.0987Z" fill="#4B5563" />
                  <path d="M13.2257 12.2598C13.1152 12.2598 13.0074 12.2711 12.9031 12.2923V15.8406C12.9031 16.3751 13.3364 16.8084 13.8708 16.8084C14.4053 16.8084 14.8385 16.3751 14.8385 15.8406V13.8726C14.8385 12.9819 14.1165 12.2598 13.2257 12.2598Z" fill="#6B7280" />
                  <path d="M26.7743 18.0987C25.8835 18.0987 25.1614 17.3766 25.1614 16.4859V13.8727C25.1614 12.9819 25.8835 12.2598 26.7743 12.2598C27.665 12.2598 28.3872 12.9819 28.3872 13.8727V16.4859C28.3872 17.3766 27.665 18.0987 26.7743 18.0987Z" fill="#4B5563" />
                  <path d="M26.7742 12.2598C26.6638 12.2598 26.556 12.2711 26.4517 12.2923V15.8406C26.4517 16.3751 26.8849 16.8084 27.4194 16.8084C27.9538 16.8084 28.3871 16.3751 28.3871 15.8406V13.8726C28.3871 12.9819 27.665 12.2598 26.7742 12.2598Z" fill="#6B7280" />
                  <path d="M28.676 24.8011C29.0247 24.2035 29.3165 23.5632 29.5612 22.8966C26.5624 23.5154 23.3478 23.8539 20.0003 23.8539C16.6509 23.8539 13.4344 23.5151 10.4341 22.8955C10.68 23.5653 10.9766 24.2068 11.3277 24.8068C11.7335 25.5006 12.4206 25.9443 13.1681 26.0353C15.4063 26.3075 17.6874 26.4536 20.0003 26.4536C22.3128 26.4536 24.5933 26.3076 26.831 26.0354C27.581 25.9443 28.2695 25.4976 28.676 24.8011Z" fill="#F9FAFB" />
                </g>
                <defs>
                  <clipPath id="clip0_1017_476">
                    <rect width={40} height={40} fill="white" transform="translate(0 0.00195312)" />
                  </clipPath>
                </defs>
              </svg>
              <svg id="react6" className="hidden" width={41} height={40} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1017_118)">
                  <path d="M20.25 40.001C31.2957 40.001 40.25 31.0467 40.25 20.001C40.25 8.95528 31.2957 0.000976562 20.25 0.000976562C9.2043 0.000976562 0.25 8.95528 0.25 20.001C0.25 31.0467 9.2043 40.001 20.25 40.001Z" fill="#FFE17D" />
                  <path d="M23.1532 37.0977C12.1075 37.0977 3.1532 28.1434 3.1532 17.0977C3.1532 12.3143 4.83453 7.92496 7.6357 4.4834C3.12992 8.15059 0.25 13.7386 0.25 20.0009C0.25 31.0466 9.2043 40.0009 20.25 40.0009C26.5124 40.0009 32.1004 37.1209 35.7677 32.6151C32.326 35.4163 27.9366 37.0977 23.1532 37.0977Z" fill="#FFD164" />
                  <path d="M20.2498 23.8529C16.3965 23.8529 12.7182 23.4054 9.34374 22.5967C8.90663 22.4919 8.52991 22.9486 8.66476 23.4245C10.221 28.9186 14.8146 32.9042 20.2499 32.9042C25.6852 32.9042 30.2787 28.9186 31.8351 23.4245C31.9699 22.9486 31.5932 22.4919 31.1561 22.5967C27.7815 23.4054 24.1032 23.8529 20.2498 23.8529Z" fill="#9C6846" />
                  <path d="M31.156 22.5967C27.7815 23.4054 24.1033 23.8529 20.2498 23.8529C16.3964 23.8529 12.7182 23.4055 9.34374 22.5967C8.90663 22.4919 8.52991 22.9486 8.66476 23.4245C9.0721 24.8626 9.69194 26.1935 10.4762 27.3805C13.6824 27.9896 16.9443 28.3247 20.2512 28.3247C23.5571 28.3247 26.8177 27.9898 30.023 27.3812C30.8075 26.194 31.4276 24.863 31.835 23.4246C31.9698 22.9485 31.5931 22.4919 31.156 22.5967Z" fill="#7D5046" />
                  <path d="M13.4757 18.0978C12.5849 18.0978 11.8628 17.3757 11.8628 16.4849V13.8717C11.8628 12.9809 12.5849 12.2588 13.4757 12.2588C14.3665 12.2588 15.0886 12.9809 15.0886 13.8717V16.4849C15.0886 17.3757 14.3665 18.0978 13.4757 18.0978Z" fill="#7D5046" />
                  <path d="M13.4757 12.2588C13.3652 12.2588 13.2574 12.2701 13.1531 12.2913V15.8397C13.1531 16.3741 13.5864 16.8074 14.1208 16.8074C14.6553 16.8074 15.0885 16.3741 15.0885 15.8397V13.8716C15.0885 12.9809 14.3665 12.2588 13.4757 12.2588Z" fill="#9C6846" />
                  <path d="M27.0243 18.0978C26.1335 18.0978 25.4114 17.3757 25.4114 16.4849V13.8717C25.4114 12.9809 26.1335 12.2588 27.0243 12.2588C27.915 12.2588 28.6372 12.9809 28.6372 13.8717V16.4849C28.6372 17.3757 27.915 18.0978 27.0243 18.0978Z" fill="#7D5046" />
                  <path d="M27.0242 12.2588C26.9138 12.2588 26.806 12.2701 26.7017 12.2913V15.8397C26.7017 16.3741 27.1349 16.8074 27.6694 16.8074C28.2038 16.8074 28.6371 16.3741 28.6371 15.8397V13.8716C28.6371 12.9809 27.915 12.2588 27.0242 12.2588Z" fill="#9C6846" />
                  <path d="M28.926 24.8001C29.2747 24.2025 29.5665 23.5622 29.8112 22.8956C26.8124 23.5145 23.5978 23.8529 20.2503 23.8529C16.9009 23.8529 13.6844 23.5141 10.6841 22.8945C10.93 23.5643 11.2266 24.2058 11.5777 24.8059C11.9835 25.4996 12.6706 25.9434 13.4181 26.0343C15.6563 26.3066 17.9374 26.4526 20.2503 26.4526C22.5628 26.4526 24.8433 26.3066 27.081 26.0345C27.831 25.9433 28.5195 25.4966 28.926 24.8001Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1017_118">
                    <rect width={40} height={40} fill="white" transform="translate(0.25 0.000976562)" />
                  </clipPath>
                </defs>
              </svg>
              <svg id="react7" width={40} height={41} viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1017_427)">
                  <path d="M20 40.002C31.0457 40.002 40 31.0476 40 20.002C40 8.95626 31.0457 0.00195312 20 0.00195312C8.9543 0.00195312 0 8.95626 0 20.002C0 31.0476 8.9543 40.002 20 40.002Z" fill="#E5E7EB" />
                  <path d="M22.9032 37.0987C11.8575 37.0987 2.9032 28.1444 2.9032 17.0987C2.9032 12.3153 4.58453 7.92594 7.3857 4.48438C2.87992 8.15156 0 13.7395 0 20.0019C0 31.0476 8.9543 40.0019 20 40.0019C26.2624 40.0019 31.8504 37.1219 35.5177 32.6161C32.076 35.4173 27.6866 37.0987 22.9032 37.0987Z" fill="#D1D5DB" />
                  <path d="M19.9954 24.9858C16.3545 24.9858 12.8792 24.5942 9.69075 23.8863C9.27778 23.7946 8.92184 24.1943 9.04919 24.6108C10.5196 29.4193 14.8598 32.9075 19.9953 32.9075C25.1307 32.9075 29.471 29.4193 30.9414 24.6108C31.0687 24.1942 30.7129 23.7946 30.2998 23.8863C27.1115 24.5942 23.6362 24.9858 19.9954 24.9858Z" fill="#6B7280" />
                  <path d="M20.0015 27.744C23.3795 27.744 26.7117 27.4244 29.9906 26.8522C30.3761 26.1453 30.7007 25.3981 30.9414 24.6108C31.0689 24.1943 30.7129 23.7946 30.2999 23.8863C27.1115 24.5941 23.6362 24.9857 19.9954 24.9857C16.3545 24.9857 12.8791 24.5942 9.69075 23.8863C9.27778 23.7946 8.92184 24.1943 9.04919 24.6108C9.28966 25.3972 9.61395 26.1437 9.99887 26.85C13.2821 27.4237 16.6188 27.744 20.0015 27.744Z" fill="#9CA3AF" />
                  <path d="M14.1167 19.3385C15.2133 17.9597 17.8097 14.2582 16.3289 11.742C15.7565 10.7693 14.6301 10.2143 13.5088 10.3425C12.5981 10.4465 11.8674 10.925 11.4089 11.5832C11.221 11.8531 10.8805 11.9646 10.5694 11.8582C9.81035 11.5989 8.93816 11.6454 8.14238 12.1004C7.16253 12.6605 6.58285 13.7743 6.69683 14.8972C6.99168 17.8018 11.275 19.2499 12.9748 19.7126C13.3953 19.827 13.8453 19.6796 14.1167 19.3385Z" fill="#9CA3AF" />
                  <path d="M25.8835 19.3385C24.7869 17.9597 22.1905 14.2582 23.6713 11.742C24.2437 10.7693 25.3701 10.2143 26.4914 10.3425C27.4021 10.4465 28.1328 10.925 28.5912 11.5832C28.7792 11.8531 29.1197 11.9646 29.4308 11.8582C30.1898 11.5989 31.062 11.6454 31.8578 12.1004C32.8377 12.6605 33.4173 13.7743 33.3034 14.8972C33.0085 17.8018 28.7252 19.2499 27.0254 19.7126C26.6048 19.827 26.1548 19.6796 25.8835 19.3385Z" fill="#9CA3AF" />
                  <path d="M14.6793 18.0279C12.9794 17.5652 8.69613 16.1171 8.40128 13.2124C8.35527 12.7592 8.42699 12.3095 8.58769 11.895C8.43761 11.9517 8.28847 12.0168 8.14238 12.1004C7.16253 12.6605 6.58285 13.7744 6.69683 14.8972C6.99168 17.8018 11.275 19.2499 12.9748 19.7127C13.3953 19.8271 13.8453 19.6798 14.1167 19.3386C14.3689 19.0216 14.701 18.5777 15.0441 18.0575C14.9231 18.0663 14.8004 18.0609 14.6793 18.0279Z" fill="#6B7280" />
                  <path d="M25.8835 19.3385C24.7869 17.9597 22.1905 14.2582 23.6713 11.742C24.2437 10.7693 25.3701 10.2143 26.4914 10.3425C27.4021 10.4465 28.1328 10.925 28.5912 11.5832C28.7792 11.8531 29.1197 11.9646 29.4308 11.8582C30.1898 11.5989 31.062 11.6454 31.8578 12.1004C32.8377 12.6605 33.4173 13.7743 33.3034 14.8972C33.0085 17.8018 28.7252 19.2499 27.0254 19.7126C26.6048 19.827 26.1548 19.6796 25.8835 19.3385Z" fill="#9CA3AF" />
                  <path d="M28.0498 18.9441C26.9532 17.5654 24.3568 13.8637 25.8376 11.3476C26.0665 10.9586 26.3864 10.6404 26.7568 10.402C26.6673 10.3837 26.5845 10.3531 26.4912 10.3425C25.3698 10.2143 24.2434 10.7693 23.671 11.742C22.1902 14.2582 24.7866 17.9598 25.8833 19.3385C26.1546 19.6796 26.6046 19.827 27.0251 19.7125C27.4012 19.6102 27.907 19.4564 28.4648 19.2525C28.3074 19.1825 28.1614 19.0844 28.0498 18.9441Z" fill="#6B7280" />
                </g>
                <defs>
                  <clipPath id="clip0_1017_427">
                    <rect width={40} height={40} fill="white" transform="translate(0 0.00195312)" />
                  </clipPath>
                </defs>
              </svg>
              <svg id="react8" className="hidden" width={40} height={41} viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1017_487)">
                  <path d="M20 40.002C31.0457 40.002 40 31.0476 40 20.002C40 8.95626 31.0457 0.00195312 20 0.00195312C8.9543 0.00195312 0 8.95626 0 20.002C0 31.0476 8.9543 40.002 20 40.002Z" fill="#FFE17D" />
                  <path d="M22.9032 37.0987C11.8575 37.0987 2.9032 28.1444 2.9032 17.0987C2.9032 12.3153 4.58453 7.92594 7.3857 4.48438C2.87992 8.15156 0 13.7395 0 20.0019C0 31.0476 8.9543 40.0019 20 40.0019C26.2624 40.0019 31.8504 37.1219 35.5177 32.6161C32.076 35.4173 27.6866 37.0987 22.9032 37.0987Z" fill="#FFD164" />
                  <path d="M19.9954 24.9858C16.3545 24.9858 12.8792 24.5942 9.69075 23.8863C9.27778 23.7946 8.92184 24.1943 9.04919 24.6108C10.5196 29.4193 14.8598 32.9075 19.9953 32.9075C25.1307 32.9075 29.471 29.4193 30.9414 24.6108C31.0687 24.1942 30.7129 23.7946 30.2998 23.8863C27.1115 24.5942 23.6362 24.9858 19.9954 24.9858Z" fill="#9C6846" />
                  <path d="M20.0015 27.744C23.3795 27.744 26.7117 27.4244 29.9906 26.8522C30.3761 26.1453 30.7007 25.3981 30.9414 24.6108C31.0689 24.1943 30.7129 23.7946 30.2999 23.8863C27.1115 24.5941 23.6362 24.9857 19.9954 24.9857C16.3545 24.9857 12.8791 24.5942 9.69075 23.8863C9.27778 23.7946 8.92184 24.1943 9.04919 24.6108C9.28966 25.3972 9.61395 26.1437 9.99887 26.85C13.2821 27.4237 16.6188 27.744 20.0015 27.744Z" fill="#7D5046" />
                  <path d="M14.1167 19.3385C15.2133 17.9597 17.8097 14.2582 16.3289 11.742C15.7565 10.7693 14.6301 10.2143 13.5088 10.3425C12.5981 10.4465 11.8674 10.925 11.4089 11.5832C11.221 11.8531 10.8805 11.9646 10.5694 11.8582C9.81035 11.5989 8.93816 11.6454 8.14238 12.1004C7.16253 12.6605 6.58285 13.7743 6.69683 14.8972C6.99168 17.8018 11.275 19.2499 12.9748 19.7126C13.3953 19.827 13.8453 19.6796 14.1167 19.3385Z" fill="#E6646E" />
                  <path d="M25.8835 19.3385C24.7869 17.9597 22.1905 14.2582 23.6713 11.742C24.2437 10.7693 25.3701 10.2143 26.4914 10.3425C27.4021 10.4465 28.1328 10.925 28.5912 11.5832C28.7792 11.8531 29.1197 11.9646 29.4308 11.8582C30.1898 11.5989 31.062 11.6454 31.8578 12.1004C32.8377 12.6605 33.4173 13.7743 33.3034 14.8972C33.0085 17.8018 28.7252 19.2499 27.0254 19.7126C26.6048 19.827 26.1548 19.6796 25.8835 19.3385Z" fill="#E6646E" />
                  <path d="M14.6793 18.0279C12.9794 17.5652 8.69613 16.1171 8.40128 13.2124C8.35527 12.7592 8.42699 12.3095 8.58769 11.895C8.43761 11.9517 8.28847 12.0168 8.14238 12.1004C7.16253 12.6605 6.58285 13.7744 6.69683 14.8972C6.99168 17.8018 11.275 19.2499 12.9748 19.7127C13.3953 19.8271 13.8453 19.6798 14.1167 19.3386C14.3689 19.0216 14.701 18.5777 15.0441 18.0575C14.9231 18.0663 14.8004 18.0609 14.6793 18.0279Z" fill="#DC4655" />
                  <path d="M25.8835 19.3385C24.7869 17.9597 22.1905 14.2582 23.6713 11.742C24.2437 10.7693 25.3701 10.2143 26.4914 10.3425C27.4021 10.4465 28.1328 10.925 28.5912 11.5832C28.7792 11.8531 29.1197 11.9646 29.4308 11.8582C30.1898 11.5989 31.062 11.6454 31.8578 12.1004C32.8377 12.6605 33.4173 13.7743 33.3034 14.8972C33.0085 17.8018 28.7252 19.2499 27.0254 19.7126C26.6048 19.827 26.1548 19.6796 25.8835 19.3385Z" fill="#E6646E" />
                  <path d="M28.0498 18.9441C26.9532 17.5654 24.3568 13.8637 25.8376 11.3476C26.0665 10.9586 26.3864 10.6404 26.7568 10.402C26.6673 10.3837 26.5845 10.3531 26.4912 10.3425C25.3698 10.2143 24.2434 10.7693 23.671 11.742C22.1902 14.2582 24.7866 17.9598 25.8833 19.3385C26.1546 19.6796 26.6046 19.827 27.0251 19.7125C27.4012 19.6102 27.907 19.4564 28.4648 19.2525C28.3074 19.1825 28.1614 19.0844 28.0498 18.9441Z" fill="#DC4655" />
                </g>
                <defs>
                  <clipPath id="clip0_1017_487">
                    <rect width={40} height={40} fill="white" transform="translate(0 0.00195312)" />
                  </clipPath>
                </defs>
              </svg> 
            </div>
          </div>
        </div>
        <style>
          {
            `
            body{
              background: rgb(229 231 235);
            }
            `
          }
        </style>
      </div>
    </>
  );
}

export default RatingCard;