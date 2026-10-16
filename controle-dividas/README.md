# Controle de Dívidas

Sisteminha para acompanhar consórcios, empréstimos, financiamentos e parcelamentos
— com parcelas mensais, bimestrais, trimestrais, semestrais ou anuais.

## Como usar

É um arquivo só: abra o `index.html` no navegador (clique duas vezes nele). Não precisa instalar nada.

1. Clique em **+ Novo compromisso** e informe: nome, tipo, banco/administradora, periodicidade,
   quantidade de parcelas, data da 1ª parcela e quantas você já pagou.
2. Escolha como definir o valor das parcelas:
   - **Calcular automaticamente**
     - *Empréstimo / financiamento:* valor financiado, taxa de juros (ao mês ou ao ano) e sistema
       de amortização — **Price** (parcelas iguais) ou **SAC** (amortização constante, parcelas que
       diminuem). Antes de salvar, aparece uma prévia com 1ª e última parcela, total de juros,
       **CET** (custo efetivo total) e a comparação com o outro sistema.
     - *Consórcio:* valor da carta de crédito, taxa de administração e fundo de reserva.
     - *Cobranças a mais do banco:*
       - **Seguros e tarifas por parcela**, quantos quiser, cada um com nome: valor fixo em R$
         (ex.: seguro DFI, tarifa de administração) ou **% do saldo devedor** (ex.: seguro MIP,
         seguro prestamista — diminui conforme a dívida cai).
       - **Custos da contratação financiados junto** (IOF, tarifa de cadastro, seguro à vista):
         entram no saldo e pagam juros; o CET mostra quanto isso encarece o contrato.
   - **Já sei o valor da parcela:** você digita o valor e pronto.
3. O sistema gera todas as parcelas com as datas de vencimento e, quando calculado, mostra
   amortização, juros, taxas e saldo devedor de cada uma.
4. Na tela inicial você vê:
   - quanto falta pagar no mês atual;
   - o que está em atraso;
   - o custo mensal médio (parcelas anuais/semestrais divididas por mês);
   - o saldo total que ainda falta pagar;
   - os próximos vencimentos (atrasados e próximos 45 dias), com botão **Marcar paga**.
5. Clique num compromisso para ver todas as parcelas, marcar/desmarcar pagamentos,
   fazer **amortização extra** (empréstimos/financiamentos calculados: escolha reduzir o prazo
   ou o valor das parcelas; o sistema recalcula e mostra a economia de juros antes de confirmar;
   um valor igual ou maior que o saldo quita tudo), **antecipar parcelas** (consórcio e parcelas
   informadas manualmente: paga as últimas),
   adicionar **cobranças avulsas** (ex.: tarifa anual, seguro novo) numa parcela ou em todas as
   seguintes, registrar **multa e juros por atraso** (ao marcar como paga uma parcela vencida, o
   sistema sugere o valor com multa de 2% + juros de 1% ao mês e você confirma o que pagou),
   **reajustar o valor das parcelas em aberto** (útil para consórcio e financiamento com correção),
   marcar o consórcio como **contemplado**, editar ou excluir.

**Dica:** financiamento com parcela mensal + parcela anual (intermediária/balão)? Cadastre dois
compromissos: um mensal e outro anual.

## Onde ficam os dados

Ficam salvos no próprio navegador (localStorage), só no computador/celular onde você usa.
Use **Fazer backup** de vez em quando para baixar um arquivo `.json`, e **Restaurar backup**
para carregar esse arquivo em outro navegador ou aparelho.
