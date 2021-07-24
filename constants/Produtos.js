import React from 'react';
import Text from '../componentes/text';
import icones from './icons';

export default {

    //home banx7
    home: [
        { key: 1, nav: 'NavScreen23', nome: 'Depósito', icon: 'dollar', icone: icones.deposito, iconeMenu: icones.depositoMenu },
        { key: 2, nav: 'NavScreen68', nome: 'Transferência', icon: 'exchange', icone: icones.transferencia, iconeMenu: icones.transferenciaMenu },
        { key: 3, nav: 'NavScreen38', nome: 'Pagar Conta', icon: 'barcode', icone: icones.pagar_conta, iconeMenu: icones.pagar_contaMenu },
        { key: 30, nav: 'NavScreen105', nome: 'Chave de Acesso', icon: 'key', icone: icones.token, iconeMenu: icones.tokenMenu },
        { key: 4, nav: 'NavScreen53', nome: 'Comprovantes', icon: 'file-text', icone: icones.comprovantes, iconeMenu: icones.comprovantesMenu },
        { key: 5, nav: 'NavScreen25', nome: 'Extrato', icon: 'wpforms', icone: icones.extrato, iconeMenu: icones.extratoMenu },
        { key: 6, nav: 'NavScreen30', nome: 'Cobrança', icon: 'handshake-o', icone: icones.cobranca, iconeMenu: icones.cobrancaMenu },
        { key: 7, nav: 'NavScreen94', nome: 'Pagamento Parcelado', icon: 'credit-card', icone: icones.pagamento_parcelado, iconeMenu: icones.pagamento_parceladoMenu },
        { key: 8, nav: 'NavScreen75', nome: 'Saque', icon: 'money', icone: icones.saque, iconeMenu: icones.saqueMenu },
        { key: 31, nav: 'NavScreen107', nome: 'Convênio', icon: 'credit-card', icone: icones.amigopet, iconeMenu: icones.amigopetMenu },
        { key: 29, nav: 'NavScreen102', nome: 'Amigo Pet', icon: 'credit-card', icone: icones.amigopet, iconeMenu: icones.amigopetMenu },
        { key: 9, nav: 'NavScreen36', nome: 'Cartões', icon: 'credit-card', icone: icones.cartoes, iconeMenu: icones.cartoesMenu },
        { key: 10, nav: 'NavScreen28', nome: 'Serviços', icon: 'shopping-bag', icone: icones.servicos, iconeMenu: icones.servicosMenu },
        { key: 11, nav: 'NavScreen70', nome: 'Maquininha', icon: 'calculator', icone: icones.maquininha, iconeMenu: icones.maquininhaMenu },
        { key: 12, nav: 'NavScreen19', nome: 'Pra Você', icon: 'gift', icone: icones.pravoce, iconeMenu: icones.pravoceMenu },
        { key: 13, nav: 'NavScreen18', nome: 'Benefícios', icon: 'money', icone: icones.beneficios, iconeMenu: icones.beneficiosMenu },
        { key: 14, nav: 'NavScreen78', nome: 'Investimento', icon: 'money', icone: icones.investimento, iconeMenu: icones.investimentoMenu },
        { key: 15, nav: 'NavScreen81', nome: 'Lojas Conveniadas', icon: 'map-o', icone: icones.lojas, iconeMenu: icones.lojasMenu },
        { key: 16, nav: 'NavScreen22', nome: 'Produtos Bancários', icon: 'line-chart', icone: icones.produtosbancarios, iconeMenu: icones.produtosbancariosMenu },
        { key: 17, nav: 'NavScreen83', nome: 'Dólar Digital', icon: 'dollar', icone: icones.dolardigital, iconeMenu: icones.dolardigitalMenu },
        { key: 18, nav: 'NavScreen85', nome: 'Sercash', icone: icones.dolardigital, iconeMenu: icones.dolardigitalMenu },
        { key: 19, nav: 'NavScreen32', nome: 'Câmbio', icon: 'euro', icone: icones.cambio, iconeMenu: icones.cambioMenu },
        { key: 20, nav: 'NavScreen37', nome: 'QRCode', icon: 'qrcode', icone: icones.qrcode_logado, iconeMenu: icones.qrcode_logadoMenu },
        { key: 21, nav: 'NavScreen9', nome: 'Perfil', icon: 'user', icone: icones.perfil, iconeMenu: icones.perfilMenu },
        { key: 22, nav: 'NavScreen51', nome: 'Tarifas', icon: 'list-ul', icone: icones.tarifas, iconeMenu: icones.tarifasMenu },
        { key: 23, nav: 'NavScreen88', nome: 'Informe de Rendimentos', icon: 'bar-chart', icone: icones.informe, iconeMenu: icones.informeMenu },
        { key: 24, nav: 'NavScreen10', nome: 'Ajuda', icon: 'question', icone: icones.ajuda, iconeMenu: icones.ajudaMenu },
        { key: 25, nav: 'NavScreen40', nome: 'Dispositivos', icon: 'desktop', icone: icones.dispositivos, iconeMenu: icones.dispositivosMenu },
        { key: 26, nav: 'NavScreen87', nome: 'Indicar Amigos', icon: 'users', icone: icones.indicar, iconeMenu: icones.indicarMenu },
        { key: 27, nav: 'NavScreen90', nome: 'Pró-Cidades', icon: 'globe', icone: icones.procidades, iconeMenu: icones.procidadesMenu },
        { key: 28, nav: 'sair', nome: 'Sair', icon: 'sign-out', icone: icones.sair, iconeMenu: icones.sairMenu }
    ],

    deposito: true,
    transferencia: true,
    pagarconta: true,
    comprovantes: true,
    extrato: true,
    cobrar: true,
    recarga: true,
    cartoes: true,
    servicos: true,
    maquininha: true,
    pravoce: true,
    beneficios: true,
    produtosbancarios: true,
    cambio: true,
    qrcode: true,
    perfil: true,
    ajuda: true,
    dispositivos: true,
    sair: true,
    tarifas: true,

    //home saldo
    saldodigital: true,
    saldocartao: true,
    saldolimitecredito: true,
    saldoconvenio: true,


    //deposito
    depositoboleto: true,
    transferirbancos: true,
    cofreinteligente: true,

    //transferencia
    entrecontas: true,
    outrosbancos: true,

    //extrato
    contadigital: true,
    contacartao: true,
    limitecredito: true,
    contaconvenio: true,
    controle_financeiro: true,
    comprovante_servico: true,
    extrato_gateway: true,
    extrato_investimento: true,

    //Maquininha
    compras: true,
    agenda: true,

    //beneficios
    beneficioscontinuar: true,

    //Produtos Bancários
    microcredito: true,
    microcredito_ativo: true,
    creditoimobiliario: true,
    capitalgiro: true,
    antecipacao: true,

    //ajuda
    link_email: true,
    link_tel1: true,
    link_tel2: true,
    link_tel3: true,
    link_site: true,

    //cartoes
    depositoboleto_cartao: true,
    transferirbancos_cartao: true,
    multiplas_cores: true,
    um_termo: false,
    dois_termos: true,
    valor_fixo_cartao: true,
    franquia_cartao: false,

    //beneficios
    saude: true,
    odonto: true,
    seguros: true,
    cashback: true,

    //idwall
    idwall: false,

    //sms
    sms: true,
    sms_token: false,

    //som Login
    som_abertura: false,

    //Video no login
    video_login: false,

    //Termos
    termo_uso: true,
    termo_emprestimo: true,
    termo_maquininha: true,
    termo_limite_credito: true,

    //Botao teste 
    botao_teste: false,

    //indicacao
    indicacao: false,

    //cadastro pj contrato social
    contrato_social: true,

    //cadastro pj cartao cnpj
    cartao_cnpj: false,

    //comprovante residencia
    comprovante_residencia: true,

    //estilo da home
    botoesantigos: false,
    botoesnovos: true,
    card_info_cliente: false,
    card_embaixo_saldo: true,
    frase_home: true,
    card_embaixo_menu: true,
    card_embaixo_menu2: true,
    favoritos: true,
    saldos_slide: true,
    saldos_setas: false,

    //estilo do login
    slide_imagens: true,
    imagens_fundo: false,

    //cadastro triboo deixar "false nos outros bancos"
    pular_termo_abertura: true,
    pular_tela_info_pf: true

};


