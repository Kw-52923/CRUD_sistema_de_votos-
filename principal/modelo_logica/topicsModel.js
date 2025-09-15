

const topics = require('../modelo_logica/topicsModel'); // importo el array topics en donde estan mis datos simulados

// Devuelve todos los temas simulados por votos (de mayor a menor)
const getAllTopics = () => {
    return topics.sort((a,b) => b.votes - a.votes);
};

// Busca un tema por su id. Convierte el id a numero para evitar errores si viene como string
const getTopic = (id) => {
    return topics.find(topic => topic.id === parseInt(id));
};

//  Crea un nuevo tema con titulo, votos en 0 y sin enlaces
const addTopic = (title) => {
    const newTopic = {
        id : topics.length > 0 ? Math.max(...topics.map(t => t.id)) + 1 : 1,
        title,
        votes : 0,
        links : []
    };
    topics.push(newTopic);
    return newTopic;
};

// Busca el tema por id y actualiza su titulo, si no encuentra devuelve null
const updateTopic = (id,title) => {
    const topic = getTopic(id);
    if (topic) {
        topic.title = title;
        return topic;
    }
    return null;
};

// Busca el indice del tema y lo elimina con splice
const deleteTopic = (id) => {
    const index = topics.findIndex(topic => topic.id === parseInt(id));
    if (index !== -1) {
        topics.splice(index, 1);
        return true;
    }
    return false;
};

// Crea un nuevo enlace dentro del tema indicado
const addLink = (topicId, url, description) => {
    const topic = getTopic(topicId);
    if (topic ) {
        const newLink = {
            id : topic.links.length > 0 ? Math.max(...topic.links.map(L => L.id)) + 1 : 1,
            url,
            description,
            votes : 0
        };
        topic.links.push(newLink);
        topic.links.sort((a,b) => b.votes - a.votes);
        return newLink;
    }
    return null;
};

// Busca el enlace dentro del tema y actualiza su URL y la descripcion
const updateLink = (topicId,linkId, url, description) => {
    const topic = getTopic(topicId);
    if (topic ) {
        
            const link = topic.links.find(l => l.id === parseInt(linkId));
            if (link) {
                link.url = url;
                link.description = description;
                return link;
            }
        }

        return null;
    };

// Busca el indice del tema y lo elimina
const deleteLink = (topicId,linkId) => {
    const topic = getTopic(topicId);
    if (topic ) {
        
            const index = topic.links.findIndex(l => l.id === parseInt(linkId));
            if (index !== -1) {
                topic.links.splice(index, 1);
                
                return true;
            }
        }

        return false;
    };

// Incrementa los votos del tema y reorden el array topics para que los mas votados queden arriba
const voteTopic = (id) => {
  const topic = getTopic(id);
  if (topic) {
    topic.votes++;
    topics.sort((a, b) => b.votes - a.votes);
    return topic.votes;
  }
  return null;
};

// Incrementa los votos del enlace dentro del tema y reordena los enlaces por popularidad
const voteLink = (topicId, linkId) => {
  const topic = getTopic(topicId);
  if (topic) {
    const link = topic.links.find(l => l.id === parseInt(linkId));
    if (link) {
      link.votes++;
      topic.links.sort((a, b) => b.votes - a.votes);
      return link.votes;
    }
  }
  return null;
};

// Exporta todas las funciones para que puedan ser usadas en el controlador
module.exports = {
  getAllTopics,
  getTopic,
  addTopic,
  updateTopic,
  deleteTopic,
  addLink,
  updateLink,
  deleteLink,
  voteTopic,
  voteLink
};

