import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export default ({ app }, inject) => {
  /*inject('toast', swal.mixin({
    toast: true,
    type: 'success',
    position: 'top-end',
    showConfirmButton: false,
    timer: 4000
  }));*/

  inject(
    'swal',
    Swal.mixin({
      showLoaderOnConfirm: true,
      inputClass: 'form-control',
      showCancelButton: true,
    })
  )
}
