function showTicket(user: string | null, ticket: number) {
  console.log(`Olá ${user ?? '<Padrão>'}. Seu número de bilhete é ${ticket}.`);
}

showTicket(null, 1354864513);
