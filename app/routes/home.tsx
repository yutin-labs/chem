import type { Route } from './+types/home';
import { SyndromesTool } from '../components/syndromes-tool';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Chemical Syndrome Diagnosis' },
    { name: 'description', content: 'Chemical syndrome diagnosis system' },
  ];
}

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-2xl p-5 gap-4 flex bg-orange-900 rounded-b-xl">
        <a
          className="flex flex-col items-center gap-2 text-sm text-[#EF233C]"
          href="tel:028717121"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 130 48"
            className="h-12 w-auto"
          >
            <rect x="2" y="2" width="120" height="44" rx="22" fill="#FF8C42" />
            <rect x="2" y="2" width="90" height="44" rx="22" fill="#EF233C" />
            <g transform="translate(4, 4) scale(6)">
              <path
                d="M.909 2.24c.067 1.39 1.968 3.158 3.255 3.57.863.275 2.148-.269 1.64-.777L5 4.23c-.122-.123-.32-.108-.439.01l-.46.462c-.992-.54-1.408-.966-1.953-1.951l.462-.462c.119-.119.132-.317.01-.439l-.803-.803C1.37.598.883 1.715.908 2.24z"
                fill="white"
              />
              <path
                d="m.909 2.24 1.24.51.462-.46c.119-.12.132-.318.01-.44l-.803-.803C1.37.598.883 1.715.908 2.24z"
                fill="white"
                opacity="0.8"
              />
              <path
                d="M4.164 5.81c.863.275 2.148-.269 1.64-.777L5 4.23c-.122-.123-.32-.108-.439.01l-.46.462.062 1.107z"
                fill="white"
                opacity="0.8"
              />
            </g>
            <text
              x="65"
              y="34"
              fontSize="28"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              24
            </text>
            <text
              x="105"
              y="34"
              fontSize="28"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              7
            </text>
          </svg>
          <div className="font-bold text-lg">毒藥物諮詢中心</div>
        </a>
        <div className="flex flex-1 flex-col gap-1 justify-center text-right">
          <a href="tel:028717121">專線：(02) 2871-7121</a>
          <a href="tel:028757525">總機：(02) 2875-7525 #85500 或 #85519</a>
        </div>
      </div>
      <SyndromesTool />
    </>
  );
}
