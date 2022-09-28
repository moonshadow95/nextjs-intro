/** @type {{redirects(): Promise<[{permanent: boolean, destination: string, source: string}]>, reactStrictMode: boolean, swcMinify: boolean}} */
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects(){
    return[
      {
        source:'/old/:path*',
        destination:'/new/:path*',
        // old 로 들어오면 new 로 보내고 :path 의 모든 내용을 캐치하여 그대로 보내준다.
        // 실제로 url 이 변경된다.
        permanent:false
      }
    ]
  },
  async rewrites(){
    return[{
      source:'/api/movies',
      destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      // m
    }]
  }
}

module.exports = nextConfig
