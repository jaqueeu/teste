# Controle de Dívidas

Sisteminha para acompanhar consórcios, empréstimos, financiamentos e parcelamentos
— com parcelas mensais, bimestrais, trimestrais, semestrais ou anuais.

## Como usar

É um arquivo só: abra o `index.html` no navegador (clique duas vezes nele). Não precisa instalar nada.

1. Clique em **+ Novo compromisso** e informe: nome, tipo, banco/administradora, valor da parcela,
   periodicidade, quantidade de parcelas, data da 1ª parcela e quantas você já pagou.
2. O sistema gera todas as parcelas com as datas de vencimento.
3. Na tela inicial você vê:
   - quanto falta pagar no mês atual;
   - o que está em atraso;
   - o custo mensal médio (parcelas anuais/semestrais divididas por mês);
   - o saldo total que ainda falta pagar;
   - os próximos vencimentos (atrasados e próximos 45 dias), com botão **Marcar paga**.
4. Clique num compromisso para ver todas as parcelas, marcar/desmarcar pagamentos,
   **reajustar o valor das parcelas em aberto** (útil para consórcio e financiamento com correção),
   marcar o consórcio como **contemplado**, editar ou excluir.

**Dica:** financiamento com parcela mensal + parcela anual (intermediária/balão)? Cadastre dois
compromissos: um mensal e outro anual.

## Onde ficam os dados

Ficam salvos no próprio navegador (localStorage), só no computador/celular onde você usa.
Use **Fazer backup** de vez em quando para baixar um arquivo `.json`, e **Restaurar backup**
para carregar esse arquivo em outro navegador ou aparelho.
