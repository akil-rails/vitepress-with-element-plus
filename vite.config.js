import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default {
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),    
    Components({
      dirs: ['docs/components'],
      include: [/\.vue$/, /\.md$/],
      resolvers: [ElementPlusResolver()],
    })
  ]
}
