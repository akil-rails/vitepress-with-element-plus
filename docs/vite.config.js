import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


export default {
  plugins: [
    AutoImport({
      include: [/\.vue$/, /\.md$/],
      resolvers: [ElementPlusResolver()],
    }),    
    Components({
      dirs: ['components'],
      include: [/\.vue$/, /\.md$/],
      resolvers: [ElementPlusResolver({ ssr: false })]
    })
  ],
  ssr: { noExternal: ['element-plus'] },
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            }
          }
        }
      ]
    }
  }
}
