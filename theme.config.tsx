import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const logo = (
 
  <svg
    height="30"
    viewBox="0 0 361 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  <path   fill="currentColor" stroke="currentColor" strokeWidth="2" d="m70,16c0,20 -10,30 -20,30c10,0 20,10 20,30c0,-20 10,-30 20,-30c-10,0 -20,-10 -20,-30zm-40,-16c0,20 -10,30 -20,30c10,0 20,10 20,30c0,-20 10,-30 20,-30c-10,0 -20,-10 -20,-30zm13,42c0,20 -10,30 -20,30c10,0 20,10 20,30c0,-20 10,-30 20,-30c-10,0 -20,-10 -20,-30z" />
  <text  fill="currentColor" stroke="currentColor"  transform="matrix(2.8333420753479004,0,0,2.824115753173828,-209.00099658966064,-28.6038543034374) "  fontFamily="Helvetica, Arial, sans-serif" fontSize="24" y="35.83891" x="115.058822" >星星社</text>

    <style jsx>{`
      svg {
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      svg:hover {
        mask-position: 100%;
        transition:
          mask-position 1s ease,
          -webkit-mask-position 1s ease;
      }
    `}</style>
  </svg>
)

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/shuding/nextra'
  },
  search:{
    placeholder:'搜索自闭症的相关知识'
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra/tree/main/docs',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Nextra'
      }
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://nextra.site/og.jpeg'
        : `https://nextra.site/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta
          name="og:description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta
          name="og:title"
          content={title ? title + ' – Nextra' : 'Nextra'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
        Copyright © {new Date().getFullYear()} 54creator.cn
        </div>
        <p className="mt-6 text-xs">
          <a>冀ICP备2021023962号-1</a>
        </p>
      </div>
    )
  },
  toc: {
    backToTop: true
  }
}

export default config
