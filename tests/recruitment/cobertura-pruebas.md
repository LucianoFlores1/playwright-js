| Cobertura | Tipo de Test | Caso de Prueba (Escenario) | Objetivo del Test |
|-----------|--------------|---------------------------|------------------|
| **0% - 20%** | Navegación | Acceso al módulo Recruitment. | Validar que el usuario llega a la URL `/recruitment/viewCandidates` y ve el título "Recruitment". |
| **20% - 40%** | Happy Path (Alta) | Agregar un candidato nuevo con datos básicos. | Confirmar que se puede guardar un candidato con nombre, apellido y email válido. |
| **40% - 60%** | Escenario Negativo | Intentar guardar candidato con email inválido (sin @). | Validar que aparezca el mensaje de error "Expected format: admin@example.com". |
| **60% - 80%** | Filtros de Búsqueda | Buscar candidatos por "Vacancy" específica. | Validar que la tabla se actualiza y solo muestra candidatos para esa vacante. |
| **80% - 95%** | Flujo de Estado | Cambiar estado de "Application Initiated" a "Shortlisted". | Validar la lógica de negocio: el botón de acción debe cambiar el estado del candidato. |
| **95% - 100%** | Mantenimiento | Eliminar un registro de candidato. | Confirmar que el sistema permite el borrado y actualiza la lista en tiempo real. |