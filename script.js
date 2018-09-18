/**
 * Funciones y contratos
 */

/**
* Funcion para registro de agentes participantes
* @param {mx.gob.jalisco.licitaciones.CreaAgente} solicitud con los datos del agente a crear
* @transaction
*/
async function procesaCreaAgente(solicitud) {
    // Instanciamos el factory
    const factory = getFactory();
    // Generamos una instancia del tipo Agente
    const agente = factory.newResource('mx.gob.jalisco.licitaciones','Agente',solicitud.id);
    // Llenamos los datos desde la solicitud
    agente.nombres = solicitud.nombres;
    agente.primerApellido = solicitud.primerApellido;
    agente.segundoApellido = solicitud.segundoApellido;
    // Obtenemos la identidad desde el participante actual
    agente.entidad = getCurrentParticipant();
    // Instanciamos el registro de participantes
    let registry = await  getParticipantRegistry('mx.gob.jalisco.licitaciones.Agente');
    await registry.add(agente);
  }