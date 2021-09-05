import DropdownMenu from '@/components/DropdownMenu';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation({ offsetY }) {
  const router = useRouter();
  const path = router.pathname.split('/');

  return (
    <nav
      className='fixed inset-0 z-20 flex self-end justify-between w-full text-black fixedNavbar'
      style={{
        backgroundColor: `${
          offsetY !== undefined && offsetY === 0 ? 'transparent' : 'white'
        }`,
        transition: 'background-color 0.5s',
      }}
    >
      <Link href='/'>
        <a className='flex items-center h-full px-4 md:px-5 2xl:px-7'>
          <svg
            className='svgWidth'
            viewBox='0 0 2048.000000 280.000000'
            preserveAspectRatio='xMidYMid meet'
          >
            <g
              transform='translate(0.000000,280.000000) scale(0.100000,-0.100000)'
              fill='#000000'
              stroke='none'
            >
              <path
                d='M19865 2781 c-156 -45 -250 -134 -307 -287 -31 -85 -31 -283 0 -368
32 -87 65 -138 121 -189 84 -75 199 -117 323 -117 287 0 478 195 478 490 0
245 -132 423 -351 475 -84 19 -189 18 -264 -4z m293 -81 c147 -52 239 -184
249 -360 12 -189 -72 -344 -219 -410 -160 -70 -353 -40 -470 75 -152 151 -155
439 -7 600 102 111 289 150 447 95z'
              />
              <path
                d='M19960 2611 c-145 -20 -230 -151 -218 -336 9 -126 71 -224 164 -256
22 -7 71 -13 109 -13 117 1 205 59 234 153 20 68 18 71 -49 71 l-59 0 -20 -44
c-25 -57 -66 -80 -130 -73 -85 9 -127 90 -119 223 4 51 11 82 27 108 58 93
179 87 222 -10 l20 -44 61 0 60 0 -7 37 c-17 91 -89 165 -174 178 -69 11 -76
12 -121 6z'
              />
              <path
                d='M14445 2665 c-49 -8 -127 -26 -173 -40 -426 -132 -701 -450 -804
-931 -21 -97 -23 -135 -23 -354 0 -266 13 -362 72 -537 80 -238 225 -444 412
-582 111 -83 286 -160 448 -197 110 -25 414 -30 547 -9 192 30 378 105 521
212 235 175 389 432 456 762 26 126 36 430 20 567 -41 332 -159 595 -355 790
-157 156 -347 256 -586 309 -106 23 -416 29 -535 10z m450 -390 c33 -8 103
-36 155 -62 153 -75 278 -214 348 -385 96 -239 115 -562 47 -833 -75 -302
-273 -517 -540 -590 -92 -25 -293 -31 -388 -11 -330 68 -543 307 -614 690 -23
126 -23 390 0 511 42 216 112 359 237 486 119 120 240 183 405 209 81 12 276
4 350 -15z'
              />
              <path
                d='M0 1340 l0 -1280 185 0 185 0 0 1065 0 1065 460 0 460 0 0 -525 0
-525 183 2 182 3 3 523 2 522 460 0 460 0 0 -1065 0 -1065 185 0 185 0 0 1280
0 1280 -1475 0 -1475 0 0 -1280z'
              />
              <path
                d='M3480 1340 l0 -1280 915 0 915 0 0 185 0 185 -700 0 -700 0 0 375 0
375 640 0 640 0 0 185 0 185 -640 0 -640 0 0 350 0 350 680 0 680 0 0 185 0
185 -895 0 -895 0 0 -1280z'
              />
              <path
                d='M5620 2430 l0 -190 450 0 450 0 2 -1087 3 -1088 213 -3 212 -2 0
1090 0 1090 452 2 452 3 -1 185 0 185 -1117 3 -1116 2 0 -190z'
              />
              <path
                d='M8661 2598 c-10 -26 -81 -206 -218 -553 -293 -745 -321 -816 -630
-1605 -75 -190 -138 -353 -141 -363 -4 -16 10 -17 223 -15 l227 3 127 337 126
338 580 0 580 0 126 -338 126 -337 227 -3 c124 -1 226 2 226 6 0 5 -22 65 -50
134 -63 160 -167 425 -335 853 -74 187 -206 525 -295 750 -153 389 -229 582
-290 740 l-27 70 -287 3 -286 2 -9 -22z m353 -451 c31 -86 98 -271 150 -410
200 -535 226 -607 226 -617 0 -7 -150 -10 -440 -10 l-439 0 25 68 c76 198 233
627 308 838 104 292 106 298 110 293 2 -2 29 -75 60 -162z'
              />
              <path
                d='M10640 1340 l0 -1280 206 0 206 0 -4 1080 c-2 887 -1 1077 10 1063 7
-10 49 -88 94 -173 93 -178 325 -605 503 -925 67 -121 186 -337 265 -480 79
-143 181 -329 227 -412 l85 -153 314 0 314 0 0 1280 0 1280 -207 -2 c-158 -2
-207 -6 -206 -15 2 -9 5 -1986 3 -2148 0 -5 -70 123 -156 285 -186 351 -319
596 -801 1470 -41 74 -109 197 -150 273 l-75 137 -314 0 -314 0 0 -1280z'
              />
              <path
                d='M16510 1340 l0 -1280 210 0 210 0 0 1280 0 1280 -210 0 -210 0 0
-1280z'
              />
              <path
                d='M18321 2598 c-5 -13 -117 -297 -249 -633 -132 -335 -260 -662 -285
-725 -236 -598 -457 -1164 -457 -1171 0 -6 96 -8 226 -7 l226 3 126 338 127
337 580 0 580 0 126 -338 126 -337 226 -3 c125 -1 227 1 227 5 0 5 -225 580
-499 1278 l-499 1270 -286 3 -286 2 -9 -22z m418 -628 c54 -151 147 -404 207
-563 59 -158 105 -289 102 -292 -3 -3 -201 -4 -440 -3 l-436 3 100 265 c92
248 308 844 308 853 0 3 7 22 16 43 l16 39 14 -35 c7 -19 58 -159 113 -310z'
              />
            </g>
          </svg>
        </a>
      </Link>
      <ul className='hidden h-full px-4 space-x-4 font-medium 2xl:px-5 md:flex md:items-center xl:text-lg 2xl:text-xl 3xl:text-2xl'>
        <li>
          <Link href='/products'>
            <a
              className={`p-1 ${
                path[1] === 'products'
                  ? 'border-2 border-black'
                  : ' hover:text-metanoiaYellow'
              }`}
            >
              Sản phẩm
            </a>
          </Link>
        </li>
        <li>
          <Link href='/collections/sun-lust'>
            <a
              className={`p-1 ${
                path[1] === 'collections'
                  ? 'border-2 border-black'
                  : ' hover:text-metanoiaYellow'
              }`}
            >
              Bộ sưu tập
            </a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a
              className={`p-1 ${
                path[1] === 'about'
                  ? 'border-2 border-black'
                  : ' hover:text-metanoiaYellow'
              }`}
            >
              Về chúng mình
            </a>
          </Link>
        </li>
      </ul>
      <div className='flex items-center h-full p-4 md:hidden'>
        <DropdownMenu />
      </div>
    </nav>
  );
}
