# Calculadora-de-Propinas

Aplicación enfocada en el bienestar personal que permite registrar tanto alimentos ingeridos como ejercicios realizados. 
Clasifica de manera automática los registros (Comida o Ejercicio) y realiza un balance neto de calorías en tiempo real. 
Para garantizar la retención de la información ante recargas de la página o reinicios del navegador, el estado se sincroniza de forma transparente con la API de LocalStorage. 
Asimismo, implementa flujos interactivos para editar registros existentes directamente a través del formulario de entrada.

# Características Claves
- Registro dinámico: Formulario configurable que adapta sus campos según se registre un aporte alimenticio o una actividad física.
- Balance energético en tiempo real: Panel de visualización de calorías consumidas, calorías quemadas y la diferencia neta resultante.
- Edición y limpieza de datos: Carga directa de registros almacenados en el formulario para su modificación y opción de reinicio completo del contador.
- Persistencia local: Sincronización del estado de la aplicación con LocalStorage.
- Claves únicas: Empleo de la biblioteca uuid para la generación de identificadores únicos por registro.

# Stack Tecnológico
- Frontend: React, TypeScript.
- Estilos: Tailwind CSS.
- Iconografía: @heroicons/react.
- Librerías auxiliares: uuid.
- Herramientas de Construcción: Vite.

# Valor Técnico Demostrado
- Control de estados complejos con múltiples acciones asíncronas y síncronas empleando useReducer.
- Implementación de efectos secundarios controlados (useEffect) para la persistencia del estado.
- Optimización del rendimiento mediante useMemo para evitar el cálculo redundante de métricas calóricas en renders sucesivos.
