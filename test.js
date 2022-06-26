"use strict";
function showTicket(user, ticket) {
    console.log(`Olá ${user !== null && user !== void 0 ? user : '<Padrão>'}. Seu número de bilhete é ${ticket}.`);
}
showTicket(null, 1354864513);
