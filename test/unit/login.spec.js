import { shallowMount } from '@vue/test-utils'
import LoginPage from '@/views/Login.vue'

test('Valida que los campos del login no esten vacíos', () => {
  // renderiza el componente
  const wrapper = shallowMount(LoginPage)

  // no debe permitir que `username` este vacío
  wrapper.setData({ user: ' '.repeat(1) })

  // verificar que se muestra el error
  expect(wrapper.find('.error').exists()).toBe(false)

  // actualiza el dato de username sea correcto
  wrapper.setData({ user: 'vivieall7' })

  // verificar que el error ha desaparecido.
  expect(wrapper.find('.error').exists()).toBe(false)

})