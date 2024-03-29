
/**
 * 
 * @param {HTMLParagraphElement} element 
 */
export const adviceComponent = ( elementCount, elementParagraph ) => {
    randomAdvice()
    .then(({slip}) => {

        elementCount.innerHTML = slip.id;
        elementParagraph.innerHTML = slip.advice;
    }).catch(error => {
        
        elementParagraph.innerHTML = error;
    })
}

/**
 * 
 * @returns {Promise<String>}
 */
const randomAdvice = () => {
    
    return fetch('https://api.adviceslip.com/advice')
    .then((respuesta) => {
        if(!respuesta.ok){
            return Promise.reject('La solicitud no fue exitosa');
        }
        
        return respuesta.json();
    })
}