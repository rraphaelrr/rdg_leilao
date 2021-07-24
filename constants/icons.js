import React from 'react';
import Layout from './Layout';
import Text from '../componentes/text';
import { Image, Linking, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from './Colors';
import Info from './info';
import { Video } from 'expo-av';


export default {


    /* acessar_conta: <Image source={require('../assets/icones/acessar-conta.png')} style={{ width: 30, height: 30 }} />, */
    /* acessar_conta: <Icon name={'id-card-o'} size={25} color={Colors.cor_3} />, */

    /* abrir_conta: <Image source={require('../assets/icones/abrir-conta.png')} style={{ width: 30, height: 30 }} />, */
    /* abrir_conta:<Icon name={'user-plus'} size={25} color={Colors.cor_3} />, */

    /* ajuda_login: <Image source={require('../assets/icones/ajuda.png')} style={{ width: 30, height: 30 }} />, */
    /* ajuda_login:<Icon name={'question-circle'} size={25} color={Colors.cor_3} />, */

    /* qrcode: <Image source={require('../assets/icones/qrcode.png')} style={{ width: 30, height: 30 }} />, */
    /* qrcode:<Icon name={'qrcode'} size={25} color={Colors.cor_3} />, */



    //ICONES DO MENU E DA HOME

    /* favoritos: <Image source={require('../assets/icones/deposito.png')} style={{ width: 30, height: 30 }} />, */
       favoritos: <Icon name={'list-ul'} size={25} color={Colors.cor_3} />,


    /* deposito: <Image source={require('../assets/icones/deposito.png')} style={{ width: 30, height: 30 }} />, */
    /* depositoMenu: <Image source={require('../assets/icones/deposito.png')} style={{ width: 30, height: 30 }} />, */

    deposito: <Icon name={'dollar'} size={25} color={Colors.cor_3} />,
    depositoMenu: <Icon name={'dollar'} size={25} color={Colors.cor_3} />,

    /* transferencia: <Image source={require('../assets/icones/transferencia.png')} style={{ width: 30, height: 30 }} />, */
    /* transferenciaMenu: <Image source={require('../assets/icones/transferencia.png')} style={{ width: 30, height: 30 }} />, */

    transferencia: <Icon name={'exchange'} size={25} color={Colors.cor_3} />,
    transferenciaMenu: <Icon name={'exchange'} size={25} color={Colors.cor_3} />,

    /* pagar_conta: <Image source={require('../assets/icones/pagar_conta.png')} style={{ width: 30, height: 30 }} />, */
    /* pagar_contaMenu: <Image source={require('../assets/icones/pagar_conta.png')} style={{ width: 30, height: 30 }} />, */

    pagar_conta: <Icon name={'barcode'} size={25} color={Colors.cor_3} />,
    pagar_contaMenu: <Icon name={'barcode'} size={25} color={Colors.cor_3} />,

    /* token: <Image source={require('../assets/icones/pagar_conta.png')} style={{ width: 30, height: 30 }} />, */
    /* tokenMenu: <Image source={require('../assets/icones/pagar_conta.png')} style={{ width: 30, height: 30 }} />, */

    token: <Icon name={'key'} size={25} color={Colors.cor_3} />,
    tokenMenu: <Icon name={'key'} size={25} color={Colors.cor_3} />,


    /* comprovantes: <Image source={require('../assets/icones/comprovantes.png')} style={{ width: 30, height: 30 }} />, */
    /* comprovantesMenu: <Image source={require('../assets/icones/comprovantes.png')} style={{ width: 30, height: 30 }} />, */

    comprovantes: <Icon name={'file-text'} size={25} color={Colors.cor_3} />,
    comprovantesMenu: <Icon name={'file-text'} size={25} color={Colors.cor_3} />,

    /* extrato: <Image source={require('../assets/icones/extrato.png')} style={{ width: 30, height: 30 }} />, */
    /* extratoMenu: <Image source={require('../assets/icones/extrato.png')} style={{ width: 30, height: 30 }} />, */

    extrato: <Icon name={'wpforms'} size={25} color={Colors.cor_3} />,
    extratoMenu: <Icon name={'wpforms'} size={25} color={Colors.cor_3} />,

    /* cobranca: <Image source={require('../assets/icones/cobranca.png')} style={{ width: 30, height: 30 }} />, */
    /* cobrancaMenu: <Image source={require('../assets/icones/cobranca.png')} style={{ width: 30, height: 30 }} />, */

    cobranca: <Icon name={'handshake-o'} size={25} color={Colors.cor_3} />,
    cobrancaMenu: <Icon name={'handshake-o'} size={25} color={Colors.cor_3} />,

    /* saque: <Image source={require('../assets/icones/saque.png')} style={{ width: 30, height: 30 }} />, */
    /* saqueMenu: <Image source={require('../assets/icones/saque.png')} style={{ width: 30, height: 30 }} />, */

    saque: <Icon name={'money'} size={25} color={Colors.cor_3} />,
    saqueMenu: <Icon name={'money'} size={25} color={Colors.cor_3} />,

    /* pagamento_parcelado: <Image source={require('../assets/icones/pagamento_parcelado.png')} style={{ width: 30, height: 30 }} />, */
    /* pagamento_parceladoMenu: <Image source={require('../assets/icones/pagamento_parcelado.png')} style={{ width: 30, height: 30 }} />, */

    pagamento_parcelado: <Icon name={'credit-card'} size={25} color={Colors.cor_3} />,
    pagamento_parceladoMenu: <Icon name={'credit-card'} size={25} color={Colors.cor_3} />,

    /* cartoes: <Image source={require('../assets/icones/cartoes.png')} style={{ width: 30, height: 30 }} />, */
    /* cartoesMenu: <Image source={require('../assets/icones/cartoes.png')} style={{ width: 30, height: 30 }} />, */

    cartoes: <Icon name={'credit-card'} size={25} color={Colors.cor_3} />,
    cartoesMenu: <Icon name={'credit-card'} size={25} color={Colors.cor_3} />,

    /* servicos: <Image source={require('../assets/icones/servicos.png')} style={{ width: 30, height: 30 }} />, */
    /* servicosMenu: <Image source={require('../assets/icones/servicos.png')} style={{ width: 30, height: 30 }} />, */

    servicos: <Icon name={'shopping-bag'} size={25} color={Colors.cor_3} />,
    servicosMenu: <Icon name={'shopping-bag'} size={25} color={Colors.cor_3} />,

    /* maquininha: <Image source={require('../assets/icones/maquininha.png')} style={{ width: 30, height: 30 }} />, */
    /* maquininhaMenu: <Image source={require('../assets/icones/maquininha.png')} style={{ width: 30, height: 30 }} />, */

    maquininha: <Icon name={'calculator'} size={25} color={Colors.cor_3} />,
    maquininhaMenu: <Icon name={'calculator'} size={25} color={Colors.cor_3} />,

    /* pravoce: <Image source={require('../assets/icones/pravoce.png')} style={{ width: 30, height: 30 }} />, */
    /* pravoceMenu: <Image source={require('../assets/icones/pravoce.png')} style={{ width: 30, height: 30 }} />, */

    pravoce: <Icon name={'gift'} size={25} color={Colors.cor_3} />,
    pravoceMenu: <Icon name={'gift'} size={25} color={Colors.cor_3} />,

    /* beneficios: <Image source={require('../assets/icones/beneficios.png')} style={{ width: 30, height: 30 }} />, */
    /* beneficiosMenu: <Image source={require('../assets/icones/beneficios.png')} style={{ width: 30, height: 30 }} />, */

    beneficios: <Icon name={'money'} size={25} color={Colors.cor_3} />,
    beneficiosMenu: <Icon name={'money'} size={25} color={Colors.cor_3} />,

    /* investimento: <Image source={require('../assets/icones/investimento.png')} style={{ width: 30, height: 30 }} />, */
    /* investimentoMenu: <Image source={require('../assets/icones/investimento.png')} style={{ width: 30, height: 30 }} />, */

    investimento: <Icon name={'money'} size={25} color={Colors.cor_3} />,
    investimentoMenu: <Icon name={'money'} size={25} color={Colors.cor_3} />,

    /* lojas: <Image source={require('../assets/icones/lojas.png')} style={{ width: 30, height: 30 }} />, */
    /* lojasMenu: <Image source={require('../assets/icones/lojas.png')} style={{ width: 30, height: 30 }} />, */

    lojas: <Icon name={'map-o'} size={25} color={Colors.cor_3} />,
    lojasMenu: <Icon name={'map-o'} size={25} color={Colors.cor_3} />,

    /* produtosbancarios: <Image source={require('../assets/icones/produtosbancarios.png')} style={{ width: 30, height: 30 }} />, */
    /* produtosbancariosMenu: <Image source={require('../assets/icones/produtosbancarios.png')} style={{ width: 30, height: 30 }} />, */

    produtosbancarios: <Icon name={'line-chart'} size={25} color={Colors.cor_3} />,
    produtosbancariosMenu: <Icon name={'line-chart'} size={25} color={Colors.cor_3} />,

    /* dolardigital: <Image source={require('../assets/icones/dolardigital.png')} style={{ width: 30, height: 30 }} />, */
    /* dolardigitalMenu: <Image source={require('../assets/icones/dolardigital.png')} style={{ width: 30, height: 30 }} />, */

    dolardigital: <Icon name={'dollar'} size={25} color={Colors.cor_3} />,
    dolardigitalMenu: <Icon name={'dollar'} size={25} color={Colors.cor_3} />,

    /* cambio: <Image source={require('../assets/icones/cambio.png')} style={{ width: 30, height: 30 }} />, */
    /* cambioMenu: <Image source={require('../assets/icones/cambio.png')} style={{ width: 30, height: 30 }} />, */

    cambio: <Icon name={'euro'} size={25} color={Colors.cor_3} />,
    cambioMenu: <Icon name={'euro'} size={25} color={Colors.cor_3} />,

    /* qrcode_logado: <Image source={require('../assets/icones/qrcode_logado.png')} style={{ width: 30, height: 30 }} />, */
    /* qrcode_logadoMenu: <Image source={require('../assets/icones/qrcode_logado.png')} style={{ width: 30, height: 30 }} />, */

    qrcode_logado: <Icon name={'qrcode'} size={25} color={Colors.cor_3} />,
    qrcode_logadoMenu: <Icon name={'qrcode'} size={25} color={Colors.cor_3} />,

    /* perfil: <Image source={require('../assets/icones/perfil.png')} style={{ width: 30, height: 30 }} />, */
    /* perfilMenu: <Image source={require('../assets/icones/perfil.png')} style={{ width: 30, height: 30 }} />, */

    perfil: <Icon name={'user'} size={25} color={Colors.cor_3} />,
    perfilMenu: <Icon name={'user'} size={25} color={Colors.cor_3} />,

    /* tarifas: <Image source={require('../assets/icones/tarifas.png')} style={{ width: 30, height: 30 }} />, */
    /* tarifasMenu: <Image source={require('../assets/icones/tarifas.png')} style={{ width: 30, height: 30 }} />, */

    tarifas: <Icon name={'list-ul'} size={25} color={Colors.cor_3} />,
    tarifasMenu: <Icon name={'list-ul'} size={25} color={Colors.cor_3} />,

    /*informe: <Image source={require('../assets/icones/informe.png')} style={{ width: 30, height: 30 }} />, */
    /*informeMenu: <Image source={require('../assets/icones/informe.png')} style={{ width: 30, height: 30 }} />, */

    informe: <Icon name={'bar-chart'} size={25} color={Colors.cor_3} />,
    informeMenu: <Icon name={'bar-chart'} size={25} color={Colors.cor_3} />,    

    /*ajuda: <Image source={require('../assets/icones/ajuda.png')} style={{ width: 30, height: 30 }} />, */
    /*ajudaMenu: <Image source={require('../assets/icones/ajuda.png')} style={{ width: 30, height: 30 }} />, */

    ajuda: <Icon name={'question'} size={25} color={Colors.cor_3} />,
    ajudaMenu: <Icon name={'question'} size={25} color={Colors.cor_3} />,

    /*dispositivos: <Image source={require('../assets/icones/dispositivos.png')} style={{ width: 30, height: 30 }} />, */
    /*dispositivosMenu: <Image source={require('../assets/icones/dispositivos.png')} style={{ width: 30, height: 30 }} />, */

    dispositivos: <Icon name={'desktop'} size={25} color={Colors.cor_3} />,
    dispositivosMenu: <Icon name={'desktop'} size={25} color={Colors.cor_3} />,

    /*indicar: <Image source={require('../assets/icones/indicar.png')} style={{ width: 30, height: 30 }} />, */
    /*indicarMenu: <Image source={require('../assets/icones/indicar.png')} style={{ width: 30, height: 30 }} />, */

    indicar: <Icon name={'users'} size={25} color={Colors.cor_3} />,
    indicarMenu: <Icon name={'users'} size={25} color={Colors.cor_3} />,

    /*procidades: <Image source={require('../assets/icones/procidades.png')} style={{ width: 30, height: 30 }} />, */
    /*procidadesMenu: <Image source={require('../assets/icones/procidades.png')} style={{ width: 30, height: 30 }} />, */

    procidades: <Icon name={'globe'} size={25} color={Colors.cor_3} />,
    procidadesMenu: <Icon name={'globe'} size={25} color={Colors.cor_3} />,

    /*amigopet: <Image source={require('../assets/icones/procidades.png')} style={{ width: 30, height: 30 }} />, */
    /*amigopetMenu: <Image source={require('../assets/icones/procidades.png')} style={{ width: 30, height: 30 }} />, */

    amigopet: <Icon name={'paw'} size={25} color={Colors.cor_3} />,
    amigopetMenu: <Icon name={'paw'} size={25} color={Colors.cor_3} />,


    /*sair: <Image source={require('../assets/icones/sair.png')} style={{ width: 30, height: 30 }} />, */
    /*sairMenu: <Image source={require('../assets/icones/sair.png')} style={{ width: 30, height: 30 }} />, */

    sair: <Icon name={'sign-out'} size={35} color={Colors.cor_1} style={{alignSelf: 'center', marginLeft: 150}}/>,
    sairMenu: <Icon name={'sign-out'} size={25} color={Colors.cor_3} />,


    //menu e notificações

    /*menu: <Image source={require('../assets/icones/menu.png')} style={{ width: 30, height: 30 }} />, */
    menu: <Icon name={'bars'} size={25} color={Colors.cor_3} />,

    /*notificacoes: <Image source={require('../assets/icones/notificacoes.png')} style={{ width: 30, height: 30 }} />, */
    notificacoes: <Icon name={'bell-o'} size={25} color={Colors.cor_3} />,

};

