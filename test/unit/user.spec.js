import { shallowMount } from '@vue/test-utils'

import LoginPage from '@/views/Login.vue'

describe('componente Login.vue', () => {

 it('debe cambiar el valor a true', () => {
  
  /// Crea una instancia del componente
  const wrapper = shallowMount(LoginPage);

  /// Evalúa que el valor por defecto sea "false"
  expect(wrapper.vm.userActive).toBe(false);

  /// Ejecuta el metodo que cambia el valor de la variable a "true"
  wrapper.vm.activeUser();

  /// Evalúa que el nuevo valor usuarioActivo sea "true"
  expect(wrapper.vm.userActive).toBe(true);

 })

})