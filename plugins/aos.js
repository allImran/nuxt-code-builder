import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..
export default ({ app }) => {
  app.AOS = new AOS.init({ disable: 'phone' }) // eslint-disable-line new-cap
}
