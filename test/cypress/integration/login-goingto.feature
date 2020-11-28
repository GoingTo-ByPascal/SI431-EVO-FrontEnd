Feature: Iniciar Sesión

    Como usuario 
    Quiero poder autenticarme con mi usuario y contraseña 
    Para poder realizar consultas de viaje, modificar mi perfil, etc.

    #Background: navegar hacia la pagina del login
    #    Given el usuario navega en el 'login' 

    @TC01
    Scenario: TC01 - Datos de usuario y password correctos
        Given el usuario que digito su usuario y contraseña correctamente 
        When de click en el botón -Ingresar-
        Then se le mostrará la pantalla de inicio de los lugares a explorar

    @TC02
    Scenario: TC02 - Datos de usuario y password incorrectos 
        Given el usuario ingresa el valor de usuario 
        And el usuario ingresa valor de contraseña 
        When el usuario da click en el botón -Ingresar-
        Then se muestra una ventana emergente con un mensaje de error 

        #Examples: '<test>'
        #        | test             | user                     | password  | errorMessage                    |
        #        | WrongPassword    | angelesviviana@gmail.com | Test123!  | Usuario o contraseña incorrecto |
        #        | WrongUser        | aaiviana@gmail.com       | Test123   | Usuario o contraseña incorrecto |

    @TC03
    Scenario:  TC03 - Datos de usuario y/o password incorrectos
        Given el usuario ingresa el valor de usuario
        And el usuario ingresa valor de contraseña
        When el usuario da click en el botón -Ingresar-
        Then se muestra una ventana emergente con un mensaje de error

        #Examples: '<test>'
        #    | test             | user                       | password | errorMessage                                                  |
        #    | NoEmail          |                            | Test123  | Verificar que el campo usuario y/o contraseña no estén vacíos |
        #    | NoPassword       | angelesviviana@gmail.com   |          | Verificar que el campo usuario y/o contraseña no estén vacíos |
        #    | NoEmail&Password |                            |          | Verificar que el campo usuario y/o contraseña no estén vacíos |
